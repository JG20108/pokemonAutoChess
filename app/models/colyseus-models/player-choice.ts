import { Schema, type } from "@colyseus/schema"
import { Item } from "../../types/enum/Item"
import { PkmProposition } from "../../types/enum/Pokemon"
import { Synergy } from "../../types/enum/Synergy"

export type PlayerChoiceType =
  | "item"
  | "addPick"
  | "starter"
  | "unique"
  | "legendary"
  | "mission_order"
  | "wand"
  | "synergy"

export class PlayerChoice extends Schema {
  @type("string") id: string
  @type("string") type: PlayerChoiceType
  @type(["string"]) items: Item[] = []
  @type(["string"]) pokemons: PkmProposition[] = []
  @type(["string"]) synergies: Synergy[] = []

  constructor(args: {
    type: PlayerChoiceType
    items?: Item[]
    pokemons?: PkmProposition[]
    synergies?: Synergy[]
  }) {
    super()
    this.id = crypto.randomUUID()
    this.type = args.type
    if (args.items) this.items = args.items
    if (args.pokemons) this.pokemons = args.pokemons
    if (args.synergies) this.synergies = args.synergies
  }
}
