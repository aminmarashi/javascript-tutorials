// Write the code to pass the test
const truthyFunction = (() => {
    const toBeTruthy = () => {
        return true;
    };

    return {
        toBeTruthy: toBeTruthy
    };
});

module.exports = truthyFunction;
