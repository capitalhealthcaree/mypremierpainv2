import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const WhySec = dynamic(() =>
  import("../components/KetamineInfusionTherapy/Why")
);

const Faqs = dynamic(() =>
  import("../components/KetamineInfusionTherapy/Faqs")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);
const TmsCandidate = dynamic(() =>
  import("../components/KetamineInfusionTherapy/TmsCandidate")
);

const WhyChooseKT = dynamic(() =>
  import("../components/KetamineInfusionTherapy/WhyChooseKT")
);

const TmsInsurance = dynamic(() =>
  import("../components/KetamineInfusionTherapy/TmsInsurance")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Ketamine Infusion Therapy | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/ketamine-infusion-therapy/`}
        />
        <meta
          name="description"
          content="Ketamine Infusion Therapy at Premier Pain Centers helps manage chronic pain and depression. Book an appointment in Dallas, Plano, Mesquite & nearby areas."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PageBanner
        pageTitle="Ketamine Infusion Therapy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="back-pain"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1736448787/tms-therapy/qryti5csh5deyftfkdvk.jpg"
      />
      <WhySec />
      <TmsCandidate />
      <WhyChooseKT />
      <AppointmentForm />
      <TmsInsurance />
      <Faqs />
      <Footer />
    </>
  );
};

export default Index;
