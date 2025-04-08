import {
  ArraySchema,
  MapSchema,
  Schema,
  SetSchema,
  type,
} from '@colyseus/schema';
import BotManager from '../../core/bot-manager';
import Simulation from '../../core/simulation';
import { FloatingItem } from '../../models/colyseus-models/floating-item';
import Player from '../../models/colyseus-models/player';
import { PokemonAvatarModel } from '../../models/colyseus-models/pokemon-avatar';
import { Portal, SynergySymbol } from '../../models/colyseus-models/portal';
import Shop from '../../models/shop';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  EloRank,
  StageDuration,
} from '../../types/Config';
import { GameMode, GamePhaseState } from '../../types/enum/Game';
import { Item } from '../../types/enum/Item';
import { Pkm } from '../../types/enum/Pokemon';
import { SpecialGameRule } from '../../types/enum/SpecialGameRule';
import { Weather } from '../../types/enum/Weather';
import { TownEncounter } from '../../core/town-encounters';
import { pickRandomIn, randomBetween } from '../../utils/random';

interface GameStateOptions {
  preparationId: string;
  name: string;
  noElo: boolean;
  minRank: EloRank | null;
  maxRank: EloRank | null;
  weather: Weather;
  phase: GamePhaseState;
  PICK_PHASE_DURATION: number;
  status: any;
}

export default class GameState extends Schema {
  @type('string') afterGameId = '';
  @type('uint8') roundTime = StageDuration[0];
  @type('uint8') phase = GamePhaseState.TOWN;
  @type({ map: Player }) players = new MapSchema<Player>();
  @type({ map: PokemonAvatarModel }) avatars =
    new MapSchema<PokemonAvatarModel>();
  @type({ map: FloatingItem }) floatingItems = new MapSchema<FloatingItem>();
  @type({ map: Portal }) portals = new MapSchema<Portal>();
  @type({ map: SynergySymbol }) symbols = new MapSchema<SynergySymbol>();
  @type(['string']) additionalPokemons = new ArraySchema<Pkm>();
  @type('uint8') stageLevel = 0;
  @type('string') weather: Weather;
  @type('boolean') noElo = false;
  @type('string') gameMode: GameMode = GameMode.CUSTOM_LOBBY;
  @type({ set: 'string' }) spectators = new SetSchema<string>();
  @type({ map: Simulation }) simulations = new MapSchema<Simulation>();
  @type('uint8') lightX = randomBetween(0, BOARD_WIDTH - 1);
  @type('uint8') lightY = randomBetween(1, BOARD_HEIGHT / 2);
  @type('string') specialGameRule: SpecialGameRule | null = null;
  @type('string') townEncounter: TownEncounter | null = null;
  @type('number') time = StageDuration[0] * 1000;
  @type('boolean') updatePhaseNeeded = false;
  @type('boolean') gameFinished = false;
  @type('boolean') gameLoaded = false;
  @type('string') name = '';
  @type('number') startTime = 0;
  @type('number') endTime: number | undefined = undefined;
  @type('string') preparationId = '';
  @type('boolean') shinyEncounter = false;
  @type('number') seed = 0;
  @type('number') turn = 0;
  @type('number') phaseStartedAt = 0;
  @type('number') phaseEndedAt = 0;
  @type(['string']) history: string[] = [];
  @type('boolean') shopLocked = false;
  @type('number') levelCost = 4;
  @type('number') levelMaxExp = 4;
  @type('number') expPerBattle = 1;
  @type('number') expPerBuy = 4;
  @type('number') rerollCost = 1;
  @type(['number']) pokemonPrices = [1, 1, 2, 3, 4, 5];
  @type('number') pokemonPerShop = 5;
  @type('number') maxLevel = 9;
  @type('number') maxPokemonPerTeam = 9;
  @type('number') maxItemPerPokemon = 3;
  @type('number') maxCopiesPerPokemon = 3;
  @type('number') maxCopiesPerItem = 1;
  @type('number') maxTeamCost = 30;
  @type('number') maxLife = 20;
  @type('number') maxMana = 100;
  @type('number') boosterDropRate = 0.15;
  @type('number') shinyRate = 0.01;
  @type('number') weatherDuration = 0;
  @type('number') weatherStartedAt = 0;
  @type('string') status = '';
  @type('number') statusStartedAt = 0;
  @type('number') statusEndedAt = 0;
  @type('string') statusMessage = '';
  @type('number') statusMessageStartedAt = 0;
  @type('number') statusMessageEndedAt = 0;
  @type('string') minRank: EloRank | null = null;
  @type('string') maxRank: EloRank | null = null;
  botManager: BotManager = new BotManager();
  shop: Shop = new Shop();
  townEncounters: Set<TownEncounter> = new Set<TownEncounter>();
  pveRewards: Item[] = [];
  pveRewardsPropositions: Item[] = [];
  wanderers: Map<string, Pkm> = new Map<string, Pkm>();

  constructor(
    options: GameStateOptions,
    players: Player[],
    gameMode: GameMode,
    specialGameRule?: SpecialGameRule,
    seed?: string
  ) {
    super();
    this.preparationId = options.preparationId;
    this.startTime = Date.now();
    this.name = options.name;
    this.noElo = options.noElo;
    this.gameMode = gameMode;
    this.minRank = options.minRank;
    this.maxRank = options.maxRank;
    this.weather = options.weather;
    this.specialGameRule = specialGameRule ?? null;
    this.seed = seed ? Number(seed) : 0;
    this.turn = 0;
    this.phase = options.phase;
    this.phaseStartedAt = Date.now();
    this.phaseEndedAt = Date.now() + options.PICK_PHASE_DURATION;
    this.status = options.status;
    this.statusStartedAt = Date.now();
  }
}
