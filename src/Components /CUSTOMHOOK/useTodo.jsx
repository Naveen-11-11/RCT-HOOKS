import { useEffect, useState } from 'react'

const useTodo = (url) => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchTodos = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to Fetch Data");
                }
                const data = await response.json();
                setTodos(data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchTodos();

    }, [url]);

    return [todos, loading]

}

export default useTodo;