// "use client";

import React from 'react'
import {Form} from "./form/page"
import TodoForm from './_component/TodoForm';
import TodoItem from './_component/TodoItem';
import CounterButton from './_component/CounterButton';
import HyperLink from './_component/Link';

type Props = {};
export default async function Home({}:Props) {

  // const result = await fetch("http://localhost:3000/api/todo");
  // const todoList: {id: string; message: string}[] = await result.json();
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HyperLink/>
      <CounterButton/>
      <Form></Form>
      <TodoForm/>
      <TodoItem/>
    </main>
  );
}
