import React from 'react';

type Props = {}
export default async function SendDataToNextPage({}:Props) {
    const result = await fetch("http://localhost:3000/api/sendData");
    // const mbti = await result.json();
    // return (
    //   <div>
    //      <h1>{mbti}</h1>
    //      <p>abc123</p>
    //   </div>
    // )
    const mbtiType: {id: string; message: string}[] = await result.json();
    return (
        <ul>
        {mbtiType.map((todo)=>(
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
    )
}