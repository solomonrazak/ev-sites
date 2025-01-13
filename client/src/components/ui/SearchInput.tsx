import React from 'react';

interface ISearchProps {
    placeholder: string;
    className?: string;
    value: string;
}

const SearchInput:React.FC<ISearchProps> = ({placeholder, className, value}) => {
  return <input className="bg-slate-800 text-[20px] border border-gray-500 text-white w-80 pb-1 h-10 pl-3 rounded-md" value={value} placeholder={placeholder}/>
}

export default SearchInput;