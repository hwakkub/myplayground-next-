"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {Form} from "./form/page"

type Props = {};
export default function Home({}:Props) {
  // const [count, setCount] = useState(0);

  // function handleIncrement() {
  //   setCount(count + 1);
  // }

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
      <form>
        <input
          type='text'
          name='message'
          className='px-4 py-2 mb-3'
          placeholder='write your job...'/>
        <button type='submit'>Subnit</button>
      </form>
    </main>
  );
}
