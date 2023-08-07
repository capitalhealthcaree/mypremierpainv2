import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.mypremierpain.com/" />
      </Head>

      <Navbar />

      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="symptoms-img">
                <img src="/images/thank-you.webp" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
