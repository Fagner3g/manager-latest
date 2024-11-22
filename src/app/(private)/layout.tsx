import { NavBar } from "@/components/Shared/NavBar";
import { Sidebar } from "@/components/Shared/Sidebar";

export default function LayoutDashboard({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden h-full w-60 md:block xl:fixed xl:block">
        <Sidebar />
      </div>
      <div className="h-full w-full xl:ml-60">
        <NavBar />
        <div className="bg-[#fafbfc] p-6 dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
