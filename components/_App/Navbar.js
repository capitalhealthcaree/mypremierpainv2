// // import React, { useState, useEffect } from "react";
// // import { useRouter } from "next/router";
// // import Link from "next/link";
// // import Image from "next/image";
// // import CallCounterButton from "../../components/CallCounterButton";

// // const Navbar = () => {
// //   // Add active class
// //   const [currentPath, setCurrentPath] = useState("");
// //   const router = useRouter();

// //   useEffect(() => {
// //     setCurrentPath(router.asPath);
// //   }, [router]);

// //   const [menu, setMenu] = React.useState(true);

// //   const toggleNavbar = () => {
// //     setMenu(!menu);
// //   };

// //   React.useEffect(() => {
// //     let elementId = document.getElementById("navbar");
// //     document.addEventListener("scroll", () => {
// //       if (window.scrollY > 170) {
// //         elementId.classList.add("is-sticky");
// //       } else {
// //         elementId.classList.remove("is-sticky");
// //       }
// //     });
// //   });

// //   const classOne = menu
// //     ? "collapse navbar-collapse"
// //     : "collapse navbar-collapse show";
// //   const classTwo = menu
// //     ? "navbar-toggler navbar-toggler-right collapsed"
// //     : "navbar-toggler navbar-toggler-right";

// //   return (
// //     <>
// //       <div id="navbar" className="navbar-area sticky-top">
// //         <div className="main-nav">
// //           <div className="container-fluid">
// //             <nav className="navbar navbar-expand-lg navbar-light">
// //               <Link href="/" className="navbar-brand" rel="preload">
// //                 <Image
// //                   src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
// //                   alt="logo"
// //                   width={139}
// //                   height={78}
// //                   loading="lazy"
// //                 />
// //               </Link>
// //               <button
// //                 onClick={toggleNavbar}
// //                 className={classTwo}
// //                 type="button"
// //                 data-toggle="collapse"
// //                 data-target="#navbarSupportedContent"
// //                 aria-controls="navbarSupportedContent"
// //                 aria-expanded="false"
// //                 aria-label="Toggle navigation"
// //               >
// //                 <span className="icon-bar top-bar"></span>
// //                 <span className="icon-bar middle-bar"></span>
// //                 <span className="icon-bar bottom-bar"></span>
// //               </button>

// //               <div className={classOne} id="navbarSupportedContent">
// //                 <ul className="navbar-nav">
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/"
// //                       className={`nav-link ${currentPath === "/" && "active"}`}
// //                       rel="preload"
// //                     >
// //                       Home
// //                     </Link>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="/conditions-we-treat/"
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath === "/conditions-we-treat/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Conditions We Treat
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/car-accident-injury/"
// //                           className={`nav-link ${
// //                             currentPath ===
// //                               "/conditions-we-treat/car-accident-injury/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Car Accident Injury
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/shoulder-pain/"
// //                           className={`nav-link ${
// //                             currentPath ===
// //                               "/conditions-we-treat/shoulder-pain/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Shoulder Pain
// //                         </Link>
// //                       </li>

// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/sports-injury/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/conditions-we-treat/sports-injury/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Sports Injury
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/headaches/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/headaches/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Headaches
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/back-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/back-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Back Pain
// //                         </Link>
// //                       </li>

// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/neck-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/neck-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Neck Pain
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/knee-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/knee-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Knee Pain
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/joint-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/joint-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Joint Pain
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/leg-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/leg-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Leg Pain
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/hip-pain/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/hip-pain/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Hip Pain
// //                         </Link>
// //                       </li>
// //                       {/* <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/coccydynia/"
// //                           className={`nav-link ${
// //                             currentPath == "/conditions-we-treat/coccydynia/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Coccydynia Pain
// //                         </Link>
// //                       </li> */}
// //                       <li className="nav-item"></li>
// //                     </ul>
// //                   </li>
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/psychiatric-services-in-dallas-tx/"
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
// //                         "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Psychiatry
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/tms-therapy/"
// //                           className={`nav-link ${
// //                             currentPath == "/tms-therapy/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           TMS Therapy
// //                         </Link>
// //                       </li>

// //                       <li className="nav-item">
// //                         <Link
// //                           href="/talk-therapy-dallas/"
// //                           className={`nav-link ${
// //                             currentPath == "/talk-therapy-dallas/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Talk Therapy
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/dallas-counseling-services/"
// //                           className={`nav-link ${
// //                             currentPath == "/dallas-counseling-services/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Counseling
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/medication-management-in-dallas/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/medication-management-in-dallas/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Medication Management
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>
// //                   {/* <li className="nav-item">
// //                     <Link
// //                       href="/psychiatric-services-in-dallas-tx/"
// //                       className={`nav-link ${
// //                         currentPath === "/psychiatric-services-in-dallas-tx/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Psychiatry
// //                     </Link>
// //                   </li> */}
// //                   {/* <li className="nav-item">
// //                     <Link
// //                       href="/iv-therapy/"
// //                       className={`nav-link ${
// //                         currentPath === "/iv-therapy/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       IV Therapy
// //                     </Link>
// //                   </li> */}
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/treatments/"
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/treatments/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Treatments
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/hip-joint-injections/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/hip-joint-injections/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Hip Joint Injections
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/disc-regenerative-therapy/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/disc-regenerative-therapy/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Disc Regenerative Therapy
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/mild-procedure/"
// //                           className={`nav-link ${
// //                             currentPath == "/treatments/mild-procedure/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Mild Procedure
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/facet-joint-injection/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/facet-joint-injection/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Facet Joint Injection
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/percutaneous-discectomy/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/percutaneous-discectomy/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Percutaneous Discectomy
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/trigger-point-injections/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/trigger-point-injections/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Trigger Point Injections
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/joint-injections/"
// //                           className={`nav-link ${
// //                             currentPath == "/treatments/joint-injections/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Joint Injections
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/lumbar-sympathetic-injections/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/lumbar-sympathetic-injections/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Lumbar Sympathetic Injections
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/epidural-nerve-block/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/epidural-nerve-block/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Epidural Nerve Block
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/si-joint-injection/"
// //                           className={`nav-link ${
// //                             currentPath == "/treatments/si-joint-injection/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Si Joint Injection
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/pronox/"
// //                           className={`nav-link ${
// //                             currentPath == "/treatments/pronox/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           PronoX
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/occipital-nerve-block/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/occipital-nerve-block/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Occipital Nerve Block
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/genicular-nerve-block/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/genicular-nerve-block/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Genicular Nerve Block
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/spinal-cord-stimulation/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/spinal-cord-stimulation/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Spinal Cord Stimulation
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/bursa-injection/"
// //                           className={`nav-link ${
// //                             currentPath == "/treatments/bursa-injection/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Bursa Injection
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/peripheral-nerve-stimulation/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/peripheral-nerve-stimulation/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Peripheral Nerve Stimulation
// //                         </Link>
// //                       </li>
// //                       <li></li>
// //                     </ul>
// //                   </li>
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/meet-our-team/"
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/meet-our-team/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Meet Our Team
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/rao-k-ali/"
// //                           className={`nav-link ${
// //                             currentPath == "/meet-our-team/rao-k-ali/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Rao K. Ali MD
// //                         </Link>
// //                       </li>

