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
        pageTitle="Pain Management Services in North Richland Hills"
        homePageUrl="/"
        homePageText="Home"
        activePageText="north-richland-hills"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"7904 NE Loop 820, Ste. C"}
        loc2={"North Richland Hills, TX 76180"}
      />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.562275663516!2d-97.2107338237723!3d32.83036118125714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e78e3a377d75b%3A0xa52d1b374c6a5583!2s7904%20NE%20Loop%20820%20%23%20C%2C%20North%20Richland%20Hills%2C%20TX%2076180%2C%20USA!5e0!3m2!1sen!2sil!4v1685528546599!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
