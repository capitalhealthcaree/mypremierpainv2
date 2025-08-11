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
// // **********************************************************************
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
// //   const [activeDropdown, setActiveDropdown] = useState(""); // ADDED

// //   const toggleNavbar = () => {
// //     setMenu(!menu);
// //     setActiveDropdown(""); // ADDED - Close all dropdowns when toggling navbar
// //   };

// //   // ADDED - New functions
// //   const handleDropdownToggle = (dropdownName, e) => {
// //     e.preventDefault();
// //     // Only work on mobile when menu is open
// //     if (!menu) {
// //       setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
// //     }
// //   };

// //   const closeMenu = () => {
// //     setMenu(true);
// //     setActiveDropdown("");
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
// //                       onClick={closeMenu} // ADDED
// //                     >
// //                       Home
// //                     </Link>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="/conditions-we-treat/"
// //                       onClick={(e) => handleDropdownToggle("conditions", e)} // MODIFIED
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath === "/conditions-we-treat/" && "active"
// //                       }`}
// //                       rel="preload"
// //                       style={{
// //                         // ADDED - Mobile + / - icons
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       Conditions We Treat
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "conditions" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED - Mobile dropdown styling
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "conditions"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: "#f8f9fa",
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft:
// //                         //   typeof window !== "undefined" &&
// //                         //   window.innerWidth <= 767
// //                         //     ? "20px"
// //                         //     : "0",
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/conditions-we-treat/car-accident-injury/"
// //                           className={`nav-link ${
// //                             currentPath ===
// //                               "/conditions-we-treat/car-accident-injury/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Hip Pain
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item"></li>
// //                     </ul>
// //                   </li>
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/psychiatric-services-in-dallas-tx/"
// //                       onClick={(e) => handleDropdownToggle("psychiatry", e)} // MODIFIED
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/psychiatric-services-in-dallas-tx/" &&
// //                         "active"
// //                       }`}
// //                       rel="preload"
// //                       style={{
// //                         // ADDED
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       Psychiatry
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "psychiatry" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "psychiatry"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: '#f8f9fa',
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/tms-therapy/"
// //                           className={`nav-link ${
// //                             currentPath == "/tms-therapy/" && "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Medication Management
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>
// //                   <li className="nav-item">
// //                     <Link
// //                       href="/treatments/"
// //                       onClick={(e) => handleDropdownToggle("treatments", e)} // MODIFIED
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/treatments/" && "active"
// //                       }`}
// //                       rel="preload"
// //                       style={{
// //                         // ADDED
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       Treatments
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "treatments" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "treatments"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: '#f8f9fa',
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/treatments/hip-joint-injections/"
// //                           className={`nav-link ${
// //                             currentPath ==
// //                               "/treatments/hip-joint-injections/" && "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                       onClick={(e) => handleDropdownToggle("team", e)} // MODIFIED
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/meet-our-team/" && "active"
// //                       }`}
// //                       rel="preload"
// //                       style={{
// //                         // ADDED
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       Meet Our Team
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "team" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "team"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: '#f8f9fa',
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/rao-k-ali/"
// //                           className={`nav-link ${
// //                             currentPath == "/meet-our-team/rao-k-ali/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Rao K. Ali MD
// //                         </Link>
// //                       </li>

// //                       <li className="nav-item">
// //                         <Link
// //                           href="/meet-our-team/william-moore-md/"
// //                           className={`nav-link ${
// //                             currentPath == "/meet-our-team/william-moore-md/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Sharon Anna Shaji
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="/contact-locations/"
// //                       onClick={(e) => handleDropdownToggle("locations", e)} // MODIFIED
// //                       className={`nav-link dropdown-toggle ${
// //                         currentPath == "/contact-locations/" && "active"
// //                       }`}
// //                       rel="preload"
// //                       style={{
// //                         // ADDED
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       Contact & Locations
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "locations" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "locations"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: '#f8f9fa',
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/contact-locations/richardson/"
// //                           className={`nav-link ${
// //                             currentPath == "/contact-locations/richardson/" &&
// //                             "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Gun Barrel City
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </li>

