import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

const Messages = () => {
  return (
    <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
      <LuMessageCircleMore className="w-7 h-7" />
    </div>
  );
};

export default Messages;
