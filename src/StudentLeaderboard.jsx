import { useLocation } from "react-router";
import { classes } from "./data.mjs";

const StudentLeaderboard = (props) => {
  const location = useLocation();
  const trymoreWay = () => {
    const data = location.state;
    data.map((names) => console.log(names));
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
          <td className="text-center">{index}</td>
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
      );
    });
  };

  return (
    <>
      <label className="flex w-4/4 space-x-80 mt-10  m-5">
        <h4 className="block text-white">student Leader board</h4>
        <select className="bg-transparent text-white outline-none">
          <option value="">Grade 11</option>
          <option value="">Grade 12</option>
        </select>
        <select className="bg-transparent text-white outline-none">{props.Subjects}</select>
      </label>
      <div className=" bg-slate-800 rounded-lg py-10 m-5 w-3/4 ">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-10 px-10 text-white ">Ranking</th>
            <th className="justify-start text-left text-white ">Students</th>
            <th className="justify-start text-left text-white ">Examination</th>
            <th className="justify-start text-left text-white ">Results</th>
          </tr>
        </thead>
        <tbody className="text-white">{studentsHandler()}</tbody>
      </table>
      </div>
    </>
  );
};
export default StudentLeaderboard;
