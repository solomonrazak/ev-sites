import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout:React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-[20%] border-r border-white">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
