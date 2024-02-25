import React from 'react'
import Link from 'next/link'
type Props = {}
export default function HyperLink({}:Props) {

    return (
       <>
      <Link href="/about">Go to about</Link>
      <Link href={{pathname: "/data",query:{
        name:"John yea",
        age:"20",
      },}}>Go to data</Link>
      </>
    )
}