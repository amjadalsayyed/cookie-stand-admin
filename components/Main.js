import { useState } from "react";

import ReportTable from "./ReportTable";

export default function Main({ formdata, setFormdata }) {
  const [show, setShow] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInputs = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    };
    setFormdata([...formdata, formInputs]);
    setShow(false);
  };
  return (
    <main className="flex flex-1 flex-col items-center justify-between pt-20">
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
              <input type="number" name="min" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Maximum Customers per Hour:</label>
              <input type="number" name="max" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Average Cookie per Sale:</label>
              <input type="number" name="avg" />
            </div>
            <button type="submit" className="bg-green-500 p-10">
              Create
            </button>
          </div>
        </form>
      </div>

      {formdata.length === 0 ? (
        <h2 className="text-xl font-medium my-20">No Cookie Stands Availabl</h2>
      ) : (
        <div className="my-10 py-10 text-center ">
          {/* <div className="my-10 py-10 text-center ">
            {JSON.stringify(formdata)}{" "}
          </div> */}
          <ReportTable formdata={formdata} />
        </div>
      )}
    </main>
  );
}
