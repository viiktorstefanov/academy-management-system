import React from "react";
import { PiUserCircleLight } from "react-icons/pi";

const ProfileInfo = () => {
  return (
    <>
      <div className="flex flex-col pt-2">
        <span className="text-base leading-3 font-medium">
          Alexander Petrov
        </span>
        <span className="text-sm text-gray-500 text-right">Teacher</span>
      </div>
      <PiUserCircleLight className="w-10 h-10 rounded-full" />
    </>
  );
};

export default ProfileInfo;
