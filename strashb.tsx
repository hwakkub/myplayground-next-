"use client";
import React, { useState } from 'react'

export default function Home() {
    const [formData, setFormData] = useState({ name: '', age: '' });
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form method="post" action="/sentdata">
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
