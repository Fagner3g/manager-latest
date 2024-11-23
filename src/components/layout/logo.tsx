"use client";

import Image from "next/image";
import * as React from "react";

import { SidebarMenuButton } from "@/components/ui/sidebar";

export function Logo() {
  return (
    <SidebarMenuButton size="lg">
      <Image src="/logo.svg" alt="logo" width={30} height={30} priority />
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">IrisManager</span>
      </div>
    </SidebarMenuButton>
  );
}
