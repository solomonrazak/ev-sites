import React from "react";
import TotalCharges from "../../components/totalCharges";
import DonutChart from "../../components/donutChart";
import ActiveCard from "../../components/activeCard";
import ActiveSubscriptions from "../../components/activeSubscriptions";

const Dashboard: React.FC = () => {
  return (
    <main className="md:grid grid-cols-2 w-full gap-5 item-start h-full mt-10 ">
      <section className="space-y-4">
        <div>
          <TotalCharges />
        </div>
        <div className="grid xl:grid-cols-3 gap-4">
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
      </section>
      <section className="space-y-4">
        <div className="grid xl:grid-cols-2 gap-4">
          <ActiveCard title="Active Charge Point" />
          <ActiveSubscriptions />
        </div>
        <div>
          <TotalCharges />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
