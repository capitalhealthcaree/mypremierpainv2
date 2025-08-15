import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const DetailContent = dynamic(() =>
  import("../components/PainDoctorDallas/DetailContent")
);

const ConditionsWeTreat = dynamic(() =>
  import("../components/PainDoctorDallas/ConditionsWeTreat")
);

const Treatments = dynamic(() =>
  import("../components/PainDoctorDallas/Treatments")
);

const Location = dynamic(() =>
  import("../components/PainDoctorDallas/Location")
);

const AppointmentForm = dynamic(() =>
  import("../components/PainDoctorDallas/AppointmentForm")
);

const InsuranceContent = dynamic(() =>
  import("../components/PainDoctorDallas/InsuranceContent")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Best Pain Management Services at Dallas Pain Clinic</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/pain-doctor-in-dallas/`}
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
      <PageBanner
        pageTitle="Rao K. Ali, MD - Pain Doctor in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="rao-k-ali"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />
      <DetailContent />
      <ConditionsWeTreat />
      <Treatments />
      <Location />
      <AppointmentForm />
      {/* <InsuranceContent /> */}
      <Footer />
    </>
  );
};

export default Index;
