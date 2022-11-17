export default function TextColor({ color }: { color: string }): JSX.Element {
    return (
        <>
            <h1 style={{ color: `${color}`}}>{color}</h1>
        </>
    );
}
