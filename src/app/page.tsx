"use client"

import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
export default function Home() {
  const user = useAppSelector((state) => state.user);

  console.log("ini isi global state", user)
  return (
    <main>
      
    </main>
  );
}
