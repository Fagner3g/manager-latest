"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const route = useRouter();

  return (
    <div className="flex h-20 min-h-20 cursor-pointer items-center gap-2 px-6" onClick={() => route.push("/")}>
      <Image src="/logo.svg" alt="logo" width={30} height={30} priority />
      <h1 className="text-xl font-bold">IrisManager</h1>
    </div>
  );
}
