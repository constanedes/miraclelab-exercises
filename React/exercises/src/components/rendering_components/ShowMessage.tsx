interface IShowMessageProps { 
    show: boolean;
    component: JSX.Element
}
export default function ShowMessage({show, component}: IShowMessageProps): JSX.Element {
    return <>{show && <div>{component}</div>}</>
}
