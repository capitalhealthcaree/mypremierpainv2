import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import HeadachesDetails from "../../components/ConditionsWeTreat/HeadachesDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Headaches Specialists Doctors in Cleburne, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/headaches/`}
        />
        <meta
          name="description"
          content="If you suffer from headaches and migraines, contact Premier Pain Centers in Richardson, Fort Worth, and the surrounding areas to schedule an appointment."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Headaches"
        homePageUrl="/"
        homePageText="Home"
        activePageText="headaches"
        bgImage="/images/conditions-we-treat/headaches/head.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <HeadachesDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
