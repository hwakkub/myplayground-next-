// 'use server';
// import { FormEvent } from 'react'

// export async function handleFormNextPage(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     const formData2 = new FormData(event.currentTarget)
//     const response = await fetch('/api/submit', {
//         method: 'POST',
//         body: formData2,
//       })
//     const data = await response.json()
// //     const rawFormData = {
// //     customerId: formData.get('customerId'),
// //   };
//   // Test it out:
//   console.log(data);
// }