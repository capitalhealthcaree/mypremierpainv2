import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PsychiatryBanner = dynamic(() =>
  import("../components/PsychiatryHome/PsychiatryBanner")
);

const FirstSection = dynamic(() =>
  import("../components/PsychiatryHome/FirstSection")
);

const SecondSection = dynamic(() =>
  import("../components/PsychiatryHome/SecondSection")
);

const ThirdSection = dynamic(() =>
  import("../components/PsychiatryHome/ThirdSection")
);

const FourthSection = dynamic(() =>
  import("../components/PsychiatryHome/FourthSection")
);

const FifthSection = dynamic(() =>
  import("../components/PsychiatryHome/FifthSection")
);

const SixSection = dynamic(() =>
  import("../components/PsychiatryHome/SixSection")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const ChooseUs = dynamic(() => import("../components/PsychiatryHome/ChooseUs"));

const Footer = dynamic(() => import("../components/_App/Footer"));

export default function Psychiatry() {
  return (
    <>
      <Head>
        <title>TMS Therapy Centers & Psychiatric Treatment in Dallas, TX</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/tms-therapy/`}
        />
        <meta
          name="description"
          content="TMS affects brain activity with a magnetic field. It treats depression, OCD, and other brain disorders. call us 469-562-4188 or email admin@mypremierpain.com."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PsychiatryBanner />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <FourthSection />
      <AppointmentForm />
      <SixSection />
      <ChooseUs />
      <Footer />
    </>
  );
}
