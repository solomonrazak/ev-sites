import React from "react";
import { useLocation } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar: React.FC<{toggleSidebar: () => void}> = ({toggleSidebar}) => {
  const location = useLocation();

  const routeNames: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/customers": "Customers",
    "/charging-points": "Charging Points",
    "/wallet": "Wallet",
  };

  // Get the name based on the current path
  const currentPage = routeNames[location.pathname] || "Unknown";
  

  const name = "Solomon Razak";
  const initial = name.charAt(0);

  return (
    <div className="py-2 px-4 border-b flex justify-between border-white w-full">
      <div className="flex items-center gap-2">
      <IoMenuSharp className="text-[20px] md:hidden cursor-pointer" onClick={toggleSidebar}/>
      <p className="font-medium">{currentPage}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 flex justify-center items-center font-medium bg-green-400 text-white rounded-full border border-white">{initial}</div>
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};

export default Navbar;