// //                       {/* <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/meet-our-team/dr-muhammad-zulqarnain-dr-z-/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Muhammad Zulqarnain MD (Dr. Z)
// //                         </Link>
// //                       </li> */}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/william-moore-md/"
// //                           className={`nav-link ${
// //                             currentPath == "/meet-our-team/william-moore-md/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           William Moore MD
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/dr-christopher-creighton/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/meet-our-team/dr-christopher-creighton/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Christopher P Creighton MD
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/meet-our-team/dr-pollard-psychiatrist-dallas/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Ronnie Pollard MD
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/sharon-anna-shaji/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/meet-our-team/sharon-anna-shaji/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Sharon Anna Shaji
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="/contact-locations/"
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/contact-locations/" && "active"
// //                       }`}
// //                       rel="preload"
// //                     >
// //                       Contact & Locations
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/richardson/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/richardson/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Richardson
// //                         </Link>
// //                       </li>

// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/north-richland-hills/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/contact-locations/north-richland-hills/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           North Richland Hills
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/waxahachie/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/waxahachie/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Waxahachie
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/fort-worth/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/fort-worth/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Fort Worth
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/hillsboro/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/hillsboro/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Hillsboro
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/desoto/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/desoto/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Desoto
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/corsicana/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/corsicana/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Corsicana
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/decatur/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/decatur/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Decatur
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/cleburne/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/cleburne/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Cleburne
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/plano/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/plano/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Plano
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/ennis/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/ennis/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Ennis
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/mesquite/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/mesquite/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Mesquite
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/gun-barrel-city/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/contact-locations/gun-barrel-city/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Gun Barrel City
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="#"
// //                       onClick={(e) => e.preventDefault()}
// //                       className="nav-link dropdown-toggle"
// //                       rel="preload"
// //                     >
// //                       More
// //                     </Link>

// //                     <ul className="dropdown-menu">
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/blog/"
// //                           className={`nav-link ${
// //                             currentPath == "/blog/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Blog
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/about/"
// //                           className={`nav-link ${
// //                             currentPath == "/about/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           About Us
// //                         </Link>
// //                       </li>{" "}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/dallas-pain-clinic/"
// //                           className={`nav-link ${
// //                             currentPath == "/dallas-pain-clinic/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Dallas Pain Clinic{" "}
// //                         </Link>
// //                       </li>{" "}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
// //                           target="_blank"
// //                           className={`nav-link ${
// //                             currentPath == "/faqs/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           New Patient Paper Work
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/referring-a-patient/"
// //                           className={`nav-link ${
// //                             currentPath == "/referring-a-patient/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Referring A Patient
// //                         </Link>
// //                       </li>{" "}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/faqs/"
// //                           className={`nav-link ${
// //                             currentPath == "/faqs/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           FAQs
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/news/"
// //                           className={`nav-link ${
// //                             currentPath == "/news/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           News
// //                         </Link>
// //                       </li>
// //                       {/* <li className="nav-item">
// //                         <Link
// //                           href="/educational-videos/"
// //                           className={`nav-link ${
// //                             currentPath == "/educational-videos/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Educational Videos
// //                         </Link>
// //                       </li> */}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/video-testimonials/"
// //                           className={`nav-link ${
// //                             currentPath == "/video-testimonials/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Video Testimonials
// //                         </Link>
// //                       </li>
// //                       <li>
// //                         <Link
// //                           href="/interventional-pain-management/"
// //                           className={`nav-link ${
// //                             currentPath == "/interventional-pain-management/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           Interventional Pain Management
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/reviews/"
// //                           className={`nav-link ${
// //                             currentPath == "/reviews/" && "active"
// //                           }`}
// //                           rel="preload"
// //                         >
// //                           reviews
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>
// //                 </ul>
// //               </div>

// //               <div className="nav-srh">
// //                 <div className="main-nav">
// //                   <div className="container">
// //                     <nav className="navbar">
// //                       <div className="common-btn" style={{ display: "flex" }}>
// //                         <Link
// //                           href="/appointment/"
// //                           style={{
// //                             backgroundColor: "#0046c0",
// //                             color: "white",
// //                             padding: "10px 11px",
// //                           }}
// //                           rel="preload"
// //                         >
// //                           Appointment
// //                         </Link>{" "}
// //                         {/* <Link
// //                           href="tel:+14695624188"
// //                           style={{
// //                             backgroundColor: "#0046c0",
// //                             color: "white",
// //                             padding: "10px 12px",
// //                           }}
// //                           rel="preload"
// //                         >
// //                           469-562-4188
// //                         </Link> */}
// //                         <CallCounterButton
// //                           kw="header"
// //                           bgColor="#0046c0"
// //                           txtColor={"white"}
// //                         />
// //                       </div>
// //                     </nav>
// //                   </div>
// //                 </div>
// //               </div>
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;
// // // **********************************************************************
// // // import React, { useState, useEffect } from "react";
// // // import { useRouter } from "next/router";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import CallCounterButton from "../../components/CallCounterButton";

// // // const Navbar = () => {
// // //   // Add active class
// // //   const [currentPath, setCurrentPath] = useState("");
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     setCurrentPath(router.asPath);
// // //   }, [router]);

// // //   const [menu, setMenu] = React.useState(true);
// // //   const [activeDropdown, setActiveDropdown] = useState(""); // ADDED

