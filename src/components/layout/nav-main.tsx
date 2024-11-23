"use client";

import { SidebarItem } from "./sidebar-item";
import { SidebarItemCollapse, SidebarItemProps } from "./sidebar-item-collapse";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";

export interface NavMainProps {
  items: SidebarItemProps[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) =>
          item.subRoute.length > 0 ? (
            <SidebarItemCollapse key={item.title} item={item} />
          ) : (
            <SidebarItem key={item.title} item={item} />
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
