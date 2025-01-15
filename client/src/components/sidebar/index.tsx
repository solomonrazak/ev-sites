import React, { useState } from "react";
import { MdPeople } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaChargingStation } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";

const Sidebar: React.FC<{isOpen: boolean}> = ({isOpen}) => {
  const [showOnDesk, setShowOnDesk] = useState(true);
  const [showOnMob, setShowOnMob] = useState(false);
  return (
    <div className="p-4 h-full flex justify-between flex-col min-h-full">
      <p className="text-center pb-4 hidden md:block">Logo</p>
      
      <div className="flex-grow">
        {/* flex-grow so it can occupy the full length so logout can stay at the bottom */}
        <div className="flex flex-col gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                isActive ? "bg-gray-500" : ""
              }`
            }
          >
            <div className="flex gap-2 items-center">
              <MdDashboard />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                isActive ? "bg-gray-500" : ""
              }`
            }
          >
            <div className="flex gap-2 items-center">
              <MdPeople />
              <p>Customers</p>
            </div>
          </NavLink>
          <NavLink
            to="/charging-points"
            className={({ isActive }) =>
              `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                isActive ? "bg-gray-500" : ""
              }`
            }
          >
            <div className="flex gap-2 items-center">
              <FaChargingStation />
              <p>Charging Points</p>
            </div>
          </NavLink>
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                isActive ? "bg-gray-500" : ""
              }`
            }
          >
            <div className="flex gap-2 items-center">
              <IoWalletOutline />
              <p>Wallet</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 pb-5 mt-auto">
        <CiLogin className="text-[20px] mt-1"/>
        <p>Logout</p>
      </div>
      {/* {showOnMob && (
        <div>
          <div className="flex flex-col gap-5">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                  isActive ? "bg-gray-500" : ""
                }`
              }
            >
              <div className="flex gap-2 items-center">
                <MdDashboard />
                <p>Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                  isActive ? "bg-gray-500" : ""
                }`
              }
            >
              <div className="flex gap-2 items-center">
                <MdPeople />
                <p>Customers</p>
              </div>
            </NavLink>
            <NavLink
              to="/charging-points"
              className={({ isActive }) =>
                `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                  isActive ? "bg-gray-500" : ""
                }`
              }
            >
              <div className="flex gap-2 items-center">
                <FaChargingStation />
                <p>Charging Points</p>
              </div>
            </NavLink>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                `px-4 py-1 rounded-md  hover:bg-gray-700 ${
                  isActive ? "bg-gray-500" : ""
                }`
              }
            >
              <div className="flex gap-2 items-center">
                <IoWalletOutline />
                <p>Wallet</p>
              </div>
            </NavLink>
          </div>
        </div>
      )} */}
      
    </div>
  );
};

export default Sidebar;