// // //   const toggleNavbar = () => {
// // //     setMenu(!menu);
// // //     setActiveDropdown(""); // ADDED - Close all dropdowns when toggling navbar
// // //   };

// // //   // ADDED - New functions
// // //   const handleDropdownToggle = (dropdownName, e) => {
// // //     e.preventDefault();
// // //     // Only work on mobile when menu is open
// // //     if (!menu) {
// // //       setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
// // //     }
// // //   };

// // //   const closeMenu = () => {
// // //     setMenu(true);
// // //     setActiveDropdown("");
// // //   };

// // //   React.useEffect(() => {
// // //     let elementId = document.getElementById("navbar");
// // //     document.addEventListener("scroll", () => {
// // //       if (window.scrollY > 170) {
// // //         elementId.classList.add("is-sticky");
// // //       } else {
// // //         elementId.classList.remove("is-sticky");
// // //       }
// // //     });
// // //   });

// // //   const classOne = menu
// // //     ? "collapse navbar-collapse"
// // //     : "collapse navbar-collapse show";
// // //   const classTwo = menu
// // //     ? "navbar-toggler navbar-toggler-right collapsed"
// // //     : "navbar-toggler navbar-toggler-right";

// // //   return (
// // //     <>
// // //       <div id="navbar" className="navbar-area sticky-top">
// // //         <div className="main-nav">
// // //           <div className="container-fluid">
// // //             <nav className="navbar navbar-expand-lg navbar-light">
// // //               <Link href="/" className="navbar-brand" rel="preload">
// // //                 <Image
// // //                   src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
// // //                   alt="logo"
// // //                   width={139}
// // //                   height={78}
// // //                   loading="lazy"
// // //                 />
// // //               </Link>
// // //               <button
// // //                 onClick={toggleNavbar}
// // //                 className={classTwo}
// // //                 type="button"
// // //                 data-toggle="collapse"
// // //                 data-target="#navbarSupportedContent"
// // //                 aria-controls="navbarSupportedContent"
// // //                 aria-expanded="false"
// // //                 aria-label="Toggle navigation"
// // //               >
// // //                 <span className="icon-bar top-bar"></span>
// // //                 <span className="icon-bar middle-bar"></span>
// // //                 <span className="icon-bar bottom-bar"></span>
// // //               </button>

// // //               <div className={classOne} id="navbarSupportedContent">
// // //                 <ul className="navbar-nav">
// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/"
// // //                       className={`nav-link ${currentPath === "/" && "active"}`}
// // //                       rel="preload"
// // //                       onClick={closeMenu} // ADDED
// // //                     >
// // //                       Home
// // //                     </Link>
// // //                   </li>

// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/conditions-we-treat/"
// // //                       onClick={(e) => handleDropdownToggle("conditions", e)} // MODIFIED
// // //                       className={`nav-link dropdown-toggle ${
// // //                         currentPath === "/conditions-we-treat/" && "active"
// // //                       }`}
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED - Mobile + / - icons
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       Conditions We Treat
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "conditions" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED - Mobile dropdown styling
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "conditions"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: "#f8f9fa",
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft:
// // //                         //   typeof window !== "undefined" &&
// // //                         //   window.innerWidth <= 767
// // //                         //     ? "20px"
// // //                         //     : "0",
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/car-accident-injury/"
// // //                           className={`nav-link ${
// // //                             currentPath ===
// // //                               "/conditions-we-treat/car-accident-injury/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Car Accident Injury
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/shoulder-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath ===
// // //                               "/conditions-we-treat/shoulder-pain/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Shoulder Pain
// // //                         </Link>
// // //                       </li>

// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/sports-injury/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/conditions-we-treat/sports-injury/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Sports Injury
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/headaches/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/headaches/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Headaches
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/back-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/back-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Back Pain
// // //                         </Link>
// // //                       </li>

// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/neck-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/neck-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Neck Pain
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/knee-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/knee-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Knee Pain
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/joint-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/joint-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Joint Pain
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/leg-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/leg-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Leg Pain
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/conditions-we-treat/hip-pain/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/conditions-we-treat/hip-pain/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Hip Pain
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item"></li>
// // //                     </ul>
// // //                   </li>
// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/psychiatric-services-in-dallas-tx/"
// // //                       onClick={(e) => handleDropdownToggle("psychiatry", e)} // MODIFIED
// // //                       className={`nav-link dropdown-toggle ${
// // //                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
// // //                         "active"
// // //                       }`}
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       Psychiatry
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "psychiatry" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "psychiatry"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: '#f8f9fa',
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/tms-therapy/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/tms-therapy/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           TMS Therapy
// // //                         </Link>
// // //                       </li>

// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/talk-therapy-dallas/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/talk-therapy-dallas/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Talk Therapy
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/dallas-counseling-services/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/dallas-counseling-services/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Counseling
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/medication-management-in-dallas/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/medication-management-in-dallas/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Medication Management
// // //                         </Link>
// // //                       </li>
// // //                     </ul>
// // //                   </li>
// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/treatments/"
// // //                       onClick={(e) => handleDropdownToggle("treatments", e)} // MODIFIED
// // //                       className={`nav-link dropdown-toggle ${
// // //                         currentPath == "/treatments/" && "active"
// // //                       }`}
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       Treatments
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "treatments" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "treatments"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: '#f8f9fa',
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/hip-joint-injections/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/hip-joint-injections/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Hip Joint Injections
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/disc-regenerative-therapy/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/disc-regenerative-therapy/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Disc Regenerative Therapy
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/mild-procedure/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/treatments/mild-procedure/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Mild Procedure
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/facet-joint-injection/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/facet-joint-injection/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Facet Joint Injection
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/percutaneous-discectomy/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/percutaneous-discectomy/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Percutaneous Discectomy
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/trigger-point-injections/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/trigger-point-injections/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Trigger Point Injections
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/joint-injections/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/treatments/joint-injections/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Joint Injections
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/lumbar-sympathetic-injections/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/lumbar-sympathetic-injections/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Lumbar Sympathetic Injections
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/epidural-nerve-block/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/epidural-nerve-block/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Epidural Nerve Block
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/si-joint-injection/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/treatments/si-joint-injection/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Si Joint Injection
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/pronox/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/treatments/pronox/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           PronoX
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/occipital-nerve-block/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/occipital-nerve-block/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Occipital Nerve Block
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/genicular-nerve-block/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/genicular-nerve-block/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Genicular Nerve Block
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/spinal-cord-stimulation/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/spinal-cord-stimulation/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Spinal Cord Stimulation
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/bursa-injection/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/treatments/bursa-injection/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Bursa Injection
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/treatments/peripheral-nerve-stimulation/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/treatments/peripheral-nerve-stimulation/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Peripheral Nerve Stimulation
// // //                         </Link>
// // //                       </li>
// // //                       <li></li>
// // //                     </ul>
// // //                   </li>
// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/meet-our-team/"
// // //                       onClick={(e) => handleDropdownToggle("team", e)} // MODIFIED
// // //                       className={`nav-link dropdown-toggle ${
// // //                         currentPath == "/meet-our-team/" && "active"
// // //                       }`}
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       Meet Our Team
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "team" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "team"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: '#f8f9fa',
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/meet-our-team/rao-k-ali/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/meet-our-team/rao-k-ali/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Rao K. Ali MD
// // //                         </Link>
// // //                       </li>

// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/meet-our-team/william-moore-md/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/meet-our-team/william-moore-md/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           William Moore MD
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/meet-our-team/dr-christopher-creighton/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/meet-our-team/dr-christopher-creighton/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Christopher P Creighton MD
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/meet-our-team/dr-pollard-psychiatrist-dallas/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Ronnie Pollard MD
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/meet-our-team/sharon-anna-shaji/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/meet-our-team/sharon-anna-shaji/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Sharon Anna Shaji
// // //                         </Link>
// // //                       </li>
// // //                     </ul>
// // //                   </li>

// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="/contact-locations/"
// // //                       onClick={(e) => handleDropdownToggle("locations", e)} // MODIFIED
// // //                       className={`nav-link dropdown-toggle ${
// // //                         currentPath == "/contact-locations/" && "active"
// // //                       }`}
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       Contact & Locations
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "locations" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "locations"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: '#f8f9fa',
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/richardson/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/richardson/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Richardson
// // //                         </Link>
// // //                       </li>

// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/north-richland-hills/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/contact-locations/north-richland-hills/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           North Richland Hills
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/waxahachie/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/waxahachie/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Waxahachie
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/fort-worth/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/fort-worth/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Fort Worth
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/hillsboro/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/hillsboro/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Hillsboro
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/desoto/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/desoto/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Desoto
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/corsicana/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/corsicana/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Corsicana
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/decatur/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/decatur/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Decatur
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/cleburne/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/cleburne/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Cleburne
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/plano/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/plano/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Plano
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/ennis/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/ennis/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Ennis
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/mesquite/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/contact-locations/mesquite/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Mesquite
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/contact-locations/gun-barrel-city/"
// // //                           className={`nav-link ${
// // //                             currentPath ==
// // //                               "/contact-locations/gun-barrel-city/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Gun Barrel City
// // //                         </Link>
// // //                       </li>
// // //                     </ul>
// // //                   </li>

// // //                   <li className="nav-item">
// // //                     <Link
// // //                       href="#"
// // //                       onClick={(e) => handleDropdownToggle("more", e)} // MODIFIED
// // //                       className="nav-link dropdown-toggle"
// // //                       rel="preload"
// // //                       style={{
// // //                         // ADDED
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                       }}
// // //                     >
// // //                       More
// // //                       <span
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           fontWeight: "bold",
// // //                           display:
// // //                             typeof window !== "undefined" &&
// // //                             window.innerWidth <= 767
// // //                               ? "inline"
// // //                               : "none",
// // //                         }}
// // //                       >
// // //                         {activeDropdown === "more" ? "−" : "+"}
// // //                       </span>
// // //                     </Link>

// // //                     <ul
// // //                       className="dropdown-menu"
// // //                       style={{
// // //                         // ADDED
// // //                         display:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? activeDropdown === "more"
// // //                               ? "block"
// // //                               : "none"
// // //                             : "",
// // //                         position:
// // //                           typeof window !== "undefined" &&
// // //                           window.innerWidth <= 767
// // //                             ? "static"
// // //                             : "absolute",
// // //                         // backgroundColor: '#f8f9fa',
// // //                         // border: 'none',
// // //                         // boxShadow: 'none',
// // //                         // width: '100%',
// // //                         // marginTop: 0,
// // //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// // //                       }}
// // //                     >
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/blog/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/blog/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Blog
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/about/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/about/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           About Us
// // //                         </Link>
// // //                       </li>{" "}
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/dallas-pain-clinic/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/dallas-pain-clinic/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Dallas Pain Clinic{" "}
// // //                         </Link>
// // //                       </li>{" "}
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
// // //                           target="_blank"
// // //                           className={`nav-link ${
// // //                             currentPath == "/faqs/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           New Patient Paper Work
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/referring-a-patient/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/referring-a-patient/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Referring A Patient
// // //                         </Link>
// // //                       </li>{" "}
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/faqs/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/faqs/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           FAQs
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/news/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/news/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           News
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/video-testimonials/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/video-testimonials/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Video Testimonials
// // //                         </Link>
// // //                       </li>
// // //                       <li>
// // //                         <Link
// // //                           href="/interventional-pain-management/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/interventional-pain-management/" &&
// // //                             "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           Interventional Pain Management
// // //                         </Link>
// // //                       </li>
// // //                       <li className="nav-item">
// // //                         <Link
// // //                           href="/reviews/"
// // //                           className={`nav-link ${
// // //                             currentPath == "/reviews/" && "active"
// // //                           }`}
// // //                           rel="preload"
// // //                           onClick={closeMenu} // ADDED
// // //                         >
// // //                           reviews
// // //                         </Link>
// // //                       </li>
// // //                     </ul>
// // //                   </li>
// // //                 </ul>
// // //               </div>

// // //               <div className="nav-srh">
// // //                 <div className="main-nav">
// // //                   <div className="container">
// // //                     <nav className="navbar">
// // //                       <div className="common-btn" style={{ display: "flex" }}>
// // //                         <Link
// // //                           href="/appointment/"
// // //                           style={{
// // //                             backgroundColor: "#0046c0",
// // //                             color: "white",
// // //                             padding: "10px 11px",
// // //                           }}
// // //                           rel="preload"
// // //                         >
// // //                           Appointment
// // //                         </Link>{" "}
// // //                         <CallCounterButton
// // //                           kw="header"
// // //                           bgColor="#0046c0"
// // //                           txtColor={"white"}
// // //                         />
// // //                       </div>
// // //                     </nav>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </nav>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import CallCounterButton from "../../components/CallCounterButton";

