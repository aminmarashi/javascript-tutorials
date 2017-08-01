import truthyFunction from './truthyFunction';

describe('truthyFunction unit', () => {
  it('should return truthy', () => {
    expect(truthyFunction()).toBeTruthy();
  });
});
