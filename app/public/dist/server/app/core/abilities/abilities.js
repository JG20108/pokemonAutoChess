"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClangorousSoulStrategy = exports.ChloroblastStrategy = exports.ExplosionStrategy = exports.PoisonJabStrategy = exports.UTurnStrategy = exports.KingShieldStrategy = exports.HypnosisStrategy = exports.OverheatStrategy = exports.DarkVoidStrategy = exports.TwistingNetherStrategy = exports.RazorWindStrategy = exports.PsychUpStrategy = exports.LockOnStrategy = exports.LeechSeedStrategy = exports.FlameChargeStrategy = exports.MysticalFireStrategy = exports.ElectroWebStrategy = exports.SchoolingStrategy = exports.AquaJetStrategy = exports.TimeTravelStrategy = exports.AuroraVeilStrategy = exports.ElectroBoostStrategy = exports.DynamicPunchStrategy = exports.DynamaxCannonStrategy = exports.DracoEnergyStrategy = exports.DiamondStormStrategy = exports.CrabHammerStrategy = exports.ChatterStrategy = exports.PsychicStrategy = exports.GrassySurgeStrategy = exports.MistySurgeStrategy = exports.PsychicSurgeStrategy = exports.ElectricSurgeStrategy = exports.JudgementStrategy = exports.IllusionStrategy = exports.WonderGuardStrategy = exports.KnowledgeThiefStrategy = exports.ConfusingMindStrategy = exports.SlackOffStrategy = exports.SongOfDesireStrategy = exports.EarthquakeStrategy = exports.TeaTimeStrategy = exports.SoftBoiledStrategy = exports.MindBlownStrategy = exports.PickupStrategy = exports.PaydayStrategy = exports.BeatUpStrategy = exports.GlaciateStrategy = exports.FusionBoltStrategy = exports.BlueFlareStrategy = void 0;
exports.DracoMeteorStrategy = exports.ThunderStrategy = exports.ThunderShockStrategy = exports.SolarBeamStrategy = exports.HydroPumpStrategy = exports.FlameThrowerStrategy = exports.HeatWaveStrategy = exports.InfernalParadeStrategy = exports.WheelOfFireStrategy = exports.RockSlideStrategy = exports.GuillotineStrategy = exports.SeismicTossStrategy = exports.FieryDanceStrategy = exports.FireBlastStrategy = exports.ConfusionStrategy = exports.SingStrategy = exports.ObstructStrategy = exports.ProtectStrategy = exports.BlizzardStrategy = exports.ToxicStrategy = exports.NightmareStrategy = exports.SeedFlareStrategy = exports.OriginPulseStrategy = exports.SpikeArmorStrategy = exports.HealBlockStrategy = exports.RoarOfTimeStrategy = exports.RockTombStrategy = exports.RockSmashStrategy = exports.DoubleEdgeStrategy = exports.HeadSmashStrategy = exports.NuzzleStrategy = exports.AccelerockStrategy = exports.VoltSwitchStrategy = exports.ShadowCloneStrategy = exports.HyperVoiceStrategy = exports.PetalDanceStrategy = exports.FutureSightStrategy = exports.EchoStrategy = exports.TriAttackStrategy = exports.GrassWhistleStrategy = exports.TropKickStrategy = exports.HighJumpKickStrategy = exports.DisarmingVoiceStrategy = exports.FairyWindStrategy = exports.RelicSongStrategy = exports.GrowlStrategy = exports.AuroraBeamStrategy = exports.ShadowBoneStrategy = exports.BonemerangStrategy = exports.LiquidationStrategy = void 0;
exports.VenoshockStrategy = exports.EntanglingThreadStrategy = exports.StringShotStrategy = exports.BugBuzzStrategy = exports.ShadowBallStrategy = exports.HornDrillStrategy = exports.StompStrategy = exports.TormentStrategy = exports.IngrainStrategy = exports.SteamEruptionStrategy = exports.IcicleCrashStrategy = exports.DragonBreathStrategy = exports.AquaTailStrategy = exports.DragonTailStrategy = exports.XScissorStrategy = exports.WaterfallStrategy = exports.LeafBladeStrategy = exports.ThunderCageStrategy = exports.MetalBurstStrategy = exports.SecretSwordStrategy = exports.SacredSwordCavernStrategy = exports.SacredSwordIronStrategy = exports.SacredSwordGrassStrategy = exports.PresentStrategy = exports.PsybeamStrategy = exports.FickleBeamStrategy = exports.SyrupBombStrategy = exports.NutrientsStrategy = exports.GravAppleStrategy = exports.AppleAcidStrategy = exports.BiteStrategy = exports.SmokeScreenStrategy = exports.DiveStrategy = exports.DischargeStrategy = exports.SludgeWaveStrategy = exports.SludgeStrategy = exports.TailwindStrategy = exports.ChargeStrategy = exports.BlastBurnStrategy = exports.IronTailStrategy = exports.SoakStrategy = exports.IronDefenseStrategy = exports.DefenseCurlStrategy = exports.CosmicPowerSunStrategy = exports.CosmicPowerMoonStrategy = exports.CalmMindStrategy = exports.NaturalGiftStrategy = exports.LunarBlessingStrategy = exports.WishStrategy = exports.BlazeKickStrategy = void 0;
exports.SilverWindStrategy = exports.PoisonPowderStrategy = exports.CounterStrategy = exports.SplashStrategy = exports.PeckStrategy = exports.SearingShotStrategy = exports.FireSpinStrategy = exports.DigStrategy = exports.ShellTrapStrategy = exports.HealOrderStrategy = exports.GrowthStrategy = exports.HexStrategy = exports.MimicStrategy = exports.DeathWingStrategy = exports.GeomancyStrategy = exports.TripleKickStrategy = exports.HeadbuttStrategy = exports.MawashiGeriStrategy = exports.MegaPunchStrategy = exports.MachPunchStrategy = exports.ForecastStrategy = exports.PlasmaFistStrategy = exports.ShadowSneakStrategy = exports.RazorLeafStrategy = exports.WaterShurikenStrategy = exports.SpiritShackleStrategy = exports.AgilityStrategy = exports.FlyingPressStrategy = exports.SkyAttackShadowStrategy = exports.SkyAttackStrategy = exports.MetronomeStrategy = exports.DragonDartsStrategy = exports.SparklingAriaStrategy = exports.FakeTearsStrategy = exports.SpringtideStormStrategy = exports.BleakwindStormStrategy = exports.WildboltStormStrategy = exports.SandsearStormStrategy = exports.FleurCannonStrategy = exports.HurricaneStrategy = exports.MeteorMashStrategy = exports.StunSporeStrategy = exports.KnockOffStrategy = exports.ThiefStrategy = exports.SpectralThiefStrategy = exports.TakeHeartStrategy = exports.NastyPlotStrategy = exports.TeleportStrategy = exports.HappyHourStrategy = exports.LeechLifeStrategy = void 0;
exports.QuiverDanceStrategy = exports.StruggleBugStrategy = exports.StickyWebStrategy = exports.SpikesStrategy = exports.StealthRocksStrategy = exports.MagicalLeafStrategy = exports.BraveBirdStrategy = exports.PoisonGasStrategy = exports.LungeStrategy = exports.AquaRingStrategy = exports.AssuranceStrategy = exports.FissureStrategy = exports.AssistStrategy = exports.CloseCombatStrategy = exports.TeeterDanceStrategy = exports.SuperFangStrategy = exports.ParabolicChargeStrategy = exports.AerialAceStrategy = exports.PlayRoughStrategy = exports.WaterPulseStrategy = exports.AttractStrategy = exports.MagnetRiseStrategy = exports.ShelterStrategy = exports.LavaPlumeStrategy = exports.SmogStrategy = exports.AnchorShotStrategy = exports.WhirlpoolStrategy = exports.PyroBallStrategy = exports.AstralBarrageStrategy = exports.HelpingHandStrategy = exports.ShellSmashStrategy = exports.MagicBounceStrategy = exports.LinkCableStrategy = exports.MudBubbleStrategy = exports.LusterPurgeStrategy = exports.MistBallStrategy = exports.HailStrategy = exports.EruptionStrategy = exports.FellStingerStrategy = exports.FakeOutStrategy = exports.DireClawStrategy = exports.SlashingClawStrategy = exports.MagmaStormStrategy = exports.ThrashStrategy = exports.IceBallStrategy = exports.RolloutStrategy = exports.AbsorbStrategy = exports.AcrobaticsStrategy = exports.GigatonHammerStrategy = exports.IcyWindStrategy = void 0;
exports.DetectStrategy = exports.AromatherapyStrategy = exports.TickleStrategy = exports.FurySwipesStrategy = exports.LickStrategy = exports.AuraWheelStrategy = exports.ShieldsUpStrategy = exports.ShieldsDownStrategy = exports.KowtowCleaveStrategy = exports.NightSlashStrategy = exports.MagnetBombStrategy = exports.ShadowPunchStrategy = exports.ShedTailStrategy = exports.PsychicFangsStrategy = exports.TransformStrategy = exports.OverdriveStrategy = exports.LovelyKissStrategy = exports.SketchStrategy = exports.AuraSphereStrategy = exports.CrushGripStrategy = exports.PoltergeistStrategy = exports.DoomDesireStrategy = exports.CurseStrategy = exports.TranseStrategy = exports.RecoverStrategy = exports.MakeItRainStrategy = exports.GoldRushStrategy = exports.FishiousRendStrategy = exports.OutrageStrategy = exports.SlashStrategy = exports.RetaliateStrategy = exports.MagicPowderStrategy = exports.FloralHealingStrategy = exports.BarbBarrageStrategy = exports.VineWhipStrategy = exports.BodySlamStrategy = exports.EggBombStrategy = exports.AirSlashStrategy = exports.SnipeShotStrategy = exports.HyperspaceFuryStrategy = exports.UnboundStrategy = exports.AcidSprayStrategy = exports.WhirlwindStrategy = exports.SandTombStrategy = exports.ScreechStrategy = exports.PopulationBombStrategy = exports.ChargeBeamStrategy = exports.NightShadeStrategy = exports.PrismaticLaserStrategy = exports.TailGlowStrategy = void 0;
exports.PurifyStrategy = exports.DoubleShockStrategy = exports.GulpMissileStrategy = exports.InfestationStrategy = exports.GravityStrategy = exports.FairyLockStrategy = exports.DrainPunchStrategy = exports.FireLashStrategy = exports.CrushClawStrategy = exports.RockHeadStrategy = exports.FlashStrategy = exports.StoneAxeStrategy = exports.MoonDreamStrategy = exports.MuddyWaterStrategy = exports.AncientPowerStrategy = exports.GunkShotStrategy = exports.BounceStrategy = exports.RapidSpinStrategy = exports.BulldozeStrategy = exports.HeavySlamStrategy = exports.PsyShockStrategy = exports.StoneEdgeStrategy = exports.DarkHarvestStrategy = exports.PowerWhipStrategy = exports.TorchSongStrategy = exports.PsyshieldBashStrategy = exports.TailWhipStrategy = exports.ThunderFangStrategy = exports.IceFangStrategy = exports.FireFangStrategy = exports.CrossPoisonStrategy = exports.CrunchStrategy = exports.SparkStrategy = exports.DreamEaterStrategy = exports.PsystrikeStrategy = exports.PollenPuffStrategy = exports.PsychoBoostStrategy = exports.ExtremeSpeedStrategy = exports.FacadeStrategy = exports.IceHammerStrategy = exports.ZapCannonStrategy = exports.SheerColdStrategy = exports.SpiritBreakStrategy = exports.MantisBladesStrategy = exports.BloodMoonStrategy = exports.MoongeistBeamStrategy = exports.SunsteelStrikeStrategy = exports.PetalBlizzardStrategy = exports.MultiAttackStrategy = exports.SpacialRendStrategy = void 0;
exports.SpicyExtractStrategy = exports.SaltCureStrategy = exports.FrostBreathStrategy = exports.DragonPulseStrategy = exports.FreezeDryStrategy = exports.BoltBeakStrategy = exports.DarkLariatStrategy = exports.WonderRoomStrategy = exports.ColumnCrushStrategy = exports.HardenStrategy = exports.StrengthStrategy = exports.SurfStrategy = exports.FlyStrategy = exports.CutStrategy = exports.BulkUpStrategy = exports.TauntStrategy = exports.BrickBreakStrategy = exports.RageStrategy = exports.TopsyTurvyStrategy = exports.BoneArmorStrategy = exports.FirestarterStrategy = exports.MetalClawStrategy = exports.MortalSpinStrategy = exports.PowerHugStrategy = exports.BurnUpStrategy = exports.CoreEnforcerStrategy = exports.ThousandArrowsStrategy = exports.LandsWrathStrategy = exports.ViseGripStrategy = exports.FieryWrathStrategy = exports.ThunderousKickStrategy = exports.FreezingGlareStrategy = exports.TrickOrTreatStrategy = exports.WoodHammerStrategy = exports.PoisonStingStrategy = exports.ShoreUpStrategy = exports.YawnStrategy = exports.BideStrategy = exports.SteelWingStrategy = exports.ForcePalmStrategy = exports.IvyCudgelStrategy = exports.RoarStrategy = exports.DoubleIronBashStrategy = exports.FoulPlayStrategy = exports.GlaiveRushStrategy = exports.PsychoShiftStrategy = exports.OctazookaStrategy = exports.EntrainmentStrategy = exports.CharmStrategy = exports.PastelVeilStrategy = void 0;
exports.AbilityStrategies = exports.SuctionHealStrategy = exports.ArmorCannonStrategy = exports.BitterBladeStrategy = exports.ScaleShotStrategy = exports.SolarBladeStrategy = exports.FlowerTrickStrategy = exports.ElectroShotStrategy = exports.RoostStrategy = exports.FilletAwayStrategy = exports.MalignantChainStrategy = exports.MudShotStrategy = exports.HornAttackStrategy = exports.DragonClawStrategy = exports.DecorateStrategy = exports.SwallowStrategy = exports.SweetScentStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const ability_strategy_1 = require("./ability-strategy");
const hidden_power_1 = require("./hidden-power");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const pokemon_entity_1 = require("../pokemon-entity");
const Passive_1 = require("../../types/enum/Passive");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const function_1 = require("../../utils/function");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const orientation_1 = require("../../utils/orientation");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const effect_1 = require("../effect");
const simulation_command_1 = require("../simulation-command");
const eggs_1 = require("../../core/eggs");
const broadcastAbility = (pokemon, { skill = pokemon.skill, positionX = pokemon.positionX, positionY = pokemon.positionY, orientation = pokemon.orientation, targetX = pokemon.targetX, targetY = pokemon.targetY, delay }) => {
    const room = pokemon.simulation.room;
    const players = room.state.players;
    for (const client of room.clients) {
        const player = players.get(client.auth.uid);
        if (player && player.spectatedPlayerId) {
            const spectatedPlayer = players.get(player.spectatedPlayerId);
            if (spectatedPlayer &&
                spectatedPlayer.simulationId === pokemon.simulation.id) {
                client.send(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill,
                    positionX,
                    positionY,
                    orientation,
                    targetX,
                    targetY,
                    delay
                });
            }
        }
    }
};
class BlueFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const fireLevel = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies.get(Synergy_1.Synergy.FIRE);
        const damage = 50 + (fireLevel !== null && fireLevel !== void 0 ? fireLevel : 0) * 10;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, 250));
    }
}
exports.BlueFlareStrategy = BlueFlareStrategy;
class FusionBoltStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const electricLevel = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies.get(Synergy_1.Synergy.ELECTRIC);
        const damage = 50 + (electricLevel !== null && electricLevel !== void 0 ? electricLevel : 0) * 10;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, 250));
    }
}
exports.FusionBoltStrategy = FusionBoltStrategy;
class GlaciateStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const iceSynergyLevel = (_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies.get(Synergy_1.Synergy.ICE)) !== null && _b !== void 0 ? _b : 0;
        const damage = 50 + iceSynergyLevel * 10;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, 250));
    }
}
exports.GlaciateStrategy = GlaciateStrategy;
class BeatUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        for (let i = 0; i < pokemon.stars; i++) {
            const houndour = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.HOUNDOUR, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(pokemon, pokemon.team);
            const entity = pokemon.simulation.addPokemon(houndour, coord.x, coord.y, pokemon.team, true);
            const scale = (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1);
            entity.hp = (0, number_1.min)(1)(Math.round(houndour.hp * scale));
            entity.life = entity.hp;
        }
    }
}
exports.BeatUpStrategy = BeatUpStrategy;
class PaydayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = Math.floor(((_a = [30, 60, 90][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 90) * (1 + (0.5 * pokemon.ap) / 100));
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        if (death && pokemon.player) {
            pokemon.player.addMoney(pokemon.stars, true, pokemon);
            pokemon.count.moneyCount += pokemon.stars;
        }
    }
}
exports.PaydayStrategy = PaydayStrategy;
class PickupStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        if (target.items.size > 0 && pokemon.items.size < 3) {
            const item = target.items.values().next().value;
            if (item) {
                target.removeItem(item);
                pokemon.addItem(item);
            }
        }
        else {
            if (target.player) {
                const moneyStolen = (0, number_1.max)(target.player.money)(pokemon.stars);
                target.player.addMoney(-moneyStolen, false, target);
                if (pokemon.player) {
                    pokemon.player.addMoney(moneyStolen, true, pokemon);
                    pokemon.count.moneyCount += moneyStolen;
                }
            }
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PickupStrategy = PickupStrategy;
class MindBlownStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(pokemon.life / 2, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.MindBlownStrategy = MindBlownStrategy;
class SoftBoiledStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                broadcastAbility(pokemon, { positionX: x, positionY: y });
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.clearNegativeStatus();
            }
        });
    }
}
exports.SoftBoiledStrategy = SoftBoiledStrategy;
class TeaTimeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                broadcastAbility(pokemon, { positionX: x, positionY: y });
                tg.handleHeal(heal, pokemon, 1, crit);
                const berry = (0, schemas_1.values)(tg.items).find((item) => Item_1.Berries.includes(item));
                if (berry) {
                    tg.eatBerry(berry);
                }
            }
        });
    }
}
exports.TeaTimeStrategy = TeaTimeStrategy;
class EarthquakeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        board.forEach((x, y, tg) => {
            if ((tg && pokemon.team !== tg.team && pokemon.positionY === y) ||
                (tg && pokemon.team !== tg.team && pokemon.positionX === x)) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(pokemon, { positionX: x, positionY: y });
            }
        });
    }
}
exports.EarthquakeStrategy = EarthquakeStrategy;
class SongOfDesireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        const duration = 3000;
        const count = 2;
        for (let i = 0; i < count; i++) {
            const targetCharmed = rank[i];
            if (targetCharmed) {
                targetCharmed.status.triggerCharm(duration, targetCharmed, pokemon, false);
                targetCharmed.addAttack(-3, pokemon, 1, crit);
            }
        }
    }
}
exports.SongOfDesireStrategy = SongOfDesireStrategy;
class SlackOffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.status.clearNegativeStatus();
        const healFactor = pokemon.stars === 3 ? 0.5 : pokemon.stars === 2 ? 0.4 : 0.3;
        pokemon.handleHeal(pokemon.hp * healFactor, pokemon, 0.5, crit);
        pokemon.status.triggerSleep(5000, pokemon);
    }
}
exports.SlackOffStrategy = SlackOffStrategy;
class ConfusingMindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        const duration = 3000;
        const count = 2;
        for (let i = 0; i < count; i++) {
            const targetConfused = rank[i];
            if (targetConfused) {
                targetConfused.status.triggerConfusion(duration, targetConfused, pokemon, true);
            }
        }
    }
}
exports.ConfusingMindStrategy = ConfusingMindStrategy;
class KnowledgeThiefStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        if (exports.AbilityStrategies[target.skill].copyable) {
            exports.AbilityStrategies[target.skill].process(pokemon, state, board, target, crit);
        }
        else
            super.process(pokemon, state, board, target, crit);
        if (pokemon.player && !pokemon.isGhostOpponent) {
            pokemon.player.experienceManager.addExperience(1);
        }
    }
}
exports.KnowledgeThiefStrategy = KnowledgeThiefStrategy;
class WonderGuardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        let damage = 30;
        if (pokemon.stars == 2) {
            damage = 60;
        }
        if (pokemon.stars == 3) {
            damage = 120;
        }
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerParalysis(3000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WonderGuardStrategy = WonderGuardStrategy;
class IllusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [30, 50, 70][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 70;
        pokemon.handleHeal(heal, pokemon, 0.5, crit);
        if (target && target.canBeCopied) {
            pokemon.index = target.index;
            pokemon.atk = Math.max(pokemon.atk, target.atk);
            pokemon.range = target.range + (pokemon.items.has(Item_1.Item.WIDE_LENS) ? 2 : 0);
            pokemon.def = Math.max(pokemon.def, target.def);
            pokemon.speDef = Math.max(pokemon.speDef, target.speDef);
        }
    }
}
exports.IllusionStrategy = IllusionStrategy;
class JudgementStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let synergyLevelsCount = 0;
        const synergies = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies;
        if (synergies) {
            pokemon.types.forEach((type) => {
                var _a;
                synergyLevelsCount += (_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0;
            });
        }
        const damage = 10 * synergyLevelsCount;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.JudgementStrategy = JudgementStrategy;
class ElectricSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 10;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.ELECTRIC)) {
                ally.addSpeed(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ElectricSurgeStrategy = ElectricSurgeStrategy;
class PsychicSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 20;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.PSYCHIC)) {
                ally.addAbilityPower(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.PsychicSurgeStrategy = PsychicSurgeStrategy;
class MistySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const ppGain = 30;
        const hpGain = 30;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.FAIRY)) {
                ally.addPP(ppGain, pokemon, 1, crit);
                ally.handleHeal(hpGain, pokemon, 1, crit);
            }
        });
    }
}
exports.MistySurgeStrategy = MistySurgeStrategy;
class GrassySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 4;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team === ally.team &&
                ally.types.has(Synergy_1.Synergy.GRASS)) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrassySurgeStrategy = GrassySurgeStrategy;
class PsychicStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addPP(-15, pokemon, 0, false);
                cell.value.count.manaBurnCount++;
            }
        });
    }
}
exports.PsychicStrategy = PsychicStrategy;
class ChatterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 20;
        const confusionChance = 0.5;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(confusionChance, pokemon)) {
                    tg.status.triggerConfusion(1000, tg, pokemon);
                }
            }
        });
    }
}
exports.ChatterStrategy = ChatterStrategy;
class CrabHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let damage = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        crit = (0, random_1.chance)((pokemon.critChance + 30) / 100, pokemon);
        let attackType = Game_1.AttackType.SPECIAL;
        if (target.life / target.hp < 0.3) {
            damage = target.life;
            attackType = Game_1.AttackType.TRUE;
        }
        target.handleSpecialDamage(damage, board, attackType, pokemon, crit);
    }
}
exports.CrabHammerStrategy = CrabHammerStrategy;
class DiamondStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.def;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DiamondStormStrategy = DiamondStormStrategy;
class DracoEnergyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(pokemon.life, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DracoEnergyStrategy = DracoEnergyStrategy;
class DynamaxCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(Math.ceil(cell.value.hp * 0.5), board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DynamaxCannonStrategy = DynamaxCannonStrategy;
class DynamicPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let duration = 1500;
        let damage = 20;
        if (pokemon.stars == 2) {
            damage = 40;
            duration = 3000;
        }
        else if (pokemon.stars == 3) {
            damage = 80;
            duration = 6000;
        }
        target.status.triggerConfusion(duration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DynamicPunchStrategy = DynamicPunchStrategy;
class ElectroBoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team && tg.types.has(Synergy_1.Synergy.ELECTRIC)) {
                tg.status.triggerRuneProtect(5000);
            }
        });
    }
}
exports.ElectroBoostStrategy = ElectroBoostStrategy;
class AuroraVeilStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const runeProtectDuration = 1000;
        const shield = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.triggerRuneProtect(runeProtectDuration);
            }
        });
    }
}
exports.AuroraVeilStrategy = AuroraVeilStrategy;
class TimeTravelStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.handleHeal(25, pokemon, 1, crit);
                ally.status.clearNegativeStatus();
            }
        });
        if (pokemon.player &&
            !pokemon.isGhostOpponent &&
            pokemon.player.life < 100) {
            pokemon.player.life += 1;
        }
    }
}
exports.TimeTravelStrategy = TimeTravelStrategy;
class AquaJetStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.AquaJetStrategy = AquaJetStrategy;
class SchoolingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 0.1 * pokemon.hp;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (pokemon.player && !pokemon.isGhostOpponent) {
            pokemon.player.board.forEach((ally, id) => {
                if (ally && ally.name === Pokemon_1.Pkm.WISHIWASHI && (0, board_1.isOnBench)(ally)) {
                    pokemon.addMaxHP(50, pokemon, 0, false, true);
                    pokemon.player.board.delete(id);
                }
            });
        }
    }
}
exports.SchoolingStrategy = SchoolingStrategy;
class ElectroWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const steal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const damage = (_b = [15, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addSpeed(-steal, pokemon, 1, crit);
                pokemon.addSpeed(steal, pokemon, 1, crit);
            }
        });
    }
}
exports.ElectroWebStrategy = ElectroWebStrategy;
class MysticalFireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addAbilityPower(-10, pokemon, 1, crit);
    }
}
exports.MysticalFireStrategy = MysticalFireStrategy;
class FlameChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            broadcastAbility(pokemon, {
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.FlameChargeStrategy = FlameChargeStrategy;
class LeechSeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const duration = (_a = [3000, 6000, 12000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12000;
        const heal = (_b = [20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        pokemon.handleHeal(heal, pokemon, 1, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.LeechSeedStrategy = LeechSeedStrategy;
class LockOnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.effects.add(Effect_1.Effect.LOCK_ON);
    }
}
exports.LockOnStrategy = LockOnStrategy;
class PsychUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const duration = (_b = [2000, 3000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(duration, cell.value, pokemon);
            }
        });
    }
}
exports.PsychUpStrategy = PsychUpStrategy;
class RazorWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RazorWindStrategy = RazorWindStrategy;
class TwistingNetherStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(target.positionX, target.positionY, 2);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const teleportationCell = board.getTeleportationCell(cell.value.positionX, cell.value.positionY);
                if (teleportationCell) {
                    cell.value.moveTo(teleportationCell.x, teleportationCell.y, board);
                }
                else {
                    logger_1.logger.error("unable to teleport pokemon", cell.value);
                }
            }
        });
    }
}
exports.TwistingNetherStrategy = TwistingNetherStrategy;
class DarkVoidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if (tg.status.silence) {
                    tg.status.triggerSleep(2000, tg);
                }
            }
        });
    }
}
exports.DarkVoidStrategy = DarkVoidStrategy;
class OverheatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                let damage = 40;
                if (tg.status.burn) {
                    damage = Math.round(damage * 1.3);
                }
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OverheatStrategy = OverheatStrategy;
class HypnosisStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        if (farthestTarget) {
            const factor = 0.5;
            const duration = Math.round(((_b = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000) *
                (1 + (pokemon.ap / 100) * factor) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
            farthestTarget.status.triggerSleep(duration, farthestTarget);
        }
    }
}
exports.HypnosisStrategy = HypnosisStrategy;
class KingShieldStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const duration = 1500;
        const shield = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.status.triggerProtect(duration);
        pokemon.addShield(shield, pokemon, 1, crit);
        const farthestTarget = state.getFarthestTarget(pokemon, board);
        if (farthestTarget) {
            pokemon.moveTo(farthestTarget.positionX, farthestTarget.positionY, board);
        }
        if (pokemon.name === Pokemon_1.Pkm.AEGISLASH) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.addAttack(10, pokemon, 1, crit);
                pokemon.addDefense(-5, pokemon, 1, crit);
                pokemon.addSpecialDefense(-5, pokemon, 1, crit);
                pokemon.name = Pokemon_1.Pkm.AEGISLASH_BLADE;
                pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.AEGISLASH_BLADE];
            }, 1500));
        }
        else if (pokemon.name === Pokemon_1.Pkm.AEGISLASH_BLADE) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.addAttack(-10, pokemon, 1, crit);
                pokemon.addDefense(5, pokemon, 1, crit);
                pokemon.addSpecialDefense(5, pokemon, 1, crit);
                pokemon.name = Pokemon_1.Pkm.AEGISLASH;
                pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.AEGISLASH];
            }, 1500));
        }
    }
}
exports.KingShieldStrategy = KingShieldStrategy;
class UTurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [15, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.moveTo(target.positionX, target.positionY, board);
        pokemon.addShield(shield, pokemon, 1, crit);
        target.status.triggerCharm(1000, target, pokemon, false);
    }
}
exports.UTurnStrategy = UTurnStrategy;
class PoisonJabStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const damage = (_a = [30, 60, 90][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerPoison(3000, target, pokemon);
        pokemon.status.triggerPoison(3000, pokemon, pokemon);
        pokemon.moveTo(target.positionX, target.positionY, board);
    }
}
exports.PoisonJabStrategy = PoisonJabStrategy;
class ExplosionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (!pokemon.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            pokemon.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.ExplosionStrategy = ExplosionStrategy;
class ChloroblastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (!pokemon.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            pokemon.handleSpecialDamage(0.5 * pokemon.hp, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
    }
}
exports.ChloroblastStrategy = ChloroblastStrategy;
class ClangorousSoulStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [2, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.addAttack(buff, pokemon, 1, crit);
                cell.value.addDefense(buff, pokemon, 1, crit);
                cell.value.addSpecialDefense(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ClangorousSoulStrategy = ClangorousSoulStrategy;
class LiquidationStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        let defReduction = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                defReduction = 4;
                break;
            case 2:
                damage = 40;
                defReduction = 8;
                break;
            case 3:
                damage = 80;
                defReduction = 16;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addDefense(-defReduction, pokemon, 1, crit);
    }
}
exports.LiquidationStrategy = LiquidationStrategy;
class BonemerangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const hit = () => (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        hit();
        pokemon.commands.push(new simulation_command_1.DelayedCommand(hit, 1000));
    }
}
exports.BonemerangStrategy = BonemerangStrategy;
class ShadowBoneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && x == target.positionX) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    tg.addDefense(-6, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.ShadowBoneStrategy = ShadowBoneStrategy;
class AuroraBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                let freezeChance = 0;
                if (pokemon.effects.has(Effect_1.Effect.CHILLY)) {
                    freezeChance = 0.4;
                }
                else if (pokemon.effects.has(Effect_1.Effect.FROSTY)) {
                    freezeChance = 0.6;
                }
                else if (pokemon.effects.has(Effect_1.Effect.FREEZING)) {
                    freezeChance = 0.8;
                }
                else if (pokemon.effects.has(Effect_1.Effect.SHEER_COLD)) {
                    freezeChance = 1.0;
                }
                if ((0, random_1.chance)(freezeChance, pokemon)) {
                    cell.value.status.triggerFreeze(2000, target);
                }
            }
        });
    }
}
exports.AuroraBeamStrategy = AuroraBeamStrategy;
class GrowlStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const atkDebuff = (_a = [3, 5, 7][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 7;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerFlinch(3000, cell.value, pokemon);
                cell.value.addAttack(-atkDebuff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrowlStrategy = GrowlStrategy;
class RelicSongStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (pokemon.count.ult % 3 === 0) {
            const factor = 0.5;
            const duration = Math.round(2000 *
                (1 + (pokemon.ap / 100) * factor) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
            board.forEach((x, y, tg) => {
                if (tg && pokemon.team != tg.team) {
                    tg.status.triggerSleep(duration, tg);
                }
            });
        }
        else {
            board.forEach((x, y, tg) => {
                if (tg && pokemon.team === tg.team) {
                    tg.addShield(10, pokemon, 1, crit);
                }
            });
        }
    }
}
exports.RelicSongStrategy = RelicSongStrategy;
class FairyWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const ppGain = (_a = [5, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team === tg.team && tg.id !== pokemon.id) {
                tg.addPP(ppGain, pokemon, 0.5, crit);
            }
        });
    }
}
exports.FairyWindStrategy = FairyWindStrategy;
class DisarmingVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerCharm(1000, target, pokemon, true);
            }
        });
    }
}
exports.DisarmingVoiceStrategy = DisarmingVoiceStrategy;
class HighJumpKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const ppStolen = (0, number_1.max)(40)(target.pp);
        pokemon.addPP(ppStolen, pokemon, 0, false);
        target.addPP(-ppStolen, pokemon, 0, false);
        target.count.manaBurnCount++;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HighJumpKickStrategy = HighJumpKickStrategy;
class TropKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const atkDebuff = (_b = [3, 5, 7][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 7;
        target.addAttack(-atkDebuff, pokemon, 1, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.TropKickStrategy = TropKickStrategy;
class GrassWhistleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let n = 0;
        switch (pokemon.stars) {
            case 1:
                n = 1;
                break;
            case 2:
                n = 2;
                break;
            case 3:
                n = 4;
                break;
            default:
                break;
        }
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && n > 0) {
                tg.status.triggerSleep(2000, tg);
                n--;
            }
        });
    }
}
exports.GrassWhistleStrategy = GrassWhistleStrategy;
class TriAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const effect = (0, random_1.randomBetween)(1, 3);
        switch (effect) {
            case 1:
                target.status.triggerFreeze(3000, target);
                break;
            case 2:
                target.status.triggerBurn(5000, target, pokemon);
                break;
            case 3:
                target.status.triggerParalysis(7000, target, pokemon);
                break;
        }
        const damage = (_a = [60, 120, 250][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 250;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.TriAttackStrategy = TriAttackStrategy;
class EchoStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [3, 6, 9][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 9;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(pokemon.count.ult * damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.EchoStrategy = EchoStrategy;
class FutureSightStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const count = 5;
        const targets = board.cells
            .filter((p) => p !== undefined && p.team !== pokemon.team)
            .slice(0, count);
        for (const tg of targets) {
            broadcastAbility(pokemon, {
                positionX: tg.positionX,
                positionY: tg.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            for (const tg of targets) {
                if (tg.life > 0) {
                    tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        }, 2000));
    }
}
exports.FutureSightStrategy = FutureSightStrategy;
class PetalDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const count = (_b = [3, 4, 5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 5;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const enemiesHit = enemies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY))
            .slice(0, count);
        enemiesHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            broadcastAbility(pokemon, {
                positionX: enemy.positionX,
                positionY: enemy.positionY
            });
        });
    }
}
exports.PetalDanceStrategy = PetalDanceStrategy;
class HyperVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const confusionDuration = (_b = [1000, 2000, 3000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 3;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.3, pokemon)) {
                    tg.status.triggerConfusion(confusionDuration, tg, pokemon);
                }
            }
        });
    }
}
exports.HyperVoiceStrategy = HyperVoiceStrategy;
class ShadowCloneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const spawnPosition = board.getClosestAvailablePlace(pokemon.positionX, pokemon.positionY);
        if (spawnPosition) {
            const p = pokemon_factory_1.default.createPokemonFromName(pokemon.name, {
                emotion: pokemon.emotion,
                shiny: pokemon.shiny
            });
            let itemStolen = null;
            if (target.items.size > 0) {
                itemStolen = (0, random_1.pickRandomIn)((0, schemas_1.values)(target.items));
                target.removeItem(itemStolen);
            }
            const clone = pokemon.simulation.addPokemon(p, spawnPosition.x, spawnPosition.y, pokemon.team, true);
            clone.hp = (0, number_1.min)(1)(Math.ceil(0.5 *
                pokemon.hp *
                (1 + pokemon.ap / 100) *
                (crit ? pokemon.critPower : 1)));
            clone.life = clone.hp;
            if (itemStolen)
                clone.addItem(itemStolen);
        }
    }
}
exports.ShadowCloneStrategy = ShadowCloneStrategy;
class VoltSwitchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.VoltSwitchStrategy = VoltSwitchStrategy;
class AccelerockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        target = (_a = destination === null || destination === void 0 ? void 0 : destination.target) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, target, crit);
        if (destination) {
            pokemon.moveTo(destination.x, destination.y, board);
            pokemon.targetX = destination.target.positionX;
            pokemon.targetY = destination.target.positionY;
        }
        target.handleSpecialDamage(pokemon.atk, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        const nbEffects = (0, number_1.max)(Math.floor(pokemon.def / 2))(Math.round(5 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1)));
        pokemon.addDefense(-2 * nbEffects, pokemon, 0, false);
        pokemon.addSpeed(nbEffects * 5, pokemon, 0, false);
        pokemon.cooldown = 0;
    }
}
exports.AccelerockStrategy = AccelerockStrategy;
class NuzzleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        target = (_a = destination === null || destination === void 0 ? void 0 : destination.target) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, target, crit);
        const damage = (_b = [20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        const duration = 3000;
        if (destination) {
            pokemon.targetX = destination.target.positionX;
            pokemon.targetY = destination.target.positionY;
            pokemon.moveTo(destination.x, destination.y, board);
        }
        target.status.triggerParalysis(duration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.NuzzleStrategy = NuzzleStrategy;
class HeadSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage, recoil;
        if (pokemon.stars === 3) {
            damage = 150;
            recoil = 40;
        }
        else if (pokemon.stars === 2) {
            damage = 80;
            recoil = 20;
        }
        else {
            damage = 40;
            recoil = 10;
        }
        if (target.status.sleep || target.status.freeze) {
            target.handleSpecialDamage(target.life, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
            pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.HeadSmashStrategy = HeadSmashStrategy;
class DoubleEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [55, 110, 220][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 220;
        const recoil = (_b = [20, 40, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
            pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.DoubleEdgeStrategy = DoubleEdgeStrategy;
class RockSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const armorBreakDuration = (_b = [3000, 6000, 9000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 9000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerArmorReduction(armorBreakDuration, target);
    }
}
exports.RockSmashStrategy = RockSmashStrategy;
class RockTombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const debuff = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addSpeed(-debuff, pokemon, 0, false);
    }
}
exports.RockTombStrategy = RockTombStrategy;
class RoarOfTimeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const speedBuff = 20;
        const candidates = board.cells.filter((cell) => cell && cell.team === pokemon.team && !cell.status.resurection);
        const strongest = (0, pokemon_entity_1.getStrongestUnit)(candidates);
        if (strongest) {
            strongest.status.addResurrection(strongest);
            strongest.addSpeed(speedBuff, pokemon, 1, true);
        }
    }
}
exports.RoarOfTimeStrategy = RoarOfTimeStrategy;
class HealBlockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                cell.value.status.triggerWound(5000, cell.value, pokemon);
            }
        });
    }
}
exports.HealBlockStrategy = HealBlockStrategy;
class SpikeArmorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        const shouldTriggerSpikeAnimation = pokemon.status.spikeArmor;
        super.process(pokemon, state, board, target, crit, !shouldTriggerSpikeAnimation);
        if (pokemon.status.spikeArmor) {
            const damage = 30;
            orientation_1.OrientationArray.forEach((orientation) => {
                (0, orientation_1.effectInLine)(board, pokemon, orientation, (cell) => {
                    if (cell.value != null && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            });
        }
        const duration = pokemon.stars === 3 ? 10000 : pokemon.stars === 2 ? 5000 : 3000;
        pokemon.status.triggerSpikeArmor(duration);
    }
}
exports.SpikeArmorStrategy = SpikeArmorStrategy;
class OriginPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OriginPulseStrategy = OriginPulseStrategy;
class SeedFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 5)
            .forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.addSpecialDefense(-3, pokemon, 0, false);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SeedFlareStrategy = SeedFlareStrategy;
class NightmareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const duration = (_a = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000;
        const damage = (_b = [25, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team != enemy.team) {
                if (enemy.status.curseFate ||
                    enemy.status.curseTorment ||
                    enemy.status.curseVulnerability ||
                    enemy.status.curseWeakness) {
                    enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
                enemy.status.triggerFatigue(duration, enemy);
            }
        });
    }
}
exports.NightmareStrategy = NightmareStrategy;
class ToxicStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const factor = 0.5;
        const duration = Math.round((_a = [3000, 6000, 9000][pokemon.stars]) !== null && _a !== void 0 ? _a : 9000 *
            (1 + (pokemon.ap / 100) * factor) *
            (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
        const count = pokemon.stars;
        const closestEnemies = new Array();
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team !== enemy.team) {
                closestEnemies.push(enemy);
            }
        });
        closestEnemies.sort((a, b) => {
            const distanceA = (0, distance_1.distanceC)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY);
            const distanceB = (0, distance_1.distanceC)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY);
            return distanceA - distanceB;
        });
        for (let i = 0; i < count; i++) {
            const enemy = closestEnemies[i];
            if (enemy) {
                enemy.status.triggerPoison(duration, enemy, pokemon);
            }
        }
    }
}
exports.ToxicStrategy = ToxicStrategy;
class BlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const freezeDuration = 2000;
        const damage = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team != enemy.team) {
                enemy.handleSpecialDamage(enemy.status.freeze ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                enemy.status.triggerFreeze(freezeDuration, enemy);
            }
        });
    }
}
exports.BlizzardStrategy = BlizzardStrategy;
class ProtectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const factor = 0.5;
        const duration = Math.round(((_a = [1000, 3000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000) *
            (1 + (pokemon.ap / 100) * factor) *
            (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
        pokemon.status.triggerProtect(duration);
    }
}
exports.ProtectStrategy = ProtectStrategy;
class ObstructStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const factor = 0.5;
        const duration = Math.round(((_a = [1000, 2000, 3000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3000) *
            (1 + (pokemon.ap / 100) * factor) *
            (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
        pokemon.status.triggerProtect(duration);
        pokemon.effects.add(Effect_1.Effect.OBSTRUCT);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => pokemon.effects.delete(Effect_1.Effect.OBSTRUCT), duration));
    }
}
exports.ObstructStrategy = ObstructStrategy;
class SingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const timer = Math.round(2000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        const count = pokemon.stars;
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        for (let i = 0; i < count; i++) {
            const tg = rank[i];
            if (tg) {
                tg.status.triggerSleep(timer, tg);
            }
        }
    }
}
exports.SingStrategy = SingStrategy;
class ConfusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let timer = 0, damage = 0;
        switch (pokemon.stars) {
            case 1:
                timer = 3000;
                damage = 75;
                break;
            case 2:
                timer = 5000;
                damage = 150;
                break;
            case 3:
                timer = 7000;
                damage = 300;
                break;
            default:
                break;
        }
        if (target.status.confusion) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.status.triggerSilence(timer, target, pokemon);
            target.status.triggerConfusion(timer, target, pokemon);
        }
    }
}
exports.ConfusionStrategy = ConfusionStrategy;
class FireBlastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 110][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 110;
        const cellsHit = [
            { x: target.positionX, y: target.positionY },
            { x: target.positionX - 1, y: target.positionY },
            { x: target.positionX + 1, y: target.positionY },
            { x: target.positionX, y: target.positionY + 1 },
            { x: target.positionX - 1, y: target.positionY - 1 },
            { x: target.positionX + 1, y: target.positionY - 1 }
        ];
        for (const cell of cellsHit) {
            const entityOnCell = board.getValue(cell.x, cell.y);
            if (entityOnCell && entityOnCell.team !== pokemon.team) {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.FireBlastStrategy = FireBlastStrategy;
class FieryDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        pokemon.addAbilityPower(30, pokemon, 0, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.FieryDanceStrategy = FieryDanceStrategy;
class SeismicTossStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [5, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        const totalDamage = damage * (pokemon.player ? pokemon.player.experienceManager.level : 5);
        target.handleSpecialDamage(totalDamage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SeismicTossStrategy = SeismicTossStrategy;
class GuillotineStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.atk * pokemon.stars;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death) {
            pokemon.addPP(pokemon.maxPP * 0.5, pokemon, 0, false);
        }
    }
}
exports.GuillotineStrategy = GuillotineStrategy;
class RockSlideStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        if (target.types.has(Synergy_1.Synergy.FLYING)) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RockSlideStrategy = RockSlideStrategy;
class WheelOfFireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const damage = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const farthestTarget = (_b = state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                broadcastAbility(pokemon, {
                    skill: "FLAME_HIT",
                    positionX: cell.x,
                    positionY: cell.y
                });
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WheelOfFireStrategy = WheelOfFireStrategy;
class InfernalParadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                const enemy = cell.value;
                broadcastAbility(pokemon, {
                    skill: "FLAME_HIT",
                    positionX: cell.x,
                    positionY: cell.y
                });
                if ((0, random_1.chance)(0.5, pokemon)) {
                    enemy.status.triggerBurn(3000, cell.value, pokemon);
                }
                (0, function_1.repeat)(2)(() => enemy.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit));
            }
        });
    }
}
exports.InfernalParadeStrategy = InfernalParadeStrategy;
class HeatWaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        board.forEach((x, y, value) => {
            if (value && pokemon.team != value.team) {
                value.status.freezeCooldown = 0;
                if ((0, random_1.chance)(0.1, pokemon)) {
                    value.status.triggerBurn(3000, value, pokemon);
                }
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HeatWaveStrategy = HeatWaveStrategy;
class FlameThrowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null &&
                cell.value.team != pokemon.team &&
                (0, distance_1.distanceC)(cell.x, cell.y, pokemon.positionX, pokemon.positionY) <= 3) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(4000, cell.value, pokemon);
            }
        });
    }
}
exports.FlameThrowerStrategy = FlameThrowerStrategy;
class HydroPumpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HydroPumpStrategy = HydroPumpStrategy;
class SolarBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
            damage = damage * 2;
            pokemon.addPP(40, pokemon, 0, false);
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
                    cell.value.status.triggerBurn(3000, cell.value, pokemon);
                }
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SolarBeamStrategy = SolarBeamStrategy;
class ThunderShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ThunderShockStrategy = ThunderShockStrategy;
class ThunderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const enemies = board.cells.filter((cell) => cell && cell.team !== pokemon.team);
        const targets = (0, random_1.pickNRandomIn)(enemies, 3);
        targets.forEach((tg, index) => {
            tg.commands.push(new simulation_command_1.DelayedCommand(() => {
                if ((0, random_1.chance)(0.3, pokemon)) {
                    tg.status.triggerParalysis(3000, tg, pokemon);
                }
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(tg, {
                    skill: Ability_1.Ability.THUNDER_SHOCK,
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
            }, index * 500));
        });
    }
}
exports.ThunderStrategy = ThunderStrategy;
class DracoMeteorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DracoMeteorStrategy = DracoMeteorStrategy;
class BlazeKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (target.status.burn) {
            damage = Math.round(damage * 1.3);
        }
        target.status.triggerBurn(2000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.BlazeKickStrategy = BlazeKickStrategy;
class WishStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = 50;
        let count = pokemon.stars;
        board.forEach((x, y, ally) => {
            if (ally &&
                pokemon.team == ally.team &&
                count > 0 &&
                ally.life < ally.hp) {
                ally.handleHeal(heal, pokemon, 1, crit);
                ally.addLuck(20, pokemon, 1, crit);
                count -= 1;
            }
        });
    }
}
exports.WishStrategy = WishStrategy;
class LunarBlessingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && ally.life < ally.hp) {
                ally.handleHeal(0.25 * ally.hp, pokemon, 1, crit);
                ally.status.clearNegativeStatus();
            }
        });
    }
}
exports.LunarBlessingStrategy = LunarBlessingStrategy;
class NaturalGiftStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30, pokemon, 1, crit);
            lowestHealthAlly.status.triggerRuneProtect(pokemon.stars * 1000);
            broadcastAbility(pokemon, {
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.NaturalGiftStrategy = NaturalGiftStrategy;
class CalmMindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 1;
        pokemon.addAttack(buff * pokemon.baseAtk, pokemon, 1, crit);
    }
}
exports.CalmMindStrategy = CalmMindStrategy;
class CosmicPowerMoonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const apGain = 20;
        board.forEach((x, y, ally) => {
            if (ally && ally.id !== pokemon.id && ally.team === pokemon.team) {
                ally.addAbilityPower(apGain, pokemon, 1, crit);
            }
        });
    }
}
exports.CosmicPowerMoonStrategy = CosmicPowerMoonStrategy;
class CosmicPowerSunStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const atkBuffMultiplier = 0.25;
        board.forEach((x, y, ally) => {
            if (ally && ally.team === pokemon.team) {
                ally.addAttack(atkBuffMultiplier * ally.baseAtk, pokemon, 1, crit);
            }
        });
    }
}
exports.CosmicPowerSunStrategy = CosmicPowerSunStrategy;
class DefenseCurlStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        pokemon.addDefense(buff, pokemon, 1, crit);
        pokemon.addSpecialDefense(buff, pokemon, 1, crit);
        pokemon.cooldown = Math.round(250 * (50 / pokemon.speed));
    }
}
exports.DefenseCurlStrategy = DefenseCurlStrategy;
class IronDefenseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && y === pokemon.positionY) {
                ally.addShield(shield, pokemon, 1, crit);
            }
        });
    }
}
exports.IronDefenseStrategy = IronDefenseStrategy;
class SoakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addPP(10, pokemon, 0, false);
            }
        });
    }
}
exports.SoakStrategy = SoakStrategy;
class IronTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        let defenseBuff = 2;
        if (pokemon.stars === 2) {
            damage = 40;
            defenseBuff = 4;
        }
        if (pokemon.stars === 3) {
            damage = 80;
            defenseBuff = 8;
        }
        pokemon.addDefense(defenseBuff, pokemon, 0, false);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.IronTailStrategy = IronTailStrategy;
class BlastBurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 120;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.BlastBurnStrategy = BlastBurnStrategy;
class ChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.effects.add(Effect_1.Effect.CHARGE);
    }
}
exports.ChargeStrategy = ChargeStrategy;
class TailwindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addSpeed(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.TailwindStrategy = TailwindStrategy;
class SludgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbStacks = pokemon.stars === 1 ? 2 : pokemon.stars === 2 ? 3 : 4;
        const duration = Math.round(3000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                for (let i = 0; i < nbStacks; i++) {
                    cell.value.status.triggerPoison(duration, cell.value, pokemon);
                }
            }
        });
    }
}
exports.SludgeStrategy = SludgeStrategy;
class SludgeWaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const duration = Math.round(((_a = [2000, 3000, 4000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4000) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1));
        const damage = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerPoison(duration, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SludgeWaveStrategy = SludgeWaveStrategy;
class DischargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 25;
                break;
            case 2:
                damage = 50;
                break;
            case 3:
                damage = 75;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerParalysis(5000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DischargeStrategy = DischargeStrategy;
class DiveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const shield = (_b = [15, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        const freezeDuration = 1000;
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        pokemon.addShield(shield, pokemon, 0, false);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.status.triggerFreeze(freezeDuration, cell.value);
                }
            });
        }
    }
}
exports.DiveStrategy = DiveStrategy;
class SmokeScreenStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const backRow = mostSurroundedCoordinate.y <= 2 ? 0 : 5;
            const midRow = mostSurroundedCoordinate.y <= 2 ? 1 : 4;
            const frontRow = mostSurroundedCoordinate.y <= 2 ? 2 : 3;
            let chosenRowForSmoke = frontRow;
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    broadcastAbility(pokemon, {
                        targetX: cell.x,
                        targetY: cell.y
                    });
                    if (cell.y === backRow)
                        chosenRowForSmoke = backRow;
                    if (cell.y === midRow && chosenRowForSmoke !== backRow)
                        chosenRowForSmoke = midRow;
                }
            });
            const smokeCells = [
                [pokemon.positionX - 1, chosenRowForSmoke],
                [pokemon.positionX, chosenRowForSmoke],
                [pokemon.positionX + 1, chosenRowForSmoke]
            ].filter(([x, y]) => y >= 0 &&
                y < board.rows &&
                x >= 0 &&
                x < board.columns &&
                !(x === pokemon.positionX && y === pokemon.positionY));
            smokeCells.forEach(([x, y]) => {
                board.addBoardEffect(x, y, Effect_1.Effect.SMOKE, pokemon.simulation);
            });
        }
    }
}
exports.SmokeScreenStrategy = SmokeScreenStrategy;
class BiteStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(Math.ceil(0.3 * takenDamage), pokemon, 1, crit);
        if (takenDamage > 0)
            target.status.triggerFlinch(5000, target, pokemon);
    }
}
exports.BiteStrategy = BiteStrategy;
class AppleAcidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = 50;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(cell.value.speDef === 0 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(pokemon, {
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
            }
        });
    }
}
exports.AppleAcidStrategy = AppleAcidStrategy;
class GravAppleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        target.handleSpecialDamage(target.def === 0 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.GravAppleStrategy = GravAppleStrategy;
class NutrientsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const heal = 40;
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(heal, pokemon, 1, crit);
            lowestHealthAlly.addDefense(2, pokemon, 1, crit);
            lowestHealthAlly.addSpecialDefense(2, pokemon, 1, crit);
            broadcastAbility(pokemon, {
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.NutrientsStrategy = NutrientsStrategy;
class SyrupBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 50;
        const highestSpeedEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => b.speed - a.speed)[0];
        if (highestSpeedEnemy) {
            highestSpeedEnemy.status.triggerParalysis(3000, highestSpeedEnemy, pokemon, false);
            highestSpeedEnemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            broadcastAbility(pokemon, {
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: highestSpeedEnemy.positionX,
                targetY: highestSpeedEnemy.positionY
            });
        }
    }
}
exports.SyrupBombStrategy = SyrupBombStrategy;
class FickleBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 60;
        const highestSpeedEnemies = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => b.speed - a.speed);
        let numberOfBeam = 0;
        for (let i = 0; i < 4; i++) {
            (0, random_1.chance)(0.6, pokemon) && numberOfBeam++;
        }
        for (let i = 0; i < numberOfBeam; i++) {
            const enemy = highestSpeedEnemies[i % highestSpeedEnemies.length];
            if (enemy) {
                enemy.status.triggerParalysis(2000, enemy, pokemon, false);
                enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(pokemon, {
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: enemy.positionX,
                    targetY: enemy.positionY
                });
            }
        }
    }
}
exports.FickleBeamStrategy = FickleBeamStrategy;
class PsybeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    cell.value.status.triggerConfusion(4000, cell.value, pokemon);
                }
            }
        });
    }
}
exports.PsybeamStrategy = PsybeamStrategy;
class PresentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const chance = Math.random() * (1 + pokemon.luck / 100);
        if (chance < 0.1) {
            target.handleHeal(50, pokemon, 0, false);
        }
        else if (chance < 0.5) {
            target.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else if (chance < 0.8) {
            target.handleSpecialDamage(150, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(300, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.PresentStrategy = PresentStrategy;
class SacredSwordGrassStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbRemainingAllies = board.cells.filter((p) => p && p.team === pokemon.team).length;
        const damage = 80 + 10 * nbRemainingAllies;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordGrassStrategy = SacredSwordGrassStrategy;
class SacredSwordIronStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbAlliesAlive = board.cells.filter((p) => p && p.team === pokemon.team).length;
        const meter = pokemon.team === Game_1.Team.BLUE_TEAM ? "blueDpsMeter" : "redDpsMeter";
        const nbFallenAllies = pokemon.simulation[meter].size - nbAlliesAlive;
        const damage = 80 + 15 * nbFallenAllies;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordIronStrategy = SacredSwordIronStrategy;
class SacredSwordCavernStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const numberOfEnemiesInOurSide = board.cells.filter((cell) => cell &&
            cell.team !== pokemon.team &&
            (pokemon.team === Game_1.Team.BLUE_TEAM
                ? cell.positionY < 3
                : cell.positionY > 2)).length;
        const damage = 80 + 20 * numberOfEnemiesInOurSide;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordCavernStrategy = SacredSwordCavernStrategy;
class SecretSwordStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 150;
        const damageType = pokemon.count.fightingBlockCount >= 20
            ? Game_1.AttackType.TRUE
            : Game_1.AttackType.PHYSICAL;
        target.handleSpecialDamage(damage, board, damageType, pokemon, crit);
    }
}
exports.SecretSwordStrategy = SecretSwordStrategy;
class MetalBurstStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.floor(30 + 3 * pokemon.count.fightingBlockCount);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.MetalBurstStrategy = MetalBurstStrategy;
class ThunderCageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerLocked(3000, cell.value);
                cell.value.status.triggerParalysis(3000, cell.value, pokemon);
                cell.value.handleSpecialDamage(60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.ThunderCageStrategy = ThunderCageStrategy;
class LeafBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, true);
        const damage = pokemon.atk;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, true);
    }
}
exports.LeafBladeStrategy = LeafBladeStrategy;
class WaterfallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.addShield(shield, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
        board.clearBoardEffect(pokemon.positionX, pokemon.positionY, pokemon.simulation);
    }
}
exports.WaterfallStrategy = WaterfallStrategy;
class XScissorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.XScissorStrategy = XScissorStrategy;
class DragonTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const defenseBuff = (_b = [2, 4, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(defenseBuff, pokemon, 1, crit);
        pokemon.addSpecialDefense(defenseBuff, pokemon, 1, crit);
    }
}
exports.DragonTailStrategy = DragonTailStrategy;
class AquaTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const shield = (_b = [30, 60, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addShield(shield, pokemon, 1, crit);
    }
}
exports.AquaTailStrategy = AquaTailStrategy;
class DragonBreathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null &&
                cell.value.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, cell.x, cell.y) <= 2) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DragonBreathStrategy = DragonBreathStrategy;
class IcicleCrashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars === 2) {
            damage = 40;
        }
        if (pokemon.stars === 3) {
            damage = 80;
        }
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.IcicleCrashStrategy = IcicleCrashStrategy;
class SteamEruptionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        const burnDuration = 3000;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(burnDuration, cell.value, pokemon);
            }
        });
    }
}
exports.SteamEruptionStrategy = SteamEruptionStrategy;
class IngrainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        const damage = (_b = [15, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 15;
        const lockedDuration = 4000;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
            else if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.status.triggerLocked(lockedDuration, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.IngrainStrategy = IngrainStrategy;
class TormentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const boost = (_a = [20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addSpeed(boost, pokemon, 1, crit);
        pokemon.cooldown = Math.round(500 * (50 / pokemon.speed));
    }
}
exports.TormentStrategy = TormentStrategy;
class StompStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damageFactor = 3;
        if (pokemon.stars === 2) {
            damageFactor = 4;
        }
        else if (pokemon.stars === 3) {
            damageFactor = 5;
        }
        const damage = pokemon.atk * damageFactor;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.StompStrategy = StompStrategy;
class HornDrillStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damageFactor = (_a = [3, 4, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        let damage = pokemon.atk * damageFactor;
        const executeChance = 0.3 * (1 + (0, number_1.min)(0)((pokemon.atk - target.atk) / target.atk));
        if ((0, random_1.chance)(executeChance, pokemon)) {
            damage = 9999;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HornDrillStrategy = HornDrillStrategy;
class ShadowBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, v) => {
            if (v && pokemon.team != v.team) {
                v.addSpecialDefense(-2, pokemon, 0, false);
            }
        });
    }
}
exports.ShadowBallStrategy = ShadowBallStrategy;
class BugBuzzStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 80;
                break;
            default:
                break;
        }
        if (target.status.paralysis) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.BugBuzzStrategy = BugBuzzStrategy;
class StringShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 10;
                break;
            case 2:
                damage = 20;
                break;
            case 3:
                damage = 50;
                break;
            default:
                break;
        }
        target.status.triggerParalysis(5000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.StringShotStrategy = StringShotStrategy;
class EntanglingThreadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 10;
                break;
            case 2:
                damage = 20;
                break;
            case 3:
                damage = 40;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.status.triggerParalysis(4000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.EntanglingThreadStrategy = EntanglingThreadStrategy;
class VenoshockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        if (pokemon.status.poisonStacks > 0) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.VenoshockStrategy = VenoshockStrategy;
class LeechLifeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 80;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(damage, pokemon, 1, crit);
    }
}
exports.LeechLifeStrategy = LeechLifeStrategy;
class HappyHourStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [2, 5, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.HappyHourStrategy = HappyHourStrategy;
class TeleportStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, false);
        const potentialCells = [
            [0, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1],
            [board.columns - 1, 0]
        ];
        (0, random_1.shuffleArray)(potentialCells);
        for (let i = 0; i < potentialCells.length; i++) {
            const entity = board.getValue(potentialCells[i][0], potentialCells[i][1]);
            if (entity === undefined) {
                pokemon.moveTo(potentialCells[i][0], potentialCells[i][1], board);
                pokemon.effects.add(Effect_1.Effect.TELEPORT_NEXT_ATTACK);
                break;
            }
        }
    }
}
exports.TeleportStrategy = TeleportStrategy;
class NastyPlotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 10;
        pokemon.addAttack(buff, pokemon, 1, crit);
        pokemon.cooldown = Math.round(250 * (50 / pokemon.speed));
    }
}
exports.NastyPlotStrategy = NastyPlotStrategy;
class TakeHeartStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(8, pokemon, 1, crit);
        pokemon.addSpecialDefense(8, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
        pokemon.cooldown = Math.round(100 * (50 / pokemon.speed));
    }
}
exports.TakeHeartStrategy = TakeHeartStrategy;
class SpectralThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const damage = 50;
        if (farthestCoordinate) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            const boostAtk = (0, number_1.min)(0)(target.atk - target.baseAtk);
            const boostSpeed = (0, number_1.min)(0)(target.speed - Config_1.DEFAULT_SPEED);
            const boostDef = (0, number_1.min)(0)(target.def - target.baseSpeDef);
            const boostSpeDef = (0, number_1.min)(0)(target.speDef - target.baseSpeDef);
            const boostAP = target.ap;
            target.atk = target.baseAtk;
            target.def = target.baseDef;
            target.speDef = target.baseSpeDef;
            pokemon.addAttack(boostAtk, pokemon, 0, false);
            pokemon.addDefense(boostDef, pokemon, 0, false);
            pokemon.addSpecialDefense(boostSpeDef, pokemon, 0, false);
            pokemon.addAbilityPower(boostAP, pokemon, 0, false);
            pokemon.addSpeed(boostSpeed, pokemon, 0, false);
        }
    }
}
exports.SpectralThiefStrategy = SpectralThiefStrategy;
class ThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 15;
        if (pokemon.stars === 2) {
            damage = 30;
        }
        if (pokemon.stars === 3) {
            damage = 60;
        }
        target.items.forEach((item) => {
            pokemon.addItem(item);
            target.removeItem(item);
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ThiefStrategy = ThiefStrategy;
class KnockOffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 90 + target.items.size * 30;
        target.items.forEach((item) => {
            target.removeItem(item);
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.KnockOffStrategy = KnockOffStrategy;
class StunSporeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(5000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StunSporeStrategy = StunSporeStrategy;
class MeteorMashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const nbHits = 3;
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addAttack(2, pokemon, 1, crit);
        for (let n = 0; n < nbHits; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.MeteorMashStrategy = MeteorMashStrategy;
class HurricaneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(3000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HurricaneStrategy = HurricaneStrategy;
class FleurCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 120;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(-20, pokemon, 0, false);
    }
}
exports.FleurCannonStrategy = FleurCannonStrategy;
class SandsearStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(2000, cell.value, pokemon);
            }
        });
    }
}
exports.SandsearStormStrategy = SandsearStormStrategy;
class WildboltStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(4000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WildboltStormStrategy = WildboltStormStrategy;
class BleakwindStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerFreeze(2000, cell.value);
            }
        });
    }
}
exports.BleakwindStormStrategy = BleakwindStormStrategy;
class SpringtideStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerCharm(2000, cell.value, pokemon);
            }
        });
    }
}
exports.SpringtideStormStrategy = SpringtideStormStrategy;
class FakeTearsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, value) => {
            if (value && pokemon.team != value.team) {
                value.status.triggerArmorReduction(3000, value);
                broadcastAbility(pokemon, { positionX: x, positionY: y });
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FakeTearsStrategy = FakeTearsStrategy;
class SparklingAriaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15;
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
            else if (cell.value &&
                cell.value.team === pokemon.team &&
                cell.value.status.burn) {
                cell.value.status.healBurn(cell.value);
            }
        });
    }
}
exports.SparklingAriaStrategy = SparklingAriaStrategy;
class DragonDartsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        for (let n = 0; n < 3; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        if (target.life <= 0) {
            pokemon.addPP(40, pokemon, 0, false);
        }
    }
}
exports.DragonDartsStrategy = DragonDartsStrategy;
class MetronomeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        const skill = (0, random_1.pickRandomIn)(Object.keys(Ability_1.Ability).filter((a) => exports.AbilityStrategies[a].copyable));
        broadcastAbility(pokemon, { skill });
        exports.AbilityStrategies[skill].process(pokemon, state, board, target, crit);
    }
}
exports.MetronomeStrategy = MetronomeStrategy;
class SkyAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    skill: Ability_1.Ability.SKY_ATTACK,
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (((_a = destination.target) === null || _a === void 0 ? void 0 : _a.life) > 0) {
                    const damage = 120;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.SkyAttackStrategy = SkyAttackStrategy;
class SkyAttackShadowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        crit = crit || (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    skill: Ability_1.Ability.SKY_ATTACK,
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (((_a = destination.target) === null || _a === void 0 ? void 0 : _a.life) > 0) {
                    const damage = 120;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.SkyAttackShadowStrategy = SkyAttackShadowStrategy;
class FlyingPressStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (destination.target && destination.target.life > 0) {
                    const damage = 0.5 * pokemon.hp;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.FlyingPressStrategy = FlyingPressStrategy;
class AgilityStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const boost = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.addSpeed(boost, pokemon, 1, crit);
        pokemon.cooldown = 0;
    }
}
exports.AgilityStrategy = AgilityStrategy;
class SpiritShackleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 90;
                break;
            default:
                break;
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerWound(4000, cell.value, pokemon);
            }
        });
    }
}
exports.SpiritShackleStrategy = SpiritShackleStrategy;
class WaterShurikenStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        orientations.forEach((orientation) => {
            (0, orientation_1.effectInLine)(board, pokemon, orientation, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        });
    }
}
exports.WaterShurikenStrategy = WaterShurikenStrategy;
class RazorLeafStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.RazorLeafStrategy = RazorLeafStrategy;
class ShadowSneakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        const damageType = target.status.silence
            ? Game_1.AttackType.TRUE
            : Game_1.AttackType.SPECIAL;
        target.handleSpecialDamage(damage, board, damageType, pokemon, crit);
    }
}
exports.ShadowSneakStrategy = ShadowSneakStrategy;
class PlasmaFistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(damage * 0.25, pokemon, 1, crit);
    }
}
exports.PlasmaFistStrategy = PlasmaFistStrategy;
class ForecastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, p) => {
            if (p && pokemon.team === p.team) {
                p.addShield(10, pokemon, 1, crit);
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_SUN) {
                    p.addAttack(4, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_RAIN) {
                    p.addPP(8, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_HAIL) {
                    p.addDefense(2, pokemon, 1, crit);
                    p.addSpecialDefense(2, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.ForecastStrategy = ForecastStrategy;
class MachPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.cooldown = Math.round(100 * (50 / pokemon.speed));
    }
}
exports.MachPunchStrategy = MachPunchStrategy;
class MegaPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 60;
        if (pokemon.def > target.def)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.MegaPunchStrategy = MegaPunchStrategy;
class MawashiGeriStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 60;
        if (pokemon.atk > target.atk)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        let farthestEmptyCell = null;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (!cell.value) {
                farthestEmptyCell = cell;
            }
        });
        if (farthestEmptyCell != null) {
            const { x, y } = farthestEmptyCell;
            target.moveTo(x, y, board);
        }
    }
}
exports.MawashiGeriStrategy = MawashiGeriStrategy;
class HeadbuttStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        if (target.shield > 0) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerFlinch(5000, target, pokemon);
    }
}
exports.HeadbuttStrategy = HeadbuttStrategy;
class TripleKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 60;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        let count = 0;
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                count++;
                if (count <= 3) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
            }
        });
    }
}
exports.TripleKickStrategy = TripleKickStrategy;
class GeomancyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(15, pokemon, 1, crit);
        pokemon.addSpecialDefense(5, pokemon, 1, crit);
        pokemon.addSpeed(20, pokemon, 0, false);
    }
}
exports.GeomancyStrategy = GeomancyStrategy;
class DeathWingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 150;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (takenDamage > 0) {
            pokemon.handleHeal(Math.round(0.75 * takenDamage), pokemon, 0, false);
        }
    }
}
exports.DeathWingStrategy = DeathWingStrategy;
class MimicStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        if (exports.AbilityStrategies[target.skill].copyable) {
            exports.AbilityStrategies[target.skill].process(pokemon, state, board, target, crit);
        }
        else
            super.process(pokemon, state, board, target, crit);
    }
}
exports.MimicStrategy = MimicStrategy;
class HexStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        if (target.status.hasNegativeStatus()) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HexStrategy = HexStrategy;
class GrowthStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        let attackBuff = (_a = [3, 4, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        let hpBuff = (_b = [10, 20, 30][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 30;
        if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
            attackBuff *= 2;
            hpBuff *= 2;
        }
        pokemon.addAttack(attackBuff, pokemon, 1, crit);
        pokemon.addMaxHP(hpBuff, pokemon, 1, crit);
        pokemon.cooldown = Math.round(250 * (50 / pokemon.speed));
    }
}
exports.GrowthStrategy = GrowthStrategy;
class HealOrderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const damage = pokemon.stars === 3 ? 65 : pokemon.stars === 2 ? 45 : 25;
        cells.forEach((cell) => {
            if (cell.value) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    broadcastAbility(pokemon, {
                        skill: "ATTACK_ORDER",
                        positionX: cell.x,
                        positionY: cell.y
                    });
                }
                else {
                    cell.value.handleHeal(damage, pokemon, 1, crit);
                    broadcastAbility(pokemon, {
                        skill: "HEAL_ORDER",
                        positionX: cell.x,
                        positionY: cell.y
                    });
                }
            }
        });
    }
}
exports.HealOrderStrategy = HealOrderStrategy;
class ShellTrapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (pokemon.shield > 0) {
            const damage = 50 + pokemon.shield;
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
                .forEach((cell) => {
                if (cell.value && pokemon.team != cell.value.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.shield = 0;
        }
        else {
            const shield = 75;
            pokemon.addShield(shield, pokemon, 1, crit);
        }
    }
}
exports.ShellTrapStrategy = ShellTrapStrategy;
class DigStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.DigStrategy = DigStrategy;
class FireSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(3000, target, pokemon);
            }
        });
    }
}
exports.FireSpinStrategy = FireSpinStrategy;
class SearingShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(3000, target, pokemon);
            }
        });
    }
}
exports.SearingShotStrategy = SearingShotStrategy;
class PeckStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PeckStrategy = PeckStrategy;
class SplashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
    }
}
exports.SplashStrategy = SplashStrategy;
class CounterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.max(1, Math.round((pokemon.hp - pokemon.life) * 0.5));
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.CounterStrategy = CounterStrategy;
class PoisonPowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.status.triggerPoison(5000, target, pokemon);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.PoisonPowderStrategy = PoisonPowderStrategy;
class SilverWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        pokemon.addAttack(1, pokemon, 0, false);
        pokemon.addDefense(1, pokemon, 0, false);
        pokemon.addSpecialDefense(1, pokemon, 0, false);
        pokemon.addSpeed(10, pokemon, 0, false);
        pokemon.addAbilityPower(10, pokemon, 0, false);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.SilverWindStrategy = SilverWindStrategy;
class IcyWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const speedDebuff = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addSpeed(-speedDebuff, pokemon, 0, false);
            }
        });
    }
}
exports.IcyWindStrategy = IcyWindStrategy;
class GigatonHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 100;
        if (pokemon.stars === 2) {
            damage = 200;
        }
        if (pokemon.stars === 3) {
            damage = 400;
        }
        pokemon.status.triggerFatigue(6000, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.GigatonHammerStrategy = GigatonHammerStrategy;
class AcrobaticsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const travelDistance = 4 - pokemon.items.size;
        const candidateDestinationCells = board
            .getCellsInRadius(pokemon.targetX, pokemon.targetY, pokemon.range)
            .filter((cell) => cell.value === undefined)
            .sort((a, b) => Math.abs(travelDistance -
            (0, distance_1.distanceM)(a.x, a.y, pokemon.positionX, pokemon.positionY)) -
            Math.abs(travelDistance -
                (0, distance_1.distanceM)(b.x, b.y, pokemon.positionX, pokemon.positionY)));
        if (candidateDestinationCells.length > 0) {
            const destination = candidateDestinationCells[0];
            pokemon.moveTo(destination.x, destination.y, board);
        }
    }
}
exports.AcrobaticsStrategy = AcrobaticsStrategy;
class AbsorbStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.handleHeal(damage * 0.1, pokemon, 1, crit);
            }
        });
    }
}
exports.AbsorbStrategy = AbsorbStrategy;
class RolloutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const multiplier = 5;
        const defenseBoost = (_a = [1, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        pokemon.addDefense(defenseBoost, pokemon, 1, crit);
        target.handleSpecialDamage(multiplier * pokemon.def, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RolloutStrategy = RolloutStrategy;
class IceBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const baseDamage = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const multiplier = (_b = [0.5, 1, 1.5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 1.5;
        const speDefBoost = 10;
        pokemon.addSpecialDefense(speDefBoost, pokemon, 0, false);
        target.handleSpecialDamage(baseDamage + multiplier * pokemon.speDef, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.IceBallStrategy = IceBallStrategy;
class ThrashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(pokemon.baseAtk, pokemon, 1, crit);
        pokemon.status.triggerConfusion(3000, pokemon, pokemon);
    }
}
exports.ThrashStrategy = ThrashStrategy;
class MagmaStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const targetsHit = new Set();
        const propagate = (currentTarget) => {
            targetsHit.add(currentTarget.id);
            pokemon.transferAbility(Ability_1.Ability.MAGMA_STORM, pokemon.positionX, pokemon.positionY, currentTarget.positionX, currentTarget.positionY);
            currentTarget.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, false);
            pokemon.simulation.room.clock.setTimeout(() => {
                const board = pokemon.simulation.board;
                const nextEnemies = board
                    .getAdjacentCells(currentTarget.positionX, currentTarget.positionY)
                    .filter((cell) => cell.value &&
                    cell.value.team === currentTarget.team &&
                    !targetsHit.has(cell.value.id));
                nextEnemies.forEach((enemy) => {
                    if (enemy &&
                        enemy.value &&
                        enemy.value.life > 0 &&
                        !pokemon.simulation.finished) {
                        propagate(enemy.value);
                    }
                });
            }, 250);
        };
        propagate(target);
    }
}
exports.MagmaStormStrategy = MagmaStormStrategy;
class SlashingClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15;
        if (target.status.wound) {
            damage = Math.ceil(damage * 1.3);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerWound(5000, target, pokemon);
    }
}
exports.SlashingClawStrategy = SlashingClawStrategy;
class DireClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const status = (0, random_1.pickRandomIn)(["poison", "sleep", "paralysis"]);
        switch (status) {
            case "poison":
                target.status.triggerPoison(3000, target, pokemon);
                break;
            case "sleep":
                target.status.triggerSleep(3000, target);
                break;
            case "paralysis":
                target.status.triggerParalysis(3000, target, pokemon);
                break;
        }
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DireClawStrategy = DireClawStrategy;
class FakeOutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        if (pokemon.ap >= 0)
            target.status.triggerFlinch(3000, target);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(-30, pokemon, 0, false);
    }
}
exports.FakeOutStrategy = FakeOutStrategy;
class FellStingerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 70;
        const victim = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (victim.death && !pokemon.isSpawn) {
            pokemon.addAttack(1, pokemon, 0, false, true);
            pokemon.addMaxHP(10, pokemon, 0, false, true);
        }
    }
}
exports.FellStingerStrategy = FellStingerStrategy;
class EruptionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 50, 70][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const numberOfProjectiles = pokemon.stars === 1 ? 20 : pokemon.stars === 2 ? 30 : 45;
        for (let i = 0; i < numberOfProjectiles; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
                const y = (0, random_1.randomBetween)(0, Config_1.BOARD_HEIGHT - 1);
                const value = board.getValue(x, y);
                if (value && value.team !== pokemon.team) {
                    value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    value.status.triggerBurn(5000, value, pokemon);
                }
                broadcastAbility(pokemon, { targetX: x, targetY: y });
            }, i * 100));
        }
    }
}
exports.EruptionStrategy = EruptionStrategy;
class HailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        const numberOfProjectiles = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        for (let i = 0; i < numberOfProjectiles; i++) {
            const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
            const y = target.positionY >= 3
                ? (0, random_1.randomBetween)(3, Config_1.BOARD_HEIGHT - 1)
                : (0, random_1.randomBetween)(0, 3);
            const enemyHit = board.getValue(x, y);
            if (enemyHit && enemyHit.team !== pokemon.team) {
                enemyHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                enemyHit.effects.add(Effect_1.Effect.HAIL);
                enemyHit.status.triggerFreeze(1000, enemyHit);
            }
            broadcastAbility(pokemon, {
                skill: "HAIL_PROJECTILE",
                targetX: x,
                targetY: y
            });
            board.addBoardEffect(x, y, Effect_1.Effect.HAIL, pokemon.simulation);
        }
    }
}
exports.HailStrategy = HailStrategy;
class MistBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null &&
                cell.value.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY) <= 4) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addAbilityPower(-30, pokemon, 0, false);
            }
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.addAbilityPower(-30, pokemon, 0, false);
                }
            });
        }, 1000));
    }
}
exports.MistBallStrategy = MistBallStrategy;
class LusterPurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null &&
                cell.value.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY) <= 4) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addSpecialDefense(-5, pokemon, 0, false);
            }
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.addSpecialDefense(-3, pokemon, 0, false);
                }
            });
        }, 1000));
    }
}
exports.LusterPurgeStrategy = LusterPurgeStrategy;
class MudBubbleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        pokemon.handleHeal(heal, pokemon, 1, crit);
    }
}
exports.MudBubbleStrategy = MudBubbleStrategy;
class LinkCableStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestTarget = state.getFarthestTarget(pokemon, board);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate && farthestTarget) {
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            pokemon.targetX = farthestTarget.positionX;
            pokemon.targetY = farthestTarget.positionY;
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (pokemon.life <= 0)
                return;
            const partner = board.find((x, y, entity) => entity.skill === Ability_1.Ability.LINK_CABLE &&
                entity.id !== pokemon.id &&
                entity.team === pokemon.team);
            if (partner) {
                const damage = 50;
                const targetsHit = new Set();
                (0, orientation_1.effectInLine)(board, pokemon, partner, (cell) => {
                    if (cell.value != null && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                board
                    .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                board
                    .getAdjacentCells(partner.positionX, partner.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                targetsHit.forEach((target) => {
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                });
                broadcastAbility(pokemon, {
                    skill: "LINK_CABLE_link",
                    targetX: partner.positionX,
                    targetY: partner.positionY
                });
                broadcastAbility(pokemon, {
                    skill: "LINK_CABLE_discharge",
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY
                });
                broadcastAbility(pokemon, {
                    skill: "LINK_CABLE_discharge",
                    positionX: partner.positionX,
                    positionY: partner.positionY
                });
            }
            else {
                const damage = 50;
                const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
                broadcastAbility(pokemon, { skill: "LINK_CABLE_discharge" });
            }
        }, 300));
    }
}
exports.LinkCableStrategy = LinkCableStrategy;
class MagicBounceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.status.triggerMagicBounce(5000);
    }
}
exports.MagicBounceStrategy = MagicBounceStrategy;
class ShellSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 1 ? 15 : 30;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(20, pokemon, 0, false);
        pokemon.addAttack(2, pokemon, 0, false);
        pokemon.addSpeed(20, pokemon, 0, false);
        pokemon.addDefense(-2, pokemon, 0, false);
        pokemon.addSpecialDefense(-2, pokemon, 0, false);
    }
}
exports.ShellSmashStrategy = ShellSmashStrategy;
class HelpingHandStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const nbAlliesBuffed = 2;
        const shield = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const allies = new Array();
        board.forEach((x, y, cell) => {
            if (cell && cell.team === pokemon.team && pokemon.id !== cell.id) {
                allies.push({
                    pkm: cell,
                    distance: (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, cell.positionX, cell.positionY)
                });
            }
        });
        allies.sort((a, b) => a.distance - b.distance);
        for (let i = 0; i < nbAlliesBuffed; i++) {
            const ally = (_b = allies[i]) === null || _b === void 0 ? void 0 : _b.pkm;
            if (ally) {
                ally.effects.add(Effect_1.Effect.DOUBLE_DAMAGE);
                ally.addShield(shield, pokemon, 1, crit);
                broadcastAbility(pokemon, {
                    positionX: ally.positionX,
                    positionY: ally.positionY
                });
            }
        }
    }
}
exports.HelpingHandStrategy = HelpingHandStrategy;
class AstralBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damagePerGhost = 20;
        const enemies = [];
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                enemies.push(tg);
            }
        });
        const nbGhosts = 7 * (1 + pokemon.ap / 100);
        for (let i = 0; i < nbGhosts; i++) {
            const randomTarget = (0, random_1.pickRandomIn)(enemies);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    targetX: randomTarget.positionX,
                    targetY: randomTarget.positionY
                });
                if ((randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.life) > 0) {
                    randomTarget.handleSpecialDamage(damagePerGhost, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                }
            }, 100 * i));
        }
    }
}
exports.AstralBarrageStrategy = AstralBarrageStrategy;
class PyroBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        broadcastAbility(pokemon, {
            targetX: farthestTarget.positionX,
            targetY: farthestTarget.positionY
        });
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerBurn(2000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.PyroBallStrategy = PyroBallStrategy;
class WhirlpoolStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit, true);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
                for (let i = 0; i < 4; i++) {
                    cell.value.handleSpecialDamage(Math.ceil(pokemon.atk * 1.25), board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                break;
            }
        }
    }
}
exports.WhirlpoolStrategy = WhirlpoolStrategy;
class AnchorShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit, true);
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const emptyCellsAround = (0, random_1.shuffleArray)(adjacentCells
            .filter((v) => v.value === undefined)
            .map((v) => ({ x: v.x, y: v.y })));
        if (emptyCellsAround.length > 0) {
            const destination = emptyCellsAround[0];
            broadcastAbility(pokemon, {
                targetX: farthestTarget.positionX,
                targetY: farthestTarget.positionY
            });
            farthestTarget.moveTo(destination.x, destination.y, board);
            farthestTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            farthestTarget.cooldown = (0, number_1.min)(750)(farthestTarget.cooldown);
        }
    }
}
exports.AnchorShotStrategy = AnchorShotStrategy;
class SmogStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = pokemon.stars === 1 ? 10 : pokemon.stars === 2 ? 20 : 40;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.SMOKE, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SmogStrategy = SmogStrategy;
class LavaPlumeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.EMBER, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
            }
        });
    }
}
exports.LavaPlumeStrategy = LavaPlumeStrategy;
class ShelterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const defGain = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.SMOKE, pokemon.simulation);
        });
    }
}
exports.ShelterStrategy = ShelterStrategy;
class MagnetRiseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const nbAlliesBuffed = (_a = [2, 4, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const alliesBuffed = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((cell) => cell.value)
            .filter((mon) => mon && mon.team === pokemon.team)
            .sort((a, b) => a.life - b.life)
            .slice(0, nbAlliesBuffed);
        alliesBuffed.push(pokemon);
        alliesBuffed.forEach((ally) => {
            ally.status.triggerProtect(2000);
            ally.addDodgeChance(0.1, pokemon, 1, crit);
            broadcastAbility(pokemon, {
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
    }
}
exports.MagnetRiseStrategy = MagnetRiseStrategy;
class AttractStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const targets = (0, random_1.pickNRandomIn)(board.cells.filter((v) => v && v.team !== pokemon.team), pokemon.stars);
        targets === null || targets === void 0 ? void 0 : targets.forEach((t) => {
            if (t) {
                broadcastAbility(pokemon, {
                    targetX: t.positionX,
                    targetY: t.positionY
                });
                t === null || t === void 0 ? void 0 : t.status.triggerCharm(1000, t, pokemon, true);
            }
        });
    }
}
exports.AttractStrategy = AttractStrategy;
class WaterPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [75, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .concat(target)
            .forEach((v) => {
            if (v) {
                v.status.triggerConfusion(2000, v, pokemon);
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WaterPulseStrategy = WaterPulseStrategy;
class PlayRoughStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerCharm(2500, target, pokemon, false);
        target.handleSpecialDamage(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PlayRoughStrategy = PlayRoughStrategy;
class AerialAceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.AerialAceStrategy = AerialAceStrategy;
class ParabolicChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = pokemon.stars > 1 ? 50 : 25;
        const overHeal = Math.max(0, heal + pokemon.life - pokemon.hp);
        pokemon.handleHeal(heal, pokemon, 0, false);
        target.handleSpecialDamage((pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25) + overHeal, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ParabolicChargeStrategy = ParabolicChargeStrategy;
class SuperFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 90 : pokemon.stars === 2 ? 60 : 30;
        if (target.types.has(Synergy_1.Synergy.GRASS)) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.SuperFangStrategy = SuperFangStrategy;
class TeeterDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addSpeed(20, pokemon, 1, crit);
        board.cells
            .filter((v) => v !== undefined)
            .forEach((v) => v && v.status.triggerConfusion(3000, v, pokemon));
    }
}
exports.TeeterDanceStrategy = TeeterDanceStrategy;
class CloseCombatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addDefense(-2, pokemon, 0, false);
        pokemon.addSpecialDefense(-2, pokemon, 0, false);
        target.handleSpecialDamage(130, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.CloseCombatStrategy = CloseCombatStrategy;
class AssistStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        const skill = (0, random_1.pickRandomIn)(board.cells
            .filter((v) => v &&
            v.team === pokemon.team &&
            v.skill &&
            exports.AbilityStrategies[v.skill].copyable)
            .map((v) => v === null || v === void 0 ? void 0 : v.skill));
        if (skill) {
            broadcastAbility(pokemon, { skill });
            exports.AbilityStrategies[skill].process(pokemon, state, board, target, crit);
        }
        else
            super.process(pokemon, state, board, target, crit);
    }
}
exports.AssistStrategy = AssistStrategy;
class FissureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const numberOfRifts = (_a = [2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const damage = (_b = [25, 50, 75][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 75;
        for (let i = 0; i < numberOfRifts; i++) {
            const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
            const y = (0, random_1.randomBetween)(0, Config_1.BOARD_HEIGHT - 1);
            const cells = board.getAdjacentCells(x, y);
            cells.push({ x, y, value: board.getValue(x, y) });
            cells.forEach((cell) => {
                if (cell && cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
            });
        }
    }
}
exports.FissureStrategy = FissureStrategy;
class AssuranceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        target.handleSpecialDamage(pokemon.life / pokemon.hp < 0.5 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AssuranceStrategy = AssuranceStrategy;
class AquaRingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(target, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
            cells.push({
                x: mostSurroundedCoordinate.x,
                y: mostSurroundedCoordinate.y,
                value: board.getValue(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y)
            });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.status.clearNegativeStatus();
                    cell.value.handleHeal(pokemon.stars === 3 ? 50 : pokemon.stars === 2 ? 30 : 20, pokemon, 1, crit);
                }
            });
        }
    }
}
exports.AquaRingStrategy = AquaRingStrategy;
class LungeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const enemiesSortedByAttack = board.cells
            .filter((enemy) => enemy && enemy.team !== pokemon.team)
            .sort((a, b) => b.atk - a.atk);
        let cellToGo;
        let enemy;
        while (cellToGo == null && enemiesSortedByAttack.length > 0) {
            enemy = enemiesSortedByAttack.shift();
            if (enemy) {
                cellToGo = board
                    .getAdjacentCells(enemy.positionX, enemy.positionY)
                    .find((cell) => cell.value == null);
            }
        }
        if (cellToGo) {
            pokemon.moveTo(cellToGo.x, cellToGo.y, board);
            if (enemy) {
                enemy.addAttack(-5, pokemon, 1, crit);
                enemy.handleSpecialDamage(50, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        }
    }
}
exports.LungeStrategy = LungeStrategy;
class PoisonGasStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.POISON_GAS, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerPoison(3000, cell.value, pokemon);
            }
        });
    }
}
exports.PoisonGasStrategy = PoisonGasStrategy;
class BraveBirdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const flyAwayCell = board.getFlyAwayCell(pokemon.positionX, pokemon.positionY);
        if (flyAwayCell) {
            pokemon.moveTo(flyAwayCell.x, flyAwayCell.y, board);
            const adjacentEmptyCells = board
                .getAdjacentCells(flyAwayCell.x, flyAwayCell.y)
                .filter((v) => v.value === undefined);
            if (adjacentEmptyCells.length > 0) {
                const cell = adjacentEmptyCells[0];
                target.moveTo(cell.x, cell.y, board);
                target.handleSpecialDamage(pokemon.stars === 3 ? 90 : pokemon.stars === 2 ? 60 : 30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.BraveBirdStrategy = BraveBirdStrategy;
class MagicalLeafStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerArmorReduction(3000, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.MagicalLeafStrategy = MagicalLeafStrategy;
class StealthRocksStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target, 2);
        const damage = 50;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.STEALTH_ROCKS, pokemon.simulation);
            broadcastAbility(pokemon, { positionX: cell.x, positionY: cell.y });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StealthRocksStrategy = StealthRocksStrategy;
class SpikesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const nbSpikes = Math.round(6 * (1 + pokemon.ap / 100));
        const cells = (0, random_1.pickNRandomIn)(board.getCellsInFront(pokemon, target, 3), nbSpikes);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.SPIKES, pokemon.simulation);
            broadcastAbility(pokemon, { positionX: cell.x, positionY: cell.y });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SpikesStrategy = SpikesStrategy;
class StickyWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target, 2);
        const damage = pokemon.stars === 3 ? 70 : pokemon.stars === 2 ? 35 : 20;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.STICKY_WEB, pokemon.simulation);
            broadcastAbility(pokemon, { positionX: cell.x, positionY: cell.y });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StickyWebStrategy = StickyWebStrategy;
class StruggleBugStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addAbilityPower(-50, pokemon, 0, false);
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StruggleBugStrategy = StruggleBugStrategy;
class QuiverDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(5, pokemon, 1, crit);
        pokemon.addSpecialDefense(5, pokemon, 1, crit);
        pokemon.addSpeed(10, pokemon, 1, crit);
        pokemon.addAbilityPower(20, pokemon, 0, false);
    }
}
exports.QuiverDanceStrategy = QuiverDanceStrategy;
class TailGlowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        pokemon.addAbilityPower(50, pokemon, 0, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.TailGlowStrategy = TailGlowStrategy;
class PrismaticLaserStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const affectedCells = board.cells.filter((v) => v &&
            v.team !== pokemon.team &&
            (v.positionX === pokemon.positionX ||
                v.positionX === pokemon.positionX - 1 ||
                v.positionX === pokemon.positionX + 1));
        affectedCells.forEach((tg) => {
            if (tg) {
                tg.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const teleportationCell = board.getTeleportationCell(tg.positionX, tg.positionY);
                if (teleportationCell) {
                    tg.moveTo(teleportationCell.x, teleportationCell.y, board);
                }
                else {
                    logger_1.logger.error("unable to teleport pokemon", tg);
                }
            }
        });
    }
}
exports.PrismaticLaserStrategy = PrismaticLaserStrategy;
class NightShadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = Math.ceil(((_a = [0.25, 0.33, 0.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.5) *
            target.hp *
            (1 + (0.5 * pokemon.ap) / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.NightShadeStrategy = NightShadeStrategy;
class ChargeBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, false);
        const chain = [target];
        const NB_MAX_TARGETS = 3;
        for (let n = 1, x = target.positionX, y = target.positionY; n < NB_MAX_TARGETS; n++) {
            const nextCell = board
                .getAdjacentCells(x, y)
                .find((cell) => cell.value &&
                cell.value.team === target.team &&
                !chain.includes(cell.value));
            if (nextCell) {
                chain.push(nextCell.value);
                x = nextCell.x;
                y = nextCell.y;
            }
        }
        for (let i = 0; i < chain.length; i++) {
            const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
            chain[i].handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const previous = i === 0 ? pokemon : chain[i - 1];
            broadcastAbility(pokemon, {
                skill: "LINK_CABLE_link",
                positionX: previous.positionX,
                positionY: previous.positionY,
                targetX: chain[i].positionX,
                targetY: chain[i].positionY
            });
        }
    }
}
exports.ChargeBeamStrategy = ChargeBeamStrategy;
class PopulationBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = 10;
        const numberOfAttacks = Math.round(((_a = [4, 8, 12, 16][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8) * (1 + pokemon.ap / 100));
        for (let i = 0; i < numberOfAttacks; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        }
    }
}
exports.PopulationBombStrategy = PopulationBombStrategy;
class ScreechStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const debuff = (_a = [-2, -4, -8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : -8;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addDefense(debuff, pokemon, 1, crit);
                broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
            }
        });
    }
}
exports.ScreechStrategy = ScreechStrategy;
class SandTombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerParalysis(pokemon.stars === 3 ? 8000 : pokemon.stars === 2 ? 5000 : 3000, target, pokemon);
        target.status.triggerSilence(pokemon.stars === 3 ? 8000 : pokemon.stars === 2 ? 5000 : 3000, target, pokemon);
        target.handleSpecialDamage(pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.SandTombStrategy = SandTombStrategy;
class WhirlwindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const x = target.positionX;
        const y = target.positionY;
        const damage = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.flyAway(board);
        broadcastAbility(pokemon, {
            positionX: x,
            positionY: y,
            targetX: target.positionX,
            targetY: target.positionY
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.WhirlwindStrategy = WhirlwindStrategy;
class AcidSprayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        let tg = target;
        const affectedTargetsIds = new Array();
        for (let i = 0; i < 5; i++) {
            if (tg) {
                broadcastAbility(pokemon, {
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
                tg.addSpecialDefense(-5, pokemon, 0, false);
                tg.handleSpecialDamage(33, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                affectedTargetsIds.push(tg.id);
                const cells = board.getAdjacentCells(tg.positionX, tg.positionY);
                tg = cells
                    .filter((v) => v.value &&
                    v.value.team !== pokemon.team &&
                    !affectedTargetsIds.includes(v.value.id))
                    .map((v) => v.value)[0];
            }
            else {
                break;
            }
        }
    }
}
exports.AcidSprayStrategy = AcidSprayStrategy;
class UnboundStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.HOOPA_UNBOUND];
        pokemon.skill = Ability_1.Ability.HYPERSPACE_FURY;
        pokemon.addAttack(10, pokemon, 0, false);
        pokemon.addMaxHP(100, pokemon, 0, false);
        pokemon.toMovingState();
    }
}
exports.UnboundStrategy = UnboundStrategy;
class HyperspaceFuryStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const nbHits = 4 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1);
        for (let i = 0; i < nbHits; i++) {
            target.addDefense(-1, pokemon, 0, false);
            target.addSpecialDefense(-1, pokemon, 0, false);
            target.handleSpecialDamage(15, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        }
        broadcastAbility(pokemon, {
            targetX: target.positionX,
            targetY: target.positionY,
            orientation: nbHits
        });
    }
}
exports.HyperspaceFuryStrategy = HyperspaceFuryStrategy;
class SnipeShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const damage = (_a = [40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const farthestTarget = (_b = state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        if (farthestTarget) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
    }
}
exports.SnipeShotStrategy = SnipeShotStrategy;
class AirSlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        target.status.triggerFlinch(7000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AirSlashStrategy = AirSlashStrategy;
class EggBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .forEach((v) => {
            if (v) {
                const kill = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if (kill.death &&
                    !pokemon.isGhostOpponent &&
                    pokemon.player &&
                    (0, random_1.chance)(0.25, pokemon)) {
                    (0, eggs_1.giveRandomEgg)(pokemon.player, false);
                }
                v.status.triggerArmorReduction(4000, v);
            }
        });
    }
}
exports.EggBombStrategy = EggBombStrategy;
class BodySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(0.3 * pokemon.hp * (1 + pokemon.hp / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.BodySlamStrategy = BodySlamStrategy;
class VineWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((cell) => cell.value)
            .filter((entity) => (entity === null || entity === void 0 ? void 0 : entity.team) === target.team)
            .concat(target)
            .forEach((enemy) => {
            if (enemy) {
                enemy.status.triggerParalysis(3000, enemy, pokemon);
            }
        });
        target.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.VineWhipStrategy = VineWhipStrategy;
class BarbBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            board
                .getAdjacentCells(target.positionX, target.positionY)
                .map((v) => v.value)
                .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
                .concat(target)
                .forEach((v) => {
                if (v) {
                    v.status.triggerPoison(3000, v, pokemon);
                    broadcastAbility(pokemon, {
                        targetX: v.positionX,
                        targetY: v.positionY,
                        orientation: v.orientation
                    });
                }
            });
            target.handleSpecialDamage(pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.BarbBarrageStrategy = BarbBarrageStrategy;
class FloralHealingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        if (pokemon.items.has(Item_1.Item.COMFEY) === false) {
            super.process(pokemon, state, board, target, crit);
        }
        pokemon.handleHeal(pokemon.maxPP, pokemon, 0, false);
    }
}
exports.FloralHealingStrategy = FloralHealingStrategy;
class MagicPowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const silenceDuration = (_b = [2000, 3000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000;
        pokemon.addShield(shield, pokemon, 1, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(silenceDuration, cell.value, pokemon);
            }
        });
    }
}
exports.MagicPowderStrategy = MagicPowderStrategy;
class RetaliateStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbAlliesAlive = board.cells.filter((entity) => entity && entity.team === pokemon.team).length;
        const meter = pokemon.team === Game_1.Team.BLUE_TEAM ? "blueDpsMeter" : "redDpsMeter";
        const nbFallenAllies = pokemon.simulation[meter].size - nbAlliesAlive;
        const damage = pokemon.atk;
        for (let i = 0; i <= nbFallenAllies; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.RetaliateStrategy = RetaliateStrategy;
class SlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const increasedCrit = (_b = [30, 60, 90][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 90;
        crit = (0, random_1.chance)((pokemon.critChance + increasedCrit) / 100, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.SlashStrategy = SlashStrategy;
class OutrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        pokemon.status.triggerConfusion(2000, pokemon, pokemon);
        const damage = Math.round(((_a = [1.5, 2, 2.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2.5) * pokemon.atk);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team && (v === null || v === void 0 ? void 0 : v.id) !== target.id)
            .concat(target)
            .forEach((v) => {
            if (v) {
                broadcastAbility(pokemon, {
                    targetX: v.positionX,
                    targetY: v.positionY
                });
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OutrageStrategy = OutrageStrategy;
class FishiousRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 80 * (pokemon.speed > target.speed ? 2 : 1);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FishiousRendStrategy = FishiousRendStrategy;
class GoldRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const damage = 20 + goldDamage;
        if (pokemon.player) {
            pokemon.player.addMoney(2, true, pokemon);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.GoldRushStrategy = GoldRushStrategy;
class MakeItRainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const damage = 100 + goldDamage;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.MakeItRainStrategy = MakeItRainStrategy;
class RecoverStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.handleHeal(0.25 * pokemon.hp, pokemon, 1, crit);
    }
}
exports.RecoverStrategy = RecoverStrategy;
class TranseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.skill = Ability_1.Ability.HEADBUTT;
        pokemon.effects.delete(Effect_1.Effect.ZEN_MODE);
    }
}
exports.TranseStrategy = TranseStrategy;
class CurseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const highestHp = Math.max(...enemies.map((p) => p.hp));
        const enemiesWithHighestHP = enemies.filter((p) => p.hp === highestHp);
        const cursedEnemy = (0, random_1.pickRandomIn)(enemiesWithHighestHP);
        if (cursedEnemy) {
            const factor = 0.2;
            const curseDelay = ((_a = [8000, 5000, 3000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3000) *
                (1 - (factor * pokemon.ap) / 100) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1);
            cursedEnemy.status.triggerCurse(curseDelay);
        }
    }
}
exports.CurseStrategy = CurseStrategy;
class DoomDesireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.life > 0) {
                broadcastAbility(pokemon, {
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                target.handleSpecialDamage(150, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
            else {
                pokemon.addPP(60, pokemon, 0, false);
            }
        }, 2000));
        pokemon.cooldown = Math.round(200 * (50 / pokemon.speed));
    }
}
exports.DoomDesireStrategy = DoomDesireStrategy;
class PoltergeistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        target.items.forEach((item) => (damage += Item_1.ArtificialItems.includes(item) ? 40 : 20));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PoltergeistStrategy = PoltergeistStrategy;
class CrushGripStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(50 + (target.life / target.hp) * 200);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
    }
}
exports.CrushGripStrategy = CrushGripStrategy;
class AuraSphereStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerSilence(3000, cell.value, pokemon);
            }
        });
    }
}
exports.AuraSphereStrategy = AuraSphereStrategy;
class SketchStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
    }
}
exports.SketchStrategy = SketchStrategy;
class LovelyKissStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        if (target.status.sleep) {
            const damage = (_a = [50, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            const duration = Math.round(((_b = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000) *
                (1 + pokemon.ap / 100) *
                (crit ? pokemon.critPower : 1));
            target.status.triggerSleep(duration, target);
        }
    }
}
exports.LovelyKissStrategy = LovelyKissStrategy;
class OverdriveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(target.positionX, target.positionY, 3);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                const distance = (0, distance_1.distanceC)(cell.x, cell.y, pokemon.positionX, pokemon.positionY);
                const damage = pokemon.atk * (1.2 - 0.2 * (distance - 1));
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
    }
}
exports.OverdriveStrategy = OverdriveStrategy;
class TransformStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (target && target.canBeCopied) {
            pokemon.index = target.index;
            pokemon.rarity = target.rarity;
            pokemon.stars = target.stars;
            pokemon.skill = target.skill;
            pokemon.passive = target.passive;
            pokemon.baseAtk = target.atk;
            pokemon.baseDef = target.def;
            pokemon.baseSpeDef = target.speDef;
            pokemon.baseRange = target.baseRange;
            pokemon.atk = target.atk;
            pokemon.speed = target.speed;
            pokemon.def = target.def;
            pokemon.speDef = target.speDef;
            pokemon.attackType = target.attackType;
            pokemon.ap = target.ap;
            pokemon.maxPP = target.maxPP;
            pokemon.speed = target.speed;
            pokemon.critChance = target.critChance;
            pokemon.critPower = target.critPower;
            pokemon.range = target.range;
            pokemon.attackSprite = target.attackSprite;
            pokemon.shiny = target.shiny;
            pokemon.emotion = target.emotion;
            pokemon.dodge = target.dodge;
        }
    }
}
exports.TransformStrategy = TransformStrategy;
class PsychicFangsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(100, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        target.atk = Math.min(target.atk, target.baseAtk);
        target.def = Math.min(target.def, target.baseDef);
        target.speDef = Math.min(target.speDef, target.baseSpeDef);
    }
}
exports.PsychicFangsStrategy = PsychicFangsStrategy;
class ShedTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const x = pokemon.positionX;
        const y = pokemon.positionY;
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.addShield(80, pokemon, 1, crit);
            const substitute = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(lowestHealthAlly, lowestHealthAlly.team);
            pokemon.moveTo(coord.x, coord.y, board);
            pokemon.simulation.addPokemon(substitute, x, y, pokemon.team, true);
        }
    }
}
exports.ShedTailStrategy = ShedTailStrategy;
class ShadowPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const x = pokemon.positionX;
        const y = pokemon.positionY;
        const lowestHealthEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthEnemy) {
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(lowestHealthEnemy, (lowestHealthEnemy.team + 1) % 2);
            pokemon.orientation = board.orientation(coord.x, coord.y, pokemon.positionX, pokemon.positionY, pokemon, lowestHealthEnemy);
            pokemon.moveTo(coord.x, coord.y, board);
            pokemon.effects.add(Effect_1.Effect.SHADOW_PUNCH_NEXT_ATTACK);
        }
    }
}
exports.ShadowPunchStrategy = ShadowPunchStrategy;
class MagnetBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const centerDamage = (_b = [20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        target.handleSpecialDamage(centerDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, false);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        const mappingAttractCell = [
            {
                to: [target.positionX - 1, target.positionY],
                from: [[target.positionX - 2, target.positionY]]
            },
            {
                to: [target.positionX + 1, target.positionY],
                from: [[target.positionX + 2, target.positionY]]
            },
            {
                to: [target.positionX, target.positionY - 1],
                from: [[target.positionX, target.positionY - 2]]
            },
            {
                to: [target.positionX, target.positionY + 1],
                from: [[target.positionX, target.positionY + 2]]
            },
            {
                to: [target.positionX - 1, target.positionY - 1],
                from: [
                    [target.positionX - 2, target.positionY - 1],
                    [target.positionX - 2, target.positionY - 2],
                    [target.positionX - 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY - 1],
                from: [
                    [target.positionX + 2, target.positionY - 1],
                    [target.positionX + 2, target.positionY - 2],
                    [target.positionX + 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX - 1, target.positionY + 1],
                from: [
                    [target.positionX - 2, target.positionY + 1],
                    [target.positionX - 2, target.positionY + 2],
                    [target.positionX - 1, target.positionY + 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY + 1],
                from: [
                    [target.positionX + 2, target.positionY + 1],
                    [target.positionX + 2, target.positionY + 2],
                    [target.positionX + 1, target.positionY + 2]
                ]
            }
        ];
        mappingAttractCell.forEach((cell) => {
            const attractedEnemies = cell.from
                .map(([x, y]) => board.getValue(x, y))
                .filter((enemy) => enemy && enemy.team === target.team);
            const [destX, destY] = cell.to;
            if (attractedEnemies.length > 0 &&
                board.getValue(destX, destY) === undefined) {
                const attractedEnemy = (0, random_1.pickRandomIn)(attractedEnemies);
                attractedEnemy.moveTo(destX, destY, board);
            }
        });
    }
}
exports.MagnetBombStrategy = MagnetBombStrategy;
class NightSlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        crit = crit || (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.NightSlashStrategy = NightSlashStrategy;
class KowtowCleaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        super.process(pokemon, state, board, target, crit);
        const nbAlliesAlive = board.cells.filter((p) => p && p.team === pokemon.team).length;
        const meter = pokemon.team === Game_1.Team.BLUE_TEAM ? "blueDpsMeter" : "redDpsMeter";
        const nbFallenAllies = pokemon.simulation[meter].size - nbAlliesAlive;
        const damage = Math.round(pokemon.atk * (1.5 + nbFallenAllies * 0.2 * (1 + pokemon.ap / 100)));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.KowtowCleaveStrategy = KowtowCleaveStrategy;
class ShieldsDownStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        broadcastAbility(pokemon, { skill: Ability_1.Ability.SHIELDS_UP });
        const pkm = (0, random_1.pickRandomIn)([
            Pokemon_1.Pkm.MINIOR_KERNEL_BLUE,
            Pokemon_1.Pkm.MINIOR_KERNEL_GREEN,
            Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE,
            Pokemon_1.Pkm.MINIOR_KERNEL_RED
        ]);
        pokemon.index = Pokemon_1.PkmIndex[pkm];
        pokemon.name = pkm;
        pokemon.skill = Ability_1.Ability.SHIELDS_UP;
    }
}
exports.ShieldsDownStrategy = ShieldsDownStrategy;
class ShieldsUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        broadcastAbility(pokemon, { skill: Ability_1.Ability.SHIELDS_UP });
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MINIOR];
        pokemon.name = Pokemon_1.Pkm.MINIOR;
        pokemon.skill = Ability_1.Ability.SHIELDS_DOWN;
    }
}
exports.ShieldsUpStrategy = ShieldsUpStrategy;
class AuraWheelStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (pokemon.name === Pokemon_1.Pkm.MORPEKO) {
            pokemon.name = Pokemon_1.Pkm.MORPEKO_HANGRY;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO_HANGRY];
        }
        else {
            pokemon.name = Pokemon_1.Pkm.MORPEKO;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO];
        }
        pokemon.addSpeed(10, pokemon, 1, crit);
        target.handleSpecialDamage(60, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.cooldown = Math.round(200 * (50 / pokemon.speed));
    }
}
exports.AuraWheelStrategy = AuraWheelStrategy;
class LickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerConfusion(3000, target, pokemon);
        target.status.triggerParalysis(3000, target, pokemon);
        const damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.LickStrategy = LickStrategy;
class FurySwipesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const scale = (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1);
        const min = Math.round(2 * scale);
        const max = Math.round(5 * scale);
        const nbAttacks = (0, number_1.clamp)(Math.floor(Math.random() * (1 + pokemon.luck / 100) * (max - min + 1) + min), min, max);
        for (let n = 0; n < nbAttacks; n++) {
            target.handleSpecialDamage(Math.ceil(pokemon.atk), board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.FurySwipesStrategy = FurySwipesStrategy;
class TickleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const attackLost = 3;
        const defLost = 3;
        const nbMaxEnemiesHit = (_a = [1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
        let nbEnemiesHit = 0;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value &&
                cell.value.team !== pokemon.team &&
                nbEnemiesHit < nbMaxEnemiesHit) {
                nbEnemiesHit++;
                cell.value.addAttack(-attackLost, pokemon, 1, true);
                cell.value.addDefense(-defLost, pokemon, 1, true);
            }
        });
    }
}
exports.TickleStrategy = TickleStrategy;
class AromatherapyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.status.clearNegativeStatus();
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
        });
    }
}
exports.AromatherapyStrategy = AromatherapyStrategy;
class DetectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const adjacentAllies = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .filter((cell) => cell.value != null && cell.value.team === pokemon.team)
            .map((cell) => cell.value);
        const nbEnemiesDetected = board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, 2)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team).length;
        const protectDuration = Math.round(500 *
            nbEnemiesDetected *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1));
        adjacentAllies.forEach((ally) => {
            ally.status.triggerProtect(protectDuration);
        });
    }
}
exports.DetectStrategy = DetectStrategy;
class SpacialRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        const rowToTarget = target.positionY;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team && !p.status.skydiving);
        const n = enemies.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            board.swapValue(enemies[i].positionX, enemies[i].positionY, enemies[n - 1 - i].positionX, enemies[n - 1 - i].positionY);
        }
        for (let x = 0; x < Config_1.BOARD_WIDTH; x++) {
            const targetHit = board.getValue(x, rowToTarget);
            if (targetHit && targetHit.team !== pokemon.team) {
                targetHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.SpacialRendStrategy = SpacialRendStrategy;
class MultiAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let synergyLevelsCount = 0;
        const synergies = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies;
        if (synergies) {
            pokemon.types.forEach((type) => {
                var _a;
                if (type !== Synergy_1.Synergy.ARTIFICIAL) {
                    synergyLevelsCount += (_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0;
                }
            });
        }
        const damage = 15 * synergyLevelsCount;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((v) => v.value)
            .forEach((v) => {
            if (v && v.team !== pokemon.team) {
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.MultiAttackStrategy = MultiAttackStrategy;
class PetalBlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, pokemon.range)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
        pokemon.addAbilityPower(10, pokemon, 0, false);
    }
}
exports.PetalBlizzardStrategy = PetalBlizzardStrategy;
class SunsteelStrikeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.skydiveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
                broadcastAbility(pokemon, {
                    skill: Ability_1.Ability.SEARING_SHOT,
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }, 1000));
        }
    }
}
exports.SunsteelStrikeStrategy = SunsteelStrikeStrategy;
class MoongeistBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.status.triggerParalysis(3000, cell.value, pokemon);
                    cell.value.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                else {
                    cell.value.addShield(100, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.MoongeistBeamStrategy = MoongeistBeamStrategy;
class BloodMoonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(2 * pokemon.atk);
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerWound(3000, cell.value, pokemon);
            }
        });
    }
}
exports.BloodMoonStrategy = BloodMoonStrategy;
class MantisBladesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 1 ? 30 : pokemon.stars === 2 ? 60 : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, true);
    }
}
exports.MantisBladesStrategy = MantisBladesStrategy;
class SpiritBreakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        const apDebuff = -20;
        target.addAbilityPower(apDebuff, pokemon, 1, crit);
    }
}
exports.SpiritBreakStrategy = SpiritBreakStrategy;
class SheerColdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        let executeChance = ((_a = [0.1, 0.2, 0.3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.3) *
            (1 + (0, number_1.min)(0)((pokemon.life - target.life) / target.life));
        if (target.types.has(Synergy_1.Synergy.ICE))
            executeChance = 0;
        else if (target.status.freeze)
            executeChance = 1;
        let damage = (_b = [50, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200;
        if ((0, random_1.chance)(executeChance, pokemon))
            damage = 9999;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.SheerColdStrategy = SheerColdStrategy;
class ZapCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        const duration = pokemon.stars === 3 ? 4000 : pokemon.stars === 2 ? 2000 : 1000;
        target.status.triggerArmorReduction(duration, target);
        target.status.triggerParalysis(duration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.ZapCannonStrategy = ZapCannonStrategy;
class IceHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        target.status.triggerFreeze(3000, target);
        pokemon.status.triggerParalysis(3000, pokemon, pokemon);
        const damage = (_a = [50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.IceHammerStrategy = IceHammerStrategy;
class FacadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        if (pokemon.status.hasNegativeStatus()) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FacadeStrategy = FacadeStrategy;
class ExtremeSpeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 40;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            broadcastAbility(pokemon, {
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.ExtremeSpeedStrategy = ExtremeSpeedStrategy;
class PsychoBoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 140;
        [target.positionX - 1, target.positionX, target.positionX + 1].forEach((positionX) => {
            const tg = board.getValue(positionX, target.positionY);
            if (tg && tg.team !== pokemon.team) {
                broadcastAbility(pokemon, {
                    positionX: tg.positionX,
                    positionY: tg.positionY
                });
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                pokemon.addAbilityPower(-20, pokemon, 0, false);
            }
        });
    }
}
exports.PsychoBoostStrategy = PsychoBoostStrategy;
class PollenPuffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life - b.life)[0];
        if (lowestHealthAlly) {
            const heal = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
            lowestHealthAlly.handleHeal(heal, pokemon, 1, crit);
            broadcastAbility(pokemon, {
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.PollenPuffStrategy = PollenPuffStrategy;
class PsystrikeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const furthestTarget = state.getFarthestTarget(pokemon, board);
        if (furthestTarget) {
            broadcastAbility(pokemon, {
                targetX: furthestTarget.positionX,
                targetY: furthestTarget.positionY
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, furthestTarget.positionX, furthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(80, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                    const teleportationCell = board.getTeleportationCell(cell.value.positionX, cell.value.positionY);
                    if (teleportationCell) {
                        cell.value.moveTo(teleportationCell.x, teleportationCell.y, board);
                    }
                    else {
                        logger_1.logger.error("unable to teleport pokemon", cell.value);
                    }
                }
            });
        }
    }
}
exports.PsystrikeStrategy = PsystrikeStrategy;
class DreamEaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 1 ? 45 : 90;
        const duration = pokemon.stars === 1 ? 2500 : 5000;
        const sleepingTarget = board.find((x, y, entity) => entity.status.sleep && entity.team !== pokemon.team);
        if (sleepingTarget) {
            broadcastAbility(pokemon, {
                targetX: sleepingTarget.positionX,
                targetY: sleepingTarget.positionY
            });
            const coord = state.getNearestAvailablePlaceCoordinates(sleepingTarget, board, 1);
            if (coord) {
                pokemon.moveTo(coord.x, coord.y, board);
            }
            const { takenDamage } = sleepingTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            pokemon.handleHeal(takenDamage, pokemon, 1, crit);
        }
        else {
            target.status.triggerSleep(duration, target);
            broadcastAbility(pokemon, {
                targetX: target.positionX,
                targetY: target.positionY
            });
        }
    }
}
exports.DreamEaterStrategy = DreamEaterStrategy;
class SparkStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 1 ? 40 : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        let previousTarget = target;
        let currentTarget = target;
        let n = 0;
        while (n <= 4) {
            const newTarget = (_a = board
                .getAdjacentCells(currentTarget.positionX, currentTarget.positionY)
                .find((cell) => cell.value &&
                cell.value.team === target.team &&
                cell.value !== previousTarget)) === null || _a === void 0 ? void 0 : _a.value;
            if (newTarget) {
                broadcastAbility(pokemon, {
                    targetX: newTarget.positionX,
                    targetY: newTarget.positionY,
                    positionX: currentTarget.positionX,
                    positionY: currentTarget.positionY,
                    delay: n
                });
                damage = Math.ceil(damage / 2);
                newTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                previousTarget = currentTarget;
                currentTarget = newTarget;
                n++;
            }
            else {
                break;
            }
        }
    }
}
exports.SparkStrategy = SparkStrategy;
class CrunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        if (death) {
            pokemon.handleHeal(Math.ceil(0.5 * target.hp), pokemon, 0, crit);
        }
    }
}
exports.CrunchStrategy = CrunchStrategy;
class CrossPoisonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                cell.value.status.triggerPoison(2000, cell.value, pokemon);
            }
        });
    }
}
exports.CrossPoisonStrategy = CrossPoisonStrategy;
class FireFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerBurn(2000, target, pokemon);
    }
}
exports.FireFangStrategy = FireFangStrategy;
class IceFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerFreeze(1000, target);
    }
}
exports.IceFangStrategy = IceFangStrategy;
class ThunderFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.status.triggerParalysis(3000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.ThunderFangStrategy = ThunderFangStrategy;
class TailWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const defLoss = -0.3 * target.def;
        target.addDefense(defLoss, pokemon, 1, crit);
    }
}
exports.TailWhipStrategy = TailWhipStrategy;
class PsyshieldBashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 60;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            broadcastAbility(pokemon, {
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            pokemon.status.triggerProtect(1000);
        }
    }
}
exports.PsyshieldBashStrategy = PsyshieldBashStrategy;
class TorchSongStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damagePerFlame = 0.5 * pokemon.atk;
        const apGainPerFlame = (_a = [1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        const enemies = [];
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                enemies.push(tg);
            }
        });
        const nbFlames = Math.round(4 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        for (let i = 0; i < nbFlames; i++) {
            const randomTarget = (0, random_1.pickRandomIn)(enemies);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    targetX: randomTarget.positionX,
                    targetY: randomTarget.positionY
                });
                pokemon.addAbilityPower(apGainPerFlame, pokemon, 0, false);
                if ((randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.life) > 0) {
                    randomTarget.handleSpecialDamage(damagePerFlame, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                    if ((0, random_1.chance)(0.3, pokemon)) {
                        randomTarget.status.triggerBurn(2000, randomTarget, pokemon);
                    }
                }
            }, 100 * i));
        }
    }
}
exports.TorchSongStrategy = TorchSongStrategy;
class PowerWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const furthestTarget = state.getFarthestTarget(pokemon, board);
        if (furthestTarget) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, furthestTarget.positionX, furthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    broadcastAbility(pokemon, {
                        skill: "POWER_WHIP/hit",
                        positionX: cell.x,
                        positionY: cell.y
                    });
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
    }
}
exports.PowerWhipStrategy = PowerWhipStrategy;
class DarkHarvestStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            pokemon.effectsSet.add(new effect_1.DarkHarvestEffect(3200, pokemon));
            pokemon.status.triggerSilence(3200, pokemon, pokemon);
        }
    }
}
exports.DarkHarvestStrategy = DarkHarvestStrategy;
class StoneEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const duration = pokemon.stars === 1 ? 5000 : 8000;
        if (pokemon.effects.has(Effect_1.Effect.STONE_EDGE))
            return;
        pokemon.status.triggerSilence(duration, pokemon, pokemon);
        pokemon.effects.add(Effect_1.Effect.STONE_EDGE);
        pokemon.addCritChance(20, pokemon, 1, false);
        pokemon.range += 2;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addCritChance(-20, pokemon, 1, false);
            pokemon.range = (0, number_1.min)(pokemon.baseRange)(pokemon.range - 2);
            pokemon.effects.delete(Effect_1.Effect.STONE_EDGE);
        }, duration));
    }
}
exports.StoneEdgeStrategy = StoneEdgeStrategy;
class PsyShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const ppBurn = ((_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80) * (1 + pokemon.ap / 100);
        const ppStolen = (0, number_1.max)(target.pp)(ppBurn);
        const extraPP = ppBurn - ppStolen;
        target.addPP(-ppStolen, pokemon, 0, crit);
        pokemon.addShield(ppBurn, pokemon, 0, crit);
        if (extraPP > 0) {
            target.handleSpecialDamage(extraPP, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        }
    }
}
exports.PsyShockStrategy = PsyShockStrategy;
class HeavySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        let damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const shield = (_b = [15, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        if (pokemon.hp > target.hp) {
            damage = Math.round(damage * (1 + (0.5 * (pokemon.hp - target.hp)) / target.hp));
        }
        pokemon.addShield(shield, pokemon, 0, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HeavySlamStrategy = HeavySlamStrategy;
class BulldozeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 45, 85][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 85;
        const speedReduction = 10;
        const adjacentsCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        for (const cell of adjacentsCells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                const orientation = board.orientation(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY, pokemon, undefined);
                const destination = board.getKnockBackPlace(cell.value.positionX, cell.value.positionY, orientation);
                if (destination) {
                    cell.value.moveTo(destination.x, destination.y, board);
                    cell.value.cooldown = 500;
                }
                cell.value.addSpeed(-speedReduction, pokemon, 0, crit);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.BulldozeStrategy = BulldozeStrategy;
class RapidSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const buffAmount = Math.round(0.5 * pokemon.atk);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(buffAmount, pokemon, 1, true);
        pokemon.addSpecialDefense(buffAmount, pokemon, 1, true);
    }
}
exports.RapidSpinStrategy = RapidSpinStrategy;
class BounceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const nbBounces = (_a = [1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        for (let i = 0; i < nbBounces; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
                if (destination && pokemon.hp > 0) {
                    broadcastAbility(pokemon, {});
                    pokemon.moveTo(destination.x, destination.y, board);
                    const adjacentCells = board.getAdjacentCells(destination.x, destination.y);
                    adjacentCells.forEach((cell) => {
                        var _a;
                        if (cell.value && cell.value.team !== pokemon.team) {
                            const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
                            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    });
                }
            }, i * 500));
        }
    }
}
exports.BounceStrategy = BounceStrategy;
class GunkShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const baseDuration = (_b = [2000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000;
        const duration = Math.round(baseDuration * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.GunkShotStrategy = GunkShotStrategy;
class AncientPowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(25, pokemon, 0, false);
    }
}
exports.AncientPowerStrategy = AncientPowerStrategy;
class MuddyWaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerArmorReduction(4000, cell.value);
                cell.value.status.triggerWound(4000, cell.value, pokemon);
            }
        });
    }
}
exports.MuddyWaterStrategy = MuddyWaterStrategy;
class MoonDreamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const duration = pokemon.stars === 1 ? 3000 : pokemon.stars === 2 ? 6000 : 9000;
        const shield = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const count = 3;
        const allies = board.cells.filter((p) => p && p.team === pokemon.team && p.id !== pokemon.id);
        const alliesHit = allies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.targetX, pokemon.targetY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.targetX, pokemon.targetY))
            .slice(0, count);
        alliesHit.forEach((ally) => {
            ally.addShield(shield, pokemon, 1, crit);
            broadcastAbility(pokemon, {
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
        target.status.triggerSleep(duration, target);
    }
}
exports.MoonDreamStrategy = MoonDreamStrategy;
class StoneAxeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        const damage = 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.STEALTH_ROCKS, pokemon.simulation);
            broadcastAbility(pokemon, {
                skill: Ability_1.Ability.STEALTH_ROCKS,
                positionX: cell.x,
                positionY: cell.y
            });
        });
    }
}
exports.StoneAxeStrategy = StoneAxeStrategy;
class FlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const duration = (_a = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 3)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerBlinded(duration, cell.value);
            }
        });
    }
}
exports.FlashStrategy = FlashStrategy;
class RockHeadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(1.2 * (pokemon.atk + pokemon.def));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.RockHeadStrategy = RockHeadStrategy;
class CrushClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const defLoss = (_a = [-5, -10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : -6;
        target.addDefense(defLoss, pokemon, 0, false);
        for (let i = 0; i < 2; i++) {
            target.handleSpecialDamage(pokemon.atk, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        }
    }
}
exports.CrushClawStrategy = CrushClawStrategy;
class FireLashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerArmorReduction(4000, target);
        target.handleSpecialDamage(120, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FireLashStrategy = FireLashStrategy;
class DrainPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const result = target.handleSpecialDamage(pokemon.atk * 2, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.handleHeal(result.takenDamage * 2, pokemon, 0, false);
    }
}
exports.DrainPunchStrategy = DrainPunchStrategy;
class FairyLockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerLocked(5000, target);
        const cells = board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .filter((cell) => cell && cell.value && cell.value.team !== pokemon.team);
        cells.forEach((cell) => {
            var _a;
            broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
            (_a = cell.value) === null || _a === void 0 ? void 0 : _a.handleSpecialDamage(Math.round(90 / cells.length), board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.FairyLockStrategy = FairyLockStrategy;
class GravityStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const lockDuration = Math.round(2000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        board.forEach((x, y, unitOnCell) => {
            if (unitOnCell && unitOnCell.team !== pokemon.team) {
                unitOnCell.status.triggerLocked(lockDuration, target);
            }
        });
    }
}
exports.GravityStrategy = GravityStrategy;
class InfestationStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const numberOfBugAllies = board.cells.filter((entity) => entity && entity.team === pokemon.team && entity.types.has(Synergy_1.Synergy.BUG)).length;
        const damage = numberOfBugAllies * 10;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.player && pokemon.count.ult === 1) {
            const bugsOnBench = (0, schemas_1.values)((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.board).filter((p) => p && p.types.has(Synergy_1.Synergy.BUG) && (0, board_1.isOnBench)(p));
            const mostPowerfulBug = (0, pokemon_entity_1.getStrongestUnit)(bugsOnBench);
            if (mostPowerfulBug) {
                broadcastAbility(pokemon, {
                    positionX: mostPowerfulBug.positionX,
                    positionY: pokemon.team === Game_1.Team.RED_TEAM ? 8 : 0,
                    targetX: pokemon.positionX,
                    targetY: pokemon.positionY
                });
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    const coord = state.getNearestAvailablePlaceCoordinates(pokemon, board);
                    if (coord) {
                        pokemon.simulation.addPokemon(mostPowerfulBug, coord.x, coord.y, pokemon.team, true);
                    }
                }, (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, mostPowerfulBug.positionX, mostPowerfulBug.positionY) *
                    150 -
                    30));
            }
        }
    }
}
exports.InfestationStrategy = InfestationStrategy;
class GulpMissileStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let missilePkm = Pokemon_1.Pkm.ARROKUDA;
        let missilePkmString = "arrokuda";
        const damage = 55;
        if ((0, random_1.chance)(0.33, pokemon)) {
            missilePkm = Pokemon_1.Pkm.PIKACHU;
            missilePkmString = "pikachu";
        }
        broadcastAbility(pokemon, {
            skill: `GULP_MISSILE/${missilePkmString}`
        });
        const missile = pokemon_factory_1.default.createPokemonFromName(missilePkm, pokemon.player);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const coord = state.getNearestAvailablePlaceCoordinates(target, board);
            if (coord) {
                const entity = pokemon.simulation.addPokemon(missile, coord.x, coord.y, pokemon.team, true);
                entity.pp = entity.maxPP;
                const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }
        }, (0, distance_1.distanceM)(target.positionX, target.positionY, pokemon.positionX, pokemon.positionY) *
            150 -
            30));
    }
}
exports.GulpMissileStrategy = GulpMissileStrategy;
class DoubleShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.status.triggerParalysis(3000, pokemon, pokemon);
        const damage = pokemon.stars === 3 ? 200 : pokemon.stars === 2 ? 100 : 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DoubleShockStrategy = DoubleShockStrategy;
class PurifyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.handleHeal(heal, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
    }
}
exports.PurifyStrategy = PurifyStrategy;
class PastelVeilStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const shield = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon, true);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.status.clearNegativeStatus();
                    cell.value.addShield(shield, pokemon, 1, crit);
                }
            });
            broadcastAbility(pokemon, {
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.PastelVeilStrategy = PastelVeilStrategy;
class CharmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const attackReduce = (_a = [2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        target.addAttack(-attackReduce, pokemon, 1, crit);
        target.status.triggerCharm(3000, target, pokemon, false);
    }
}
exports.CharmStrategy = CharmStrategy;
class EntrainmentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const ppGained = 10;
        pokemon.addPP(ppGained, pokemon, 1, crit);
        if (target.skill !== Ability_1.Ability.ENTRAINMENT) {
            target.skill = Ability_1.Ability.ENTRAINMENT;
        }
        else {
            const potentialTargets = [];
            board.forEach((x, y, value) => {
                if (value && value.team === pokemon.team && value.life > 0) {
                    potentialTargets.push({ x, y, value });
                }
            });
            potentialTargets.sort((a, b) => (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, a.x, a.y) -
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, b.x, b.y));
            if (potentialTargets.length > 0) {
                target.skill = Ability_1.Ability.ENTRAINMENT;
            }
        }
    }
}
exports.EntrainmentStrategy = EntrainmentStrategy;
class OctazookaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.ceil(pokemon.atk * 3);
        pokemon.count.attackCount++;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false);
        target.status.triggerBlinded(4000, target);
    }
}
exports.OctazookaStrategy = OctazookaStrategy;
class PsychoShiftStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const farthestEnemy = state.getFarthestTarget(pokemon, board);
        broadcastAbility(pokemon, {
            positionX: target.positionX,
            positionY: target.positionY,
            targetX: farthestEnemy === null || farthestEnemy === void 0 ? void 0 : farthestEnemy.positionX,
            targetY: farthestEnemy === null || farthestEnemy === void 0 ? void 0 : farthestEnemy.positionY
        });
        if (farthestEnemy && farthestEnemy.id !== target.id) {
            const x = farthestEnemy.positionX;
            const y = farthestEnemy.positionY;
            farthestEnemy.moveTo(target.positionX, target.positionY, board);
            target.moveTo(x, y, board);
            farthestEnemy.handleSpecialDamage(60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        target.handleSpecialDamage(60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PsychoShiftStrategy = PsychoShiftStrategy;
class GlaiveRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        pokemon.status.triggerArmorReduction(6000, pokemon);
        const destinationRow = pokemon.team === Game_1.Team.RED_TEAM
            ? pokemon.positionY <= 1
                ? Config_1.BOARD_HEIGHT - 1
                : 0
            : pokemon.positionY >= Config_1.BOARD_HEIGHT - 2
                ? 0
                : Config_1.BOARD_HEIGHT - 1;
        const destination = board.getClosestAvailablePlace(pokemon.positionX, destinationRow);
        const enemiesHit = new Set();
        if (destination) {
            broadcastAbility(pokemon, {
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: destination.x,
                targetY: destination.y
            });
            pokemon.moveTo(destination.x, destination.y, board);
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, destination.x, destination.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    enemiesHit.add(cell.value);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
        if (enemiesHit.size === 0) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.GlaiveRushStrategy = GlaiveRushStrategy;
class FoulPlayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3
            ? target.atk * 6
            : pokemon.stars === 2
                ? target.atk * 4
                : target.atk * 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.FoulPlayStrategy = FoulPlayStrategy;
class DoubleIronBashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(pokemon.atk * 1.5);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        target.status.triggerFlinch(3000, pokemon);
    }
}
exports.DoubleIronBashStrategy = DoubleIronBashStrategy;
class RoarStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        let farthestEmptyCell = null;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && target.id !== cell.value.id) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                board.swapValue(target.positionX, target.positionY, cell.value.positionX, cell.value.positionY);
            }
            if (!cell.value) {
                farthestEmptyCell = cell;
            }
        });
        if (farthestEmptyCell) {
            const { x, y } = farthestEmptyCell;
            board.swapValue(target.positionX, target.positionY, x, y);
        }
    }
}
exports.RoarStrategy = RoarStrategy;
class IvyCudgelStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.passive === Passive_1.Passive.OGERPON_TEAL) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
                .forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.handleHeal(20, pokemon, 1, crit);
                }
            });
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_WELLSPRING) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
                .forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.addPP(20, pokemon, 1, crit);
                }
            });
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_HEARTHFLAME) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.status.triggerBurn(5000, pokemon, cell.value);
                }
            });
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_CORNERSTONE) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.status.triggerFlinch(5000, pokemon, cell.value);
                }
            });
        }
    }
}
exports.IvyCudgelStrategy = IvyCudgelStrategy;
class ForcePalmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (target.status.paralysis) {
            let farthestEmptyCell = null;
            (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                if (!cell.value) {
                    farthestEmptyCell = cell;
                }
            });
            if (farthestEmptyCell != null) {
                const { x, y } = farthestEmptyCell;
                target.moveTo(x, y, board);
            }
        }
        else {
            target.status.triggerParalysis(6000, target, pokemon);
        }
        const additionalDamage = target.status.paralysis ? 40 : 0;
        const damage = Math.round(60 + target.hp * 0.1 + additionalDamage);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ForcePalmStrategy = ForcePalmStrategy;
class SteelWingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = ((_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40) + 2 * pokemon.def;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    broadcastAbility(pokemon, { positionX: cell.x, positionY: cell.y });
                    pokemon.addDefense(1, pokemon, 0, false);
                    cell.value.addDefense(-1, pokemon, 0, false);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.SteelWingStrategy = SteelWingStrategy;
class BideStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const startingHealth = pokemon.life + pokemon.shield;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            broadcastAbility(pokemon, {
                targetX: target.positionX,
                targetY: target.positionY
            });
            const multiplier = 2;
            const currentHealth = pokemon.life + pokemon.shield;
            const damage = (startingHealth - currentHealth) * multiplier;
            board
                .getAdjacentCells(target.positionX, target.positionY, true)
                .forEach((cell) => {
                if (cell.value && pokemon.team != cell.value.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, 3000));
    }
}
exports.BideStrategy = BideStrategy;
class YawnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const opponentsTargetingMe = board.cells.filter((entity) => entity != null &&
            entity.team !== pokemon.team &&
            entity.targetX === pokemon.positionX &&
            entity.targetY === pokemon.positionY);
        opponentsTargetingMe.forEach((opponent) => {
            opponent.status.triggerFatigue(3000, pokemon);
            opponent.addAbilityPower(-20, pokemon, 0, false);
        });
        const shield = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        pokemon.addShield(shield, pokemon, 1, true);
        pokemon.cooldown = Math.round(1500 * (50 / pokemon.speed));
    }
}
exports.YawnStrategy = YawnStrategy;
class ShoreUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let healFactor = (_a = [0.2, 0.25][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.25;
        if (pokemon.simulation.weather === Weather_1.Weather.SANDSTORM) {
            healFactor += 0.1;
        }
        pokemon.handleHeal(healFactor * pokemon.hp, pokemon, 1, crit);
    }
}
exports.ShoreUpStrategy = ShoreUpStrategy;
class PoisonStingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        let maxStacks = 3;
        if (pokemon.effects.has(Effect_1.Effect.VENOMOUS)) {
            maxStacks = 4;
        }
        if (pokemon.effects.has(Effect_1.Effect.TOXIC)) {
            maxStacks = 5;
        }
        const nbStacksToApply = (_a = [2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const currentStacks = target.status.poisonStacks;
        const extraDamage = currentStacks + nbStacksToApply > maxStacks
            ? (currentStacks + nbStacksToApply - maxStacks) *
                ((_b = [25, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100)
            : 0;
        for (let i = 0; i < nbStacksToApply; i++) {
            target.status.triggerPoison(4000, target, pokemon);
        }
        if (extraDamage > 0) {
            target.handleSpecialDamage(extraDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.PoisonStingStrategy = PoisonStingStrategy;
class WoodHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 3 * pokemon.atk;
        const recoil = pokemon.atk;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
            }
        }, 500));
    }
}
exports.WoodHammerStrategy = WoodHammerStrategy;
class TrickOrTreatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (target.items.size > 0) {
            const item = (0, schemas_1.values)(target.items)[0];
            target.removeItem(item);
            pokemon.addItem(item);
        }
        else if (pokemon.ap <= 50) {
            const lifeReductionFactor = 0.4 / ((1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
            target.handleSpecialDamage(target.life * (1 - lifeReductionFactor), board, Game_1.AttackType.TRUE, pokemon, false, false);
            target.hp = (0, number_1.min)(1)(Math.floor(target.hp * lifeReductionFactor));
            target.status.triggerFlinch(3000, target, pokemon);
        }
        else if (pokemon.ap <= 100) {
            const originalAbility = target.skill;
            const originalAttack = target.atk;
            const originalDefense = target.def;
            const originalSpecialDefense = target.speDef;
            const originalIndex = target.index;
            const duration = Math.round(3000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
            target.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MAGIKARP];
            target.skill = Ability_1.Ability.SPLASH;
            target.atk = 1;
            target.def = 1;
            target.speDef = 1;
            target.commands.push(new simulation_command_1.DelayedCommand(() => {
                target.skill = originalAbility;
                target.atk = originalAttack;
                target.def = originalDefense;
                target.speDef = originalSpecialDefense;
                target.index = originalIndex;
            }, duration));
        }
        else if (pokemon.ap <= 150) {
            target.status.runeProtect = false;
            const duration = Math.round(3000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
            target.status.triggerSleep(duration, target);
            target.status.triggerPoison(duration, target, pokemon);
            target.status.triggerBurn(duration, target, pokemon);
            target.status.triggerWound(duration, target, pokemon);
        }
        else {
            target.status.curseFate = true;
            target.status.curseTorment = true;
            target.status.curseVulnerability = true;
            target.status.curseFate = true;
            const curseTimer = Math.round(3000 / ((1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1)));
            target.status.triggerCurse(curseTimer);
        }
    }
}
exports.TrickOrTreatStrategy = TrickOrTreatStrategy;
class FreezingGlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    cell.value.status.triggerFreeze(3000, pokemon);
                }
            }
        });
    }
}
exports.FreezingGlareStrategy = FreezingGlareStrategy;
class ThunderousKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.status.triggerFlinch(4000, pokemon);
        target.addDefense(-10, pokemon, 1, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        let farthestEmptyCell = null;
        (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && target.id !== cell.value.id) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.status.triggerFlinch(4000, pokemon);
                    cell.value.addDefense(-5, pokemon, 1, crit);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                }
                board.swapValue(target.positionX, target.positionY, cell.value.positionX, cell.value.positionY);
            }
            if (!cell.value) {
                farthestEmptyCell = cell;
            }
        });
        if (farthestEmptyCell) {
            const { x, y } = farthestEmptyCell;
            board.swapValue(target.positionX, target.positionY, x, y);
        }
    }
}
exports.ThunderousKickStrategy = ThunderousKickStrategy;
class FieryWrathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 33;
        board.forEach((x, y, value) => {
            if (value && pokemon.team != value.team) {
                if ((0, random_1.chance)(0.5, pokemon)) {
                    value.status.triggerFlinch(4000, value);
                }
                broadcastAbility(pokemon, {
                    positionX: x,
                    positionY: y,
                    orientation: value.orientation
                });
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FieryWrathStrategy = FieryWrathStrategy;
class ViseGripStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.status.triggerLocked(4000, pokemon);
        pokemon.status.triggerLocked(4000, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const defGain = target.def * 1;
        const spedefGain = target.speDef * 1;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        pokemon.addSpecialDefense(spedefGain, pokemon, 1, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addDefense(-defGain, pokemon, 1, crit);
            pokemon.addSpecialDefense(-spedefGain, pokemon, 1, crit);
        }, 4000));
    }
}
exports.ViseGripStrategy = ViseGripStrategy;
class LandsWrathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const atkDamage = Math.round(pokemon.atk * (1 + pokemon.ap / 100));
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(40 + atkDamage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, false);
                cell.value.addDefense(-8, pokemon, 0.5, crit);
                cell.value.addSpecialDefense(-8, pokemon, 0.5, crit);
                broadcastAbility(pokemon, {
                    skill: "LANDS_WRATH/hit",
                    positionX: cell.x,
                    positionY: cell.y
                });
            }
        });
    }
}
exports.LandsWrathStrategy = LandsWrathStrategy;
class ThousandArrowsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 60;
        const numberOfProjectiles = 33;
        for (let i = 0; i < numberOfProjectiles; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
                const y = (0, random_1.randomBetween)(0, Config_1.BOARD_HEIGHT - 1);
                const value = board.getValue(x, y);
                if (value && value.team !== pokemon.team) {
                    value.status.triggerLocked(1000, value);
                    value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                broadcastAbility(pokemon, {
                    positionX: x,
                    positionY: Config_1.BOARD_HEIGHT - 1,
                    targetX: x,
                    targetY: y
                });
            }, i * 100));
        }
    }
}
exports.ThousandArrowsStrategy = ThousandArrowsStrategy;
class CoreEnforcerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerLocked(3000, target);
        target.status.triggerSilence(3000, target);
        target.handleSpecialDamage(150, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        broadcastAbility(pokemon, {
            skill: "CORE_ENFORCER/hit",
            positionX: target.positionX,
            positionY: target.positionY
        });
    }
}
exports.CoreEnforcerStrategy = CoreEnforcerStrategy;
class BurnUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.status.triggerBurn(3000, pokemon, pokemon);
    }
}
exports.BurnUpStrategy = BurnUpStrategy;
class PowerHugStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.status.triggerLocked(3000, target);
        target.status.triggerParalysis(3000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PowerHugStrategy = PowerHugStrategy;
class MortalSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 30, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                const abilityTarget = cell.value;
                const enemyTarget = board.getValue(abilityTarget.targetX, abilityTarget.targetY);
                if (enemyTarget === pokemon) {
                    abilityTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    abilityTarget.status.triggerPoison(4000, abilityTarget, pokemon);
                    let newY = -1;
                    if (pokemon.team === Game_1.Team.BLUE_TEAM &&
                        abilityTarget.positionY + 1 < Config_1.BOARD_HEIGHT) {
                        newY = abilityTarget.positionY + 1;
                    }
                    else if (abilityTarget.positionY - 1 > 0) {
                        newY = abilityTarget.positionY - 1;
                    }
                    if (newY !== -1 &&
                        board.getValue(abilityTarget.positionX, abilityTarget.positionY + 1) === undefined) {
                        abilityTarget.moveTo(abilityTarget.positionX, newY, board);
                        abilityTarget.cooldown = 500;
                    }
                }
            }
        });
    }
}
exports.MortalSpinStrategy = MortalSpinStrategy;
class MetalClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const atkBuff = (_b = [2, 4, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        pokemon.addAttack(atkBuff, pokemon, 1, crit);
    }
}
exports.MetalClawStrategy = MetalClawStrategy;
class FirestarterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const speedBuff = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell, i) => {
                if (cell.x === farthestCoordinate.x &&
                    cell.y === farthestCoordinate.y) {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        pokemon.addSpeed(speedBuff, pokemon, 1, crit);
                    }, 500));
                }
                else {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.EMBER, pokemon.simulation);
                        broadcastAbility(pokemon, { targetX: cell.x, targetY: cell.y });
                        if (cell.value && cell.value.team != pokemon.team) {
                            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    }, i * 50));
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        board.addBoardEffect(cell.x, cell.y, Effect_1.Effect.EMBER, pokemon.simulation);
                    }, 400 + i * 50));
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.FirestarterStrategy = FirestarterStrategy;
class BoneArmorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const lowestHealthEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthEnemy) {
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(lowestHealthEnemy, (lowestHealthEnemy.team + 1) % 2);
            pokemon.moveTo(coord.x, coord.y, board);
            const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
            const defBuff = (_b = [4, 8, 12][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
            const attack = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (attack.takenDamage > 0) {
                pokemon.handleHeal(attack.takenDamage, pokemon, 1, crit);
            }
            if (attack.death) {
                pokemon.addDefense(defBuff, pokemon, 0, false);
                pokemon.addSpecialDefense(defBuff, pokemon, 0, false);
            }
        }
    }
}
exports.BoneArmorStrategy = BoneArmorStrategy;
class TopsyTurvyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (target.atk > target.baseAtk) {
                const d = target.atk - target.baseAtk;
                target.addAttack(-2 * d, pokemon, 0, false);
            }
            if (target.ap > 0) {
                target.addAbilityPower(-2 * target.ap, pokemon, 0, false);
            }
            if (target.def > target.baseDef) {
                const d = target.def - target.baseDef;
                target.addDefense(-2 * d, pokemon, 0, false);
            }
            if (target.speDef > target.baseSpeDef) {
                const d = target.speDef - target.baseSpeDef;
                target.addSpecialDefense(-2 * d, pokemon, 0, false);
            }
        }, 500));
    }
}
exports.TopsyTurvyStrategy = TopsyTurvyStrategy;
class RageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const rageDuration = 3000;
        pokemon.status.triggerRage(rageDuration, pokemon);
        const missingHp = pokemon.hp - pokemon.life;
        const atkBoost = pokemon.baseAtk * 0.1 * Math.floor(missingHp / (pokemon.hp / 10));
        pokemon.addAttack(atkBoost, pokemon, 1, true);
    }
}
exports.RageStrategy = RageStrategy;
class BrickBreakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 1.5 * pokemon.atk;
        if (target.status.protect) {
            target.status.protect = false;
            target.status.protectCooldown = 0;
        }
        if (target.status.magicBounce) {
            target.status.magicBounce = false;
            target.status.magicBounceCooldown = 0;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        target.status.triggerArmorReduction(4000, target);
    }
}
exports.BrickBreakStrategy = BrickBreakStrategy;
class TauntStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const shield = 0.25 * pokemon.hp;
        pokemon.addShield(shield, pokemon, 0.5, crit);
        const enemiesTaunted = board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 2)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value);
        enemiesTaunted.forEach((enemy) => {
            enemy.targetX = pokemon.positionX;
            enemy.targetY = pokemon.positionY;
            broadcastAbility(pokemon, {
                skill: "TAUNT_HIT",
                targetX: enemy.positionX,
                targetY: enemy.positionY
            });
        });
    }
}
exports.TauntStrategy = TauntStrategy;
class BulkUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const atkBoost = Math.ceil(0.5 * pokemon.baseAtk);
        const defBoost = Math.ceil(0.5 * pokemon.baseDef);
        pokemon.addAttack(atkBoost, pokemon, 1, crit);
        pokemon.addDefense(defBoost, pokemon, 1, crit);
    }
}
exports.BulkUpStrategy = BulkUpStrategy;
class CutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 0.3 * target.hp;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerWound(5000, target, pokemon);
    }
}
exports.CutStrategy = CutStrategy;
class FlyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.status.triggerProtect(2000);
            broadcastAbility(pokemon, {
                skill: "FLYING_TAKEOFF",
                targetX: destination.target.positionX,
                targetY: destination.target.positionY
            });
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                broadcastAbility(pokemon, {
                    skill: "FLYING_SKYDIVE",
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (destination.target && destination.target.life > 0) {
                    const damage = 4 * pokemon.atk;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.FlyStrategy = FlyStrategy;
class SurfStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            broadcastAbility(pokemon, {
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    const surfAngle = (0, number_1.calcAngleDegrees)(farthestCoordinate.x - pokemon.positionX, farthestCoordinate.y - pokemon.positionY);
                    const targetAngle = (0, number_1.calcAngleDegrees)(cell.value.positionX - pokemon.positionX, cell.value.positionY - pokemon.positionY);
                    const dx = (surfAngle > 180 ? -1 : 1) * (targetAngle < surfAngle ? +1 : -1);
                    const newX = cell.x + dx;
                    if (newX >= 0 &&
                        newX < Config_1.BOARD_WIDTH &&
                        board.getValue(newX, cell.y) === undefined) {
                        cell.value.moveTo(newX, cell.y, board);
                        cell.value.cooldown = 500;
                    }
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.SurfStrategy = SurfStrategy;
class StrengthStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 2 * (pokemon.atk + pokemon.def + pokemon.speDef) + pokemon.ap;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, false);
    }
}
exports.StrengthStrategy = StrengthStrategy;
class HardenStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const defGain = (_a = [4, 8, 12][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12;
        pokemon.addDefense(defGain, pokemon, 1, crit);
    }
}
exports.HardenStrategy = HardenStrategy;
class ColumnCrushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const pillar = board.cells.find((entity) => entity &&
            entity.team === pokemon.team &&
            [Pokemon_1.Pkm.PILLAR_WOOD, Pokemon_1.Pkm.PILLAR_IRON, Pokemon_1.Pkm.PILLAR_CONCRETE].includes(entity.name));
        if (pillar) {
            const pillarX = pillar.positionX;
            const pillarY = pillar.positionY;
            const remainingHp = pillar.hp;
            const pillarType = pillar.name;
            const team = pillar.team === Game_1.Team.BLUE_TEAM
                ? pillar.simulation.blueTeam
                : pillar.simulation.redTeam;
            pillar.shield = 0;
            pillar.handleSpecialDamage(9999, board, Game_1.AttackType.TRUE, null, false);
            pokemon.moveTo(pillarX, pillarY, board);
            pokemon.cooldown = 1000;
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                const damage = ((_a = [50, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150) + remainingHp;
                let enemyHit;
                const targetCoordinate = pokemon.state.getNearestTargetAtSightCoordinates(pokemon, board);
                if (targetCoordinate) {
                    enemyHit = board.getValue(targetCoordinate.x, targetCoordinate.y);
                }
                if (!enemyHit) {
                    enemyHit = board.cells.find((entity) => entity && entity.team !== pokemon.team);
                }
                if (enemyHit) {
                    pokemon.targetX = enemyHit.positionX;
                    pokemon.targetY = enemyHit.positionY;
                    const landingX = enemyHit.positionX;
                    const landingY = enemyHit.positionY;
                    const travelTime = (0, distance_1.distanceE)(pillarX, pillarY, enemyHit.positionX, enemyHit.positionY) * 160;
                    broadcastAbility(pokemon, {
                        positionX: pillar.positionX,
                        positionY: pillar.positionY,
                        targetX: enemyHit.positionX,
                        targetY: enemyHit.positionY,
                        orientation: [
                            Pokemon_1.Pkm.PILLAR_WOOD,
                            Pokemon_1.Pkm.PILLAR_IRON,
                            Pokemon_1.Pkm.PILLAR_CONCRETE
                        ].indexOf(pillarType)
                    });
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        broadcastAbility(pokemon, {
                            skill: Ability_1.Ability.ROCK_SMASH,
                            positionX: landingX,
                            positionY: landingY,
                            targetX: landingX,
                            targetY: landingY
                        });
                        if (enemyHit && enemyHit.life > 0) {
                            enemyHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    }, travelTime));
                }
            }, 500));
        }
        else {
            const pillarType = (_a = [Pokemon_1.Pkm.PILLAR_WOOD, Pokemon_1.Pkm.PILLAR_IRON, Pokemon_1.Pkm.PILLAR_CONCRETE][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : Pokemon_1.Pkm.PILLAR_CONCRETE;
            const pillar = pokemon_factory_1.default.createPokemonFromName(pillarType, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(pokemon, pokemon.team);
            pokemon.simulation.addPokemon(pillar, coord.x, coord.y, pokemon.team, true);
        }
    }
}
exports.ColumnCrushStrategy = ColumnCrushStrategy;
class WonderRoomStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            const enemy = cell.value;
            if (enemy && enemy.team !== pokemon.team) {
                enemy.effects.add(Effect_1.Effect.WONDER_ROOM);
                enemy.commands.push(new simulation_command_1.DelayedCommand(() => {
                    enemy.effects.delete(Effect_1.Effect.WONDER_ROOM);
                }, 5000));
            }
        });
    }
}
exports.WonderRoomStrategy = WonderRoomStrategy;
class DarkLariatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const hits = Math.round((0.4 + 0.007 * pokemon.speed) * 3);
        target.status.triggerFlinch(1000, target, pokemon);
        for (let i = 0; i < hits; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (target.life > 0) {
                    const damage = 1 * pokemon.atk;
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    if (pokemon.effects.has(Effect_1.Effect.VICTORY_STAR)) {
                        pokemon.addAttack(1, pokemon, 0, false);
                    }
                    else if (pokemon.effects.has(Effect_1.Effect.DROUGHT)) {
                        pokemon.addAttack(2, pokemon, 0, false);
                    }
                    else if (pokemon.effects.has(Effect_1.Effect.DESOLATE_LAND)) {
                        pokemon.addAttack(3, pokemon, 0, false);
                    }
                }
            }, Math.round((i * 1000) / hits)));
        }
        const dx = target.positionX - pokemon.positionX;
        const dy = target.positionY - pokemon.positionY;
        const freeCellBehind = board.getClosestAvailablePlace(target.positionX + dx, target.positionY + dy);
        broadcastAbility(pokemon, {
            targetX: (_a = freeCellBehind === null || freeCellBehind === void 0 ? void 0 : freeCellBehind.x) !== null && _a !== void 0 ? _a : pokemon.positionX,
            targetY: (_b = freeCellBehind === null || freeCellBehind === void 0 ? void 0 : freeCellBehind.y) !== null && _b !== void 0 ? _b : pokemon.positionY
        });
        if (freeCellBehind) {
            pokemon.moveTo(freeCellBehind.x, freeCellBehind.y, board);
            pokemon.cooldown = 600;
        }
    }
}
exports.DarkLariatStrategy = DarkLariatStrategy;
class BoltBeakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.life > 0) {
                target.handleSpecialDamage(target.pp > 40 ? 160 : 80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }, 250));
    }
}
exports.BoltBeakStrategy = BoltBeakStrategy;
class FreezeDryStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.life > 0) {
                const damage = 70 * (1 + pokemon.ap / 100) + pokemon.speDef;
                const killDamage = 30 * (1 + pokemon.ap / 100) + pokemon.speDef * 0.5;
                const x = target.positionX;
                const y = target.positionY;
                const attackResult = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                if (attackResult.death) {
                    const cells = board.getAdjacentCells(x, y, false);
                    cells.forEach((cell) => {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            broadcastAbility(pokemon, {
                                positionX: x,
                                positionY: y,
                                targetX: cell.x,
                                targetY: cell.y
                            });
                            cell.value.handleSpecialDamage(killDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                        }
                    });
                }
            }
        }, 250));
    }
}
exports.FreezeDryStrategy = FreezeDryStrategy;
class DragonPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 20;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.life > 0) {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                board
                    .getAdjacentCells(target.positionX, target.positionY, false)
                    .filter((cell) => cell.value && cell.value.team !== pokemon.team)
                    .forEach((cell) => {
                    if (cell.value) {
                        broadcastAbility(pokemon, {
                            positionX: target.positionX,
                            positionY: target.positionY,
                            targetX: cell.x,
                            targetY: cell.y
                        });
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                            if (pokemon && cell.value) {
                                board
                                    .getAdjacentCells(cell.value.positionX, cell.value.positionY, false)
                                    .filter((c) => c.value && c.value.team !== pokemon.team)
                                    .forEach((c) => {
                                    var _a;
                                    broadcastAbility(pokemon, {
                                        positionX: cell.x,
                                        positionY: cell.y,
                                        targetX: c.x,
                                        targetY: c.y
                                    });
                                    (_a = c.value) === null || _a === void 0 ? void 0 : _a.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                                });
                            }
                        }, 400));
                    }
                });
            }
        }, 400));
    }
}
exports.DragonPulseStrategy = DragonPulseStrategy;
class FrostBreathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [35, 70, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const [dx, dy] = orientation_1.OrientationVector[pokemon.orientation];
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        const cellsHit = [[pokemon.positionX + dx, pokemon.positionY + dy]];
        for (const o of orientations) {
            cellsHit.push([
                pokemon.positionX + dx + orientation_1.OrientationVector[o][0],
                pokemon.positionY + dy + +orientation_1.OrientationVector[o][1]
            ]);
        }
        cellsHit.forEach((cell) => {
            const value = board.getValue(cell[0], cell[1]);
            if (value && value.team !== pokemon.team) {
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    value.status.triggerFreeze(2000, value);
                }
            }
        });
    }
}
exports.FrostBreathStrategy = FrostBreathStrategy;
class SaltCureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        cells.forEach((cell) => {
            if (cell.value) {
                if (cell.value.team === pokemon.team) {
                    cell.value.addShield(shield, pokemon, 0, crit);
                    cell.value.status.clearNegativeStatus();
                }
                else {
                    if (cell.value.types.has(Synergy_1.Synergy.WATER) ||
                        cell.value.types.has(Synergy_1.Synergy.STEEL) ||
                        cell.value.types.has(Synergy_1.Synergy.GHOST)) {
                        cell.value.status.triggerBurn(5000, cell.value, pokemon);
                    }
                }
            }
        });
    }
}
exports.SaltCureStrategy = SaltCureStrategy;
class SpicyExtractStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const nbAllies = (_a = [1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        const rageDuration = 2000;
        const allies = board.cells
            .filter((cell) => cell !== undefined &&
            cell !== pokemon &&
            cell.team === pokemon.team &&
            cell.life > 0)
            .sort((a, b) => (0, distance_1.distanceE)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
            (0, distance_1.distanceE)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY))
            .slice(0, nbAllies);
        allies.forEach((ally) => {
            ally.status.triggerRage(rageDuration, ally);
        });
    }
}
exports.SpicyExtractStrategy = SpicyExtractStrategy;
class SweetScentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 3);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                if ((0, random_1.chance)(0.3, pokemon)) {
                    cell.value.status.triggerCharm(1000, cell.value, pokemon, false);
                }
                cell.value.addSpecialDefense(-6, pokemon, 1, crit);
                cell.value.addDodgeChance(-cell.value.dodge, pokemon, 0, false);
            }
        });
    }
}
exports.SweetScentStrategy = SweetScentStrategy;
class SwallowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        if (pokemon.hp < pokemon.hp * 0.25) {
            const heal = (((_a = [0, 20, 40, 60][pokemon.count.ult]) !== null && _a !== void 0 ? _a : 60) * pokemon.hp) / 100;
            pokemon.handleHeal(heal, pokemon, 1, crit);
            pokemon.count.ult = 0;
            broadcastAbility(pokemon, { skill: Ability_1.Ability.RECOVER });
        }
        else if (pokemon.count.ult >= 3) {
            const damage = (_b = [40, 80, 150][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 150;
            const cells = board.getCellsInFront(pokemon, target, 1);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            broadcastAbility(pokemon, { skill: Ability_1.Ability.SWALLOW });
            pokemon.count.ult = 0;
        }
        else {
            pokemon.addDefense(3, pokemon, 0, false);
            pokemon.addSpecialDefense(3, pokemon, 0, false);
        }
    }
}
exports.SwallowStrategy = SwallowStrategy;
class DecorateStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const atkBoost = (_a = [1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        const apBoost = (_b = [10, 20, 30][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
        const nearestAlly = state.getNearestAlly(pokemon, board);
        if (nearestAlly) {
            broadcastAbility(pokemon, {
                targetX: nearestAlly.positionX,
                targetY: nearestAlly.positionY
            });
            nearestAlly.addAttack(atkBoost, pokemon, 1, crit);
            nearestAlly.addAbilityPower(apBoost, pokemon, 1, crit);
            if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_VANILLA) {
                nearestAlly.addShield(60, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_RUBY) {
                nearestAlly.addSpeed(30, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_MATCHA) {
                nearestAlly.addMaxHP(40, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_MINT) {
                nearestAlly.handleHeal(40, pokemon, 0, crit);
                nearestAlly.addSpecialDefense(15, pokemon, 0, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_LEMON) {
                nearestAlly.addCritChance(40, pokemon, 0, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_SALTED) {
                nearestAlly.handleHeal(40, pokemon, 1, crit);
                nearestAlly.addDefense(15, pokemon, 0, crit);
            }
            else if (pokemon.items.has(Item_1.Item.RUBY_SWIRL_FLAVOR)) {
                nearestAlly.addAttack(8, pokemon, 1, crit);
            }
            else if (pokemon.items.has(Item_1.Item.CARAMEL_SWIRL_FLAVOR)) {
                nearestAlly.addCritPower(80, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL) {
                nearestAlly.addAbilityPower(60, pokemon, 1, crit);
            }
        }
    }
}
exports.DecorateStrategy = DecorateStrategy;
class DragonClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        let lowestHp = 9999;
        let lowestHpTarget;
        for (const cell of cells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                if (cell.value.hp < lowestHp) {
                    lowestHp = cell.value.hp;
                    lowestHpTarget = cell.value;
                }
            }
        }
        if (!lowestHpTarget) {
            lowestHpTarget = target;
        }
        lowestHpTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        lowestHpTarget.status.triggerWound(4000, lowestHpTarget, pokemon);
        pokemon.targetX = lowestHpTarget.positionX;
        pokemon.targetY = lowestHpTarget.positionY;
    }
}
exports.DragonClawStrategy = DragonClawStrategy;
class HornAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = ((_a = [3, 4, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5) * pokemon.atk;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerArmorReduction(8000, target);
    }
}
exports.HornAttackStrategy = HornAttackStrategy;
class MudShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 75][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 75;
        const speedDebuff = (_b = [10, 20, 30][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 30;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addSpeed(-speedDebuff, pokemon, 1, crit);
    }
}
exports.MudShotStrategy = MudShotStrategy;
class MalignantChainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const duration = Math.round(3000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        target.status.triggerLocked(duration, target);
        const nbStacks = 3;
        for (let i = 0; i < nbStacks; i++) {
            target.status.triggerPoison(duration, target, pokemon);
        }
    }
}
exports.MalignantChainStrategy = MalignantChainStrategy;
class FilletAwayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const newMaxHP = Math.ceil(pokemon.hp * 0.5);
        const lostLife = (0, number_1.min)(0)(pokemon.life - newMaxHP);
        pokemon.hp = newMaxHP;
        pokemon.handleSpecialDamage(lostLife, board, Game_1.AttackType.TRUE, pokemon, false, false);
        pokemon.addAttack(10, pokemon, 1, crit);
        pokemon.addSpeed(20, pokemon, 1, crit);
        pokemon.status.triggerProtect(400);
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.moveTo(corner.x, corner.y, board);
            pokemon.cooldown = 400;
        }
    }
}
exports.FilletAwayStrategy = FilletAwayStrategy;
class RoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.moveTo(corner.x, corner.y, board);
        }
        pokemon.status.triggerSleep(2000, pokemon);
        pokemon.handleHeal(heal, pokemon, 1, crit);
    }
}
exports.RoostStrategy = RoostStrategy;
class ElectroShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        if (pokemon.simulation.weather !== Weather_1.Weather.STORM) {
            pokemon.cooldown = 2000;
            broadcastAbility(pokemon, {
                skill: "ELECTRO_SHOT_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            const damage = (_a = [80, 90, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
            const apBoost = 40;
            pokemon.addAbilityPower(apBoost, pokemon, 0, crit);
            broadcastAbility(pokemon, {
                skill: Ability_1.Ability.ELECTRO_SHOT,
                targetX: target.positionX,
                targetY: target.positionY
            });
            (0, orientation_1.effectInLine)(board, pokemon, target, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, pokemon.simulation.weather === Weather_1.Weather.STORM ? 0 : 2000));
    }
}
exports.ElectroShotStrategy = ElectroShotStrategy;
class FlowerTrickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 40, 85][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 85;
        const startingCritCount = target.count.crit;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const currentCritCount = target.count.crit;
            const numberOfCrits = currentCritCount - startingCritCount;
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            for (const cell of cells) {
                if (cell.value && cell.value.team !== pokemon.team) {
                    broadcastAbility(cell.value, {
                        skill: "FLOWER_TRICK_EXPLOSION",
                        positionX: cell.value.positionX,
                        positionY: cell.value.positionY
                    });
                    cell.value.handleSpecialDamage(damage + 15 * numberOfCrits, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        }, 3000));
    }
}
exports.FlowerTrickStrategy = FlowerTrickStrategy;
class SolarBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        if (!pokemon.status.light) {
            pokemon.cooldown = 2000;
            broadcastAbility(pokemon, {
                skill: "SOLAR_BLADE_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
            broadcastAbility(pokemon, {
                skill: Ability_1.Ability.SOLAR_BLADE,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                orientation: pokemon.orientation
            });
            const cells = board.getCellsInFront(pokemon, target, 1);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
                }
            });
        }, pokemon.status.light ? 0 : 2000));
    }
}
exports.SolarBladeStrategy = SolarBladeStrategy;
class ScaleShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.status.triggerArmorReduction(2000, pokemon);
        const scalePositions = new Array();
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        let inc = 0;
        for (const cell of adjacentCells) {
            const x = cell.x;
            const y = cell.y;
            const delay = 2000 + inc;
            scalePositions.push({
                x,
                y,
                delay
            });
            inc += 100;
            broadcastAbility(pokemon, {
                skill: "SCALE_SHOT_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: x,
                targetY: y,
                delay: delay
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerArmorReduction(2000, cell.value);
                cell.value.handleSpecialDamage(40, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
            }
        }
        for (const { x, y, delay } of scalePositions) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const farthestTarget = state.getFarthestTarget(pokemon, board);
                if (farthestTarget) {
                    broadcastAbility(pokemon, {
                        positionX: x,
                        positionY: y,
                        targetX: farthestTarget.positionX,
                        targetY: farthestTarget.positionY
                    });
                    const cellsBetween = board.getCellsBetween(x, y, farthestTarget.positionX, farthestTarget.positionY);
                    for (const cell of cellsBetween) {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            cell.value.handleSpecialDamage(30, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                        }
                    }
                }
            }, delay));
        }
    }
}
exports.ScaleShotStrategy = ScaleShotStrategy;
class BitterBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 70;
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        for (const cell of adjacentCells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.handleHeal(pokemon.baseHP * 0.1, pokemon, 1, crit);
            }
        }
    }
}
exports.BitterBladeStrategy = BitterBladeStrategy;
class ArmorCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mainDamage = 50;
        const secondaryDamage = 30;
        const finalDamage = 10;
        let numberOfTargets = 2;
        broadcastAbility(pokemon, {
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(mainDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const possibleTargets = new Array();
            board.forEach((x, y, entity) => {
                if (entity && entity.team !== pokemon.team && entity !== target) {
                    possibleTargets.push(entity);
                }
            });
            possibleTargets.sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
                (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY));
            numberOfTargets = Math.round(numberOfTargets * (1 + pokemon.ap / 100));
            const targets = possibleTargets.slice(0, numberOfTargets);
            targets.forEach((tg) => {
                broadcastAbility(pokemon, {
                    positionX: target.positionX,
                    positionY: target.positionY,
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    tg.handleSpecialDamage(secondaryDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    broadcastAbility(pokemon, {
                        positionX: tg.positionX,
                        positionY: tg.positionY,
                        targetX: target.positionX,
                        targetY: target.positionY
                    });
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        target.handleSpecialDamage(finalDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }, 300));
                }, 300));
            });
        }, 300));
    }
}
exports.ArmorCannonStrategy = ArmorCannonStrategy;
class SuctionHealStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                const attack = cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                broadcastAbility(pokemon, {
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
                pokemon.handleHeal(attack.takenDamage * 0.5, pokemon, 1, crit);
            }
        });
    }
}
exports.SuctionHealStrategy = SuctionHealStrategy;
__exportStar(require("./hidden-power"), exports);
exports.AbilityStrategies = {
    [Ability_1.Ability.SONG_OF_DESIRE]: new SongOfDesireStrategy(),
    [Ability_1.Ability.CONFUSING_MIND]: new ConfusingMindStrategy(),
    [Ability_1.Ability.KNOWLEDGE_THIEF]: new KnowledgeThiefStrategy(),
    [Ability_1.Ability.WONDER_GUARD]: new WonderGuardStrategy(),
    [Ability_1.Ability.CRABHAMMER]: new CrabHammerStrategy(),
    [Ability_1.Ability.KING_SHIELD]: new KingShieldStrategy(),
    [Ability_1.Ability.U_TURN]: new UTurnStrategy(),
    [Ability_1.Ability.EXPLOSION]: new ExplosionStrategy(),
    [Ability_1.Ability.CHLOROBLAST]: new ChloroblastStrategy(),
    [Ability_1.Ability.NIGHTMARE]: new NightmareStrategy(),
    [Ability_1.Ability.CLANGOROUS_SOUL]: new ClangorousSoulStrategy(),
    [Ability_1.Ability.BONEMERANG]: new BonemerangStrategy(),
    [Ability_1.Ability.SHADOW_BONE]: new ShadowBoneStrategy(),
    [Ability_1.Ability.GROWL]: new GrowlStrategy(),
    [Ability_1.Ability.RELIC_SONG]: new RelicSongStrategy(),
    [Ability_1.Ability.FAIRY_WIND]: new FairyWindStrategy(),
    [Ability_1.Ability.DISARMING_VOICE]: new DisarmingVoiceStrategy(),
    [Ability_1.Ability.HIGH_JUMP_KICK]: new HighJumpKickStrategy(),
    [Ability_1.Ability.TROP_KICK]: new TropKickStrategy(),
    [Ability_1.Ability.GRASS_WHISTLE]: new GrassWhistleStrategy(),
    [Ability_1.Ability.TRI_ATTACK]: new TriAttackStrategy(),
    [Ability_1.Ability.ECHO]: new EchoStrategy(),
    [Ability_1.Ability.PETAL_DANCE]: new PetalDanceStrategy(),
    [Ability_1.Ability.HYPER_VOICE]: new HyperVoiceStrategy(),
    [Ability_1.Ability.SHADOW_CLONE]: new ShadowCloneStrategy(),
    [Ability_1.Ability.VOLT_SWITCH]: new VoltSwitchStrategy(),
    [Ability_1.Ability.NUZZLE]: new NuzzleStrategy(),
    [Ability_1.Ability.FIRE_BLAST]: new FireBlastStrategy(),
    [Ability_1.Ability.WHEEL_OF_FIRE]: new WheelOfFireStrategy(),
    [Ability_1.Ability.SEISMIC_TOSS]: new SeismicTossStrategy(),
    [Ability_1.Ability.GUILLOTINE]: new GuillotineStrategy(),
    [Ability_1.Ability.ROCK_SLIDE]: new RockSlideStrategy(),
    [Ability_1.Ability.HEAT_WAVE]: new HeatWaveStrategy(),
    [Ability_1.Ability.FLAMETHROWER]: new FlameThrowerStrategy(),
    [Ability_1.Ability.THUNDER_SHOCK]: new ThunderShockStrategy(),
    [Ability_1.Ability.THUNDER]: new ThunderStrategy(),
    [Ability_1.Ability.HYDRO_PUMP]: new HydroPumpStrategy(),
    [Ability_1.Ability.DRACO_METEOR]: new DracoMeteorStrategy(),
    [Ability_1.Ability.BLAZE_KICK]: new BlazeKickStrategy(),
    [Ability_1.Ability.WISH]: new WishStrategy(),
    [Ability_1.Ability.LUNAR_BLESSING]: new LunarBlessingStrategy(),
    [Ability_1.Ability.CALM_MIND]: new CalmMindStrategy(),
    [Ability_1.Ability.IRON_DEFENSE]: new IronDefenseStrategy(),
    [Ability_1.Ability.DEFENSE_CURL]: new DefenseCurlStrategy(),
    [Ability_1.Ability.METRONOME]: new MetronomeStrategy(),
    [Ability_1.Ability.SOAK]: new SoakStrategy(),
    [Ability_1.Ability.IRON_TAIL]: new IronTailStrategy(),
    [Ability_1.Ability.BLAST_BURN]: new BlastBurnStrategy(),
    [Ability_1.Ability.CHARGE]: new ChargeStrategy(),
    [Ability_1.Ability.DISCHARGE]: new DischargeStrategy(),
    [Ability_1.Ability.BITE]: new BiteStrategy(),
    [Ability_1.Ability.DRAGON_TAIL]: new DragonTailStrategy(),
    [Ability_1.Ability.DRAGON_BREATH]: new DragonBreathStrategy(),
    [Ability_1.Ability.ICICLE_CRASH]: new IcicleCrashStrategy(),
    [Ability_1.Ability.INGRAIN]: new IngrainStrategy(),
    [Ability_1.Ability.TORMENT]: new TormentStrategy(),
    [Ability_1.Ability.STOMP]: new StompStrategy(),
    [Ability_1.Ability.HORN_DRILL]: new HornDrillStrategy(),
    [Ability_1.Ability.NIGHT_SLASH]: new NightSlashStrategy(),
    [Ability_1.Ability.KOWTOW_CLEAVE]: new KowtowCleaveStrategy(),
    [Ability_1.Ability.BUG_BUZZ]: new BugBuzzStrategy(),
    [Ability_1.Ability.STRING_SHOT]: new StringShotStrategy(),
    [Ability_1.Ability.ENTANGLING_THREAD]: new EntanglingThreadStrategy(),
    [Ability_1.Ability.VENOSHOCK]: new VenoshockStrategy(),
    [Ability_1.Ability.LEECH_LIFE]: new LeechLifeStrategy(),
    [Ability_1.Ability.HAPPY_HOUR]: new HappyHourStrategy(),
    [Ability_1.Ability.TELEPORT]: new TeleportStrategy(),
    [Ability_1.Ability.NASTY_PLOT]: new NastyPlotStrategy(),
    [Ability_1.Ability.THIEF]: new ThiefStrategy(),
    [Ability_1.Ability.STUN_SPORE]: new StunSporeStrategy(),
    [Ability_1.Ability.METEOR_MASH]: new MeteorMashStrategy(),
    [Ability_1.Ability.HURRICANE]: new HurricaneStrategy(),
    [Ability_1.Ability.SING]: new SingStrategy(),
    [Ability_1.Ability.CONFUSION]: new ConfusionStrategy(),
    [Ability_1.Ability.BLIZZARD]: new BlizzardStrategy(),
    [Ability_1.Ability.PROTECT]: new ProtectStrategy(),
    [Ability_1.Ability.OBSTRUCT]: new ObstructStrategy(),
    [Ability_1.Ability.TOXIC]: new ToxicStrategy(),
    [Ability_1.Ability.ORIGIN_PULSE]: new OriginPulseStrategy(),
    [Ability_1.Ability.SEED_FLARE]: new SeedFlareStrategy(),
    [Ability_1.Ability.HEAL_BLOCK]: new HealBlockStrategy(),
    [Ability_1.Ability.ROAR_OF_TIME]: new RoarOfTimeStrategy(),
    [Ability_1.Ability.ROCK_TOMB]: new RockTombStrategy(),
    [Ability_1.Ability.ROCK_SMASH]: new RockSmashStrategy(),
    [Ability_1.Ability.HEAD_SMASH]: new HeadSmashStrategy(),
    [Ability_1.Ability.DOUBLE_EDGE]: new DoubleEdgeStrategy(),
    [Ability_1.Ability.DEFAULT]: new ability_strategy_1.AbilityStrategy(),
    [Ability_1.Ability.DIAMOND_STORM]: new DiamondStormStrategy(),
    [Ability_1.Ability.DRACO_ENERGY]: new DracoEnergyStrategy(),
    [Ability_1.Ability.DYNAMAX_CANNON]: new DynamaxCannonStrategy(),
    [Ability_1.Ability.DYNAMIC_PUNCH]: new DynamicPunchStrategy(),
    [Ability_1.Ability.ELECTRO_BOOST]: new ElectroBoostStrategy(),
    [Ability_1.Ability.ELECTRO_WEB]: new ElectroWebStrategy(),
    [Ability_1.Ability.MYSTICAL_FIRE]: new MysticalFireStrategy(),
    [Ability_1.Ability.FLAME_CHARGE]: new FlameChargeStrategy(),
    [Ability_1.Ability.LEECH_SEED]: new LeechSeedStrategy(),
    [Ability_1.Ability.LOCK_ON]: new LockOnStrategy(),
    [Ability_1.Ability.PSYCH_UP]: new PsychUpStrategy(),
    [Ability_1.Ability.RAZOR_WIND]: new RazorWindStrategy(),
    [Ability_1.Ability.TWISTING_NETHER]: new TwistingNetherStrategy(),
    [Ability_1.Ability.EARTHQUAKE]: new EarthquakeStrategy(),
    [Ability_1.Ability.SOFT_BOILED]: new SoftBoiledStrategy(),
    [Ability_1.Ability.ELECTRIC_SURGE]: new ElectricSurgeStrategy(),
    [Ability_1.Ability.PSYCHIC_SURGE]: new PsychicSurgeStrategy(),
    [Ability_1.Ability.MIND_BLOWN]: new MindBlownStrategy(),
    [Ability_1.Ability.PAYDAY]: new PaydayStrategy(),
    [Ability_1.Ability.PICKUP]: new PickupStrategy(),
    [Ability_1.Ability.BEAT_UP]: new BeatUpStrategy(),
    [Ability_1.Ability.BLUE_FLARE]: new BlueFlareStrategy(),
    [Ability_1.Ability.FUSION_BOLT]: new FusionBoltStrategy(),
    [Ability_1.Ability.AURORA_VEIL]: new AuroraVeilStrategy(),
    [Ability_1.Ability.AQUA_JET]: new AquaJetStrategy(),
    [Ability_1.Ability.JUDGEMENT]: new JudgementStrategy(),
    [Ability_1.Ability.CHATTER]: new ChatterStrategy(),
    [Ability_1.Ability.LIQUIDATION]: new LiquidationStrategy(),
    [Ability_1.Ability.STEAM_ERUPTION]: new SteamEruptionStrategy(),
    [Ability_1.Ability.APPLE_ACID]: new AppleAcidStrategy(),
    [Ability_1.Ability.SHADOW_BALL]: new ShadowBallStrategy(),
    [Ability_1.Ability.DIVE]: new DiveStrategy(),
    [Ability_1.Ability.SPIKY_SHIELD]: new SpikeArmorStrategy(),
    [Ability_1.Ability.FUTURE_SIGHT]: new FutureSightStrategy(),
    [Ability_1.Ability.FAKE_TEARS]: new FakeTearsStrategy(),
    [Ability_1.Ability.SPARKLING_ARIA]: new SparklingAriaStrategy(),
    [Ability_1.Ability.DRAGON_DARTS]: new DragonDartsStrategy(),
    [Ability_1.Ability.GRASSY_SURGE]: new GrassySurgeStrategy(),
    [Ability_1.Ability.MISTY_SURGE]: new MistySurgeStrategy(),
    [Ability_1.Ability.SKY_ATTACK]: new SkyAttackStrategy(),
    [Ability_1.Ability.SKY_ATTACK_SHADOW]: new SkyAttackShadowStrategy(),
    [Ability_1.Ability.ILLUSION]: new IllusionStrategy(),
    [Ability_1.Ability.SLUDGE]: new SludgeStrategy(),
    [Ability_1.Ability.SLUDGE_WAVE]: new SludgeWaveStrategy(),
    [Ability_1.Ability.AURORA_BEAM]: new AuroraBeamStrategy(),
    [Ability_1.Ability.AGILITY]: new AgilityStrategy(),
    [Ability_1.Ability.SPIRIT_SHACKLE]: new SpiritShackleStrategy(),
    [Ability_1.Ability.WATER_SHURIKEN]: new WaterShurikenStrategy(),
    [Ability_1.Ability.SHADOW_SNEAK]: new ShadowSneakStrategy(),
    [Ability_1.Ability.MACH_PUNCH]: new MachPunchStrategy(),
    [Ability_1.Ability.MEGA_PUNCH]: new MegaPunchStrategy(),
    [Ability_1.Ability.TRIPLE_KICK]: new TripleKickStrategy(),
    [Ability_1.Ability.MAWASHI_GERI]: new MawashiGeriStrategy(),
    [Ability_1.Ability.FORECAST]: new ForecastStrategy(),
    [Ability_1.Ability.SACRED_SWORD_GRASS]: new SacredSwordGrassStrategy(),
    [Ability_1.Ability.SACRED_SWORD_CAVERN]: new SacredSwordCavernStrategy(),
    [Ability_1.Ability.SACRED_SWORD_IRON]: new SacredSwordIronStrategy(),
    [Ability_1.Ability.SECRET_SWORD]: new SecretSwordStrategy(),
    [Ability_1.Ability.X_SCISSOR]: new XScissorStrategy(),
    [Ability_1.Ability.PLASMA_FIST]: new PlasmaFistStrategy(),
    [Ability_1.Ability.SPECTRAL_THIEF]: new SpectralThiefStrategy(),
    [Ability_1.Ability.GEOMANCY]: new GeomancyStrategy(),
    [Ability_1.Ability.DEATH_WING]: new DeathWingStrategy(),
    [Ability_1.Ability.SLACK_OFF]: new SlackOffStrategy(),
    [Ability_1.Ability.DARK_VOID]: new DarkVoidStrategy(),
    [Ability_1.Ability.OVERHEAT]: new OverheatStrategy(),
    [Ability_1.Ability.HYPNOSIS]: new HypnosisStrategy(),
    [Ability_1.Ability.MIMIC]: new MimicStrategy(),
    [Ability_1.Ability.HEX]: new HexStrategy(),
    [Ability_1.Ability.GROWTH]: new GrowthStrategy(),
    [Ability_1.Ability.HEAL_ORDER]: new HealOrderStrategy(),
    [Ability_1.Ability.SHELL_TRAP]: new ShellTrapStrategy(),
    [Ability_1.Ability.DIG]: new DigStrategy(),
    [Ability_1.Ability.FIRE_SPIN]: new FireSpinStrategy(),
    [Ability_1.Ability.SEARING_SHOT]: new SearingShotStrategy(),
    [Ability_1.Ability.PECK]: new PeckStrategy(),
    [Ability_1.Ability.SPLASH]: new SplashStrategy(),
    [Ability_1.Ability.COUNTER]: new CounterStrategy(),
    [Ability_1.Ability.COSMIC_POWER_MOON]: new CosmicPowerMoonStrategy(),
    [Ability_1.Ability.COSMIC_POWER_SUN]: new CosmicPowerSunStrategy(),
    [Ability_1.Ability.POISON_POWDER]: new PoisonPowderStrategy(),
    [Ability_1.Ability.SILVER_WIND]: new SilverWindStrategy(),
    [Ability_1.Ability.ICY_WIND]: new IcyWindStrategy(),
    [Ability_1.Ability.GIGATON_HAMMER]: new GigatonHammerStrategy(),
    [Ability_1.Ability.ACROBATICS]: new AcrobaticsStrategy(),
    [Ability_1.Ability.ABSORB]: new AbsorbStrategy(),
    [Ability_1.Ability.ROLLOUT]: new RolloutStrategy(),
    [Ability_1.Ability.ICE_BALL]: new IceBallStrategy(),
    [Ability_1.Ability.THRASH]: new ThrashStrategy(),
    [Ability_1.Ability.SOLAR_BEAM]: new SolarBeamStrategy(),
    [Ability_1.Ability.MAGMA_STORM]: new MagmaStormStrategy(),
    [Ability_1.Ability.SLASHING_CLAW]: new SlashingClawStrategy(),
    [Ability_1.Ability.ERUPTION]: new EruptionStrategy(),
    [Ability_1.Ability.MIST_BALL]: new MistBallStrategy(),
    [Ability_1.Ability.LUSTER_PURGE]: new LusterPurgeStrategy(),
    [Ability_1.Ability.MUD_BUBBLE]: new MudBubbleStrategy(),
    [Ability_1.Ability.LINK_CABLE]: new LinkCableStrategy(),
    [Ability_1.Ability.MAGIC_BOUNCE]: new MagicBounceStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_A]: new hidden_power_1.HiddenPowerAStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_B]: new hidden_power_1.HiddenPowerBStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_C]: new hidden_power_1.HiddenPowerCStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_D]: new hidden_power_1.HiddenPowerDStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_E]: new hidden_power_1.HiddenPowerEStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_F]: new hidden_power_1.HiddenPowerFStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_G]: new hidden_power_1.HiddenPowerGStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_H]: new hidden_power_1.HiddenPowerHStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_I]: new hidden_power_1.HiddenPowerIStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_J]: new hidden_power_1.HiddenPowerJStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_K]: new hidden_power_1.HiddenPowerKStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_L]: new hidden_power_1.HiddenPowerLStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_M]: new hidden_power_1.HiddenPowerMStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_N]: new hidden_power_1.HiddenPowerNStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_O]: new hidden_power_1.HiddenPowerOStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_P]: new hidden_power_1.HiddenPowerPStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Q]: new hidden_power_1.HiddenPowerQStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_R]: new hidden_power_1.HiddenPowerRStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_S]: new hidden_power_1.HiddenPowerSStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_T]: new hidden_power_1.HiddenPowerTStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_U]: new hidden_power_1.HiddenPowerUStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_V]: new hidden_power_1.HiddenPowerVStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_W]: new hidden_power_1.HiddenPowerWStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_X]: new hidden_power_1.HiddenPowerXStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Y]: new hidden_power_1.HiddenPowerYStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Z]: new hidden_power_1.HiddenPowerZStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_QM]: new hidden_power_1.HiddenPowerQMStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_EM]: new hidden_power_1.HiddenPowerEMStrategy(),
    [Ability_1.Ability.POISON_JAB]: new PoisonJabStrategy(),
    [Ability_1.Ability.SHELL_SMASH]: new ShellSmashStrategy(),
    [Ability_1.Ability.HELPING_HAND]: new HelpingHandStrategy(),
    [Ability_1.Ability.ASTRAL_BARRAGE]: new AstralBarrageStrategy(),
    [Ability_1.Ability.WATERFALL]: new WaterfallStrategy(),
    [Ability_1.Ability.PYRO_BALL]: new PyroBallStrategy(),
    [Ability_1.Ability.WHIRLPOOL]: new WhirlpoolStrategy(),
    [Ability_1.Ability.SMOKE_SCREEN]: new SmokeScreenStrategy(),
    [Ability_1.Ability.PRESENT]: new PresentStrategy(),
    [Ability_1.Ability.LEAF_BLADE]: new LeafBladeStrategy(),
    [Ability_1.Ability.ANCHOR_SHOT]: new AnchorShotStrategy(),
    [Ability_1.Ability.SMOG]: new SmogStrategy(),
    [Ability_1.Ability.PSYCHIC]: new PsychicStrategy(),
    [Ability_1.Ability.PSYBEAM]: new PsybeamStrategy(),
    [Ability_1.Ability.MAGNET_RISE]: new MagnetRiseStrategy(),
    [Ability_1.Ability.ATTRACT]: new AttractStrategy(),
    [Ability_1.Ability.WATER_PULSE]: new WaterPulseStrategy(),
    [Ability_1.Ability.PLAY_ROUGH]: new PlayRoughStrategy(),
    [Ability_1.Ability.AERIAL_ACE]: new AerialAceStrategy(),
    [Ability_1.Ability.PARABOLIC_CHARGE]: new ParabolicChargeStrategy(),
    [Ability_1.Ability.SUPER_FANG]: new SuperFangStrategy(),
    [Ability_1.Ability.TEETER_DANCE]: new TeeterDanceStrategy(),
    [Ability_1.Ability.CLOSE_COMBAT]: new CloseCombatStrategy(),
    [Ability_1.Ability.ASSIST]: new AssistStrategy(),
    [Ability_1.Ability.FISSURE]: new FissureStrategy(),
    [Ability_1.Ability.ASSURANCE]: new AssuranceStrategy(),
    [Ability_1.Ability.AQUA_RING]: new AquaRingStrategy(),
    [Ability_1.Ability.POISON_GAS]: new PoisonGasStrategy(),
    [Ability_1.Ability.BRAVE_BIRD]: new BraveBirdStrategy(),
    [Ability_1.Ability.MAGICAL_LEAF]: new MagicalLeafStrategy(),
    [Ability_1.Ability.STEALTH_ROCKS]: new StealthRocksStrategy(),
    [Ability_1.Ability.TAIL_GLOW]: new TailGlowStrategy(),
    [Ability_1.Ability.STRUGGLE_BUG]: new StruggleBugStrategy(),
    [Ability_1.Ability.PRISMATIC_LASER]: new PrismaticLaserStrategy(),
    [Ability_1.Ability.NATURAL_GIFT]: new NaturalGiftStrategy(),
    [Ability_1.Ability.NIGHT_SHADE]: new NightShadeStrategy(),
    [Ability_1.Ability.CHARGE_BEAM]: new ChargeBeamStrategy(),
    [Ability_1.Ability.POPULATION_BOMB]: new PopulationBombStrategy(),
    [Ability_1.Ability.SCREECH]: new ScreechStrategy(),
    [Ability_1.Ability.SAND_TOMB]: new SandTombStrategy(),
    [Ability_1.Ability.WHIRLWIND]: new WhirlwindStrategy(),
    [Ability_1.Ability.ACID_SPRAY]: new AcidSprayStrategy(),
    [Ability_1.Ability.UNBOUND]: new UnboundStrategy(),
    [Ability_1.Ability.HYPERSPACE_FURY]: new HyperspaceFuryStrategy(),
    [Ability_1.Ability.SNIPE_SHOT]: new SnipeShotStrategy(),
    [Ability_1.Ability.AIR_SLASH]: new AirSlashStrategy(),
    [Ability_1.Ability.EGG_BOMB]: new EggBombStrategy(),
    [Ability_1.Ability.BODY_SLAM]: new BodySlamStrategy(),
    [Ability_1.Ability.FLORAL_HEALING]: new FloralHealingStrategy(),
    [Ability_1.Ability.VINE_WHIP]: new VineWhipStrategy(),
    [Ability_1.Ability.BARB_BARRAGE]: new BarbBarrageStrategy(),
    [Ability_1.Ability.INFERNAL_PARADE]: new InfernalParadeStrategy(),
    [Ability_1.Ability.MAGIC_POWDER]: new MagicPowderStrategy(),
    [Ability_1.Ability.RETALIATE]: new RetaliateStrategy(),
    [Ability_1.Ability.SLASH]: new SlashStrategy(),
    [Ability_1.Ability.OUTRAGE]: new OutrageStrategy(),
    [Ability_1.Ability.LUNGE]: new LungeStrategy(),
    [Ability_1.Ability.KNOCK_OFF]: new KnockOffStrategy(),
    [Ability_1.Ability.FISHIOUS_REND]: new FishiousRendStrategy(),
    [Ability_1.Ability.RECOVER]: new RecoverStrategy(),
    [Ability_1.Ability.CURSE]: new CurseStrategy(),
    [Ability_1.Ability.GOLD_RUSH]: new GoldRushStrategy(),
    [Ability_1.Ability.MAKE_IT_RAIN]: new MakeItRainStrategy(),
    [Ability_1.Ability.TIME_TRAVEL]: new TimeTravelStrategy(),
    [Ability_1.Ability.POLTERGEIST]: new PoltergeistStrategy(),
    [Ability_1.Ability.CRUSH_GRIP]: new CrushGripStrategy(),
    [Ability_1.Ability.AURASPHERE]: new AuraSphereStrategy(),
    [Ability_1.Ability.SKETCH]: new SketchStrategy(),
    [Ability_1.Ability.OVERDRIVE]: new OverdriveStrategy(),
    [Ability_1.Ability.LOVELY_KISS]: new LovelyKissStrategy(),
    [Ability_1.Ability.TRANSFORM]: new TransformStrategy(),
    [Ability_1.Ability.PSYCHIC_FANGS]: new PsychicFangsStrategy(),
    [Ability_1.Ability.SHED_TAIL]: new ShedTailStrategy(),
    [Ability_1.Ability.SHIELDS_DOWN]: new ShieldsDownStrategy(),
    [Ability_1.Ability.SHIELDS_UP]: new ShieldsUpStrategy(),
    [Ability_1.Ability.SANDSEAR_STORM]: new SandsearStormStrategy(),
    [Ability_1.Ability.WILDBOLT_STORM]: new WildboltStormStrategy(),
    [Ability_1.Ability.BLEAKWIND_STORM]: new BleakwindStormStrategy(),
    [Ability_1.Ability.SPRINGTIDE_STORM]: new SpringtideStormStrategy(),
    [Ability_1.Ability.AURA_WHEEL]: new AuraWheelStrategy(),
    [Ability_1.Ability.LICK]: new LickStrategy(),
    [Ability_1.Ability.FURY_SWIPES]: new FurySwipesStrategy(),
    [Ability_1.Ability.TICKLE]: new TickleStrategy(),
    [Ability_1.Ability.AROMATHERAPY]: new AromatherapyStrategy(),
    [Ability_1.Ability.DETECT]: new DetectStrategy(),
    [Ability_1.Ability.SPACIAL_REND]: new SpacialRendStrategy(),
    [Ability_1.Ability.MULTI_ATTACK]: new MultiAttackStrategy(),
    [Ability_1.Ability.STICKY_WEB]: new StickyWebStrategy(),
    [Ability_1.Ability.ACCELEROCK]: new AccelerockStrategy(),
    [Ability_1.Ability.PETAL_BLIZZARD]: new PetalBlizzardStrategy(),
    [Ability_1.Ability.SUNSTEEL_STRIKE]: new SunsteelStrikeStrategy(),
    [Ability_1.Ability.MOONGEIST_BEAM]: new MoongeistBeamStrategy(),
    [Ability_1.Ability.MANTIS_BLADES]: new MantisBladesStrategy(),
    [Ability_1.Ability.FLEUR_CANNON]: new FleurCannonStrategy(),
    [Ability_1.Ability.DOOM_DESIRE]: new DoomDesireStrategy(),
    [Ability_1.Ability.SPIRIT_BREAK]: new SpiritBreakStrategy(),
    [Ability_1.Ability.SHEER_COLD]: new SheerColdStrategy(),
    [Ability_1.Ability.PSYCHO_BOOST]: new PsychoBoostStrategy(),
    [Ability_1.Ability.ZAP_CANNON]: new ZapCannonStrategy(),
    [Ability_1.Ability.EXTREME_SPEED]: new ExtremeSpeedStrategy(),
    [Ability_1.Ability.ICE_HAMMER]: new IceHammerStrategy(),
    [Ability_1.Ability.POLLEN_PUFF]: new PollenPuffStrategy(),
    [Ability_1.Ability.PSYSTRIKE]: new PsystrikeStrategy(),
    [Ability_1.Ability.FACADE]: new FacadeStrategy(),
    [Ability_1.Ability.DREAM_EATER]: new DreamEaterStrategy(),
    [Ability_1.Ability.SPARK]: new SparkStrategy(),
    [Ability_1.Ability.CRUNCH]: new CrunchStrategy(),
    [Ability_1.Ability.CROSS_POISON]: new CrossPoisonStrategy(),
    [Ability_1.Ability.SHELTER]: new ShelterStrategy(),
    [Ability_1.Ability.FIRE_FANG]: new FireFangStrategy(),
    [Ability_1.Ability.ICE_FANG]: new IceFangStrategy(),
    [Ability_1.Ability.THUNDER_FANG]: new ThunderFangStrategy(),
    [Ability_1.Ability.TAIL_WHIP]: new TailWhipStrategy(),
    [Ability_1.Ability.PSYSHIELD_BASH]: new PsyshieldBashStrategy(),
    [Ability_1.Ability.QUIVER_DANCE]: new QuiverDanceStrategy(),
    [Ability_1.Ability.TORCH_SONG]: new TorchSongStrategy(),
    [Ability_1.Ability.POWER_WHIP]: new PowerWhipStrategy(),
    [Ability_1.Ability.DARK_HARVEST]: new DarkHarvestStrategy(),
    [Ability_1.Ability.PSYSHOCK]: new PsyShockStrategy(),
    [Ability_1.Ability.HEAVY_SLAM]: new HeavySlamStrategy(),
    [Ability_1.Ability.AQUA_TAIL]: new AquaTailStrategy(),
    [Ability_1.Ability.HAIL]: new HailStrategy(),
    [Ability_1.Ability.RAPID_SPIN]: new RapidSpinStrategy(),
    [Ability_1.Ability.BOUNCE]: new BounceStrategy(),
    [Ability_1.Ability.GUNK_SHOT]: new GunkShotStrategy(),
    [Ability_1.Ability.BLOOD_MOON]: new BloodMoonStrategy(),
    [Ability_1.Ability.TEA_TIME]: new TeaTimeStrategy(),
    [Ability_1.Ability.SPIKES]: new SpikesStrategy(),
    [Ability_1.Ability.SHADOW_PUNCH]: new ShadowPunchStrategy(),
    [Ability_1.Ability.MAGNET_BOMB]: new MagnetBombStrategy(),
    [Ability_1.Ability.MUDDY_WATER]: new MuddyWaterStrategy(),
    [Ability_1.Ability.ANCIENT_POWER]: new AncientPowerStrategy(),
    [Ability_1.Ability.MOON_DREAM]: new MoonDreamStrategy(),
    [Ability_1.Ability.STONE_AXE]: new StoneAxeStrategy(),
    [Ability_1.Ability.FLASH]: new FlashStrategy(),
    [Ability_1.Ability.ROCK_HEAD]: new RockHeadStrategy(),
    [Ability_1.Ability.TAKE_HEART]: new TakeHeartStrategy(),
    [Ability_1.Ability.CRUSH_CLAW]: new CrushClawStrategy(),
    [Ability_1.Ability.FIRE_LASH]: new FireLashStrategy(),
    [Ability_1.Ability.FAIRY_LOCK]: new FairyLockStrategy(),
    [Ability_1.Ability.FLYING_PRESS]: new FlyingPressStrategy(),
    [Ability_1.Ability.DRAIN_PUNCH]: new DrainPunchStrategy(),
    [Ability_1.Ability.GRAVITY]: new GravityStrategy(),
    [Ability_1.Ability.DIRE_CLAW]: new DireClawStrategy(),
    [Ability_1.Ability.FAKE_OUT]: new FakeOutStrategy(),
    [Ability_1.Ability.PURIFY]: new PurifyStrategy(),
    [Ability_1.Ability.FELL_STINGER]: new FellStingerStrategy(),
    [Ability_1.Ability.GULP_MISSILE]: new GulpMissileStrategy(),
    [Ability_1.Ability.SCHOOLING]: new SchoolingStrategy(),
    [Ability_1.Ability.DOUBLE_SHOCK]: new DoubleShockStrategy(),
    [Ability_1.Ability.PASTEL_VEIL]: new PastelVeilStrategy(),
    [Ability_1.Ability.CHARM]: new CharmStrategy(),
    [Ability_1.Ability.ENTRAINMENT]: new EntrainmentStrategy(),
    [Ability_1.Ability.OCTAZOOKA]: new OctazookaStrategy(),
    [Ability_1.Ability.PSYCHO_SHIFT]: new PsychoShiftStrategy(),
    [Ability_1.Ability.GLAIVE_RUSH]: new GlaiveRushStrategy(),
    [Ability_1.Ability.FOUL_PLAY]: new FoulPlayStrategy(),
    [Ability_1.Ability.DOUBLE_IRON_BASH]: new DoubleIronBashStrategy(),
    [Ability_1.Ability.STONE_EDGE]: new StoneEdgeStrategy(),
    [Ability_1.Ability.ROAR]: new RoarStrategy(),
    [Ability_1.Ability.INFESTATION]: new InfestationStrategy(),
    [Ability_1.Ability.IVY_CUDGEL]: new IvyCudgelStrategy(),
    [Ability_1.Ability.FORCE_PALM]: new ForcePalmStrategy(),
    [Ability_1.Ability.METAL_BURST]: new MetalBurstStrategy(),
    [Ability_1.Ability.THUNDER_CAGE]: new ThunderCageStrategy(),
    [Ability_1.Ability.HEADBUTT]: new HeadbuttStrategy(),
    [Ability_1.Ability.STEEL_WING]: new SteelWingStrategy(),
    [Ability_1.Ability.YAWN]: new YawnStrategy(),
    [Ability_1.Ability.FIERY_DANCE]: new FieryDanceStrategy(),
    [Ability_1.Ability.BIDE]: new BideStrategy(),
    [Ability_1.Ability.SHORE_UP]: new ShoreUpStrategy(),
    [Ability_1.Ability.POISON_STING]: new PoisonStingStrategy(),
    [Ability_1.Ability.TRANSE]: new TranseStrategy(),
    [Ability_1.Ability.GLACIATE]: new GlaciateStrategy(),
    [Ability_1.Ability.WOOD_HAMMER]: new WoodHammerStrategy(),
    [Ability_1.Ability.TRICK_OR_TREAT]: new TrickOrTreatStrategy(),
    [Ability_1.Ability.FREEZING_GLARE]: new FreezingGlareStrategy(),
    [Ability_1.Ability.THUNDEROUS_KICK]: new ThunderousKickStrategy(),
    [Ability_1.Ability.FIERY_WRATH]: new FieryWrathStrategy(),
    [Ability_1.Ability.VISE_GRIP]: new ViseGripStrategy(),
    [Ability_1.Ability.LAVA_PLUME]: new LavaPlumeStrategy(),
    [Ability_1.Ability.LANDS_WRATH]: new LandsWrathStrategy(),
    [Ability_1.Ability.THOUSAND_ARROWS]: new ThousandArrowsStrategy(),
    [Ability_1.Ability.CORE_ENFORCER]: new CoreEnforcerStrategy(),
    [Ability_1.Ability.BURN_UP]: new BurnUpStrategy(),
    [Ability_1.Ability.POWER_HUG]: new PowerHugStrategy(),
    [Ability_1.Ability.MORTAL_SPIN]: new MortalSpinStrategy(),
    [Ability_1.Ability.METAL_CLAW]: new MetalClawStrategy(),
    [Ability_1.Ability.FIRESTARTER]: new FirestarterStrategy(),
    [Ability_1.Ability.BONE_ARMOR]: new BoneArmorStrategy(),
    [Ability_1.Ability.TOPSY_TURVY]: new TopsyTurvyStrategy(),
    [Ability_1.Ability.RAGE]: new RageStrategy(),
    [Ability_1.Ability.BRICK_BREAK]: new BrickBreakStrategy(),
    [Ability_1.Ability.TAUNT]: new TauntStrategy(),
    [Ability_1.Ability.BULK_UP]: new BulkUpStrategy(),
    [Ability_1.Ability.CUT]: new CutStrategy(),
    [Ability_1.Ability.FLY]: new FlyStrategy(),
    [Ability_1.Ability.SURF]: new SurfStrategy(),
    [Ability_1.Ability.STRENGTH]: new StrengthStrategy(),
    [Ability_1.Ability.HARDEN]: new HardenStrategy(),
    [Ability_1.Ability.COLUMN_CRUSH]: new ColumnCrushStrategy(),
    [Ability_1.Ability.WONDER_ROOM]: new WonderRoomStrategy(),
    [Ability_1.Ability.DARK_LARIAT]: new DarkLariatStrategy(),
    [Ability_1.Ability.BOLT_BEAK]: new BoltBeakStrategy(),
    [Ability_1.Ability.FREEZE_DRY]: new FreezeDryStrategy(),
    [Ability_1.Ability.DRAGON_PULSE]: new DragonPulseStrategy(),
    [Ability_1.Ability.FROST_BREATH]: new FrostBreathStrategy(),
    [Ability_1.Ability.SALT_CURE]: new SaltCureStrategy(),
    [Ability_1.Ability.SPICY_EXTRACT]: new SpicyExtractStrategy(),
    [Ability_1.Ability.SWEET_SCENT]: new SweetScentStrategy(),
    [Ability_1.Ability.SWALLOW]: new SwallowStrategy(),
    [Ability_1.Ability.NUTRIENTS]: new NutrientsStrategy(),
    [Ability_1.Ability.SYRUP_BOMB]: new SyrupBombStrategy(),
    [Ability_1.Ability.GRAV_APPLE]: new GravAppleStrategy(),
    [Ability_1.Ability.FICKLE_BEAM]: new FickleBeamStrategy(),
    [Ability_1.Ability.DECORATE]: new DecorateStrategy(),
    [Ability_1.Ability.DRAGON_CLAW]: new DragonClawStrategy(),
    [Ability_1.Ability.TAILWIND]: new TailwindStrategy(),
    [Ability_1.Ability.HORN_ATTACK]: new HornAttackStrategy(),
    [Ability_1.Ability.RAZOR_LEAF]: new RazorLeafStrategy(),
    [Ability_1.Ability.MUD_SHOT]: new MudShotStrategy(),
    [Ability_1.Ability.MALIGNANT_CHAIN]: new MalignantChainStrategy(),
    [Ability_1.Ability.FILLET_AWAY]: new FilletAwayStrategy(),
    [Ability_1.Ability.ELECTRO_SHOT]: new ElectroShotStrategy(),
    [Ability_1.Ability.FLOWER_TRICK]: new FlowerTrickStrategy(),
    [Ability_1.Ability.SOLAR_BLADE]: new SolarBladeStrategy(),
    [Ability_1.Ability.SCALE_SHOT]: new ScaleShotStrategy(),
    [Ability_1.Ability.BULLDOZE]: new BulldozeStrategy(),
    [Ability_1.Ability.BITTER_BLADE]: new BitterBladeStrategy(),
    [Ability_1.Ability.ARMOR_CANNON]: new ArmorCannonStrategy(),
    [Ability_1.Ability.SUCTION_HEAL]: new SuctionHealStrategy(),
    [Ability_1.Ability.ROOST]: new RoostStrategy()
};
//# sourceMappingURL=abilities.js.map