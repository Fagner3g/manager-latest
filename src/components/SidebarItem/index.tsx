"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarItemProps } from "./types";

import { cn } from "@/lib/utils";

export function SidebarItem({ item }: SidebarItemProps) {
  const { href, icon: Icon, label } = item;
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `light:text-slate-700 mt-2 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 text-sm hover:bg-slate-300/20 dark:text-white`,
        active && "bg-slate-400/20",
      )}
    >
      <Icon strokeWidth="1" className="h-4 w-4" />
      {label}
    </Link>
  );
}
