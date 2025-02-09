import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] transition-[width] duration-300 bg-red-200 pl-4 pt-4">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block">Academix</span>
        </Link>
        <Menu />
      </aside>
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">RIGHT</main>
    </div>
  );
}
