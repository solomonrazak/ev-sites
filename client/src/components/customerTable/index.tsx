import React from 'react';
import Button from '../ui/Button';
import { MdOutlineAddBox } from "react-icons/md";
import CusTable from './CusTable';

const CustomerTable:React.FC = () => {
  return (
    <div className="w-full bg-main-dark-bg min-w-[600px] mt-3 p-2 rounded-md overflow-x-auto">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <input type="text" value="" placeholder="search" className="bg-slate-800 text-[20px] border border-gray-500 text-white w-72 h-10 pl-3 rounded-md"/>
                <Button name="Filter"/>
                <Button name="Export"/>
                
            </div>
            <button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md"><MdOutlineAddBox className="text-[22px]"/>Add Customer</button>
        </div>
        <div>
            <CusTable />
        </div>

    </div>
  )
}

export default CustomerTable;