import { apsTotal } from './ReportCard';

export default function Dashboard() {
  return (
    <>
      <div className="font-poppins flex">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <LearnerStatCard value={90} statType={'Average Grade'} />
            <LearnerStatCard value={apsTotal} statType={'APS'} />
            <LearnerStatCard value={82} statType={'Class Average'} />
          </div>
        </div>
      </div>
    </>
  );
}

const LearnerStatCard = ({ value, statType }) => {
  return (
    <div
      className="
            rounded-lg
            h-60 p-8
            flex flex-col-reverse items-center justify-around text-center
            bg-white-300 
            shadow-lg hover:shadow-indigo-400 hover:shadown-inner transition-all ease-in-out duration-150
            w-60 
            mx-auto
            py-8
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
