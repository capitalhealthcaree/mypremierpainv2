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
const SiJointInjectionDetails = dynamic(() =>
  import("../../components/Treatments/SiJointInjectionDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>SI Joint Injections in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/si-joint-injection/`}
        />
        <meta
          name="description"
          content="SI joint injections are effective in diagnosing and treating SI joint dysfunction. You should consider this treatment if you suffer from lower back pain."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="SI Joint Injections in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="si-joint-injections"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <SiJointInjectionDetails />
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
