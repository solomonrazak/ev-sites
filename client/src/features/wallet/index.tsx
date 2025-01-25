import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import NetworkButton from "./NetworkButton";
import mtn from "../../assets/images/mtn.jpeg";
import at from "../../assets/images/at.png";
import voda from "../../assets/images/voda.png";
import { Input } from "@heroui/react";
import RecentTransactions from "./RecentTransactions";

const WalletPage = () => {
  const actualValue = "0.00";
  const [activeNetwork, setActiveNetwork] = useState<string>("MTN");
  const [isValueVisible, setIsValueVisible] = useState<boolean>(true);

  const handleNetworkClick = (networkName: string) => {
    setActiveNetwork(networkName);
  };

  const toggleVisibility = () => {
    setIsValueVisible(!isValueVisible);
  };
  return (
    <div className="w-full h-full flex flex-col xl:flex-row gap-5">
      <div className="w-full xl:w-[65%]">
        <div className="mt-10">
          <p className="text-[14px]">Total Balance</p>
          <div className="flex gap-3 items-center">
            <p className="text-[27px]">
              ₵<span>{!isValueVisible ? actualValue : "*.**"}</span>
            </p>
            <>
              {isValueVisible ? (
                <IoMdEye onClick={toggleVisibility} className="text-[27px]" />
              ) : (
                <FaEyeSlash
                  onClick={toggleVisibility}
                  className="text-[27px]"
                />
              )}
            </>
          </div>
        </div>
        <div className="w-full h-[0.9px] bg-gray-400 my-3"></div>
        <p className="mb-2">Choose Network</p>
        <div className="w-full lg:w-[88%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <NetworkButton
              image={mtn}
              name="MTN"
              isActive={activeNetwork === "MTN"}
              onClick={() => handleNetworkClick("MTN")}
            />
            <NetworkButton
              image={voda}
              name="Vodafone"
              isActive={activeNetwork === "Vodafone"}
              onClick={() => handleNetworkClick("Vodafone")}
            />
            <NetworkButton
              image={at}
              name="AirtelTigo"
              isActive={activeNetwork === "AirtelTigo"}
              onClick={() => handleNetworkClick("AirtelTigo")}
            />
          </div>
          <form className="flex flex-col gap-5 mt-5">
            <Input
              label="Phone Number"
              placeholder="000000000"
              type="text"
              className="bg-black w-full"
            />
            <Input
              label="Set Amount (₵); How much would you like to pay up to"
              placeholder="100"
              type="text"
              className="bg-black w-full"
            />
            <button className="bg-blue-700 w-16 px-1 py-1 rounded-[5px] justify-end text-[17px] ml-auto">
              Top Up
            </button>
          </form>
        </div>
      </div>
      <div className="w-full xl:w-[35%] h-full min-h-full">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default WalletPage;
