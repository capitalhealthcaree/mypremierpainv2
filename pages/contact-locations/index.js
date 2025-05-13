import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Contact & Locations: Expert Pain Management Doctors Near Me
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="We also provide in person and phone consultations, and schedule appointment within 24-hours. We proudly serve Richardson, Fort Worth, and the surrounding areas."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Contact & Locations"
        homePageUrl="/"
        homePageText="Home"
        activePageText="contact-locations"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <div className="departments-area pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/richardson/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>RICHARDSON</h3>
                  <p>
                    2071 N Collins Blvd <br />
                    Richardson TX 75080
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link
                href="/contact-locations/north-richland-hills/"
                rel="preload"
              >
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>NORTH RICHLAND HILLS</h3>
                  <p>
                    7304 NE Loop 820, Ste. C
                    <br />
                    North Richland Hills, TX 76180
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/fort-worth/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>FORT WORTH</h3>
                  <p>
                    1111 5th Ave,
                    <br />
                    Fort Worth, TX 76104
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/desoto/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>Desoto</h3>
                  <p>
                    281 N Interstate 35 E Rd,
                    <br />
                    Desoto, TX 75115
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/hillsboro/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>HILLSBORO</h3>
                  <p>
                    207 I-35, Hillsboro <br />
                    TX 76645
                  </p>
                </div>
              </Link>
            </div>

            {/* <div className="col-sm-6 col-lg-4">
							<Link href="/contact-locations/farmers-branch/" rel="preload">
								<div className="department-item">
									<i className="icofont-location-pin"></i>
									<h3>FARMERS BRANCH</h3>
									<p>
										13988 Diplomat Dr., Ste. 100
										<br />
										Farmers Branch, TX 75234
									</p>
								</div>
							</Link>
						</div> */}

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/waxahachie/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>WAXAHACHIE</h3>
                  <p>
                    20 Northgate Dr, <br /> Waxahachie, TX 75165{" "}
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/corsicana/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>CORSICANA</h3>
                  <p>
                    3108 E. State HWY 22,
                    <br />
                    Corsicana, TX 75102
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/decatur/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>DECATUR</h3>
                  <p>
                    902 Preskitt Rd, Suite 300
                    <br />
                    Dectur, TX 76234
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/cleburne/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>CLEBURNE</h3>
                  <p>
                    131 S Westmeadow Dr,
                    <br />
                    Cleburne, TX 76033
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/plano/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>PLANO</h3>
                  <p>
                    7712 San Jacinto Place Suite 300
                    <br />
                    Plano, TX 75024
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/ennis/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>ENNIS</h3>
                  <p>
                    2200 Physicians Boulevard, Suite B1
                    <br />
                    Ennis, Texas 75119
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/mesquite/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>MESQUITE</h3>
                  <p>
                    200 W Kearney St,
                    <br />
                    Mesquite, TX 75149
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/gun-barrel-city/" rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>GUN BARREL CITY</h3>
                  <p>
                    519 N Gun Barrel Ln Suite A
                    <br />
                    Gun Barrel City, TX 75156
                  </p>
                </div>
              </Link>
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

export default Contact;
