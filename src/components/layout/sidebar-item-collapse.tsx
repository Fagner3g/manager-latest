import Link from "next/link";
import { usePathname } from "next/navigation";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";

import { ChevronRight, LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  isActive?: boolean;
  url: string;
  subRoute: {
    title: string;
    url: string;
    isActive?: boolean;
  }[];
}

interface SidebarItemCollapseProps {
  item: SidebarItemProps;
}

export function SidebarItemCollapse({ item: { title, url, icon: Icon, subRoute } }: SidebarItemCollapseProps) {
  const pathname = usePathname();
  const active = pathname.includes(url);

  return (
    <Collapsible key={title} asChild defaultOpen={active} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={title} isActive={active}>
            <Icon />
            <span>{title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {subRoute.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild isActive={pathname.includes(subItem.url)}>
                  <Link href={subItem.url}>
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
