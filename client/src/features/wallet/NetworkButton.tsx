import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface NetworkButtonProps {
  image: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const NetworkButton: React.FC<NetworkButtonProps> = ({
  image,
  name,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex gap-3 items-center px-4 py-[12px] border-[1.4px] rounded-[10px] cursor-pointer bg-[#2c2c2c] ${
        isActive ? "border-[#191970]" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        width={35}
        height={35}
        className="rounded-full"
      />
      <p className="text-[17px]">{name}</p>
      <FaCircleCheck
        className={`text-[#191970] text-[18px] ${
          isActive ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default NetworkButton;
