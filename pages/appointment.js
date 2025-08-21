import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Appointment = () => {
  return (
    <>
      <Head>
        <title>Schedule Your Appointment with Expert Doctors</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/appointment/`}
        />
        <meta
          name="description"
          content="Schedule your appointment with skilled physicians for comprehensive pain management services. Experience personalized care and expert medical guidance."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="appointment"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734992804/o096qydqiddewm9c4twy.webp"
      />

      <div className="pt-4 pb-4">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default Appointment;
