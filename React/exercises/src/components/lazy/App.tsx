import { lazy, Suspense } from "react";
const LazyLoadingTodos =  lazy(() => import('../hooks/Todos'));

export default function App() {
    return (
        <Suspense fallback={'Loading, please wait...'}>
            <LazyLoadingTodos url="https://jsonplaceholder.typicode.com/todos" />
        </Suspense>
    );
}