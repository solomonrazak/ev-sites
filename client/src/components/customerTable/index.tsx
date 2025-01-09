import React from 'react';
import Button from '../ui/Button';

const CustomerTable:React.FC = () => {
  return (
    <div className="w-full bg-main-dark-bg">
        <div>
            <div>
                <input type="text" value="" placeholder="search" className="bg-black text-white"/>
                <Button name="Filter"/>
                <Button name="Export"/>
                
            </div>
        </div>

    </div>
  )
}

export default CustomerTable;