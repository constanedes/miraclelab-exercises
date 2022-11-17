import { useState } from "react";

export default function LetterCounter(): JSX.Element {
    const [str, setStr] = useState('');
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return (
        <>
            <p>{str}</p>
            <button
                onClick={() =>
                    setStr(str + alphabet[Math.floor(Math.random() * alphabet.length)])
                }
            >
                Add new
            </button>
            <button onClick={() => setStr(str.slice(0, -1))}>Remove last</button>
        </>
    );
}
