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

      <ContactInfo
        loc1={"403 W Campbell Rd., Ste. 305"}
        loc2={"Richardson, TX 75080"}
      />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.116029275233!2d-96.72923892376801!3d32.97434047387488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f3867622c85%3A0x2283ef5bb96d02a1!2s403%20W%20Campbell%20Rd%20%23305%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2sil!4v1685525776799!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
