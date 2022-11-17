
import Child from "./Child";

export default function Parent({ onPress }: { onPress: () => void }): JSX.Element {
    return <Child onPress={onPress} />;
}
