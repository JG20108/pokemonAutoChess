import { Ability } from "../enum/Ability";
export type DisplayText = `ability.${Ability}` | "fully_grown" | "belly_full" | "not_hungry" | "full" | "already_held";
