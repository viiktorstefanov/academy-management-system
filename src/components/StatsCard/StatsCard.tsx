import React from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

type StatsCardProps = {
    type: string;
};

const StatsCard: React.FC<StatsCardProps> = ({ type }) => {
  return (
    <div className='rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px] flex flex-col items-end'>
        <HiOutlineDotsHorizontal className='flex justify-end w-6 h-6'/>
        <h1 className='self-start text-2xl font-semibold my-4'>1,234</h1>
        <h2 className='self-start capitalize text-sm font-medium text-gray-600'>{type}</h2>
    </div>
  )
}

export default StatsCard
