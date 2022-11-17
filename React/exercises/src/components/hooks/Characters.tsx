import { useEffect, useState } from "react";
import { useFetchGet } from "./useFetch";

interface IPrintCharsProps {
    url: string
}

export default function PrintChars({url}: IPrintCharsProps): JSX.Element {
    const [chars, setChars] = useState([])
    const { data, loading } = useFetchGet(url);

    useEffect(() => {
        if (!loading) {
            setChars(data)
        }
    });

    return (
        <div>
            <h1>Rick and Morty data</h1>
            {
                <>
                    <ul>
                        {chars &&
                            chars.map((d, index: number) => (
                                <li key={index}>{d['name']}</li>
                            ))
                        }
                    </ul>
                </>
            }
        </div>
    );
}


