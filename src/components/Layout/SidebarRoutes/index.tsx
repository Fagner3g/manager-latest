"use client";

import { SidebarItem } from "../SidebarItem";
import { dataGeneralSidebar } from "./data";

export function SidebarRoutes() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="p-2 md:p-6">
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <footer className="mt-3 p-3 text-center text-xs"></footer>
    </div>
  );
}
