import { classes } from './data.mjs';
import Learner from './Learner';

const App = () => {
  const learners = classes[0].learners;
  return (
    <>
      <div className="flex justify-center text-white ">
        <h1 className="self-center font-bold text-3xl">Class of 2023</h1>
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        {learners.map(learner => {
          return (
            <div className="m-5 ">
              <Learner
                key={learner.id}
                aps={learner.aps}
                name={learner.name}
                surname={learner.surname}
                age={learner.age}
                gender={learner.gender}
                avatar={learner.photo}
                markPercentage={
                  learner.subjects[0].tests[0].markPercentage * 100 + '%'
                }
                learnerSubjects={learner.subjects}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
