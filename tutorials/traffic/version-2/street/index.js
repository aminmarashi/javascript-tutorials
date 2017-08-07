// Write the code to pass the test
export default function street(pedestrian) {
    return () => {
        const moves = ['right', 'left'];
        if (JSON.stringify(moves) === JSON.stringify(pedestrian())) {
            return true;
        }
        throw Error('killed');
    };
}
