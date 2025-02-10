"use client";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 23,
    absent: 53,
  },
  {
    name: "Tue",
    present: 64,
    absent: 43,
  },
  {
    name: "Wed",
    present: 33,
    absent: 56,
  },
  {
    name: "Fri",
    present: 33,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div>
      <div>
        <h1>Attendance</h1>
        <HiOutlineDotsHorizontal className="flex justify-end w-6 h-6" />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