// const Navbar = () => {
//   // Add active class
//   const [currentPath, setCurrentPath] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     setCurrentPath(router.asPath);
//   }, [router]);

//   const [menu, setMenu] = React.useState(true);
//   const [activeDropdown, setActiveDropdown] = useState(""); // ADDED

//   const toggleNavbar = () => {
//     setMenu(!menu);
//     setActiveDropdown(""); // ADDED - Close all dropdowns when toggling navbar
//   };

//   // ADDED - New functions
//   const handleDropdownToggle = (dropdownName, e) => {
//     e.preventDefault();
//     // Only work on mobile when menu is open
//     if (!menu) {
//       setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
//     }
//   };

//   const closeMenu = () => {
//     setMenu(true);
//     setActiveDropdown("");
//   };

//   React.useEffect(() => {
//     let elementId = document.getElementById("navbar");
//     document.addEventListener("scroll", () => {
//       if (window.scrollY > 170) {
//         elementId.classList.add("is-sticky");
//       } else {
//         elementId.classList.remove("is-sticky");
//       }
//     });
//   });

//   const classOne = menu
//     ? "collapse navbar-collapse"
//     : "collapse navbar-collapse show";
//   const classTwo = menu
//     ? "navbar-toggler navbar-toggler-right collapsed"
//     : "navbar-toggler navbar-toggler-right";

//   return (
//     <>
//       <div id="navbar" className="navbar-area sticky-top">
//         <div className="main-nav">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg navbar-light">
//               <Link href="/" className="navbar-brand" rel="preload">
//                 <Image
//                   src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
//                   alt="logo"
//                   width={139}
//                   height={78}
//                   loading="lazy"
//                 />
//               </Link>
//               <button
//                 onClick={toggleNavbar}
//                 className={classTwo}
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="icon-bar top-bar"></span>
//                 <span className="icon-bar middle-bar"></span>
//                 <span className="icon-bar bottom-bar"></span>
//               </button>

//               <div className={classOne} id="navbarSupportedContent">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <Link
//                       href="/"
//                       className={`nav-link ${currentPath === "/" && "active"}`}
//                       rel="preload"
//                       onClick={closeMenu} // ADDED
//                     >
//                       Home
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="/conditions-we-treat/"
//                       onClick={(e) => handleDropdownToggle("conditions", e)} // MODIFIED
//                       className={`nav-link dropdown-toggle ${
//                         currentPath === "/conditions-we-treat/" && "active"
//                       }`}
//                       rel="preload"
//                       style={{
//                         // ADDED - Mobile + / - icons
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       Conditions We Treat
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "conditions" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED - Mobile dropdown styling
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "conditions"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/car-accident-injury/"
//                           className={`nav-link ${
//                             currentPath ===
//                               "/conditions-we-treat/car-accident-injury/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Car Accident Injury
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/shoulder-pain/"
//                           className={`nav-link ${
//                             currentPath ===
//                               "/conditions-we-treat/shoulder-pain/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Shoulder Pain
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/sports-injury/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/conditions-we-treat/sports-injury/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Sports Injury
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/headaches/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/headaches/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Headaches
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/back-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/back-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Back Pain
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/neck-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/neck-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Neck Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/knee-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/knee-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Knee Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/joint-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/joint-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Joint Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/leg-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/leg-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Leg Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/hip-pain/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/hip-pain/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Hip Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item"></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       href="/psychiatric-services-in-dallas-tx/"
//                       onClick={(e) => handleDropdownToggle("psychiatry", e)} // MODIFIED
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
//                         "active"
//                       }`}
//                       rel="preload"
//                       style={{
//                         // ADDED
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       Psychiatry
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "psychiatry" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "psychiatry"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/tms-therapy/"
//                           className={`nav-link ${
//                             currentPath == "/tms-therapy/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           TMS Therapy
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           href="/talk-therapy-dallas/"
//                           className={`nav-link ${
//                             currentPath == "/talk-therapy-dallas/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Talk Therapy
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/dallas-counseling-services/"
//                           className={`nav-link ${
//                             currentPath == "/dallas-counseling-services/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Counseling
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/medication-management-in-dallas/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/medication-management-in-dallas/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Medication Management
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       href="/treatments/"
//                       onClick={(e) => handleDropdownToggle("treatments", e)} // MODIFIED
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/treatments/" && "active"
//                       }`}
//                       rel="preload"
//                       style={{
//                         // ADDED
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       Treatments
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "treatments" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "treatments"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/hip-joint-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/hip-joint-injections/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Hip Joint Injections
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/disc-regenerative-therapy/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/disc-regenerative-therapy/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Disc Regenerative Therapy
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/mild-procedure/"
//                           className={`nav-link ${
//                             currentPath == "/treatments/mild-procedure/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Mild Procedure
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/facet-joint-injection/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/facet-joint-injection/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Facet Joint Injection
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/percutaneous-discectomy/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/percutaneous-discectomy/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Percutaneous Discectomy
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/trigger-point-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/trigger-point-injections/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Trigger Point Injections
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/joint-injections/"
//                           className={`nav-link ${
//                             currentPath == "/treatments/joint-injections/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Joint Injections
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/lumbar-sympathetic-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/lumbar-sympathetic-injections/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Lumbar Sympathetic Injections
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/epidural-nerve-block/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/epidural-nerve-block/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Epidural Nerve Block
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/si-joint-injection/"
//                           className={`nav-link ${
//                             currentPath == "/treatments/si-joint-injection/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Si Joint Injection
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/pronox/"
//                           className={`nav-link ${
//                             currentPath == "/treatments/pronox/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           PronoX
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/occipital-nerve-block/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/occipital-nerve-block/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Occipital Nerve Block
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/genicular-nerve-block/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/genicular-nerve-block/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Genicular Nerve Block
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/spinal-cord-stimulation/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/spinal-cord-stimulation/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Spinal Cord Stimulation
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/bursa-injection/"
//                           className={`nav-link ${
//                             currentPath == "/treatments/bursa-injection/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Bursa Injection
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/peripheral-nerve-stimulation/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/peripheral-nerve-stimulation/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Peripheral Nerve Stimulation
//                         </Link>
//                       </li>
//                       <li></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       href="/meet-our-team/"
//                       onClick={(e) => handleDropdownToggle("team", e)} // MODIFIED
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/meet-our-team/" && "active"
//                       }`}
//                       rel="preload"
//                       style={{
//                         // ADDED
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       Meet Our Team
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "team" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "team"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/rao-k-ali/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/rao-k-ali/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Rao K. Ali MD
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/william-moore-md/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/william-moore-md/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           William Moore MD
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/dr-christopher-creighton/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/meet-our-team/dr-christopher-creighton/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Christopher P Creighton MD
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/meet-our-team/dr-pollard-psychiatrist-dallas/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Ronnie Pollard MD
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/sharon-anna-shaji/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/meet-our-team/sharon-anna-shaji/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Sharon Anna Shaji
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="/contact-locations/"
//                       onClick={(e) => handleDropdownToggle("locations", e)} // MODIFIED
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/contact-locations/" && "active"
//                       }`}
//                       rel="preload"
//                       style={{
//                         // ADDED
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       Contact & Locations
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "locations" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "locations"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/richardson/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/richardson/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Richardson
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/north-richland-hills/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/contact-locations/north-richland-hills/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           North Richland Hills
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/waxahachie/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/waxahachie/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Waxahachie
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/fort-worth/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/fort-worth/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Fort Worth
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/hillsboro/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/hillsboro/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Hillsboro
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/desoto/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/desoto/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Desoto
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/corsicana/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/corsicana/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Corsicana
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/decatur/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/decatur/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Decatur
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/cleburne/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/cleburne/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Cleburne
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/plano/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/plano/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Plano
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/ennis/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/ennis/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Ennis
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/mesquite/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/mesquite/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Mesquite
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/gun-barrel-city/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/contact-locations/gun-barrel-city/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Gun Barrel City
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="#"
//                       onClick={(e) => handleDropdownToggle("more", e)} // MODIFIED
//                       className="nav-link dropdown-toggle"
//                       rel="preload"
//                       style={{
//                         // ADDED
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       More
//                       <span
//                         style={{
//                           fontSize: "18px",
//                           fontWeight: "bold",
//                           display:
//                             typeof window !== "undefined" &&
//                             window.innerWidth <= 767
//                               ? "inline"
//                               : "none",
//                         }}
//                       >
//                         {activeDropdown === "more" ? "−" : "+"}
//                       </span>
//                     </Link>

