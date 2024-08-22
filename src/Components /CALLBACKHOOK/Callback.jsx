import  { useCallback, useState } from "react";
import Todo from "./Todo";

const Callback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    
    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
      // eslint-disable-next-line
    }, [todos]);
  
    return (
      <>
        <Todo todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

  export default Callback ;