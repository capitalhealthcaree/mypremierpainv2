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

const ShoulderPainDetails = dynamic(() =>
  import("../../components/ConditionsWeTreat/ShoulderPainDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Shoulder Pain Treatment In Corsicana TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/shoulder-pain/`}
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

      <div className="doctor-details-area pt-4 pb-50">
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
