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

const PsychiatricListContent = dynamic(() =>
  import("../components/PsychiatryHome/PsychiatricListContent")
);

const HelpingIndividualsSection = dynamic(() =>
  import("../components/PsychiatryHome/HelpingIndividualsSection")
);

const AppointmentForm = dynamic(() =>
  import("../components/PsychiatryHome/Appointment")
);

const TMSSection = dynamic(() =>
  import("../components/PsychiatryHome/TMSSection")
);

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
      <PsychiatricListContent />
      <HelpingIndividualsSection />
      <AppointmentForm />
      <TMSSection />
      <Footer />
    </>
  );
}
