import { TV } from '../receiver-workers';
import { Command } from './command.interface';

export class TVCommand implements Command {

    constructor(private tv: TV) { }

    execute(): void {
        this.tv.on();
    }

    undo(): void {
        this.tv.off();
    }
}