import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const WhySec = dynamic(() => import("../components/TmsHome/Why"));

const Faqs = dynamic(() => import("../components/TmsHome/Faqs"));

const TmsAbout = dynamic(() => import("../components/TmsHome/TmsAbout"));

const TmsCandidate = dynamic(() =>
  import("../components/TmsHome/TmsCandidate")
);

const WhyChooseTMS = dynamic(() =>
  import("../components/TmsHome/WhyChooseTMS")
);

const TmsInsurance = dynamic(() =>
  import("../components/TmsHome/TmsInsurance")
);

const AppointmentForm = dynamic(() =>
  import("../components/TmsHome/Appointment")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <title>TMS Therapy Centers & Psychiatric Treatment in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/tms-therapy/`}
        />
        <meta
          name="description"
          content="TMS affects brain activity with a magnetic field. It treats depression, OCD, and other brain disorders. call us 469-562-4188 or email admin@mypremierpain.com."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PageBanner
        pageTitle="TMS Therapy in Dallas, TX"
        homePageUrl="/"
        homePageText="Home"
        activePageText="back-pain"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1736448787/tms-therapy/qryti5csh5deyftfkdvk.jpg"
      />
      {/* <MainBanner /> */}
      <TmsAbout />
      {/* <ConditionsWeTreat /> */}
      {/* <TmsTherapy /> */}
      <WhySec />
      <TmsCandidate />
      <AppointmentForm />
      <WhyChooseTMS />
      <TmsInsurance />
      <Faqs />
      <Footer />
    </>
  );
};

export default Index;
