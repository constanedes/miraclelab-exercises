import Loading from "./ejercicio2/Loading";
import Parent from "./ejercicio3/Parent";

export default function App() {
    return (
        <>
            <div>
                <Loading loading={false} />
            </div>
            <div>
                <Parent onPress={() => console.log("Hola a todos!")} />
            </div>
        </>
    );
}
