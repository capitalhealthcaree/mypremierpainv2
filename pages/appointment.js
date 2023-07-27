import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AppointmentForm from "../components/Appointment/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="appointment"
        bgImage="/images/appointment-bg-1.jpg"
      />

      <AppointmentForm />

      <Footer />
    </>
  );
};

export default Appointment;
