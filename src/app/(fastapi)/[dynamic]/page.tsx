// "use server";
// // "use client"
// import React, { useEffect, useState } from "react";

// async function getData(data: string) {
//   const res = await fetch("http://127.0.0.1:3000/items/" + data);
//   return res.json();
// }
// export default async function Dynamic({
//   params: { dynamic },
// }: {
//   params: { dynamic: string };
// }) {
//   const data = await getData(dynamic);
//   // const data = await getData();
//   return (
//     <>
//       <div>hi</div>
//       {/* <div>{resultSearch?.name + "i'm here"}</div> */}
//       <div>{data + "i'm here 123"}</div>
//       <div>{JSON.stringify(data, null, 2)}</div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>

//       <div>bye</div>
//     </>
//   );
// }
