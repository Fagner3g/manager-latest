import { NavBar } from "@/components/Layout/NavBar";
import { Sidebar } from "@/components/Layout/Sidebar";

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden h-full w-80 md:block xl:fixed xl:block">
        <Sidebar />
      </div>

      <div className="w-full xl:ml-80">
        <NavBar />
        <div className="bg-[#fafbfc] p-6 dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
