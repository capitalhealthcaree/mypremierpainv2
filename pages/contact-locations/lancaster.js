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
        pageTitle="Pain Management Services in Lancaster"
        homePageUrl="/"
        homePageText="Home"
        activePageText="lancaster"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"2700 W. Pleasant Run Rd., Ste. 320"}
        loc2={"Lancaster, TX 75146"}
      />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.076034792164!2d-96.81553062377911!3d32.60415709279904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e943e2d4dc11f%3A0xa3a161c55d6c8de6!2s2700%20W%20Pleasant%20Run%20Rd%20%23320%2C%20Lancaster%2C%20TX%2075146%2C%20USA!5e0!3m2!1sen!2sil!4v1685529338420!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
