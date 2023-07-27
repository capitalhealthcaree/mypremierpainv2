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
        pageTitle="Pain Management Services in Hillsboro"
        homePageUrl="/"
        homePageText="Home"
        activePageText="hillsboro"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"1323 E. Franklin St., Ste. 102"}
        loc2={"Hillsboro, TX 76645"}
      />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.11481223523!2d-97.10164072379662!3d32.01200352268702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864fa82f3a482e15%3A0xe84b2bd476f447d2!2s1323%20E%20Franklin%20St%20%23102%2C%20Hillsboro%2C%20TX%2076645%2C%20USA!5e0!3m2!1sen!2sil!4v1685529272133!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
