import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import KneePainDetails from "../../components/ConditionsWeTreat/KneePainDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Chronic Knee Pain Specialist Near Me</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/knee-pain`}
        />
        <meta
          name="description"
          content="Our team of knee pain doctors is here to help.  We offer comprehensive diagnosis and treatment plans designed to reduce pain and improve mobility."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Knee Pain Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="knee-pain"
        bgImage="/images/conditions-we-treat/knee-pain/knee.jpg"
      />

      <div className="doctor-details-area pt-50 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <KneePainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
