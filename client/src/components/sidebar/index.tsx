import React from "react";
import { MdPeople } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaChargingStation } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <p className="text-center pb-4">Logo</p>
      <div className="flex-grow">
        {/* flex-grow so it can occupy the full length so logout can stay at the bottom */}
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <MdDashboard />
            <p>Dashboard</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdPeople />
            <p>Customers</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaChargingStation />
            <p>Charging Points</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 pb-5">
        <CiLogin />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
