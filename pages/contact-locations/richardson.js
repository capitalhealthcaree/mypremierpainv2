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
        pageTitle="Pain Management Services in Richardson"
        homePageUrl="/"
        homePageText="Home"
        activePageText="richardson"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"2071 N Collins Blvd"} loc2={"Richardson, TX 75080"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.0022222503744!2d-96.72469342389256!3d32.97734317372066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f30af23e6b7%3A0x3281f6baf0423789!2s2071%20N%20Collins%20Blvd%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2sil!4v1690872743831!5m2!1sen!2sil"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
