"use client"
import React, { useRef } from 'react';
import { submitTodo } from '../_actions/todo-action';
import { useFormState, useFormStatus } from 'react-dom';
import SubmitButton from './TodoSubmit';
import ResetButton from './TodoReset';

type Props = {}

export default function TodoForm({}:Props){
    const ref = useRef<HTMLFormElement>(null);
    const [state,formAction] = useFormState(submitTodo,{error:null});
    return (
        <form 
            ref={ref}
            action={async (formData : FormData)=>{
            ref.current?.reset();
            formAction(formData);
        }}>
            {state.error && (<span className='text-red-500'>!Must be greater than 5 chars</span>)}
          <input
            type='text'
            name='message'
            className='px-4 py-2 mb-3'
            placeholder='write your job...'/>
            <SubmitButton/>
            <ResetButton/>
        </form>
    )
}