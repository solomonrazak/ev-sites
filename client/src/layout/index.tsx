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
    <div className="flex w-screen h-screen bg-[#242424] text-white">
      <div className="w-0 md:w-[14%] md:border-r border-white z-50 h-full">
        <Sidebar isOpen={isSidebarOpen}/>
      </div>
      <div className="w-full md:w-[86%] h-full overflow-y-auto">
        {/* used overflow-y-auto to resolve overlow on y-axis issue on mobile screens*/}
        <Navbar toggleSidebar={toggleSidebar}/>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
