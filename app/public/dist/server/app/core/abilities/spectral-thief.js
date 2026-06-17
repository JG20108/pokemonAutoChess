"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpectralThiefStrategy = void 0;
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class SpectralThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const damage = (_a = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        if (farthestCoordinate) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
            const PkmClass = pokemon_1.PokemonClasses[Pokemon_1.PkmByIndex[target.index]];
            if (!PkmClass)
                return logger_1.logger.error(`Spectral Thief: No class found for ${target.name} [index ${target.index}]`);
            if (target.items.has(Item_1.Item.TWIST_BAND) === false) {
                const base = new PkmClass(target.name);
                const boostAtk = (0, number_1.min)(0)(target.atk - target.baseAtk);
                const boostSpeed = (0, number_1.min)(0)(target.speed - base.speed);
                const boostDef = (0, number_1.min)(0)(target.def - target.baseDef);
                const boostSpeDef = (0, number_1.min)(0)(target.speDef - target.baseSpeDef);
                const boostAP = target.ap;
                const boostHP = (0, number_1.min)(0)(target.maxHP - base.hp);
                const boostCritChance = (0, number_1.min)(0)(target.critChance - base.critChance);
                const boostCritPower = (0, number_1.min)(0)(target.critPower - base.critPower);
                const boostLuck = (0, number_1.min)(0)(target.luck - base.luck);
                target.addAttack(-boostAtk, pokemon, 0, false);
                target.addSpeed(-boostSpeed, pokemon, 0, false);
                target.addDefense(-boostDef, pokemon, 0, false);
                target.addSpecialDefense(-boostSpeDef, pokemon, 0, false);
                target.addAbilityPower(-boostAP, pokemon, 0, false);
                target.addMaxHP(-boostHP, pokemon, 0, false);
                target.addCritChance(-boostCritChance, pokemon, 0, false);
                target.addCritPower(-boostCritPower, pokemon, 0, false);
                target.addLuck(-boostLuck, pokemon, 0, false);
                pokemon.addAttack(boostAtk, pokemon, 0, false);
                pokemon.addDefense(boostDef, pokemon, 0, false);
                pokemon.addSpecialDefense(boostSpeDef, pokemon, 0, false);
                pokemon.addAbilityPower(boostAP, pokemon, 0, false);
                pokemon.addSpeed(boostSpeed, pokemon, 0, false);
                pokemon.addMaxHP(boostHP, pokemon, 0, false);
                pokemon.addCritChance(boostCritChance, pokemon, 0, false);
                pokemon.addCritPower(boostCritPower, pokemon, 0, false);
                pokemon.addLuck(boostLuck, pokemon, 0, false);
            }
        }
    }
}
exports.SpectralThiefStrategy = SpectralThiefStrategy;
//# sourceMappingURL=spectral-thief.js.map