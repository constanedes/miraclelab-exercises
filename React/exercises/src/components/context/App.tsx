import { LanguageProvider } from "./LanguageProvider";
import MainText from "./MainText";
import ToggleLangButton from "./ToggleLangButton";

export default function App() {
    return (
        <>
            <LanguageProvider>
                <MainText />
                <ToggleLangButton />
            </LanguageProvider>
        </>
    )
}
