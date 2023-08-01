import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import SpinalCordStimulationDetails from "../../components/Treatments/SpinalCordStimulationDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Spinal Cord Stimulator Treatment for Back Chronic Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/spinal-cord-stimulation/`}
        />
        <meta
          name="description"
          content="Pain Management Richardson's team of experienced physicians understands how spinal cord issues affects quality of life. Contact us today at 469-562-4188 to schedule an appointment!"/>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Spinal Cord Stimulator Treatment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="spinal-cord-stimulation"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <SpinalCordStimulationDetails />
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
