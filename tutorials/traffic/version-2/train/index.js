// Write the code to pass the test
export default function train (pedestrian) {
    return () => pedestrian().length ? ['right', 'left'] : [];
}
