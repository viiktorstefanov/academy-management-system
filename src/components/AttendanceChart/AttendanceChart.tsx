"use client";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    present: 23,
    absent: 53,
  },
  {
    name: "Tuesday",
    present: 64,
    absent: 43,
  },
  {
    name: "Wednesday",
    present: 33,
    absent: 56,
  },
  {
    name: "Thursday",
    present: 33,
    absent: 56,
  },
  {
    name: "Friday",
    present: 33,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <HiOutlineDotsHorizontal className="flex justify-end w-6 h-6" />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
