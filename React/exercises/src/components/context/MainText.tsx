import { useContext } from "react";
import { dialogs } from "./dialogs";
import LanguageProvider from "./LanguageProvider";
import { LanguageContextType } from "./types/types";

export default function MainText(): JSX.Element {   

    const {lang} = useContext(LanguageProvider) as LanguageContextType; 
    const dialog = dialogs[lang];
    
    return (
        <div>
            <h1>{dialog.title}</h1>
            <p>{dialog.paragraph}</p>
        </div>
    );
}
