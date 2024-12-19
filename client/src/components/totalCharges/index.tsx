import React from 'react';

const TotalCharges: React.FC = () => {
  return (
    <div className="bg-[#333333] w-[500px] h-[400px] flex flex-col justify-between p-2 rounded-md">
        <div>
            <p className="font-medium">Total Charges</p>
            <p className="font-normal text-[10px] text-gray-400">01 January 2024 - Date</p>
        </div>
        <div>
            <div className="w-full h-[1.1px] bg-green-100"></div>
            <p className="font-medium text-3xl mb-3">0</p>
            <p className="text-green-600">0%</p>
        </div>
    </div>
  )
}

export default TotalCharges;