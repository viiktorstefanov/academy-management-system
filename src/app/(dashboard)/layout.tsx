import Menu from "@/components/Menu/Menu";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex">
      <aside className="h-screen w-[14%] md:w-[8%] lg:w-[16%] xl:w-[6%] transition-[width] duration-300 bg-[#F7F8FA] pl-3 pt-4 flex flex-col">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Academix</span>
        </Link>
        <Menu />
      </aside>
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[94%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
