import { useState } from "react";

interface ICustomSelectProps {
    options: string[];
}

export default function CustomSelect({ options }: ICustomSelectProps): JSX.Element {
    const [selected, setSelected] = useState(options[0]);
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const target = e.nativeEvent.target as HTMLSelectElement;
        setSelected(target.value);
    }
    return (
        <>
            <select  onChange={handleChange}   >
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
            <span>{selected}</span>
        </>
    );
}
