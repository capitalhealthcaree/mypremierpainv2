import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import ShoulderPainDetails from "../../components/ConditionsWeTreat/ShoulderPainDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Shoulder Pain Treatment In Corsicana TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/shoulder-pain/`}
        />
        <meta
          name="description"
          content="Find relief from shoulder pain with our comprehensive guide. Learn more about our services for shoulder pain treatment in Cleburne."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Shoulder Pain Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="shoulder-pain"
        bgImage="/images/conditions-we-treat/shoulder-pain/shoulder-pain-dallas.jpg"
      />

      <div className="doctor-details-area pt-50 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <ShoulderPainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
