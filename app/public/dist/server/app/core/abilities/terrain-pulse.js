"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainPulseStrategy = void 0;
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class TerrainPulseStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const fieldEffects = [
            "fairyField",
            "electricField",
            "grassField",
            "psychicField"
        ];
        const getFieldEffect = (pkm) => { var _a; return (_a = fieldEffects.find((field) => pkm.status[field] === true)) !== null && _a !== void 0 ? _a : null; };
        const userField = getFieldEffect(pokemon);
        if (userField === null)
            pokemon.status.grassField = true;
        const adjacentFieldsByPkm = new Map();
        const pokemonsWithField = new Map();
        board.forEach((x, y, entity) => {
            var _a;
            if (!entity)
                return;
            if (entity.team !== pokemon.team)
                return;
            const activeField = getFieldEffect(entity);
            if (activeField) {
                pokemonsWithField.set(entity, activeField);
                const adjacentAlliesWithoutField = board
                    .getAdjacentCells(x, y)
                    .map((cell) => cell.value)
                    .filter((e) => e != null && e.team === entity.team && getFieldEffect(e) === null);
                for (const ally of adjacentAlliesWithoutField) {
                    const adjacentFields = (_a = adjacentFieldsByPkm.get(ally)) !== null && _a !== void 0 ? _a : new Set();
                    adjacentFields.add(activeField);
                    adjacentFieldsByPkm.set(ally, adjacentFields);
                }
            }
        });
        adjacentFieldsByPkm.forEach((fields, pkm) => {
            const field = (0, random_1.pickRandomIn)([...fields]);
            switch (field) {
                case "fairyField":
                    pkm.status.addFairyField(pkm);
                    break;
                case "electricField":
                    pkm.status.addElectricField(pkm);
                    break;
                case "grassField":
                    pkm.status.addGrassField(pkm);
                    break;
                case "psychicField":
                    pkm.status.addPsychicField(pkm);
                    break;
            }
            pokemonsWithField.set(pkm, getFieldEffect(pkm));
        });
        pokemonsWithField.forEach((field, pkm) => {
            var _a, _b, _c, _d;
            switch (field) {
                case "grassField": {
                    const heal = (_a = [0.05, 0.07, 0.1, 0.15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.15;
                    pkm.handleHeal(heal * pkm.maxHP, pokemon, 1, crit);
                    break;
                }
                case "electricField": {
                    const speedBuff = (_b = [10, 12, 15, 20][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 20;
                    pkm.addSpeed(speedBuff, pokemon, 1, crit);
                    break;
                }
                case "psychicField": {
                    const ppGain = (_c = [10, 12, 15, 20][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 20;
                    pkm.addPP(ppGain, pokemon, 1, crit);
                    break;
                }
                case "fairyField": {
                    const shieldPercent = (_d = [0.05, 0.07, 0.1, 0.15][pokemon.stars - 1]) !== null && _d !== void 0 ? _d : 0.15;
                    pkm.addShield(shieldPercent * pkm.maxHP, pokemon, 1, crit);
                    break;
                }
            }
        });
    }
}
exports.TerrainPulseStrategy = TerrainPulseStrategy;
//# sourceMappingURL=terrain-pulse.js.map