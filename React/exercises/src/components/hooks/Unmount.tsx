import { useEffect, useState } from "react";

export default function Unmounted(): JSX.Element {
    const [show, setShow] = useState(true);

    useEffect(() => {
        return () => {
            console.log("Componente desmontado");
        }
    }, [show]);

    return (
        <>
            {show &&
                <button onClick={() => setShow(!show)}>
                    {show ? 'Desmontar' : null}
                </button>
            }
        </>
    );
}
