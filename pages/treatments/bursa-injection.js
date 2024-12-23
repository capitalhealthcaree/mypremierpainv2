import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const BursaInjectionDetails = dynamic(() =>
  import("../../components/Treatments/BursaInjectionDetails")
);

const AppointmentFormSideBar = dynamic(() =>
  import("../../components/Appointment/AppointmentFormSideBar")
);

const TreatmentsRightSide = dynamic(() =>
  import("../../components/Common/TreatmentsRightSide")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";

const DoctorDetails = ({ items }) => {
  return (
    <>
      <Head>
        <title>Hip Bursa Injection in Fort Worth, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/bursa-injection/`}
        />
        <meta
          name="description"
          content="Quick relief with Bursa injections! Effective treatment for joint pain & inflammation. Find relief today. Expert care at Premier Pain Centers in Lancaster."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Hip Bursa Injection - Relieve Your Joint Pain Today"
        homePageUrl="/"
        homePageText="Home"
        activePageText="bursa-injection"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989809/npez39bzeq6mcurlfogv.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              {/* <BursaInjectionDetails /> */}
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
  const singleBlog = await api.get("treatments/bursa-injection");
  const data = singleBlog?.data?.data || {};
  return {
    props: {
      items: data,
    },
  };
};
