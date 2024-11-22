"use client";

import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import LogoutButton from "../../../auth/logout-button";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";

export function MenuSidebar() {
  const route = useRouter();
  const { setTheme, theme } = useTheme();
  const { data: session } = useSession();

  return (
    <div className="border-t border-border p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn("w-full justify-start")}>
            <User className={"h-5 w-5"} />
            <span>{session?.user.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
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
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => route.push("/settings")}>
            <Settings strokeWidth={1} className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogoutButton>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
