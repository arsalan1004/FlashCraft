import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Piechart = ({data}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#0A3F67",
            },
          },
        },
      };
  return (
    <Doughnut data={data} options={options} />
  )
}

export default Piechart