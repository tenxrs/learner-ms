import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { fakerZU_ZA } from '@faker-js/faker';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const data = {
  labels,
  datasets: [
    {
      label: 'Attendance',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Grades Average',
      data: labels.map(() => fakerZU_ZA.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Tracker() {
  return <Bar options={options} data={data} />;
}
