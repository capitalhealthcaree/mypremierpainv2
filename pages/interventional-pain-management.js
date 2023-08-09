import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../components/Appointment/AppointmentFormSideBar")
);

const ConditionsWeTreatLeftSide = dynamic(() =>
  import("../components/Common/ConditionsWeTreatLeftSide")
);

const InterventionalPainManagement = dynamic(() =>
  import("../components/InterventionalPainManagement")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Interventional Pain Management in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/interventional-pain-management/`}
        />
        <meta
          name="description"
          content="Dr. Rao K. Ali is a well-regarded and respected physician with extensive experience in interventional pain management. Schedule an appointment today!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Interventional Pain Management in Fort Worth"
        homePageUrl="/"
        homePageText="Home"
        activePageText="interventional-pain-management"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <InterventionalPainManagement />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
