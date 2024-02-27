"use client"
import React from 'react';
import { useFormStatus } from 'react-dom';

type Props = {}
export default function SendDataSubmitButton({}:Props) {
    const {pending} = useFormStatus()
    return (
        <button type='submit'>{pending ? "Submitting...": "Submit"}</button>
    )
}