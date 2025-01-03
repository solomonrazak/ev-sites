import React from 'react';
import CustomCard from '../../components/customCard';
import { IoPeopleOutline } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { BsFillPersonCheckFill } from "react-icons/bs";
import SatisfyCard from '../../components/satisfyCard';

const Customers: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5">
     <CustomCard percentage={20} name="Total Customers" value={20} icon={<IoPeopleOutline size={25}/>}/>
     <CustomCard percentage={20} name="Total Customers" value={20} icon={<GoPersonFill size={25}/>}/>
     <CustomCard  percentage={20} name="Total Customers" value={20} icon={<BsFillPersonCheckFill size={25}/>} />
     <SatisfyCard />
    </div>
  )
}

export default Customers;