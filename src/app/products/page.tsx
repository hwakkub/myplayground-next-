"use client";
import { useRouter } from "next/navigation";
export default function Product() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace("/");
    // router.back();
    // router.forward();
  };
  return (
    <>
      <h1>Hi Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
