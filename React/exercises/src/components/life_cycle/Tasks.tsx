import { useEffect, useState } from "react";

interface ITasksProps {
    url: string;
}

export default function Tasks({ url }: ITasksProps ): JSX.Element {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getData(): Promise<void> {
            const response: Response = await fetch(url);
            const data = await response.json();
            setTasks(data);
            setLoading(false);
        }
        getData();
    }, [url]);

    return (
        <div>
            <h1>Tasks</h1>
            {loading && <div>Loading...</div>}
            {!loading &&
                <>
                    <ul>
                        {tasks.map((task, index) => (<li key={index}>{task['title']}</li>))}
                    </ul>
                </>
            }
        </div>
    );
}
