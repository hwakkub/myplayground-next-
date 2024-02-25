'use client';

import {handleForm} from './actions'
// import { handleFormNextPage } from './actionNextPage';

export function Form(){
    return(
        <div>
            this is Form component.
            <form action={handleForm}>
                <input type="text" name='customerId'/>
                <button type='submit'>Submit</button>
            </form>
            {/* action next page */}
            {/* <form action={handleFormNextPage}>
                <input type="text" name='customerId'/>
                <button type='submit'>Submit</button>
            </form> */}
        </div>
    )
}