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

  return (
    <div>
      <p>{topText}</p>
      <p>{price}</p>
    </div>
  )
}

export default DonutChart;