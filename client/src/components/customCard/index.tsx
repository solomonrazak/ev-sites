import React from 'react';
import { IoArrowDown } from "react-icons/io5";

interface ICustomCardProps {
    name: string;
    value: number;
    percentage: number;
    icon: React.ReactNode;
}

const CustomCard: React.FC<ICustomCardProps> = ({name, value, percentage, icon}) => {
  return (
    <div className="bg-[#333333] rounded-md h-60 flex flex-col justify-between p-3">
        <div>
            <div>{icon}</div>
            <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="font-bold text-3xl">{value}</p>
            <div className="flex items-center border-2 rounded-[24px] gap-1 px-2 py-2"><IoArrowDown className="text-red-600"/><span>{percentage}%</span></div>
        </div>
    </div>
  )
}

export default CustomCard;