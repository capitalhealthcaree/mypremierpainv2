import React from "react";
import TopHeader from "../components/_App/TopHeader";
import VideoTestimonials from "../components/Common/VideoTestimonials";
import AppointmentForm from "../components/Home/AppointmentForm";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const VideoTestimonial = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Video Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="video-testimonials"
        bgImage="/images/conditions-we-treat/foot-pain/foot-pain-treatment.jpg"
      />

      <div className="pt-5">
        <VideoTestimonials />
      </div>
      <div className="pt-5 pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default VideoTestimonial;
