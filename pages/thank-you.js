import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
      <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/thank-you/`}
        />
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
