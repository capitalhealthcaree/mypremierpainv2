import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const EnnisContent = dynamic(() =>
  import("../../components/ContactLocationsContent/EnnisContent")
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
        <title>Interventional Pain Management Center in Ennis, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Discover relief at Ennis's leading Interventional Pain Management Center. Personalized pain solutions tailored to your needs. For appointments, visit ww.mypremierpain.com"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Ennis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ennis"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <EnnisContent />
      <ContactInfo
        loc1={"2200 Physicians Blvd,"}
        loc2={"Suite B1 Ennis, TX 75119"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.285940072238!2d-96.638415!3d32.304170899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864edbbcf119b843%3A0x9f598be011ab21b!2s2200%20Physicians%20Blvd%2C%20Ennis%2C%20TX%2075119%2C%20USA!5e0!3m2!1sen!2s!4v1698867578841!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
