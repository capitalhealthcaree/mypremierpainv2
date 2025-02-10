import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const WaxahachieContent = dynamic(() =>
  import("../../components/ContactLocationsContent/WaxahachieContent")
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
        <title>Center for Pain Management in Waxahachie, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
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
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <WaxahachieContent />
      <ContactInfo loc1={"20 Northgate Dr,"} loc2={"Waxahachie, TX 75165"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.179604181973!2d-96.84137878885765!3d32.414346802322825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864eef7121287c31%3A0xdecef8f48626655a!2sPremier%20Pain%20Centers%20%3A%20Waxahachie!5e0!3m2!1sen!2s!4v1739212808263!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
