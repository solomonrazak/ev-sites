import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Legend, Title, Tooltip);

interface IDonutProps {
  topText: string;
  value: number;
  price: number;
  backgroundColor: Array<string>;
  cutout?: string;
  radius?: number;
}

const DonutChart: React.FC<IDonutProps> = ({
  topText,
  value,
  price,
  backgroundColor,
  cutout,
  radius,
}) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: backgroundColor,
        borderWidth: 0,
        cutout: cutout ? cutout : "75%",
        borderRadius: radius ? radius : 1,
      },
    ],
  };

  const options: any = {
    maintainAspectRatio: false,
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart: any, _args: any, _pluginOptions: any) {
      //   const { ctx, data } = chart;

      const { ctx } = chart;
      const value = chart.data.datasets[0].data[0];

      ctx.save();
      ctx.font = "12px san-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

	  // Get the center position of the chart
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
 
	  // Draw the percentage value
      ctx.fillText(`${value}%`, x, y - 10);


	  // Draw the "paid" text below the percentage
      ctx.font = "12px sans-serif";
      ctx.fillText("paid", x, y + 10); // Adjust y position to move it below the percentage
      ctx.restore();
    },
  };

  return (
    <div className="bg-[#333333] h-64 p-2 rounded-md w-full m-0">
      <p>{topText}</p>
      <div className="w-36 h-36 p-1">
        <Doughnut data={data} options={options} plugins={[textCenter]} />
      </div>
      <p className="mt-2">₵{price}.00</p>
    </div>
  );
};

export default DonutChart;
