import { localPedestrian, badPedestrain, foreignerPedestrian } from '../mock';
import train from './';

describe('train', () => {
  it('should teach a foreigner pedestrian how to cross correctly', () => {
    expect(train(foreignerPedestrian)()).toEqual(['right', 'left']);
  });
  it('have no effect on local pedestrians', () => {
    expect(train(localPedestrian)()).toEqual(['right', 'left']);
  });
  it("can't teach bad pedestrians", () => {
    expect(train(badPedestrain)()).toEqual([]);
  });
});
