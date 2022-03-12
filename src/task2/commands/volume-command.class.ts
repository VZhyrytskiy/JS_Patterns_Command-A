import { Volume } from '../receiver-workers';
import { Command } from './command.interface';

export class VolumeCommand implements Command {

    constructor(private volume: Volume) {}

    execute(): void {
        this.volume.raiseLevel();
    }

    undo(): void {
        this.volume.dropLevel();
    }
}