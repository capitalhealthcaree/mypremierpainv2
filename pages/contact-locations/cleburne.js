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
        pageTitle="Pain Management Services in Cleburne"
        homePageUrl="/"
        homePageText="Home"
        activePageText="cleburne"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"131 S Westmeadow Dr,"} loc2={"Cleburne, TX 76033"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.1143649288147!2d-97.41937592378711!3d32.335639206410654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e47e9fca6cf9d%3A0x75326f97fc363be3!2s131%20S%20Westmeadow%20Dr%2C%20Cleburne%2C%20TX%2076033%2C%20USA!5e0!3m2!1sen!2sil!4v1685524764765!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
