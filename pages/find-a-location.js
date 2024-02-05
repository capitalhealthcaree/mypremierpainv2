import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../components/Appointment/AppointmentFormSideBar")
);

const ConditionsWeTreatLeftSide = dynamic(() =>
  import("../components/Common/ConditionsWeTreatLeftSide")
);

const FindLocation = dynamic(() =>
  import("../components/FindLocation")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          Contact & Locations: Expert Pain Management Doctors Near Me
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/find-a-location/`}
        />
        <meta
          name="description"
          content="If you are experiencing pain following a collision, contact Premier Pain Centers to schedule an appointment for car accident injury treatment in Richardson."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Find A Location"
        homePageUrl="/"
        homePageText="Home"
        activePageText="cfind-a-location"
        bgImage="/images/find-a-location.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>
            <div className="col-lg-8">
             <FindLocation/>
            </div>
            {/* <div className="col-lg-8">
              <div className="map-area">
                <iframe
                  src="https://maps.app.goo.gl/mq9KTHPeK668BLQV8"
                  height="550"
                  loading="lazy"
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
