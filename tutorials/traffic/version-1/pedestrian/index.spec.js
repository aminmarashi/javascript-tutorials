import pedestrian from './';

describe('pedestrian', () => {
  it('should return the directions to look before crossing the street', () => {
    expect(pedestrian()).toEqual(['right', 'left']);
  });
});
