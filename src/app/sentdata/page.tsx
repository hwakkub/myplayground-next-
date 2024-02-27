"use client";
import React from 'react';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import SendDataToNextPage from '../_component/SendDataToNextPage';

export default function SentData() {

  // const { name, age } = useParams();
  const { name, age } = useParams();
  return (
    <div>
      <SendDataToNextPage/>
      <Link href="/">Back to Home</Link>
    </div>
  );
}