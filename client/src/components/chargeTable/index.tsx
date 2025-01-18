import React from "react";
import Button from "../ui/Button";
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from "../ui/SearchInput";
import { IoFilter } from "react-icons/io5";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChargingTable from "./ChargingTable";

const ChargeTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-2 px-3 overflow-x-auto">
      <div className="flex md:justify-between gap-3 mt-1">
        <div className="flex gap-2">
          <SearchInput value="" placeholder="Search charging point..." />
          <Button name="Filter" icon={<IoFilter size={20} />} />
          <Button name="Export" icon={<PiMicrosoftExcelLogoFill size={20} />} />
        </div>
        <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md">
          <MdOutlineAddBox className="text-[22px] hidden md:block" />
          Add
        </button>
      </div>
      <ChargingTable />
    </div>
  );
};

export default ChargeTable;
