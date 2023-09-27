import { useLocation } from 'react-router';

const CourseInfo = () => {
  const state = useLocation();
  console.log(state.state.entryRequirements);

  return (
    <div className="text-black bg-white h-screen">
      <img
        className="w-full h-96 object-cover"
        src={state.state.url}
        alt="img"
      />
      <h2 className="text-xl">{state.state.course}</h2>
      <h3>Course Description</h3>
      <p>{state.state.description}</p>
      <h3>Requirements :</h3>
      <p>
        {state.state.entryRequirements.map(req => (
          <p>Minimum Required Aps : {req.minRequiredAps} </p>
        ))}
      </p>
      <p>Course Duration : {state.state.courseDuration}</p>
    </div>
  );
};

export default CourseInfo;
