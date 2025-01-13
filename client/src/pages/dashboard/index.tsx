import React from "react";
import TotalCharges from "../../components/totalCharges";
import DonutChart from "../../components/donutChart";
import ActiveCard from "../../components/activeCard";
import ActiveSubscriptions from "../../components/activeSubscriptions";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 item-start h-full mt-10 ">
      <div className="">
        <TotalCharges />
      </div>

      <div className="flex flex-col md:flex-col xl:flex-row gap-3 ">
        <ActiveCard title="Active Charge Point" />
        <ActiveSubscriptions />
      </div>
      <div className="flex flex-col md:flex-col xl:flex-row gap-3">
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
      <div className="">
        <TotalCharges />
      </div>
    </div>
  );
};

export default Dashboard;
