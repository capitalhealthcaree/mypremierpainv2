import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const EducationalVideosList = dynamic(() =>
  import("../components/Common/EducationalVideosList")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const EducationalVideos = () => {
  return (
    <>
      <Head>
        <title>Educational Videos | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/educational-videos/`}
        />
        <meta
          name="description"
          content="Recover with Educational Videos. Contact Premier Pain Centers for Richardson Pain Management. Schedule an appointment and find relief with our expert care."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Educational Videos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="educational-videos"
        bgImage="/images/educational-videos.webp"
      />

      <div className="pt-5">
        <EducationalVideosList />
      </div>
      <div className="pt-5 pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default EducationalVideos;
