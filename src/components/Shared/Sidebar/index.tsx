import { Logo } from "../logo";
import { MenuSidebar } from "./menu-sidebar";
import { SidebarRoutes } from "./sidebar-routes";

export function Sidebar() {
  return (
    <div className="h-screen">
      <div className="flex h-full flex-col border-r">
        <Logo />
        <SidebarRoutes />
        <MenuSidebar />
      </div>
    </div>
  );
}
