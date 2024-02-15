"use client";
import React from 'react';
import Link from 'next/link'
import { useParams } from 'next/navigation';

export default function SentData() {

  // const { name, age } = useParams();
  const { name, age } = useParams();
  return (
    <div>
      <h2>Page Two</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}