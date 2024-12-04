import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex'>
        <div className="w-20%">
            <Sidebar />
        </div>
        <div className="w-80%">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>

    </div>
  )
}

export default Layout;