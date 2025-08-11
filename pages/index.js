import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import HomeSchema from "../components/Schemas/homeSchema";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const MainBanner = dynamic(() => import("../components/Home/MainBanner"));

const FirstSection = dynamic(() => import("../components/Home/FirstSection"));

const About = dynamic(() => import("../components/Home/About"));

const Insurance = dynamic(() => import("../components/Home/Insurance"));

const OurServices = dynamic(() => import("../components/Home/OurServices"));

const WelcomeNewPatients = dynamic(() =>
  import("../components/Home/WelcomeNewPatients")
);

const KetamineSpravato = dynamic(() =>
  import("../components/Home/KetamineSpravato")
);

const Treatments = dynamic(() => import("../components/Home/Treatments"));

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const OurMission = dynamic(() => import("../components/Home/OurMission"));

const OurDoctors = dynamic(() => import("../components/Common/OurDoctors"));

const FeedbackSlider = dynamic(() =>
  import("../components/Home/FeedbackSlider")
);

const LatestBlogPost = dynamic(() =>
  import("../components/Common/LatestBlogPost")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.mypremierpain.com/" />
      </Head>
      <HomeSchema />
      <Navbar />
      <NavbarAppointment />
      <MainBanner />
      <FirstSection />
      <About />
      <OurServices />
      <WelcomeNewPatients />
      <KetamineSpravato />
      <Insurance />
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
