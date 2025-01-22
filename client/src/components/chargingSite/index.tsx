import React, {useState} from "react";
import SearchInput from "../ui/SearchInput";
import Buttons from "../ui/Buttons";
import { MdOutlineAddBox } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ChargingSiteTable from "./ChargingSiteTable";






const ChargingSite: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

  }
  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-2 px-3 overflow-x-auto pb-5">
      <div className="flex md:justify-between gap-3 mt-3">
        <div className="flex gap-2">
          <SearchInput value={searchValue} placeholder="Search charging point..." onChange={handleSearch}/>
          <Buttons name="Export" icon={<PiMicrosoftExcelLogoFill size={20} />} />
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
