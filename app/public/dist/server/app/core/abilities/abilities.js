"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStrategies = exports.SkillSwapStrategy = exports.MimicStrategy = exports.MetronomeStrategy = exports.KnowledgeThiefStrategy = exports.EncoreStrategy = exports.AssistStrategy = void 0;
const abilities_1 = require("../../config/game/abilities");
const precomputed_pokemon_data_1 = require("../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../models/precomputed/precomputed-rarity");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
const absorb_1 = require("./absorb");
const accelerock_1 = require("./accelerock");
const acid_armor_1 = require("./acid-armor");
const acid_spray_1 = require("./acid-spray");
const acrobatics_1 = require("./acrobatics");
const aerial_ace_1 = require("./aerial-ace");
const after_you_1 = require("./after-you");
const agility_1 = require("./agility");
const air_slash_1 = require("./air-slash");
const anchor_shot_1 = require("./anchor-shot");
const ancient_power_1 = require("./ancient-power");
const apple_acid_1 = require("./apple-acid");
const aqua_jet_1 = require("./aqua-jet");
const aqua_ring_1 = require("./aqua-ring");
const aqua_step_1 = require("./aqua-step");
const aqua_tail_1 = require("./aqua-tail");
const arm_thrust_1 = require("./arm-thrust");
const armor_cannon_1 = require("./armor-cannon");
const aroma_therapy_1 = require("./aroma-therapy");
const assurance_1 = require("./assurance");
const astral_barrage_1 = require("./astral-barrage");
const attack_order_1 = require("./attack-order");
const attract_1 = require("./attract");
const aura_sphere_1 = require("./aura-sphere");
const aura_wheel_1 = require("./aura-wheel");
const aurora_beam_1 = require("./aurora-beam");
const aurora_veil_1 = require("./aurora-veil");
const axe_kick_1 = require("./axe-kick");
const baneful_bunker_1 = require("./baneful-bunker");
const barb_barrage_1 = require("./barb-barrage");
const bared_fangs_1 = require("./bared-fangs");
const beat_up_1 = require("./beat-up");
const behemoth_blade_1 = require("./behemoth-blade");
const bide_1 = require("./bide");
const bite_1 = require("./bite");
const bitter_blade_1 = require("./bitter-blade");
const blast_burn_1 = require("./blast-burn");
const blaze_kick_1 = require("./blaze-kick");
const bleakwind_storm_1 = require("./bleakwind-storm");
const blizzard_1 = require("./blizzard");
const blood_moon_1 = require("./blood-moon");
const blue_flare_1 = require("./blue-flare");
const body_slam_1 = require("./body-slam");
const bolt_beak_1 = require("./bolt-beak");
const bone_armor_1 = require("./bone-armor");
const bonemerang_1 = require("./bonemerang");
const boomburst_1 = require("./boomburst");
const bounce_1 = require("./bounce");
const brave_bird_1 = require("./brave-bird");
const brick_break_1 = require("./brick-break");
const bug_bite_1 = require("./bug-bite");
const bug_buzz_1 = require("./bug-buzz");
const bulk_up_1 = require("./bulk-up");
const bulldoze_1 = require("./bulldoze");
const bullet_punch_1 = require("./bullet-punch");
const burn_up_1 = require("./burn-up");
const burning_jealousy_1 = require("./burning-jealousy");
const cavernous_chomp_1 = require("./cavernous-chomp");
const ceaseless_edge_1 = require("./ceaseless-edge");
const chain_crazed_1 = require("./chain-crazed");
const charge_1 = require("./charge");
const charge_beam_1 = require("./charge-beam");
const charm_1 = require("./charm");
const chatter_1 = require("./chatter");
const chloroblast_1 = require("./chloroblast");
const city_shuttle_1 = require("./city-shuttle");
const clangorous_soul_1 = require("./clangorous-soul");
const close_combat_1 = require("./close-combat");
const column_crush_1 = require("./column-crush");
const confusing_mind_1 = require("./confusing-mind");
const confusion_1 = require("./confusion");
const core_enforcer_1 = require("./core-enforcer");
const cosmic_power_moon_1 = require("./cosmic-power-moon");
const cosmic_power_sun_1 = require("./cosmic-power-sun");
const cotton_guard_1 = require("./cotton-guard");
const cotton_spore_1 = require("./cotton-spore");
const counter_1 = require("./counter");
const crab_hammer_1 = require("./crab-hammer");
const cross_poison_1 = require("./cross-poison");
const crunch_1 = require("./crunch");
const crush_claw_1 = require("./crush-claw");
const crush_grip_1 = require("./crush-grip");
const curse_1 = require("./curse");
const cut_1 = require("./cut");
const dark_harvest_1 = require("./dark-harvest");
const dark_void_1 = require("./dark-void");
const darkest_lariat_1 = require("./darkest-lariat");
const decorate_1 = require("./decorate");
const deep_freeze_1 = require("./deep-freeze");
const defend_order_1 = require("./defend-order");
const defense_curl_1 = require("./defense-curl");
const detect_1 = require("./detect");
const diamond_storm_1 = require("./diamond-storm");
const dig_1 = require("./dig");
const dire_claw_1 = require("./dire-claw");
const disable_1 = require("./disable");
const disarming_voice_1 = require("./disarming-voice");
const discharge_1 = require("./discharge");
const dive_1 = require("./dive");
const dizzy_punch_1 = require("./dizzy-punch");
const doom_desire_1 = require("./doom-desire");
const double_edge_1 = require("./double-edge");
const double_iron_bash_1 = require("./double-iron-bash");
const double_shock_1 = require("./double-shock");
const draco_meteor_1 = require("./draco-meteor");
const dragon_breath_1 = require("./dragon-breath");
const dragon_claw_1 = require("./dragon-claw");
const dragon_darts_1 = require("./dragon-darts");
const dragon_energy_1 = require("./dragon-energy");
const dragon_pulse_1 = require("./dragon-pulse");
const dragon_tail_1 = require("./dragon-tail");
const drain_punch_1 = require("./drain-punch");
const dream_eater_1 = require("./dream-eater");
const drill_peck_1 = require("./drill-peck");
const drill_run_1 = require("./drill-run");
const drum_beating_1 = require("./drum-beating");
const dynamax_cannon_1 = require("./dynamax-cannon");
const dynamic_punch_1 = require("./dynamic-punch");
const ear_dig_1 = require("./ear-dig");
const echo_1 = require("./echo");
const eerie_spell_1 = require("./eerie-spell");
const egg_bomb_1 = require("./egg-bomb");
const electric_surge_1 = require("./electric-surge");
const electrify_1 = require("./electrify");
const electro_ball_1 = require("./electro-ball");
const electro_shot_1 = require("./electro-shot");
const electro_web_1 = require("./electro-web");
const entangling_thread_1 = require("./entangling-thread");
const entrainment_1 = require("./entrainment");
const eruption_1 = require("./eruption");
const expanding_force_1 = require("./expanding-force");
const explosion_1 = require("./explosion");
const extreme_speed_1 = require("./extreme-speed");
const facade_1 = require("./facade");
const fairy_lock_1 = require("./fairy-lock");
const fairy_wind_1 = require("./fairy-wind");
const fake_out_1 = require("./fake-out");
const fake_tears_1 = require("./fake-tears");
const feather_dance_1 = require("./feather-dance");
const fell_stinger_1 = require("./fell-stinger");
const fickle_beam_1 = require("./fickle-beam");
const fiery_dance_1 = require("./fiery-dance");
const fiery_wrath_1 = require("./fiery-wrath");
const fillet_away_1 = require("./fillet-away");
const fire_blast_1 = require("./fire-blast");
const fire_fang_1 = require("./fire-fang");
const fire_lash_1 = require("./fire-lash");
const fire_spin_1 = require("./fire-spin");
const firestarter_1 = require("./firestarter");
const first_impression_1 = require("./first-impression");
const fishious_rend_1 = require("./fishious-rend");
const fissure_1 = require("./fissure");
const flame_charge_1 = require("./flame-charge");
const flame_thrower_1 = require("./flame-thrower");
const flash_1 = require("./flash");
const fleur_cannon_1 = require("./fleur-cannon");
const floral_healing_1 = require("./floral-healing");
const flower_trick_1 = require("./flower-trick");
const fly_1 = require("./fly");
const flying_press_1 = require("./flying-press");
const focus_punch_1 = require("./focus-punch");
const follow_me_1 = require("./follow-me");
const force_palm_1 = require("./force-palm");
const forecast_1 = require("./forecast");
const foul_play_1 = require("./foul-play");
const freeze_dry_1 = require("./freeze-dry");
const freezing_glare_1 = require("./freezing-glare");
const frost_breath_1 = require("./frost-breath");
const fury_swipes_1 = require("./fury-swipes");
const fusion_bolt_1 = require("./fusion-bolt");
const future_sight_1 = require("./future-sight");
const gear_grind_1 = require("./gear-grind");
const geomancy_1 = require("./geomancy");
const gigaton_hammer_1 = require("./gigaton-hammer");
const glacial_lance_1 = require("./glacial-lance");
const glaciate_1 = require("./glaciate");
const glaive_rush_1 = require("./glaive-rush");
const gold_rush_1 = require("./gold-rush");
const grass_whistle_1 = require("./grass-whistle");
const grassy_surge_1 = require("./grassy-surge");
const grav_apple_1 = require("./grav-apple");
const gravity_1 = require("./gravity");
const growl_1 = require("./growl");
const growth_1 = require("./growth");
const grudge_1 = require("./grudge");
const grudge_dive_1 = require("./grudge-dive");
const guillotine_1 = require("./guillotine");
const gulp_missile_1 = require("./gulp-missile");
const gunk_shot_1 = require("./gunk-shot");
const hail_1 = require("./hail");
const happy_hour_1 = require("./happy-hour");
const harden_1 = require("./harden");
const head_smash_1 = require("./head-smash");
const headbutt_1 = require("./headbutt");
const headlong_rush_1 = require("./headlong-rush");
const heal_block_1 = require("./heal-block");
const heal_order_1 = require("./heal-order");
const heart_swap_1 = require("./heart-swap");
const heat_crash_1 = require("./heat-crash");
const heavy_slam_1 = require("./heavy-slam");
const helping_hand_1 = require("./helping-hand");
const hex_1 = require("./hex");
const hidden_power_1 = require("./hidden-power");
const high_horsepower_1 = require("./high-horsepower");
const high_jump_kick_1 = require("./high-jump-kick");
const horn_attack_1 = require("./horn-attack");
const horn_drill_1 = require("./horn-drill");
const horn_leech_1 = require("./horn-leech");
const hurricane_1 = require("./hurricane");
const hydro_pump_1 = require("./hydro-pump");
const hydro_steam_1 = require("./hydro-steam");
const hyper_beam_1 = require("./hyper-beam");
const hyper_drill_1 = require("./hyper-drill");
const hyper_voice_1 = require("./hyper-voice");
const hyperspace_fury_1 = require("./hyperspace-fury");
const hypnosis_1 = require("./hypnosis");
const ice_ball_1 = require("./ice-ball");
const ice_fang_1 = require("./ice-fang");
const ice_hammer_1 = require("./ice-hammer");
const ice_spinner_1 = require("./ice-spinner");
const icicle_crash_1 = require("./icicle-crash");
const icicle_missile_1 = require("./icicle-missile");
const icy_wind_1 = require("./icy-wind");
const illusion_1 = require("./illusion");
const infernal_parade_1 = require("./infernal-parade");
const infestation_1 = require("./infestation");
const ingrain_1 = require("./ingrain");
const iron_defense_1 = require("./iron-defense");
const iron_head_1 = require("./iron-head");
const iron_tail_1 = require("./iron-tail");
const ivy_cudgel_1 = require("./ivy-cudgel");
const jaw_lock_1 = require("./jaw-lock");
const jet_punch_1 = require("./jet-punch");
const judgement_1 = require("./judgement");
const king_shield_1 = require("./king-shield");
const knock_off_1 = require("./knock-off");
const kowtow_cleave_1 = require("./kowtow-cleave");
const lands_wrath_1 = require("./lands-wrath");
const laser_blade_1 = require("./laser-blade");
const last_respects_1 = require("./last-respects");
const lava_plume_1 = require("./lava-plume");
const leaf_blade_1 = require("./leaf-blade");
const leech_life_1 = require("./leech-life");
const leech_seed_1 = require("./leech-seed");
const lick_1 = require("./lick");
const lingering_aroma_1 = require("./lingering-aroma");
const link_cable_1 = require("./link-cable");
const liquidation_1 = require("./liquidation");
const lock_on_1 = require("./lock-on");
const lovely_kiss_1 = require("./lovely-kiss");
const lunar_blessing_1 = require("./lunar-blessing");
const lunge_1 = require("./lunge");
const luster_purge_1 = require("./luster-purge");
const mach_punch_1 = require("./mach-punch");
const magic_bounce_1 = require("./magic-bounce");
const magic_powder_1 = require("./magic-powder");
const magical_leaf_1 = require("./magical-leaf");
const magma_storm_1 = require("./magma-storm");
const magnet_bomb_1 = require("./magnet-bomb");
const magnet_pull_1 = require("./magnet-pull");
const magnet_rise_1 = require("./magnet-rise");
const make_it_rain_1 = require("./make-it-rain");
const malignant_chain_1 = require("./malignant-chain");
const mantis_blades_1 = require("./mantis-blades");
const mawashi_geri_1 = require("./mawashi-geri");
const meditate_1 = require("./meditate");
const mega_punch_1 = require("./mega-punch");
const metal_burst_1 = require("./metal-burst");
const metal_claw_1 = require("./metal-claw");
const meteor_mash_1 = require("./meteor-mash");
const mind_bend_1 = require("./mind-bend");
const mind_blown_1 = require("./mind-blown");
const mist_ball_1 = require("./mist-ball");
const misty_surge_1 = require("./misty-surge");
const moon_dream_1 = require("./moon-dream");
const moonblast_1 = require("./moonblast");
const moongeist_beam_1 = require("./moongeist-beam");
const mortal_spin_1 = require("./mortal-spin");
const mountain_gale_1 = require("./mountain-gale");
const mud_bubble_1 = require("./mud-bubble");
const mud_shot_1 = require("./mud-shot");
const muddy_water_1 = require("./muddy-water");
const multi_attack_1 = require("./multi-attack");
const mystical_fire_1 = require("./mystical-fire");
const nasty_plot_1 = require("./nasty-plot");
const natural_gift_1 = require("./natural-gift");
const night_shade_1 = require("./night-shade");
const night_slash_1 = require("./night-slash");
const nightmare_1 = require("./nightmare");
const no_retreat_1 = require("./no-retreat");
const nutrients_1 = require("./nutrients");
const nuzzle_1 = require("./nuzzle");
const oblivion_wing_1 = require("./oblivion-wing");
const obstruct_1 = require("./obstruct");
const octazooka_1 = require("./octazooka");
const octolock_1 = require("./octolock");
const order_up_1 = require("./order-up");
const origin_pulse_1 = require("./origin-pulse");
const outrage_1 = require("./outrage");
const overdrive_1 = require("./overdrive");
const overheat_1 = require("./overheat");
const parabolic_charge_1 = require("./parabolic-charge");
const pastel_veil_1 = require("./pastel-veil");
const payday_1 = require("./payday");
const peck_1 = require("./peck");
const petal_blizzard_1 = require("./petal-blizzard");
const petal_dance_1 = require("./petal-dance");
const pickup_1 = require("./pickup");
const plasma_fission_1 = require("./plasma-fission");
const plasma_fist_1 = require("./plasma-fist");
const plasma_flash_1 = require("./plasma-flash");
const plasma_tempest_1 = require("./plasma-tempest");
const play_rough_1 = require("./play-rough");
const poison_gas_1 = require("./poison-gas");
const poison_jab_1 = require("./poison-jab");
const poison_powder_1 = require("./poison-powder");
const poison_sting_1 = require("./poison-sting");
const pollen_puff_1 = require("./pollen-puff");
const poltergeist_1 = require("./poltergeist");
const population_bomb_1 = require("./population-bomb");
const powder_1 = require("./powder");
const powder_snow_1 = require("./powder-snow");
const power_hug_1 = require("./power-hug");
const power_wash_1 = require("./power-wash");
const power_whip_1 = require("./power-whip");
const precipice_blades_1 = require("./precipice-blades");
const present_1 = require("./present");
const prismatic_laser_1 = require("./prismatic-laser");
const protect_1 = require("./protect");
const psy_shock_1 = require("./psy-shock");
const psybeam_1 = require("./psybeam");
const psychic_1 = require("./psychic");
const psychic_fangs_1 = require("./psychic-fangs");
const psychic_surge_1 = require("./psychic-surge");
const psycho_boost_1 = require("./psycho-boost");
const psycho_cut_1 = require("./psycho-cut");
const psycho_shift_1 = require("./psycho-shift");
const psyshield_bash_1 = require("./psyshield-bash");
const psystrike_1 = require("./psystrike");
const pummeling_payback_1 = require("./pummeling-payback");
const purify_1 = require("./purify");
const pyro_ball_1 = require("./pyro-ball");
const quiver_dance_1 = require("./quiver-dance");
const rage_1 = require("./rage");
const raging_bull_1 = require("./raging-bull");
const rapid_spin_1 = require("./rapid-spin");
const razor_leaf_1 = require("./razor-leaf");
const razor_wind_1 = require("./razor-wind");
const recover_1 = require("./recover");
const reflect_1 = require("./reflect");
const relic_song_1 = require("./relic-song");
const retaliate_1 = require("./retaliate");
const return_1 = require("./return");
const roar_1 = require("./roar");
const roar_of_time_1 = require("./roar-of-time");
const rock_artillery_1 = require("./rock-artillery");
const rock_head_1 = require("./rock-head");
const rock_slide_1 = require("./rock-slide");
const rock_smash_1 = require("./rock-smash");
const rock_tomb_1 = require("./rock-tomb");
const rock_wrecker_1 = require("./rock-wrecker");
const rollout_1 = require("./rollout");
const roost_1 = require("./roost");
const sacred_sword_cavern_1 = require("./sacred-sword-cavern");
const sacred_sword_grass_1 = require("./sacred-sword-grass");
const sacred_sword_iron_1 = require("./sacred-sword-iron");
const salt_cure_1 = require("./salt-cure");
const sand_spit_1 = require("./sand-spit");
const sand_tomb_1 = require("./sand-tomb");
const sandsear_storm_1 = require("./sandsear-storm");
const scale_shot_1 = require("./scale-shot");
const schooling_1 = require("./schooling");
const screech_1 = require("./screech");
const searing_shot_1 = require("./searing-shot");
const secret_sword_1 = require("./secret-sword");
const seed_flare_1 = require("./seed-flare");
const seismic_toss_1 = require("./seismic-toss");
const shadow_ball_1 = require("./shadow-ball");
const shadow_bone_1 = require("./shadow-bone");
const shadow_claw_1 = require("./shadow-claw");
const shadow_clone_1 = require("./shadow-clone");
const shadow_force_1 = require("./shadow-force");
const shadow_punch_1 = require("./shadow-punch");
const shadow_sneak_1 = require("./shadow-sneak");
const shed_tail_1 = require("./shed-tail");
const sheer_cold_1 = require("./sheer-cold");
const shell_side_arm_1 = require("./shell-side-arm");
const shell_smash_1 = require("./shell-smash");
const shell_trap_1 = require("./shell-trap");
const shelter_1 = require("./shelter");
const shields_down_1 = require("./shields-down");
const shields_up_1 = require("./shields-up");
const shockwave_1 = require("./shockwave");
const shore_up_1 = require("./shore-up");
const silk_trap_1 = require("./silk-trap");
const silver_wind_1 = require("./silver-wind");
const sing_1 = require("./sing");
const sketch_1 = require("./sketch");
const skitter_smack_1 = require("./skitter-smack");
const sky_attack_1 = require("./sky-attack");
const sky_attack_shadow_1 = require("./sky-attack-shadow");
const slack_off_1 = require("./slack-off");
const slash_1 = require("./slash");
const slashing_claw_1 = require("./slashing-claw");
const sludge_1 = require("./sludge");
const sludge_wave_1 = require("./sludge-wave");
const smog_1 = require("./smog");
const smoke_screen_1 = require("./smoke-screen");
const snipe_shot_1 = require("./snipe-shot");
const snore_1 = require("./snore");
const soak_1 = require("./soak");
const soft_boiled_1 = require("./soft-boiled");
const solar_beam_1 = require("./solar-beam");
const solar_blade_1 = require("./solar-blade");
const song_of_desire_1 = require("./song-of-desire");
const soul_trap_1 = require("./soul-trap");
const spacial_rend_1 = require("./spacial-rend");
const spark_1 = require("./spark");
const sparkling_aria_1 = require("./sparkling-aria");
const spectral_thief_1 = require("./spectral-thief");
const spicy_extract_1 = require("./spicy-extract");
const spikes_1 = require("./spikes");
const spiky_shield_1 = require("./spiky-shield");
const spin_out_1 = require("./spin-out");
const spirit_break_1 = require("./spirit-break");
const spirit_shackle_1 = require("./spirit-shackle");
const spite_1 = require("./spite");
const splash_1 = require("./splash");
const springtide_storm_1 = require("./springtide-storm");
const static_shock_1 = require("./static-shock");
const stealth_rocks_1 = require("./stealth-rocks");
const steam_eruption_1 = require("./steam-eruption");
const steamroller_1 = require("./steamroller");
const steel_wing_1 = require("./steel-wing");
const sticky_web_1 = require("./sticky-web");
const stockpile_1 = require("./stockpile");
const stomp_1 = require("./stomp");
const stone_axe_1 = require("./stone-axe");
const stone_edge_1 = require("./stone-edge");
const stored_power_1 = require("./stored-power");
const strange_steam_1 = require("./strange-steam");
const strength_1 = require("./strength");
const string_shot_1 = require("./string-shot");
const struggle_bug_1 = require("./struggle-bug");
const stuff_cheeks_1 = require("./stuff-cheeks");
const stun_spore_1 = require("./stun-spore");
const suction_heal_1 = require("./suction-heal");
const sunsteel_strike_1 = require("./sunsteel-strike");
const super_fang_1 = require("./super-fang");
const super_heat_1 = require("./super-heat");
const supercell_slam_1 = require("./supercell-slam");
const surf_1 = require("./surf");
const surging_strikes_1 = require("./surging-strikes");
const swagger_1 = require("./swagger");
const swallow_1 = require("./swallow");
const sweet_scent_1 = require("./sweet-scent");
const syrup_bomb_1 = require("./syrup-bomb");
const tackle_1 = require("./tackle");
const tail_glow_1 = require("./tail-glow");
const tail_whip_1 = require("./tail-whip");
const tailwind_1 = require("./tailwind");
const take_heart_1 = require("./take-heart");
const taunt_1 = require("./taunt");
const tea_time_1 = require("./tea-time");
const teeter_dance_1 = require("./teeter-dance");
const teleport_1 = require("./teleport");
const terrain_pulse_1 = require("./terrain-pulse");
const thief_1 = require("./thief");
const thousand_arrows_1 = require("./thousand-arrows");
const thrash_1 = require("./thrash");
const thunder_1 = require("./thunder");
const thunder_cage_1 = require("./thunder-cage");
const thunder_fang_1 = require("./thunder-fang");
const thunder_shock_1 = require("./thunder-shock");
const thunderous_kick_1 = require("./thunderous-kick");
const tickle_1 = require("./tickle");
const time_travel_1 = require("./time-travel");
const topsy_turvy_1 = require("./topsy-turvy");
const torch_song_1 = require("./torch-song");
const torment_1 = require("./torment");
const toxic_1 = require("./toxic");
const transe_1 = require("./transe");
const transform_1 = require("./transform");
const tri_attack_1 = require("./tri-attack");
const trick_or_treat_1 = require("./trick-or-treat");
const trimming_mower_1 = require("./trimming-mower");
const triple_dive_1 = require("./triple-dive");
const triple_kick_1 = require("./triple-kick");
const trop_kick_1 = require("./trop-kick");
const twin_beam_1 = require("./twin-beam");
const twineedle_1 = require("./twineedle");
const twister_1 = require("./twister");
const u_turn_1 = require("./u-turn");
const ultra_thrusters_1 = require("./ultra-thrusters");
const unbound_1 = require("./unbound");
const uproar_1 = require("./uproar");
const venoshock_1 = require("./venoshock");
const victory_dance_1 = require("./victory-dance");
const vine_whip_1 = require("./vine-whip");
const vise_grip_1 = require("./vise-grip");
const volt_surge_1 = require("./volt-surge");
const volt_switch_1 = require("./volt-switch");
const water_pulse_1 = require("./water-pulse");
const water_shuriken_1 = require("./water-shuriken");
const waterfall_1 = require("./waterfall");
const wave_splash_1 = require("./wave-splash");
const wheel_of_fire_1 = require("./wheel-of-fire");
const whirlpool_1 = require("./whirlpool");
const whirlwind_1 = require("./whirlwind");
const wicked_blow_1 = require("./wicked-blow");
const wildbolt_storm_1 = require("./wildbolt-storm");
const wise_yawn_1 = require("./wise-yawn");
const wish_1 = require("./wish");
const wonder_guard_1 = require("./wonder-guard");
const wonder_room_1 = require("./wonder-room");
const wood_hammer_1 = require("./wood-hammer");
const x_scissor_1 = require("./x-scissor");
const yawn_1 = require("./yawn");
const zap_cannon_1 = require("./zap-cannon");
const zing_zap_1 = require("./zing-zap");
class AssistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        const skill = (0, random_1.pickRandomIn)(board.cells
            .filter((v) => v &&
            v.team === pokemon.team &&
            v.skill &&
            !abilities_1.InimitableAbilities.includes(v.skill))
            .map((v) => v === null || v === void 0 ? void 0 : v.skill));
        if (skill) {
            pokemon.broadcastAbility({ skill });
            exports.AbilityStrategies[skill].process(pokemon, board, target, crit);
        }
        else
            super.process(pokemon, board, target, crit);
    }
}
exports.AssistStrategy = AssistStrategy;
class EncoreStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const abilitiesCast = pokemon.team === Game_1.Team.BLUE_TEAM
            ? pokemon.simulation.blueAbilitiesCast
            : pokemon.simulation.redAbilitiesCast;
        const lastAbilityUsed = abilitiesCast === null || abilitiesCast === void 0 ? void 0 : abilitiesCast.findLast((ability) => abilities_1.InimitableAbilities.includes(ability) === false);
        if (lastAbilityUsed) {
            exports.AbilityStrategies[lastAbilityUsed].process(pokemon, board, target, crit);
        }
    }
}
exports.EncoreStrategy = EncoreStrategy;
class KnowledgeThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        if (abilities_1.InimitableAbilities.includes(target.skill) === false) {
            exports.AbilityStrategies[target.skill].process(pokemon, board, target, crit);
        }
        else
            super.process(pokemon, board, target, crit);
        if (pokemon.player && !pokemon.isGhostOpponent) {
            const xpGain = (_a = [1, 1, 1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
            pokemon.player.addExperience(xpGain);
        }
    }
}
exports.KnowledgeThiefStrategy = KnowledgeThiefStrategy;
class MetronomeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        const threshold = Math.pow(Math.random(), 1 + pokemon.luck / 100);
        let rarity = Game_1.Rarity.COMMON;
        if (threshold < 1 / 8) {
            rarity = Game_1.Rarity.ULTRA;
        }
        else if (threshold < 2 / 8) {
            rarity = Game_1.Rarity.LEGENDARY;
        }
        else if (threshold < 3 / 8) {
            rarity = Game_1.Rarity.EPIC;
        }
        else if (threshold < 4 / 8) {
            rarity = Game_1.Rarity.UNIQUE;
        }
        else if (threshold < 5 / 8) {
            rarity = Game_1.Rarity.RARE;
        }
        else if (threshold < 6 / 8) {
            rarity = Game_1.Rarity.SPECIAL;
        }
        else if (threshold < 7 / 8) {
            rarity = Game_1.Rarity.UNCOMMON;
        }
        else {
            rarity = Game_1.Rarity.COMMON;
        }
        const pokemonOptions = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity];
        if (rarity === Game_1.Rarity.SPECIAL) {
            pokemonOptions.push(...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.HATCH]);
        }
        const skillOptions = [
            ...new Set(pokemonOptions.map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).skill))
        ];
        const skill = (0, random_1.pickRandomIn)(skillOptions.filter((s) => abilities_1.InimitableAbilities.includes(s) === false));
        pokemon.broadcastAbility({ skill });
        exports.AbilityStrategies[skill].process(pokemon, board, target, crit);
        pokemon.simulation.broadcastToSpectators(types_1.Transfer.DISPLAY_TEXT, {
            id: pokemon.simulation.id,
            text: `ability.${skill}`,
            x: pokemon.positionX,
            y: pokemon.positionY
        });
    }
}
exports.MetronomeStrategy = MetronomeStrategy;
class MimicStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        if (abilities_1.InimitableAbilities.includes(target.skill) === false) {
            exports.AbilityStrategies[target.skill].process(pokemon, board, target, crit);
        }
        else
            super.process(pokemon, board, target, crit);
    }
}
exports.MimicStrategy = MimicStrategy;
class SkillSwapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        if (abilities_1.InimitableAbilities.includes(target.skill) === false) {
            pokemon.skill = target.skill;
            pokemon.maxPP = target.refToBoardPokemon
                ? target.refToBoardPokemon.maxPP
                : target.maxPP;
            if (pokemon.refToBoardPokemon &&
                !(pokemon.refToBoardPokemon.skill === Ability_1.Ability.SKETCH &&
                    pokemon.refToBoardPokemon.tm === Ability_1.Ability.DEFAULT)) {
                pokemon.refToBoardPokemon.skill = target.skill;
            }
            exports.AbilityStrategies[target.skill].process(pokemon, board, target, crit);
        }
    }
}
exports.SkillSwapStrategy = SkillSwapStrategy;
exports.AbilityStrategies = {
    [Ability_1.Ability.ABSORB]: new absorb_1.AbsorbStrategy(),
    [Ability_1.Ability.ACCELEROCK]: new accelerock_1.AccelerockStrategy(),
    [Ability_1.Ability.ACID_ARMOR]: new acid_armor_1.AcidArmorStrategy(),
    [Ability_1.Ability.ACID_SPRAY]: new acid_spray_1.AcidSprayStrategy(),
    [Ability_1.Ability.ACROBATICS]: new acrobatics_1.AcrobaticsStrategy(),
    [Ability_1.Ability.AERIAL_ACE]: new aerial_ace_1.AerialAceStrategy(),
    [Ability_1.Ability.AFTER_YOU]: new after_you_1.AfterYouStrategy(),
    [Ability_1.Ability.AGILITY]: new agility_1.AgilityStrategy(),
    [Ability_1.Ability.AIR_SLASH]: new air_slash_1.AirSlashStrategy(),
    [Ability_1.Ability.ANCHOR_SHOT]: new anchor_shot_1.AnchorShotStrategy(),
    [Ability_1.Ability.ANCIENT_POWER]: new ancient_power_1.AncientPowerStrategy(),
    [Ability_1.Ability.APPLE_ACID]: new apple_acid_1.AppleAcidStrategy(),
    [Ability_1.Ability.AQUA_JET]: new aqua_jet_1.AquaJetStrategy(),
    [Ability_1.Ability.AQUA_RING]: new aqua_ring_1.AquaRingStrategy(),
    [Ability_1.Ability.AQUA_STEP]: new aqua_step_1.AquaStepStrategy(),
    [Ability_1.Ability.AQUA_TAIL]: new aqua_tail_1.AquaTailStrategy(),
    [Ability_1.Ability.ARM_THRUST]: new arm_thrust_1.ArmThrustStrategy(),
    [Ability_1.Ability.ARMOR_CANNON]: new armor_cannon_1.ArmorCannonStrategy(),
    [Ability_1.Ability.AROMATHERAPY]: new aroma_therapy_1.AromatherapyStrategy(),
    [Ability_1.Ability.ASSIST]: new AssistStrategy(),
    [Ability_1.Ability.ASSURANCE]: new assurance_1.AssuranceStrategy(),
    [Ability_1.Ability.ASTRAL_BARRAGE]: new astral_barrage_1.AstralBarrageStrategy(),
    [Ability_1.Ability.ATTACK_ORDER]: new attack_order_1.AttackOrderStrategy(),
    [Ability_1.Ability.ATTRACT]: new attract_1.AttractStrategy(),
    [Ability_1.Ability.AURA_WHEEL]: new aura_wheel_1.AuraWheelStrategy(),
    [Ability_1.Ability.AURASPHERE]: new aura_sphere_1.AuraSphereStrategy(),
    [Ability_1.Ability.AURORA_BEAM]: new aurora_beam_1.AuroraBeamStrategy(),
    [Ability_1.Ability.AURORA_VEIL]: new aurora_veil_1.AuroraVeilStrategy(),
    [Ability_1.Ability.AXE_KICK]: new axe_kick_1.AxeKickStrategy(),
    [Ability_1.Ability.BANEFUL_BUNKER]: new baneful_bunker_1.BanefulBunkerStrategy(),
    [Ability_1.Ability.BARB_BARRAGE]: new barb_barrage_1.BarbBarrageStrategy(),
    [Ability_1.Ability.BARED_FANGS]: new bared_fangs_1.BaredFangsStrategy(),
    [Ability_1.Ability.BEAT_UP]: new beat_up_1.BeatUpStrategy(),
    [Ability_1.Ability.BEHEMOTH_BLADE]: new behemoth_blade_1.BehemothBladeStrategy(),
    [Ability_1.Ability.BIDE]: new bide_1.BideStrategy(),
    [Ability_1.Ability.BITE]: new bite_1.BiteStrategy(),
    [Ability_1.Ability.BITTER_BLADE]: new bitter_blade_1.BitterBladeStrategy(),
    [Ability_1.Ability.BLAST_BURN]: new blast_burn_1.BlastBurnStrategy(),
    [Ability_1.Ability.BLAZE_KICK]: new blaze_kick_1.BlazeKickStrategy(),
    [Ability_1.Ability.BLEAKWIND_STORM]: new bleakwind_storm_1.BleakwindStormStrategy(),
    [Ability_1.Ability.BLIZZARD]: new blizzard_1.BlizzardStrategy(),
    [Ability_1.Ability.BLOOD_MOON]: new blood_moon_1.BloodMoonStrategy(),
    [Ability_1.Ability.BLUE_FLARE]: new blue_flare_1.BlueFlareStrategy(),
    [Ability_1.Ability.BODY_SLAM]: new body_slam_1.BodySlamStrategy(),
    [Ability_1.Ability.BOLT_BEAK]: new bolt_beak_1.BoltBeakStrategy(),
    [Ability_1.Ability.BONE_ARMOR]: new bone_armor_1.BoneArmorStrategy(),
    [Ability_1.Ability.BONEMERANG]: new bonemerang_1.BonemerangStrategy(),
    [Ability_1.Ability.BOOMBURST]: new boomburst_1.BoomBurstStrategy(),
    [Ability_1.Ability.BOUNCE]: new bounce_1.BounceStrategy(),
    [Ability_1.Ability.BRAVE_BIRD]: new brave_bird_1.BraveBirdStrategy(),
    [Ability_1.Ability.BRICK_BREAK]: new brick_break_1.BrickBreakStrategy(),
    [Ability_1.Ability.BUG_BITE]: new bug_bite_1.BugBiteStrategy(),
    [Ability_1.Ability.BUG_BUZZ]: new bug_buzz_1.BugBuzzStrategy(),
    [Ability_1.Ability.BULK_UP]: new bulk_up_1.BulkUpStrategy(),
    [Ability_1.Ability.BULLDOZE]: new bulldoze_1.BulldozeStrategy(),
    [Ability_1.Ability.BULLET_PUNCH]: new bullet_punch_1.BulletPunchStrategy(),
    [Ability_1.Ability.BURN_UP]: new burn_up_1.BurnUpStrategy(),
    [Ability_1.Ability.BURNING_JEALOUSY]: new burning_jealousy_1.BurningJealousyStrategy(),
    [Ability_1.Ability.CAVERNOUS_CHOMP]: new cavernous_chomp_1.CavernousChompStrategy(),
    [Ability_1.Ability.CEASELESS_EDGE]: new ceaseless_edge_1.CeaselessEdgeStrategy(),
    [Ability_1.Ability.CHAIN_CRAZED]: new chain_crazed_1.ChainCrazedStrategy(),
    [Ability_1.Ability.CHARGE]: new charge_1.ChargeStrategy(),
    [Ability_1.Ability.CHARGE_BEAM]: new charge_beam_1.ChargeBeamStrategy(),
    [Ability_1.Ability.CHARM]: new charm_1.CharmStrategy(),
    [Ability_1.Ability.CHATTER]: new chatter_1.ChatterStrategy(),
    [Ability_1.Ability.CHLOROBLAST]: new chloroblast_1.ChloroblastStrategy(),
    [Ability_1.Ability.CITY_SHUTTLE]: new city_shuttle_1.CityShuttleStrategy(),
    [Ability_1.Ability.CLANGOROUS_SOUL]: new clangorous_soul_1.ClangorousSoulStrategy(),
    [Ability_1.Ability.CLOSE_COMBAT]: new close_combat_1.CloseCombatStrategy(),
    [Ability_1.Ability.COLUMN_CRUSH]: new column_crush_1.ColumnCrushStrategy(),
    [Ability_1.Ability.CONFUSING_MIND]: new confusing_mind_1.ConfusingMindStrategy(),
    [Ability_1.Ability.CONFUSION]: new confusion_1.ConfusionStrategy(),
    [Ability_1.Ability.CORE_ENFORCER]: new core_enforcer_1.CoreEnforcerStrategy(),
    [Ability_1.Ability.COSMIC_POWER_MOON]: new cosmic_power_moon_1.CosmicPowerMoonStrategy(),
    [Ability_1.Ability.COSMIC_POWER_SUN]: new cosmic_power_sun_1.CosmicPowerSunStrategy(),
    [Ability_1.Ability.COTTON_GUARD]: new cotton_guard_1.CottonGuardStrategy(),
    [Ability_1.Ability.COTTON_SPORE]: new cotton_spore_1.CottonSporeStrategy(),
    [Ability_1.Ability.COUNTER]: new counter_1.CounterStrategy(),
    [Ability_1.Ability.CRABHAMMER]: new crab_hammer_1.CrabHammerStrategy(),
    [Ability_1.Ability.CROSS_POISON]: new cross_poison_1.CrossPoisonStrategy(),
    [Ability_1.Ability.CRUNCH]: new crunch_1.CrunchStrategy(),
    [Ability_1.Ability.CRUSH_CLAW]: new crush_claw_1.CrushClawStrategy(),
    [Ability_1.Ability.CRUSH_GRIP]: new crush_grip_1.CrushGripStrategy(),
    [Ability_1.Ability.CURSE]: new curse_1.CurseStrategy(),
    [Ability_1.Ability.CUT]: new cut_1.CutStrategy(),
    [Ability_1.Ability.DARK_HARVEST]: new dark_harvest_1.DarkHarvestStrategy(),
    [Ability_1.Ability.DARKEST_LARIAT]: new darkest_lariat_1.DarkestLariatStrategy(),
    [Ability_1.Ability.DARK_VOID]: new dark_void_1.DarkVoidStrategy(),
    [Ability_1.Ability.DECORATE]: new decorate_1.DecorateStrategy(),
    [Ability_1.Ability.DEEP_FREEZE]: new deep_freeze_1.DeepFreezeStrategy(),
    [Ability_1.Ability.DEFAULT]: new ability_strategy_1.AbilityStrategy(),
    [Ability_1.Ability.DEFEND_ORDER]: new defend_order_1.DefendOrderStrategy(),
    [Ability_1.Ability.DEFENSE_CURL]: new defense_curl_1.DefenseCurlStrategy(),
    [Ability_1.Ability.DETECT]: new detect_1.DetectStrategy(),
    [Ability_1.Ability.DIAMOND_STORM]: new diamond_storm_1.DiamondStormStrategy(),
    [Ability_1.Ability.DIG]: new dig_1.DigStrategy(),
    [Ability_1.Ability.DIRE_CLAW]: new dire_claw_1.DireClawStrategy(),
    [Ability_1.Ability.DISABLE]: new disable_1.DisableStrategy(),
    [Ability_1.Ability.DISARMING_VOICE]: new disarming_voice_1.DisarmingVoiceStrategy(),
    [Ability_1.Ability.DISCHARGE]: new discharge_1.DischargeStrategy(),
    [Ability_1.Ability.DIVE]: new dive_1.DiveStrategy(),
    [Ability_1.Ability.DIZZY_PUNCH]: new dizzy_punch_1.DizzyPunchStrategy(),
    [Ability_1.Ability.DOOM_DESIRE]: new doom_desire_1.DoomDesireStrategy(),
    [Ability_1.Ability.DOUBLE_EDGE]: new double_edge_1.DoubleEdgeStrategy(),
    [Ability_1.Ability.DOUBLE_IRON_BASH]: new double_iron_bash_1.DoubleIronBashStrategy(),
    [Ability_1.Ability.DOUBLE_SHOCK]: new double_shock_1.DoubleShockStrategy(),
    [Ability_1.Ability.DRACO_METEOR]: new draco_meteor_1.DracoMeteorStrategy(),
    [Ability_1.Ability.DRAGON_BREATH]: new dragon_breath_1.DragonBreathStrategy(),
    [Ability_1.Ability.DRAGON_CLAW]: new dragon_claw_1.DragonClawStrategy(),
    [Ability_1.Ability.DRAGON_DARTS]: new dragon_darts_1.DragonDartsStrategy(),
    [Ability_1.Ability.DRAGON_ENERGY]: new dragon_energy_1.DragonEnergyStrategy(),
    [Ability_1.Ability.DRAGON_PULSE]: new dragon_pulse_1.DragonPulseStrategy(),
    [Ability_1.Ability.DRAGON_TAIL]: new dragon_tail_1.DragonTailStrategy(),
    [Ability_1.Ability.DRAIN_PUNCH]: new drain_punch_1.DrainPunchStrategy(),
    [Ability_1.Ability.DREAM_EATER]: new dream_eater_1.DreamEaterStrategy(),
    [Ability_1.Ability.DRILL_PECK]: new drill_peck_1.DrillPeckStrategy(),
    [Ability_1.Ability.DRILL_RUN]: new drill_run_1.DrillRunStrategy(),
    [Ability_1.Ability.DRUM_BEATING]: new drum_beating_1.DrumBeatingStrategy(),
    [Ability_1.Ability.DYNAMAX_CANNON]: new dynamax_cannon_1.DynamaxCannonStrategy(),
    [Ability_1.Ability.DYNAMIC_PUNCH]: new dynamic_punch_1.DynamicPunchStrategy(),
    [Ability_1.Ability.EAR_DIG]: new ear_dig_1.EarDigStrategy(),
    [Ability_1.Ability.ECHO]: new echo_1.EchoStrategy(),
    [Ability_1.Ability.EERIE_SPELL]: new eerie_spell_1.EerieSpellStrategy(),
    [Ability_1.Ability.EGG_BOMB]: new egg_bomb_1.EggBombStrategy(),
    [Ability_1.Ability.ELECTRIC_SURGE]: new electric_surge_1.ElectricSurgeStrategy(),
    [Ability_1.Ability.ELECTRIFY]: new electrify_1.ElectrifyStrategy(),
    [Ability_1.Ability.ELECTRO_BALL]: new electro_ball_1.ElectroBallStrategy(),
    [Ability_1.Ability.ELECTRO_SHOT]: new electro_shot_1.ElectroShotStrategy(),
    [Ability_1.Ability.ELECTRO_WEB]: new electro_web_1.ElectroWebStrategy(),
    [Ability_1.Ability.ENCORE]: new EncoreStrategy(),
    [Ability_1.Ability.ENTANGLING_THREAD]: new entangling_thread_1.EntanglingThreadStrategy(),
    [Ability_1.Ability.ENTRAINMENT]: new entrainment_1.EntrainmentStrategy(),
    [Ability_1.Ability.ERUPTION]: new eruption_1.EruptionStrategy(),
    [Ability_1.Ability.EXPANDING_FORCE]: new expanding_force_1.ExpandingForceStrategy(),
    [Ability_1.Ability.EXPLOSION]: explosion_1.explosionStrategy,
    [Ability_1.Ability.EXTREME_SPEED]: new extreme_speed_1.ExtremeSpeedStrategy(),
    [Ability_1.Ability.FACADE]: new facade_1.FacadeStrategy(),
    [Ability_1.Ability.FAIRY_LOCK]: new fairy_lock_1.FairyLockStrategy(),
    [Ability_1.Ability.FAIRY_WIND]: new fairy_wind_1.FairyWindStrategy(),
    [Ability_1.Ability.FAKE_OUT]: new fake_out_1.FakeOutStrategy(),
    [Ability_1.Ability.FAKE_TEARS]: new fake_tears_1.FakeTearsStrategy(),
    [Ability_1.Ability.FEATHER_DANCE]: new feather_dance_1.FeatherDanceStrategy(),
    [Ability_1.Ability.FELL_STINGER]: new fell_stinger_1.FellStingerStrategy(),
    [Ability_1.Ability.FICKLE_BEAM]: new fickle_beam_1.FickleBeamStrategy(),
    [Ability_1.Ability.FIERY_DANCE]: new fiery_dance_1.FieryDanceStrategy(),
    [Ability_1.Ability.FIERY_WRATH]: new fiery_wrath_1.FieryWrathStrategy(),
    [Ability_1.Ability.FILLET_AWAY]: new fillet_away_1.FilletAwayStrategy(),
    [Ability_1.Ability.FIRE_BLAST]: new fire_blast_1.FireBlastStrategy(),
    [Ability_1.Ability.FIRE_FANG]: new fire_fang_1.FireFangStrategy(),
    [Ability_1.Ability.FIRE_LASH]: new fire_lash_1.FireLashStrategy(),
    [Ability_1.Ability.FIRE_SPIN]: new fire_spin_1.FireSpinStrategy(),
    [Ability_1.Ability.FIRESTARTER]: new firestarter_1.FirestarterStrategy(),
    [Ability_1.Ability.FIRST_IMPRESSION]: new first_impression_1.FirstImpressionStrategy(),
    [Ability_1.Ability.FISHIOUS_REND]: new fishious_rend_1.FishiousRendStrategy(),
    [Ability_1.Ability.FISSURE]: new fissure_1.FissureStrategy(),
    [Ability_1.Ability.FLAME_CHARGE]: new flame_charge_1.FlameChargeStrategy(),
    [Ability_1.Ability.FLAMETHROWER]: new flame_thrower_1.FlameThrowerStrategy(),
    [Ability_1.Ability.FLASH]: new flash_1.FlashStrategy(),
    [Ability_1.Ability.FLEUR_CANNON]: new fleur_cannon_1.FleurCannonStrategy(),
    [Ability_1.Ability.FLORAL_HEALING]: new floral_healing_1.FloralHealingStrategy(),
    [Ability_1.Ability.FLOWER_TRICK]: new flower_trick_1.FlowerTrickStrategy(),
    [Ability_1.Ability.FLY]: new fly_1.FlyStrategy(),
    [Ability_1.Ability.FLYING_PRESS]: new flying_press_1.FlyingPressStrategy(),
    [Ability_1.Ability.FOCUS_PUNCH]: new focus_punch_1.FocusPunchStrategy(),
    [Ability_1.Ability.FOLLOW_ME]: new follow_me_1.FollowMeStrategy(),
    [Ability_1.Ability.FORCE_PALM]: new force_palm_1.ForcePalmStrategy(),
    [Ability_1.Ability.FORECAST]: new forecast_1.ForecastStrategy(),
    [Ability_1.Ability.FOUL_PLAY]: new foul_play_1.FoulPlayStrategy(),
    [Ability_1.Ability.FREEZE_DRY]: new freeze_dry_1.FreezeDryStrategy(),
    [Ability_1.Ability.FREEZING_GLARE]: new freezing_glare_1.FreezingGlareStrategy(),
    [Ability_1.Ability.FROST_BREATH]: new frost_breath_1.FrostBreathStrategy(),
    [Ability_1.Ability.FURY_SWIPES]: new fury_swipes_1.FurySwipesStrategy(),
    [Ability_1.Ability.FUSION_BOLT]: new fusion_bolt_1.FusionBoltStrategy(),
    [Ability_1.Ability.FUTURE_SIGHT]: new future_sight_1.FutureSightStrategy(),
    [Ability_1.Ability.GEAR_GRIND]: new gear_grind_1.GearGrindStrategy(),
    [Ability_1.Ability.GEOMANCY]: new geomancy_1.GeomancyStrategy(),
    [Ability_1.Ability.GIGATON_HAMMER]: new gigaton_hammer_1.GigatonHammerStrategy(),
    [Ability_1.Ability.GLACIAL_LANCE]: new glacial_lance_1.GlacialLanceStrategy(),
    [Ability_1.Ability.GLACIATE]: new glaciate_1.GlaciateStrategy(),
    [Ability_1.Ability.GLAIVE_RUSH]: new glaive_rush_1.GlaiveRushStrategy(),
    [Ability_1.Ability.GOLD_RUSH]: new gold_rush_1.GoldRushStrategy(),
    [Ability_1.Ability.GRASS_WHISTLE]: new grass_whistle_1.GrassWhistleStrategy(),
    [Ability_1.Ability.GRASSY_SURGE]: new grassy_surge_1.GrassySurgeStrategy(),
    [Ability_1.Ability.GRAV_APPLE]: new grav_apple_1.GravAppleStrategy(),
    [Ability_1.Ability.GRAVITY]: new gravity_1.GravityStrategy(),
    [Ability_1.Ability.GROWL]: new growl_1.GrowlStrategy(),
    [Ability_1.Ability.GROWTH]: new growth_1.GrowthStrategy(),
    [Ability_1.Ability.GRUDGE]: new grudge_1.GrudgeStrategy(),
    [Ability_1.Ability.GRUDGE_DIVE]: new grudge_dive_1.GrudgeDiveStrategy(),
    [Ability_1.Ability.GUILLOTINE]: new guillotine_1.GuillotineStrategy(),
    [Ability_1.Ability.GULP_MISSILE]: new gulp_missile_1.GulpMissileStrategy(),
    [Ability_1.Ability.GUNK_SHOT]: new gunk_shot_1.GunkShotStrategy(),
    [Ability_1.Ability.HAIL]: new hail_1.HailStrategy(),
    [Ability_1.Ability.HAPPY_HOUR]: new happy_hour_1.HappyHourStrategy(),
    [Ability_1.Ability.HARDEN]: new harden_1.HardenStrategy(),
    [Ability_1.Ability.HEAD_SMASH]: new head_smash_1.HeadSmashStrategy(),
    [Ability_1.Ability.HEADBUTT]: new headbutt_1.HeadbuttStrategy(),
    [Ability_1.Ability.HEADLONG_RUSH]: new headlong_rush_1.HeadlongRushStrategy(),
    [Ability_1.Ability.HEAL_BLOCK]: new heal_block_1.HealBlockStrategy(),
    [Ability_1.Ability.HEAL_ORDER]: new heal_order_1.HealOrderStrategy(),
    [Ability_1.Ability.HEART_SWAP]: new heart_swap_1.HeartSwapStrategy(),
    [Ability_1.Ability.HEAT_CRASH]: new heat_crash_1.HeatCrashStrategy(),
    [Ability_1.Ability.HEAVY_SLAM]: new heavy_slam_1.HeavySlamStrategy(),
    [Ability_1.Ability.HELPING_HAND]: new helping_hand_1.HelpingHandStrategy(),
    [Ability_1.Ability.HEX]: new hex_1.HexStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_A]: new hidden_power_1.HiddenPowerAStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_B]: new hidden_power_1.HiddenPowerBStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_C]: new hidden_power_1.HiddenPowerCStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_D]: new hidden_power_1.HiddenPowerDStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_E]: new hidden_power_1.HiddenPowerEStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_EM]: new hidden_power_1.HiddenPowerEMStrategy(),
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
    [Ability_1.Ability.HIDDEN_POWER_QM]: new hidden_power_1.HiddenPowerQMStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_R]: new hidden_power_1.HiddenPowerRStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_S]: new hidden_power_1.HiddenPowerSStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_T]: new hidden_power_1.HiddenPowerTStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_U]: new hidden_power_1.HiddenPowerUStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_V]: new hidden_power_1.HiddenPowerVStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_W]: new hidden_power_1.HiddenPowerWStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_X]: new hidden_power_1.HiddenPowerXStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Y]: new hidden_power_1.HiddenPowerYStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Z]: new hidden_power_1.HiddenPowerZStrategy(),
    [Ability_1.Ability.HIGH_HORSEPOWER]: new high_horsepower_1.HighHorsepowerStrategy(),
    [Ability_1.Ability.HIGH_JUMP_KICK]: new high_jump_kick_1.HighJumpKickStrategy(),
    [Ability_1.Ability.HORN_ATTACK]: new horn_attack_1.HornAttackStrategy(),
    [Ability_1.Ability.HORN_DRILL]: new horn_drill_1.HornDrillStrategy(),
    [Ability_1.Ability.HORN_LEECH]: new horn_leech_1.HornLeechStrategy(),
    [Ability_1.Ability.HURRICANE]: new hurricane_1.HurricaneStrategy(),
    [Ability_1.Ability.HYDRO_PUMP]: new hydro_pump_1.HydroPumpStrategy(),
    [Ability_1.Ability.HYDRO_STEAM]: new hydro_steam_1.HydroSteamStrategy(),
    [Ability_1.Ability.HYPER_BEAM]: new hyper_beam_1.HyperBeamStrategy(),
    [Ability_1.Ability.HYPER_DRILL]: new hyper_drill_1.HyperDrillStrategy(),
    [Ability_1.Ability.HYPER_VOICE]: new hyper_voice_1.HyperVoiceStrategy(),
    [Ability_1.Ability.HYPERSPACE_FURY]: new hyperspace_fury_1.HyperspaceFuryStrategy(),
    [Ability_1.Ability.HYPNOSIS]: new hypnosis_1.HypnosisStrategy(),
    [Ability_1.Ability.ICE_BALL]: new ice_ball_1.IceBallStrategy(),
    [Ability_1.Ability.ICE_FANG]: new ice_fang_1.IceFangStrategy(),
    [Ability_1.Ability.ICE_HAMMER]: new ice_hammer_1.IceHammerStrategy(),
    [Ability_1.Ability.ICE_SPINNER]: new ice_spinner_1.IceSpinnerStrategy(),
    [Ability_1.Ability.ICICLE_CRASH]: new icicle_crash_1.IcicleCrashStrategy(),
    [Ability_1.Ability.ICICLE_MISSILE]: new icicle_missile_1.IcicleMissileStrategy(),
    [Ability_1.Ability.ICY_WIND]: new icy_wind_1.IcyWindStrategy(),
    [Ability_1.Ability.ILLUSION]: new illusion_1.IllusionStrategy(),
    [Ability_1.Ability.INFERNAL_PARADE]: new infernal_parade_1.InfernalParadeStrategy(),
    [Ability_1.Ability.INFESTATION]: new infestation_1.InfestationStrategy(),
    [Ability_1.Ability.INGRAIN]: new ingrain_1.IngrainStrategy(),
    [Ability_1.Ability.IRON_DEFENSE]: new iron_defense_1.IronDefenseStrategy(),
    [Ability_1.Ability.IRON_HEAD]: new iron_head_1.IronHeadStrategy(),
    [Ability_1.Ability.IRON_TAIL]: new iron_tail_1.IronTailStrategy(),
    [Ability_1.Ability.IVY_CUDGEL]: new ivy_cudgel_1.IvyCudgelStrategy(),
    [Ability_1.Ability.JAW_LOCK]: new jaw_lock_1.JawLockStrategy(),
    [Ability_1.Ability.JET_PUNCH]: new jet_punch_1.JetPunchStrategy(),
    [Ability_1.Ability.JUDGEMENT]: new judgement_1.JudgementStrategy(),
    [Ability_1.Ability.KING_SHIELD]: new king_shield_1.KingShieldStrategy(),
    [Ability_1.Ability.KNOCK_OFF]: new knock_off_1.KnockOffStrategy(),
    [Ability_1.Ability.KNOWLEDGE_THIEF]: new KnowledgeThiefStrategy(),
    [Ability_1.Ability.KOWTOW_CLEAVE]: new kowtow_cleave_1.KowtowCleaveStrategy(),
    [Ability_1.Ability.LANDS_WRATH]: new lands_wrath_1.LandsWrathStrategy(),
    [Ability_1.Ability.LASER_BLADE]: new laser_blade_1.LaserBladeStrategy(),
    [Ability_1.Ability.LAST_RESPECTS]: new last_respects_1.LastRespectsStrategy(),
    [Ability_1.Ability.LAVA_PLUME]: new lava_plume_1.LavaPlumeStrategy(),
    [Ability_1.Ability.LEAF_BLADE]: new leaf_blade_1.LeafBladeStrategy(),
    [Ability_1.Ability.LEECH_LIFE]: new leech_life_1.LeechLifeStrategy(),
    [Ability_1.Ability.LEECH_SEED]: new leech_seed_1.LeechSeedStrategy(),
    [Ability_1.Ability.LICK]: new lick_1.LickStrategy(),
    [Ability_1.Ability.LINGERING_AROMA]: new lingering_aroma_1.LingeringAromaStrategy(),
    [Ability_1.Ability.LINK_CABLE]: new link_cable_1.LinkCableStrategy(),
    [Ability_1.Ability.LIQUIDATION]: new liquidation_1.LiquidationStrategy(),
    [Ability_1.Ability.LOCK_ON]: new lock_on_1.LockOnStrategy(),
    [Ability_1.Ability.LOVELY_KISS]: new lovely_kiss_1.LovelyKissStrategy(),
    [Ability_1.Ability.LUNAR_BLESSING]: new lunar_blessing_1.LunarBlessingStrategy(),
    [Ability_1.Ability.LUNGE]: new lunge_1.LungeStrategy(),
    [Ability_1.Ability.LUSTER_PURGE]: new luster_purge_1.LusterPurgeStrategy(),
    [Ability_1.Ability.MACH_PUNCH]: new mach_punch_1.MachPunchStrategy(),
    [Ability_1.Ability.MAGIC_BOUNCE]: new magic_bounce_1.MagicBounceStrategy(),
    [Ability_1.Ability.MAGIC_POWDER]: new magic_powder_1.MagicPowderStrategy(),
    [Ability_1.Ability.MAGICAL_LEAF]: new magical_leaf_1.MagicalLeafStrategy(),
    [Ability_1.Ability.MAGMA_STORM]: new magma_storm_1.MagmaStormStrategy(),
    [Ability_1.Ability.MAGNET_BOMB]: new magnet_bomb_1.MagnetBombStrategy(),
    [Ability_1.Ability.MAGNET_PULL]: new magnet_pull_1.MagnetPullStrategy(),
    [Ability_1.Ability.MAGNET_RISE]: new magnet_rise_1.MagnetRiseStrategy(),
    [Ability_1.Ability.MAKE_IT_RAIN]: new make_it_rain_1.MakeItRainStrategy(),
    [Ability_1.Ability.MALIGNANT_CHAIN]: new malignant_chain_1.MalignantChainStrategy(),
    [Ability_1.Ability.MANTIS_BLADES]: new mantis_blades_1.MantisBladesStrategy(),
    [Ability_1.Ability.MAWASHI_GERI]: new mawashi_geri_1.MawashiGeriStrategy(),
    [Ability_1.Ability.MEDITATE]: meditate_1.meditateStrategy,
    [Ability_1.Ability.MEGA_PUNCH]: new mega_punch_1.MegaPunchStrategy(),
    [Ability_1.Ability.METAL_BURST]: new metal_burst_1.MetalBurstStrategy(),
    [Ability_1.Ability.METAL_CLAW]: new metal_claw_1.MetalClawStrategy(),
    [Ability_1.Ability.METEOR_MASH]: new meteor_mash_1.MeteorMashStrategy(),
    [Ability_1.Ability.METRONOME]: new MetronomeStrategy(),
    [Ability_1.Ability.MIMIC]: new MimicStrategy(),
    [Ability_1.Ability.MIND_BEND]: new mind_bend_1.MindBendStrategy(),
    [Ability_1.Ability.MIND_BLOWN]: new mind_blown_1.MindBlownStrategy(),
    [Ability_1.Ability.MIST_BALL]: new mist_ball_1.MistBallStrategy(),
    [Ability_1.Ability.MISTY_SURGE]: new misty_surge_1.MistySurgeStrategy(),
    [Ability_1.Ability.MOON_DREAM]: new moon_dream_1.MoonDreamStrategy(),
    [Ability_1.Ability.MOONBLAST]: new moonblast_1.MoonblastStrategy(),
    [Ability_1.Ability.MOONGEIST_BEAM]: new moongeist_beam_1.MoongeistBeamStrategy(),
    [Ability_1.Ability.MORTAL_SPIN]: new mortal_spin_1.MortalSpinStrategy(),
    [Ability_1.Ability.MOUNTAIN_GALE]: new mountain_gale_1.MountainGaleStrategy(),
    [Ability_1.Ability.MUD_BUBBLE]: new mud_bubble_1.MudBubbleStrategy(),
    [Ability_1.Ability.MUD_SHOT]: new mud_shot_1.MudShotStrategy(),
    [Ability_1.Ability.MUDDY_WATER]: new muddy_water_1.MuddyWaterStrategy(),
    [Ability_1.Ability.MULTI_ATTACK]: new multi_attack_1.MultiAttackStrategy(),
    [Ability_1.Ability.MYSTICAL_FIRE]: new mystical_fire_1.MysticalFireStrategy(),
    [Ability_1.Ability.NASTY_PLOT]: new nasty_plot_1.NastyPlotStrategy(),
    [Ability_1.Ability.NATURAL_GIFT]: new natural_gift_1.NaturalGiftStrategy(),
    [Ability_1.Ability.NIGHT_SHADE]: new night_shade_1.NightShadeStrategy(),
    [Ability_1.Ability.NIGHT_SLASH]: new night_slash_1.NightSlashStrategy(),
    [Ability_1.Ability.NIGHTMARE]: new nightmare_1.NightmareStrategy(),
    [Ability_1.Ability.NO_RETREAT]: new no_retreat_1.NoRetreatStrategy(),
    [Ability_1.Ability.NUTRIENTS]: new nutrients_1.NutrientsStrategy(),
    [Ability_1.Ability.NUZZLE]: new nuzzle_1.NuzzleStrategy(),
    [Ability_1.Ability.OBLIVION_WING]: new oblivion_wing_1.OblivionWingStrategy(),
    [Ability_1.Ability.OBSTRUCT]: new obstruct_1.ObstructStrategy(),
    [Ability_1.Ability.OCTAZOOKA]: new octazooka_1.OctazookaStrategy(),
    [Ability_1.Ability.OCTOLOCK]: new octolock_1.OctolockStrategy(),
    [Ability_1.Ability.ORDER_UP]: new order_up_1.OrderUpStrategy(),
    [Ability_1.Ability.ORIGIN_PULSE]: new origin_pulse_1.OriginPulseStrategy(),
    [Ability_1.Ability.OUTRAGE]: new outrage_1.OutrageStrategy(),
    [Ability_1.Ability.OVERDRIVE]: new overdrive_1.OverdriveStrategy(),
    [Ability_1.Ability.OVERHEAT]: new overheat_1.OverheatStrategy(),
    [Ability_1.Ability.PARABOLIC_CHARGE]: new parabolic_charge_1.ParabolicChargeStrategy(),
    [Ability_1.Ability.PASTEL_VEIL]: new pastel_veil_1.PastelVeilStrategy(),
    [Ability_1.Ability.PAYDAY]: new payday_1.PaydayStrategy(),
    [Ability_1.Ability.PECK]: new peck_1.PeckStrategy(),
    [Ability_1.Ability.PETAL_BLIZZARD]: new petal_blizzard_1.PetalBlizzardStrategy(),
    [Ability_1.Ability.PETAL_DANCE]: new petal_dance_1.PetalDanceStrategy(),
    [Ability_1.Ability.PICKUP]: new pickup_1.PickupStrategy(),
    [Ability_1.Ability.PLASMA_FISSION]: new plasma_fission_1.PlasmaFissionStrategy(),
    [Ability_1.Ability.PLASMA_FIST]: new plasma_fist_1.PlasmaFistStrategy(),
    [Ability_1.Ability.PLASMA_FLASH]: new plasma_flash_1.PlasmaFlashStrategy(),
    [Ability_1.Ability.PLASMA_TEMPEST]: new plasma_tempest_1.PlasmaTempestStrategy(),
    [Ability_1.Ability.PLAY_ROUGH]: new play_rough_1.PlayRoughStrategy(),
    [Ability_1.Ability.POISON_GAS]: new poison_gas_1.PoisonGasStrategy(),
    [Ability_1.Ability.POISON_JAB]: new poison_jab_1.PoisonJabStrategy(),
    [Ability_1.Ability.POISON_POWDER]: new poison_powder_1.PoisonPowderStrategy(),
    [Ability_1.Ability.POISON_STING]: new poison_sting_1.PoisonStingStrategy(),
    [Ability_1.Ability.POLLEN_PUFF]: new pollen_puff_1.PollenPuffStrategy(),
    [Ability_1.Ability.POLTERGEIST]: new poltergeist_1.PoltergeistStrategy(),
    [Ability_1.Ability.POPULATION_BOMB]: new population_bomb_1.PopulationBombStrategy(),
    [Ability_1.Ability.POWDER]: new powder_1.PowderStrategy(),
    [Ability_1.Ability.POWDER_SNOW]: new powder_snow_1.PowderSnowStrategy(),
    [Ability_1.Ability.POWER_HUG]: new power_hug_1.PowerHugStrategy(),
    [Ability_1.Ability.POWER_WASH]: new power_wash_1.PowerWashStrategy(),
    [Ability_1.Ability.POWER_WHIP]: new power_whip_1.PowerWhipStrategy(),
    [Ability_1.Ability.PRECIPICE_BLADES]: new precipice_blades_1.PrecipiceBladesStrategy(),
    [Ability_1.Ability.PRESENT]: new present_1.PresentStrategy(),
    [Ability_1.Ability.PRISMATIC_LASER]: new prismatic_laser_1.PrismaticLaserStrategy(),
    [Ability_1.Ability.PROTECT]: new protect_1.ProtectStrategy(),
    [Ability_1.Ability.PSYBEAM]: new psybeam_1.PsybeamStrategy(),
    [Ability_1.Ability.PSYCHIC]: new psychic_1.PsychicStrategy(),
    [Ability_1.Ability.PSYCHIC_FANGS]: new psychic_fangs_1.PsychicFangsStrategy(),
    [Ability_1.Ability.PSYCHIC_SURGE]: new psychic_surge_1.PsychicSurgeStrategy(),
    [Ability_1.Ability.PSYCHO_BOOST]: new psycho_boost_1.PsychoBoostStrategy(),
    [Ability_1.Ability.PSYCHO_CUT]: new psycho_cut_1.PsychoCutStrategy(),
    [Ability_1.Ability.PSYCHO_SHIFT]: new psycho_shift_1.PsychoShiftStrategy(),
    [Ability_1.Ability.PSYSHIELD_BASH]: new psyshield_bash_1.PsyshieldBashStrategy(),
    [Ability_1.Ability.PSYSHOCK]: new psy_shock_1.PsyShockStrategy(),
    [Ability_1.Ability.PSYSTRIKE]: new psystrike_1.PsystrikeStrategy(),
    [Ability_1.Ability.PUMMELING_PAYBACK]: new pummeling_payback_1.PummelingPaybackStrategy(),
    [Ability_1.Ability.PURIFY]: new purify_1.PurifyStrategy(),
    [Ability_1.Ability.PYRO_BALL]: new pyro_ball_1.PyroBallStrategy(),
    [Ability_1.Ability.QUIVER_DANCE]: new quiver_dance_1.QuiverDanceStrategy(),
    [Ability_1.Ability.RAGE]: new rage_1.RageStrategy(),
    [Ability_1.Ability.RAGING_BULL]: new raging_bull_1.RagingBullStrategy(),
    [Ability_1.Ability.RAPID_SPIN]: new rapid_spin_1.RapidSpinStrategy(),
    [Ability_1.Ability.RAZOR_LEAF]: new razor_leaf_1.RazorLeafStrategy(),
    [Ability_1.Ability.RAZOR_WIND]: new razor_wind_1.RazorWindStrategy(),
    [Ability_1.Ability.RECOVER]: new recover_1.RecoverStrategy(),
    [Ability_1.Ability.REFLECT]: new reflect_1.ReflectStrategy(),
    [Ability_1.Ability.RELIC_SONG]: new relic_song_1.RelicSongStrategy(),
    [Ability_1.Ability.RETALIATE]: new retaliate_1.RetaliateStrategy(),
    [Ability_1.Ability.RETURN]: new return_1.ReturnStrategy(),
    [Ability_1.Ability.ROAR]: new roar_1.RoarStrategy(),
    [Ability_1.Ability.ROAR_OF_TIME]: new roar_of_time_1.RoarOfTimeStrategy(),
    [Ability_1.Ability.ROCK_ARTILLERY]: new rock_artillery_1.RockArtilleryStrategy(),
    [Ability_1.Ability.ROCK_HEAD]: new rock_head_1.RockHeadStrategy(),
    [Ability_1.Ability.ROCK_SLIDE]: new rock_slide_1.RockSlideStrategy(),
    [Ability_1.Ability.ROCK_SMASH]: new rock_smash_1.RockSmashStrategy(),
    [Ability_1.Ability.ROCK_TOMB]: new rock_tomb_1.RockTombStrategy(),
    [Ability_1.Ability.ROCK_WRECKER]: new rock_wrecker_1.RockWreckerStrategy(),
    [Ability_1.Ability.ROLLOUT]: new rollout_1.RolloutStrategy(),
    [Ability_1.Ability.ROOST]: new roost_1.RoostStrategy(),
    [Ability_1.Ability.SACRED_SWORD_CAVERN]: new sacred_sword_cavern_1.SacredSwordCavernStrategy(),
    [Ability_1.Ability.SACRED_SWORD_GRASS]: new sacred_sword_grass_1.SacredSwordGrassStrategy(),
    [Ability_1.Ability.SACRED_SWORD_IRON]: new sacred_sword_iron_1.SacredSwordIronStrategy(),
    [Ability_1.Ability.SALT_CURE]: new salt_cure_1.SaltCureStrategy(),
    [Ability_1.Ability.SAND_SPIT]: new sand_spit_1.SandSpitStrategy(),
    [Ability_1.Ability.SAND_TOMB]: new sand_tomb_1.SandTombStrategy(),
    [Ability_1.Ability.SANDSEAR_STORM]: new sandsear_storm_1.SandsearStormStrategy(),
    [Ability_1.Ability.SCALE_SHOT]: new scale_shot_1.ScaleShotStrategy(),
    [Ability_1.Ability.SCHOOLING]: new schooling_1.SchoolingStrategy(),
    [Ability_1.Ability.SCREECH]: new screech_1.ScreechStrategy(),
    [Ability_1.Ability.SEARING_SHOT]: new searing_shot_1.SearingShotStrategy(),
    [Ability_1.Ability.SECRET_SWORD]: new secret_sword_1.SecretSwordStrategy(),
    [Ability_1.Ability.SEED_FLARE]: new seed_flare_1.SeedFlareStrategy(),
    [Ability_1.Ability.SEISMIC_TOSS]: new seismic_toss_1.SeismicTossStrategy(),
    [Ability_1.Ability.SHADOW_BALL]: new shadow_ball_1.ShadowBallStrategy(),
    [Ability_1.Ability.SHADOW_BONE]: new shadow_bone_1.ShadowBoneStrategy(),
    [Ability_1.Ability.SHADOW_CLAW]: new shadow_claw_1.ShadowClawStrategy(),
    [Ability_1.Ability.SHADOW_CLONE]: new shadow_clone_1.ShadowCloneStrategy(),
    [Ability_1.Ability.SHADOW_FORCE]: new shadow_force_1.ShadowForceStrategy(),
    [Ability_1.Ability.SHADOW_PUNCH]: new shadow_punch_1.ShadowPunchStrategy(),
    [Ability_1.Ability.SHADOW_SNEAK]: new shadow_sneak_1.ShadowSneakStrategy(),
    [Ability_1.Ability.SHED_TAIL]: new shed_tail_1.ShedTailStrategy(),
    [Ability_1.Ability.SHEER_COLD]: new sheer_cold_1.SheerColdStrategy(),
    [Ability_1.Ability.SHELL_SIDE_ARM]: new shell_side_arm_1.ShellSideArmStrategy(),
    [Ability_1.Ability.SHELL_SMASH]: new shell_smash_1.ShellSmashStrategy(),
    [Ability_1.Ability.SHELL_TRAP]: new shell_trap_1.ShellTrapStrategy(),
    [Ability_1.Ability.SHELTER]: new shelter_1.ShelterStrategy(),
    [Ability_1.Ability.SHIELDS_DOWN]: new shields_down_1.ShieldsDownStrategy(),
    [Ability_1.Ability.SHIELDS_UP]: new shields_up_1.ShieldsUpStrategy(),
    [Ability_1.Ability.SHOCKWAVE]: new shockwave_1.ShockwaveStrategy(),
    [Ability_1.Ability.SHORE_UP]: new shore_up_1.ShoreUpStrategy(),
    [Ability_1.Ability.SILK_TRAP]: new silk_trap_1.SilkTrapStrategy(),
    [Ability_1.Ability.SILVER_WIND]: new silver_wind_1.SilverWindStrategy(),
    [Ability_1.Ability.SING]: new sing_1.SingStrategy(),
    [Ability_1.Ability.SKETCH]: new sketch_1.SketchStrategy(),
    [Ability_1.Ability.SKILL_SWAP]: new SkillSwapStrategy(),
    [Ability_1.Ability.SKITTER_SMACK]: new skitter_smack_1.SkitterSmackStrategy(),
    [Ability_1.Ability.SKY_ATTACK]: new sky_attack_1.SkyAttackStrategy(),
    [Ability_1.Ability.SKY_ATTACK_SHADOW]: new sky_attack_shadow_1.SkyAttackShadowStrategy(),
    [Ability_1.Ability.SLACK_OFF]: new slack_off_1.SlackOffStrategy(),
    [Ability_1.Ability.SLASH]: new slash_1.SlashStrategy(),
    [Ability_1.Ability.SLASHING_CLAW]: new slashing_claw_1.SlashingClawStrategy(),
    [Ability_1.Ability.SLUDGE]: new sludge_1.SludgeStrategy(),
    [Ability_1.Ability.SLUDGE_WAVE]: new sludge_wave_1.SludgeWaveStrategy(),
    [Ability_1.Ability.SMOG]: new smog_1.SmogStrategy(),
    [Ability_1.Ability.SMOKE_SCREEN]: new smoke_screen_1.SmokeScreenStrategy(),
    [Ability_1.Ability.SNIPE_SHOT]: new snipe_shot_1.SnipeShotStrategy(),
    [Ability_1.Ability.SNORE]: new snore_1.SnoreStrategy(),
    [Ability_1.Ability.SOAK]: new soak_1.SoakStrategy(),
    [Ability_1.Ability.SOFT_BOILED]: new soft_boiled_1.SoftBoiledStrategy(),
    [Ability_1.Ability.SOLAR_BEAM]: new solar_beam_1.SolarBeamStrategy(),
    [Ability_1.Ability.SOLAR_BLADE]: new solar_blade_1.SolarBladeStrategy(),
    [Ability_1.Ability.SONG_OF_DESIRE]: new song_of_desire_1.SongOfDesireStrategy(),
    [Ability_1.Ability.SOUL_TRAP]: new soul_trap_1.SoulTrapStrategy(),
    [Ability_1.Ability.SPACIAL_REND]: new spacial_rend_1.SpacialRendStrategy(),
    [Ability_1.Ability.SPARK]: new spark_1.SparkStrategy(),
    [Ability_1.Ability.SPARKLING_ARIA]: new sparkling_aria_1.SparklingAriaStrategy(),
    [Ability_1.Ability.SPECTRAL_THIEF]: new spectral_thief_1.SpectralThiefStrategy(),
    [Ability_1.Ability.SPICY_EXTRACT]: new spicy_extract_1.SpicyExtractStrategy(),
    [Ability_1.Ability.SPIKES]: new spikes_1.SpikesStrategy(),
    [Ability_1.Ability.SPIKY_SHIELD]: new spiky_shield_1.SpikyShieldStrategy(),
    [Ability_1.Ability.SPIN_OUT]: new spin_out_1.SpinOutStrategy(),
    [Ability_1.Ability.SPIRIT_BREAK]: new spirit_break_1.SpiritBreakStrategy(),
    [Ability_1.Ability.SPIRIT_SHACKLE]: new spirit_shackle_1.SpiritShackleStrategy(),
    [Ability_1.Ability.SPITE]: new spite_1.SpiteStrategy(),
    [Ability_1.Ability.SPLASH]: new splash_1.SplashStrategy(),
    [Ability_1.Ability.SPRINGTIDE_STORM]: new springtide_storm_1.SpringtideStormStrategy(),
    [Ability_1.Ability.STATIC_SHOCK]: new static_shock_1.StaticShockStrategy(),
    [Ability_1.Ability.STEALTH_ROCKS]: new stealth_rocks_1.StealthRocksStrategy(),
    [Ability_1.Ability.STEAM_ERUPTION]: new steam_eruption_1.SteamEruptionStrategy(),
    [Ability_1.Ability.STEAMROLLER]: new steamroller_1.SteamrollerStrategy(),
    [Ability_1.Ability.STEEL_WING]: new steel_wing_1.SteelWingStrategy(),
    [Ability_1.Ability.STICKY_WEB]: new sticky_web_1.StickyWebStrategy(),
    [Ability_1.Ability.STOCKPILE]: new stockpile_1.StockpileStrategy(),
    [Ability_1.Ability.STOMP]: new stomp_1.StompStrategy(),
    [Ability_1.Ability.STONE_AXE]: new stone_axe_1.StoneAxeStrategy(),
    [Ability_1.Ability.STONE_EDGE]: new stone_edge_1.StoneEdgeStrategy(),
    [Ability_1.Ability.STORED_POWER]: new stored_power_1.StoredPowerStrategy(),
    [Ability_1.Ability.STRANGE_STEAM]: new strange_steam_1.StrangeSteamStrategy(),
    [Ability_1.Ability.STRENGTH]: new strength_1.StrengthStrategy(),
    [Ability_1.Ability.STRING_SHOT]: new string_shot_1.StringShotStrategy(),
    [Ability_1.Ability.STRUGGLE_BUG]: new struggle_bug_1.StruggleBugStrategy(),
    [Ability_1.Ability.STUFF_CHEEKS]: new stuff_cheeks_1.StuffCheeksStrategy(),
    [Ability_1.Ability.STUN_SPORE]: new stun_spore_1.StunSporeStrategy(),
    [Ability_1.Ability.SUCTION_HEAL]: new suction_heal_1.SuctionHealStrategy(),
    [Ability_1.Ability.SUNSTEEL_STRIKE]: new sunsteel_strike_1.SunsteelStrikeStrategy(),
    [Ability_1.Ability.SUPER_FANG]: new super_fang_1.SuperFangStrategy(),
    [Ability_1.Ability.SUPER_HEAT]: new super_heat_1.SuperHeatStrategy(),
    [Ability_1.Ability.SUPERCELL_SLAM]: new supercell_slam_1.SupercellSlamStrategy(),
    [Ability_1.Ability.SURF]: new surf_1.SurfStrategy(),
    [Ability_1.Ability.SURGING_STRIKES]: new surging_strikes_1.SurgingStrikesStrategy(),
    [Ability_1.Ability.SWAGGER]: new swagger_1.SwaggerStrategy(),
    [Ability_1.Ability.SWALLOW]: new swallow_1.SwallowStrategy(),
    [Ability_1.Ability.SWEET_SCENT]: new sweet_scent_1.SweetScentStrategy(),
    [Ability_1.Ability.SYRUP_BOMB]: new syrup_bomb_1.SyrupBombStrategy(),
    [Ability_1.Ability.TACKLE]: new tackle_1.TackleStrategy(),
    [Ability_1.Ability.TAIL_GLOW]: new tail_glow_1.TailGlowStrategy(),
    [Ability_1.Ability.TAIL_WHIP]: new tail_whip_1.TailWhipStrategy(),
    [Ability_1.Ability.TAILWIND]: new tailwind_1.TailwindStrategy(),
    [Ability_1.Ability.TAKE_HEART]: new take_heart_1.TakeHeartStrategy(),
    [Ability_1.Ability.TAUNT]: new taunt_1.TauntStrategy(),
    [Ability_1.Ability.TEA_TIME]: new tea_time_1.TeaTimeStrategy(),
    [Ability_1.Ability.TEETER_DANCE]: new teeter_dance_1.TeeterDanceStrategy(),
    [Ability_1.Ability.TELEPORT]: new teleport_1.TeleportStrategy(),
    [Ability_1.Ability.TERRAIN_PULSE]: new terrain_pulse_1.TerrainPulseStrategy(),
    [Ability_1.Ability.THIEF]: new thief_1.ThiefStrategy(),
    [Ability_1.Ability.THOUSAND_ARROWS]: new thousand_arrows_1.ThousandArrowsStrategy(),
    [Ability_1.Ability.THRASH]: new thrash_1.ThrashStrategy(),
    [Ability_1.Ability.THUNDER]: new thunder_1.ThunderStrategy(),
    [Ability_1.Ability.THUNDER_CAGE]: new thunder_cage_1.ThunderCageStrategy(),
    [Ability_1.Ability.THUNDER_FANG]: new thunder_fang_1.ThunderFangStrategy(),
    [Ability_1.Ability.THUNDER_SHOCK]: thunder_shock_1.thunderShockStrategy,
    [Ability_1.Ability.THUNDEROUS_KICK]: new thunderous_kick_1.ThunderousKickStrategy(),
    [Ability_1.Ability.TICKLE]: new tickle_1.TickleStrategy(),
    [Ability_1.Ability.TIME_TRAVEL]: new time_travel_1.TimeTravelStrategy(),
    [Ability_1.Ability.TOPSY_TURVY]: new topsy_turvy_1.TopsyTurvyStrategy(),
    [Ability_1.Ability.TORCH_SONG]: new torch_song_1.TorchSongStrategy(),
    [Ability_1.Ability.TORMENT]: new torment_1.TormentStrategy(),
    [Ability_1.Ability.TOXIC]: new toxic_1.ToxicStrategy(),
    [Ability_1.Ability.TRANSE]: new transe_1.TranseStrategy(),
    [Ability_1.Ability.TRANSFORM]: new transform_1.TransformStrategy(),
    [Ability_1.Ability.TRI_ATTACK]: new tri_attack_1.TriAttackStrategy(),
    [Ability_1.Ability.TRICK_OR_TREAT]: new trick_or_treat_1.TrickOrTreatStrategy(),
    [Ability_1.Ability.TRIMMING_MOWER]: new trimming_mower_1.TrimmingMowerStrategy(),
    [Ability_1.Ability.TRIPLE_DIVE]: new triple_dive_1.TripleDiveStrategy(),
    [Ability_1.Ability.TRIPLE_KICK]: new triple_kick_1.TripleKickStrategy(),
    [Ability_1.Ability.TROP_KICK]: new trop_kick_1.TropKickStrategy(),
    [Ability_1.Ability.TWIN_BEAM]: new twin_beam_1.TwinBeamStrategy(),
    [Ability_1.Ability.TWINEEDLE]: new twineedle_1.TwineedleStrategy(),
    [Ability_1.Ability.TWISTER]: new twister_1.TwisterStrategy(),
    [Ability_1.Ability.U_TURN]: new u_turn_1.UTurnStrategy(),
    [Ability_1.Ability.ULTRA_THRUSTERS]: new ultra_thrusters_1.UltraThrustersStrategy(),
    [Ability_1.Ability.UNBOUND]: new unbound_1.UnboundStrategy(),
    [Ability_1.Ability.UPROAR]: new uproar_1.UproarStrategy(),
    [Ability_1.Ability.VENOSHOCK]: new venoshock_1.VenoshockStrategy(),
    [Ability_1.Ability.VESPIQUEN_ORDERS]: new ability_strategy_1.AbilityStrategy(),
    [Ability_1.Ability.VICTORY_DANCE]: new victory_dance_1.VictoryDanceStrategy(),
    [Ability_1.Ability.VINE_WHIP]: new vine_whip_1.VineWhipStrategy(),
    [Ability_1.Ability.VISE_GRIP]: new vise_grip_1.ViseGripStrategy(),
    [Ability_1.Ability.VOLT_SURGE]: new volt_surge_1.VoltSurgeStrategy(),
    [Ability_1.Ability.VOLT_SWITCH]: new volt_switch_1.VoltSwitchStrategy(),
    [Ability_1.Ability.WATER_PULSE]: new water_pulse_1.WaterPulseStrategy(),
    [Ability_1.Ability.WATER_SHURIKEN]: new water_shuriken_1.WaterShurikenStrategy(),
    [Ability_1.Ability.WATERFALL]: new waterfall_1.WaterfallStrategy(),
    [Ability_1.Ability.WAVE_SPLASH]: new wave_splash_1.WaveSplashStrategy(),
    [Ability_1.Ability.WHEEL_OF_FIRE]: new wheel_of_fire_1.WheelOfFireStrategy(),
    [Ability_1.Ability.WHIRLPOOL]: new whirlpool_1.WhirlpoolStrategy(),
    [Ability_1.Ability.WHIRLWIND]: new whirlwind_1.WhirlwindStrategy(),
    [Ability_1.Ability.WICKED_BLOW]: new wicked_blow_1.WickedBlowStrategy(),
    [Ability_1.Ability.WILDBOLT_STORM]: new wildbolt_storm_1.WildboltStormStrategy(),
    [Ability_1.Ability.WISE_YAWN]: new wise_yawn_1.WiseYawnStrategy(),
    [Ability_1.Ability.WISH]: new wish_1.WishStrategy(),
    [Ability_1.Ability.WONDER_GUARD]: new wonder_guard_1.WonderGuardStrategy(),
    [Ability_1.Ability.WONDER_ROOM]: new wonder_room_1.WonderRoomStrategy(),
    [Ability_1.Ability.WOOD_HAMMER]: new wood_hammer_1.WoodHammerStrategy(),
    [Ability_1.Ability.X_SCISSOR]: new x_scissor_1.XScissorStrategy(),
    [Ability_1.Ability.YAWN]: new yawn_1.YawnStrategy(),
    [Ability_1.Ability.ZAP_CANNON]: new zap_cannon_1.ZapCannonStrategy(),
    [Ability_1.Ability.ZING_ZAP]: new zing_zap_1.ZingZapStrategy()
};
//# sourceMappingURL=abilities.js.map