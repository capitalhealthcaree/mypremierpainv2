import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const FacetJointInjectionDetails = dynamic(() =>
  import("../../components/Treatments/FacetJointInjectionDetails")
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
        <title>Facet Joint Injection Procedure in Fort Worth</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/facet-joint-injection/`}
        />
        <meta
          name="description"
          content="Facet joint injection Corsicana are minimally invasive procedures that numb facet joints by injecting local anesthetic and/or medication."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Facet Joint Injection"
        homePageUrl="/"
        homePageText="Home"
        activePageText="facet-joint-injection"
        bgImage="/images/page-banner2.webp"
      />

      <div className="doctor-details-area pt-4">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              {/* <FacetJointInjectionDetails /> */}
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
  const singleBlog = await api.get("treatments/facet-joint-injection");
  const data = singleBlog?.data?.data || {};
  return {
    props: {
      items: data,
    },
  };
};
