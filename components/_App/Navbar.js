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

//   const toggleNavbar = () => {
//     setMenu(!menu);
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
//                     >
//                       Home
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="/conditions-we-treat/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath === "/conditions-we-treat/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Conditions We Treat
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/car-accident-injury/"
//                           className={`nav-link ${
//                             currentPath ===
//                               "/conditions-we-treat/car-accident-injury/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Hip Pain
//                         </Link>
//                       </li>
//                       {/* <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/coccydynia/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/coccydynia/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Coccydynia Pain
//                         </Link>
//                       </li> */}
//                       <li className="nav-item"></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       href="/psychiatric-services-in-dallas-tx/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
//                         "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Psychiatry
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/tms-therapy/"
//                           className={`nav-link ${
//                             currentPath == "/tms-therapy/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Medication Management
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   {/* <li className="nav-item">
//                     <Link
//                       href="/psychiatric-services-in-dallas-tx/"
//                       className={`nav-link ${
//                         currentPath === "/psychiatric-services-in-dallas-tx/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Psychiatry
//                     </Link>
//                   </li> */}
//                   {/* <li className="nav-item">
//                     <Link
//                       href="/iv-therapy/"
//                       className={`nav-link ${
//                         currentPath === "/iv-therapy/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       IV Therapy
//                     </Link>
//                   </li> */}
//                   <li className="nav-item">
//                     <Link
//                       href="/treatments/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/treatments/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Treatments
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/hip-joint-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/hip-joint-injections/" && "active"
//                           }`}
//                           rel="preload"
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
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/meet-our-team/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Meet Our Team
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/rao-k-ali/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/rao-k-ali/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Rao K. Ali MD
//                         </Link>
//                       </li>

//                       {/* <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/meet-our-team/dr-muhammad-zulqarnain-dr-z-/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Muhammad Zulqarnain MD (Dr. Z)
//                         </Link>
//                       </li> */}
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/william-moore-md/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/william-moore-md/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Sharon Anna Shaji
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="/contact-locations/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/contact-locations/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Contact & Locations
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/richardson/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/richardson/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Gun Barrel City
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <Link
//                       href="#"
//                       onClick={(e) => e.preventDefault()}
//                       className="nav-link dropdown-toggle"
//                       rel="preload"
//                     >
//                       More
//                     </Link>

//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/blog/"
//                           className={`nav-link ${
//                             currentPath == "/blog/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Referring A Patient
//                         </Link>
//                       </li>{" "}
//                       <li className="nav-item">
//                         <Link
//                           href="/faqs/"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           News
//                         </Link>
//                       </li>
//                       {/* <li className="nav-item">
//                         <Link
//                           href="/educational-videos/"
//                           className={`nav-link ${
//                             currentPath == "/educational-videos/" && "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Educational Videos
//                         </Link>
//                       </li> */}
//                       <li className="nav-item">
//                         <Link
//                           href="/video-testimonials/"
//                           className={`nav-link ${
//                             currentPath == "/video-testimonials/" && "active"
//                           }`}
//                           rel="preload"
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
//                         {/* <Link
//                           href="tel:+14695624188"
//                           style={{
//                             backgroundColor: "#0046c0",
//                             color: "white",
//                             padding: "10px 12px",
//                           }}
//                           rel="preload"
//                         >
//                           469-562-4188
//                         </Link> */}
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

//------------------------------------------------------------------------------------------------------------------

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

//   // State for dropdown menus - ALL CLOSED BY DEFAULT
//   const [dropdownStates, setDropdownStates] = useState({
//     conditions: false,
//     psychiatry: false,
//     treatments: false,
//     team: false,
//     contact: false,
//     more: false,
//   });

//   const toggleNavbar = () => {
//     setMenu(!menu);
//   };

//   // Function to toggle specific dropdown
//   const toggleDropdown = (dropdownName, e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDropdownStates((prev) => {
//       // Close all other dropdowns and toggle the clicked one
//       const newState = {
//         conditions: false,
//         psychiatry: false,
//         treatments: false,
//         team: false,
//         contact: false,
//         more: false,
//       };
//       newState[dropdownName] = !prev[dropdownName];
//       return newState;
//     });
//   };

//   // Close all dropdowns
//   const closeAllDropdowns = () => {
//     setDropdownStates({
//       conditions: false,
//       psychiatry: false,
//       treatments: false,
//       team: false,
//       contact: false,
//       more: false,
//     });
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

