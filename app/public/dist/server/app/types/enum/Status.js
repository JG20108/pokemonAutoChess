"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositiveStatuses = exports.Status = void 0;
var Status;
(function (Status) {
    Status["BURN"] = "BURN";
    Status["SILENCE"] = "SILENCE";
    Status["FATIGUE"] = "FATIGUE";
    Status["POISONNED"] = "POISONNED";
    Status["FREEZE"] = "FREEZE";
    Status["PROTECT"] = "PROTECT";
    Status["SLEEP"] = "SLEEP";
    Status["CONFUSION"] = "CONFUSION";
    Status["CHARM"] = "CHARM";
    Status["FLINCH"] = "FLINCH";
    Status["WOUND"] = "WOUND";
    Status["RAGE"] = "RAGE";
    Status["RESURRECTION"] = "RESURRECTION";
    Status["RESURRECTING"] = "RESURRECTING";
    Status["PARALYSIS"] = "PARALYSIS";
    Status["POKERUS"] = "POKERUS";
    Status["ARMOR_BREAK"] = "ARMOR_BREAK";
    Status["RUNE_PROTECT"] = "RUNE_PROTECT";
    Status["CURSE"] = "CURSE";
    Status["ELECTRIC_FIELD"] = "ELECTRIC_FIELD";
    Status["PSYCHIC_FIELD"] = "PSYCHIC_FIELD";
    Status["GRASS_FIELD"] = "GRASS_FIELD";
    Status["FAIRY_FIELD"] = "FAIRY_FIELD";
    Status["SPIKY_SHIELD"] = "SPIKY_SHIELD";
    Status["MAGIC_BOUNCE"] = "MAGIC_BOUNCE";
    Status["REFLECT"] = "REFLECT";
    Status["LOCKED"] = "LOCKED";
    Status["POSSESSED"] = "POSSESSED";
    Status["BLINDED"] = "BLINDED";
})(Status || (exports.Status = Status = {}));
exports.PositiveStatuses = [
    Status.POKERUS,
    Status.RESURRECTION,
    Status.RUNE_PROTECT,
    Status.PROTECT,
    Status.ELECTRIC_FIELD,
    Status.PSYCHIC_FIELD,
    Status.GRASS_FIELD,
    Status.FAIRY_FIELD,
    Status.SPIKY_SHIELD,
    Status.MAGIC_BOUNCE,
    Status.REFLECT,
    Status.RAGE
];
//# sourceMappingURL=Status.js.map