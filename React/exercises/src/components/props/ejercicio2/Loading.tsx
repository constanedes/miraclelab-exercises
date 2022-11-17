import Link from '../ejercicio1/Link';
import Text from '../ejercicio1/Text';
import Title from '../ejercicio1/Title';
import List from '../ejercicio1/List';

interface ILoadingProps {
    loading?: boolean;
}

export default function Loading({ loading }: ILoadingProps): JSX.Element {
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Title title="Necesito partir en componentes todo esto" />
            <Text text="Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:" />
            <List
                items={[
                    "Observar el HTML",
                    "Pensar en cómo puedo extraer cada trozo en componentes",
                    "Usarlos, o mejor dicho, reusarlos en React",
                ]}
            />
            <Link url="https://reactjs.org/" text="React Docs" openInNewTab />
        </div>      
    );
}
