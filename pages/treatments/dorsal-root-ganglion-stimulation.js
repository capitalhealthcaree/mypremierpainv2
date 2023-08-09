import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const DorsalRootGanglionStimulationDetails = dynamic(() =>
  import("../../components/Treatments/DorsalRootGanglionStimulationDetails")
);

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const TreatmentsRightSide = dynamic(() =>
  import("../../components/Common/TreatmentsRightSide")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Dorsal Root Ganglion Stimulation Therapy In Lancaster</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/dorsal-root-ganglion-stimulation/`}
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
