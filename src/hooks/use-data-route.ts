import { useSession } from "next-auth/react";

import { NavMainProps } from "@/components/layout/nav-main";
import { Bot, LayoutDashboard } from "lucide-react";

export function useDataRoute() {
  const { data: session } = useSession();
  const user = session?.user;

  const routes: NavMainProps = {
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        subRoute: [],
      },
      {
        title: "Integrações",
        url: "/integrations",
        icon: Bot,
        isActive: true,
        subRoute: [
          {
            title: "Whatsapp",
            url: "/integrations/wpp",
          },
          {
            title: "Instagram",
            url: "#",
          },
          {
            title: "WebSite",
            url: "#",
          },
        ],
      },
      // {
      //   title: "Documentation",
      //   url: "#",
      //   icon: BookOpen,
      //   subRoute: [
      //     {
      //       title: "Introduction",
      //       url: "#",
      //     },
      //     {
      //       title: "Get Started",
      //       url: "#",
      //     },
      //     {
      //       title: "Tutorials",
      //       url: "#",
      //     },
      //     {
      //       title: "Changelog",
      //       url: "#",
      //     },
      //   ],
      // },
      // {
      //   title: "Settings",
      //   url: "#",
      //   icon: Settings2,
      //   subRoute: [
      //     {
      //       title: "General",
      //       url: "#",
      //     },
      //     {
      //       title: "Team",
      //       url: "#",
      //     },
      //     {
      //       title: "Billing",
      //       url: "#",
      //     },
      //     {
      //       title: "Limits",
      //       url: "#",
      //     },
      //   ],
      // },
    ],
  };

  return { routes, user };
}
