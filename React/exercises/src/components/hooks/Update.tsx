import { useEffect, useRef, useState } from "react";

export default function Update(): JSX.Element {
    const [show, setShow] = useState(true);
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        console.log("Actualizando!");
    } , [show]);
   
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                Actualizar!
            </button>
        </div>
    );
}
