import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const locations = [
  { name: "Cleburne", location: "/contact-locations/cleburne" },
  { name: "corsicana", location: "/contact-locations/corsicana" },
  { name: "Decatur", location: "/contact-locations/decatur" },
  { name: "Farmers Branch", location: "/contact-locations/farmers-branch" },
  { name: "Fort Worth", location: "/contact-locations/fort-worth" },
  { name: "Hillsboro", location: "/contact-locations/hillsboro" },
  { name: "Lancaster", location: "/contact-locations/lancaster" },
  {
    name: "North Richland Hills",
    location: "/contact-locations/north-richland-hills",
  },
  { name: "Richardson", location: "/contact-locations/richardson" },
  { name: "Waxahachie", location: "/contact-locations/waxahachie" },
];
const conditionsWeTreat = [
  { name: "Back Pain", location: "/conditions-we-treat/back-pain" },
  {
    name: "Car Accident Injury",
    location: "/conditions-we-treat/car-accident-injury",
  },
  { name: "Foot Pain", location: "/conditions-we-treat/foot-pain" },
  { name: "Headaches", location: "/conditions-we-treat/headaches" },
  { name: "Hip Pain", location: "/conditions-we-treat/hip-pain" },
  { name: "Joint Pain", location: "/conditions-we-treat/joint-pain" },
  { name: "Knee Pain", location: "/conditions-we-treat/knee-pain" },
  { name: "Leg Pain", location: "/conditions-we-treat/leg-pain" },
  { name: "Neck Pain", location: "/conditions-we-treat/neck-pain" },
  { name: "Shoulder Pain", location: "/conditions-we-treat/shoulder-pain" },
  { name: "Sports Injury", location: "/conditions-we-treat/sports-injury" },
  { name: "Wrist Pain", location: "/conditions-we-treat/wrist-pain" },
];
const treatments = [
  {
    href: "/treatments/disc-regenerative-therapy",
    name: " Disc Regenerative Therapy",
  },

  {
    href: "/treatments/epidural-nerve-block",
    name: " Epidural Nerve Block",
  },
  {
    href: "/treatments/epidural-steroid-injection",
    name: " Epidural Steroid Injection",
  },
  {
    href: "/treatments/facet-joint-injection",
    name: " Facet Joint Injection",
  },
  {
    href: "/treatments/hip-joint-injections",
    name: " Hip Joint Injections",
  },
  {
    href: "/treatments/joint-injections",
    name: "Joint Injections",
  },
  {
    href: "/treatments/k-laser-therapy",
    name: " K-Laser Therapy",
  },
  {
    href: "/treatments/lumbar-percutaneous-discectomy",
    name: " Percutaneous Lumbar Discectomy",
  },
  {
    href: "/treatments/lumbar-sympathetic-injections",
    name: " Lumbar Sympathetic Injections",
  },
  {
    href: "/treatments/mild-procedure",
    name: "Mild Procedure",
  },
  {
    href: "/treatments/neuroma-injection",
    name: " Neuroma Injection",
  },
  {
    href: "/treatments/platelet-rich-plasma",
    name: " Platelet Rich Plasma",
  },
  {
    href: "/treatments/pronox",
    name: " Pronox Nitrous Oxide System",
  },
  {
    href: "/treatments/si-joint-injections",
    name: " SI Joint Injections",
  },
  {
    href: "/treatments/spinal-cord-stimulation",
    name: " Spinal Cord Stimulation",
  },
  {
    href: "/treatments/steroid-joint-injections",
    name: " Steroid Joint Injections",
  },

  {
    href: "/treatments/sympathetic-injections",
    name: " Sympathetic Injections",
  },
  {
    href: "/treatments/trigger-point-injections",
    name: "Trigger Point Injections",
  },
];

