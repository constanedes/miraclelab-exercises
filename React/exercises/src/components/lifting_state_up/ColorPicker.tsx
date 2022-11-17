import TextColor from "./TextColor";

export default function ColorPicker(color:any): JSX.Element {
    return (
        <>
            <input type="color" {...color} />
            <TextColor  color={color.value} />
        </>
    );
};
