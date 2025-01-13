import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void;
    className? : string;
    icon: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({name, onClick, className, icon}) => {
  return (
    <div className={`bg-transparent flex gap-2 items-center p-2 text-white border border-gray-400 w-20 text-center rounded-md ${className}`}>{icon}{name}</div>
  )
}

export default Button