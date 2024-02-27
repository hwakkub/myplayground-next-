"use client"
import React, { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import SendDataSubmitButton from './SendDataSubmit';
import { submitSendData } from '../_actions/sendData-action';

type Props = {}

export default function SendDataForm({}:Props){
    const ref = useRef<HTMLFormElement>(null);
    const [state,formAction] = useFormState(submitSendData,{error:null});
    return (
        <form 
            ref={ref}
            action={async (formData : FormData)=>{
            ref.current?.reset();
            formAction(formData);
        }}>
          <input
            type='text'
            name='message'
            className='px-4 py-2 mb-3'
            placeholder='mbti type...'/>
            <SendDataSubmitButton/>
        </form>
    )
}