interface ILinkProps {
    url: string;
    text: string;
    openInNewTab?: boolean;
}

export default function Link({ url, text, openInNewTab }: ILinkProps): JSX.Element {
    const target: string  = openInNewTab ? "_blank" : "_self";
    return <a href={url} target={target}>{text}</a>;
}
