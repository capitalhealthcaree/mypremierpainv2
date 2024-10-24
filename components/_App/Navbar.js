import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import CallCounterButton from "../../components/CallCounterButton";

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
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" className="navbar-brand" rel="preload">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={139}
                  height={78}
                  loading="lazy"
                />
              </Link>
              {/* <span style={{ visibility: "hidden" }}>
                <Link href="/" className="navbar-brand" rel="preload">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={139}
                    height={78}
                    loading="lazy"
                  />
                </Link>
              </span> */}
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
                      rel="preload"
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
                      rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Hip Pain
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/coccydynia/"
                          className={`nav-link ${
                            currentPath == "/conditions-we-treat/coccydynia/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          Coccydynia Pain
                        </Link>
                      </li> */}
                      <li className="nav-item"></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/tms-therapy/"
                      className={`nav-link ${
                        currentPath === "/tms-therapy/" && "active"
                      }`}
                      rel="preload"
                    >
                      TMS Therapy
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="/iv-therapy/"
                      className={`nav-link ${
                        currentPath === "/iv-therapy/" && "active"
                      }`}
                      rel="preload"
                    >
                      IV Therapy
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/treatments/"
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/treatments/" && "active"
                      }`}
                      rel="preload"
                    >
                      Treatments
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/treatments/hip-joint-injections/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/hip-joint-injections/" && "active"
                          }`}
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Percutaneous Discectomy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/trigger-point-injections/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/trigger-point-injections/" &&
                            "active"
                          }`}
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Lumbar Sympathetic Injections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/epidural-nerve-block/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/epidural-nerve-block/" && "active"
                          }`}
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                      rel="preload"
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
                          rel="preload"
                        >
                          Rao K. Ali MD
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
                          rel="preload"
                        >
                          Muhammad Zulqarnain MD (Dr. Z)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/william-moore-md/"
                          className={`nav-link ${
                            currentPath == "/meet-our-team/william-moore-md/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          William Moore MD
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
                      rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Lancaster
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/corsicana/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/corsicana/" &&
                            "active"
                          }`}
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Cleburne
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/plano/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/plano/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          Plano
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/ennis/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/ennis/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          Ennis
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/mesquite/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/mesquite/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          Mesquite
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/gun-barrel-city/"
                          className={`nav-link ${
                            currentPath ==
                              "/contact-locations/gun-barrel-city/" && "active"
                          }`}
                          rel="preload"
                        >
                          Gun Barrel City
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                      rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          About Us
                        </Link>
                      </li>{" "}
                      <li className="nav-item">
                        <Link
                          href="/dallas-pain-clinic/"
                          className={`nav-link ${
                            currentPath == "/dallas-pain-clinic/" && "active"
                          }`}
                          rel="preload"
                        >
                          Dallas Pain Clinic{" "}
                        </Link>
                      </li>{" "}
                      <li className="nav-item">
                        <Link
                          href="/images/New-Patient-Paper-Work.pdf/"
                          target="_blank"
                          className={`nav-link ${
                            currentPath == "/faqs/" && "active"
                          }`}
                          rel="preload"
                        >
                          New Patient Paper Work
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/referring-a-patient/"
                          className={`nav-link ${
                            currentPath == "/referring-a-patient/" && "active"
                          }`}
                          rel="preload"
                        >
                          Referring A Patient
                        </Link>
                      </li>{" "}
                      <li className="nav-item">
                        <Link
                          href="/faqs/"
                          className={`nav-link ${
                            currentPath == "/faqs/" && "active"
                          }`}
                          rel="preload"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/news/"
                          className={`nav-link ${
                            currentPath == "/news/" && "active"
                          }`}
                          rel="preload"
                        >
                          News
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          href="/educational-videos/"
                          className={`nav-link ${
                            currentPath == "/educational-videos/" && "active"
                          }`}
                          rel="preload"
                        >
                          Educational Videos
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          href="/video-testimonials/"
                          className={`nav-link ${
                            currentPath == "/video-testimonials/" && "active"
                          }`}
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
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
                          rel="preload"
                        >
                          Appointment
                        </Link>{" "}
                        {/* <Link
                          href="tel:+14695624188"
                          style={{
                            backgroundColor: "#0046c0",
                            color: "white",
                            padding: "10px 12px",
                          }}
                          rel="preload"
                        >
                          469-562-4188
                        </Link> */}
                        <CallCounterButton
                          kw="header"
                          bgColor="#0046c0"
                          txtColor={"white"}
                        />
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
