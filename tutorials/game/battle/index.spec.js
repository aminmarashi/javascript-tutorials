import { Battle } from './';

describe.skip('battle', () => {
  it('should return the stats of the battle instrument', () => {
    let battle = new Battle('gun');
    expect(battle.getStats()).toEqual('This is a gun that does 10 damage.');

    battle = new Battle('shuriken', 5);
    expect(battle.getStats()).toEqual('This is a shuriken that does 5 damage.');
  });
});
