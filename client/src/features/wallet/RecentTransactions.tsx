import React from "react";
import error from "../../assets/images/error.png";

const RecentTransactions = () => {
  return (
    <div className="w-full h-screen bg-[#2c2c2c] px-3 mt-14">
      <p>RECENT TRANSACTION</p>
      <div className="flex flex-col items-center mt-5">
        <img src={error} alt="error" width={80} />
        <p>No Recent Transaction</p>
      </div>
    </div>
  );
};

export default RecentTransactions;
