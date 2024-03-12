"use client";
// "use client"
import React, { useEffect, useState } from "react";
interface IResponse {
  data: MyData;
}
interface MyData {
  name: string;
}

export default async function Fastapi() {
  //   const data = await getData();
  const [mydata, mydataState] = useState<MyData>();
  async function getData() {
    const res = await fetch("http://127.0.0.1:8000/json");
    const jsonData = (await res.json()) as IResponse;
    mydataState(jsonData.data);
    // return res.json();
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>hi</div>
      {/* <div>{resultSearch?.name + "i'm here"}</div> */}
      {/* <div>{data + "i'm here 123"}</div> */}
      {/* <div>{JSON.stringify(data, null, 1)}</div> */}
      <div>{mydata?.name}</div>
      <pre>{JSON.stringify(mydata?.name, null, 2)}</pre>

      <div>bye</div>
    </>
  );
}
