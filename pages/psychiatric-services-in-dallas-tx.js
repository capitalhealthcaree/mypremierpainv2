import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PsychiatryBanner = dynamic(() =>
  import("../components/PsychiatryHome/PsychiatryBanner")
);

const KetamineSpravato = dynamic(() =>
  import("../components/Home/KetamineSpravato")
);

const FirstSection = dynamic(() =>
  import("../components/PsychiatryHome/FirstSection")
);

const WhatPsychiatry = dynamic(() =>
  import("../components/PsychiatryHome/WhatPsychiatry")
);

const ExpertHelpSection = dynamic(() =>
  import("../components/PsychiatryHome/ExpertHelpSection")
);

const TreatmentsSection = dynamic(() =>
  import("../components/PsychiatryHome/TreatmentsSection")
);

const MeetTeam = dynamic(() => import("../components/PsychiatryHome/MeetTeam"));

const WhyChooseSection = dynamic(() =>
  import("../components/PsychiatryHome/WhyChooseSection")
);

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const PsychiatricServices = dynamic(() =>
  import("../components/PsychiatryHome/PsychiatricServices")
);

const ADHDTesting = dynamic(() =>
  import("../components/PsychiatryHome/ADHDTesting")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

export default function Psychiatry() {
  const outServices = [
    {
      imgSrc: "/images/ketamine.jpg",
      name: "Ketamine Infusion Therapy",
      des: "Our Advanced Ketamine infusion therapy in Dallas for treatment-resistant depression, anxiety, PTSD, rapid results, supportive setting, restore balance.",
      href: "/ketamine-infusion-therapy/",
    },
    {
      imgSrc: "/images/spravato.jpg",
      name: "Spravato® (Esketamine) Treatment",
      des: "FDA-approved Spravato® treatment in Dallas for depression, anxiety, PTSD, fast-acting relief, safe environment, expert psychiatric care for lasting wellness.",
      href: "/spravato-treatment-dallas/",
    },
    {
      imgSrc:
        "http://res.cloudinary.com/dngmflrpx/image/upload/v1734988962/ghtmq6hva8ykostixeml.jpg",
      name: "TMS Therapy",
      des: "TMS uses magnetic fields to alter brain activity, treating depression, OCD, and other disorders. It’s noninvasive, safe, with generally mild, temporary side effects.",
      href: "/tms-therapy/",
    },
  ];
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
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PsychiatryBanner />
      <div className="blog-area mt-5">
        <div className="container">
          <div className="row justify-content-center ">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-4 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={item.href} rel="preload">
                        <img
                          src={item.imgSrc}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            objectPosition: "center center",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link
                          href={item.href}
                          className="d-flex justify-content-center"
                          rel="preload"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-center">{item.des}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <WhatPsychiatry />
      <ExpertHelpSection />
      <TreatmentsSection />
      <MeetTeam />
      <WhyChooseSection />
      <AppointmentForm />
      <PsychiatricServices />
      <ADHDTesting />
      <Footer />
    </>
  );
}