//     // Add click event listener to close dropdowns when clicking outside
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".nav-item")) {
//         closeAllDropdowns();
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const classOne = menu
//     ? "collapse navbar-collapse"
//     : "collapse navbar-collapse show";
//   const classTwo = menu
//     ? "navbar-toggler navbar-toggler-right collapsed"
//     : "navbar-toggler navbar-toggler-right";

//   return (
//     <>
//       <style jsx>{`
//         .dropdown-menu {
//           display: none !important;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           z-index: 1000;
//           background-color: white;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//           min-width: 200px;
//           padding: 10px 0;
//         }
//         .dropdown-menu.show {
//           display: block !important;
//         }
//         .nav-item {
//           position: relative;
//         }
//         .dropdown-toggle {
//           cursor: pointer;
//         }
//         .dropdown-toggle::after {
//           display: inline-block;
//           margin-left: 0.255em;
//           vertical-align: 0.255em;
//           content: "";
//           border-top: 0.3em solid;
//           border-right: 0.3em solid transparent;
//           border-bottom: 0;
//           border-left: 0.3em solid transparent;
//           transition: transform 0.3s ease;
//         }
//         .dropdown-toggle.open::after {
//           transform: rotate(180deg);
//         }
//         .dropdown-menu .nav-link {
//           display: block;
//           padding: 8px 15px;
//           color: #333;
//           text-decoration: none;
//         }
//         .dropdown-menu .nav-link:hover {
//           background-color: #f8f9fa;
//           color: #0046c0;
//         }
//       `}</style>
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
//                     >
//                       Home
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath === "/conditions-we-treat/" && "active"
//                       } ${dropdownStates.conditions ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("conditions", e)}
//                     >
//                       Conditions We Treat
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.conditions ? "show" : ""
//                       }`}
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
//                         >
//                           Hip Pain
//                         </Link>
//                       </li>
//                       {/* <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/coccydynia/"
//                           className={`nav-link ${
//                             currentPath == "/conditions-we-treat/coccydynia/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Coccydynia Pain
//                         </Link>
//                       </li> */}
//                       <li className="nav-item"></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
//                         "active"
//                       } ${dropdownStates.psychiatry ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("psychiatry", e)}
//                     >
//                       Psychiatry
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.psychiatry ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/tms-therapy/"
//                           className={`nav-link ${
//                             currentPath == "/tms-therapy/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Medication Management
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   {/* <li className="nav-item">
//                     <Link
//                       href="/psychiatric-services-in-dallas-tx/"
//                       className={`nav-link ${
//                         currentPath === "/psychiatric-services-in-dallas-tx/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       Psychiatry
//                     </Link>
//                   </li> */}
//                   {/* <li className="nav-item">
//                     <Link
//                       href="/iv-therapy/"
//                       className={`nav-link ${
//                         currentPath === "/iv-therapy/" && "active"
//                       }`}
//                       rel="preload"
//                     >
//                       IV Therapy
//                     </Link>
//                   </li> */}
//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/treatments/" && "active"
//                       } ${dropdownStates.treatments ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("treatments", e)}
//                     >
//                       Treatments
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.treatments ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/hip-joint-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/hip-joint-injections/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Peripheral Nerve Stimulation
//                         </Link>
//                       </li>
//                       <li></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/meet-our-team/" && "active"
//                       } ${dropdownStates.team ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("team", e)}
//                     >
//                       Meet Our Team
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.team ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/rao-k-ali/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/rao-k-ali/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Rao K. Ali MD
//                         </Link>
//                       </li>

//                       {/* <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/meet-our-team/dr-muhammad-zulqarnain-dr-z-/" &&
//                             "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Muhammad Zulqarnain MD (Dr. Z)
//                         </Link>
//                       </li> */}
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/william-moore-md/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/william-moore-md/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Sharon Anna Shaji
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/contact-locations/" && "active"
//                       } ${dropdownStates.contact ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("contact", e)}
//                     >
//                       Contact & Locations
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.contact ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/richardson/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/richardson/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Gun Barrel City
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       onClick={(e) => toggleDropdown("more", e)}
//                       className={`nav-link dropdown-toggle ${
//                         dropdownStates.more ? "open" : ""
//                       }`}
//                       rel="preload"
//                     >
//                       More
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.more ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/blog/"
//                           className={`nav-link ${
//                             currentPath == "/blog/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           News
//                         </Link>
//                       </li>
//                       {/* <li className="nav-item">
//                         <Link
//                           href="/educational-videos/"
//                           className={`nav-link ${
//                             currentPath == "/educational-videos/" && "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Educational Videos
//                         </Link>
//                       </li> */}
//                       <li className="nav-item">
//                         <Link
//                           href="/video-testimonials/"
//                           className={`nav-link ${
//                             currentPath == "/video-testimonials/" && "active"
//                           }`}
//                           rel="preload"
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
//                         {/* <Link
//                           href="tel:+14695624188"
//                           style={{
//                             backgroundColor: "#0046c0",
//                             color: "white",
//                             padding: "10px 12px",
//                           }}
//                           rel="preload"
//                         >
//                           469-562-4188
//                         </Link> */}
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
//   // Add active class
//   const [currentPath, setCurrentPath] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     setCurrentPath(router.asPath);
//   }, [router]);

//   const [menu, setMenu] = React.useState(true);

//   // State for dropdown menus - ALL CLOSED BY DEFAULT
//   const [dropdownStates, setDropdownStates] = useState({
//     conditions: false,
//     psychiatry: false,
//     treatments: false,
//     team: false,
//     contact: false,
//     more: false,
//   });

//   const toggleNavbar = () => {
//     setMenu(!menu);
//   };

//   // Function to toggle specific dropdown
//   const toggleDropdown = (dropdownName, e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDropdownStates((prev) => {
//       // Close all other dropdowns and toggle the clicked one
//       const newState = {
//         conditions: false,
//         psychiatry: false,
//         treatments: false,
//         team: false,
//         contact: false,
//         more: false,
//       };
//       newState[dropdownName] = !prev[dropdownName];
//       return newState;
//     });
//   };

//   // Close all dropdowns
//   const closeAllDropdowns = () => {
//     setDropdownStates({
//       conditions: false,
//       psychiatry: false,
//       treatments: false,
//       team: false,
//       contact: false,
//       more: false,
//     });
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

//     // Add click event listener to close dropdowns when clicking outside
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".nav-item")) {
//         closeAllDropdowns();
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const classOne = menu
//     ? "collapse navbar-collapse"
//     : "collapse navbar-collapse show";
//   const classTwo = menu
//     ? "navbar-toggler navbar-toggler-right collapsed"
//     : "navbar-toggler navbar-toggler-right";

//   return (
//     <>
//       <style jsx>{`
//         .dropdown-menu {
//           display: none !important;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           z-index: 1000;
//           background-color: white;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//           min-width: 200px;
//           padding: 10px 0;
//         }
//         .dropdown-menu.show {
//           display: block !important;
//         }
//         .nav-item {
//           position: relative;
//         }
//         .dropdown-toggle {
//           cursor: pointer;
//         }
//         .dropdown-toggle::after {
//           display: inline-block;
//           margin-left: 0.255em;
//           vertical-align: 0.255em;
//           content: "";
//           border-top: 0.3em solid;
//           border-right: 0.3em solid transparent;
//           border-bottom: 0;
//           border-left: 0.3em solid transparent;
//           transition: transform 0.3s ease;
//         }
//         .dropdown-toggle.open::after {
//           transform: rotate(180deg);
//         }
//         .dropdown-menu .nav-link {
//           display: block;
//           padding: 8px 15px;
//           color: #333;
//           text-decoration: none;
//         }
//         .dropdown-menu .nav-link:hover {
//           background-color: #f8f9fa;
//           color: #0046c0;
//         }

//         /* Mobile view dropdown styles */
//         @media (max-width: 991px) {
//           .dropdown-menu {
//             position: static !important;
//             display: none !important;
//             box-shadow: none;
//             border: none;
//             background-color: #f8f9fa;
//             margin-left: 20px;
//             border-radius: 0;
//             padding-left: 0;
//           }
//           .dropdown-menu.show {
//             display: block !important;
//           }
//           .mobile-dropdown-icon {
//             display: inline-block;
//             margin-left: auto;
//             font-size: 16px;
//             transition: transform 0.3s ease;
//           }
//           .mobile-dropdown-icon.open {
//             transform: rotate(180deg);
//           }
//           .dropdown-toggle {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             width: 100%;
//           }
//           .navbar-nav .nav-item {
//             border-bottom: 1px solid #e9ecef;
//           }
//           .navbar-nav .nav-item:last-child {
//             border-bottom: none;
//           }
//         }

//         /* Desktop view - hide mobile icons */
//         @media (min-width: 992px) {
//           .mobile-dropdown-icon {
//             display: none;
//           }
//         }
//       `}</style>
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
//                     >
//                       Home
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath === "/conditions-we-treat/" && "active"
//                       } ${dropdownStates.conditions ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("conditions", e)}
//                     >
//                       <span>Conditions We Treat</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.conditions ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.conditions ? "show" : ""
//                       }`}
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
//                         >
//                           Hip Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item"></li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
//                         "active"
//                       } ${dropdownStates.psychiatry ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("psychiatry", e)}
//                     >
//                       <span>Psychiatry</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.psychiatry ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.psychiatry ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/tms-therapy/"
//                           className={`nav-link ${
//                             currentPath == "/tms-therapy/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Medication Management
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/treatments/" && "active"
//                       } ${dropdownStates.treatments ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("treatments", e)}
//                     >
//                       <span>Treatments</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.treatments ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.treatments ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/hip-joint-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/hip-joint-injections/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Peripheral Nerve Stimulation
//                         </Link>
//                       </li>
//                       <li></li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/meet-our-team/" && "active"
//                       } ${dropdownStates.team ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("team", e)}
//                     >
//                       <span>Meet Our Team</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.team ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.team ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/rao-k-ali/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/rao-k-ali/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Sharon Anna Shaji
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="/contact-locations/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/contact-locations/" && "active"
//                       } ${dropdownStates.contact ? "open" : ""}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown("contact", e)}
//                     >
//                       <span>Contact & Locations</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.contact ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.contact ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/richardson/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/richardson/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Gun Barrel City
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       onClick={(e) => toggleDropdown("more", e)}
//                       className={`nav-link dropdown-toggle ${
//                         dropdownStates.more ? "open" : ""
//                       }`}
//                       rel="preload"
//                     >
//                       <span>More</span>
//                       <span
//                         className={`mobile-dropdown-icon ${
//                           dropdownStates.more ? "open" : ""
//                         }`}
//                       >
//                         ▼
//                       </span>
//                     </a>

//                     <ul
//                       className={`dropdown-menu ${
//                         dropdownStates.more ? "show" : ""
//                       }`}
//                     >
//                       <li className="nav-item">
//                         <Link
//                           href="/blog/"
//                           className={`nav-link ${
//                             currentPath == "/blog/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           About Us
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/dallas-pain-clinic/"
//                           className={`nav-link ${
//                             currentPath == "/dallas-pain-clinic/" && "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Dallas Pain Clinic
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
//                           target="_blank"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Referring A Patient
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/faqs/"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
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
//   // Add active class
//   const [currentPath, setCurrentPath] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     setCurrentPath(router.asPath);
//   }, [router]);

//   const [menu, setMenu] = React.useState(true);

//   // State for dropdown menus - ALL CLOSED BY DEFAULT
//   const [dropdownStates, setDropdownStates] = useState({
//     conditions: false,
//     psychiatry: false,
//     treatments: false,
//     team: false,
//     contact: false,
//     more: false
//   });

//   const toggleNavbar = () => {
//     setMenu(!menu);
//   };

//   // Function to toggle specific dropdown (only for mobile)
//   const toggleDropdown = (dropdownName, e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     // Check if it's mobile view
//     if (window.innerWidth <= 991) {
//       setDropdownStates(prev => {
//         // Close all other dropdowns and toggle the clicked one
//         const newState = {
//           conditions: false,
//           psychiatry: false,
//           treatments: false,
//           team: false,
//           contact: false,
//           more: false
//         };
//         newState[dropdownName] = !prev[dropdownName];
//         return newState;
//       });
//     }
//   };

//   // Handle mouse enter for desktop hover
//   const handleMouseEnter = (dropdownName) => {
//     if (window.innerWidth > 991) {
//       setDropdownStates(prev => ({
//         ...prev,
//         [dropdownName]: true
//       }));
//     }
//   };

//   // Handle mouse leave for desktop hover
//   const handleMouseLeave = (dropdownName) => {
//     if (window.innerWidth > 991) {
//       setDropdownStates(prev => ({
//         ...prev,
//         [dropdownName]: false
//       }));
//     }
//   };

//   // Close all dropdowns
//   const closeAllDropdowns = () => {
//     setDropdownStates({
//       conditions: false,
//       psychiatry: false,
//       treatments: false,
//       team: false,
//       contact: false,
//       more: false
//     });
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

//     // Add click event listener to close dropdowns when clicking outside
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.nav-item')) {
//         closeAllDropdowns();
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const classOne = menu
//     ? "collapse navbar-collapse"
//     : "collapse navbar-collapse show";
//   const classTwo = menu
//     ? "navbar-toggler navbar-toggler-right collapsed"
//     : "navbar-toggler navbar-toggler-right";

//   return (
//     <>
//       <style jsx>{`
//         .dropdown-menu {
//           display: none !important;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           z-index: 1000;
//           background-color: white;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//           min-width: 200px;
//           padding: 10px 0;
//         }
//         .dropdown-menu.show {
//           display: block !important;
//         }
//         .nav-item {
//           position: relative;
//         }
//         .dropdown-toggle {
//           cursor: pointer;
//         }

//         /* Desktop hover styles */
//         @media (min-width: 992px) {
//           .dropdown-toggle::after {
//             display: inline-block;
//             margin-left: 0.255em;
//             vertical-align: 0.255em;
//             content: "";
//             border-top: 0.3em solid;
//             border-right: 0.3em solid transparent;
//             border-bottom: 0;
//             border-left: 0.3em solid transparent;
//             transition: transform 0.3s ease;
//           }
//           .dropdown-toggle.open::after {
//             transform: rotate(180deg);
//           }
//         }

//         .dropdown-menu .nav-link {
//           display: block;
//           padding: 8px 15px;
//           color: #333;
//           text-decoration: none;
//         }
//         .dropdown-menu .nav-link:hover {
//           background-color: #f8f9fa;
//           color: #0046c0;
//         }

//         /* Mobile view dropdown styles */
//         @media (max-width: 991px) {
//           .dropdown-menu {
//             position: static !important;
//             display: none !important;
//             box-shadow: none;
//             border: none;
//             background-color: #f8f9fa;
//             margin-left: 20px;
//             border-radius: 0;
//             padding-left: 0;
//           }
//           .dropdown-menu.show {
//             display: block !important;
//           }
//           .mobile-dropdown-icon {
//             display: inline-block;
//             margin-left: auto;
//             font-size: 16px;
//             transition: transform 0.3s ease;
//           }
//           .mobile-dropdown-icon.open {
//             transform: rotate(180deg);
//           }
//           .dropdown-toggle {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             width: 100%;
//           }
//           .navbar-nav .nav-item {
//             border-bottom: 1px solid #e9ecef;
//           }
//           .navbar-nav .nav-item:last-child {
//             border-bottom: none;
//           }
//           .dropdown-toggle::after {
//             display: none;
//           }
//         }

//         /* Desktop view - hide mobile icons */
//         @media (min-width: 992px) {
//           .mobile-dropdown-icon {
//             display: none;
//           }
//         }
//       `}</style>
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
//                     >
//                       Home
//                     </Link>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('conditions')}
//                     onMouseLeave={() => handleMouseLeave('conditions')}
//                   >
//                     <Link
//                       href="/conditions-we-treat/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath === "/conditions-we-treat/" && "active"
//                       } ${dropdownStates.conditions ? 'open' : ''}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown('conditions', e)}
//                     >
//                       <span>Conditions We Treat</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.conditions ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </Link>

//                     <ul className={`dropdown-menu ${dropdownStates.conditions ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/conditions-we-treat/car-accident-injury/"
//                           className={`nav-link ${
//                             currentPath ===
//                               "/conditions-we-treat/car-accident-injury/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Hip Pain
//                         </Link>
//                       </li>
//                       <li className="nav-item"></li>
//                     </ul>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('psychiatry')}
//                     onMouseLeave={() => handleMouseLeave('psychiatry')}
//                   >
//                     <Link
//                       href="/psychiatric-services-in-dallas-tx/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
//                         "active"
//                       } ${dropdownStates.psychiatry ? 'open' : ''}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown('psychiatry', e)}
//                     >
//                       <span>Psychiatry</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.psychiatry ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </Link>

//                     <ul className={`dropdown-menu ${dropdownStates.psychiatry ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/tms-therapy/"
//                           className={`nav-link ${
//                             currentPath == "/tms-therapy/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Medication Management
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('treatments')}
//                     onMouseLeave={() => handleMouseLeave('treatments')}
//                   >
//                     <Link
//                       href="/treatments/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/treatments/" && "active"
//                       } ${dropdownStates.treatments ? 'open' : ''}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown('treatments', e)}
//                     >
//                       <span>Treatments</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.treatments ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </Link>

