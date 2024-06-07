import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const MainBanner = dynamic(() => import("../components/TmsHome/MainBanner"));

const WhySec = dynamic(() => import("../components/TmsHome/Why"));

const Faqs = dynamic(() => import("../components/TmsHome/Faqs"));

const TmsTherapy = dynamic(() => import("../components/TmsHome/TmsTherapy"));

const TmsAbout = dynamic(() => import("../components/TmsHome/TmsAbout"));

const ConditionsWeTreat = dynamic(() =>
  import("../components/TmsHome/ConditionsWeTreat")
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
      <MainBanner />
      <TmsAbout />
      <ConditionsWeTreat />
      <TmsTherapy />
      <AppointmentForm />
      <WhySec />
      <TmsInsurance />
      <Faqs />
      <Footer />
    </>
  );
};

export default Index;
