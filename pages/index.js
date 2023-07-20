import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="flex flex-1 min-h-screen flex-col">
        <header className="p-4  bg-green-500 text-gray-50">
          <h1 className="text-5xl text-black ">Cookie Stand Admin</h1>
        </header>
        <main className="flex flex-1 flex-col items-center justify-between p-24">
          <div className=" bg-green-300 p-10 rounded-2xl">
            <h2 className="text-center text-3xl font-bold">
              Create Cookie Stand
            </h2>
            <form action="/send-data-here" method="post">
              <div className="flex p-10">
                <label className="text-xl font-medium">Location:</label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  className="w-full"
                />
              </div>
              <div className="flex font-medium text-center">
                <div className="flex flex-col p-10">
                  <label className="text-xl ">
                    Minimum Customers per Hour:
                  </label>
                  <input type="text" id="min" name="min" />
                </div>
                <div className="flex flex-col p-10">
                  <label className="text-xl">Maximum Customers per Hour:</label>
                  <input type="text" id="max" name="max" />
                </div>
                <div className="flex flex-col p-10">
                  <label className="text-xl">Average Cookie per Sale:</label>
                  <input type="text" id="max" name="max" />
                </div>
                <button type="submit" className="bg-green-500 p-10">
                  Create
                </button>
              </div>
            </form>
          </div>
          <p className="text-xl font-medium">report Table Coming soon ...</p>
        </main>
        <footer className="p-4 mt-8 bg-green-500 text-gray-50">
          <h2>@2023</h2>
        </footer>
      </div>
    </>
  );
}
