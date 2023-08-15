import { useLocation } from 'react-router';
import { classes } from './data.mjs';

const StudentLeaderboard = () => {
  const location = useLocation();
  const trymoreWay = () => {
    const data = location.state;
    data.map(names => console.log(names));
  };

  const studentsHandler = () => {
    let learners = classes[0].learners;

    learners.sort(
      (a, b) =>
        b.subjects[0].examinations[0].markObtained -
        a.subjects[0].examinations[0].markObtained
    );

    return learners.map((student, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <tr className="">
            <td>
              <img
                onClick={trymoreWay}
                className="ml-2 rounded-full"
                src={student.photo}
                width={50}
                height={50}
                alt=""
              />
            </td>
            <td>{student.name}</td>
          </tr>

          <td>{student.subjects[0].examinations[0].name}</td>
          <td>{student.subjects[0].examinations[0].markObtained}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <label className="flex w-1/2 space-x-96 mt-10">
        <select>
          <option value="">Grade 11</option>
          <option value="">Grade 12</option>
        </select>
        <select>
          <option value="Subjects"></option>
          <option value="">Mathematics</option>
          <option value="">Life-orientation</option>
          <option value="">English</option>
          <option value="">Accounting</option>
          <option value="">Economics</option>
          <option value="">Business Studies</option>
        </select>
      </label>
      <table className="w-1/2 mt-10">
        <thead>
          <tr>
            <th className="w-10"></th>
            <th className="justify-start  text-left">Students</th>
            <th className="justify-start  text-left">Examination</th>
            <th className="justify-start  text-left">Results</th>
          </tr>
        </thead>
        <tbody>{studentsHandler()}</tbody>
      </table>
    </>
  );
};
export default StudentLeaderboard;
