"use server";
// "use client"
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("http://127.0.0.1:8000/json");
  return res.json();
}
export default async function Fastapi() {
  //1
  // const res = await fetch("http://127.0.0.1:8000/json");
  // const data = (await res.json()) as IResponse;
  //2
  //   const [resultSearch, setResultSearch] = useState<MyData>();

  //   async function fetchData() {
  //     const res = await fetch("http://127.0.0.1:8000/json");
  //     const jsonData = (await res.json()) as IResponse;
  //     console.log("i am " + jsonData);
  //     setResultSearch(jsonData.data);
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //3
  const data = await getData();
  return (
    <>
      <div>hi</div>
      {/* <div>{resultSearch?.name + "i'm here"}</div> */}
      <div>{data + "i'm here 123"}</div>
      <div>{JSON.stringify(data, null, 2)}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <div>bye</div>
    </>
  );
}
