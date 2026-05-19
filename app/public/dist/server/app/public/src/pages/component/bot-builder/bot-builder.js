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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotBuilder;
exports.SubmitBotModal = SubmitBotModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const bot_logic_1 = require("../../../../../core/bot-logic");
const synergies_1 = require("../../../../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const avatar_1 = require("../../../../../utils/avatar");
const logger_1 = require("../../../../../utils/logger");
const number_1 = require("../../../../../utils/number");
const lobby_logic_1 = require("../../../game/lobby-logic");
const hooks_1 = require("../../../hooks");
const discord_button_1 = __importDefault(require("../buttons/discord-button"));
const modal_1 = require("../modal/modal");
const import_bot_modal_1 = __importDefault(require("./import-bot-modal"));
const score_indicator_1 = __importDefault(require("./score-indicator"));
const team_builder_1 = __importDefault(require("./team-builder"));
require("./bot-builder.css");
function BotBuilder() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_1.useNavigate)();
    const [queryParams, setQueryParams] = (0, react_router_1.useSearchParams)();
    const [currentStage, setStage] = (0, react_1.useState)(1);
    const [bot, setBot] = (0, react_1.useState)(bot_logic_1.DEFAULT_BOT_STATE);
    const [currentModal, setCurrentModal] = (0, react_1.useState)(null);
    const [violation, setViolation] = (0, react_1.useState)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const isBotManager = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.BOT_MANAGER || (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN;
    (0, react_1.useEffect)(() => {
        const onKey = (ev) => {
            if (ev.key === "ArrowRight")
                nextStep();
            if (ev.key === "ArrowLeft")
                prevStep();
        };
        window.addEventListener("keydown", onKey, false);
        return () => {
            window.removeEventListener("keydown", onKey, false);
        };
    });
    const lobbyJoined = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (!lobbyJoined.current) {
            (0, lobby_logic_1.joinLobbyRoom)(dispatch, navigate);
            lobbyJoined.current = true;
        }
    }, [lobbyJoined]);
    (0, react_1.useEffect)(() => {
        const botId = queryParams.get("bot");
        if (botId && (!bot || bot.id !== botId)) {
            logger_1.logger.debug(`loading bot ${botId}`);
            fetch(`/bots/${botId}`)
                .then((r) => r.json())
                .then((botData) => {
                setBot((0, bot_logic_1.rewriteBotRoundsRequiredto1)(structuredClone(botData)));
                logger_1.logger.debug(`bot ${botId} imported`);
            });
        }
    }, [queryParams]);
    const prevStep = (0, react_1.useCallback)(() => setStage((0, number_1.min)(1)(currentStage - 1)), [currentStage]);
    const nextStep = (0, react_1.useCallback)(() => setStage((0, number_1.max)(bot_logic_1.MAX_BOTS_STAGE)(currentStage + 1)), [currentStage]);
    (0, react_1.useEffect)(() => {
        if (currentStage >= 1 &&
            currentStage in bot.steps &&
            bot.steps[currentStage].board.length === 0) {
            updateStep(structuredClone(bot.steps[currentStage - 1].board));
        }
    }, [currentStage, bot.steps]);
    function importBot(text) {
        try {
            const b = JSON.parse(text);
            setBot((0, bot_logic_1.rewriteBotRoundsRequiredto1)(b));
            setCurrentModal(null);
            setQueryParams({ bot: b.id });
        }
        catch (e) {
            alert(e);
        }
    }
    function changeAvatar(pkm) {
        bot.name = pkm.name;
        bot.avatar = (0, avatar_1.getAvatarString)(Pokemon_1.PkmIndex[pkm.name], pkm.shiny, pkm.emotion);
        completeBotInfo();
    }
    function completeBotInfo() {
        var _a;
        if (bot.id && !isBotManager) {
            setQueryParams({});
            bot.id = "";
        }
        setBot(Object.assign(Object.assign({}, bot), { author: (_a = user === null || user === void 0 ? void 0 : user.displayName) !== null && _a !== void 0 ? _a : "Anonymous", elo: (0, bot_logic_1.estimateElo)(bot) }));
    }
    function updateStep(board) {
        bot.steps[currentStage].board = board;
        completeBotInfo();
    }
    function saveFile() {
        const blob = new Blob([JSON.stringify(bot)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "bot.json";
        a.click();
        URL.revokeObjectURL(url);
    }
    function loadFile() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.addEventListener("change", (e) => __awaiter(this, void 0, void 0, function* () {
            if (!input.files)
                return;
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (e) => __awaiter(this, void 0, void 0, function* () {
                if (!e.target)
                    return;
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data) {
                        throw new Error("Invalid file content");
                    }
                    else {
                        setBot((0, bot_logic_1.rewriteBotRoundsRequiredto1)(data));
                    }
                }
                catch (e) {
                    console.error("Failed to load bot from file:", e);
                    alert("Invalid file");
                }
            });
            reader.readAsText(file);
        }));
        input.click();
    }
    const board = (0, react_1.useMemo)(() => { var _a, _b; return (_b = (_a = bot.steps[currentStage]) === null || _a === void 0 ? void 0 : _a.board) !== null && _b !== void 0 ? _b : []; }, [bot, currentStage]);
    const synergies = (0, react_1.useMemo)(() => (0, synergies_1.computeSynergies)(board.map((p) => {
        const pkm = pokemon_factory_1.default.createPokemonFromName(p.name, {
            emotion: p.emotion,
            shiny: p.shiny
        });
        pkm.positionX = p.x;
        pkm.positionY = p.y;
        p.items.forEach((item) => {
            pkm.items.add(item);
        });
        return pkm;
    })), [board]);
    const nbComponentsOnBoard = (0, react_1.useMemo)(() => (0, bot_logic_1.getNbComponentsOnBoard)(board), [board]);
    const nbMaxComponentsOnBoard = (0, react_1.useMemo)(() => (0, bot_logic_1.getMaxItemComponents)(currentStage), [currentStage]);
    const nbScarvesOnBoard = (0, react_1.useMemo)(() => (0, bot_logic_1.getNbScarvesOnBoard)(board), [board]);
    const nbMaxScarvesOnBoard = (0, react_1.useMemo)(() => (0, synergies_1.getSynergyStep)(synergies, Synergy_1.Synergy.NORMAL), [board]);
    const nbToolsOnBoard = (0, react_1.useMemo)(() => (0, bot_logic_1.getNbToolsOnBoard)(board), [board]);
    const nbMaxToolsOnBoard = (0, react_1.useMemo)(() => (0, synergies_1.getSynergyStep)(synergies, Synergy_1.Synergy.ARTIFICIAL), [board]);
    const powerScore = (0, react_1.useMemo)(() => (0, bot_logic_1.getPowerScore)(board), [board]);
    const powerEvaluation = (0, react_1.useMemo)(() => (0, bot_logic_1.getPowerEvaluation)(powerScore, currentStage), [powerScore, currentStage]);
    (0, react_1.useEffect)(() => {
        setViolation(undefined);
        try {
            (0, bot_logic_1.validateBoard)(board, currentStage, synergies);
        }
        catch (err) {
            if (err instanceof Error) {
                setViolation(err.message);
            }
        }
    }, [board, currentStage]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "bot-builder", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/lobby"), className: "bubbly blue", children: t("back_to_lobby") }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), isBotManager && ((0, jsx_runtime_1.jsxs)("button", { onClick: () => navigate("/bot-admin"), className: "bubbly red", children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/bot.svg" }), t("bot_admin")] })), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly dark", onClick: saveFile, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/save.svg" }), " ", t("save")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly dark", onClick: loadFile, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/load.svg" }), " ", t("load")] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                            setCurrentModal("import");
                        }, className: "bubbly orange", children: t("import") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                            completeBotInfo();
                            setCurrentModal("export");
                        }, className: "bubbly green", children: t("submit") }), (0, jsx_runtime_1.jsx)(discord_button_1.default, { url: "https://discord.com/channels/737230355039387749/914503292875325461" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "step-info my-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "step-control", children: [(0, jsx_runtime_1.jsx)("button", { onClick: prevStep, disabled: currentStage <= 0, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/ui/arrow-left.svg", alt: "\u2190" }) }), (0, jsx_runtime_1.jsxs)("span", { children: [t("stage"), " ", currentStage] }), (0, jsx_runtime_1.jsx)("button", { onClick: nextStep, disabled: currentStage >= bot_logic_1.MAX_BOTS_STAGE, children: (0, jsx_runtime_1.jsx)("img", { src: "assets/ui/arrow-right.svg", alt: "\u2192" }) })] }), (0, jsx_runtime_1.jsxs)("span", { className: nbComponentsOnBoard > nbMaxComponentsOnBoard ? "invalid" : "valid", children: [t("item_components"), ": ", nbComponentsOnBoard, " /", " ", nbMaxComponentsOnBoard] }), (nbScarvesOnBoard > 0 || nbMaxScarvesOnBoard > 0) && ((0, jsx_runtime_1.jsxs)("span", { className: nbScarvesOnBoard > nbMaxScarvesOnBoard ? "invalid" : "valid", children: [t("scarves"), ": ", nbScarvesOnBoard, " / ", nbMaxScarvesOnBoard] })), (nbToolsOnBoard > 0 || nbMaxToolsOnBoard > 0) && ((0, jsx_runtime_1.jsxs)("span", { className: nbToolsOnBoard > nbMaxToolsOnBoard ? "invalid" : "valid", children: [t("tools"), ": ", nbToolsOnBoard, " / ", nbMaxToolsOnBoard] })), (0, jsx_runtime_1.jsxs)("span", { children: [t("board_power"), ": ", powerScore] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(score_indicator_1.default, { value: powerEvaluation }) })] }), (0, jsx_runtime_1.jsx)(team_builder_1.default, { bot: bot, onChangeAvatar: changeAvatar, board: board, updateBoard: updateStep, error: violation }), (0, jsx_runtime_1.jsx)(import_bot_modal_1.default, { visible: currentModal === "import", bot: bot, hideModal: () => {
                    setCurrentModal(null);
                }, importBot: importBot }), (0, jsx_runtime_1.jsx)(SubmitBotModal, { visible: currentModal === "export", bot: bot, hideModal: () => {
                    setCurrentModal(null);
                } })] }));
}
function SubmitBotModal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)("");
    const [success, setSuccess] = (0, react_1.useState)(false);
    function submitBot() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (loading)
                return;
            setLoading(true);
            setError("");
            setSuccess(false);
            try {
                const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
                const res = yield fetch("/bots", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(props.bot)
                });
                if (res.ok) {
                    setSuccess(true);
                }
                else {
                    setError(res.statusText);
                }
            }
            catch (err) {
                setError(err.message);
            }
            setLoading(false);
        });
    }
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.visible, onClose: props.hideModal, className: "bot-export-modal", header: t("submit_your_bot"), body: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("p", { children: t("bot_ready_submission") }) }), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!success && !loading && !error && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: submitBot, children: t("submit_your_bot") })), loading && (0, jsx_runtime_1.jsx)("p", { children: t("loading") }), !loading && error && ((0, jsx_runtime_1.jsx)("p", { className: "error", children: t("bot_submission_failed", { error }) })), success && (0, jsx_runtime_1.jsx)("p", { children: t("bot_submitted_success") })] }) }));
}
//# sourceMappingURL=bot-builder.js.map