//                     <ul className={`dropdown-menu ${dropdownStates.treatments ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/treatments/hip-joint-injections/"
//                           className={`nav-link ${
//                             currentPath ==
//                               "/treatments/hip-joint-injections/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Peripheral Nerve Stimulation
//                         </Link>
//                       </li>
//                       <li></li>
//                     </ul>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('team')}
//                     onMouseLeave={() => handleMouseLeave('team')}
//                   >
//                     <Link
//                       href="/meet-our-team/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/meet-our-team/" && "active"
//                       } ${dropdownStates.team ? 'open' : ''}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown('team', e)}
//                     >
//                       <span>Meet Our Team</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.team ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </Link>

//                     <ul className={`dropdown-menu ${dropdownStates.team ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/meet-our-team/rao-k-ali/"
//                           className={`nav-link ${
//                             currentPath == "/meet-our-team/rao-k-ali/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Sharon Anna Shaji
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('contact')}
//                     onMouseLeave={() => handleMouseLeave('contact')}
//                   >
//                     <Link
//                       href="/contact-locations/"
//                       className={`nav-link dropdown-toggle ${
//                         currentPath == "/contact-locations/" && "active"
//                       } ${dropdownStates.contact ? 'open' : ''}`}
//                       rel="preload"
//                       onClick={(e) => toggleDropdown('contact', e)}
//                     >
//                       <span>Contact & Locations</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.contact ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </Link>

