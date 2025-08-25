import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    {
      url: "/conditions-we-treat/car-accident-injury",
      name: "Car Accident Injury",
    },
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    // { url: "/conditions-we-treat/wrist-pain", name: "Wrist Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    // { url: "/conditions-we-treat/foot-pain", name: "Foot Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
    { url: "/conditions-we-treat/hip-pain", name: "Hip Pain" },
  ],
};

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          Dr. Rao K. Ali MD: Interventional Pain Management Physician
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/rao-k-ali/`}
        />
        <meta
          name="description"
          content="Dr. Rao K. Ali is a dual fellowship-trained, double board-certified Physiatrist and Interventional Pain Management physician. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Rao K. Ali MD"
        homePageUrl="/"
        homePageText="Home"
        activePageText="rao-k-ali"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />
      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image
                  src="/images/rao-k-ali.jpg"
                  alt="Rao K. Ali MD"
                  width={364} // use your image's actual pixel width
                  height={393} // use your image's actual pixel height
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-5">
                    <h3>{conditionsWeTreat.heaging}</h3>
                    <ul>
                      {conditionsWeTreat.treatment.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.url} rel="preload">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>Rao K. Ali MD</b>
                    </h3>
                    <h4>(Board Certified Interventional Pain Management)</h4>{" "}
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Dr. Rao Ali is a dual fellowship-trained, double
                      board-certified Physiatrist and Interventional Pain
                      Management physician who runs the state of art{" "}
                      <Link
                        href="/interventional-pain-management/"
                        rel="preload"
                      >
                        interventional pain management
                      </Link>{" "}
                      practice for over eight years.
                    </p>

                    <p>
                      Dr. Ali Completed his medical school in 2000 and General
                      Surgery Internship in 2006, Physical Medicine and
                      Rehabilitation Residency in 2009 at the prestigious
                      Montefiore Medical Center NY, Interventional Spine
                      Fellowship in 2010, and Anesthesia-based Pain Medicine
                      Fellowship at Case Western University Hospitals in 2011.
                      He is an expert in interventional pain procedures
                      including Epidurals, Nerve Blocks, Radio-frequency
                      Ablation,{" "}
                      <Link href="/treatments/joint-injections/" rel="preload">
                        Joint Injections
                      </Link>
                      , Kyphoplasty, Discectomy,{" "}
                      <Link
                        href="/treatments/spinal-cord-stimulation/"
                        rel="preload"
                      >
                        Spinal cord stimulator
                      </Link>{" "}
                      trial, and implantation.
                    </p>

                    <p>
                      He has presented over 20 posters and publications
                      nationally as well as internationally. He has run CME
                      programs and has trained physicians in workshops
                      nationally and internationally. He is past president of
                      Richland County Medical Society and is an active member of
                      ASIPP, NANS, and Texas Pain Society. He is a
                      sociopolitical activist. He loves traveling and spending
                      time with his family and friends.
                    </p>
                    <p></p>
                  </div>
                  <div className="doctor-details-contact">
                    <h3>Contact info</h3>
                    <ul>
                      <li style={{ marginLeft: "-5px" }}>
                        <i
                          className="icofont-ui-call"
                          style={{ fontSize: "30px" }}
                        ></i>

                        <a href="tel:+14695624188">469-562-4188</a>
                      </li>
                      <li>
                        <i
                          className="icofont-ui-message"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <a href="mailto:admin@mypremierpain.com">
                          admin@mypremierpain.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-details-biography"></div>
                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <ul>
                          <li>
                            Monday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Tuesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Wednesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Thursday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Friday <span>9:00 AM - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="blog-details-item">
                  <div className="blog-details-tags">
                    <h3>{locations.heaging}</h3>
                    <ul>
                      {locations.location.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.href} rel="preload">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
