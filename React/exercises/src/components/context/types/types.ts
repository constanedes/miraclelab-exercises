export type Language  = 'english' | 'spanish' | 'portuguese';
export type LanguageContextType = {
    lang: Language;
    setLang: (language: Language) => void;
}