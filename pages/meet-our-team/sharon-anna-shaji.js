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
          Sharon Anna Shaji – Certified Physician Assistant in Dallas
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/sharon-anna-shaji/`}
        />
        <meta
          name="description"
          content="Meet Sharon Anna Shaji, Certified Physician Assistant at Premier Pain Centers, providing expert care and support for patients with chronic pain."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Sharon Anna Shaji – Certified Physician Assistant"
        homePageUrl="/"
        homePageText="Home"
        activePageText="sharon-anna-shaji"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />
      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image
                  src="/images/sharon-anna-shaji.jpg"
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
                      <b>Sharon Anna Shaji</b>
                    </h3>
                    <h4>(Certified Physician Assistant )</h4>{" "}
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>
                    <p>
                      Sharon Anna Shaji is a certified physician assistant with
                      experience in surgery, pediatrics, obstetrics and
                      gynecology, family medicine, psychiatry, and emergency
                      medicine. She earned a Bachelor of Biomedical Sciences
                      from the University of the Sciences in Philadelphia with a
                      Presidential Scholarship. She then received a Master of
                      Physician Assistant Studies from Mercy College in New
                      York.
                    </p>
                    <p>
                      Sharon has undertaken clinical rotations at the Montefiore
                      Hospital in New York, the Lincoln Hospital, and the
                      Westchester County Medical Examiner's Office. She also
                      volunteered at cancer facilities and worked as a CNA. She
                      assisted chemo patients there and saw endocrinologists and
                      surgeons at work. Licensed as a physician assistant in New
                      York and Texas, Sharon is certified by the National
                      Commission on Certification of Physician Assistants in
                      advanced cardiac life support.
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
