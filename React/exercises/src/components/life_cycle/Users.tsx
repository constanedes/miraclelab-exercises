import { useEffect, useState } from "react";

interface IUsersLifeCycle {
    users: string[];   
}

export default function UsersLifeCycle({ users }: IUsersLifeCycle): JSX.Element {
    const [usersState, setUsersState] = useState(["John", "Doe"]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log(show ? "Component Mounted/Updated" : "Component Destroyed!");
    }, [show]);

    const handleAddUser = (): void => {
        if (users && users.length > 0) {
            setUsersState([...usersState, users[0]]);
            users.shift();
        }
    }
    
    return (
        <div>
            <h1>Users</h1>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show && 
                <>
                    <ul>
                        {usersState.map((user, index) => (<li key={index}>{user}</li>))}
                    </ul>
                    <button onClick={handleAddUser}>Añadir usuario</button>
                </>
            }
        </div>
    );
}
