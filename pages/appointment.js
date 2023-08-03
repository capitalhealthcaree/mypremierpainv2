import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AppointmentForm from "../components/Appointment/AppointmentForm";

const Appointment = () => {
  return (
    <>
    <Head>
        <title>Schedule Your Appointment with Expert Doctors</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/appointment/`}
        />
        <meta
          name="description"
          content="Schedule your appointment with skilled physicians for comprehensive pain management services. Experience personalized care and expert medical guidance."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="appointment"
        bgImage="/images/appointment-bg-1.jpg"
      />

      <div className="pt-4 pb-4">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default Appointment;
