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

      <ContactInfo
        loc1={"115 Park Pl Blvd #100"}
        loc2={"Waxahachie, TX 75165"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.4110844282595!2d-96.82520382370042!3d32.40814490274465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ee9253c38c6c5%3A0xe13511b32bb645af!2s115%20Park%20Pl%20Blvd%20%23100%2C%20Waxahachie%2C%20TX%2075165%2C%20USA!5e0!3m2!1sen!2s!4v1694021095570!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
