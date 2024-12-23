import React from "react";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const VideoTestimonials = dynamic(() =>
  import("../components/Common/VideoTestimonials")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const VideoTestimonial = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Video Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="video-testimonials"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734996209/conditions-we-treat/zycy7iuabgqk5dtzofin.jpg"
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
