import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const NorthRichlandHillsContent = dynamic(() =>
  import("../../components/ContactLocationsContent/NorthRichlandHillsContent")
);

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
        <title>Pain Management Clinic in North Richland Hills, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Seeking relief from chronic pain? Contact Premier Pain Centers today for expert pain management services in North Richland. Schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in North Richland Hills"
        homePageUrl="/"
        homePageText="Home"
        activePageText="north-richland-hills"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <NorthRichlandHillsContent />
      <ContactInfo
        loc1={"7904 NE Loop 820, Ste. C"}
        loc2={"North Richland Hills, TX 76180"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.562275663516!2d-97.2107338237723!3d32.83036118125714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e78e3a377d75b%3A0xa52d1b374c6a5583!2s7904%20NE%20Loop%20820%20%23%20C%2C%20North%20Richland%20Hills%2C%20TX%2076180%2C%20USA!5e0!3m2!1sen!2sil!4v1685528546599!5m2!1sen!2sil"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
