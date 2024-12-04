import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex w-full h-full'>
        <div className="w-20% border-r border-white">
            <Sidebar />
        </div>
        <div className="w-80%">
            <div className='w-full'> <Navbar /></div>
           
            <main>
                <Outlet />
            </main>
        </div>

    </div>
  )
}

export default Layout;