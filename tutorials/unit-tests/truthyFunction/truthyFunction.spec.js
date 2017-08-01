import truthyFunction from './truthyFunction';


describe.skip('truthyFunction unit', () => {
  it('should return truthy', () => {
    expect(truthyFunction()).toBeTruthy();
  });
});
