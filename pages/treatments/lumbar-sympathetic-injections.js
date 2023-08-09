import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const TreatmentsRightSide = dynamic(() =>
  import("../../components/Common/TreatmentsRightSide")
);
const LumbarSympatheticInjectionsDetails = dynamic(() =>
  import("../../components/Treatments/LumbarSympatheticInjectionsDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Lumbar Sympathetic Injections for Chronic Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/lumbar-sympathetic-injections/`}
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
        pageTitle="Lumbar Sympathetic Injections for Chronic Pain"
        homePageUrl="/"
        homePageText="Home"
        activePageText="lumbar-sympathetic-injections"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <LumbarSympatheticInjectionsDetails />
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
