import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const FindLocation = dynamic(() => import("../components/FindLocation"));

const Footer = dynamic(() => import("../components/_App/Footer"));
const locData = [
  {
    locationHeading: "RICHARDSON",
    latlong: { lat: 32.9776120064545, lng: -96.72221505951866 },
    rating: 4.6,
    totalRatting: 74,
    location: "2071 N Collins Blvd Richardson, Texas 75080",
    locationUrl: "/contact-locations/richardson/",
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
  },
  {
    locationHeading: "NORTH RICHLAND HILLS",
    latlong: { lat: 32.83058468783163, lng: -97.2080687 },
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
    location: "7904 NE Loop 820, Ste. C North Richland Hills, Texas 76180",
    locationUrl: "/contact-locations/north-richland-hills/",
  },
  {
    locationHeading: "FORT WORTH",
    latlong: { lat: 32.73291121474605, lng: -97.33826710000001 },
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
    location: "1111 5th Ave, Fort Worth, Texas 76104",
    locationUrl: "/contact-locations/fort-worth/",
  },
  {
    locationHeading: "HILLSBORO",
    latlong: { lat: 32.01326418568025, lng: -97.0991722711646 },
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
    location: "1323 E. Franklin St., Ste. 102 Hillsboro, Texas 76645",
    locationUrl: "/contact-locations/hillsboro/",
  },
  {
    locationHeading: "LANCASTER",
    latlong: { lat: 32.60310848369879, lng: -96.81242772698755 },
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
    location: "2700 W. Pleasant Run Rd., Ste. 320 Lancaster, Texas 75146",
    locationUrl: "/contact-locations/lancaster/",
  },
  {
    locationHeading: "DECATUR",
    latlong: { lat: 33.212880416835006, lng: -97.59728592883539 },
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
    location: "902 Preskitt Rd Suite 300, Decatur, Texas 76234",
    locationUrl: "/contact-locations/decatur/",
  },
  {
    locationHeading: "FARMERS BRANCH",
    latlong: { lat: 32.936086564933206, lng: -96.90594498465838 },
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
    location: "13988 Diplomat Dr., Ste. 100 Farmers Branch, Texas 75234",
    locationUrl: "/contact-locations/farmers-branch/",
  },
  {
    locationHeading: "WAXAHACHIE",
    latlong: { lat: 32.408326085505514, lng: -96.82257525582297 },
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
    location: "115 Park Pl Blvd #100 Waxahachie, Texas 75165",
    locationUrl: "/contact-locations/waxahachie/",
  },
  {
    locationHeading: "CORSICANA",
    latlong: { lat: 32.085323747078476, lng: -96.50113081534163 },
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
    location: "3108 E. State HWY 22 Corsicana, Texas 75102",
    locationUrl: "/contact-locations/corsicana/",
  },
  {
    locationHeading: "CLEBURNE",
    latlong: { lat: 32.33607918920648, lng: -97.41684391534164 },
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
    location: "131 S Westmeadow Dr, Cleburne, Texas 76033",
    locationUrl: "/contact-locations/cleburne/",
  },
  {
    locationHeading: "PLANO",
    latlong: { lat: 33.08179611455827, lng: -96.7968525 },
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
    location: "7712 San Jacinto Place Suite 300 Plano, Texas 75024",
    locationUrl: "/contact-locations/plano/",
  },
  {
    locationHeading: "ENNIS",
    latlong: { lat: 32.304483754364334, lng: -96.63842572883539 },
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
    location: "2200 Physicians Boulevard, Suite B1 Ennis, Texas 75119",
    locationUrl: "/contact-locations/ennis/",
  },
  {
    locationHeading: "MESQUITE",
    latlong: { lat: 32.77064760026997, lng: -96.60017665767083 },
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
    location: "200 W Kearney St, Mesquite, Texas 75149",
    locationUrl: "/contact-locations/mesquite/",
  },
  {
    locationHeading: "GUN BARREL CITY",
    latlong: { lat: 32.33791210574928, lng: -96.1109137576708 },
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
    location: "519 N Gun Barrel Ln Suite A Gun Barrel City, Texas 75156",
    locationUrl: "/contact-locations/gun-barrel-city/",
  },
];
const allLatLong = [
  { lat: 32.9776120064545, lng: -96.72221505951866 },
  { lat: 32.83056665743497, lng: -97.2080579711646 },
  { lat: 32.732929264944616, lng: -97.3382456423292 },
  { lat: 32.01327328293218, lng: -97.09918300000001 },
  { lat: 32.603072330812054, lng: -96.81252428650623 },
  { lat: 33.212898369205305, lng: -97.59725374232919 },
  { lat: 32.9361586006759, lng: -96.90602008650623 },
  { lat: 32.4083532589621, lng: -96.8226396288354 },
  { lat: 32.085332837170135, lng: -96.5010879 },
  { lat: 32.33602479880852, lng: -97.41682245767085 },
  { lat: 33.08170621843566, lng: -96.79687395767081 },
  { lat: 32.304338662619514, lng: -96.63846864417702 },
  { lat: 32.304393072051056, lng: -96.6384579153416 },
  { lat: 32.77064760026997, lng: -96.60015519999999 },
  { lat: 32.33798462476034, lng: -96.1109030288354 },
];
const DoctorDetails = () => {
  const [selectedLocation, setSelectedLocation] = useState(allLatLong);

  const [zipCodeFilter, setZipCodeFilter] = useState("");
  const [cityStateFilter, setCityStateFilter] = useState("");
  const [locationNameFilter, setLocationNameFilter] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locData);

  useEffect(() => {
    const filterLocations = () => {
      let filtered = locData;

      if (zipCodeFilter) {
        // Assuming location includes zip code in a specific format within the 'location' string
        filtered = filtered.filter((item) =>
          item.location.includes(zipCodeFilter)
        );
      }
      if (cityStateFilter) {
        // Assuming 'city, state' format is part of the 'location' string
        filtered = filtered.filter((item) =>
          item.location.toLowerCase().includes(cityStateFilter.toLowerCase())
        );
      }
      if (locationNameFilter) {
        // Filter by location heading/name
        filtered = filtered.filter((item) =>
          item.locationHeading
            .toLowerCase()
            .includes(locationNameFilter.toLowerCase())
        );
      }

      setFilteredLocations(filtered);
    };

    filterLocations();
  }, [zipCodeFilter, cityStateFilter, locationNameFilter]); // Re-run the effect when any filter value changes

  const clearFilters = () => {
    setZipCodeFilter("");
    setCityStateFilter("");
    setLocationNameFilter("");
    setSelectedLocation(allLatLong);
    setFilteredLocations(locData);
  };

  const handleLocationClick = (lat_long) => {
    setSelectedLocation(lat_long);
  };
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

      <div
        style={{
          height: "350px",
          position: "relative",
          backgroundColor: "#201a50",
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="page-title-item">
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingBottom: "1.5rem",
                }}
              >
                Our Locations
              </h1>
              <div className="container">
                <div className="row">
                  <div className={"col-lg-4"}>
                    <div className="form-group">
                      <label
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "550",
                          color: "white",
                        }}
                      >
                        Search by Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                        name="zipcode"
                        value={zipCodeFilter}
                        onChange={(e) => setZipCodeFilter(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={"col-lg-4"}>
                    <div className="form-group">
                      <label
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "550",
                          color: "white",
                        }}
                      >
                        Search by City and State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City, State"
                        name="citystate"
                        value={cityStateFilter}
                        onChange={(e) => setCityStateFilter(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={"col-lg-4"}>
                    <div className="form-group">
                      <label
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "550",
                          color: "white",
                        }}
                      >
                        Search by Location Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Name"
                        name="location"
                        value={locationNameFilter}
                        onChange={(e) => setLocationNameFilter(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div
                    className="col-4"
                    style={{ textAlign: "end", paddingTop: "1rem" }}
                  >
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        clearFilters();
                      }}
                      style={{
                        color: "#E8EAED",
                        fontSize: "1rem",
                        fontWeight: "550",
                        cursor: "pointer",
                      }}
                    >
                      CLEAR FILTERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctor-details-area pt-4 pb-50">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="appointment-area-three">
                <div className="container-fluid p-0">
                  <div className="row m-0">
                    <div className="col-lg-12">
                      <div
                        className="appointment-item appointment-item-two"
                        style={{
                          marginRight: "0px",
                          marginTop: "0px",
                          height: "800px",
                          overflow: "auto",
                          scrollbarWidth: "thin",
                        }}
                      >
                        {filteredLocations.map((item, index) => (
                          <div
                            className="location-area"
                            key={index}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleLocationClick([item.latlong])}
                          >
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
              <FindLocation specificLocation={selectedLocation} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
