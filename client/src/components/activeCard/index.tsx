import React from 'react';

interface IActiveCardProps {
    title: string;
}

const ActiveCard: React.FC<IActiveCardProps> = ({title}) => {
  return (
    <div className="w-full h-[280px] bg-[#333333] rounded-md">
        <p className="font-medium">{title}</p>

    </div>
  )
}

export default ActiveCard;