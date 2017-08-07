//
import Monster from '../Monster';

export default class Goblin extends Monster {
  constructor(hp) {
    super('Goblin', hp);
    this.maxHP = hp;
  }
  getMonsterStats() {
    if (this.hp === this.maxHP)
      return `This is a healthy goblin with ${this.hp} health points.`
    if (!this.hp)
      return 'This is a dead goblin.'
    return `This is a wounded goblin with ${this.hp} health points.`
  }
}
