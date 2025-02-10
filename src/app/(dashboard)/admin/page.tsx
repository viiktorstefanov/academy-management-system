import AttendanceChart from "@/components/AttendanceChart/AttendanceChart";
import GenderChart from "@/components/GenderChart/GenderChart";
import StatsCard from "@/components/StatsCard/StatsCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <StatsCard type="students" />
          <StatsCard type="teachers" />
          <StatsCard type="staffs" />
          <StatsCard type="staffs" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <GenderChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
