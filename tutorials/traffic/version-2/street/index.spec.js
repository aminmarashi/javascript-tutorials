import { localPedestrian, badPedestrain, foreignerPedestrian } from '../mock';
import train from '../train';
import street from './';

describe('street', () => {
  it("should guarantee the pedestrians' safety on their good behavior", () => {
    expect(street(localPedestrian)).not.toThrow();
  });
  it('foreigner pedestrians without training are doomed', () => {
    expect(street(foreignerPedestrian)).toThrow(/kill/);
  });
  it('foreigner pedestrians with training must be safe', () => {
    expect(street(train(foreignerPedestrian))).not.toThrow();
  });
  it('bad pedestrians are doomed', () => {
    expect(street(badPedestrain)).toThrow(/kill/);
  });
});
