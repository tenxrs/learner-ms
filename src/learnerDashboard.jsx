import { apsTotal } from './ReportCard';
import { useLocation } from 'react-router';
import StudentLeaderboard from './StudentLeaderboard';
import { Tracker } from './Tracker';

export default function Dashboard() {
  const location = useLocation();
  const data = location.state;

  const sombre = data.map(test => {
    return test.tests[0].markObtained;
  });
  const totalTestmarks = sombre.reduce((acc, val) => acc + val, 0);
  const assignmentsTotal = data.map(assignment => {
    return assignment.assignments[0].markObtained;
  });
  const exams = data.map(exam => exam.examinations[0].markObtained);
  const examtotal = exams.reduce((acc, val) => acc + val, 0);
  const ttalAssesmnt = assignmentsTotal.reduce((acc, val) => acc + val, 0);

  const classAvg = parseInt(
    totalTestmarks + ttalAssesmnt + examtotal / 15 + '%'
  );

  const cardStyles = [{
    backgroundColor : '#9d3ebc',
    width : '250px'
  },
{
  backgroundColor: '#f8a72e',
  width : '250px'
},
{
  backgroundColor : '#514597',
  width : '350px'
}]
  
const firstCard = cardStyles[0];
const secondCard = cardStyles[1];
const thirdCard = cardStyles[2];
  return (
    <>
      <div className="font-poppins flex m-5">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <LearnerStatCard
              value={data[0].tests[0].markObtained}
              statType={'Average Grade'}
              customStyles={firstCard}
            />
            <LearnerStatCard value={apsTotal} statType={'APS'} customStyles={secondCard} />
            <LearnerStatCard value={classAvg} statType={'Class Average'} customStyles={thirdCard} />
          </div>
        </div>
      </div>
      <Tracker />
      <StudentLeaderboard
        Subjects={data.map((sub, index) => (
          <optgroup>
            <option>{sub.name}</option>
          </optgroup>
        ))}
      />
    </>
  );
}

const LearnerStatCard = ({ value, statType ,customStyles }) => {
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
            mx-auto
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
          </svg>
          <p className="text-5xl font-extrabold font-mono">{`${value}`}</p>
        </div>
      )}
    </div>
  );
};
