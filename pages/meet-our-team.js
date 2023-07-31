import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Doctors = () => {
  return (
    <>
      <Head>
        <title>Find a Doctor and Specialist In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}meet-our-team`}
        />
        <meta
          name="description"
          content="Looking for a physician? Use our doctor search tool to find the right doctor for you. schedule an appointment online today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Meet Our Qualified Doctors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="doctors"
        bgImage="/images/doctors/doctor-bg.jpg"
      />

      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor1.jpg" alt="Doctor" />

                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/meet-our-team/rao-k-ali">
                      Dr. Rao K. Ali M.D.
                    </Link>
                  </h3>
                  <span>Interventional Pain Management Physician</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-">
                      DR. MUHAMMAD ZULQARNAIN M.D.
                    </Link>
                  </h3>
                  <span>Pain Management Physician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;
