import data, { hours, totals } from "@/data";

export default function ReportTable({ formdata }) {
  return (
    <table className="pt-20">
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
        {formdata.map((item, indx) => (
          <tr className={indx % 2 === 0 ? "bg-green-400" : "bg-green-500"}>
            <td className="border border-black py-2 text-center">
              {item.location}
            </td>
            {data.map((i) => (
              <td className="border border-black py-2 text-center">{i}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-green-600">
          <td className="border border-black text-center font-bold">Totals</td>
          {data.map((y) => (
            <td className="border border-black text-center font-bold" key={y}>
              {y * formdata.length}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
