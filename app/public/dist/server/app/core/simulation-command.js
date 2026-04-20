"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackCommand = exports.DelayedCommand = exports.SimulationCommand = void 0;
class SimulationCommand {
    constructor(delay) {
        this.executed = false;
        this.delay = delay;
    }
    execute() { }
    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) {
            this.execute();
            this.executed = true;
        }
    }
}
exports.SimulationCommand = SimulationCommand;
class DelayedCommand extends SimulationCommand {
    constructor(delayedFunction, delay) {
        super(delay);
        this.delayedFunction = delayedFunction;
    }
    execute() {
        super.execute();
        this.delayedFunction();
    }
}
exports.DelayedCommand = DelayedCommand;
class AttackCommand extends SimulationCommand {
    constructor(delay, pokemon, target, board) {
        super(delay);
        this.pokemon = pokemon;
        this.board = board;
        this.target = target;
    }
    execute() {
        if (this.pokemon.canAttack) {
            this.pokemon.state.attack(this.pokemon, this.board, this.target);
        }
    }
}
exports.AttackCommand = AttackCommand;
//# sourceMappingURL=simulation-command.js.map