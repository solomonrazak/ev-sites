import React from 'react';

interface IChargeCard {
    name: string;
    total: number;
    icon: React.ReactNode;
    className?: string;
}

const ChargeCard: React.FC<IChargeCard> = ({name, total, icon, className}) => {
  return (
    <div className="bg-main-dark-bg h-[15rem] flex flex-col justify-between rounded-md p-3">
        <div className="flex flex-col">
            {icon}
            <p className={`text-[18px] font-semibold ml-2 ${className}`}>{name}</p>
        </div>
        <p className="font-bold text-4xl">{total}</p>
    </div>
  )
}

export default ChargeCard;