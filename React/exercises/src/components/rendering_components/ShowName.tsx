interface IShowNameProps {
    user: {name: string}
}
export default function ShowName({ user: {name} }: IShowNameProps): JSX.Element {
    return <h1>Hello! {name}</h1>
}
