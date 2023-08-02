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
        pageTitle="Pain Management Services in Corsicana"
        homePageUrl="/"
        homePageText="Home"
        activePageText="corsicana"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"3108 E. State HWY 22"} loc2={"Corsicana, TX 75102"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.4122590634606!2d-96.50366282379456!3d32.08514191902118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f2ea507b010bf%3A0x1f100c2ed1fab807!2s3108%20E%20State%20Hwy%2022%2C%20Corsicana%2C%20TX%2075110%2C%20USA!5e0!3m2!1sen!2sil!4v1685524964048!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
