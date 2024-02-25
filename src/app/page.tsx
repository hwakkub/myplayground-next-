// "use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {Form} from "./form/page"
import { revalidatePath } from 'next/cache';
import { submitTodo } from './_actions/todo-action';
import TodoForm from './_component/TodoForm';

type Props = {};
export default async function Home({}:Props) {
  // const [count, setCount] = useState(0);

  // function handleIncrement() {
  //   setCount(count + 1);
  // }
  const result = await fetch("http://localhost:3000/api/todo");
  const todoList: {id: string; message: string}[] = await result.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Link href="/about">Go to about</Link>
      <Link href={{pathname: "/sentdata",query:{
        name:"John yea",
        age:"20",
      },}}>Go to data</Link>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button> */}
       {/* <Form></Form> */}
      <TodoForm/>
      <ul>
        {todoList.map((todo)=>(
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
