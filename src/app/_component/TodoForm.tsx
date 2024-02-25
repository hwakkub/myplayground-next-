"use client"
import React, { useRef } from 'react';
import { submitTodo } from '../_actions/todo-action';

type Props = {}

export default function TodoForm({}:Props){
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form 
            ref={ref}
            action={async (formData : FormData)=>{
            ref.current?.reset();
            submitTodo(formData);
        }}>
          <input
            type='text'
            name='message'
            className='px-4 py-2 mb-3'
            placeholder='write your job...'/>
          <button type='submit'>Submit</button>
        </form>
    )
}