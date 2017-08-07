//
import Monster from '../Monster';

const maxHP = 100;

export default class Goblin extends Monster {
  constructor(hp) {
    super('Goblin', hp);
  }
  getMonsterStats() {
    if (this.hp === maxHP)
      return `This is a healthy goblin with ${maxHP} health points.`
    if (!this.hp)
      return 'This is a dead goblin.'
    return `This is a wounded goblin with ${this.hp} health points.`
  }
}
