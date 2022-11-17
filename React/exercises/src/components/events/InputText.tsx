import { useState } from 'react';

export default function InputText(): JSX.Element {
    const [text, setText] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" onInput={handleChange} />
            <span>{text}</span>
        </>
    );
}
