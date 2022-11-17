import React, { useState } from 'react';

const withAPIDetails = ({Component, url, post = undefined}) => {
    const parsedUrl = post ? `${url}` : `${url}/${post}`;
    const [values, setValues] = useState([]);
    useState(async () => {
        try {
            const req = await fetch(parsedUrl);
            const data = await req.json();
            setValues(data);
        }
        catch (e) {
            return;
        }
    })
    return <Component {...props} />
}

function FetchInfo(values) {
    <ul>
        {values.map((task, key) => (
            <>
            <li key={key}>{task.name}</li>
            <p key={key}>{task.description}</p>
            </>
        ))}
    </ul>
}


export const MyHOC = withAPIDetails(FetchInfo, 'https://jsonplaceholder.typicode.com/todos');





