import { SideBarItems, otherSideBarItems } from "@/constants/sideBarItems";
import React from "react";
import SideBarItem from "../SideBarItem/SideBarItem";

const SideBar = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow pt-8">
        {SideBarItems.map((item) => (
          <SideBarItem item={item} key={item.label} />
        ))}
      </div>

      <div className="pb-6">
        {otherSideBarItems.map((item) => (
          <SideBarItem item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
