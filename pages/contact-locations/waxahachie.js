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
        <title>Center for Pain Management in Waxahachie, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}contact-locations/waxahachie/`}
        />
        <meta
          name="description"
          content="Find expert pain management in Waxahachie for lasting relief. Our compassionate team offers personalized care to help you regain control of your life."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Waxahachie"
        homePageUrl="/"
        homePageText="Home"
        activePageText="waxahachie"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"20 Northgate Dr."} loc2={"Waxahachie, TX 75165"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

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
