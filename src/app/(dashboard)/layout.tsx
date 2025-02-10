import Logo from "@/components/Logo/Logo";
import Menu from "@/components/SideBar/SideBar";
import UserStatusBar from "@/components/UserStatusBar/UserStatusBar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex">
      <aside className="h-screen w-[14%] md:w-[8%] lg:w-[16%] xl:w-[6%] transition-[width] duration-300 bg-[#F7F8FA] pl-3 pt-4 flex flex-col">
        <Logo />
        <Menu />
      </aside>
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[94%] bg-[#F7F8FA] overflow-scroll">
        <UserStatusBar />
        {children}
      </main>
    </div>
  );
}
