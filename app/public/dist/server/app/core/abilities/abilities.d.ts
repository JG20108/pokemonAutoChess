import { Ability } from "../../types/enum/Ability";
import { type Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import { AbilityStrategy } from "./ability-strategy";
export declare class BlueFlareStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FusionBoltStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GlaciateStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BeatUpStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PaydayStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PickupStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MindBlownStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SoftBoiledStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TeaTimeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PrecipiceBladesStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SongOfDesireStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SlackOffStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ConfusingMindStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class KnowledgeThiefStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WonderGuardStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IllusionStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class JudgementStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectricSurgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PsychicSurgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MistySurgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class GrassySurgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PsychicStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ChatterStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CrabHammerStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DiamondStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DracoEnergyStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DynamaxCannonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DynamicPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectroBoostStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AuroraVeilStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TimeTravelStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AquaJetStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SchoolingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectroWebStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MysticalFireStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FlameChargeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LeechSeedStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LockOnStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DisableStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RazorWindStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DarkVoidStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OverheatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HypnosisStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class KingShieldStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class UTurnStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PoisonJabStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ChloroblastStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ClangorousSoulStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LiquidationStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BonemerangStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShadowBoneStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AuroraBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GrowlStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RelicSongStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class FairyWindStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DisarmingVoiceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HighJumpKickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TropKickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GrassWhistleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TriAttackStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EchoStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class UproarStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class FutureSightStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PetalDanceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HyperVoiceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShadowCloneStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class VoltSwitchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AccelerockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NuzzleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HeadSmashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DoubleEdgeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockSmashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockTombStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RoarOfTimeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HealBlockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpikyShieldStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OriginPulseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SeedFlareStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NightmareStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ToxicStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BlizzardStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ProtectStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ObstructStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SingStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class IcicleMissileStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ConfusionStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FireBlastStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FieryDanceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SeismicTossStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GuillotineStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockSlideStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WheelOfFireStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class InfernalParadeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HeatWaveStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FlameThrowerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HydroPumpStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SolarBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThunderStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DracoMeteorStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BlazeKickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WishStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class LunarBlessingStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class NaturalGiftStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CosmicPowerMoonStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CosmicPowerSunStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DefenseCurlStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class IronHeadStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IronDefenseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SoakStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IronTailStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BlastBurnStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TwisterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ChargeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TailwindStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SludgeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SludgeWaveStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DischargeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShockwaveStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DiveStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SmokeScreenStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class StrangeSteamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BiteStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AppleAcidStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GravAppleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NutrientsStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SyrupBombStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class FickleBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsybeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HydroSteamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CavernousChompStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PresentStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SacredSwordGrassStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SacredSwordIronStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SacredSwordCavernStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SecretSwordStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MetalBurstStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThunderCageStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LeafBladeStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WaterfallStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class XScissorStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DragonTailStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AquaTailStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DragonBreathStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IcicleCrashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SteamEruptionStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IngrainStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TormentStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class StompStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HornDrillStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShadowBallStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BugBuzzStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StringShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EntanglingThreadStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class VenoshockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LeechLifeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HappyHourStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TeleportStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class NastyPlotStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TakeHeartStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HeartSwapStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpectralThiefStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StoredPowerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThiefStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class KnockOffStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StunSporeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MeteorMashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HurricaneStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FleurCannonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SandsearStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WildboltStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BleakwindStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpringtideStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FakeTearsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SparklingAriaStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DragonDartsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MetronomeStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SkyAttackStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SkyAttackShadowStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class FlyingPressStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AgilityStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SpiritShackleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WaterShurikenStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RazorLeafStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsychoCutStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShadowSneakStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PlasmaFistStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ForecastStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MachPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MegaPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MawashiGeriStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HeadbuttStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DizzyPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TripleKickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GeomancyStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DeathWingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MimicStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HexStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GrowthStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AttackOrderStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HealOrderStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DefendOrderStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BugBiteStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShellTrapStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DigStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FireSpinStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SearingShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PeckStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SplashStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CounterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PoisonPowderStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SilverWindStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IcyWindStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PowderSnowStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GigatonHammerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AcrobaticsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AbsorbStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RolloutStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IceBallStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThrashStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MagmaStormStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SlashingClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DireClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FakeOutStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FellStingerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EruptionStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HailStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MistBallStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LusterPurgeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MudBubbleStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class LinkCableStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MagicBounceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ReflectStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShellSmashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HelpingHandStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AstralBarrageStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PyroBallStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WhirlpoolStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AnchorShotStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SmogStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CottonGuardStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LavaPlumeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AcidArmorStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShelterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MagnetRiseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AttractStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class WaterPulseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PlayRoughStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AerialAceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ParabolicChargeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TeeterDanceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CloseCombatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AssistStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FissureStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AssuranceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AquaRingStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class LungeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PoisonGasStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BraveBirdStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MagicalLeafStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StealthRocksStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpikesStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CeaselessEdgeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StickyWebStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CottonSporeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StruggleBugStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class QuiverDanceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TailGlowStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PrismaticLaserStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NightShadeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SuperFangStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ChargeBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PopulationBombStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ScreechStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SandTombStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WhirlwindStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AcidSprayStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class UnboundStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HyperspaceFuryStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SnipeShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AirSlashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EggBombStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BodySlamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class VineWhipStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BarbBarrageStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FloralHealingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MagicPowderStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RetaliateStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SlashStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OutrageStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FishiousRendStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GoldRushStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MakeItRainStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RecoverStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TranseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CurseStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DoomDesireStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PoltergeistStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CrushGripStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AuraSphereStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SketchStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LovelyKissStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OverdriveStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TransformStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsychicFangsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShedTailStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ShadowPunchStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MagnetBombStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NightSlashStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class KowtowCleaveStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShieldsDownStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ShieldsUpStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AuraWheelStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FurySwipesStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TickleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AromatherapyStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DetectStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpacialRendStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MultiAttackStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PetalBlizzardStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SunsteelStrikeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MoongeistBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BloodMoonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MantisBladesStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpiritBreakStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SheerColdStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ZapCannonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IceHammerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FacadeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ExtremeSpeedStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsychoBoostStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PollenPuffStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PsystrikeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DreamEaterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SparkStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CrunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CrossPoisonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FireFangStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IceFangStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThunderFangStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TailWhipStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsyshieldBashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TorchSongStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PowerWhipStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DarkHarvestStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class StoneEdgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PsyShockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HeavySlamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BulldozeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RapidSpinStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BounceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class GunkShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AncientPowerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MuddyWaterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MoonDreamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StoneAxeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FlashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockHeadStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CrushClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FireLashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DrainPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FairyLockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GravityStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class InfestationStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GulpMissileStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DoubleShockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PurifyStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PastelVeilStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CharmStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EntrainmentStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OctazookaStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PsychoShiftStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GlaiveRushStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FoulPlayStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DoubleIronBashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RoarStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IvyCudgelStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ForcePalmStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SteelWingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BideStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class YawnStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class WiseYawnStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ShoreUpStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class PoisonStingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WoodHammerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TrickOrTreatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FreezingGlareStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThunderousKickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FieryWrathStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ViseGripStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LandsWrathStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ThousandArrowsStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CoreEnforcerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BurnUpStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PowerHugStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MortalSpinStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MetalClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FirestarterStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BoneArmorStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class TopsyTurvyStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RageStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BrickBreakStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ReturnStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TauntStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BanefulBunkerStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class BulkUpStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class CutStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FlyStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SurfStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean, preventDefaultAnim?: boolean, tierLevel?: number): void;
}
export declare class HeadlongRushStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StrengthStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HardenStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ColumnCrushStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class WonderRoomStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DarkLariatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BoltBeakStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FreezeDryStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DragonPulseStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FrostBreathStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DrillRunStrategy extends AbilityStrategy {
    canCritByDefault: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DrillPeckStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SaltCureStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SpicyExtractStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SweetScentStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SwallowStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StockpileStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DecorateStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class DragonClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HornAttackStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HornLeechStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MudShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MalignantChainStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FilletAwayStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RoostStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class UltraThrustersStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectroBallStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectroShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FlowerTrickStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SolarBladeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ScaleShotStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BitterBladeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ArmorCannonStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SuctionHealStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BehemothBladeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HeatCrashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LaserBladeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ArmThrustStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DrumBeatingStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SurgingStrikesStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class WickedBlowStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class VictoryDanceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class BoomBurstStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FollowMeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AfterYouStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TwinBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SwaggerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EncoreStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ChainCrazedStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MindBendStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SteamrollerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MagnetPullStrategy extends AbilityStrategy {
    copyable: boolean;
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SpinOutStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockArtilleryStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ZingZapStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TackleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class NoRetreatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StaticShockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SandSpitStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HyperDrillStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EarDigStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TerrainPulseStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class AxeKickStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ExpandingForceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SpiteStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GrudgeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OctolockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class JawLockStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LastRespectsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BurningJealousyStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FirstImpressionStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BaredFangsStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GrudgeDiveStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SoulTrapStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class EerieSpellStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShellSideArmStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TripleDiveStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class MoonblastStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PlasmaFissionStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SuperHeatStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PowerWashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class DeepFreezeStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PlasmaTempestStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TrimmingMowerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PlasmaFlashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GearGrindStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PummelingPaybackStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class VoltSurgeStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class SupercellSlamStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class HighHorsepowerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class CityShuttleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class BulletPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FeatherDanceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class PowderStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class LingeringAromaStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RagingBullStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ElectrifyStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class WaveSplashStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class FocusPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class HyperBeamStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SkillSwapStrategy extends AbilityStrategy {
    copyable: boolean;
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class JetPunchStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class ShadowForceStrategy extends AbilityStrategy {
    requiresTarget: boolean;
    process(pokemon: PokemonEntity, board: Board, target: null, crit: boolean): void;
}
export declare class ShadowClawStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class GlacialLanceStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class OrderUpStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class IceSpinnerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class MountainGaleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class TwineedleStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class RockWreckerStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SnoreStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class StuffCheeksStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class AquaStepStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SkitterSmackStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export declare class SilkTrapStrategy extends AbilityStrategy {
    process(pokemon: PokemonEntity, board: Board, target: PokemonEntity, crit: boolean): void;
}
export * from "./hidden-power";
export declare const AbilityStrategies: {
    [key in Ability]: AbilityStrategy;
};
