import { useRef } from "react";

export default function Refs(): JSX.Element {
    const inputOne =  useRef<HTMLInputElement>(null);
    const inputTwo =  useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(inputOne.current!.value);
        console.log(inputTwo.current!.value);
    }
    
    return (
        <div>
            <h1>Refs</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputOne} />
                <input type="text" ref={inputTwo} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
