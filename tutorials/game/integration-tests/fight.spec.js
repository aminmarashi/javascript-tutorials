import Goblin from '../Goblin';
import Battle from '../Battle';

describe.skip('fight', () => {
  it('should battle and kill goblin', () => {
    const battle = new Battle('sword', 50);
    expect(battle.getStats()).toEqual('This is a sword that does 50 damage.');

    const goblin = new Goblin();
    expect(goblin.getMonsterStats()).toEqual(
      'This is a healthy goblin with 100 health points.'
    );

    battle.dealDamage(goblin);
    expect(goblin.getMonsterStats()).toEqual(
      'This is a wounded goblin with 50 health points.'
    );

    battle.dealDamage(goblin);
    expect(goblin.getMonsterStats()).toEqual('This is a dead goblin.');
  });
});
