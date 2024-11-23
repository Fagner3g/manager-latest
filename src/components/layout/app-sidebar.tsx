"use client";

import * as React from "react";

import { Logo } from "./logo";

import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useDataRoute } from "@/hooks/use-data-route";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { routes, user } = useDataRoute();
  const { isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props} title="Navigation">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes.items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} isMobile={isMobile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