//                     <ul className={`dropdown-menu ${dropdownStates.contact ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/contact-locations/richardson/"
//                           className={`nav-link ${
//                             currentPath == "/contact-locations/richardson/" &&
//                             "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Gun Barrel City
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li
//                     className="nav-item"
//                     onMouseEnter={() => handleMouseEnter('more')}
//                     onMouseLeave={() => handleMouseLeave('more')}
//                   >
//                     <a
//                       href="#"
//                       onClick={(e) => toggleDropdown('more', e)}
//                       className={`nav-link dropdown-toggle ${dropdownStates.more ? 'open' : ''}`}
//                       rel="preload"
//                     >
//                       <span>More</span>
//                       <span className={`mobile-dropdown-icon ${dropdownStates.more ? 'open' : ''}`}>
//                         ▼
//                       </span>
//                     </a>

//                     <ul className={`dropdown-menu ${dropdownStates.more ? 'show' : ''}`}>
//                       <li className="nav-item">
//                         <Link
//                           href="/blog/"
//                           className={`nav-link ${
//                             currentPath == "/blog/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           About Us
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/dallas-pain-clinic/"
//                           className={`nav-link ${
//                             currentPath == "/dallas-pain-clinic/" && "active"
//                           }`}
//                           rel="preload"
//                         >
//                           Dallas Pain Clinic
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
//                           target="_blank"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
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
//                         >
//                           Referring A Patient
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/faqs/"
//                           className={`nav-link ${
//                             currentPath == "/faqs/" && "active"
//                           }`}
//                           rel="preload"
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

