import { Command } from './command.interface';

export class MacroCommand implements Command {
    constructor(private commands: Array<Command>) {
    }

    execute(): void {
        this.commands.forEach(command => command.execute());
    }

    stop(): void {
        this.commands.forEach(command => command.stop());
    }
}