//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         // ADDED
//                         display:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? activeDropdown === "more"
//                               ? "block"
//                               : "none"
//                             : "",
//                         position:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "static"
//                             : "absolute",
//                         backgroundColor: "#f8f9fa",
//                         border: "none",
//                         boxShadow: "none",
//                         width: "100%",
//                         marginTop: 0,
//                         paddingLeft:
//                           typeof window !== "undefined" &&
//                           window.innerWidth <= 767
//                             ? "20px"
//                             : "0",
//                       }}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/blog/"
//                           className={`nav-link ${
//                             currentPath == "/blog/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Blog
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/about/"
//                           className={`nav-link ${
//                             currentPath == "/about/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           About Us
//                         </Link>
//                       </li>{" "}
//                       <li className="nav-item">
//                         <Link
//                           href="/dallas-pain-clinic/"
//                           className={`nav-link ${
//                             currentPath == "/dallas-pain-clinic/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Dallas Pain Clinic{" "}
//                         </Link>
//                       </li>{" "}
//                       <li className="nav-item">
//                         <Link
//                           href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
//                           target="_blank"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           New Patient Paper Work
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/referring-a-patient/"
//                           className={`nav-link ${
//                             currentPath == "/referring-a-patient/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Referring A Patient
//                         </Link>
//                       </li>{" "}
//                       <li className="nav-item">
//                         <Link
//                           href="/faqs/"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           FAQs
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/news/"
//                           className={`nav-link ${
//                             currentPath == "/news/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           News
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/video-testimonials/"
//                           className={`nav-link ${
//                             currentPath == "/video-testimonials/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Video Testimonials
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/interventional-pain-management/"
//                           className={`nav-link ${
//                             currentPath == "/interventional-pain-management/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           Interventional Pain Management
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/reviews/"
//                           className={`nav-link ${
//                             currentPath == "/reviews/" && "active"
//                           }`}
//                           rel="preload"
//                           onClick={closeMenu} // ADDED
//                         >
//                           reviews
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>

//               <div className="nav-srh">
//                 <div className="main-nav">
//                   <div className="container">
//                     <nav className="navbar">
//                       <div className="common-btn" style={{ display: "flex" }}>
//                         <Link
//                           href="/appointment/"
//                           style={{
//                             backgroundColor: "#0046c0",
//                             color: "white",
//                             padding: "10px 11px",
//                           }}
//                           rel="preload"
//                         >
//                           Appointment
//                         </Link>{" "}
//                         <CallCounterButton
//                           kw="header"
//                           bgColor="#0046c0"
//                           txtColor={"white"}
//                         />
//                       </div>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import CallCounterButton from "../../components/CallCounterButton";

// const Navbar = () => {
//   const [currentPath, setCurrentPath] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setCurrentPath(router.asPath);
//   }, [router]);

//   // Handle sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.getElementById("navbar");
//       if (navbar) {
//         if (window.scrollY > 170) {
//           navbar.classList.add("is-sticky");
//         } else {
//           navbar.classList.remove("is-sticky");
//         }
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close menu when clicking on a link (for mobile)
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav
//         id="navbar"
//         className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm"
//       >
//         <div className="container-fluid">
//           {/* Brand Logo */}
//           <Link href="/" className="navbar-brand" onClick={closeMenu}>
//             <Image
//               src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
//               alt="logo"
//               width={139}
//               height={78}
//               loading="lazy"
//               className="img-fluid"
//             />
//           </Link>

//           {/* Mobile Toggle Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="navbarNav"
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navigation Menu */}
//           <div
//             className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
//             id="navbarNav"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* Home */}
//               <li className="nav-item">
//                 <Link
//                   href="/"
//                   className={`nav-link ${
//                     currentPath === "/" ? "active fw-bold" : ""
//                   }`}
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Link>
//               </li>

