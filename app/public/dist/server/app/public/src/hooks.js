"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGameEventResetCountdown = exports.selectConnectedPlayer = exports.selectSpectatedPlayer = exports.useAppSelector = exports.useAppDispatch = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const config_1 = require("../../config");
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
const selectSpectatedPlayer = (state) => state.game.players.find((p) => p.id === state.game.playerIdSpectated);
exports.selectSpectatedPlayer = selectSpectatedPlayer;
const selectConnectedPlayer = (state) => state.game.players.find((p) => p.id === state.network.uid);
exports.selectConnectedPlayer = selectConnectedPlayer;
const useGameEventResetCountdown = () => {
    const now = new Date();
    const resetDate = (0, config_1.getGameEventResetDate)();
    const [resetCountdown, setResetCountdown] = (0, react_1.useState)(Math.round((resetDate.getTime() - now.getTime()) / 1000));
    (0, react_1.useEffect)(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setResetCountdown(Math.round((resetDate.getTime() - now.getTime()) / 1000));
        }, 1000);
        return () => clearInterval(timer);
    }, [resetDate]);
    return resetCountdown;
};
exports.useGameEventResetCountdown = useGameEventResetCountdown;
//# sourceMappingURL=hooks.js.map