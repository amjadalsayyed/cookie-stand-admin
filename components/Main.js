import { useState } from "react";

import ReportTable from "./ReportTable";

export default function Main() {
  const [formdata, setFormdata] = useState({});
  const [show, setShow] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInputs = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    };
    setFormdata(formInputs);
    setShow(false);
  };
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <div className=" bg-green-300 p-10 rounded-2xl">
        <h2 className="text-center text-3xl font-bold">Create Cookie Stand</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex p-10">
            <label className="text-xl font-medium">Location:</label>
            <input name="location" className="w-full" />
          </div>
          <div className="flex font-medium text-center">
            <div className="flex flex-col p-10">
              <label className="text-xl ">Minimum Customers per Hour:</label>
              <input name="min" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Maximum Customers per Hour:</label>
              <input name="max" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Average Cookie per Sale:</label>
              <input name="avg" />
            </div>
            <button type="submit" className="bg-green-500 p-10">
              Create
            </button>
          </div>
        </form>
      </div>

      {show ? (
        <p className="text-xl font-medium my-20">
          report Table Coming soon ...
        </p>
      ) : (
        <div>
          <div className="my-10 py-10 text-center ">
            {JSON.stringify(formdata)}{" "}
          </div>
          <ReportTable />
        </div>
      )}
    </main>
  );
}
