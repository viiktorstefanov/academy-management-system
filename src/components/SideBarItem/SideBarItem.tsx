import Link from "next/link";
import React from "react";

type MenuItemProps = {
    item: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        label: string;
        href: string;
    };
}

const SideBarItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Link
      href={item.href}
      key={item.label}
      className="flex justify-center items-center lg:justify-start gap-4 text-gray-500 py-2"
    >
      <item.icon data-tip="Hello, I'm a tooltip!" className="text-red-400 w-5 h-5" />
      <span className="hidden lg:block">{item.label}</span>
    </Link>
  );
};

export default SideBarItem;
