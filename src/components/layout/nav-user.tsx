"use client";

import { User } from "next-auth";
import { useTheme } from "next-themes";

import LogoutButton from "../auth/logout-button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { UserRole } from "@prisma/client";
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Moon, Sparkles, Sun } from "lucide-react";

interface NavUserProps {
  isMobile: boolean;
  user:
    | ({
        role: UserRole;
        isTwoFactorEnabled: boolean;
      } & User)
    | undefined;
}

export function NavUser({ user, isMobile }: NavUserProps) {
  const { setTheme, theme } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={(user && user.image) || ""} alt={(user && user.name) || ""} />
                <AvatarFallback className="rounded-lg">{(user && user.name?.charAt(0)) || ""}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user && user.name}</span>
                <span className="truncate text-xs">{user && user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={(user && user.image) || ""} alt={(user && user.name) || ""} />
                  <AvatarFallback className="rounded-lg">{(user && user.name?.charAt(0)) || ""}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user && user.name}</span>
                  <span className="truncate text-xs">{user && user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Atualizar plano
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Conta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Pagamentos
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notificações
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                {theme === "light" ? (
                  <Moon strokeWidth={1} className="mr-2 h-4 w-4" />
                ) : (
                  <Sun strokeWidth={1} className="mr-2 h-4 w-4" />
                )}
                <span>Tema {theme === "light" ? "Dark" : "Light"}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <LogoutButton>
              <DropdownMenuItem>
                <LogOut />
                Sair
              </DropdownMenuItem>
            </LogoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
