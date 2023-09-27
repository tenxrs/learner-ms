import { Line } from 'react-chartjs-2';
import { fakerZU_ZA } from '@faker-js/faker';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);
const labels = ['Term1 ', 'Term2', 'Term3'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Grade 10',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#9d3ebc'
    },
    {
      label: 'Grade 11',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#f8a72e'
    },
    {
      label: 'Grade 12',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#514597'
    }
  ]
};

const Lines = props => {
  return (
    <div className={props.className}>
      <Line data={data} />
    </div>
  );
};
export default Lines;
