import { useNavigate } from 'react-router';
import Card from './Card';

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
  const navigate = useNavigate();
  const data = learnerSubjects;
  const datatransferHandler = () => {
    navigate('/dashboard', { state: learnerSubjects });
  };
  return (
    <Card>
      <div onClick={datatransferHandler}>
        <img className="rounded-full" src={avatar} alt="/" />
        <h2 className="w-max">{name}</h2>
        <h3 className="w-max">{surname}</h3>
        <h4 className="w-max">{age}</h4>
        <h5 className="w-max">{gender}</h5>
        <h1>percentage: {markPercentage}</h1>
        <h1>subject :{subject} </h1>
      </div>
    </Card>
  );
};

export default Learner;
