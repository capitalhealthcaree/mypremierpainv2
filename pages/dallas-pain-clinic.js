import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const MainBanner = dynamic(() => import("../components/Home/MainBanner"));

const DetailContent = dynamic(() =>
  import("../components/DallasPainClinic/DetailContent")
);

const WhyWeChooseUs = dynamic(() =>
  import("../components/DallasPainClinic/WhyWeChooseUs")
);

const OurDoctors = dynamic(() => import("../components/Common/OurDoctors"));

const ConditionsWeTreat = dynamic(() =>
  import("../components/DallasPainClinic/ConditionsWeTreat")
);

const AppointmentForm = dynamic(() =>
  import("../components/TmsHome/Appointment")
);

const LatestBlogPost = dynamic(() =>
  import("../components/Common/LatestBlogPost")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Best Pain Management Services at Dallas Pain Clinic</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/dallas-pain-clinic/`}
        />
        <meta
          name="description"
          content="Premier Pain Centers offers expert pain doctors in Dallas for personalized treatments. Visit our Dallas pain clinic for relief. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <MainBanner text={"Dallas"} />
      <DetailContent />
      <ConditionsWeTreat />
      <OurDoctors des={"dallas-pain-clinic"} />
      <AppointmentForm />
      <WhyWeChooseUs />
      <LatestBlogPost />
      <Footer />
    </>
  );
};

export default Index;
