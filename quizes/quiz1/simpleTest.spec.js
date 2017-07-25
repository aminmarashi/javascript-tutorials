const simpleTest = require('./simpleTest.js');

describe.skip('Simple test', () => {
    it('should return true', () => {
        expect(simpleTest()).toBe(true);
    });
});
