import {
  local as localPedestrian,
  foreigner as foreignerPedestrian
} from '../pedestrian';
import train from '../train';
import street from '../street';

describe('street with a local pedestrian', () => {
  it('should be accident free', () => {
    expect(street(localPedestrian)).not.toThrow();
  });
});
describe('street with a trained foreigner pedestrian', () => {
  it('should be accident free', () => {
    expect(street(train(foreignerPedestrian))).not.toThrow();
  });
});
