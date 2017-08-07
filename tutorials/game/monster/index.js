export class Monster {
    constructor(type, hp = 100) {
        this.type = type;
        this.hp = hp;
    }
    getMonsterStats() {
        return `This is an enemy of type ${this.type} with ${this.hp} health points.`
    }
    getHP() {
        return this.hp;
    }
    setHP(hp) {
        this.hp = hp;
    }
}

export class Goblin extends Monster {
    constructor(hp) {
        super('goblin', hp);
    }
    getMonsterStats() {
        if (this.hp === 0) {
            return `This is a dead goblin.`
        } else if (this.hp <= 50) {
            return `This is a wounded goblin with ${this.hp} health points.`
        } else {
            return `This is a healthy goblin with ${this.hp} health points.`
        }
    }
}
