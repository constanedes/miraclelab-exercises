import Counter from "./Counter";
import LetterCounter from "./LetterCounter";
import ModularCounter from "./ModularCounter";

export default function App() {
    return (
        <>
            <div>
                <ModularCounter initialValue={0} />
            </div>
            <div>
                <Counter initialValue={0} />
            </div>
            <div>
                <LetterCounter />
            </div>
        </>
    );
}
