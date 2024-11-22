"use client";

import { useSession } from "next-auth/react";

export function UserName() {
  const { data: session } = useSession();

  return <span>{session?.user.name}</span>;
}
