import React, { createContext, useState } from "react";
import { Language } from "./types/types";

interface IContextProvProp {
    children: React.ReactNode | React.ReactNode[];
}

const LanguageContext = createContext({});
export function LanguageProvider({ children }: IContextProvProp): JSX.Element {

    const [lang, setLang] = useState<Language>('spanish');
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext;
