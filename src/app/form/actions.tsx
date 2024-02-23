// "use server";

// export async function handleForm(){
//     console.log("Handling form");
// }

'use server';
 
export async function handleForm(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}