import React from "react";
import Link from "next/link";
const DetailsContent = () => {
  return (
    <>
      <div className="service-details-area pt-5">
        <div className="container">
          <div className="services-details-img">
            <h2 className="text-center">
              Your Path to Recovery and Wellness Through Dallas Pain Clinic
            </h2>
            <p>
              Arthritis, cancer, fractures, disc displacement, fibromyalgia,
              headaches and migraines, herniated discs, general back and neck
              pain, shoulder pain, knee pain, pelvic pain, post-surgical pain,
              shingles, sports injuries, spinal infections, spondylosis, and
              other conditions can be treated at our pain clinic. Since 2008 our
              Dallas pain clinic doctors have treated many conditions to relieve
              pain and help patients heal. We collaborate to provide acute and
              chronic pain patients with the most comprehensive and conservative
              care and offer services in Spanish. Our pain management in Dallas
              doctors understand the importance of proper diagnosis and
              treatment and can manage your pain so you can maintain your
              favorite lifestyle.
            </p>

            <p>
              We provide our services throughout the Dallas-Fort Worth area,
              including{" "}
              <Link href="/contact-locations/desoto/" rel="preload">
                Desoto
              </Link>
              ,{" "}
              <Link href="/contact-locations/plano/" rel="preload">
                Plano
              </Link>
              ,{" "}
              <Link href="/contact-locations/hillsboro/" rel="preload">
                Hillsboro
              </Link>
              ,{" "}
              <Link href="/contact-locations/ennis/" rel="preload">
                Ennis
              </Link>
              ,{" "}
              <Link href="/contact-locations/richardson/" rel="preload">
                Richardson
              </Link>{" "}
              and{" "}
              <Link href="/contact-locations/gun-barrel-city/" rel="preload">
                Gun Barrel City
              </Link>
              . Our pain clinics are easily accessible from major roads and
              highways.{" "}
              <Link href="/meet-our-team/" rel="preload">
                {" "}
                Pain Physicians in Dallas{" "}
              </Link>{" "}
              has over a dozen board-certified pain management doctors and
              physicians with decades of experience treating patients of all
              ages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
