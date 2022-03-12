import { MarketingExpert } from '../receivers-workers';
import { Command } from './command.interface';

export class AdvertizeCommand implements Command {
    constructor(private marketingExpert: MarketingExpert) {
    }

    execute(): void {
        this.marketingExpert.startAdvertizing();
    }

    stop(): void {
        this.marketingExpert.stopAdvertizing();
    }
}