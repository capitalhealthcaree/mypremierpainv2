import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import JointInjectionsDetails from "../../components/Treatments/JointInjectionsDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Joint Injections for Arthritis Pain In Cleburne</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/joint-injections/`}
        />
        <meta
          name="description"
          content="Joint injections fort worth or the aspiration of joint fluid is performed in a hospital or office setting using a cold spray or other local anesthetic."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Joint Injections for Arthritis Pain In Cleburne"
        homePageUrl="/"
        homePageText="Home"
        activePageText="joint-injections"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <JointInjectionsDetails />
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
