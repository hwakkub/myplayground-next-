"use client";
import Link from 'next/link'
import React, { useState } from 'react'
export default function Home() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href="/about">Go to about</Link>
     <Link href={{pathname: "/data",query:{
      name:"John yea",
      age:"20",
     },}}>Go to data</Link>
    <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

    </main>
  );
}
