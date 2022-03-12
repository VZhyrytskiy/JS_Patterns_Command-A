export interface Command {
    execute(): void;
    stop(): void;
}