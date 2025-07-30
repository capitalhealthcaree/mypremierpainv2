import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const RichardsonContent = dynamic(() =>
  import("../../components/ContactLocationsContent/RichardsonContent")
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
        <title>Pain Management Services in Richardson, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Discover effective pain management services in Richardson. Find relief from chronic pain with our compassionate care. Schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Richardson"
        homePageUrl="/"
        homePageText="Home"
        activePageText="richardson"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <RichardsonContent />
      <ContactInfo loc1={"2071 N Collins Blvd"} loc2={"Richardson, TX 75080"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3347.0014859340477!2d-96.7221145!3d32.9773626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f013aa1fd9d%3A0xdc24c75dde3ba129!2sPremier%20Pain%20Centers%20%3A%20Richardson!5e0!3m2!1sen!2s!4v1753906175922!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
