import { menuItems, otherMenuItems } from "@/constants/menuItems";
import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow pt-8">
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.label} />
        ))}
      </div>

      <div className="pb-6">
        {otherMenuItems.map((item) => (
          <MenuItem item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
