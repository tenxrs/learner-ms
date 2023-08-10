export let apsTotal = 0;
const ReportCard = () => {
  const ReportData = () => {
    let reportCardData = [
      {
        mark: 60,
        subject: 'Life-Orientation',
        aps: 1
      },
      {
        mark: 79,
        subject: 'Physical Sciences',
        aps: 1
      },
      {
        mark: 95,
        subject: 'Mathematics',
        aps: 1
      },
      {
        mark: 80,
        subject: 'English',
        aps: 1
      },
      {
        mark: 100,
        subject: 'Life-Sciences',
        aps: 1
      }
    ];

    reportCardData.map(marks => {
      if (marks.mark >= 80) {
        return (marks.aps = 7);
      } else {
        return (marks.aps = 6);
      }
    });

    return reportCardData.map((reportData, index) => {
      apsTotal += reportData.aps;
      console.log('total aps: ', apsTotal);
      return (
        <tr key={index}>
          <td className="border border-late-300">{reportData.subject}</td>
          <td className="border border-late-300 p-1 text-center">
            {reportData.mark}
          </td>
          <td className="border border-late-300 text-center">
            {reportData.aps}
          </td>
          <td className="border border-late-300 p-1 text-center">
            {reportData.mark}
          </td>
          <td className="border border-late-300 text-center">
            {reportData.aps}
          </td>
          <td className="border border-late-300 p-1 text-center">
            {reportData.mark}
          </td>
          <td className="border border-late-300 text-center">
            {reportData.aps}
          </td>
          <td className="border border-late-300 p-1 text-center">
            {reportData.mark}
          </td>
          <td className="border border-late-300 text-center">
            {reportData.aps}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Report Card</h1>
      <table className="self-center ">
        <thead>
          <tr>
            <th className="border border-late-300"></th>
            <th colSpan={2} className="border border-late-300">
              Term1{' '}
            </th>
            <th colSpan={2} className="border border-late-300">
              Term2{' '}
            </th>
            <th colSpan={2} className="border border-late-300">
              Term3{' '}
            </th>
            <th colSpan={2} className="border border-late-300">
              Term4{' '}
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th className="border border-late-300">subjects</th>
            <th className="border border-late-300">marks(%)</th>
            <th className="border border-late-300">avg(%)</th>
            <th className="border border-late-300">marks(%)</th>
            <th className="border border-late-300">avg(%)</th>
            <th className="border border-late-300">marks(%)</th>
            <th className="border border-late-300">avg(%)</th>
            <th className="border border-late-300">marks(%)</th>
            <th className="border border-late-300">avg(%)</th>
          </tr>
        </thead>

        <tbody>{ReportData()}</tbody>
      </table>
    </>
  );
};

export default ReportCard;
