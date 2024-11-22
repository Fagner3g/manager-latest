import { Logo } from "../Logo";
import { MenuSidebar } from "../MenuSidebar";
import { SidebarRoutes } from "../SidebarRoutes";

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
