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
        <title>Pain Management Specialists Near Me in Decatur, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Expert Pain Management Specialists in Decatur. Find relief with our specialists. Call us today at 469-562-4188 to schedule an appointment."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Decatur"
        homePageUrl="/"
        homePageText="Home"
        activePageText="decatur"
        bgImage="/images/location.jpg"
      />

      <ContactInfo
        loc1={"902 Preskitt Rd Suite 300,"}
        loc2={"Decatur, TX 76234"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.054593379138!2d-97.59985012376072!3d33.2126649615943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d92b17a955555%3A0x170da28202951a6e!2s902%20Preskitt%20Rd%20Suite%20300%2C%20Decatur%2C%20TX%2076234%2C%20USA!5e0!3m2!1sen!2sil!4v1685525060568!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
