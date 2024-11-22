"use client";

import { SidebarItem } from "../SidebarItem";

import { dataGeneralSidebar } from "@/data/itemsNavbar";

export function SidebarRoutes() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="p-2 md:p-6">
        {dataGeneralSidebar.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </div>
      <footer className="mt-3 p-3 text-center text-xs"></footer>
    </div>
  );
}
