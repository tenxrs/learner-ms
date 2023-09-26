import { classes } from './data.mjs';
import { UniversityCourses } from './Courses.mjs';

import { Tracker } from './Tracker';
import Calendar from 'react-calendar';
import Card from './Card';
import { useLocation } from 'react-router';

const StudentDashboard = props => {
  const state = useLocation();
  console.log(state.state.aps);
  return (
    <>
      <div className="flex">
        <img src={state.state.photo} width={45} alt="" />
        <h1 className="text-white">{state.state.name}</h1>
      </div>

      <div className="flex mx-10 gap-5">
        <div>
          <label className="text-white text-xl" htmlFor="">
            Courses you could qualify for:
          </label>
          {UniversityCourses.map(course => {
            return state.state.aps >=
              course.entryRequirements[0].minRequiredAps ? (
              <div>
                <Card>
                  <h1 className="text-white text-lg cursor-pointer ">
                    {course.course}
                  </h1>
                </Card>
              </div>
            ) : (
              ''
            );
          })}
        </div>

        <div className="w-1/2">
          <label className="text-white text-2xl" htmlFor="">
            Student Progress{' '}
          </label>
          <Tracker />
        </div>
        <Calendar />
      </div>
    </>
  );
};
export default StudentDashboard;
