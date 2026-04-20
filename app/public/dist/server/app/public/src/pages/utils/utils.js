"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformBoardCoordinates = transformBoardCoordinates;
exports.transformEntityCoordinates = transformEntityCoordinates;
exports.transformMiniGameXCoordinate = transformMiniGameXCoordinate;
exports.transformMiniGameYCoordinate = transformMiniGameYCoordinate;
const config_1 = require("../../../../config");
function transformBoardCoordinates(x, y) {
    if (y === 0) {
        return [config_1.BOARD_X_START + config_1.CELL_WIDTH * x, config_1.BOARD_Y_START];
    }
    else {
        return [
            config_1.BOARD_X_START + config_1.CELL_WIDTH * x,
            config_1.BOARD_Y_START - config_1.CELL_HEIGHT * (y + 1) + config_1.CELL_HEIGHT / 2
        ];
    }
}
function transformEntityCoordinates(x, y, flip) {
    return [
        config_1.BOARD_X_START + config_1.CELL_WIDTH * x,
        config_1.CELL_HEIGHT / 2 +
            (flip
                ? config_1.BOARD_Y_START + config_1.CELL_HEIGHT * (y - 7)
                : config_1.BOARD_Y_START - config_1.CELL_HEIGHT * (y + 2))
    ];
}
function transformMiniGameXCoordinate(x) {
    return config_1.BOARD_X_START + x;
}
function transformMiniGameYCoordinate(y) {
    return config_1.BOARD_Y_START - y - config_1.CELL_HEIGHT * 1.5;
}
//# sourceMappingURL=utils.js.map