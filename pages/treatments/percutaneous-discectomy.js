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
const PercutaneousDiscectomyDetails = dynamic(() =>
  import("../../components/Treatments/PercutaneousDiscectomyDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Percutaneous Discectomy Surgery for a Herniated Disc</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/percutaneous-discectomy/`}
        />
        <meta
          name="description"
          content="Percutaneous discectomy is a minimally invasive procedure that has been gaining traction as a viable solution to various issues related to the spine."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Percutaneous Discectomy Surgery for a Herniated Disc"
        homePageUrl="/"
        homePageText="Home"
        activePageText="percutaneous-discectomy"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <PercutaneousDiscectomyDetails />
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
