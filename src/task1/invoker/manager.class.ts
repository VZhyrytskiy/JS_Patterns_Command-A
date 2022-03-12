import { Command } from "../commands";

export class Manager {
    command!: Command;

    setCommand(c: Command): void {
        this.command = c;
    }

    start(): this {
        this.command?.execute();
        return this;
    }

    stop(): this {
        this.command?.stop();
        return this;
    }
}