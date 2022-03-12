export class Volume {
    off = 0;
    high = 20;

    private level: number;

    constructor() {
        this.level = this.off;
    }

    raiseLevel(): void {
        if (this.level < this.high) {
            this.level++;
            console.log(`Уровень звука ${this.level}`);
        }
    }

    dropLevel(): void {
        if (this.level > this.off) {
            this.level--;
            console.log(`Уровень звука ${this.level}`);
        }
    }
}