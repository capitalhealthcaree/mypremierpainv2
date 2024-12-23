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
        <title>Pain Management Doctors in Cleburne, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Experience top-notch pain management services in Cleburne. Call 469-562-4188 to schedule an appointment. Let us help you find relief and improve your life."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Cleburne"
        homePageUrl="/"
        homePageText="Home"
        activePageText="cleburne"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />

      <ContactInfo loc1={"131 S Westmeadow Dr,"} loc2={"Cleburne, TX 76033"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.1143649288147!2d-97.41937592378711!3d32.335639206410654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e47e9fca6cf9d%3A0x75326f97fc363be3!2s131%20S%20Westmeadow%20Dr%2C%20Cleburne%2C%20TX%2076033%2C%20USA!5e0!3m2!1sen!2sil!4v1685524764765!5m2!1sen!2sil"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
