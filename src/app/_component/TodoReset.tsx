"use client"
import React, { useTransition } from 'react';
import { resetTodo } from '../_actions/todo-action';

type Props = {}
export default function ResetButton({}:Props) {
    const [_,startTransition] = useTransition();
    return (
        <button type='button' onClick={()=>{
            startTransition(()=> resetTodo());
        }}>Reset</button>
    )
}