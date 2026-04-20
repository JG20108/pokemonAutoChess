"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrientationArray = exports.OrientationAngle = exports.OrientationVector = void 0;
exports.effectInOrientation = effectInOrientation;
exports.getOrientation = getOrientation;
exports.effectInLine = effectInLine;
const pokemon_entity_1 = require("../core/pokemon-entity");
const Game_1 = require("../types/enum/Game");
const distance_1 = require("./distance");
exports.OrientationVector = {
    [Game_1.Orientation.UP]: [0, 1],
    [Game_1.Orientation.UPRIGHT]: [1, 1],
    [Game_1.Orientation.RIGHT]: [1, 0],
    [Game_1.Orientation.DOWNRIGHT]: [1, -1],
    [Game_1.Orientation.DOWN]: [0, -1],
    [Game_1.Orientation.DOWNLEFT]: [-1, -1],
    [Game_1.Orientation.LEFT]: [-1, 0],
    [Game_1.Orientation.UPLEFT]: [-1, 1]
};
exports.OrientationAngle = {
    [Game_1.Orientation.UP]: Math.PI / 2,
    [Game_1.Orientation.UPRIGHT]: Math.PI / 4,
    [Game_1.Orientation.RIGHT]: 0,
    [Game_1.Orientation.DOWNRIGHT]: -Math.PI / 4,
    [Game_1.Orientation.DOWN]: -Math.PI / 2,
    [Game_1.Orientation.DOWNLEFT]: (-3 * Math.PI) / 4,
    [Game_1.Orientation.LEFT]: Math.PI,
    [Game_1.Orientation.UPLEFT]: (3 * Math.PI) / 4
};
exports.OrientationArray = [
    Game_1.Orientation.DOWN,
    Game_1.Orientation.DOWNRIGHT,
    Game_1.Orientation.RIGHT,
    Game_1.Orientation.UPRIGHT,
    Game_1.Orientation.UP,
    Game_1.Orientation.UPLEFT,
    Game_1.Orientation.LEFT,
    Game_1.Orientation.DOWNLEFT
];
function effectInOrientation(board, pokemon, target, effect, maxRange) {
    const orientation = target instanceof pokemon_entity_1.PokemonEntity
        ? board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target)
        : target;
    const targetsHit = new Set();
    const applyEffect = (x, y) => {
        if (maxRange != null) {
            const distance = (0, distance_1.distanceC)(x, y, pokemon.positionX, pokemon.positionY);
            if (distance > maxRange) {
                return;
            }
        }
        const value = board.getEntityOnCell(x, y);
        if (value != null && value.team !== pokemon.team) {
            targetsHit.add(value);
        }
        effect({ x, y, value });
    };
    switch (orientation) {
        case Game_1.Orientation.UP:
            for (let y = pokemon.positionY + 1; y < board.rows; y++) {
                applyEffect(pokemon.positionX, y);
            }
            break;
        case Game_1.Orientation.UPRIGHT:
            for (let x = pokemon.positionX + 1, y = pokemon.positionY + 1; x < board.columns && y < board.rows; x++, y++) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.RIGHT:
            for (let x = pokemon.positionX + 1; x < board.rows; x++) {
                applyEffect(x, pokemon.positionY);
            }
            break;
        case Game_1.Orientation.DOWNRIGHT:
            for (let x = pokemon.positionX + 1, y = pokemon.positionY - 1; x < board.columns && y >= 0; x++, y--) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.DOWN:
            for (let y = pokemon.positionY - 1; y >= 0; y--) {
                applyEffect(pokemon.positionX, y);
            }
            break;
        case Game_1.Orientation.DOWNLEFT:
            for (let x = pokemon.positionX - 1, y = pokemon.positionY - 1; x >= 0 && y >= 0; x--, y--) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.LEFT:
            for (let x = pokemon.positionX - 1; x >= 0; x--) {
                applyEffect(x, pokemon.positionY);
            }
            break;
        case Game_1.Orientation.UPLEFT:
            for (let x = pokemon.positionX - 1, y = pokemon.positionY + 1; x >= 0 && y < board.rows; x--, y++) {
                applyEffect(x, y);
            }
            break;
    }
    const isEntity = (obj) => obj.hasOwnProperty("positionX");
    if (isEntity(target) && targetsHit.size === 0) {
        effect({ x: target.positionX, y: target.positionY, value: target });
    }
}
function getOrientation(x1, y1, x2, y2) {
    let angle = Math.atan2(y2 - y1, x2 - x1);
    if (angle < 0) {
        angle += 2 * Math.PI;
    }
    const quarterPi = Math.PI / 4;
    if (angle < quarterPi) {
        return Game_1.Orientation.RIGHT;
    }
    else if (angle < 2 * quarterPi) {
        return Game_1.Orientation.DOWNRIGHT;
    }
    else if (angle < 3 * quarterPi) {
        return Game_1.Orientation.DOWN;
    }
    else if (angle < 4 * quarterPi) {
        return Game_1.Orientation.DOWNLEFT;
    }
    else if (angle < 5 * quarterPi) {
        return Game_1.Orientation.LEFT;
    }
    else if (angle < 6 * quarterPi) {
        return Game_1.Orientation.UPLEFT;
    }
    else if (angle < 7 * quarterPi) {
        return Game_1.Orientation.UP;
    }
    else if (angle < 8 * quarterPi) {
        return Game_1.Orientation.UPRIGHT;
    }
    else {
        return Game_1.Orientation.RIGHT;
    }
}
function effectInLine(board, pokemon, target, effect) {
    const angleToTarget = Math.atan2(target.positionY - pokemon.positionY, target.positionX - pokemon.positionX);
    const distance = 12;
    const finalX = Math.round(pokemon.positionX + distance * Math.cos(angleToTarget));
    const finalY = Math.round(pokemon.positionY + distance * Math.sin(angleToTarget));
    board
        .getCellsBetween(pokemon.positionX, pokemon.positionY, finalX, finalY)
        .forEach(effect);
}
//# sourceMappingURL=orientation.js.map