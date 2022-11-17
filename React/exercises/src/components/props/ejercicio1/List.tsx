import ListItem from "./ListItem"

interface IListProps {
    items: string[];
}

export default function List({ items }: IListProps): JSX.Element {
    const list: JSX.Element[] = items.map((item, index) =>
        <ListItem key={index} value={item}/>
    );
    return <ul>{list}</ul>;
}
