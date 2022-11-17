interface ITitleProps {
    title: string;
}

export default function Title({ title }: ITitleProps): JSX.Element {
    return <h1>{title}</h1>;
}

<Title title="Hello World" />;
