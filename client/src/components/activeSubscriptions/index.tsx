import React from 'react'

const ActiveSubscriptions: React.FC = () => {
  return (
    <div className="w-full h-[280px] bg-[#333333] rounded-md">
        <div className="flex">
        <p>Active Subscriptions</p>
        <div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-green-100"></div>
            <p className="text-[11px] text-gray-300">LAST MONTH</p>
            
        </div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-green-300"></div>
            <p className="text-[11px] text-gray-300">THIS MONTH</p>
            
        </div>
        </div>

        </div>
        
    </div>
  )
}

export default ActiveSubscriptions;