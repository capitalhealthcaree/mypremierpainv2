import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import Footer from "../../components/_App/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Pain Management Doctors in Farmers Branch, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}contact-locations/farmers-branch/`}
        />
        <meta
          name="description"
          content="Discover effective pain management solutions in Farmers Branch. Find relief from chronic pain through innovative treatments and compassionate care."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Farmers Branch"
        homePageUrl="/"
        homePageText="Home"
        activePageText="farmers-branch"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"13988 Diplomat Dr., Ste. 100"}
        loc2={"Farmers Branch, TX 75234"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5693703630163!2d-96.90854952376914!3d32.93597397584468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c263375433417%3A0x12026620da31c012!2s13988%20Diplomat%20Dr%20Ste%20100%2C%20Farmers%20Branch%2C%20TX%2075234%2C%20USA!5e0!3m2!1sen!2sil!4v1685525494552!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
