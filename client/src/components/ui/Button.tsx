import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void;
    className? : string;
}

const Button: React.FC<IButtonProps> = ({name, onClick, className}) => {
  return (
    <div className={`bg-transparent p-2 text-white border border-gray-400 w-20 text-center rounded-md ${className}`}>{name}</div>
  )
}

export default Button