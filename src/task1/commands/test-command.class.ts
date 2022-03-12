import { SoftwareTestingEngineer } from '../receivers-workers';
import { Command } from './command.interface';

export class TestCommand implements Command {
    constructor(private softwareTestingEngineer: SoftwareTestingEngineer) {
    }

    execute(): void {
        this.softwareTestingEngineer.startTesting();
    }

    stop(): void {
        this.softwareTestingEngineer.stopTesting();
    }
}