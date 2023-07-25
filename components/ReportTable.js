import data, { hours, totals } from "@/data";
import { FaTrashAlt } from "react-icons/fa";
export default function ReportTable({ formdata, setFormdata }) {
  function handleDelete(indx) {
    let newdata = formdata.filter((i, index) => index !== indx);
    setFormdata(newdata);
    console.log(newdata);
  }
  return (
    <table className="pt-20">
      <thead>
        <tr className="bg-green-600">
          <th className="px-5 w-52">Location</th>
          {hours.map((hour) => (
            <th className="px-5">{hour}</th>
          ))}
          <th className="px-5">Totals</th>
        </tr>
      </thead>
      <tbody>
        {formdata.map((item, indx) => (
          <tr className={indx % 2 === 0 ? "bg-green-400" : "bg-green-500"}>
            <td className="flex justify-between p-5 border border-black py-2 text-center">
              <p>{item.location}</p>
              <button onClick={() => handleDelete(indx)}>
                <FaTrashAlt />
              </button>
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
          {data.map((y, indx) => (
            <td
              className="border border-black text-center font-bold"
              key={indx}
            >
              {y * formdata.length}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
