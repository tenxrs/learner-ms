import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fakerZU_ZA } from '@faker-js/faker';
ChartJS.register(ArcElement, Legend, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
};
const labels = ['January', 'Feb'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Examinations',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#9d3ebc'
    },
    {
      label: 'Tests',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#f8a72e'
    },
    {
      label: 'Assignments',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 25 })),
      backgroundColor: '#514597'
    }
  ]
};
const DoughnutChart = props => {
  return (
    <div className="h-96">
      <Doughnut data={data} />;
    </div>
  );
};
export default DoughnutChart;
