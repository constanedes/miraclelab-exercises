import { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function ParentComponent(): JSX.Element {
    const [color, setColor] = useState("#FFFFFF");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setColor(e.target.value);
    };
    return (
        <>
            <ColorPicker onChange={handleInput} value={color} />
        </>
    );
}
