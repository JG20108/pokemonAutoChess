import { getAltFormForPlayer, PkmsWithAltForms } from "../config"
import Player from "../models/colyseus-models/player"
import { Pokemon } from "../models/colyseus-models/pokemon"
import PokemonFactory from "../models/pokemon-factory"
import { getPokemonData } from "../models/precomputed/precomputed-pokemon-data"
import { PRECOMPUTED_POKEMONS_PER_RARITY } from "../models/precomputed/precomputed-rarity"
import { getRegularsTier1 } from "../models/shop"
import GameState from "../rooms/states/game-state"
import { Rarity } from "../types/enum/Game"
import { Pkm, PkmRegionalVariants } from "../types/enum/Pokemon"
import { Synergy } from "../types/enum/Synergy"
import { getPokemonCustomFromAvatar } from "../utils/avatar"
import { getFirstAvailablePositionInBench } from "../utils/board"
import { min } from "../utils/number"
import { pickRandomIn, simpleHashSeededCoinFlip } from "../utils/random"
import { getUnitPowerScore } from "./bot-logic"
import { createRandomEgg } from "./eggs"

type PseudoStats = { hp: number; atk: number; def: number; speDef: number }

/**
 * Normalized base stats applied exclusively in PSEUDO_JOURNEY mode.
 * All 3-star finals share HP=240 and ATK=24 for equal offensive power.
 * DEF + SpeDef give each line a distinct survivability profile.
 * Speed is intentionally left unchanged (already part of each pokemon's identity).
 */
export const PSEUDO_JOURNEY_NORMALIZED_STATS: Partial<Record<Pkm, PseudoStats>> =
  {
    // ── Goomy line (Dragon/Aquatic/Amorphous) ─ amorphous tank, low speed
    [Pkm.GOOMY]: { hp: 85, atk: 7, def: 2, speDef: 5 },
    [Pkm.SLIGOO]: { hp: 155, atk: 14, def: 4, speDef: 8 },
    [Pkm.GOODRA]: { hp: 240, atk: 24, def: 6, speDef: 14 },
    [Pkm.HISUI_SLIGGOO]: { hp: 155, atk: 14, def: 8, speDef: 6 },
    [Pkm.HISUI_GOODRA]: { hp: 240, atk: 24, def: 12, speDef: 10 },

    // ── Bagon line (Dragon/Monster) ─ standard melee attacker
    [Pkm.BAGON]: { hp: 85, atk: 7, def: 5, speDef: 5 },
    [Pkm.SHELGON]: { hp: 155, atk: 14, def: 10, speDef: 9 },
    [Pkm.SALAMENCE]: { hp: 240, atk: 24, def: 12, speDef: 11 },

    // ── Larvitar line (Dark/Monster/Rock) ─ high physical defence
    [Pkm.LARVITAR]: { hp: 85, atk: 7, def: 6, speDef: 4 },
    [Pkm.PUPITAR]: { hp: 155, atk: 14, def: 12, speDef: 8 },
    [Pkm.TYRANITAR]: { hp: 240, atk: 24, def: 18, speDef: 10 },

    // ── Deino line (Dragon/Dark, range=2) ─ glass cannon ranged
    [Pkm.DEINO]: { hp: 85, atk: 7, def: 3, speDef: 3 },
    [Pkm.ZWEILOUS]: { hp: 155, atk: 14, def: 6, speDef: 6 },
    [Pkm.HYDREIGON]: { hp: 240, atk: 24, def: 8, speDef: 8 },

    // ── Dratini line (Dragon/Flying/Aquatic) ─ balanced all-rounder
    [Pkm.DRATINI]: { hp: 85, atk: 7, def: 5, speDef: 6 },
    [Pkm.DRAGONAIR]: { hp: 155, atk: 14, def: 10, speDef: 10 },
    [Pkm.DRAGONITE]: { hp: 240, atk: 24, def: 14, speDef: 14 },

    // ── Jangmo-o line (Dragon/Fighting/Sound) ─ balanced fighter
    [Pkm.JANGMO_O]: { hp: 85, atk: 7, def: 5, speDef: 5 },
    [Pkm.HAKAMO_O]: { hp: 155, atk: 14, def: 10, speDef: 10 },
    [Pkm.KOMMO_O]: { hp: 240, atk: 24, def: 14, speDef: 12 },

    // ── Gible line (Dragon/Ground/Monster) ─ fast attacker
    [Pkm.GIBLE]: { hp: 85, atk: 7, def: 4, speDef: 4 },
    [Pkm.GABITE]: { hp: 155, atk: 14, def: 8, speDef: 7 },
    [Pkm.GARCHOMP]: { hp: 240, atk: 24, def: 10, speDef: 8 },

    // ── Beldum line (Psychic/Steel/Artificial) ─ ultimate tank
    [Pkm.BELDUM]: { hp: 85, atk: 7, def: 7, speDef: 6 },
    [Pkm.METANG]: { hp: 155, atk: 14, def: 13, speDef: 10 },
    [Pkm.METAGROSS]: { hp: 240, atk: 24, def: 18, speDef: 14 }
  }

