import { useState } from "react";

function Score({ points }: { points: number }): JSX.Element {
    return <p>{points}</p>;
}

function IncrementButton(props: { onClick: () => void; }): JSX.Element {
    return <button onClick={() => props.onClick()}>➕</button>;
}

function DecrementButton(props: { onClick: () => void; }): JSX.Element {
    return <button onClick={() => props.onClick()}>➖</button>;
}

export default function ModularCounter({ initialValue }: { initialValue: number }): JSX.Element {
    const [count, setCount] = useState(initialValue);
    return (
        <>
            <Score points={count} />
            <IncrementButton onClick={() => setCount(count + 1)} />
            <DecrementButton onClick={() => setCount(count - 1)} />
        </>
    )
}
