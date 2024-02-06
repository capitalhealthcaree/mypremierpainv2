import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const FindLocation = dynamic(() => import("../components/FindLocation"));

const Footer = dynamic(() => import("../components/_App/Footer"));
const locData = [
  {
    locationHeading: "RICHARDSON",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-half-full"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 4.6,
    totalRatting: 74,
    location: "2071 N Collins Blvd Richardson, TX 75080",
    locationUrl: "/contact-locations/richardson/",
  },
  {
    locationHeading: "NORTH RICHLAND HILLS",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-half-full"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 4.6,
    totalRatting: 74,
    location: "7904 NE Loop 820, Ste. C North Richland Hills, TX 76180",
    locationUrl: "/contact-locations/north-richland-hills/",
  },
  {
    locationHeading: "FORT WORTH",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 4.0,
    totalRatting: 11,
    location: "1111 5th Ave, Fort Worth, TX 76104",
    locationUrl: "/contact-locations/fort-worth/",
  },
  {
    locationHeading: "HILLSBORO",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-half-full"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 4.5,
    totalRatting: 22,
    location: "1323 E. Franklin St., Ste. 102 Hillsboro, TX 76645",
    locationUrl: "/contact-locations/hillsboro/",
  },
  {
    locationHeading: "LANCASTER",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-half-full"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 2.5,
    totalRatting: 8,
    location: "2700 W. Pleasant Run Rd., Ste. 320 Lancaster, TX 75146",
    locationUrl: "/contact-locations/lancaster/",
  },
  {
    locationHeading: "DECATUR",
    stars: (
      <>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 0,
    totalRatting: 0,
    location: "902 Preskitt Rd Suite 300, Decatur, TX 76234",
    locationUrl: "/contact-locations/decatur/",
  },
  {
    locationHeading: "FARMERS BRANCH",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 5.0,
    totalRatting: 2,
    location: "13988 Diplomat Dr., Ste. 100 Farmers Branch, TX 75234",
    locationUrl: "/contact-locations/farmers-branch/",
  },
  {
    locationHeading: "WAXAHACHIE",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 1.0,
    totalRatting: 1,
    location: "115 Park Pl Blvd #100 Waxahachie, TX 75165",
    locationUrl: "/contact-locations/waxahachie/",
  },
  {
    locationHeading: "CORSICANA",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 3.8,
    totalRatting: 39,
    location: "3108 E. State HWY 22 Corsicana, TX 75102",
    locationUrl: "/contact-locations/corsicana/",
  },
  {
    locationHeading: "CLEBURNE",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 5.0,
    totalRatting: 2,
    location: "131 S Westmeadow Dr, Cleburne, TX 76033",
    locationUrl: "/contact-locations/cleburne/",
  },
  {
    locationHeading: "PLANO",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
      </>
    ),
    rating: 5.0,
    totalRatting: 1,
    location: "7712 San Jancinto Place Suite 300 Plano, TX 75024",
    locationUrl: "/contact-locations/plano/",
  },
  {
    locationHeading: "ENNIS",
    stars: (
      <>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 0.0,
    totalRatting: 0,
    location: "2200 Physicians Boulevard, Suite B1 Ennis, TX 75119",
    locationUrl: "/contact-locations/ennis/",
  },
  {
    locationHeading: "MESQUITE",
    stars: (
      <>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 0.0,
    totalRatting: 0,
    location: "200 W Kearney St, Mesquite, TX 75149",
    locationUrl: "/contact-locations/mesquite/",
  },
  {
    locationHeading: "GUN BARREL CITY",
    stars: (
      <>
        <i
          className="fa fa-star checked"
          style={{
            fontSize: "20px",
            color: "orange",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
        <i
          class="fa fa-star-o"
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        ></i>
      </>
    ),
    rating: 1.0,
    totalRatting: 1,
    location: "519 N Gun Barrel Ln Suite A Gun Barrel City, TX 75156",
    locationUrl: "/contact-locations/gun-barrel-city/",
  },
];
const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          Contact & Locations: Expert Pain Management Doctors Near Me
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/find-a-location/`}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <meta
          name="description"
          content="If you are experiencing pain following a collision, contact Premier Pain Centers to schedule an appointment for car accident injury treatment in Richardson."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Find A Location"
        homePageUrl="/"
        homePageText="Home"
        activePageText="cfind-a-location"
        bgImage="/images/find-a-location.jpg"
      />

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="appointment-area-three">
                <div className="container-fluid p-0">
                  <div className="row m-0">
                    <div className="col-lg-12">
                      <div
                        className="appointment-item appointment-item-two find-a-location-scroll"
                        style={{
                          marginRight: "0px",
                          marginTop: "0px",
                          height: "800px",
                          overflow: "auto",
                          scrollbarWidth: "thin",
                        }}
                      >
                        {locData.map((item, index) => (
                          <div className="location-area" key={index}>
                            <div className="container">
                              <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                  <div className="location-item">
                                    <h2>{item.locationHeading}</h2>
                                    {item.stars} {item.rating} out of 5 ({" "}
                                    {item.totalRatting} Ratings)
                                    <p>{item.location}</p>
                                    <div>
                                      <u>
                                        <Link
                                          href={item.locationUrl}
                                          style={{
                                            backgroundColor: "white",
                                            color: "#0046c0",
                                            fontWeight: 700,
                                            fontSize: ".944rem",
                                          }}
                                          rel="preload"
                                          target="_blank"
                                        >
                                          MORE INFORMATION
                                        </Link>
                                      </u>{" "}
                                    </div>
                                    <div style={{ paddingTop: "15px" }}>
                                      <Link
                                        href="/appointment/"
                                        style={{
                                          backgroundColor: "#0046c0",
                                          color: "white",
                                          padding: "10px 11px",
                                        }}
                                        rel="preload"
                                      >
                                        Request An Appointment
                                      </Link>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-none d-sm-none d-md-block">
              <FindLocation
                specificLocation={[{ lat: 32.9776120064545, lng: -96.72221505951866 }]}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
