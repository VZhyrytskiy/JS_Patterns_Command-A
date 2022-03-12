import { Command } from './command.interface';

export class NoCommand implements Command {
    execute(): void { }
    undo(): void {}
}