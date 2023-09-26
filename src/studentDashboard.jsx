import { UniversityCourses } from './Courses.mjs';
import { Tracker } from './Tracker';
import Calendar from 'react-calendar';
import Card from './Card';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const state = useLocation();

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
              <div className="">
                <Card>
                  <h1 className="text-white text-lg cursor-pointer ">
                    {course.course}
                  </h1>
                </Card>
                <div>
                  <button className=" bg-[#9d3ebc] m-1 h-auto text-white justify-center rounded p-0.5 ">
                    Apply
                  </button>
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

        <div className="w-1/2">
          <label className="text-white text-2xl" htmlFor="">
            Student Progress{' '}
          </label>
          <Tracker />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </>
  );
};
export default StudentDashboard;
