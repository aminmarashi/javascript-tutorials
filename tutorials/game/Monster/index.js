//
export default class Monster {
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
