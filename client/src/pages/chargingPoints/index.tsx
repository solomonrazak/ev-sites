import React from "react";
import ChargeCard from "../../components/chargeCard";
import { MdBatteryCharging20 } from "react-icons/md";
import { MdBatteryAlert } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import ChargeTable from "../../components/chargeTable";


const ChargingPoints: React.FC = () => {
  return (
    <div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <ChargeCard
        name="Active Charging Points"
        total={0}
        icon={<MdBatteryCharging20 size={35}/>}
      />
      <ChargeCard
        name="Inactive Charging Points"
        total={0}
        icon={<MdBatteryAlert size={35} />}
      />
      <ChargeCard
        name="Require Maintenance"
        total={0}
        icon={<BsTools size={35} />}
        className="-ml-[2.7px]"
      />
      <ChargeCard
        name="Active Charging Points"
        total={0}
        icon={<MdBatteryCharging20 size={35} />}
      />
    </div>
    <ChargeTable />
    </div>
  );
};

export default ChargingPoints;
