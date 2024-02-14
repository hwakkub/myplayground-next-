import Link from 'next/link'

// const Data = () => {
    
//   return (
//     <>
//       <p>This is data page</p>
//       <Link href="/">Back to Home</Link>
//     </>
//   )
// }
export default function Data({
    searchParams,
}:{
    searchParams:{
        name: string;
        age: string;
    };
}) {
    return <>
     <p>This is data page</p>
     <p>{searchParams.name}</p>
     <Link href="/">Back to Home</Link>
    </>
}
