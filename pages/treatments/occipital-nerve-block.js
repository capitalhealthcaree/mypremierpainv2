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
const OccipitalNerveBlockDetails = dynamic(() =>
  import("../../components/Treatments/OccipitalNerveBlockDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Occipital Nerve Block Injections at Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/occipital-nerve-block/`}
        />
        <meta
          name="description"
          content="A spinal epidural nerve block North Richland Hills may provide temporary relief from pain, long-term relief from pain, or permanent relief from pain."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Occipital Nerve Block | Treatments & Procedures"
        homePageUrl="/"
        homePageText="Home"
        activePageText="epidural-nerve-block"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989809/npez39bzeq6mcurlfogv.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <OccipitalNerveBlockDetails />
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
