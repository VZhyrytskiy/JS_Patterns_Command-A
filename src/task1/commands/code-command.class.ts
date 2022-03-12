import { SoftwareEngineer } from '../receivers-workers';
import { Command } from './command.interface';

export class CodeCommand implements Command {
    constructor(private softwareEngineer: SoftwareEngineer) {
    }

    execute(): void {
        this.softwareEngineer.startCodding();
    }

    stop(): void {
        this.softwareEngineer.stopCodding();
    }
}