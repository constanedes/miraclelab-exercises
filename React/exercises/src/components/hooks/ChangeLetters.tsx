import { useEffect, useState } from "react";

export default function ChangeLetters(): JSX.Element {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(text.replace(/a/g, 'b'));
    }, [text]);

    return (
        <input type={'text'}
            onChange={(e) => setText(e.target.value)}
            value={text}
        />
    )
}
