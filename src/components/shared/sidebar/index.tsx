import { Logo } from "../logo";
import { MenuSidebar } from "./menu-sidebar";
import { SidebarRoutes } from "./sidebar-routes";

import { auth } from "@/config/auth";

export async function Sidebar() {
  const session = await auth();
  return (
    <div className="h-screen">
      <div className="flex h-full flex-col border-r">
        <Logo />
        <SidebarRoutes />
        <MenuSidebar name={session?.user.name || ""} />
      </div>
    </div>
  );
}
