import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const ConditionsWeTreatLeftSide = dynamic(() =>
  import("../../components/Common/ConditionsWeTreatLeftSide")
);

const JointPainDetails = dynamic(() =>
  import("../../components/ConditionsWeTreat/JointPainDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Best Bone and Joint Pain Doctors in Lancaster</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/joint-pain/`}
        />
        <meta
          name="description"
          content="Find the best joint pain doctors in Fort Worth. Premier Pain Centers is a one-stop shop for pain management and rehabilitation. Schedule an appointment."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Joint Pain Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="joint-pain"
        bgImage="/images/conditions-we-treat/joint-pain/joint-treatment.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <JointPainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
