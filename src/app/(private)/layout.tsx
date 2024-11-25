import { AppSidebar } from "@/components/layout/app-sidebar";
import { Logo } from "@/components/layout/logo";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-row items-center justify-between border-b border-border p-4 md:hidden">
          <SidebarTrigger />
          <Logo />
        </div>
        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
