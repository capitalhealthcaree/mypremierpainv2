import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const ContactInfo = dynamic(() =>
  import("../../components/Contact/ContactInfo")
);

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pain Management Physicians in Fort Worth, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Premier Pain Centers offers comprehensive pain management services in Fort Worth. For more information about our services or the schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Fort Worth"
        homePageUrl="/"
        homePageText="Home"
        activePageText="fort-worth"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"1111 5th Ave,"} loc2={"Fort Worth, TX 76104"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.243262101187!2d-97.34084202377528!3d32.732730686247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e71771d6b8841%3A0x2e5780731023b25a!2s1111%205th%20Ave%2C%20Fort%20Worth%2C%20TX%2076104%2C%20USA!5e0!3m2!1sen!2sil!4v1685525426032!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
