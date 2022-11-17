import { useContext } from "react";
import { dialogs } from "./dialogs";
import LanguageProvider from "./LanguageProvider";
import { Language, LanguageContextType } from "./types/types";

export default function ToggleLangButton() {
    const { lang, setLang } = useContext(LanguageProvider) as LanguageContextType;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value as Language;
        setLang(newLang);
    }

    return (
        <select value={lang} onChange={handleChange}>
            {
                Object.entries(dialogs).map(([key, value]) => (
                    <option key={key} value={key}>{value.button}</option>
                ))
            }
        </select>
    );
}