const blogs = [
  {
    name: "Different Ways Used By Doctor For Knee Pain",
    location: "/blog/knee-pain/different-ways-used-by-doctor-for-knee-pain",
  },
  {
    name: "Internal Derangement Of Knee: Causes, Symptoms And Diagnosis",
    location:
      "/blog/knee-pain/internal-derangement-of-knee-causes-symptoms-and-diagnosis",
  },
  {
    name: "Why Is The Knee Pain Location Chart So Helpful ?",
    location: "blog/knee-pain/knee-pain-location-chart",
  },
  {
    name: "Different Factors Causing Sharp Stabbing Pain In Knee",
    location: "/blog/knee-pain/sharp-stabbing-pain-in-knee",
  },
  {
    name: "Different Types Of Dorsalgia With Treatment",
    location: "/blog/back-pain/Dorsalgia",
  },
  {
    name: "Annular Tear: Symptoms, Causes and Treatments Options",
    location: "/blog/back-pain/annular-tear-symptoms-causes-and-treatments",
  },
  {
    name: "Effective Ways To Deal With Chronic Pain Syndrome",
    location: "/blog/back-pain/chronic-pain-syndrome",
  },
  {
    name: "Causes And Treatment Of Cervical Spondylosis",
    location: "/blog/neck-pain/causes-and-treatment-of-cervical-spondylosis",
  },
  {
    name: "Proper Treatment For Crick In Neck",
    location: "/blog/neck-pain/crick-in-neck",
  },
  {
    name: "Helpful Effective Ways For Neck Muscle Pain Relief",
    location:
      "/blog/neck-pain/helpful-effective-ways-for-neck-muscle-pain-relief",
  },
  {
    name: "Dead Leg: Causes, Symptoms, Diagnosis amd Treatment",
    location: "/blog/leg-pain/dead-leg-treatment",
  },
  {
    name: "Do You Think Phlebectomy Is Safe For You?",
    location: "/blog/leg-pain/do-you-think-phlebectomy-is-safe-for-you",
  },
  {
    name: "Unlocking Relief: Effective Treatment Options for Frozen Shoulder",
    location: "/blog/shoulder-pain/frozen-shoulder-treatment",
  },
  {
    name: "You Should Be Aware Of Possible Causes Of Intercostal Neuralgia",
    location: "/blog/health-tips/possible-causes-of-intercostal-neuralgia",
  },
  {
    name: "How Pain Management Doctors Near Me Can Help Alleviate Chronic Pain",
    location: "/blog/treatments/pain-management-doctors-near-me",
  },
];
const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Back Pain Specialists Near Me In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/back-pain/`}
        />
        <meta
          name="description"
          content="Premier Pain Centers in Dallas offers relief from back pain with state-of-the-art treatments. Our team of spine specialists create customized treatment plans."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Site Map"
        homePageUrl="/"
        homePageText="Home"
        activePageText="sitemap"
        bgImage="/images/sitemap.jpg"
      />

      <div className="container p-5">
        <div className="row">
          <dl>
            <dt>
              <Link href="/">Home</Link>
            </dt>
          </dl>
          <dl>
            <dt>
              <Link href="/conditions-we-treat/">Conditions We Treat</Link>
            </dt>
            {conditionsWeTreat.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.location}>{item.name}</Link>
                </li>
              );
            })}
          </dl>
          <dl>
            <dt>
              <Link href="/treatments/">Treatments</Link>
            </dt>
            {treatments.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </dl>
          <dl>
            <dt>
              <Link href="/meet-our-team/">Find A Doctor</Link>
            </dt>
            <li>
              <Link href="/meet-our-team/rao-k-ali/">Dr. Rao K. Ali M.D.</Link>
            </li>
            <li>
              <Link href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/">
                DR. MUHAMMAD ZULQARNAIN (DR. Z) M.D.
              </Link>
            </li>
          </dl>
          <dl>
            <dt>
              <Link href="/about/">About Us</Link>
            </dt>
          </dl>
          <dl>
            <dt>
              <Link href="/contact-locations/">Contact & Location</Link>
            </dt>
            {locations.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.location}>{item.name}</Link>
                </li>
              );
            })}
          </dl>

          <dl>
            <dt>
              <Link href="/blog/">Blog</Link>
            </dt>
            {blogs.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.location}>{item.name}</Link>
                </li>
              );
            })}
          </dl>

          <dl>
            <dt>
              <Link href="/news/">News</Link>
            </dt>
            <li>
              <Link href="/news/are-opioids-harmful-to-new-born-infants/">
                Are Opioids Harmful To New Born Infants
              </Link>
            </li>
          </dl>
          <dl>
            <dt>
              <Link href="/reviews/">reviews</Link>
            </dt>
          </dl>
          <dl>
            <dt>
              <Link href="/appointment/">Appointment</Link>
            </dt>
          </dl>
          <dl>
            <dt>
              <Link href="/interventional-pain-management/">
                Interventional Pain Management
              </Link>
            </dt>
          </dl>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
