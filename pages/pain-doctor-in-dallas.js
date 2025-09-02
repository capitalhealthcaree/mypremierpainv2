import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

import PainDoctorInDallaSchema from "../components/Schemas/PainDoctorInDallaSchema";

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
        <title>
          Dr. Rao K. Ali – Pain Doctor in Dallas for Chronic Pain Relief
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/pain-doctor-in-dallas/`}
        />
        <meta
          name="description"
          content="Dr. Rao K. Ali is a trusted pain doctor in Dallas, providing personalized care & advanced therapies to help you live pain-free. Schedule your appointment now."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PainDoctorInDallaSchema />
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
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.0127327391965!2d-96.72465682393651!3d32.97706587373522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f0052f2127f%3A0x3c7ead0c32591544!2sRao%20K.%20Ali%20MD%20-%20Pain%20Physician%20in%20Dallas!5e0!3m2!1sen!2sus!4v1755617505554!5m2!1sen!2sus"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
      {/* <InsuranceContent /> */}
      <Footer />
    </>
  );
};

export default Index;
