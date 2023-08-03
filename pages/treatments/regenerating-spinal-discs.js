import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import RegeneratingSpinalDiscsDetails from "../../components/Treatments/RegeneratingSpinalDiscsDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Regenerating Spinal Discs Treatment Options in Hillsboro</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/regenerating-spinal-discs/`}
        />
        <meta
          name="description"
          content="In regenerating spinal discs, the solution is injected directly into the impaired disc, delivering the solution directly to the affected area."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Regenerating Spinal Discs Treatment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="regenerating-spinal-discs"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <RegeneratingSpinalDiscsDetails />
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
