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
        <title>
          Joint Pain Clinic | Best Orthopedic Surgeons in Dallas, TX
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/joint-pain/`}
        />
        <meta
          name="description"
          content="If you are suffering from chronic joint pain in Dallas, visit Premier Pain Centers. Trusted pain management clinic in Dallas, Texas. Same-day appointments available. Call now!"
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
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734996025/conditions-we-treat/nt4thhpxp7dfdt9cdd0g.jpg"
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
