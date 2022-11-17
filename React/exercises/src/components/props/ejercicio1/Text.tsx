interface ITextProps {
    text: string;
}

export default function Text({ text }: ITextProps): JSX.Element {
    return <p>{text}</p>;
}
