import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BursaInjectionDetails from "../../components/Treatments/BursaInjectionDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Hip Bursa Injection in Fort Worth, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/bursa-injection/`}
        />
        <meta
          name="description"
          content="Quick relief with Bursa injections! Effective treatment for joint pain & inflammation. Find relief today. Expert care at Premier Pain Centers in Lancaster."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Hip Bursa Injection - Relieve Your Joint Pain Today"
        homePageUrl="/"
        homePageText="Home"
        activePageText="bursa-injection"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <BursaInjectionDetails />
            </div>

            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <TreatmentsRightSide />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
