import { useState } from "react";

export default function ConditionalRendering(): JSX.Element {
    const [logged, setLogged] = useState(false);
    const handleClick = (): void => {
        setLogged(!logged);
    }
    return (
        <>
            {logged ? <p>Esta pagina solo puedo verla por que estoy logueado</p> :
                <button onClick={handleClick}>Inicia sesión para ver contenido privado</button>}
            {logged && <button onClick={handleClick}>Cerrar sesión</button>}
        </>
    );
}
