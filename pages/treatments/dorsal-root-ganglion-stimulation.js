import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import Navbar from "../../components/_App/Navbar";

import DorsalRootGanglionStimulationDetails from "../../components/Treatments/DorsalRootGanglionStimulationDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Dorsal Root Ganglion Stimulation Therapy In Lancaster</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/dorsal-root-ganglion-stimulation/`}
        />
        <meta
          name="description"
          content="Dr ali pain management, has recently developed an innovative new procedure called the Dorsal Root Ganglion Procedure. Contact us today to schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Dorsal Root Ganglion Stimulation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="dorsal-root-ganglion-stimulation"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <DorsalRootGanglionStimulationDetails />
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
