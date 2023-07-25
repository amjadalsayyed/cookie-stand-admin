import { useState } from "react";

import ReportTable from "./ReportTable";

export default function Main({ formdata, setFormdata }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let formInputs = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    };
    setFormdata([...formdata, formInputs]);
  };
  return (
    <main className="flex flex-1 flex-col items-center justify-between pt-20">
      <div className=" bg-green-300 p-10 rounded-2xl">
        <h2 className="text-center text-3xl font-bold">Create Cookie Stand</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex p-10">
            <label className="text-xl font-medium p-2">Location:</label>
            <input
              name="location"
              className="w-full px-2"
              placeholder="Cookie Stand Location"
            />
          </div>
          <div className="flex font-medium text-center">
            <div className="flex flex-col p-10">
              <label className="text-xl mb-2">
                Minimum Customers per Hour:
              </label>
              <input className="p-2" type="number" name="min" placeholder="0" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl mb-2">
                Maximum Customers per Hour:
              </label>
              <input className="p-2" type="number" name="max" placeholder="0" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl mb-2">Average Cookie per Sale:</label>
              <input className="p-2" type="number" name="avg" placeholder="0" />
            </div>
            <button type="submit" className="bg-green-500 p-10 rounded-lg">
              Create
            </button>
          </div>
        </form>
      </div>

      {formdata.length === 0 ? (
        <h2 className="text-xl font-medium my-20">
          No Cookie Stands Available
        </h2>
      ) : (
        <div className="my-10 py-10 text-center ">
          <ReportTable formdata={formdata} setFormdata={setFormdata} />
        </div>
      )}
    </main>
  );
}
