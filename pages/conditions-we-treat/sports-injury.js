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

const SportsInjuryDetails = dynamic(() =>
  import("../../components/ConditionsWeTreat/SportsInjuryDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          Sports Injury Clinic | Orthopaedic Specialists in Dallas, TX
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/sports-injury/`}
        />
        <meta
          name="description"
          content="Visit our Sports Injury Clinic in Dallas for expert care. Schedule an appointment with an orthopedic doctor in Dallas today and get back to your best."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Sports Injury Treatment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="sports-injury"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734995529/conditions-we-treat/jos5xxw6nmc1krezjs8l.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <SportsInjuryDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
