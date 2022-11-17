import Greeting from "./Greeting";
import ShowDate from "./ShowDate";
import ShowMessage from "./ShowMessage";
import ShowName from "./ShowName";

interface IMyH4Props { text: string; }
function MyH4({text}: IMyH4Props): JSX.Element {
    return <h4>{text}</h4>
}

export default function App() {
    return (
        <>
            <div>
                <Greeting />
            </div>
            <br />
            <div>
                <ShowName user={{name: 'Constan'}} />
            </div>
            <br />
            <div>
                <ShowDate />
            </div>
            <br />
            <div>
                <ShowMessage show={true} component={<MyH4 text="Component in component" />}/>
            </div>
        </>
    );
}
