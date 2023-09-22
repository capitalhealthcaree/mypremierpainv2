import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const OurServices = dynamic(() =>
  import("../../components/ConditionsWeTreat/OurServices")
);

const AppointmentForm = dynamic(() =>
  import("../../components/Home/AppointmentForm")
);

const LatestBlogPost = dynamic(() =>
  import("../../components/Common/LatestBlogPost")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const Contact = () => {
  return (
    <>
      <Head>
        <title>Search For Conditions We Treat</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/`}
        />
        <meta
          name="description"
          content="At Premier Pain Centers in Dallas, our team of experienced medical professionals provides comprehensive treatment for a wide range of conditions."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Conditions We Treat"
        homePageUrl="/"
        homePageText="Home"
        activePageText="conditions-we-treat"
        bgImage="/images/contact-and-locations.webp"
      />
      <OurServices />
      <AppointmentForm />
      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default Contact;
