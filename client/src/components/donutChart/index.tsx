import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from 'chart.js';
ChartJS.register(ArcElement, Legend, Title, Tooltip);

interface IDonutProps {
  topText: string;
  value: number;
  price: number;
  backgroundColor: Array<string>;
	cutout?: string;
	radius?: number;


}

const DonutChart: React.FC<IDonutProps> = ({topText, value, price, backgroundColor, cutout, radius}) => {

  const data = {
    labels: [],
    datasets: [
			{
				data: [value, 100 - value],
				backgroundColor: backgroundColor,
				borderWidth: 0,
				cutout: cutout ? cutout : '55%',
				borderRadius: radius ? radius : 2,
			},
		],

  };

  const options: any = {
		maintainAspectRatio: false,
	};

  const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart: any, _args: any, _pluginOptions: any) {
			const { ctx, data } = chart;

			
			ctx.save();
			ctx.font = '9px san-serif';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(
				`${data.datasets[0].data[0]}%`,
				chart.getDatasetMeta(0).data[0].x,
				chart.getDatasetMeta(0).data[0].y,
			);
			ctx.restore();
		},
	};

  return (
    <div>
      <p>{topText}</p>
      <div>
        <Doughnut data={data} options={options} plugins={[textCenter]}/>
      </div>
      <p>₵{price}.00</p>
    </div>
  )
}

export default DonutChart;