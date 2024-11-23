"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuButton } from "../ui/sidebar";
import { SidebarItemProps } from "./sidebar-item-collapse";

interface SidebarItem {
  item: SidebarItemProps;
}

export function SidebarItem({ item: { url, icon: Icon, title } }: SidebarItem) {
  const pathname = usePathname();
  const active = pathname === url;

  return (
    <Link href={url}>
      <SidebarMenuButton tooltip={title} isActive={active}>
        <Icon />
        <span>{title}</span>
      </SidebarMenuButton>
    </Link>
  );
}
