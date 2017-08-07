//
const damage = 50;
export default class Battle {
  constructor(weapon, damage = 10) {
    this.weapon = weapon;
    this.damage = damage;
  }
  getStats() {
    return `This is a ${this.weapon} that does ${this.damage} damage.`;
  }
  dealDamage(monster) {
    const hp = monster.getHP();
    monster.setHP(hp - damage);
  }
}
