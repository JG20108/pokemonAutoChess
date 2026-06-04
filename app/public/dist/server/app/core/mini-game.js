"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniGame = void 0;
const matter_js_1 = require("matter-js");
const config_1 = require("../config");
const floating_item_1 = require("../models/colyseus-models/floating-item");
const player_choice_1 = require("../models/colyseus-models/player-choice");
const pokemon_avatar_1 = require("../models/colyseus-models/pokemon-avatar");
const portal_1 = require("../models/colyseus-models/portal");
const synergies_1 = require("../models/colyseus-models/synergies");
const types_1 = require("../types");
const Dungeon_1 = require("../types/enum/Dungeon");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const Synergy_1 = require("../types/enum/Synergy");
const TownEncounter_1 = require("../types/enum/TownEncounter");
const array_1 = require("../utils/array");
const number_1 = require("../utils/number");
const orientation_1 = require("../utils/orientation");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const eggs_1 = require("./eggs");
const scribbles_1 = require("./scribbles");
const PLAYER_VELOCITY = 2;
const ITEM_ROTATION_SPEED = 0.0004;
const PORTAL_ROTATION_SPEED = 0.0003;
const SYMBOL_ROTATION_SPEED = 0.0006;
const CAROUSEL_RADIUS_X = 150;
const CAROUSEL_RADIUS_Y = 125;
const AVATAR_RADIUS = 25;
const NB_SYMBOLS_PER_PLAYER = 4;
class MiniGame {
    constructor(room) {
        this.symbolsByPortal = new Map();
        this.centerX = 335;
        this.centerY = 235;
        this.timeElapsed = 0;
        this.rotationDirection = 1;
        this.engine = matter_js_1.Engine.create({ gravity: { x: 0, y: 0 } });
        this.bodies = new Map();
        this.alivePlayers = [];
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(-50, -70, 2000, 40, {
            isStatic: true,
            restitution: 1
        }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(-70, 0, 40, 2000, {
            isStatic: true,
            restitution: 1
        }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(740, 0, 40, 2000, {
            isStatic: true,
            restitution: 1
        }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(-50, 540, 2000, 40, {
            isStatic: true,
            restitution: 1
        }));
        matter_js_1.Events.on(this.engine, "beforeUpdate", () => {
            var _a, _b;
            (_a = this.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                if (item.avatarId === "") {
                    const itemBody = this.bodies.get(item.id);
                    if (itemBody) {
                        const t = this.timeElapsed * ITEM_ROTATION_SPEED;
                        const x = this.centerX +
                            Math.cos(t + (Math.PI * 2 * item.index) / this.items.size) *
                                CAROUSEL_RADIUS_X;
                        const y = this.centerY +
                            Math.sin(t + (Math.PI * 2 * item.index) / this.items.size) *
                                CAROUSEL_RADIUS_Y;
                        matter_js_1.Body.setPosition(itemBody, { x, y });
                    }
                }
            });
            (_b = this.portals) === null || _b === void 0 ? void 0 : _b.forEach((portal) => {
                if (portal.avatarId === "") {
                    const portalBody = this.bodies.get(portal.id);
                    if (portalBody) {
                        const t = this.timeElapsed * PORTAL_ROTATION_SPEED;
                        const x = this.centerX +
                            Math.cos(t + (Math.PI * 2 * portal.index) / this.portals.size) *
                                CAROUSEL_RADIUS_X;
                        const y = this.centerY +
                            Math.sin(t + (Math.PI * 2 * portal.index) / this.portals.size) *
                                CAROUSEL_RADIUS_Y;
                        matter_js_1.Body.setPosition(portalBody, { x, y });
                    }
                }
            });
        });
        matter_js_1.Events.on(this.engine, "collisionStart", (event) => {
            event.pairs.forEach(({ bodyA, bodyB }) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                if ((((_a = this.items) === null || _a === void 0 ? void 0 : _a.has(bodyA.label)) && ((_b = this.avatars) === null || _b === void 0 ? void 0 : _b.has(bodyB.label))) ||
                    (((_c = this.avatars) === null || _c === void 0 ? void 0 : _c.has(bodyA.label)) && ((_d = this.items) === null || _d === void 0 ? void 0 : _d.has(bodyB.label)))) {
                    const avatarBody = ((_e = this.avatars) === null || _e === void 0 ? void 0 : _e.has(bodyA.label)) ? bodyA : bodyB;
                    const itemBody = ((_f = this.items) === null || _f === void 0 ? void 0 : _f.has(bodyA.label)) ? bodyA : bodyB;
                    const avatar = this.avatars.get(avatarBody.label);
                    const item = this.items.get(itemBody.label);
                    const encounter = room.state.townEncounter;
                    if ((avatar === null || avatar === void 0 ? void 0 : avatar.itemId) === "" && (item === null || item === void 0 ? void 0 : item.avatarId) === "") {
                        if (encounter && encounter in config_1.TownEncounterSellPrice) {
                            const player = room.state.players.get(avatar.id);
                            const client = room.clients.find((cli) => cli.auth.uid === avatar.id);
                            const price = room.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.TOWN_FESTIVAL
                                ? 0
                                : config_1.TownEncounterSellPrice[encounter];
                            if (((_g = player === null || player === void 0 ? void 0 : player.money) !== null && _g !== void 0 ? _g : 0) < price) {
                                client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.NPC_DIALOG, {
                                    npc: encounter,
                                    dialog: "tell_price",
                                    price: price
                                });
                                return;
                            }
                            else {
                                client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.NPC_DIALOG, {
                                    npc: encounter,
                                    dialog: "thank_you"
                                });
                                if (player) {
                                    player.money -= price;
                                }
                            }
                        }
                        const constraint = matter_js_1.Constraint.create({
                            bodyA: avatarBody,
                            bodyB: itemBody
                        });
                        matter_js_1.Composite.add(this.engine.world, constraint);
                        avatar.itemId = item.id;
                        item.avatarId = avatar.id;
                        itemBody.collisionFilter.mask = 0;
                        avatarBody.collisionFilter.mask = 0;
                        const player = this.alivePlayers.find((p) => p.id === avatar.id);
                        if (player && player.isBot) {
                            const i = this.alivePlayers.indexOf(player);
                            avatar.targetX =
                                this.centerX +
                                    Math.cos((2 * Math.PI * i) / this.alivePlayers.length) * 300;
                            avatar.targetY =
                                this.centerY +
                                    Math.sin((2 * Math.PI * i) / this.alivePlayers.length) * 250;
                        }
                    }
                }
                if ((((_h = this.portals) === null || _h === void 0 ? void 0 : _h.has(bodyA.label)) && ((_j = this.avatars) === null || _j === void 0 ? void 0 : _j.has(bodyB.label))) ||
                    (((_k = this.avatars) === null || _k === void 0 ? void 0 : _k.has(bodyA.label)) && ((_l = this.portals) === null || _l === void 0 ? void 0 : _l.has(bodyB.label)))) {
                    const avatarBody = ((_m = this.avatars) === null || _m === void 0 ? void 0 : _m.has(bodyA.label)) ? bodyA : bodyB;
                    const portalBody = ((_o = this.portals) === null || _o === void 0 ? void 0 : _o.has(bodyA.label)) ? bodyA : bodyB;
                    const avatar = this.avatars.get(avatarBody.label);
                    const portal = this.portals.get(portalBody.label);
                    if ((avatar === null || avatar === void 0 ? void 0 : avatar.portalId) === "" && (portal === null || portal === void 0 ? void 0 : portal.avatarId) === "") {
                        portal.avatarId = avatar.id;
                        avatar.portalId = portal.id;
                        matter_js_1.Composite.remove(this.engine.world, avatarBody);
                        matter_js_1.Composite.remove(this.engine.world, portalBody);
                        this.bodies.delete(avatar.id);
                        this.bodies.delete(portal.id);
                    }
                }
            });
        });
    }
    create(avatars, items, portals, symbols) {
        this.avatars = avatars;
        this.items = items;
        this.portals = portals;
        this.symbols = symbols;
    }
    initialize(state, room) {
        const { players, stageLevel } = state;
        this.timeElapsed = 0;
        this.rotationDirection = 1;
        if (stageLevel in config_1.TownEncountersByStage) {
            let encounter = (0, random_1.randomWeighted)(config_1.TownEncountersByStage[stageLevel], state.specialGameRule === SpecialGameRule_1.SpecialGameRule.TOWN_FESTIVAL ? undefined : 1);
            if (encounter != null &&
                state.townEncounters.has(encounter) &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.TOWN_FESTIVAL) {
                encounter = null;
            }
            state.townEncounter = encounter !== null && encounter !== void 0 ? encounter : null;
            if (encounter) {
                state.townEncounters.add(encounter);
                const body = matter_js_1.Bodies.circle(this.centerX, this.centerY, 20, {
                    isStatic: true,
                    collisionFilter: {
                        mask: 1
                    }
                });
                matter_js_1.Composite.add(this.engine.world, body);
                this.bodies.set("encounter", body);
            }
        }
        else {
            state.townEncounter = null;
        }
        this.alivePlayers = new Array();
        players.forEach((p) => {
            if (p.alive) {
                this.alivePlayers.push(p);
            }
        });
        this.alivePlayers.forEach((player, i) => {
            const x = this.centerX +
                Math.cos((2 * Math.PI * i) / this.alivePlayers.length) * 300;
            const y = this.centerY +
                Math.sin((2 * Math.PI * i) / this.alivePlayers.length) * 250;
            let retentionDelay = (state.townEncounter ? 10000 : 5000) +
                (this.alivePlayers.length - player.rank) * 2000;
            if (stageLevel === 0) {
                retentionDelay = 12000;
            }
            else if (config_1.PortalCarouselStages.includes(stageLevel)) {
                retentionDelay = 8000;
            }
            else if (stageLevel < 5) {
                retentionDelay = state.townEncounter ? 10000 : 5000;
            }
            if (player.isBot) {
                retentionDelay += (0, random_1.randomBetween)(1000, 6000);
            }
            const avatar = new pokemon_avatar_1.PokemonAvatarModel(player.id, player.avatar, x, y, retentionDelay);
            if (player.isBot) {
                avatar.targetX =
                    this.centerX +
                        Math.cos((2 * Math.PI * i) / this.alivePlayers.length) *
                            CAROUSEL_RADIUS_X;
                avatar.targetY =
                    this.centerY +
                        Math.sin((2 * Math.PI * i) / this.alivePlayers.length) *
                            CAROUSEL_RADIUS_Y;
            }
            this.avatars.set(avatar.id, avatar);
            const body = matter_js_1.Bodies.circle(x, y, AVATAR_RADIUS);
            body.label = avatar.id;
            body.collisionFilter.mask = 0;
            this.bodies.set(avatar.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        });
        if (config_1.PortalCarouselStages.includes(stageLevel)) {
            this.initializePortalCarousel(stageLevel, room);
            room.broadcast(types_1.Transfer.PRELOAD_MAPS, (0, schemas_1.schemaValues)(this.portals).map((p) => p.map));
        }
        else if (config_1.ItemCarouselStages.includes(stageLevel)) {
            this.initializeItemsCarousel(state);
        }
        if (state.townEncounter === TownEncounter_1.TownEncounters.SPINDA) {
            this.rotationDirection = (0, random_1.chance)(1 / 2) ? 1.5 : -1.5;
            for (let i = 0; i < (0, random_1.randomBetween)(1, 3); i++) {
                room.clock.setTimeout(() => {
                    room.broadcast(types_1.Transfer.NPC_DIALOG, {
                        npc: TownEncounter_1.TownEncounters.SPINDA
                    });
                    this.rotationDirection *= -1;
                }, (0, random_1.randomBetween)(5000, 14000));
            }
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.REGIROCK) {
            this.alivePlayers.forEach((player) => {
                player.life += 15;
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.WOBBUFFET) {
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.RECYCLE_TICKET);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.CROAGUNK) {
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.EXCHANGE_TICKET);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.MUNCHLAX) {
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.PICNIC_SET);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.XATU) {
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.TREASURE_BOX);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.MAKUHITA) {
            const ticket = state.stageLevel >= 15
                ? Item_1.Item.GOLD_DOJO_TICKET
                : state.stageLevel >= 10
                    ? Item_1.Item.SILVER_DOJO_TICKET
                    : Item_1.Item.BRONZE_DOJO_TICKET;
            this.alivePlayers.forEach((player) => {
                player.items.push(ticket);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.MAGNEZONE) {
            state.outlawStage = (0, random_1.randomBetween)(5, 15);
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.WANTED_NOTICE);
            });
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.KINGAMBIT) {
            const highestLifePlayer = this.alivePlayers.reduce((prev, current) => prev.life > current.life ? prev : current);
            highestLifePlayer.items.push(Item_1.Item.LEADERS_CREST);
        }
        else if (state.townEncounter === TownEncounter_1.TownEncounters.LAPRAS) {
            this.alivePlayers.forEach((player) => {
                player.items.push(Item_1.Item.LAPRAS_PASSPORT);
            });
        }
    }
    initializeItemsCarousel(state) {
        var _a;
        const items = this.pickRandomItems(state);
        for (let j = 0; j < items.length; j++) {
            const x = this.centerX + Math.cos((Math.PI * 2 * j) / items.length) * 100;
            const y = this.centerY + Math.sin((Math.PI * 2 * j) / items.length) * 90;
            const name = items[j];
            const floatingItem = new floating_item_1.FloatingItem(name, x, y, j);
            (_a = this.items) === null || _a === void 0 ? void 0 : _a.set(floatingItem.id, floatingItem);
            const body = matter_js_1.Bodies.circle(x, y, 20);
            body.label = floatingItem.id;
            body.isSensor = true;
            this.bodies.set(floatingItem.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        }
    }
    initializePortalCarousel(stageLevel, room) {
        var _a;
        const nbPortals = (0, number_1.clamp)(this.alivePlayers.length + 1, 3, 9);
        for (let i = 0; i < nbPortals; i++) {
            const x = this.centerX + Math.cos((Math.PI * 2 * i) / nbPortals) * 115;
            const y = this.centerY + Math.sin((Math.PI * 2 * i) / nbPortals) * 115;
            const portal = new portal_1.Portal(x, y, i);
            (_a = this.portals) === null || _a === void 0 ? void 0 : _a.set(portal.id, portal);
            const body = matter_js_1.Bodies.circle(x, y, 30);
            body.label = portal.id;
            body.isSensor = true;
            this.bodies.set(portal.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        }
        this.pickRandomSynergySymbols(stageLevel, room);
    }
    update(dt) {
        var _a;
        this.timeElapsed += dt * this.rotationDirection;
        matter_js_1.Engine.update(this.engine, dt);
        (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.forEach((a) => {
            if (a.timer > 0) {
                a.timer = a.timer - dt;
            }
        });
        this.bodies.forEach((body, id) => {
            var _a, _b, _c, _d;
            if (body.position.x < 0 ||
                body.position.x > 720 ||
                body.position.y < 0 ||
                body.position.y > 590) {
                matter_js_1.Body.setPosition(body, {
                    x: (0, number_1.clamp)(body.position.x, -50 + AVATAR_RADIUS, 740 - AVATAR_RADIUS),
                    y: (0, number_1.clamp)(body.position.y, -70 + AVATAR_RADIUS, 540 - AVATAR_RADIUS)
                });
            }
            if ((_a = this.avatars) === null || _a === void 0 ? void 0 : _a.has(id)) {
                const avatar = this.avatars.get(id);
                avatar.x = body.position.x;
                avatar.y = body.position.y;
                this.updatePlayerVector(id);
            }
            else if ((_b = this.items) === null || _b === void 0 ? void 0 : _b.has(id)) {
                const item = this.items.get(id);
                item.x = body.position.x;
                item.y = body.position.y;
            }
            else if ((_c = this.portals) === null || _c === void 0 ? void 0 : _c.has(id)) {
                const portal = this.portals.get(id);
                portal.x = body.position.x;
                portal.y = body.position.y;
                const symbols = (_d = this.symbolsByPortal.get(portal.id)) !== null && _d !== void 0 ? _d : [];
                symbols.forEach((symbol) => {
                    symbol.x =
                        portal.x +
                            Math.cos(this.timeElapsed * SYMBOL_ROTATION_SPEED +
                                (Math.PI * 2 * symbol.index) / symbols.length) *
                                25;
                    symbol.y =
                        portal.y +
                            Math.sin(this.timeElapsed * SYMBOL_ROTATION_SPEED +
                                (Math.PI * 2 * symbol.index) / symbols.length) *
                                25;
                });
            }
        });
    }
    pickRandomItems(state) {
        const stageLevel = state.stageLevel;
        const encounter = state.townEncounter;
        const items = [];
        let nbItemsToPick = (0, number_1.clamp)(this.alivePlayers.length + 3, 5, 9);
        let maxCopiesPerItem = 2;
        let itemsSet = Item_1.ItemComponentsNoFossilOrScarf;
        if (stageLevel >= 20) {
            nbItemsToPick += 1;
            maxCopiesPerItem = 1;
            itemsSet = Item_1.CraftableItemsNoScarves;
        }
        if (encounter === TownEncounter_1.TownEncounters.KECLEON) {
            const topSynergies = (0, schemas_1.schemaValues)(state.players).flatMap((p) => p.synergies.getTopSynergies(3));
            itemsSet = types_1.SynergyItems.filter((i) => !(0, array_1.isIn)(types_1.MemoryDiscs, i) &&
                i !== Item_1.Item.SHINY_STONE &&
                (0, array_1.isIn)(topSynergies, types_1.SynergyGivenByItem[i]));
            maxCopiesPerItem = 2;
        }
        if (encounter === TownEncounter_1.TownEncounters.KANGASKHAN) {
            itemsSet = Item_1.CraftableNoStonesOrScarves;
            maxCopiesPerItem = 1;
        }
        if (encounter === TownEncounter_1.TownEncounters.ELECTIVIRE) {
            itemsSet = Item_1.Tools;
            maxCopiesPerItem = 2;
        }
        if (encounter === TownEncounter_1.TownEncounters.CHANSEY) {
            itemsSet = [Item_1.Item.EGG_FOR_SELL];
            nbItemsToPick = this.alivePlayers.length;
            maxCopiesPerItem = 99;
        }
        if (encounter === TownEncounter_1.TownEncounters.DUSKULL) {
            items.push(Item_1.Item.GIMMIGHOUL_COIN, Item_1.Item.GIMMIGHOUL_COIN, Item_1.Item.GIMMIGHOUL_COIN, Item_1.Item.GIMMIGHOUL_COIN);
        }
        if (encounter === TownEncounter_1.TownEncounters.MEOWTH) {
            items.push(Item_1.Item.AMULET_COIN, Item_1.Item.AMULET_COIN, Item_1.Item.AMULET_COIN, Item_1.Item.AMULET_COIN);
        }
        if (encounter === TownEncounter_1.TownEncounters.CINCCINO) {
            items.push(Item_1.Item.SILK_SCARF, Item_1.Item.SILK_SCARF, Item_1.Item.SILK_SCARF, Item_1.Item.SILK_SCARF);
        }
        if (encounter === TownEncounter_1.TownEncounters.LUDICOLO) {
            items.push(Item_1.Item.AQUA_MONICA, Item_1.Item.FIERY_DRUM, Item_1.Item.GRASS_CORNET, Item_1.Item.ICY_FLUTE, Item_1.Item.ROCK_HORN, Item_1.Item.SKY_MELODICA, Item_1.Item.TERRA_CYMBAL);
            nbItemsToPick -= 3;
        }
        if (encounter === TownEncounter_1.TownEncounters.SABLEYE) {
            items.push(...(0, random_1.pickNRandomIn)(Item_1.SynergyGems, 4));
        }
        for (let j = 0; j < nbItemsToPick; j++) {
            let item, count, tries = 0;
            do {
                item = (0, random_1.pickRandomIn)(itemsSet);
                count = items.filter((i) => i === item).length;
                tries++;
            } while (count >= maxCopiesPerItem && tries < 10);
            items.push(item);
        }
        if (itemsSet === Item_1.CraftableItemsNoScarves) {
            while (items.filter((i) => (0, array_1.isIn)(Item_1.SynergyStones, i)).length > 4) {
                const index = items.findIndex((i) => (0, array_1.isIn)(Item_1.SynergyStones, i));
                items[index] = (0, random_1.pickRandomIn)(Item_1.CraftableNoStonesOrScarves);
            }
        }
        else if (itemsSet === Item_1.ItemComponentsNoFossilOrScarf && (0, random_1.chance)(0.4)) {
            items.push(Item_1.Item.FOSSIL_STONE);
        }
        return (0, random_1.shuffleArray)(items);
    }
    pickRandomSynergySymbols(stageLevel, room) {
        var _a, _b, _c, _d;
        if (stageLevel === 0) {
            const symbols = (0, random_1.pickNRandomIn)(Synergy_1.SynergyArray, 3 * (((_b = (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.size) !== null && _b !== void 0 ? _b : 8) + 1));
            symbols.forEach((type, i) => {
                var _a;
                const symbol = new portal_1.SynergySymbol(this.centerX, this.centerY, type, i);
                (_a = this.symbols) === null || _a === void 0 ? void 0 : _a.set(symbol.id, symbol);
            });
        }
        else {
            (_c = this.avatars) === null || _c === void 0 ? void 0 : _c.forEach((avatar) => {
                const player = this.alivePlayers.find((p) => p.id === avatar.id);
                const synergiesUsable = Object.values(Synergy_1.Synergy).filter((type) => {
                    if (type === Synergy_1.Synergy.BABY && stageLevel === 20)
                        return false;
                    return true;
                });
                const synergiesTriggerLevels = Array.from(player.synergies)
                    .filter(([type, value]) => synergiesUsable.includes(type))
                    .map(([type, value]) => {
                    let levelReached = (0, synergies_1.getSynergyStep)(player.synergies, type);
                    if (type === Synergy_1.Synergy.LIGHT) {
                        levelReached = [0, 1, 1, 2, 3][levelReached];
                    }
                    if (type === Synergy_1.Synergy.FLORA) {
                        levelReached = [0, 1, 2, 3, 3][levelReached];
                    }
                    if (stageLevel === 20 && type === Synergy_1.Synergy.GOURMET) {
                        levelReached = (0, number_1.max)(2)(levelReached);
                    }
                    return [type, levelReached];
                })
                    .sort(([typeA, stepA], [typeB, stepB]) => {
                    var _a, _b;
                    const levelA = (_a = player.synergies.get(typeA)) !== null && _a !== void 0 ? _a : 0;
                    const levelB = (_b = player.synergies.get(typeB)) !== null && _b !== void 0 ? _b : 0;
                    if (stepA !== stepB) {
                        return stepB - stepA;
                    }
                    else if (levelA !== levelB) {
                        return levelB - levelA;
                    }
                    else {
                        return Synergy_1.SynergyArray.indexOf(typeB) - Synergy_1.SynergyArray.indexOf(typeA);
                    }
                });
                let candidatesSymbols = [];
                const MIN_SYMBOLS_POOL_SIZE = 4;
                const MAX_SYMBOLS_POOL_SIZE = 7;
                const MAX_SYMBOLS_OF_THE_SAME_TYPE = this.alivePlayers.length;
                const getNbOfType = (type) => candidatesSymbols.filter((t) => t === type).length;
                synergiesTriggerLevels.forEach(([type, level]) => {
                    if (getNbOfType(type) >= MAX_SYMBOLS_OF_THE_SAME_TYPE)
                        return;
                    candidatesSymbols.push(...new Array(level).fill(type));
                });
                if (candidatesSymbols.length < MIN_SYMBOLS_POOL_SIZE) {
                    const incompleteSynergies = synergiesTriggerLevels
                        .filter(([type, level]) => level === 0 &&
                        player.synergies.get(type) > 0 &&
                        getNbOfType(type) < MAX_SYMBOLS_OF_THE_SAME_TYPE)
                        .map(([type, _level]) => type);
                    candidatesSymbols.push(...(0, random_1.pickNRandomIn)(incompleteSynergies, MIN_SYMBOLS_POOL_SIZE - candidatesSymbols.length));
                }
                while (candidatesSymbols.length < MIN_SYMBOLS_POOL_SIZE) {
                    candidatesSymbols.push((0, random_1.pickRandomIn)(synergiesUsable.filter((type) => getNbOfType(type) < MAX_SYMBOLS_OF_THE_SAME_TYPE)));
                }
                candidatesSymbols = candidatesSymbols.slice(0, MAX_SYMBOLS_POOL_SIZE);
                const symbols = (0, random_1.pickNRandomIn)(candidatesSymbols, NB_SYMBOLS_PER_PLAYER);
                symbols.forEach((type, i) => {
                    var _a;
                    const symbol = new portal_1.SynergySymbol(avatar.x, avatar.y, type, i);
                    (_a = this.symbols) === null || _a === void 0 ? void 0 : _a.set(symbol.id, symbol);
                });
            });
        }
        const portalIds = (0, random_1.shuffleArray)((0, schemas_1.schemaKeys)(this.portals));
        const symbols = (0, random_1.shuffleArray)((0, schemas_1.schemaValues)(this.symbols));
        this.symbolsByPortal = new Map();
        symbols.forEach((symbol, i) => {
            var _a;
            const portalId = portalIds[i % portalIds.length];
            this.symbolsByPortal.set(portalId, [
                ...((_a = this.symbolsByPortal.get(portalId)) !== null && _a !== void 0 ? _a : []),
                symbol
            ]);
            room.clock.setTimeout(() => {
                symbol.index = Math.floor(i / portalIds.length);
                symbol.portalId = portalId;
            }, 1500 * (i / symbols.length));
        });
        const maps = new Set(Object.values(Dungeon_1.DungeonPMDO));
        (_d = this.portals) === null || _d === void 0 ? void 0 : _d.forEach((portal) => {
            const symbols = this.symbolsByPortal.get(portal.id);
            const portalSynergies = (symbols !== null && symbols !== void 0 ? symbols : []).map((s) => s.synergy);
            let nbMaxInCommon = 0, candidateMaps = [];
            maps.forEach((map) => {
                const synergies = config_1.RegionDetails[map].synergies;
                const inCommon = synergies.filter((s) => portalSynergies.includes(s));
                if (inCommon.length > nbMaxInCommon) {
                    nbMaxInCommon = inCommon.length;
                    candidateMaps = [map];
                }
                else if (inCommon.length === nbMaxInCommon) {
                    candidateMaps.push(map);
                }
            });
            portal.map = (0, random_1.pickRandomIn)(candidateMaps);
            maps.delete(portal.map);
        });
    }
    applyVector(id, x, y) {
        var _a;
        const avatar = (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.get(id);
        if (avatar && avatar.timer <= 0) {
            avatar.targetX = avatar.x + x;
            avatar.targetY = avatar.y - y;
            this.updatePlayerVector(id);
        }
    }
    updatePlayerVector(id) {
        var _a;
        const avatar = (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.get(id);
        const body = this.bodies.get(id);
        if (body && avatar && avatar.timer <= 0) {
            if (!avatar.itemId) {
                body.collisionFilter.mask = 1;
            }
            const distanceToTarget = Math.sqrt((avatar.targetX - avatar.x) ** 2 + (avatar.targetY - avatar.y) ** 2);
            if (distanceToTarget > PLAYER_VELOCITY) {
                avatar.action = Game_1.PokemonActionState.WALK;
                let moveVector = matter_js_1.Vector.sub(matter_js_1.Vector.create(avatar.targetX, avatar.targetY), matter_js_1.Vector.create(avatar.x, avatar.y));
                avatar.orientation = (0, orientation_1.getOrientation)(0, 0, moveVector.x, -1 * moveVector.y);
                moveVector = matter_js_1.Vector.normalise(moveVector);
                moveVector = matter_js_1.Vector.mult(moveVector, PLAYER_VELOCITY);
                matter_js_1.Body.setVelocity(body, moveVector);
            }
            else {
                avatar.action = Game_1.PokemonActionState.IDLE;
                matter_js_1.Body.setVelocity(body, matter_js_1.Vector.create(0, 0));
            }
        }
    }
    stop(state) {
        const players = state.players;
        const encounter = state.townEncounter;
        this.bodies.forEach((body, key) => {
            matter_js_1.Composite.remove(this.engine.world, body);
            this.bodies.delete(key);
        });
        this.avatars.forEach((avatar) => {
            var _a, _b, _c, _d;
            const player = players.get(avatar.id);
            if (avatar.itemId === "" &&
                player &&
                !player.isBot &&
                this.items &&
                !(encounter &&
                    encounter in config_1.TownEncounterSellPrice &&
                    state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.TOWN_FESTIVAL)) {
                const remainingItems = [...this.items.entries()].filter(([_itemId, item]) => item.avatarId === "");
                if (remainingItems.length > 0) {
                    avatar.itemId = (0, random_1.pickRandomIn)(remainingItems)[0];
                }
            }
            if (avatar.portalId === "") {
                avatar.portalId = "random";
                if (state.stageLevel === 0 && this.portals) {
                    avatar.portalId = (0, random_1.pickRandomIn)((0, schemas_1.schemaValues)(this.portals).filter((p) => p.avatarId === "")).id;
                }
            }
            if (avatar.itemId) {
                const item = (_a = this.items) === null || _a === void 0 ? void 0 : _a.get(avatar.itemId);
                if (item && player && !player.isBot) {
                    if (item.name === Item_1.Item.EGG_FOR_SELL) {
                        (0, eggs_1.giveRandomEgg)(player, false);
                    }
                    else if (item.name === Item_1.Item.GIMMIGHOUL_COIN) {
                        player.items.push(item.name);
                        player.addMoney(5, true, null);
                    }
                    else if ((0, array_1.isIn)(Item_1.SynergyGems, item.name)) {
                        const type = Item_1.SynergyGivenByGem[item.name];
                        player.bonusSynergies.set(type, ((_b = player.bonusSynergies.get(type)) !== null && _b !== void 0 ? _b : 0) + 1);
                        player.items.push(item.name);
                        player.updateSynergies();
                    }
                    else {
                        player.items.push(item.name);
                    }
                }
            }
            if (player && config_1.PortalCarouselStages.includes(state.stageLevel)) {
                if (avatar.portalId && ((_c = this.portals) === null || _c === void 0 ? void 0 : _c.has(avatar.portalId))) {
                    const portal = this.portals.get(avatar.portalId);
                    if (portal.map !== player.map) {
                        const previousMap = player.map;
                        player.map = portal.map;
                        player.regions.push(portal.map);
                        player.updateRegionalPool(state, true, previousMap);
                        const newBerryTreeTypes = (0, random_1.pickNRandomIn)(Item_1.NonSpecialBerries, 3);
                        for (let i = 0; i < player.berryTreesType.length; i++) {
                            player.berryTreesType[i] = newBerryTreeTypes[i];
                            player.berryTreesStages[i] = 0;
                        }
                    }
                }
                const symbols = (_d = this.symbolsByPortal.get(avatar.portalId)) !== null && _d !== void 0 ? _d : [];
                const portalSynergies = symbols.map((s) => s.synergy);
                if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.DO_IT_ALL_YOURSELF &&
                    state.stageLevel === 0) {
                    const avatar = (0, scribbles_1.spawnDIAYAvatar)(player);
                    player.board.set(avatar.id, avatar);
                    avatar.onAcquired(player);
                }
                else {
                    state.shop.assignUniquePropositions(player, state, portalSynergies);
                }
            }
            this.avatars.delete(avatar.id);
        });
        if (this.items) {
            this.items.forEach((item) => {
                this.items.delete(item.id);
            });
        }
        if (this.portals) {
            this.portals.forEach((portal) => {
                this.portals.delete(portal.id);
            });
        }
        if (this.symbols) {
            this.symbols.forEach((symbol) => {
                this.symbols.delete(symbol.id);
            });
        }
        if (state.townEncounter === TownEncounter_1.TownEncounters.WIGGLYTUFF) {
            const candidateMissions = Item_1.MissionOrders.filter((m) => state.shinyEncounter ? m !== Item_1.Item.MISSION_ORDER_GOLD : true);
            this.alivePlayers.forEach((player) => {
                player.choices.push(new player_choice_1.PlayerChoice({
                    type: "mission_order",
                    items: (0, random_1.pickNRandomIn)(candidateMissions, 3)
                }));
            });
        }
    }
}
exports.MiniGame = MiniGame;
//# sourceMappingURL=mini-game.js.map