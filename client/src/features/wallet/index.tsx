import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import NetworkButton from "./NetworkButton";
import mtn from "../../assets/images/mtn.jpeg";
import at from "../../assets/images/at.png";
import voda from "../../assets/images/voda.png";
import { Input } from "@heroui/react";
import RecentTransactions from "./RecentTransactions";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation Schema
const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
  network: yup.string().required("Please select a network"),
});

type FormData = {
  phoneNumber: string;
  amount: number;
  network: string;
};

const WalletPage = () => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Integrate Yup validation
    mode: "onChange", // Validate on change
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log("Form Data: ", data);
  };

  const actualValue = "0.00";
  const selectedNetwork = watch("network");
  // const [activeNetwork, setActiveNetwork] = useState<string>("");
  const [isValueVisible, setIsValueVisible] = useState<boolean>(true);

  // const handleNetworkClick = (networkName: string) => {
  //   setActiveNetwork(networkName);
  //   setValue("network", networkName, { shouldValidate: true });
  // };
  const handleNetworkClick = (networkName: string) => {
    setValue("network", networkName, { shouldValidate: true });
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
        <form
          className="flex flex-col gap-5 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="mb-2">Choose Network</p>
          <div className="w-full lg:w-[88%]">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <NetworkButton
                  image={mtn}
                  name="MTN"
                  isActive={selectedNetwork === "MTN"}
                  onClick={() => handleNetworkClick("MTN")}
                />
                <NetworkButton
                  image={voda}
                  name="Vodafone"
                  isActive={selectedNetwork === "Vodafone"}
                  onClick={() => handleNetworkClick("Vodafone")}
                />
                <NetworkButton
                  image={at}
                  name="AirtelTigo"
                  isActive={selectedNetwork === "AirtelTigo"}
                  onClick={() => handleNetworkClick("AirtelTigo")}
                />
              </div>
              <p className="text-red-500 text-[11px] mt-2">
                {errors.network?.message}
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <div>
                <Input
                  label="Phone Number"
                  placeholder="000000000"
                  type="text"
                  className="bg-black w-full"
                  {...register("phoneNumber")}
                />
                <p className="text-red-500 text-[11px] mt-2">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div>
                <Input
                  label="Set Amount (₵); How much would you like to pay up to"
                  placeholder="100"
                  type="text"
                  className="bg-black w-full"
                  {...register("amount")}
                />
                <p className="text-red-500 text-[11px] mt-2">
                  {errors.amount?.message}
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-700 w-16 px-1 py-1 rounded-[5px] justify-end text-[17px] ml-auto"
              >
                Top Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full xl:w-[35%] h-full min-h-full">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default WalletPage;
