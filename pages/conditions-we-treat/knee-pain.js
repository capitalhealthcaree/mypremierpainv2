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

const KneePainDetails = dynamic(() =>
  import("../../components/ConditionsWeTreat/KneePainDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Chronic Knee Pain Specialists Near Me</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/knee-pain/`}
        />
        <meta
          name="description"
          content="Do you need knee pain treatment in Richardson? Contact Premier Pain Centers to schedule an appointment with our experienced specialists doctors."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Knee Pain Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="knee-pain"
        bgImage="/images/conditions-we-treat/knee-pain/knee.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <KneePainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
