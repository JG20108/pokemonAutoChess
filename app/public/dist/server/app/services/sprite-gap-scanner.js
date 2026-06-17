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
exports.refreshSpriteGapData = refreshSpriteGapData;
exports.getCachedSpriteGapData = getCachedSpriteGapData;
exports.warmupSpriteGapScanner = warmupSpriteGapScanner;
const pokemon_animations_1 = require("../public/src/game/components/pokemon-animations");
const Animation_1 = require("../types/Animation");
const Pokemon_1 = require("../types/enum/Pokemon");
const logger_1 = require("../utils/logger");
const GET_ALL_MONSTERS_QUERY = `
  query GetAllMonsters {
    monster {
      id
      rawId
      name
      forms {
        monsterId
        path
        fullPath
        name
        fullName
        isShiny
        isFemale
        canon
        portraits {
          phase
          emotions {
            emotion
            url
          }
        }
        sprites {
          phase
          actions {
            ... on Sprite {
              action
            }
            ... on CopyOf {
              action
            }
          }
        }
      }
    }
  }
`;
let cache = null;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
function normalizePathToIndex(fullPath) {
    const segments = fullPath.split("/");
    return segments.join("-");
}
function getShinyIndex(index) {
    const split = index.split("-");
    if (split.length === 1) {
        return `${index}-0000-0001`;
    }
    if (split.length === 2) {
        return `${index}-0001`;
    }
    return [...split.slice(0, 2), "0001", ...split.slice(3)].join("-");
}
function getPacIndexSet() {
    var _a;
    const pacIndexSet = new Set();
    for (const pkm of Object.values(Pokemon_1.Pkm)) {
        const baseIndex = Pokemon_1.PkmIndex[pkm];
        if (!baseIndex) {
            continue;
        }
        pacIndexSet.add(baseIndex);
        const conf = (_a = pokemon_animations_1.PokemonAnimations[pkm]) !== null && _a !== void 0 ? _a : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG;
        if (!conf.shinyUnavailable) {
            pacIndexSet.add(getShinyIndex(baseIndex));
        }
    }
    return pacIndexSet;
}
function getBaseIndex(index) {
    const parts = index.split("-");
    if (parts.length === 3 && parts[1] === "0000" && parts[2] === "0001") {
        return parts[0];
    }
    if (parts.length >= 3 && parts[2] === "0001") {
        return [...parts.slice(0, 2), ...parts.slice(3)].join("-");
    }
    return index;
}
function getRequiredActionsForIndex(index) {
    var _a, _b, _c, _d, _e;
    const baseIndex = getBaseIndex(index);
    const pkm = Pokemon_1.PkmByIndex[baseIndex];
    const conf = pkm
        ? ((_a = pokemon_animations_1.PokemonAnimations[pkm]) !== null && _a !== void 0 ? _a : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG)
        : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG;
    return new Set([
        Animation_1.AnimationType.Idle,
        Animation_1.AnimationType.Walk,
        (_b = conf.sleep) !== null && _b !== void 0 ? _b : Animation_1.AnimationType.Sleep,
        (_c = conf.hurt) !== null && _c !== void 0 ? _c : Animation_1.AnimationType.Hurt,
        (_d = conf.attack) !== null && _d !== void 0 ? _d : Animation_1.AnimationType.Attack,
        (_e = conf.hop) !== null && _e !== void 0 ? _e : Animation_1.AnimationType.Hop
    ]);
}
function satisfiesPacCriteria(form, index) {
    const hasPortrait = form.portraits.emotions.length > 0;
    if (!hasPortrait) {
        return false;
    }
    const availableActions = new Set(form.sprites.actions.map((a) => a.action));
    const requiredActions = getRequiredActionsForIndex(index);
    for (const action of requiredActions) {
        if (!availableActions.has(action)) {
            return false;
        }
    }
    return true;
}
function fetchSpriteCollabMons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://spriteserver.pmdcollab.org/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: GET_ALL_MONSTERS_QUERY
                })
            });
            if (!response.ok) {
                throw new Error(`GraphQL endpoint returned ${response.status}`);
            }
            const json = yield response.json();
            if (!json.data || !json.data.monster) {
                throw new Error("Invalid response structure: missing data.monster");
            }
            return json.data.monster;
        }
        catch (error) {
            logger_1.logger.error("[SPRITE_GAP_SCANNER] Failed to fetch SpriteCollab data", error);
            throw error;
        }
    });
}
function parseMonsForms(monsters) {
    var _a, _b, _c;
    const spriteIndexMap = new Map();
    for (const monster of monsters) {
        for (const form of monster.forms) {
            const index = normalizePathToIndex(form.fullPath);
            if (!satisfiesPacCriteria(form, index)) {
                continue;
            }
            const hasPortrait = form.portraits.emotions.length > 0;
            const hasSprite = form.sprites.phase !== "INCOMPLETE";
            const normalPortrait = form.portraits.emotions.find((emotion) => emotion.emotion === "Normal");
            const portraitUrl = (_c = (_a = normalPortrait === null || normalPortrait === void 0 ? void 0 : normalPortrait.url) !== null && _a !== void 0 ? _a : (_b = form.portraits.emotions[0]) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : undefined;
            spriteIndexMap.set(index, {
                index,
                pkm: monster.name,
                formName: form.fullName,
                displayName: `${monster.name} - ${form.fullName}`,
                formPath: form.fullPath,
                portraitUrl,
                isShiny: form.isShiny,
                hasPortrait,
                hasSprite,
                canon: form.canon
            });
        }
    }
    return spriteIndexMap;
}
function compareIndexes(spriteIndexMap) {
    const pacIndexSet = getPacIndexSet();
    const spriteOnly = [];
    for (const [index, entry] of spriteIndexMap.entries()) {
        if (!pacIndexSet.has(index)) {
            spriteOnly.push(entry);
        }
    }
    return {
        spriteOnly,
        stats: {
            totalSpriteCollab: spriteIndexMap.size,
            lastRefresh: Date.now(),
            refreshDurationMs: 0
        }
    };
}
function refreshSpriteGapDataInternal() {
    return __awaiter(this, void 0, void 0, function* () {
        const startTime = Date.now();
        try {
            logger_1.logger.info("[SPRITE_GAP_SCANNER] Starting data refresh...");
            const mons = yield fetchSpriteCollabMons();
            logger_1.logger.info(`[SPRITE_GAP_SCANNER] Fetched ${mons.length} monsters from SpriteCollab`);
            const spriteIndexMap = parseMonsForms(mons);
            const result = compareIndexes(spriteIndexMap);
            result.stats.refreshDurationMs = Date.now() - startTime;
            cache = {
                data: result,
                timestamp: Date.now()
            };
            logger_1.logger.info(`[SPRITE_GAP_SCANNER] Refresh complete in ${result.stats.refreshDurationMs}ms: ` +
                `${result.spriteOnly.length} sprite-only`);
            return result;
        }
        catch (error) {
            logger_1.logger.error("[SPRITE_GAP_SCANNER] Refresh failed", error, "returning stale cache or empty result");
            if (cache) {
                return Object.assign(Object.assign({}, cache.data), { stats: Object.assign(Object.assign({}, cache.data.stats), { lastRefresh: cache.timestamp }) });
            }
            return {
                spriteOnly: [],
                stats: {
                    totalSpriteCollab: 0,
                    lastRefresh: Date.now(),
                    refreshDurationMs: Date.now() - startTime
                }
            };
        }
    });
}
function refreshSpriteGapData() {
    refreshSpriteGapDataInternal();
}
function getCachedSpriteGapData() {
    const now = Date.now();
    if (cache && now - cache.timestamp < CACHE_TTL_MS) {
        return cache.data;
    }
    if (!cache) {
        logger_1.logger.debug("[SPRITE_GAP_SCANNER] Cache miss, queuing refresh");
        refreshSpriteGapData();
        return {
            spriteOnly: [],
            stats: {
                totalSpriteCollab: 0,
                lastRefresh: 0,
                refreshDurationMs: 0
            }
        };
    }
    logger_1.logger.debug("[SPRITE_GAP_SCANNER] Cache stale, queuing refresh");
    refreshSpriteGapData();
    return Object.assign(Object.assign({}, cache.data), { stats: Object.assign(Object.assign({}, cache.data.stats), { lastRefresh: cache.timestamp }) });
}
function warmupSpriteGapScanner() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("[SPRITE_GAP_SCANNER] Warming up cache on startup...");
        try {
            yield refreshSpriteGapDataInternal();
            logger_1.logger.info("[SPRITE_GAP_SCANNER] Warmup complete");
        }
        catch (error) {
            logger_1.logger.error("[SPRITE_GAP_SCANNER] Warmup failed", error);
        }
    });
}
//# sourceMappingURL=sprite-gap-scanner.js.map