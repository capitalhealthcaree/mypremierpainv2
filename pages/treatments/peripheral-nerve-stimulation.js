import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PeripheralNerveStimulationDetails from "../../components/Treatments/PeripheralNerveStimulationDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Peripheral Nerve Stimulation (PNS) for Neuropathic Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/peripheral-nerve-stimulation/`}
        />
        <meta
          name="description"
          content="Dr. ali pain management, has done extensive research on peripheral nerve stimulation (PNS) as a method of relieving chronic pain."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Peripheral Nerve Stimulation (PNS) for Neuropathic Pain"
        homePageUrl="/"
        homePageText="Home"
        activePageText="peripheral-nerve-stimulation"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <PeripheralNerveStimulationDetails />
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
