import Tasks from "./Tasks";
import UsersLifeCycle from "./Users";

export default function App() {
    return (
        <>
            <div>
                <UsersLifeCycle users={["Juan", "Pedro"]} />
            </div>
            <div>
                <Tasks url="https://jsonplaceholder.typicode.com/todos" />
            </div>
        </>
    );
}
