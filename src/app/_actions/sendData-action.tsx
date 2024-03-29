// "use server";
// import { revalidatePath } from "next/cache";

// export const submitSendData = async(prevState:any,formData:FormData)=>{
//     console.log("run server")
//     const message = formData.get("message");
//     await fetch("http://localhost:3000/api/sendData",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({message}),
//     });
//     revalidatePath("/");
//     return {error:null}
//   }

"use server";
import { redirect } from "next/navigation";

export const submitSendData = async(prevState:any,formData:FormData)=>{
    console.log("run server")
    const message = formData.get("message");
    await fetch("http://localhost:3000/api/sendData",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message}),
    });
    redirect('/sentdata');
  }