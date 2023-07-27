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
        pageTitle="Pain Management Services in Decatur"
        homePageUrl="/"
        homePageText="Home"
        activePageText="decatur"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"902 Preskitt Rd Suite 300,"}
        loc2={"Decatur, TX 76234"}
      />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.054593379138!2d-97.59985012376072!3d33.2126649615943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d92b17a955555%3A0x170da28202951a6e!2s902%20Preskitt%20Rd%20Suite%20300%2C%20Decatur%2C%20TX%2076234%2C%20USA!5e0!3m2!1sen!2sil!4v1685525060568!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
