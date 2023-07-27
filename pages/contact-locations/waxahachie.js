import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import Footer from "../../components/_App/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Waxahachie"
        homePageUrl="/"
        homePageText="Home"
        activePageText="waxahachie"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"20 Northgate Dr."} loc2={"Waxahachie, TX 75165"} />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.116064216133!2d-96.83909852378474!3d32.41604900234485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864eeecb166a644d%3A0x77e03dcb6adad9ed!2s20%20Northgate%20Dr%2C%20Waxahachie%2C%20TX%2075165%2C%20USA!5e0!3m2!1sen!2sil!4v1685528650582!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
