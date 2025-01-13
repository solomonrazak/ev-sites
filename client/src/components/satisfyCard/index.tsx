import React from 'react';
import tapIcon from "../../assets/tap.svg";
import { LuThumbsUp } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const SatisfyCard: React.FC = () => {
  return (
    <div className="bg-[#333333] h-60 p-3 rounded-md">
        <p>Customer Satisfaction</p>
        <div className="flex mt-6 justify-between">
            <img src={tapIcon} alt="tapIcon" width={120} height={100}/>
            <div className="flex flex-col pr-5 justify-between gap-5">
                <div className="flex gap-2">
                  <LuThumbsUp className="text-green-500 text-6xl"/>
                  <div>
                  <p className="text-5xl text-green-500 font-semibold">0%</p>
                  <p className="flex flex-col text-[12px] text-gray-400"><span>IN THE LAST</span><span>30 DAYS</span></p>
                  </div>
                </div>
                <button className="flex items-center gap-2 border-2 py-[5px] px-2 border-[rgb(53,101,36)] text-[rgb(53,101,36)] rounded-md">More Data <LuArrowRight className="mt-1"/></button>
            </div>
        </div>

    </div>
  )
}

export default SatisfyCard;