//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

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

  // State for dropdown menus - ALL CLOSED BY DEFAULT
  const [dropdownStates, setDropdownStates] = useState({
    conditions: false,
    psychiatry: false,
    treatments: false,
    team: false,
    contact: false,
    more: false,
  });

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  // Function to toggle specific dropdown (only for mobile)
  const toggleDropdown = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();

    // Only toggle for mobile view
    if (window.innerWidth <= 991) {
      setDropdownStates((prev) => {
        // Close all other dropdowns and toggle the clicked one
        const newState = {
          conditions: false,
          psychiatry: false,
          treatments: false,
          team: false,
          contact: false,
          more: false,
        };
        newState[dropdownName] = !prev[dropdownName];
        return newState;
      });
    }
  };

  // Handle mobile icon click only
  const handleMobileIconClick = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();

    setDropdownStates((prev) => {
      // Close all other dropdowns and toggle the clicked one
      const newState = {
        conditions: false,
        psychiatry: false,
        treatments: false,
        team: false,
        contact: false,
        more: false,
      };
      newState[dropdownName] = !prev[dropdownName];
      return newState;
    });
  };

  // Handle mouse enter for desktop hover
  const handleMouseEnter = (dropdownName) => {
    if (window.innerWidth > 991) {
      setDropdownStates((prev) => ({
        ...prev,
        [dropdownName]: true,
      }));
    }
  };

  // Handle mouse leave for desktop hover
  const handleMouseLeave = (dropdownName) => {
    if (window.innerWidth > 991) {
      setDropdownStates((prev) => ({
        ...prev,
        [dropdownName]: false,
      }));
    }
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownStates({
      conditions: false,
      psychiatry: false,
      treatments: false,
      team: false,
      contact: false,
      more: false,
    });
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

    // Add click event listener to close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-item")) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <style jsx>{`
        .dropdown-menu {
          display: none !important;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          padding: 10px 0;
        }
        .dropdown-menu.show {
          display: block !important;
        }
        .nav-item {
          position: relative;
        }
        .dropdown-toggle {
          cursor: pointer;
        }

        /* Desktop hover styles */
        @media (min-width: 992px) {
          .dropdown-toggle::after {
            display: inline-block;
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
            transition: transform 0.3s ease;
          }
          .dropdown-toggle.open::after {
            transform: rotate(180deg);
          }
        }

        .dropdown-menu .nav-link {
          display: block;
          padding: 8px 15px;
          color: #333;
          text-decoration: none;
        }
        .dropdown-menu .nav-link:hover {
          background-color: #f8f9fa;
          color: #0046c0;
        }

        /* Mobile view dropdown styles */
        @media (max-width: 991px) {
          .dropdown-menu {
            position: static !important;
            display: none !important;
            box-shadow: none;
            border: none;
            background-color: #f8f9fa;
            margin-left: 20px;
            border-radius: 0;
            padding-left: 0;
          }
          .dropdown-menu.show {
            display: block !important;
          }
          .mobile-dropdown-icon {
            display: inline-block;
            margin-left: auto;
            font-size: 16px;
            transition: transform 0.3s ease;
            cursor: pointer;
            padding: 5px;
          }
          .mobile-dropdown-icon.open {
            transform: rotate(180deg);
          }
          .dropdown-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          .navbar-nav .nav-item {
            border-bottom: 1px solid #e9ecef;
          }
          .navbar-nav .nav-item:last-child {
            border-bottom: none;
          }
          .dropdown-toggle::after {
            display: none;
          }
        }

        /* Desktop view - hide mobile icons */
        @media (min-width: 992px) {
          .mobile-dropdown-icon {
            display: none;
          }
        }
      `}</style>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" className="navbar-brand" rel="preload">
                <Image
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
                  alt="logo"
                  width={139}
                  height={78}
                  priority
                />
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
                      rel="preload"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("conditions")}
                    onMouseLeave={() => handleMouseLeave("conditions")}
                  >
                    <Link
                      href="/conditions-we-treat/"
                      className={`nav-link dropdown-toggle ${currentPath === "/conditions-we-treat/" && "active"
                        } ${dropdownStates.conditions ? "open" : ""}`}
                      rel="preload"
                    >
                      <span>Conditions We Treat</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.conditions ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("conditions", e)}
                      >
                        ▼
                      </span>
                    </Link>

                    <ul
                      className={`dropdown-menu ${dropdownStates.conditions ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/car-accident-injury/"
                          className={`nav-link ${currentPath ===
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
                          className={`nav-link ${currentPath ===
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/headaches/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/back-pain/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/neck-pain/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/knee-pain/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/joint-pain/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/leg-pain/" &&
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
                          className={`nav-link ${currentPath == "/conditions-we-treat/hip-pain/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Hip Pain
                        </Link>
                      </li>
                      <li className="nav-item"></li>
                    </ul>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("psychiatry")}
                    onMouseLeave={() => handleMouseLeave("psychiatry")}
                  >
                    <Link
                      href="/psychiatric-services-in-dallas-tx/"
                      className={`nav-link dropdown-toggle ${currentPath == "/psychiatric-services-in-dallas-tx/" &&
                        "active"
                        } ${dropdownStates.psychiatry ? "open" : ""}`}
                      rel="preload"
                    >
                      <span>Psychiatry</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.psychiatry ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("psychiatry", e)}
                      >
                        ▼
                      </span>
                    </Link>

                    <ul
                      className={`dropdown-menu ${dropdownStates.psychiatry ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/tms-therapy/"
                          className={`nav-link ${currentPath == "/tms-therapy/" && "active"
                            }`}
                          rel="preload"
                        >
                          TMS Therapy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/spravato-treatment-dallas/"
                          className={`nav-link ${currentPath == "/spravato-treatment-dallas/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Spravato
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/ketamine-infusion-therapy/"
                          className={`nav-link ${currentPath == "/ketamine-infusion-therapy/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          IV Ketamine
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/medication-management-in-dallas/"
                          className={`nav-link ${currentPath ==
                            "/medication-management-in-dallas/" && "active"
                            }`}
                          rel="preload"
                        >
                          Medication Management
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("treatments")}
                    onMouseLeave={() => handleMouseLeave("treatments")}
                  >
                    <Link
                      href="/treatments/"
                      className={`nav-link dropdown-toggle ${currentPath == "/treatments/" && "active"
                        } ${dropdownStates.treatments ? "open" : ""}`}
                      rel="preload"
                    >
                      <span>Treatments</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.treatments ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("treatments", e)}
                      >
                        ▼
                      </span>
                    </Link>

                    <ul
                      className={`dropdown-menu ${dropdownStates.treatments ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/treatments/hip-joint-injections/"
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/treatments/mild-procedure/" &&
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/treatments/joint-injections/" &&
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/treatments/si-joint-injection/" &&
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
                          className={`nav-link ${currentPath == "/treatments/pronox/" && "active"
                            }`}
                          rel="preload"
                        >
                          PronoX
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/treatments/occipital-nerve-block/"
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/treatments/bursa-injection/" &&
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
                          className={`nav-link ${currentPath ==
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

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("team")}
                    onMouseLeave={() => handleMouseLeave("team")}
                  >
                    <Link
                      href="/meet-our-team/"
                      className={`nav-link dropdown-toggle ${currentPath == "/meet-our-team/" && "active"
                        } ${dropdownStates.team ? "open" : ""}`}
                      rel="preload"
                    >
                      <span>Meet Our Team</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.team ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("team", e)}
                      >
                        ▼
                      </span>
                    </Link>

                    <ul
                      className={`dropdown-menu ${dropdownStates.team ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/rao-k-ali/"
                          className={`nav-link ${currentPath == "/meet-our-team/rao-k-ali/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Rao K. Ali MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/william-moore-md/"
                          className={`nav-link ${currentPath == "/meet-our-team/william-moore-md/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          William Moore MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/dr-christopher-creighton/"
                          className={`nav-link ${currentPath ==
                            "/meet-our-team/dr-christopher-creighton/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Christopher P Creighton MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                          className={`nav-link ${currentPath ==
                            "/meet-our-team/dr-pollard-psychiatrist-dallas/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Ronnie Pollard MD
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          href="/meet-our-team/quan-dang-le-md/"
                          className={`nav-link ${
                            currentPath == "/meet-our-team/quan-dang-le-md/" &&
                            "active"
                          }`}
                          rel="preload"
                        >
                          Dr. Quan Dang Le
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/sharon-anna-shaji/"
                          className={`nav-link ${currentPath ==
                            "/meet-our-team/sharon-anna-shaji/" && "active"
                            }`}
                          rel="preload"
                        >
                          Sharon Anna Shaji
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("contact")}
                    onMouseLeave={() => handleMouseLeave("contact")}
                  >
                    <Link
                      href="/contact-locations/"
                      className={`nav-link dropdown-toggle ${currentPath == "/contact-locations/" && "active"
                        } ${dropdownStates.contact ? "open" : ""}`}
                      rel="preload"
                    >
                      <span>Contact & Locations</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.contact ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("contact", e)}
                      >
                        ▼
                      </span>
                    </Link>

                    <ul
                      className={`dropdown-menu ${dropdownStates.contact ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/richardson/"
                          className={`nav-link ${currentPath == "/contact-locations/richardson/" &&
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
                          className={`nav-link ${currentPath ==
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
                          className={`nav-link ${currentPath == "/contact-locations/waxahachie/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/fort-worth/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/hillsboro/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Hillsboro
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/desoto/"
                          className={`nav-link ${currentPath == "/contact-locations/desoto/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Desoto
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/corsicana/"
                          className={`nav-link ${currentPath == "/contact-locations/corsicana/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/decatur/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/cleburne/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/plano/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/ennis/" &&
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
                          className={`nav-link ${currentPath == "/contact-locations/mesquite/" &&
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
                          className={`nav-link ${currentPath ==
                            "/contact-locations/gun-barrel-city/" && "active"
                            }`}
                          rel="preload"
                        >
                          Gun Barrel City
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/kaufman/"
                          className={`nav-link ${currentPath == "/contact-locations/kaufman/" &&
                            "active"
                            }`}
                          rel="preload"
                        >
                          Kaufman
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter("more")}
                    onMouseLeave={() => handleMouseLeave("more")}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        if (window.innerWidth <= 991) {
                          e.preventDefault();
                        }
                      }}
                      className={`nav-link dropdown-toggle ${dropdownStates.more ? "open" : ""
                        }`}
                      rel="preload"
                    >
                      <span>More</span>
                      <span
                        className={`mobile-dropdown-icon ${dropdownStates.more ? "open" : ""
                          }`}
                        onClick={(e) => handleMobileIconClick("more", e)}
                      >
                        ▼
                      </span>
                    </a>

                    <ul
                      className={`dropdown-menu ${dropdownStates.more ? "show" : ""
                        }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${currentPath == "/blog/" && "active"
                            }`}
                          rel="preload"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                          rel="preload"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/dallas-pain-clinic/"
                          className={`nav-link ${currentPath == "/dallas-pain-clinic/" && "active"
                            }`}
                          rel="preload"
                        >
                          Dallas Pain Clinic
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/pain-doctor-in-dallas/"
                          className={`nav-link ${currentPath == "/pain-doctor-in-dallas/" && "active"
                            }`}
                          rel="preload"
                        >
                          Pain Doctor in Dallas
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
                          target="_blank"
                          className={`nav-link ${currentPath == "/faqs/" && "active"
                            }`}
                          rel="preload"
                        >
                          New Patient Paper Work
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/referring-a-patient/"
                          className={`nav-link ${currentPath == "/referring-a-patient/" && "active"
                            }`}
                          rel="preload"
                        >
                          Referring A Patient
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/faqs/"
                          className={`nav-link ${currentPath == "/faqs/" && "active"
                            }`}
                          rel="preload"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/news/"
                          className={`nav-link ${currentPath == "/news/" && "active"
                            }`}
                          rel="preload"
                        >
                          News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/video-testimonials/"
                          className={`nav-link ${currentPath == "/video-testimonials/" && "active"
                            }`}
                          rel="preload"
                        >
                          Video Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/interventional-pain-management/"
                          className={`nav-link ${currentPath == "/interventional-pain-management/" &&
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
                          className={`nav-link ${currentPath == "/reviews/" && "active"
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
