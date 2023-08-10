export default function Table() {
  const timeTable = () => {
    let data = [
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      },
      {
        time: '10:00',
        subject: 'Physical Sciences'
      }
    ];

    return data.map(subject => {
      return (
        <tr>
          <td className="border border-late-300">8:00</td>
          <td className="border border-slate-300 p-4">{subject.subject}</td>
          <td className="border border-slate-300 p-4">Life Orientation</td>
          <td className="border border-slate-300 p-4">Life Orientation</td>
          <td className="border border-slate-300 p-4">Life Orientation</td>
          <td className="border border-slate-300 p-4">Life Orientation</td>
        </tr>
      );
    });
  };
  return (
    <div className="overflow-y-scroll w-2/5">
      <table className="border-collapse border border-slate-400 w-1/4">
        <caption className="caption-top underline font-bold text-neutral-600">
          Time Table.
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-300"></th>
            <th className="border border-slate-300">Monday</th>
            <th className="border border-slate-300">Tuesday</th>
            <th className="border border-slate-300">Wednesday</th>
            <th className="border border-slate-300">Thursday</th>
            <th className="border border-slate-300">Friday</th>
          </tr>
        </thead>
        <tbody>{timeTable()}</tbody>
      </table>
    </div>
  );
}
