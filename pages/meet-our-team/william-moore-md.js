import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import data from "../../utils/conditionsWeTreat.json";
const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          William Moore MD: Interventional Pain Management Physician
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/william-moore-md/`}
        />
        <meta
          name="description"
          content="William Moore MD is a pain management specialist in Fort Worth, TX and has 22 years experience. Book an appointment with Dr. Moore today at Premier Pain Centers!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="William Moore MD"
        homePageUrl="/"
        homePageText="Home"
        activePageText="william-moore-md"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />
      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image
                  src="/images/william-moore-md.jpg"
                  alt="William Moore MD"
                  width={364} // use your image's actual pixel width
                  height={393} // use your image's actual pixel height
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-5">
                    <h3>Conditions We Treat</h3>
                    <ul>
                      {data.map((item, i) => {
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
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>William Moore MD</b>
                    </h3>
                    <h4>(Board Certified Interventional Pain Management)</h4>{" "}
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>
                    <p>
                      Dr. Moore is board-certified in Pain Medicine and
                      practicesInterventional Pain Management in the DFW area.
                      His main focus is on treatment of the spine. In his
                      practice, he utilizes a wide range of endoscopic spine
                      procedures and minimally invasive techniques to treat{" "}
                      <Link
                        href="/conditions-we-treat/neck-pain/"
                        rel="preload"
                      >
                        neck pain
                      </Link>
                      ,{" "}
                      <Link
                        href="/conditions-we-treat/back-pain/"
                        rel="preload"
                      >
                        back pain
                      </Link>
                      ,{" "}
                      <Link href="/conditions-we-treat/leg-pain/" rel="preload">
                        leg pain
                      </Link>
                      ,{" "}
                      <Link
                        href="/conditions-we-treat/knee-pain/"
                        rel="preload"
                      >
                        knee pain
                      </Link>{" "}
                      and{" "}
                      <Link href="/conditions-we-treat/hip-pain/" rel="preload">
                        hip pain
                      </Link>
                      .
                    </p>
                    <p>
                      Born in Laredo, this Texas native earned his Bachelor of
                      Arts in Business Administration from Trinity University in
                      San Antonio. He went on to earn his medical degree at the
                      University of Texas Health Science Center at San Antonio,
                      followed by a residency in Anesthesiology at Ochsner
                      Clinic Foundation Hospital in New Orleans. Dr. William
                      Moore then went on to complete his fellowship training in
                      Pain Medicine and{" "}
                      <Link
                        href="/interventional-pain-management/"
                        rel="preload"
                      >
                        Interventional Pain Management
                      </Link>{" "}
                      at Texas Tech University Health Science Center in Lubbock.
                    </p>
                    <p>
                      William Moore MD has always been intrigued by
                      interventional pain management and its dynamic quality.
                      “It’s an area of extreme innovation,” he says. “In the
                      past, spine treatment involved non-invasive physical
                      therapy or a large surgical intervention. There was not a
                      place in the middle that could affect a patient’s quality
                      of life. Now, new developments allow minimally invasive
                      access like epidural nerve block,{" "}
                      <Link
                        href="/treatments/facet-joint-injection/"
                        rel="preload"
                      >
                        facet joint injection
                      </Link>{" "}
                      ,{" "}
                      <Link
                        href="/treatments/si-joint-injection/"
                        rel="preload"
                      >
                        SI joint injections
                      </Link>{" "}
                      , Pronox,{" "}
                      <Link
                        href="/treatments/genicular-nerve-block/"
                        rel="preload"
                      >
                        Genicular nerve block
                      </Link>{" "}
                      , disc regenerative therapy to specific nerves, joints and
                      discs with very small incisions and a short recovery time.
                      They provide a dramatic change in patients’ well-being.”
                      William Moore lives with his wife and children in Fort
                      Worth.
                    </p>
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
