import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const GunBarrelContent = dynamic(() =>
  import("../../components/ContactLocationsContent/GunBarrelContent")
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
        <title>Spine and Pain Center in Gun Barrel City, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Find expert pain management in Gun Barrel City for lasting relief. Our compassionate team offers personalized care to help you regain control of your life."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Your Pain Our Priority: Pain Management Services in Gun Barrel City"
        homePageUrl="/"
        homePageText="Home"
        activePageText="gun-barrel-city"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <GunBarrelContent />
      <ContactInfo
        loc1={"519 N Gun Barrel Ln Suite A"}
        loc2={"Gun Barrel City, TX 75156"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3371.034938438733!2d-96.1108924!3d32.3377716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864923f0121f4c3d%3A0x790471e8dbdbf82e!2sPremier%20Pain%20Centers%20%3A%20Gun%20Barrel%20City!5e0!3m2!1sen!2s!4v1753899802470!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
