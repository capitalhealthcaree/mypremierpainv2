import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.mypremierpain.com/" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Thank You"
        homePageUrl="/"
        homePageText="Home"
        activePageText="thank-you"
        bgImage="/images/page-banner1.jpg"
      />
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
