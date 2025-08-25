import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
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
        <title> Christopher P Creighton MD | Pain Management Specialist</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/dr-christopher-creighton/`}
        />
        <meta
          name="description"
          content="Christopher P. Creighton MD is a pain management specialist providing advanced care for chronic pain, spine issues, and musculoskeletal conditions."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Christopher P Creighton MD"
        homePageUrl="/"
        homePageText="Home"
        activePageText="dr-christopher-creighton"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />

      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img />
                <Image
                  src="/images/dr-christopher-creighton.jpg"
                  alt="Christopher P Creighton MD"
                  width={364} // use your image's actual pixel width
                  height={393} // use your image's actual pixel height
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-3">
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
                      <b> Christopher P Creighton MD</b>
                    </h3>
                    <h4>(Board Certified Interventional Pain Management)</h4>{" "}
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Christopher Creighton, MD, brings nearly 35 years of
                      experience to the practice, drawing upon several
                      specialties, including anesthesiology, internal medicine,
                      and pathology. Earlier in his career, Dr. Creighton served
                      as assistant professor of anesthesiology at West Virginia
                      University School of Medicine as well as co-director of
                      its Center for Pain Management and its pain fellowship
                      program. Before that, he was chairman of the Department of
                      Anesthesiology at Morris Hospital, Morris, III.
                    </p>

                    <p>
                      His approach to interventional pain management is to
                      create an accurate diagnosis first, and have as many tools
                      to address that diagnosis as possible. "My deepest sense
                      of satisfaction comes from improving the quality of life
                      for patients and increasing their functional abilities,"
                      he says.
                    </p>

                    <p>
                      He and his wife of 35 years have a daughter in computer
                      science after graduating from USC and a son, who graduated
                      from Texas A&M University, and is an engineer. In his
                      spare time, Dr. Creighton enjoys scuba diving, reading,
                      hiking, sailing and cycling, woodworking, gardening, and
                      many other activities.
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
