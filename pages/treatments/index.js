import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const Treatments = dynamic(() => import("../../components/Home/Treatments"));

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
        <title>Effective Treatments with Expert Physicians</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/treatments/`}
        />
        <meta
          name="description"
          content="Premier Pain Centers provides personalized treatment options, including Radiofrequency ablation, epidural injections, spinal cord stimulator, and more."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="treatments"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989809/npez39bzeq6mcurlfogv.webp"
      />
      <Treatments />
      <AppointmentForm />
      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default Contact;
