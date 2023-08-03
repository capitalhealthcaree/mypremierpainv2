import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import NavbarAppointment from "../components/_App/NavbarAppointment";
import MainBanner from "../components/Home/MainBanner";
import About from "../components/Home/About";
import OurServices from "../components/Home/OurServices";
import Treatments from "../components/Home/Treatments";
import AppointmentForm from "../components/Home/AppointmentForm";
import OurMission from "../components/Home/OurMission";
import OurDoctors from "../components/Common/OurDoctors";
import FeedbackSlider from "../components/Home/FeedbackSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.mypremierpain.com/" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <MainBanner />
      <About />
      <OurServices />
      <Treatments />
      <AppointmentForm />
      <OurMission />
      <OurDoctors />
      <FeedbackSlider />
      <LatestBlogPost />
      <Footer />
    </>
  );
};

export default Index;
