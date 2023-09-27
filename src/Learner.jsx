import Card from './Card';
import { Link } from 'react-router-dom';

const Learner = ({
  name,
  surname,
  age,
  markPercentage,
  subject,
  gender,
  avatar,
  learnerSubjects
}) => {
  return (
    <Card>
      <Link to={`/dashboard`} state={learnerSubjects}>
        <img className="rounded-full" src={avatar} alt="/" />
        <h2 className="w-max">{name}</h2>
        <h3 className="w-max">{surname}</h3>
        <h4 className="w-max">{age}</h4>
        <h5 className="w-max">{gender}</h5>
        <h1>percentage: {markPercentage}</h1>
      </Link>
    </Card>
  );
};

export default Learner;
