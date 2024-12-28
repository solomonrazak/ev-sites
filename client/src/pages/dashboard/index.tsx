import React from "react";
import TotalCharges from "../../components/totalCharges";
import DonutChart from "../../components/donutChart";
import ActiveCard from "../../components/activeCard";
import ActiveSubscriptions from "../../components/activeSubscriptions";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 w-full gap-5 items-stretch">
      <div className="row-start-1 row-span-3">
        <TotalCharges />
      </div>

      <div className="flex gap-3 row-start-1 row-span-2">
        <ActiveCard title="Active Charge Point" />
        <ActiveSubscriptions />
      </div>
      <div className="flex gap-3 row-start-4 row-span-2">
        <DonutChart
          topText="Opportunities"
          value={70}
          price={500}
          backgroundColor={["#4CAF50", "#E0E0E0"]}
        />
        <DonutChart
          topText="Opportunities"
          value={70}
          price={500}
          backgroundColor={["#4CAF50", "#E0E0E0"]}
        />
        <DonutChart
          topText="Opportunities"
          value={70}
          price={500}
          backgroundColor={["#4CAF50", "#E0E0E0"]}
        />
      </div>
      <div className="row-start-3 row-span-3">
        <TotalCharges />
      </div>
    </div>
  );
};

export default Dashboard;
