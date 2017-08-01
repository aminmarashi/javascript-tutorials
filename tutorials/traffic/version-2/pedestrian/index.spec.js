import { local as localPedestrian, foreigner as foreignerPedestrian } from './';

describe('local pedestrian', () => {
  it('should return the directions to look before crossing the street', () => {
    expect(localPedestrian()).toEqual(['right', 'left']);
  });
});

describe('foreigner pedestrian', () => {
  it('should return the directions to look before crossing the street', () => {
    expect(foreignerPedestrian()).toEqual(['left', 'right']);
  });
});
