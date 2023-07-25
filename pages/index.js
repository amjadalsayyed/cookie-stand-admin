import Head from "next/head";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [formdata, setFormdata] = useState([]);
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="flex flex-1 min-h-screen flex-col">
        <Header />
        <Main formdata={formdata} setFormdata={setFormdata} />
        <Footer formdata={formdata} />
      </div>
    </>
  );
}
