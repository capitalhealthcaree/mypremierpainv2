import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const Banner = dynamic(() => import("../components/PsychologistPage/Banner"));

const WhyChoose = dynamic(() =>
  import("../components/PsychologistPage/WhyChoose")
);

const Services = dynamic(() =>
  import("../components/PsychologistPage/Services")
);

const HowWorks = dynamic(() =>
  import("../components/PsychologistPage/HowWorks")
);

const FAQ = dynamic(() => import("../components/PsychologistPage/FAQs"));

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
      <WhyChoose />
      <Services />
      <HowWorks />
      <FAQ />
      <AppointmentForm />
      <Footer />
    </>
  );
}
