import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <IoIosSearch />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
