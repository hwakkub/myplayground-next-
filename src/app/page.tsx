// "use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {Form} from "./form/page"
import { revalidatePath } from 'next/cache';

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
      <h1>Todos</h1>
      <form action={async(formData:FormData)=>{
        "use server";
        console.log("run server")
        const message = formData.get("message");
        await fetch("http://localhost:3000/api/todo",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({message}),
        });
        revalidatePath("/");
      }}>
        <input
          type='text'
          name='message'
          className='px-4 py-2 mb-3'
          placeholder='write your job...'/>
        <button type='submit'>Submit</button>
      </form>
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
