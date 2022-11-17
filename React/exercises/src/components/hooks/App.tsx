import React from "react";
import ChangeLetters from "./ChangeLetters";
import PrintChars from "./Characters";
import Todos from "./Todos";
import Unmounted from "./Unmount";
import Update from "./Update";

export default function App(): JSX.Element {
    return (
        <>
            <div>
                <Update />
            </div>
            <br />
            <div>
                <Unmounted />
            </div>
            <br />
            <div>
                <ChangeLetters />
            </div>
            <br />
            <div>
                <PrintChars url="https://rickandmortyapi.com/api/character/"/>
            </div>
            <br />
            <div>
                <Todos url={"https://jsonplaceholder.typicode.com/todos"} />
            </div>
        </>
    )
}
