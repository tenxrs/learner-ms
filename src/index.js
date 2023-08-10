import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Activities from './Activities';
import { Tracker } from './Tracker';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './learnerDashboard';
import ReportCard from './ReportCard';
import Table from './Timetable';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/activities",
    element: <Activities />,
  },
  {
    path: "/tracker",
    element: <Tracker />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/results',
    element: <ReportCard />
  },
  {
    path: '/timetable',
    element: <Table />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
