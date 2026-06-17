"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
exports.effectInOrientation = effectInOrientation;
exports.effectInLine = effectInLine;
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const distance_1 = require("../utils/distance");
const logger_1 = require("../utils/logger");
const orientation_1 = require("../utils/orientation");
const random_1 = require("../utils/random");
class Board {
    constructor(rows, colums) {
        this.rows = rows;
        this.columns = colums;
        this.cells = new Array(this.rows * this.columns);
        this.boardEffects = Array.from({ length: this.rows * this.columns }, () => new Set());
    }
    getEntityOnCell(x, y) {
        if (this.isOnBoard(x, y)) {
            return this.cells[this.columns * y + x];
        }
    }
    setEntityOnCell(x, y, entity) {
        if (this.isOnBoard(x, y)) {
            const index = this.columns * y + x;
            this.cells[index] = entity;
            if (entity && !(entity.positionX === x && entity.positionY === y)) {
                const effectsOnPreviousCell = this.boardEffects[entity.positionY * this.columns + entity.positionX];
                effectsOnPreviousCell.forEach((effectOnPreviousCell) => {
                    entity.effects.delete(effectOnPreviousCell);
                });
                entity.positionX = x;
                entity.positionY = y;
                const effectsOnNewCell = this.boardEffects[index];
                effectsOnNewCell.forEach((effectOnNewCell) => {
                    if (!entity.effects.has(Effect_1.EffectEnum.IMMUNITY_BOARD_EFFECTS)) {
                        entity.effects.add(effectOnNewCell);
                    }
                });
            }
        }
    }
    swapCells(x0, y0, x1, y1) {
        const entity0 = this.getEntityOnCell(x0, y0);
        const entity1 = this.getEntityOnCell(x1, y1);
        this.setEntityOnCell(x1, y1, entity0);
        this.setEntityOnCell(x0, y0, entity1);
    }
    forEach(callback) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                callback(x, y, this.cells[this.columns * y + x]);
            }
        }
    }
    find(predicate) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                const cell = this.cells[this.columns * y + x];
                if (cell && predicate(x, y, cell)) {
                    return cell;
                }
            }
        }
        return null;
    }
    orientation(x0, y0, x1, y1, pokemon, target) {
        const dx = x1 - x0;
        const dy = y1 - y0;
        if (dx > 0) {
            if (dy == 0) {
                return Game_1.Orientation.RIGHT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWNRIGHT;
            }
            else {
                return Game_1.Orientation.UPRIGHT;
            }
        }
        else if (dx == 0) {
            if (dy == 0) {
                if (pokemon.status.confusion) {
                    return (0, random_1.pickRandomIn)(Game_1.Orientation);
                }
                logger_1.logger.error("failed to get pokemon orientation", {
                    x0,
                    y0,
                    x1,
                    y1,
                    pokemon: pokemon.name,
                    pokemonPosX: pokemon.positionX,
                    pokemonPosY: pokemon.positionY,
                    target: target === null || target === void 0 ? void 0 : target.name,
                    targetPosX: target === null || target === void 0 ? void 0 : target.positionX,
                    targetPosY: target === null || target === void 0 ? void 0 : target.positionY
                });
                logger_1.logger.trace("orientation error");
                return Game_1.Orientation.DOWNRIGHT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWN;
            }
            else {
                return Game_1.Orientation.UP;
            }
        }
        else {
            if (dy == 0) {
                return Game_1.Orientation.LEFT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWNLEFT;
            }
            else {
                return Game_1.Orientation.UPLEFT;
            }
        }
    }
    getAdjacentCells(cellX, cellY, includesCenter = false) {
        const cells = new Array();
        for (let y = cellY - 1; y < cellY + 2; y++) {
            for (let x = cellX - 1; x < cellX + 2; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                if (this.isOnBoard(x, y)) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getOuterRangeCells(cellX, cellY, range = 1, includesCenter = false) {
        const cells = new Array();
        for (let y = cellY - range; y <= cellY + range; y++) {
            for (let x = cellX - range; x <= cellX + range; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                if (this.isOnBoard(x, y)) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getCellsInFront(pokemon, target, range = 1) {
        const cellsXY = new Set();
        pokemon.orientation = this.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        let prevCells = [
            [pokemon.positionX, pokemon.positionY]
        ];
        for (let r = 1; r <= range; r++) {
            const nextCells = new Array();
            orientations.forEach((orientation) => {
                prevCells.forEach((cell) => {
                    const x = cell[0] + orientation_1.OrientationVector[orientation][0];
                    const y = cell[1] + orientation_1.OrientationVector[orientation][1];
                    cellsXY.add(`${x},${y}`);
                    nextCells.push([x, y]);
                });
            });
            prevCells = nextCells;
        }
        const cells = [];
        cellsXY.forEach((xy) => {
            const [x, y] = xy.split(",").map(Number);
            if (this.isOnBoard(x, y)) {
                cells.push({ x, y, value: this.cells[this.columns * y + x] });
            }
        });
        return cells;
    }
    getCellsInRange(cellX, cellY, range, includesCenter) {
        const cells = new Array();
        range = Math.floor(Math.abs(range));
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                const distance = (0, distance_1.distanceC)(cellX, cellY, x, y);
                if (this.isOnBoard(x, y) && distance <= range) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getCellsInRow(y) {
        const cells = new Array();
        for (let x = 0; x < this.columns; x++) {
            if (this.isOnBoard(x, y)) {
                cells.push({ x, y, value: this.cells[this.columns * y + x] });
            }
        }
        return cells;
    }
    getCellsInRadius(cellX, cellY, radius, includesCenter) {
        const cells = new Array();
        radius = Math.floor(Math.abs(radius)) + 0.5;
        const radiusSquared = radius * radius;
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                const dy = cellY - y;
                const dx = cellX - x;
                const distanceSquared = dy * dy + dx * dx;
                if (this.isOnBoard(x, y) && distanceSquared < radiusSquared) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getAllPokemonCoordinates() {
        const pokemonCoordinates = [];
        this.forEach((x, y, value) => {
            if (value !== undefined) {
                pokemonCoordinates.push({ x, y });
            }
        });
        return pokemonCoordinates;
    }
    getCellsBetween(x0, y0, x1, y1) {
        const cells = [];
        if (this.isOnBoard(x0, y0)) {
            cells.push({
                x: x0,
                y: y0,
                value: this.cells[this.columns * y0 + x0]
            });
        }
        const dx = x1 - x0, dy = y1 - y0;
        const nx = Math.abs(dx), ny = Math.abs(dy);
        const sign_x = Math.sign(dx), sign_y = Math.sign(dy);
        let x = x0, y = y0;
        for (let ix = 0, iy = 0; ix < nx || iy < ny;) {
            const decision = (1 + 2 * ix) * ny - (1 + 2 * iy) * nx;
            if (decision === 0) {
                x += sign_x;
                y += sign_y;
                ix++;
                iy++;
            }
            else if (decision < 0) {
                x += sign_x;
                ix++;
            }
            else {
                y += sign_y;
                iy++;
            }
            if (this.isOnBoard(x, y)) {
                cells.push({ x, y, value: this.cells[this.columns * y + x] });
            }
        }
        return cells;
    }
    getTeleportationCell(x, y, boardSide) {
        const candidates = new Array();
        const blueCorners = [
            { x: 0, y: 0 },
            { x: this.columns - 1, y: 0 }
        ];
        const redCorners = [
            { x: 0, y: this.rows - 1 },
            { x: this.columns - 1, y: this.rows - 1 }
        ];
        const corners = boardSide === Game_1.Team.BLUE_TEAM
            ? blueCorners
            : boardSide === Game_1.Team.RED_TEAM
                ? redCorners
                : [...blueCorners, ...redCorners];
        corners.forEach((coord) => {
            const cells = this.getCellsBetween(x, y, coord.x, coord.y);
            cells.forEach((cell) => {
                if (cell.value === undefined) {
                    candidates.push(cell);
                }
            });
        });
        if (candidates.length > 0) {
            candidates.sort((a, b) => (0, distance_1.distanceC)(x, y, b.x, b.y) - (0, distance_1.distanceC)(x, y, a.x, a.y));
            return candidates[0];
        }
        else {
            return undefined;
        }
    }
    getFlyAwayCell(entity) {
        const fallback = () => {
            var _a, _b;
            const safeCell = this.getSafePlaceAwayFrom((_a = entity.targetX) !== null && _a !== void 0 ? _a : entity.positionX, (_b = entity.targetY) !== null && _b !== void 0 ? _b : entity.positionY, null, entity.range);
            if (!safeCell)
                return null;
            const target = this.getClosestEnemy(safeCell.x, safeCell.y, entity.team);
            if (!target)
                return null;
            return {
                x: safeCell.x,
                y: safeCell.y,
                target: target
            };
        };
        const enemies = this.cells.filter((e) => e != null && e.hp > 0 && e.team !== entity.team);
        if (enemies.length === 0) {
            return null;
        }
        const availableCells = [];
        this.forEach((cellX, cellY, value) => {
            if (value === undefined) {
                availableCells.push({ x: cellX, y: cellY, value });
            }
        });
        const cellsBeyondEntityRange = availableCells.filter((cell) => (0, distance_1.distanceC)(cell.x, cell.y, entity.positionX, entity.positionY) >
            entity.range);
        const cellsWithTarget = cellsBeyondEntityRange
            .map((cell) => {
            const enemiesAtRange = enemies.filter((enemy) => enemy.hp > 0 &&
                enemy.isTargettableBy(entity) &&
                (0, distance_1.distanceC)(cell.x, cell.y, enemy.positionX, enemy.positionY) <=
                    entity.range);
            if (enemiesAtRange.length === 0) {
                return null;
            }
            const target = enemiesAtRange.reduce((lowest, enemy) => {
                const enemyHpPercent = enemy.hp / enemy.maxHP;
                const lowestHpPercent = lowest.hp / lowest.maxHP;
                return enemyHpPercent < lowestHpPercent ? enemy : lowest;
            });
            const enemyThreatCount = enemies.filter((enemy) => (0, distance_1.distanceC)(cell.x, cell.y, enemy.positionX, enemy.positionY) <=
                enemy.range).length;
            return {
                cell,
                target,
                enemyThreatCount,
                distance: (0, distance_1.distanceM)(cell.x, cell.y, entity.positionX, entity.positionY)
            };
        })
            .filter((candidate) => candidate != null);
        if (cellsWithTarget.length === 0) {
            return fallback();
        }
        const minThreatCount = Math.min(...cellsWithTarget.map((candidate) => candidate.enemyThreatCount));
        const safestCells = cellsWithTarget.filter((candidate) => candidate.enemyThreatCount === minThreatCount);
        const maxDistance = Math.max(...safestCells.map((candidate) => candidate.distance));
        const farthestSafestCells = safestCells.filter((candidate) => candidate.distance === maxDistance);
        const selectedDestination = (0, random_1.pickRandomIn)(farthestSafestCells);
        return {
            x: selectedDestination.cell.x,
            y: selectedDestination.cell.y,
            target: selectedDestination.target
        };
    }
    getSafePlaceAwayFrom(originX, originY, specificSide = null, maxDistance) {
        var _a;
        let candidateCells = new Array();
        this.forEach((x, y, value) => {
            if (value === undefined) {
                if (specificSide === null) {
                    candidateCells.push({
                        x,
                        y,
                        distance: (0, distance_1.distanceM)(x, y, originX, originY)
                    });
                }
                else {
                    if ((specificSide === Game_1.Team.BLUE_TEAM && y < this.rows / 2) ||
                        (specificSide === Game_1.Team.RED_TEAM && y >= this.rows / 2)) {
                        candidateCells.push({
                            x,
                            y,
                            distance: (0, distance_1.distanceM)(x, y, originX, originY)
                        });
                    }
                }
            }
        });
        candidateCells = candidateCells
            .filter((cell) => maxDistance === undefined ||
            (0, distance_1.distanceC)(cell.x, cell.y, originX, originY) <= maxDistance)
            .sort((a, b) => b.distance - a.distance);
        return (_a = candidateCells[0]) !== null && _a !== void 0 ? _a : null;
    }
    getClosestAvailablePlace(targetX, targetY) {
        var _a;
        const candidateCells = new Array();
        this.forEach((x, y, value) => {
            if (value === undefined) {
                candidateCells.push({
                    x,
                    y,
                    distance: (0, distance_1.distanceM)(x, y, targetX, targetY)
                });
            }
        });
        candidateCells.sort((a, b) => a.distance - b.distance);
        return (_a = candidateCells[0]) !== null && _a !== void 0 ? _a : null;
    }
    getFarthestTargetCoordinateAvailablePlace(pokemon, targetAlly = false) {
        let maxTargetDistance = 0;
        let maxCellDistance = 0;
        let selectedCell = null;
        let farthestTarget;
        this.forEach((x, y, entity) => {
            if (entity && entity.isTargettableBy(pokemon, !targetAlly, targetAlly)) {
                const targetDistance = (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, entity.positionX, entity.positionY);
                if (targetDistance > maxTargetDistance) {
                    maxTargetDistance = targetDistance;
                    farthestTarget = entity;
                    maxCellDistance = 0;
                    const freeCells = this.getAdjacentCells(x, y).filter((cell) => this.getEntityOnCell(cell.x, cell.y) === undefined);
                    for (const cell of freeCells) {
                        const cellDistance = (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, cell.x, cell.y);
                        if (cellDistance > maxCellDistance) {
                            maxCellDistance = cellDistance;
                            selectedCell = {
                                x: cell.x,
                                y: cell.y,
                                distance: cellDistance,
                                target: entity
                            };
                        }
                    }
                }
            }
        });
        if (selectedCell === null && farthestTarget) {
            const freeCell = this.getClosestAvailablePlace(farthestTarget.positionX, farthestTarget.positionY);
            if (freeCell) {
                selectedCell = Object.assign(Object.assign({}, freeCell), { target: farthestTarget });
            }
        }
        return selectedCell;
    }
    addBoardEffect(x, y, effect, simulation) {
        const previousEffects = this.boardEffects[y * this.columns + x];
        const entityOnCell = this.getEntityOnCell(x, y);
        if (entityOnCell) {
            entityOnCell.effects.add(effect);
        }
        if (!previousEffects.has(effect)) {
            this.boardEffects[y * this.columns + x].add(effect);
            simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                simulationId: simulation.id,
                effect,
                x,
                y
            });
        }
    }
    clearBoardEffect(x, y, simulation, effectToClear) {
        const index = y * this.columns + x;
        const existingEffects = this.boardEffects[index];
        const entityOnCell = this.getEntityOnCell(x, y);
        if (effectToClear) {
            existingEffects.delete(effectToClear);
            if (entityOnCell) {
                entityOnCell.effects.delete(effectToClear);
            }
            logger_1.logger.debug(`Clearing board effect ${effectToClear} at (${x}, ${y})`);
            simulation.room.broadcast(types_1.Transfer.CLEAR_BOARD_EVENT, {
                simulationId: simulation.id,
                effect: effectToClear,
                x,
                y
            });
        }
        else {
            if (entityOnCell) {
                existingEffects.forEach((effect) => entityOnCell.effects.delete(effect));
            }
            existingEffects.clear();
            simulation.room.broadcast(types_1.Transfer.CLEAR_BOARD_EVENT, {
                simulationId: simulation.id,
                effect: null,
                x,
                y
            });
        }
    }
    getKnockBackPlace(x, y, knockBackOrientation) {
        const possibleOrientations = Game_1.OrientationKnockback[knockBackOrientation];
        for (const orientation of possibleOrientations) {
            const dx = orientation_1.OrientationVector[orientation][0];
            const dy = orientation_1.OrientationVector[orientation][1];
            const newX = x + dx;
            const newY = y + dy;
            if (this.isOnBoard(newX, newY)) {
                const cell = this.getEntityOnCell(newX, newY);
                if (cell === undefined) {
                    return { x: newX, y: newY };
                }
            }
        }
        return null;
    }
    getFallenAlliesCount(pokemon) {
        const nbAlliesAlive = this.cells.filter((p) => p && p.team === pokemon.team).length;
        const meter = pokemon.team === Game_1.Team.BLUE_TEAM ? "blueDpsMeter" : "redDpsMeter";
        return pokemon.simulation[meter].size - nbAlliesAlive;
    }
    isOnBoard(x, y) {
        return x >= 0 && x < this.columns && y >= 0 && y < this.rows;
    }
    getClosestEnemy(positionX, positionY, enemyTeam) {
        const closestEnemy = this.cells
            .filter((entity) => entity != null && entity.team === enemyTeam && entity.hp > 0)
            .sort((a, b) => (0, distance_1.distanceC)(a.positionX, a.positionY, positionX, positionY) -
            (0, distance_1.distanceC)(b.positionX, b.positionY, positionX, positionY))[0];
        return closestEnemy;
    }
    getClosestAlly(positionX, positionY, allyTeam, excludeId) {
        const closestAlly = this.cells
            .filter((entity) => entity != null &&
            entity.team === allyTeam &&
            entity.hp > 0 &&
            (!excludeId || entity.id !== excludeId))
            .sort((a, b) => (0, distance_1.distanceC)(a.positionX, a.positionY, positionX, positionY) -
            (0, distance_1.distanceC)(b.positionX, b.positionY, positionX, positionY))[0];
        return closestAlly;
    }
    getClosestEnemies(positionX, positionY, enemyTeam) {
        return this.cells
            .filter((entity) => entity != null && entity.team === enemyTeam && entity.hp > 0)
            .sort((a, b) => (0, distance_1.distanceC)(a.positionX, a.positionY, positionX, positionY) -
            (0, distance_1.distanceC)(b.positionX, b.positionY, positionX, positionY));
    }
}
exports.Board = Board;
function effectInOrientation(board, pokemon, target, effect, maxRange) {
    const orientation = typeof target === "string"
        ? target
        : board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
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
function effectInLine(board, pokemon, target, effect) {
    const angleToTarget = Math.atan2(target.positionY - pokemon.positionY, target.positionX - pokemon.positionX);
    const distance = 12;
    const finalX = Math.round(pokemon.positionX + distance * Math.cos(angleToTarget));
    const finalY = Math.round(pokemon.positionY + distance * Math.sin(angleToTarget));
    board
        .getCellsBetween(pokemon.positionX, pokemon.positionY, finalX, finalY)
        .forEach(effect);
}
//# sourceMappingURL=board.js.map