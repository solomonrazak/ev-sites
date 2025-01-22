import React from 'react';
import Button from '../ui/Buttons';
import { MdOutlineAddBox } from "react-icons/md";
import CusTable from './CusTable';
import SearchInput from '../ui/SearchInput';
import { IoFilter } from "react-icons/io5";
import { BiExport } from "react-icons/bi";

const CustomerTable:React.FC = () => {
  return (
    <div className="w-full bg-main-dark-bg mt-3 p-2 rounded-md overflow-x-auto">
        <div className="flex md:justify-between gap-3">
            <div className="flex gap-2">
               
                <SearchInput value="" placeholder="Search..."/>
                <Button name="Filter" icon={<IoFilter size={20}/>}/>
                <Button name="Export" icon={<BiExport size={20}/>}/>
                
            </div>
            <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md"><MdOutlineAddBox className="text-[22px] hidden md:block"/>Add Customer</button>
        </div>
        <div>
            <CusTable />
        </div>

    </div>
  )
}

export default CustomerTable;