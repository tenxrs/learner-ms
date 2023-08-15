import { classes } from './data.mjs';

const StudentLeaderboard = props => {
  const studentsHandler = () => {
    let learners = classes[0].learners;
    console.log(
      learners.sort(
        (a, b) =>
          b.subjects[0].examinations[0].markObtained -
          a.subjects[0].examinations[0].markObtained
      )
    );

    return learners.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.name}</td>
          <td>{student.subjects[0].examinations[0].name}</td>
          <td>{student.subjects[0].examinations[0].markObtained}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="flex">
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
      </div>
      <table className="">
        <thead className="w-full">
          <tr>
            <th onClick={studentsHandler}>Students</th>
            <th>Examination</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>{studentsHandler()}</tbody>
      </table>
    </>
  );
};
export default StudentLeaderboard;
