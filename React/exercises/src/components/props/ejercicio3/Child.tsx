export default function Child({ onPress }: { onPress: () => void }): JSX.Element {
    return <button onClick={onPress}>Press me</button>;
}
