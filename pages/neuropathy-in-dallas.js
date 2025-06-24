import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const Banner = dynamic(() => import("../components/NeuropathyPage/Banner"));

const About = dynamic(() => import("../components/NeuropathyPage/About"));

const Services = dynamic(() => import("../components/NeuropathyPage/Services"));

const ContactUs = dynamic(() =>
  import("../components/NeuropathyPage/ContactUs")
);
const WeBest = dynamic(() => import("../components/NeuropathyPage/WeBest"));

const Reviews = dynamic(() => import("../components/NeuropathyPage/Reviews"));

const FAQ = dynamic(() => import("../components/NeuropathyPage/FAQ"));

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

export default function Psychiatry() {
  return (
    <>
      <Head>
        <title>
          Expert Psychiatry, Medication Management & Talk Therapy in Dallas
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/psychiatric-services-in-dallas-tx/`}
        />
        <meta
          name="description"
          content="Dr. Ronnie Pollard, a board-certified psychiatrist in Dallas, offers expert psychiatric services, including medication management and talk therapy."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="noindex, nofollow" />

      </Head>
      <Navbar />
      <NavbarAppointment />
      <Banner />
      <About />
      <Services />
      <ContactUs />
      <AppointmentForm />
      <WeBest />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}
