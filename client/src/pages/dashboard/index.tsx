import React from 'react'
import TotalCharges from '../../components/totalCharges';
import DonutChart from '../../components/donutChart';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <TotalCharges />
      <div>
        <DonutChart topText="opportunities" price={0} backgroundColor={}/>
      </div>
      <div></div>
      <TotalCharges />
    </div>
  )
}

export default Dashboard;