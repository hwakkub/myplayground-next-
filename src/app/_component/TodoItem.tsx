import React from 'react';

type Props = {}
export default async function TodoItem({}:Props) {
    const result = await fetch("http://localhost:3000/api/todo");
    const todoList: {id: string; message: string}[] = await result.json();
    return (
        <ul>
        {todoList.map((todo)=>(
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
    )
}