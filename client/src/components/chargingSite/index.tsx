import React from "react";
import SearchInput from "../ui/SearchInput";
import Button from "../ui/Button";
import { MdOutlineAddBox } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ChargingSiteTable from "./ChargingSiteTable";

const ChargingSite = () => {
  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-5 px-3 overflow-x-auto">
      <div className="flex md:justify-between gap-3 mt-3">
        <div className="flex gap-2">
          <SearchInput value="" placeholder="Search charging point..." />
          <Button name="Export" icon={<PiMicrosoftExcelLogoFill size={20} />} />
        </div>
        <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md">
          <MdOutlineAddBox className="text-[22px] hidden md:block" />
          Add
        </button>
      </div>
      <ChargingSiteTable />
    </div>
  );
};

export default ChargingSite;
