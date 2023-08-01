import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath === "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/conditions-we-treat/"
                      className={`nav-link dropdown-toggle ${
                        currentPath === "/conditions-we-treat/" && "active"
                      }`}
                    >
                      Conditions We Treat
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/car-accident-injury/"
                          className={`nav-link ${
                            currentPath ===
                              "/conditions-we-treat/car-accident-injury/" &&
                            "active"
                          }`}
                        >
                          Car Accident Injury
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/shoulder-pain/"
                          className={`nav-link ${
                            currentPath ===
                              "/conditions-we-treat/shoulder-pain/" && "active"
                          }`}
                        >
                          Shoulder Pain
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/sports-injury/"
                          className={`nav-link ${
                            currentPath ==
                              "/conditions-we-treat/sports-injury/" && "active"
                          }`}
                        >
                          Sports Injury
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/headaches/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/headaches/" &&
                            "active"
                          }`}
                        >
                          Headaches
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/back-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/back-pain/" &&
                            "active"
                          }`}
                        >
                          Back Pain
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/neck-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/neck-pain/" &&
                            "active"
                          }`}
                        >
                          Neck Pain
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/knee-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/knee-pain/" &&
                            "active"
                          }`}
                        >
                          Knee Pain
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/joint-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/joint-pain/" &&
                            "active"
                          }`}
                        >
                          Joint Pain
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/leg-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/leg-pain/" &&
                            "active"
                          }`}
                        >
                          Leg Pain
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/hip-pain/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/hip-pain/" &&
                            "active"
                          }`}
                        >
                          Hip Pain
                        </Link>
                      </li>
                      <li className="nav-item"></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/treatments/"
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/treatments/" && "active"
                      }`}
                    >
                      Treatments
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/treatments/hip-joint-injections/"
                          className={`nav-link ${
                            currentPath == "/treatments/hip-joint-injections/" &&
                            "active"
                          }`}
                        >
                          Hip Joint Injections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/disc-regenerative-therapy/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/disc-regenerative-therapy/" &&
                            "active"
                          }`}
                        >
                          Disc Regenerative Therapy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/mild-procedure/"
                          className={`nav-link ${
                            currentPath == "/treatments/mild-procedure/" &&
                            "active"
                          }`}
                        >
                          Mild Procedure
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/facet-joint-injection/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/facet-joint-injection/" && "active"
                          }`}
                        >
                          Facet Joint Injection
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/percutaneous-discectomy/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/percutaneous-discectomy/" && "active"
                          }`}
                        >
                          Percutaneous Discectomy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/trigger-point-injections/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/trigger-point-injections/" && "active"
                          }`}
                        >
                          Trigger Point Injections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/joint-injections/"
                          className={`nav-link ${
                            currentPath == "/treatments/joint-injections/" &&
                            "active"
                          }`}
                        >
                          Joint Injections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/lumbar-sympathetic-injections/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/lumbar-sympathetic-injections/" &&
                            "active"
                          }`}
                        >
                          Lumbar Sympathetic Injections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/epidural-nerve-block/"
                          className={`nav-link ${
                            currentPath == "/treatments/epidural-nerve-block/" &&
                            "active"
                          }`}
                        >
                          Epidural Nerve Block
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/si-joint-injection/"
                          className={`nav-link ${
                            currentPath == "/treatments/si-joint-injection/" &&
                            "active"
                          }`}
                        >
                          Si Joint Injection
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/pronox/"
                          className={`nav-link ${
                            currentPath == "/treatments/pronox/" && "active"
                          }`}
                        >
                          PronoX
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/occipital-nerve-block/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/occipital-nerve-block/" && "active"
                          }`}
                        >
                          Occipital Nerve Block
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/genicular-nerve-block/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/genicular-nerve-block/" && "active"
                          }`}
                        >
                          Genicular Nerve Block
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/spinal-cord-stimulation/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/spinal-cord-stimulation/" && "active"
                          }`}
                        >
                          Spinal Cord Stimulation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/bursa-injection/"
                          className={`nav-link ${
                            currentPath == "/treatments/bursa-injection/" &&
                            "active"
                          }`}
                        >
                          Bursa Injection
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/peripheral-nerve-stimulation/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/peripheral-nerve-stimulation/" &&
                            "active"
                          }`}
                        >
                          Peripheral Nerve Stimulation
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/meet-our-team/"
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/meet-our-team/" && "active"
                      }`}
                    >
                      Meet Our Team
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/rao-k-ali/"
                          className={`nav-link ${
                            currentPath == "/meet-our-team/rao-k-ali/" &&
                            "active"
                          }`}
                        >
                          Rao K Ali MD
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
                          className={`nav-link ${
                            currentPath ==
                              "/meet-our-team/dr-muhammad-zulqarnain-dr-z-/" &&
                            "active"
                          }`}
                        >
                          DR. MUHAMMAD ZULQARNAIN (DR. Z)
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact-locations/"
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/contact-locations/" && "active"
                      }`}
                    >
                      Contact & Locations
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/richardson/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/richardson/" &&
                            "active"
                          }`}
                        >
                          Richardson
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact-locations/north-richland-hills/"
                          className={`nav-link ${
                            currentPath ==
                              "/contact-locations/north-richland-hills/" &&
                            "active"
                          }`}
                        >
                          North Richland Hills
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/waxahachie/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/waxahachie/" &&
                            "active"
                          }`}
                        >
                          Waxahachie
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/fort-worth/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/fort-worth/" &&
                            "active"
                          }`}
                        >
                          Fort Worth
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/hillsboro/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/hillsboro/" &&
                            "active"
                          }`}
                        >
                          Hillsboro
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/lancaster/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/lancaster/" &&
                            "active"
                          }`}
                        >
                          Lancaster
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/farmers-branch/"
                          className={`nav-link ${
                            currentPath ==
                              "/contact-locations/farmers-branch/" && "active"
                          }`}
                        >
                          Farmers Branch
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/corsicana/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/corsicana/" &&
                            "active"
                          }`}
                        >
                          Corsicana
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/decatur/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/decatur/" &&
                            "active"
                          }`}
                        >
                          Decatur
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/cleburne/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/cleburne/" &&
                            "active"
                          }`}
                        >
                          Cleburne
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      More
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/news/"
                          className={`nav-link ${
                            currentPath == "/news/" && "active"
                          }`}
                        >
                          News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/educational-videos/"
                          className={`nav-link ${
                            currentPath == "/educational-videos/" && "active"
                          }`}
                        >
                          Educational Videos
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/video-testimonials/"
                          className={`nav-link ${
                            currentPath == "/video-testimonials/" && "active"
                          }`}
                        >
                          Video Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/interventional-pain-management/"
                          className={`nav-link ${
                            currentPath == "/interventional-pain-management/" &&
                            "active"
                          }`}
                        >
                          Interventional Pain Management
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/reviews/"
                          className={`nav-link ${
                            currentPath == "/reviews/" && "active"
                          }`}
                        >
                          reviews
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="nav-srh">
                <div className="main-nav">
                  <div className="container">
                    <nav className="navbar">
                      <div className="common-btn" style={{ display: "flex" }}>
                        <Link
                          href="/appointment/"
                          style={{
                            backgroundColor: "#0046c0",
                            color: "white",
                            padding: "10px 11px",
                          }}
                        >
                          Appointment
                        </Link>{" "}
                        <Link
                          href="tel:+14695624188"
                          style={{
                            backgroundColor: "#0046c0",
                            color: "white",
                            padding: "10px 12px",
                          }}
                        >
                          469-562-4188
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