// //                   <li className="nav-item">
// //                     <Link
// //                       href="#"
// //                       onClick={(e) => handleDropdownToggle("more", e)} // MODIFIED
// //                       className="nav-link dropdown-toggle"
// //                       rel="preload"
// //                       style={{
// //                         // ADDED
// //                         display: "flex",
// //                         justifyContent: "space-between",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       More
// //                       <span
// //                         style={{
// //                           fontSize: "18px",
// //                           fontWeight: "bold",
// //                           display:
// //                             typeof window !== "undefined" &&
// //                             window.innerWidth <= 767
// //                               ? "inline"
// //                               : "none",
// //                         }}
// //                       >
// //                         {activeDropdown === "more" ? "−" : "+"}
// //                       </span>
// //                     </Link>

// //                     <ul
// //                       className="dropdown-menu"
// //                       style={{
// //                         // ADDED
// //                         display:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? activeDropdown === "more"
// //                               ? "block"
// //                               : "none"
// //                             : "",
// //                         position:
// //                           typeof window !== "undefined" &&
// //                           window.innerWidth <= 767
// //                             ? "static"
// //                             : "absolute",
// //                         // backgroundColor: '#f8f9fa',
// //                         // border: 'none',
// //                         // boxShadow: 'none',
// //                         // width: '100%',
// //                         // marginTop: 0,
// //                         // paddingLeft: typeof window !== 'undefined' && window.innerWidth <= 767 ? '20px' : '0'
// //                       }}
// //                     >
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/blog/"
// //                           className={`nav-link ${
// //                             currentPath == "/blog/" && "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           Referring A Patient
// //                         </Link>
// //                       </li>{" "}
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/faqs/"
// //                           className={`nav-link ${
// //                             currentPath == "/faqs/" && "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
// //                         >
// //                           News
// //                         </Link>
// //                       </li>
// //                       <li className="nav-item">
// //                         <Link
// //                           href="/video-testimonials/"
// //                           className={`nav-link ${
// //                             currentPath == "/video-testimonials/" && "active"
// //                           }`}
// //                           rel="preload"
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
// //                           onClick={closeMenu} // ADDED
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
  const [activeDropdown, setActiveDropdown] = useState(""); // ADDED

  const toggleNavbar = () => {
    setMenu(!menu);
    setActiveDropdown(""); // ADDED - Close all dropdowns when toggling navbar
  };

  // ADDED - New functions
  const handleDropdownToggle = (dropdownName, e) => {
    e.preventDefault();
    // Only work on mobile when menu is open
    if (!menu) {
      setActiveDropdown(activeDropdown === dropdownName ? "" : dropdownName);
    }
  };

  const closeMenu = () => {
    setMenu(true);
    setActiveDropdown("");
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
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png"
                  alt="logo"
                  width={139}
                  height={78}
                  loading="lazy"
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
                      onClick={closeMenu} // ADDED
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/conditions-we-treat/"
                      onClick={(e) => handleDropdownToggle("conditions", e)} // MODIFIED
                      className={`nav-link dropdown-toggle ${
                        currentPath === "/conditions-we-treat/" && "active"
                      }`}
                      rel="preload"
                      style={{
                        // ADDED - Mobile + / - icons
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Conditions We Treat
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "conditions" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED - Mobile dropdown styling
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "conditions"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/conditions-we-treat/car-accident-injury/"
                          className={`nav-link ${
                            currentPath ===
                              "/conditions-we-treat/car-accident-injury/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          Hip Pain
                        </Link>
                      </li>
                      <li className="nav-item"></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/psychiatric-services-in-dallas-tx/"
                      onClick={(e) => handleDropdownToggle("psychiatry", e)} // MODIFIED
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/psychiatric-services-in-dallas-tx/" &&
                        "active"
                      }`}
                      rel="preload"
                      style={{
                        // ADDED
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Psychiatry
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "psychiatry" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "psychiatry"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/tms-therapy/"
                          className={`nav-link ${
                            currentPath == "/tms-therapy/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          TMS Therapy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/talk-therapy-dallas/"
                          className={`nav-link ${
                            currentPath == "/talk-therapy-dallas/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Talk Therapy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/dallas-counseling-services/"
                          className={`nav-link ${
                            currentPath == "/dallas-counseling-services/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Counseling
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/medication-management-in-dallas/"
                          className={`nav-link ${
                            currentPath ==
                              "/medication-management-in-dallas/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Medication Management
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/treatments/"
                      onClick={(e) => handleDropdownToggle("treatments", e)} // MODIFIED
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/treatments/" && "active"
                      }`}
                      rel="preload"
                      style={{
                        // ADDED
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Treatments
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "treatments" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "treatments"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/treatments/hip-joint-injections/"
                          className={`nav-link ${
                            currentPath ==
                              "/treatments/hip-joint-injections/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                      onClick={(e) => handleDropdownToggle("team", e)} // MODIFIED
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/meet-our-team/" && "active"
                      }`}
                      rel="preload"
                      style={{
                        // ADDED
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Meet Our Team
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "team" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "team"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/rao-k-ali/"
                          className={`nav-link ${
                            currentPath == "/meet-our-team/rao-k-ali/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Rao K. Ali MD
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
                          onClick={closeMenu} // ADDED
                        >
                          William Moore MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/dr-christopher-creighton/"
                          className={`nav-link ${
                            currentPath ==
                              "/meet-our-team/dr-christopher-creighton/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Christopher P Creighton MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                          className={`nav-link ${
                            currentPath ==
                              "/meet-our-team/dr-pollard-psychiatrist-dallas/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Ronnie Pollard MD
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/meet-our-team/sharon-anna-shaji/"
                          className={`nav-link ${
                            currentPath ==
                              "/meet-our-team/sharon-anna-shaji/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Sharon Anna Shaji
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact-locations/"
                      onClick={(e) => handleDropdownToggle("locations", e)} // MODIFIED
                      className={`nav-link dropdown-toggle ${
                        currentPath == "/contact-locations/" && "active"
                      }`}
                      rel="preload"
                      style={{
                        // ADDED
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Contact & Locations
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "locations" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "locations"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/richardson/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/richardson/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          Hillsboro
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact-locations/desoto/"
                          className={`nav-link ${
                            currentPath == "/contact-locations/desoto/" &&
                            "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
                        >
                          Desoto
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          Gun Barrel City
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => handleDropdownToggle("more", e)} // MODIFIED
                      className="nav-link dropdown-toggle"
                      rel="preload"
                      style={{
                        // ADDED
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      More
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          display:
                            typeof window !== "undefined" &&
                            window.innerWidth <= 767
                              ? "inline"
                              : "none",
                        }}
                      >
                        {activeDropdown === "more" ? "−" : "+"}
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      style={{
                        // ADDED
                        display:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? activeDropdown === "more"
                              ? "block"
                              : "none"
                            : "",
                        position:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "static"
                            : "absolute",
                        backgroundColor: "#f8f9fa",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        marginTop: 0,
                        paddingLeft:
                          typeof window !== "undefined" &&
                          window.innerWidth <= 767
                            ? "20px"
                            : "0",
                      }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          Dallas Pain Clinic{" "}
                        </Link>
                      </li>{" "}
                      <li className="nav-item">
                        <Link
                          href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735858818/New-Patient-Paper-Work_enkokm.pdf"
                          target="_blank"
                          className={`nav-link ${
                            currentPath == "/faqs/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          Referring A Patient
                        </Link>
                      </li>{" "}
                      <li className="nav-item">
                        <Link
                          href="/faqs/"
                          className={`nav-link ${
                            currentPath == "/faqs/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
                        >
                          News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/video-testimonials/"
                          className={`nav-link ${
                            currentPath == "/video-testimonials/" && "active"
                          }`}
                          rel="preload"
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
                          onClick={closeMenu} // ADDED
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
