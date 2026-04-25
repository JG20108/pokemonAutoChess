"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Booster;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const function_1 = require("../../../../../utils/function");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const BoostersStore_1 = require("../../../stores/BoostersStore");
const jsx_1 = require("../../utils/jsx");
const booster_card_1 = require("./booster-card");
require("./booster.css");
function Booster() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const boosterContent = (0, hooks_1.useAppSelector)((state) => state.boosters.boosterContent);
    const numberOfBooster = user ? user.booster : 0;
    const [flippedStates, setFlippedStates] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [isThrottled, setIsThrottled] = (0, react_1.useState)(false);
    const THROTTLE_DURATION = 2000;
    (0, react_1.useEffect)(() => {
        setFlippedStates(new Array(boosterContent.length).fill(false));
    }, [boosterContent]);
    (0, react_1.useEffect)(() => () => {
        dispatch((0, BoostersStore_1.setBoosterContent)([]));
        setLoading(false);
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        if (boosterContent.length > 0) {
            setLoading(false);
        }
    }, [boosterContent]);
    const throttledBoosterOpen = (0, react_1.useRef)((0, function_1.throttle)(() => __awaiter(this, void 0, void 0, function* () {
        dispatch((0, BoostersStore_1.setBoosterContent)([]));
        setLoading(true);
        try {
            yield (0, network_1.openBooster)();
        }
        catch (error) {
            console.error("Error opening booster:", error);
        }
        finally {
            setLoading(false);
        }
    }), THROTTLE_DURATION)).current;
    const allCardsFlipped = flippedStates.every((flipped) => flipped);
    function onClickOpenBooster() {
        if (!allCardsFlipped) {
            setFlippedStates(new Array(boosterContent.length).fill(true));
        }
        else if (numberOfBooster > 0 && !isThrottled) {
            throttledBoosterOpen();
            setIsThrottled(true);
            setTimeout(() => setIsThrottled(false), THROTTLE_DURATION);
        }
    }
    const handleFlip = (index) => {
        setFlippedStates((prev) => prev.with(index, !prev[index]));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { id: "boosters-page", children: [(0, jsx_runtime_1.jsx)("p", { className: "help", children: numberOfBooster === 0 ? t("boosters_hint") : t("open_boosters_hint") }), (0, jsx_runtime_1.jsx)("div", { className: "boosters-content", children: boosterContent.map((card, i) => ((0, jsx_runtime_1.jsx)(booster_card_1.BoosterCard, { card: card, flipped: flippedStates[i], onFlip: () => handleFlip(i) }, "booster" + i))) }), (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsx)("button", { onClick: onClickOpenBooster, className: (0, jsx_1.cc)("bubbly", { blue: numberOfBooster > 0 }), disabled: numberOfBooster <= 0 || loading || (allCardsFlipped && isThrottled), children: t("open_booster") }), (0, jsx_runtime_1.jsx)("span", { className: "booster-count", children: numberOfBooster }), (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/booster.png", alt: "booster" })] })] }));
}
//# sourceMappingURL=booster.js.map