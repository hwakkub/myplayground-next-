import Link from 'next/link'

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
