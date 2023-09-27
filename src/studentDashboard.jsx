import { UniversityCourses } from './Courses.mjs';
import { Tracker } from './Tracker';
import Card from './Card';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import MyApp from './Calender';

import DoughnutChart from './Doughnut';

const StudentDashboard = () => {
  const state = useLocation();

  return (
    <>
      <div className="flex ">
        <img src={state.state.photo} width={45} alt="" />
        <h1 className="text-white">{state.state.name}</h1>
      </div>

      <div className=" sm:flex mx-10 gap-5 h-screen ">
        <div>
          <label className="text-white text-xl font-medium" htmlFor="">
            Wits Courses you could qualify for:
          </label>
          {UniversityCourses.map(course => {
            return state.state.aps >=
              course.entryRequirements[0].minRequiredAps ? (
              <div className="truncate ">
                <Card>
                  <h1
                    className="text-white text-lg cursor-pointer 
                   "
                  >
                    {course.course}
                  </h1>
                </Card>
                <div>
                  <Link
                    to={
                      'https://www.wits.ac.za/display/?keywords=science&courseType=Undergraduate'
                    }
                    className=" bg-[#9d3ebc] m-1 h-auto text-white justify-center rounded p-0.5 "
                  >
                    Apply
                  </Link>
                  <Link
                    to={`/courses/:${course.course}:${state.state.name}`}
                    state={course}
                    className=" bg-white m-1 h-auto  justify-center rounded p-0.5"
                  >
                    Course info
                  </Link>
                </div>
              </div>
            ) : (
              ''
            );
          })}
        </div>

        <div className="w-screen">
          <label className="text-white text-2xl" htmlFor="">
            Student Progress{' '}
          </label>
          <h1 className="text-sm text-slate-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            porro velit, repellendus labore quod minus commodi doloremque
            laborum recusandae eaque!
          </h1>
          <div className="mt-10">
            <Tracker className={'object-fit  w-full invisible md:visible  '} />
            <DoughnutChart />
          </div>
        </div>
        <div className="">
          <MyApp className={'mt-20'} />
        </div>
      </div>
    </>
  );
};
export default StudentDashboard;
