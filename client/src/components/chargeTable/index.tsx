import React from "react";
import Button from '../ui/Button';
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from '../ui/SearchInput';
import { IoFilter } from "react-icons/io5";
import { BiExport } from "react-icons/bi";


const ChargeTable = () => {
  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-5 p-3">
      <div className="flex gap-2">
        <li>Charging Points</li>
        <li>Charging Sites</li>
      </div>
      <div className="flex md:justify-between gap-3">
            <div className="flex gap-2">
               
                <SearchInput value="" placeholder="Search charging point..."/>
                <Button name="Filter" icon={<IoFilter size={20}/>}/>
                <Button name="Export" icon={<BiExport size={20}/>}/>
                
            </div>
            <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md"><MdOutlineAddBox className="text-[22px] hidden md:block"/>Add</button>
        </div>
    </div>
  );
};

export default ChargeTable;
