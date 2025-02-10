import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Notifications = () => {
  return (
    <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer relative">
      <IoNotificationsOutline className="w-7 h-7" />
      <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
        1
      </div>
    </div>
  );
};

export default Notifications;
