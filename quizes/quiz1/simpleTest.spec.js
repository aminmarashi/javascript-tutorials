const simpleTest = require('./simpleTest.js');

describe('Simple test', () => {
    it('should return true', () => {
        expect(simpleTest()).toBe(true);
    });
});
