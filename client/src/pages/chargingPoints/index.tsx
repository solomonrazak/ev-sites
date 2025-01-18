import React from "react";
import ChargeCard from "../../components/chargeCard";
import { MdBatteryCharging20 } from "react-icons/md";
import { MdBatteryAlert } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import ChargeTable from "../../components/chargeTable";
import { NavLink, Outlet } from "react-router-dom";
import ChargingSite from "../../components/chargingSite";




const ChargingPoints: React.FC = () => {
  return (
    <div className="">
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <ChargeCard
        name="Active Charging Points"
        total={0}
        icon={<MdBatteryCharging20 size={35}/>}
      />
      <ChargeCard
        name="Inactive Charging Points"
        total={0}
        icon={<MdBatteryAlert size={35} />}
      />
      <ChargeCard
        name="Require Maintenance"
        total={0}
        icon={<BsTools size={35} />}
        className="-ml-[2.7px]"
      />
      <ChargeCard
        name="Active Charging Points"
        total={0}
        icon={<MdBatteryCharging20 size={35} />}
      />
    </div>
    {/* <ChargeTable /> */}
    <div className="w-full bg-main-dark-bg rounded-md mt-5 px-3 overflow-x-auto">
    <ul className="flex gap-2 list-none">
        <NavLink
          to="/charging-points"
          end
          className={({ isActive }) =>
            `cursor-pointer pt-2 text-gray-400 transition-all duration-300 ${
              isActive ? "border-t-2 border-blue-500 text-blue-500" : ""
            }`
          }
        >
          <li
            className=""
            // Go back to previous page
          >
            Charging Points
          </li>
        </NavLink>
        <NavLink
          to="/charging-points/charging-site"
          className={({ isActive }) =>
            `cursor-pointer pt-2 text-gray-400 transition-all ease-in-out duration-300 ${
              isActive ? "border-t-2 border-blue-500 text-blue-500" : ""
            }`
          }
        >
          {" "}
          <li>Charging Sites</li>
        </NavLink>
      </ul>
     <Outlet />
      

    </div>
    </div>
  );
};

export default ChargingPoints;
