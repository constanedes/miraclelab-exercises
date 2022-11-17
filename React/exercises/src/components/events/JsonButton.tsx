import { useState } from 'react';
interface IJsonButtonProps {
    url: string;
}

export default function JsonButton({ url }: IJsonButtonProps): JSX.Element {
    const [data, setData] = useState({ data: [] });
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = async (): Promise<void> => {
        setIsLoading(true);
        setShow(!show);
        try {
            const response: Response = await fetch(url);
            const result = await response.json();
            setData(result);
        }
        catch (err) {
            throw err;
        }
        finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <button onClick={handleClick}>Fetch data</button>
            {isLoading && <p>Loading...</p>}
            {show && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
    );
}
