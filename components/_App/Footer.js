import React from "react";
import Link from "next/link";
import Image from "next/image";
import CallCounterButton from "../../components/CallCounterButton";

const Footer = () => {
  return (
    <>
      <footer className="pt-5" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div
                  className="footer-contact"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link href="/" className="navbar-brand" rel="preload">
                    <Image
                      src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855835/eh79pi5e8ne5mckahar8.png"
                      alt="logo"
                      width={217}
                      height={125}
                      loading="lazy"
                    />
                  </Link>
                  <p className="pt-3" style={{ color: "white" }}>
                    At Premier Pain Centers, we offer top quality pain
                    management using some of the least invasive, most effective
                    pain procedures possible.
                  </p>
                  <div className="common-btn">
                    <Link
                      href="/appointment/"
                      className="cmn-btn-right"
                      rel="preload"
                    >
                      Schedule Appointment
                    </Link>
                  </div>
                  <div className="common-btn mt-3">
                    <Link
                      href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
                      target="_blank"
                      style={{
                        backgroundColor: "#0046c0",
                        color: "white",
                        padding: "10px 11px",
                      }}
                      rel="preload"
                    >
                      New Patient Paper Work{" "}
                    </Link>
                  </div>
                  <ul className="mt-3">
                    <li>
                      <i
                        className="icofont-ui-message"
                        style={{ fontSize: "25px" }}
                      ></i>
                      <a href="mailto:admin@mypremierpain.com">
                        admin@mypremierpain.com
                      </a>
                    </li>

                    <li style={{ marginLeft: "-5px" }}>
                      <i
                        className="icofont-ui-call"
                        style={{ fontSize: "30px" }}
                      ></i>

                      {/* <a href="tel:+14695624188">469-562-4188</a> */}
                      <CallCounterButton kw="footer" />
                    </li>
                  </ul>
                  <ul
                    className="mt-4"
                    style={{ display: "flex", marginLeft: "-10px" }}
                  >
                    <li style={{ marginRight: "10px" }}>
                      <a
                        href="https://www.facebook.com/mypremierpain"
                        aria-label="Facebook"
                        target="_blank"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    {/* <li style={{ marginRight: "10px" }}>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li> */}
                    <li style={{ marginRight: "10px" }}>
                      <a
                        // href="https://www.linkedin.com/in/premier-pain-centers-08582018a/"
                        href="https://www.linkedin.com/company/premier-pain-centers-in-dallas/"
                        // href="https://www.linkedin.com/in/premier-pain-centers/"
                        aria-label="Linkedin"
                        target="_blank"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li style={{ marginRight: "10px" }}>
                      <a
                        href="https://www.instagram.com/premier_pain_centers/"
                        aria-label="Instagram"
                        target="_blank"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>RICHARDSON</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/J5kiiE8xRWiQo1tSA">
                        2071 N Collins Blvd
                      </a>
                      <a href="https://maps.app.goo.gl/J5kiiE8xRWiQo1tSA">
                        Richardson, TX 75080
                      </a>
                      <a
                        href="https://maps.app.goo.gl/J5kiiE8xRWiQo1tSA"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/richardson/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>HILLSBORO</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/B8bdhEhjUdMz9XPt7">
                        207 I-35, Hillsboro,{" "}
                      </a>
                      <a href="https://maps.app.goo.gl/B8bdhEhjUdMz9XPt7">
                        TX 76645
                      </a>
                      <a
                        href="https://maps.app.goo.gl/B8bdhEhjUdMz9XPt7"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/hillsboro/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>GUN BARREL CITY</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/MZa8Mp2ePJqqM4RP9">
                        519 N Gun Barrel Ln Suite A
                      </a>
                      <a href="https://maps.app.goo.gl/MZa8Mp2ePJqqM4RP9">
                        Gun Barrel City, TX 75156
                      </a>
                      <a
                        href="https://maps.app.goo.gl/MZa8Mp2ePJqqM4RP9"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/gun-barrel-city/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    {/* <li>
											<h3 style={{ marginBottom: "1px" }}>FARMERS BRANCH</h3>
											<i className="icofont-location-pin"></i>
											<a href="https://www.google.com/maps?cid=3934515186064169906">
												13988 Diplomat Dr., Ste. 100
											</a>
											<a href="https://www.google.com/maps?cid=3934515186064169906">
												Farmers Branch, TX 75234
											</a>
											<a
												href="https://www.google.com/maps?cid=3934515186064169906"
												className="fw-bold"
											>
												View Map & Directions
											</a>
											<a
												href="/contact-locations/farmers-branch/"
												className="fw-bold"
											>
												View Site
											</a>
										</li> */}
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>CLEBURNE</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/v8jsuH2x7pJkqNDWA">
                        131 S Westmeadow Dr,
                      </a>
                      <a href="https://maps.app.goo.gl/v8jsuH2x7pJkqNDWA">
                        Cleburne, TX 76033
                      </a>
                      <a
                        href="https://maps.app.goo.gl/v8jsuH2x7pJkqNDWA"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/cleburne/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>MESQUITE</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/B8LH9iSKqdqmxsFn7">
                        200 W Kearney St,
                      </a>
                      <a href="https://maps.app.goo.gl/B8LH9iSKqdqmxsFn7">
                        Mesquite, TX 75149
                      </a>
                      <a
                        href="https://maps.app.goo.gl/B8LH9iSKqdqmxsFn7"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/mesquite/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>
                        NORTH RICHLAND HILLS
                      </h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=10580295200115195655">
                        7904 NE Loop 820, Ste. C
                      </a>
                      <a href="https://www.google.com/maps?cid=10580295200115195655">
                        North Richland Hills, TX 76180
                      </a>
                      <a
                        href="https://www.google.com/maps?cid=10580295200115195655"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/north-richland-hills/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>Desoto</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/xMgYGPoC4SVXGDgC9">
                        281 N Interstate 35 E Rd,
                      </a>
                      <a href="https://maps.app.goo.gl/xMgYGPoC4SVXGDgC9">
                        Desoto, TX 75115
                      </a>
                      <a
                        href="https://maps.app.goo.gl/xMgYGPoC4SVXGDgC9"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a href="/contact-locations/desoto/" className="fw-bold">
                        View Site
                      </a>
                    </li>
                    <li>
                      {" "}
                      <h3 style={{ marginBottom: "1px" }}>WAXAHACHIE</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/XrY5fzd2wsjNSdEx9">
                        20 Northgate Dr,
                      </a>
                      <a href="https://maps.app.goo.gl/XrY5fzd2wsjNSdEx9">
                        Waxahachie, TX 75165
                      </a>
                      <a
                        href="https://maps.app.goo.gl/XrY5fzd2wsjNSdEx9"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/waxahachie/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>PLANO</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/RG3xKGzsP5ZUjVpy7">
                        7712 San Jacinto Place
                      </a>
                      <a href="https://maps.app.goo.gl/RG3xKGzsP5ZUjVpy7">
                        Suite 300 Plano, TX 75024
                      </a>
                      <a
                        href="https://maps.app.goo.gl/RG3xKGzsP5ZUjVpy7"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a href="/contact-locations/plano/" className="fw-bold">
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>Kaufman</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/aRSoXj1gPwKPkcU78">
                        874 Ed Hall Dr., Suite 110,
                      </a>
                      <a href="https://maps.app.goo.gl/aRSoXj1gPwKPkcU78">
                        Kaufman, TX 75142
                      </a>
                      <a
                        href="https://maps.app.goo.gl/aRSoXj1gPwKPkcU78"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a href="/contact-locations/kaufman/" className="fw-bold">
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>FORT WORTH</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=1967984420970158753">
                        1111 5th Ave,
                      </a>
                      <a href="https://www.google.com/maps?cid=1967984420970158753">
                        Fort Worth, TX 76104
                      </a>
                      <a
                        href="https://www.google.com/maps?cid=1967984420970158753"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/fort-worth/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>DECATUR</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/Bvezbx2CdS1krWUk6">
                        902 Preskitt Rd Suite 300,
                      </a>
                      <a href="https://maps.app.goo.gl/Bvezbx2CdS1krWUk6">
                        Decatur, TX 76234
                      </a>
                      <a
                        href="https://maps.app.goo.gl/Bvezbx2CdS1krWUk6"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a href="/contact-locations/decatur/" className="fw-bold">
                        View Site
                      </a>
                    </li>
                    <li>
                      {" "}
                      <h3 style={{ marginBottom: "1px" }}>CORSICANA</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/2MjRnqJPaLLJmK3ZA">
                        3108 E. State HWY 22
                      </a>
                      <a href="https://maps.app.goo.gl/2MjRnqJPaLLJmK3ZA">
                        Corsicana, TX 75102
                      </a>
                      <a
                        href="https://maps.app.goo.gl/2MjRnqJPaLLJmK3ZA"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a
                        href="/contact-locations/corsicana/"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>ENNIS</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://maps.app.goo.gl/B7EeEqTxQwtoFPH76">
                        2200 Physicians Boulevard,
                      </a>
                      <a href="https://maps.app.goo.gl/B7EeEqTxQwtoFPH76">
                        Suite B1 Ennis, TX 75119
                      </a>
                      <a
                        href="https://maps.app.goo.gl/B7EeEqTxQwtoFPH76"
                        className="fw-bold"
                      >
                        View Map & Directions
                      </a>
                      <a href="/contact-locations/ennis/" className="fw-bold">
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area" style={{ backgroundColor: "#090D16" }}>
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; 2022 Design & Developed by{" "}
              <a href="https://www.mypremierpain.com/" target="_blank">
                Premier Pain Centers
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
