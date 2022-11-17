import InputText from "./InputText";
import JsonButton from "./JsonButton";
import CustomSelect from "./ShowValue";

export default function App() {
    return (
        <>
            <div>
                <JsonButton url={'https://jsonplaceholder.typicode.com/todos'} />
            </div>
            <br />
            <div>
                <InputText />
            </div>
            <br />
            <div>
                <CustomSelect options={['Option 1', 'Option 2', 'Option 3']} />
            </ div>
        </>
    )
}
