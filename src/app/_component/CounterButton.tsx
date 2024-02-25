"use client";
import React, { useState } from 'react'
type Props = {}
export default function CounterButton({}:Props) {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }
    return (
       <>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
      </>
    )
}