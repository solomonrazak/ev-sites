import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void;
    className? : string;
}

const Button: React.FC<IButtonProps> = ({name, onClick, className}) => {
  return (
    <div className={`bg-transparent p-2 text-white ${className}`}>{name}</div>
  )
}

export default Button