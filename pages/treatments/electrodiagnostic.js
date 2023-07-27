import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import Navbar from "../../components/_App/Navbar";

import ElectrodiagnosticDetails from "../../components/Treatments/ElectrodiagnosticDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Electrodiagnostic Testing | Pain Management Device</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/electrodiagnostic`}
        />
        <meta
          name="description"
          content="When a patient uses the Pronox system, he or she receives a single-use tube which is connected to the device. Contact us today to schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Electrodiagnostic"
        homePageUrl="/"
        homePageText="Home"
        activePageText="electrodiagnostic"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <ElectrodiagnosticDetails />
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
