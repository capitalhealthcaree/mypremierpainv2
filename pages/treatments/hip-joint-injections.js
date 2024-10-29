import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const HipJointInjectionsDetails = dynamic(() =>
  import("../../components/Treatments/HipJointInjectionsDetails")
);

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const TreatmentsRightSide = dynamic(() =>
  import("../../components/Common/TreatmentsRightSide")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";

const DoctorDetails = ({items}) => {
  return (
    <>
      <Head>
        <title>Hip Joint Injections for Pain Relief In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/hip-joint-injections/`}
        />
        <meta
          name="description"
          content="Hip joint injections involve injecting medicine into the hip joint. Inflammation and pain may be reduced with the use of the medicine. Contact us today to schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Hip Joint Injections in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="hip-joint-injections"
        bgImage="/images/page-banner2.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              {/* <HipJointInjectionsDetails /> */}
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
  const singleBlog = await api.get("treatments/hip-joint-injections");
  const data = singleBlog?.data?.data || {};
  return {
    props: {
      items: data,
    },
  };
};
