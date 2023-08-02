import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import CoccydyniaDetails from "../../components/ConditionsWeTreat/CoccydyniaDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Coccydynia Specialists Doctors in Cleburne, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/coccydynia/`}
        />
        <meta
          name="description"
          content="Coccydynia symptoms should be examined by your physician if they persist for more than a few days. Dr. Rao K. Ali is a board-certified Coccydynia specialist in Dallas, TX."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Coccydynia Treatment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="coccydynia"
        bgImage="/images/conditions-we-treat/coccydynia/coccydynia-treatments.png"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <CoccydyniaDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
