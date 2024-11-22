import { ToggleTheme } from "../../ToggleTheme";
import { SidebarRoutes } from "../SidebarRoutes";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function NavBar() {
  return (
    <nav className="flex h-16 w-full items-center justify-between gap-x-4 border-b bg-background px-2 md:px-6">
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"} title="Sidebar">
            <SheetTitle>Íris</SheetTitle>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]"></div>
      <div className="flex items-center gap-x-2">
        <ToggleTheme />
      </div>
    </nav>
  );
}
