"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import LogoutButton from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Zap, Bell, User, Settings, LogOut, ChevronLeft, Menu, Sun, Moon } from "lucide-react";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Consumo", icon: Zap },
    { name: "Novidades", icon: Bell },
  ];

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={cn(
          "relative flex flex-col bg-card shadow-md transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "w-[60px]" : "w-64",
        )}
      >
        <div className="flex h-16 items-center justify-between p-4">
          {!isSidebarCollapsed && <h1 className="truncate text-xl font-bold">Meu Dashboard</h1>}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleSidebar}
            className={cn(
              "absolute -right-3 top-6 z-10 rounded-full bg-background",
              isSidebarCollapsed ? "rotate-180" : "",
            )}
            aria-label={isSidebarCollapsed ? "Expandir menu" : "Recolher menu"}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start px-3 py-2",
                          activeItem === item.name ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                          isSidebarCollapsed && "justify-center",
                        )}
                        onClick={() => setActiveItem(item.name)}
                      >
                        <item.icon className={cn("h-5 w-5", !isSidebarCollapsed && "mr-3")} />
                        {!isSidebarCollapsed && <span>{item.name}</span>}
                      </Button>
                    </TooltipTrigger>
                    {isSidebarCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-border p-4">
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn("w-full justify-start", isSidebarCollapsed && "justify-center")}
                    >
                      <User className={cn("h-5 w-5", !isSidebarCollapsed && "mr-3")} />
                      {!isSidebarCollapsed && <span>João Silva</span>}
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                {isSidebarCollapsed && <TooltipContent side="right">João Silva</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={toggleTheme}>
                {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                <span>{theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}</span>
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
        <div className="border-t border-border p-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="w-full"
                  aria-label="Alternar tema"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  {!isSidebarCollapsed && (
                    <span className="ml-2">{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
                  )}
                </Button>
              </TooltipTrigger>
              {isSidebarCollapsed && (
                <TooltipContent side="right">
                  {theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-card shadow-sm">
          <div className="flex items-center px-4 py-3">
            <Button variant="ghost" size="icon" className="mr-2 md:hidden" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
            <h2 className="text-2xl font-semibold">{activeItem}</h2>
          </div>
        </header>
        <div className="p-6">
          <p className="text-muted-foreground">Conteúdo do {activeItem} será exibido aqui.</p>
        </div>
      </main>
    </div>
  );
}
