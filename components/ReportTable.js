import data, { hours, totals } from "@/data";

export default function ReportTable() {
  return (
    <table className="p-20">
      <thead>
        <tr className="bg-green-600">
          <th className="px-5">Location</th>
          {hours.map((hour) => (
            <th className="px-5">{hour}</th>
          ))}
          <th className="px-5">Totals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, indx) => {
          return (
            <tr
              key={x}
              className={indx % 2 === 0 ? "bg-green-400" : "bg-green-500"}
            >
              <td className="border border-black py-2 text-center">
                {x.location}
              </td>
              {x.time.map((hour) => (
                <td className="border border-black py-2 text-center" key={hour}>
                  {hour}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="bg-green-600">
          {totals.map((y) => (
            <td className="border border-black text-center font-bold" key={y}>
              {y}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
