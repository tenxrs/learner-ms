import { classes } from './data.mjs';
import Learner from './Learner';

const App = () => {
  const learners = classes[0].learners;
  return learners.map(learner => {
    return (
      <Learner
        key={learner.id}
        aps={learner.aps}
        name={learner.name}
        surname={learner.surname}
        age={learner.age}
        gender={learner.gender}
        avatar={learner.photo}
        markPercentage={learner.subjects[0].tests[0].markPercentage * 100 + '%'}
        learnerSubjects={learner.subjects}
      />
    );
  });
};

export default App;
