export class Battle {
    constructor(type, damage = 10) {
        this.type = type;
        this.damage = damage;
    }
    getStats() {
        return `This is a ${this.type} that does ${this.damage} damage.`
    }
    dealDamage(enemy) {
        enemy.setHP(+enemy.getHP() - +this.damage);
    }
}
