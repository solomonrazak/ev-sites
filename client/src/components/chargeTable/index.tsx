import React from "react";
import Button from "../ui/Button";
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from "../ui/SearchInput";
import { IoFilter } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChargeTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-5 px-3">
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
      <div className="flex md:justify-between gap-3 mt-3">
        <div className="flex gap-2">
          <SearchInput value="" placeholder="Search charging point..." />
          <Button name="Filter" icon={<IoFilter size={20} />} />
          <Button name="Export" icon={<BiExport size={20} />} />
        </div>
        <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md">
          <MdOutlineAddBox className="text-[22px] hidden md:block" />
          Add
        </button>
      </div>
    </div>
  );
};

export default ChargeTable;
