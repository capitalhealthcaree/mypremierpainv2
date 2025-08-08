import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PsychiatryBanner = dynamic(() =>
  import("../components/SpravatoPage/PsychiatryBanner")
);

const FirstSection = dynamic(() =>
  import("../components/SpravatoPage/FirstSection")
);

const WhatPsychiatry = dynamic(() =>
  import("../components/SpravatoPage/WhatPsychiatry")
);

const ExpertHelpSection = dynamic(() =>
  import("../components/SpravatoPage/ExpertHelpSection")
);

const TreatmentsSection = dynamic(() =>
  import("../components/SpravatoPage/TreatmentsSection")
);

const MeetTeam = dynamic(() => import("../components/SpravatoPage/MeetTeam"));

const WhyChooseSection = dynamic(() =>
  import("../components/SpravatoPage/WhyChooseSection")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const PsychiatricServices = dynamic(() =>
  import("../components/SpravatoPage/PsychiatricServices")
);

const ADHDTesting = dynamic(() =>
  import("../components/SpravatoPage/ADHDTesting")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

export default function Psychiatry() {
  return (
    <>
      <Head>
        <title>Spravato® Treatment in Dallas | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/spravato-treatment-dallas/`}
        />
        <meta
          name="description"
          content="FDA-approved Spravato® for treatment-resistant depression in Dallas. Fast relief, safe in-clinic care, and expert psychiatric support."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PsychiatryBanner />
      <FirstSection />
      <WhatPsychiatry />
      <ExpertHelpSection />
      <TreatmentsSection />
      <MeetTeam />
      <AppointmentForm />
      <Footer />
    </>
  );
}