export function applyPseudoJourneyNormalizedStats(pokemon: Pokemon): void {
  const stats = PSEUDO_JOURNEY_NORMALIZED_STATS[pokemon.name]
  if (!stats) return
  pokemon.hp = stats.hp
  pokemon.maxHP = stats.hp
  pokemon.atk = stats.atk
  pokemon.def = stats.def
  pokemon.speDef = stats.speDef
}

// Dreepy excluded: uses HatchEvolutionRule (won't evolve via free copies)
// Frigibax excluded: ULTRA rarity with 150 HP / 15 ATK base, grossly stronger than the rest
export const PseudoLegendaryPool: Pkm[] = [
  Pkm.DRATINI,
  Pkm.LARVITAR,
  Pkm.BAGON,
  Pkm.BELDUM,
  Pkm.GIBLE,
  Pkm.DEINO,
  Pkm.GOOMY,
  Pkm.JANGMO_O
]

export function pickPseudoLegendaries(): Pkm[] {
  return [...PseudoLegendaryPool]
}

export function pickAllSynergies(): Synergy[] {
  return Object.values(Synergy)
}

export function spawnDIAYAvatar(player: Player): Pokemon {
  const {
    name,
    emotion,
    shiny = false
  } = getPokemonCustomFromAvatar(player.avatar)
  player.firstPartner = name
  let powerScore = getUnitPowerScore(name)

  switch (player.firstPartner) {
    case Pkm.AEGISLASH_BLADE:
      player.firstPartner = Pkm.AEGISLASH
      break

    case Pkm.HOOPA_UNBOUND:
      player.firstPartner = Pkm.HOOPA
      break

    case Pkm.MINIOR_KERNEL_BLUE:
    case Pkm.MINIOR_KERNEL_GREEN:
    case Pkm.MINIOR_KERNEL_ORANGE:
    case Pkm.MINIOR_KERNEL_RED:
      player.firstPartner = Pkm.MINIOR
      break

    case Pkm.MORPEKO_HANGRY:
      player.firstPartner = Pkm.MORPEKO
      break

    case Pkm.DARMANITAN_ZEN:
      player.firstPartner = Pkm.DARMANITAN
      break

    case Pkm.COSMOG:
    case Pkm.POIPOLE:
    case Pkm.CHIMECHO:
    case Pkm.GIMMIGHOUL:
      powerScore = 5
      break

    case Pkm.COSMOEM:
      powerScore = 6
      break

    case Pkm.NAGANADEL:
    case Pkm.GHOLDENGO:
      powerScore = 8
      break
  }

  let avatar: Pokemon
  if (player.firstPartner === Pkm.EGG) {
    avatar = createRandomEgg(player, false)
    powerScore = 5
  } else {
    avatar = PokemonFactory.createPokemonFromName(player.firstPartner, {
      emotion,
      shiny
    })
  }

  avatar.positionX = getFirstAvailablePositionInBench(player.board) ?? 0
  avatar.positionY = 0

  if (avatar.name === Pkm.EGG) {
    powerScore = 5
    if (avatar.shiny) {
      player.money = 1
    }
  }
  if (avatar.rarity === Rarity.HATCH) {
    powerScore = [5, 6, 7][avatar.stars] ?? 7
  }
  if (avatar.rarity === Rarity.SPECIAL) {
    powerScore = [1, 3, 7, 7][avatar.stars - 1] ?? 7
  }
  if (powerScore < 5) {
    player.money += 55 - Math.round(10 * powerScore)
  } else {
    avatar.ap = min(-100)(avatar.ap - (powerScore - 5) * 10)
    avatar.addAttack(-Math.round(avatar.atk * (powerScore - 5) * 0.1))
  }
  const bonusHP = Math.round(150 - powerScore * 30)
  avatar.maxHP = min(10)(avatar.maxHP + bonusHP)
  avatar.hp = avatar.maxHP
  return avatar
}

export function pickFirstPartners(player: Player, state: GameState): Pkm[] {
  const coinFlip = simpleHashSeededCoinFlip(state.preparationId)
  const rarityPartner = coinFlip ? Rarity.COMMON : Rarity.UNCOMMON
  return getRegularsTier1(PRECOMPUTED_POKEMONS_PER_RARITY[rarityPartner])
    .filter((p) => getPokemonData(p).stages === 3)
    .map((pkm) => {
      if (pkm in PkmRegionalVariants) {
        const regionalVariants = PkmRegionalVariants[pkm]!.filter((p) =>
          player.regionalPokemons.includes(p)
        )
        if (regionalVariants.length > 0) pkm = pickRandomIn(regionalVariants)
      }
      if (PkmsWithAltForms.includes(pkm)) {
        pkm = getAltFormForPlayer(pkm, player)
      }
      return pkm
    })
}
