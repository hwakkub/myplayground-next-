'use client';

import {handleForm} from './actions'

export function Form(){
    return(
        <div>
            this is Form component.
            <form action={handleForm}>
                <input type="text" name='customerId'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}