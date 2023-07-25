import Head from "next/head";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  const [formdata, setFormdata] = useState([]);
  const { user } = useAuth();
  // let user = null;

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ? (
        <div className="flex flex-1 min-h-screen flex-col">
          <Header />
          <Main formdata={formdata} setFormdata={setFormdata} />
          <Footer formdata={formdata} />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
