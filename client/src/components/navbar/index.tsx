import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className="p-2 border-b flex justify-between border-white w-full">
        <p>Dashboard</p>
        <div>
            <p>Solomon Razak</p>
        </div>
    </div>
  )
}

export default Navbar;