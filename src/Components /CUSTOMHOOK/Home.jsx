import React from 'react'
import useTodo from './useTodo';

const Home = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [todos,loading] = useTodo(url);

    if(loading){
        return <div><h1>Loading...</h1></div>
    }

  return (
    <div>
        <h1>Todo List</h1>
        
        <ul>
     
            {todos.map((todo)=>{
               return <li key = {todo.id}>{todo.title}</li>
})}
        </ul>

    </div>
  )
}

export default Home ;