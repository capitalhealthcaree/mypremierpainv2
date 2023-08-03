import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import LegPainDetails from "../../components/ConditionsWeTreat/LegPainDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Leg Pain And Swelling Specialists in Cleburne, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/leg-pain/`}
        />
        <meta
          name="description"
          content="Contact Premier Pain Centers today if you need treatment for leg pain in Richardson, Fort Worth, or the surrounding areas. We offer same-day appointments."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Leg Pain Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="leg-pain"
        bgImage="/images/conditions-we-treat/leg-pain/leg-treatment.jpg"
      />

      <div className="doctor-details-area pt-4 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <LegPainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
