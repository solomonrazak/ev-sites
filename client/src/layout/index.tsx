import React, {useState} from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-full min-h-full">
      <div className="w-0 md:w-[16%] md:border-r border-white z-50">
        <Sidebar isOpen={isSidebarOpen}/>
      </div>
      <div className="w-full md:w-[84%]">
        <Navbar toggleSidebar={toggleSidebar}/>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
