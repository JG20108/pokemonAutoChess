"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrientationArray = exports.OrientationAngle = exports.OrientationVector = void 0;
exports.getOrientation = getOrientation;
const Game_1 = require("../types/enum/Game");
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
//# sourceMappingURL=orientation.js.map