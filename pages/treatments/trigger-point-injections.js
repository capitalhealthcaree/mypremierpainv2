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
const TriggerPointInjectionsDetails = dynamic(() =>
  import("../../components/Treatments/TriggerPointInjectionsDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";

const DoctorDetails = ({ items }) => {
  return (
    <>
      <Head>
        <title>Trigger Point Injections for Muscle Pain Relief</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/trigger-point-injections/`}
        />
        <meta
          name="description"
          content="Trigger point injections can be particularly useful if used as an initial treatment for patients who cannot tolerate physical therapy or stretching."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Trigger Point Injections for Muscle Pain Relief"
        homePageUrl="/"
        homePageText="Home"
        activePageText="trigger-point-injections"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989809/npez39bzeq6mcurlfogv.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              {/* <TriggerPointInjectionsDetails /> */}
              <div dangerouslySetInnerHTML={{ __html: items?.content }}></div>
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
export const getServerSideProps = async () => {
  const singleBlog = await api.get("treatments/trigger-point-injections");
  const data = singleBlog?.data?.data || {};
  return {
    props: {
      items: data,
    },
  };
};
