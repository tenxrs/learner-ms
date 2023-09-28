import { apsTotal } from './ReportCard';
import { useLocation } from 'react-router';
import StudentLeaderboard from './StudentLeaderboard';
import { Tracker } from './Tracker';
import MyApp from './Calender';
import MeetingScheduler from './MeetingScheduler';
import Lines from './Lines';
export default function Dashboard() {
  const location = useLocation();
  console.log(location);

  const sombre = location.state.map(test => {
    return test.tests[0].markObtained;
  });
  const totalTestmarks = sombre.reduce((acc, val) => acc + val, 0);
  const assignmentsTotal = location.state.map(assignment => {
    return assignment.assignments[0].markObtained;
  });
  const exams = location.state.map(exam => exam.examinations[0].markObtained);
  const examtotal = exams.reduce((acc, val) => acc + val, 0);
  const ttalAssesmnt = assignmentsTotal.reduce((acc, val) => acc + val, 0);

  const classAvg = parseInt(
    totalTestmarks + ttalAssesmnt + examtotal / 15 + '%'
  );

  const cardStyles = [
    {
      backgroundColor: '#9d3ebc',
      width: '250px'
    },
    {
      backgroundColor: '#f8a72e',
      width: '250px'
    },
    {
      backgroundColor: '#514597',
      width: '350px'
    }
  ];

  const firstCard = cardStyles[0];
  const secondCard = cardStyles[1];
  const thirdCard = cardStyles[2];
  return (
    <>
      <div className="flex">
        <div className="font-poppins flex-col m-5 w-3/4">
          <div>
            <div className="flex m-0">
              <LearnerStatCard
                value={location.state[0].tests[0].markObtained}
                statType={'Average Grade'}
                customStyles={firstCard}
              />
              <LearnerStatCard
                value={apsTotal}
                statType={'APS'}
                customStyles={secondCard}
              />
              <LearnerStatCard
                value={classAvg}
                statType={'Class Average'}
                customStyles={thirdCard}
              />
            </div>
          </div>
          <div>
            <Tracker className="h-96" />
            <StudentLeaderboard
              Subjects={location.state.map(sub => (
                <optgroup>
                  <option>{sub.name}</option>
                </optgroup>
              ))}
            />
          </div>
        </div>
        <div className="mx-10">
          <div>
            <MeetingScheduler />
            <MyApp />
            <h2 className="text-white">Parents meeting attendance tracker:</h2>
            <Lines />
          </div>
        </div>
      </div>
    </>
  );
}

const LearnerStatCard = ({ value, statType, customStyles }) => {
  return (
    <div
      style={customStyles}
      className="
            rounded-lg
            h-40 p-8
            flex flex-col-reverse items-center justify-around text-center
            bg-blue-300 
            shadow-lg hover:shadow-indigo-400 hover:shadown-inner transition-all ease-in-out duration-150
            w-40 
            mx-2
            mt-5
            py-8
            text-white
            "
    >
      <h2 className="font-poppins text-lg">{statType}</h2>
      {value > 80 ? (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>

          <p className="text-5xl font-extrabold font-mono">
            {value < 80 ? value : `${value}%`}
          </p>
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
            inpu
          </svg>
          <p className="text-5xl font-extrabold font-mono">{`${value}`}</p>
          <div>something</div>
        </div>
      )}
    </div>
  );
};
