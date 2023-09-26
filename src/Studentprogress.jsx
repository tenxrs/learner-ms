import { classes } from './data.mjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
export const data = {
  datasets: [
    {
      label: 'examinations',
      data: classes.map(marks =>
        console.log(
          marks[0].learners[0].subjects[0].examinations[0].markObtained
        )
      ),
      backgroundColor: '#9d3ebc'
    }
    // {
    //   label: 'Grades Average',
    //   data: classes.map(
    //     assignment =>
    //     //   assignment[0].learners[0].subjects[0].assigments[0].markObtained
    //   ),
    //   backgroundColor: '#514597'
    // }
  ]
};

const StudentProgress = () => {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default StudentProgress;
