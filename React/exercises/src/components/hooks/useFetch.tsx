//? The fetch data exercise is located in life_cycle\Tasks.tsx
//? This is a example of custom hook useFetch.

import { useState, useEffect } from 'react';

export type useFetchGet = {
    status: Number;
    data: any;
    error: any;
    loading: Boolean;
};

export const useFetchGet = (url: string): useFetchGet => {
    const [status, setStatus] = useState<Number>(0);
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);
        try {
            const response: Response = await fetch(url);
            const json = await response.json();
            setStatus(response.status);
            setData(json.results);
        } catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAPIData();
    }, []);

    return { status, data, error, loading };
};