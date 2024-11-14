"use client";

import { signOut } from "next-auth/react";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LogoutButton = ({ children }: Props) => {
  return (
    <div
      onClick={async () => {
        await signOut({ redirect: true, redirectTo: "/" });
      }}
    >
      {children}
    </div>
  );
};

export default LogoutButton;
