import { classes } from './data.mjs';
import { Link } from 'react-router-dom';

const StudentLeaderboard = props => {
  const studentsHandler = () => {
    let learners = classes[0].learners;

    learners.sort(
      (a, b) =>
        b.subjects[0].examinations[0].markObtained -
        a.subjects[0].examinations[0].markObtained
    );

    return learners.map((student, index) => {
      return (
        <Link key={student.id} to={`/dash/ ${student.name}`} state={student}>
          <tr className="cursor-pointer">
            <td className="text-center">{index + 1}</td>
            <tr className="">
              <td>
                <img
                  className="ml-2 rounded-full  my-2"
                  src={student.photo}
                  width={25}
                  height={25}
                  alt=""
                />
              </td>
              <td>{student.name}</td>
            </tr>

            <td>{student.subjects[0].examinations[0].name}</td>
            <td>{student.subjects[0].examinations[0].markObtained}</td>
          </tr>
        </Link>
      );
    });
  };

  return (
    <>
      <div className="w-full">
        <label className="flex  space-x-60 mt-10  justify-center m-5">
          <h4 className="block text-white w-40">student Leader board</h4>
          <select className="bg-transparent text-white outline-none w-fit">
            <option value="">Grade 11</option>
            <option value="">Grade 12</option>
          </select>
          <select className="bg-transparent text-white outline-none w-max">
            {props.Subjects}
          </select>
        </label>
        <div className=" bg-[#23233F] rounded-lg py-10 m-5 w-full ">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-10 px-10 text-white ">Ranking</th>
                <th className="justify-start text-left text-white ">
                  Students
                </th>
                <th className="justify-start text-left text-white ">
                  Examination
                </th>
                <th className="justify-start text-left text-white ">Results</th>
              </tr>
            </thead>
            <tbody className="text-white">{studentsHandler()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentLeaderboard;
