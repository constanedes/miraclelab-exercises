interface IListItemProps {
    value: string;
}

export default function ListItem({ value }: IListItemProps): JSX.Element {
    return <li>{value}</li>;
}
