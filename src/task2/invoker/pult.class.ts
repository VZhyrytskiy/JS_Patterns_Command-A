import { Command, NoCommand } from './../commands';

export class Pult {
    buttons: Command[] = [];
    commandsHistory: Array<Command> = [];

    constructor() {
        for (let i = 0; i < 2; i++) {
            this.buttons[i] = new NoCommand();
        }
    }

    setCommand(i: number, command: Command) {
        this.buttons[i] = command;
    }

    pressButton(i: number): void {
        this.buttons[i].execute();
        this.commandsHistory.push(this.buttons[i]);
    }

    pressUndoButton() {
        if (this.commandsHistory.length > 0) {
            const undoCommand = this.commandsHistory.pop();
            undoCommand?.undo();
        }
    }

}