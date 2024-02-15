"use client";
// "use server";
import Link from 'next/link'
import React, { useState } from 'react'
export default function Home() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ name: '', age: '' });
  function handleIncrement() {
    setCount(count + 1);
  }
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // navigate('/sentdata', { state: { formData } });

  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href="/about">Go to about</Link>
     <Link href={{pathname: "/data",query:{
      name:"John yea",
      age:"20",
     },}}>Go to data</Link>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Go to Page Two</button>
      </form>
    </main>
  );
}
