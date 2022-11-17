import { useState } from 'react';

interface ICountProps {
    initialValue?: number;
}

export default function Counter({ initialValue = 0 }: ICountProps): JSX.Element {
    const [count, setCount] = useState(initialValue);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>➕</button>
            <button onClick={() => setCount(count - 1)}>➖</button>
        </>
    );
}