//               {/* Conditions We Treat - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className={`nav-link dropdown-toggle`}
//                   href="#"
//                   id="conditionsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Conditions We Treat
//                 </a>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="conditionsDropdown"
//                 >
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/car-accident-injury/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Car Accident Injury
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/shoulder-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Shoulder Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/sports-injury/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Sports Injury
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/headaches/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Headaches
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/back-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Back Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/neck-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Neck Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/knee-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Knee Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/joint-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Joint Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/leg-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Leg Pain
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/conditions-we-treat/hip-pain/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Hip Pain
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Psychiatry - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className={`nav-link dropdown-toggle ${
//                     currentPath.includes(
//                       "/psychiatric-services-in-dallas-tx/"
//                     ) ||
//                     currentPath.includes("/tms-therapy/") ||
//                     currentPath.includes("/talk-therapy-dallas/")
//                       ? "active fw-bold"
//                       : ""
//                   }`}
//                   href="#"
//                   id="psychiatryDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Psychiatry
//                 </a>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="psychiatryDropdown"
//                 >
//                   <li>
//                     <Link
//                       href="/tms-therapy/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       TMS Therapy
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/talk-therapy-dallas/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Talk Therapy
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/dallas-counseling-services/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Counseling
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/medication-management-in-dallas/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Medication Management
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Treatments - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className={`nav-link dropdown-toggle ${
//                     currentPath.includes("/treatments/") ? "active fw-bold" : ""
//                   }`}
//                   href="#"
//                   id="treatmentsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Treatments
//                 </a>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="treatmentsDropdown"
//                 >
//                   <li>
//                     <Link
//                       href="/treatments/hip-joint-injections/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Hip Joint Injections
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/disc-regenerative-therapy/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Disc Regenerative Therapy
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/mild-procedure/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Mild Procedure
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/facet-joint-injection/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Facet Joint Injection
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/percutaneous-discectomy/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Percutaneous Discectomy
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/trigger-point-injections/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Trigger Point Injections
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/joint-injections/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Joint Injections
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/lumbar-sympathetic-injections/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Lumbar Sympathetic Injections
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/epidural-nerve-block/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Epidural Nerve Block
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/treatments/si-joint-injection/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Si Joint Injection
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Meet Our Team - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className={`nav-link dropdown-toggle ${
//                     currentPath.includes("/meet-our-team/")
//                       ? "active fw-bold"
//                       : ""
//                   }`}
//                   href="#"
//                   id="teamDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Meet Our Team
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="teamDropdown">
//                   <li>
//                     <Link
//                       href="/meet-our-team/rao-k-ali/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Rao K. Ali MD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/meet-our-team/william-moore-md/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       William Moore MD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/meet-our-team/dr-christopher-creighton/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Christopher P Creighton MD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Ronnie Pollard MD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/meet-our-team/sharon-anna-shaji/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Sharon Anna Shaji
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Contact & Locations - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className={`nav-link dropdown-toggle ${
//                     currentPath.includes("/contact-locations/")
//                       ? "active fw-bold"
//                       : ""
//                   }`}
//                   href="#"
//                   id="contactDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Contact & Locations
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="contactDropdown">
//                   <li>
//                     <Link
//                       href="/contact-locations/richardson/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Richardson
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact-locations/north-richland-hills/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       North Richland Hills
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact-locations/waxahachie/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Waxahachie
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact-locations/fort-worth/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Fort Worth
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact-locations/hillsboro/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Hillsboro
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact-locations/desoto/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Desoto
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* More - Dropdown */}
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="moreDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   More
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="moreDropdown">
//                   <li>
//                     <Link
//                       href="/blog/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/about/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/dallas-pain-clinic/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Dallas Pain Clinic
//                     </Link>
//                   </li>
//                   <li>
//                     <a
//                       href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       New Patient Paper Work
//                     </a>
//                   </li>
//                   <li>
//                     <Link
//                       href="/faqs/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       FAQs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/reviews/"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Reviews
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>

//             {/* Action Buttons */}
//             <div className="d-flex flex-column flex-lg-row gap-2">
//               <Link
//                 href="/appointment/"
//                 className="btn btn-primary"
//                 style={{ backgroundColor: "#0046c0", borderColor: "#0046c0" }}
//                 onClick={closeMenu}
//               >
//                 Appointment
//               </Link>
//               <CallCounterButton
//                 kw="header"
//                 bgColor="#0046c0"
//                 txtColor="white"
//               />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <style jsx>{`
//         .navbar {
//           transition: all 0.3s ease;
//         }

//         .navbar.is-sticky {
//           background-color: rgba(255, 255, 255, 0.95) !important;
//           backdrop-filter: blur(10px);
//         }

//         .navbar-nav .nav-link {
//           padding: 0.75rem 1rem;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .navbar-nav .nav-link:hover {
//           color: #0046c0 !important;
//         }

//         .navbar-nav .nav-link.active {
//           color: #0046c0 !important;
//         }

//         .dropdown-menu {
//           border: none;
//           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
//           border-radius: 0.5rem;
//           margin-top: 0.5rem;
//         }

//         .dropdown-item {
//           padding: 0.75rem 1rem;
//           transition: all 0.3s ease;
//         }

//         .dropdown-item:hover {
//           background-color: #f8f9fa;
//           color: #0046c0;
//         }

//         @media (max-width: 991.98px) {
//           .navbar-collapse {
//             background-color: white;
//             padding: 1rem;
//             border-radius: 0.5rem;
//             margin-top: 1rem;
//             box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
//           }

//           .dropdown-menu {
//             position: static !important;
//             float: none !important;
//             width: auto !important;
//             margin-top: 0 !important;
//             background-color: #f8f9fa !important;
//             border: none !important;
//             box-shadow: none !important;
//             border-radius: 0 !important;
//           }

