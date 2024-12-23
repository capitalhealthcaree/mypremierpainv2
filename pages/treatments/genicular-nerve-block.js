import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const GenicularNerveBlockDetails = dynamic(() =>
  import("../../components/Treatments/GenicularNerveBlockDetails")
);

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const TreatmentsRightSide = dynamic(() =>
  import("../../components/Common/TreatmentsRightSide")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Genicular Nerve Blocks for Chronic Knee Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/genicular-nerve-block/`}
        />
        <meta
          name="description"
          content="A genicular nerve block may be appropriate for patients with chronic knee pain that does not respond to conservative treatment. Contact us today to schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Genicular Nerve Blocks for Chronic Knee Pain"
        homePageUrl="/"
        homePageText="Home"
        activePageText="hip-joint-injections"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989809/npez39bzeq6mcurlfogv.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <GenicularNerveBlockDetails />
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
