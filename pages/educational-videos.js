import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import VideoIntro from "../components/Common/VideoTestimonials";
import AppointmentForm from "../components/Home/AppointmentForm";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Educational Videos | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}educational-videos/`}
        />
        <meta
          name="description"
          content="Recover with Educational Videos. Contact Premier Pain Centers for Richardson Pain Management. Schedule an appointment and find relief with our expert care."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Educational Videos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="educational-videos"
        bgImage="/images/educational-videos.jpg"
      />

      <div className="pt-5">
        <VideoIntro />
      </div>
      <div className="pt-5 pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default Testimonials;