//           .dropdown-item {
//             padding-left: 2rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import CallCounterButton from "../../components/CallCounterButton";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(""); // Added for dropdown control
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 170) {
          navbar.classList.add("is-sticky");
        } else {
          navbar.classList.remove("is-sticky");
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(""); // Close all dropdowns when toggling main menu
  };

  // Close menu when clicking on a link (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown("");
  };

  // Handle dropdown toggle
  const toggleDropdown = (dropdownName, e) => {
    e.preventDefault();
    if (window.innerWidth <= 991) { // Only toggle on mobile/tablet
      setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm"
      >
        <div className="container-fluid">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <Image
              src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
              alt="logo"
              width={139}
              height={78}
              loading="lazy"
              className="img-fluid"
            />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home */}
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${
                    currentPath === "/" ? "active fw-bold" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              {/* Conditions We Treat - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  onClick={(e) => toggleDropdown("conditions", e)}
                  role="button"
                  aria-expanded={activeDropdown === "conditions"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Conditions We Treat
                  <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "conditions" ? "−" : "+"}
                  </span>
                </a>
                <ul
                  className={`dropdown-menu ${activeDropdown === "conditions" ? "show" : ""}`}
                >
                  <li>
                    <Link
                      href="/conditions-we-treat/car-accident-injury/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Car Accident Injury
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/shoulder-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Shoulder Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/sports-injury/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Sports Injury
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/headaches/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Headaches
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/back-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Back Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/neck-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Neck Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/knee-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Knee Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/joint-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Joint Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/leg-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Leg Pain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions-we-treat/hip-pain/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Hip Pain
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Psychiatry - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    currentPath.includes(
                      "/psychiatric-services-in-dallas-tx/"
                    ) ||
                    currentPath.includes("/tms-therapy/") ||
                    currentPath.includes("/talk-therapy-dallas/")
                      ? "active fw-bold"
                      : ""
                  }`}
                  href="#"
                  onClick={(e) => toggleDropdown("psychiatry", e)}
                  role="button"
                  aria-expanded={activeDropdown === "psychiatry"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Psychiatry
                  <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "psychiatry" ? "−" : "+"}
                  </span>
                </a>
                <ul
                  className={`dropdown-menu ${activeDropdown === "psychiatry" ? "show" : ""}`}
                >
                  <li>
                    <Link
                      href="/tms-therapy/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      TMS Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/talk-therapy-dallas/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Talk Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dallas-counseling-services/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Counseling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/medication-management-in-dallas/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Medication Management
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Treatments - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    currentPath.includes("/treatments/") ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={(e) => toggleDropdown("treatments", e)}
                  role="button"
                  aria-expanded={activeDropdown === "treatments"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Treatments
                  <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "treatments" ? "−" : "+"}
                  </span>
                </a>
                <ul
                  className={`dropdown-menu ${activeDropdown === "treatments" ? "show" : ""}`}
                >
                  <li>
                    <Link
                      href="/treatments/hip-joint-injections/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Hip Joint Injections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/disc-regenerative-therapy/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Disc Regenerative Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/mild-procedure/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Mild Procedure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/facet-joint-injection/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Facet Joint Injection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/percutaneous-discectomy/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Percutaneous Discectomy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/trigger-point-injections/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Trigger Point Injections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/joint-injections/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Joint Injections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/lumbar-sympathetic-injections/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Lumbar Sympathetic Injections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/epidural-nerve-block/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Epidural Nerve Block
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/si-joint-injection/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Si Joint Injection
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Meet Our Team - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    currentPath.includes("/meet-our-team/")
                      ? "active fw-bold"
                      : ""
                  }`}
                  href="#"
                  onClick={(e) => toggleDropdown("team", e)}
                  role="button"
                  aria-expanded={activeDropdown === "team"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Meet Our Team
                  <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "team" ? "−" : "+"}
                  </span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === "team" ? "show" : ""}`}>
                  <li>
                    <Link
                      href="/meet-our-team/rao-k-ali/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Rao K. Ali MD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meet-our-team/william-moore-md/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      William Moore MD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meet-our-team/dr-christopher-creighton/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Christopher P Creighton MD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Ronnie Pollard MD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meet-our-team/sharon-anna-shaji/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Sharon Anna Shaji
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact & Locations - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    currentPath.includes("/contact-locations/")
                      ? "active fw-bold"
                      : ""
                  }`}
                  href="#"
                  onClick={(e) => toggleDropdown("contact", e)}
                  role="button"
                  aria-expanded={activeDropdown === "contact"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Contact & Locations
                  <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "contact" ? "−" : "+"}
                  </span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === "contact" ? "show" : ""}`}>
                  <li>
                    <Link
                      href="/contact-locations/richardson/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Richardson
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-locations/north-richland-hills/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      North Richland Hills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-locations/waxahachie/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Waxahachie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-locations/fort-worth/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Fort Worth
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-locations/hillsboro/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Hillsboro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-locations/desoto/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Desoto
                    </Link>
                  </li>
                </ul>
              </li>

              {/* More - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => toggleDropdown("more", e)}
                  role="button"
                  aria-expanded={activeDropdown === "more"}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  More
                  {/* <span 
                    className="mobile-dropdown-icon"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '5px'
                    }}
                  >
                    {activeDropdown === "more" ? "−" : "+"}
                  </span> */}
                </a>
                <ul className={`dropdown-menu ${activeDropdown === "more" ? "show" : ""}`}>
                  <li>
                    <Link
                      href="/blog/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dallas-pain-clinic/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Dallas Pain Clinic
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      New Patient Paper Work
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/faqs/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reviews/"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Action Buttons */}
            {/* <div className="d-flex flex-column flex-lg-row gap-2">
              <Link
                href="/appointment/"
                className="btn btn-primary"
                style={{ backgroundColor: "#0046c0", borderColor: "#0046c0" }}
                onClick={closeMenu}
              >
                Appointment
              </Link>
              <CallCounterButton
                kw="header"
                bgColor="#0046c0"
                txtColor="white"
              />
            </div> */}
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease;
        }

        .navbar.is-sticky {
          background-color: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
        }

        .navbar-nav .nav-link {
          padding: 0.75rem 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: #0046c0 !important;
        }

        .navbar-nav .nav-link.active {
          color: #0046c0 !important;
        }

        .dropdown-menu {
          border: none;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          border-radius: 0.5rem;
          margin-top: 0.5rem;
        }

        .dropdown-item {
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #0046c0;
        }

        /* Desktop hover behavior */
        @media (min-width: 992px) {
          .dropdown:hover .dropdown-menu {
            display: block;
          }
          
          .mobile-dropdown-icon {
            display: none !important;
          }
        }

        /* Mobile behavior */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          }

          .dropdown-menu {
            position: static !important;
            float: none !important;
            width: auto !important;
            margin-top: 0 !important;
            background-color: #f8f9fa !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            display: none;
          }
          
          .dropdown-menu.show {
            display: block !important;
          }

          .dropdown-item {
            padding-left: 2rem;
          }
          
          .nav-link.dropdown-toggle {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;