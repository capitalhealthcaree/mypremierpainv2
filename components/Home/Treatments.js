import React from "react";
import Link from "next/link";
const treatments = [
  {
    href: "/treatments/hip-joint-injections",
    name: " Hip Joint Injections",
  },
  {
    href: "/treatments/disc-regenerative-therapy",
    name: " Disc Regenerative Therapy",
  },
  {
    href: "/treatments/mild-procedure",
    name: " Mild Procedure, Mild Surgery",
  },
  {
    href: "/treatments/facet-joint-injection",
    name: " Facet Joint Injection",
  },
  {
    href: "/treatments/percutaneous-discectomy",
    name: " Percutaneous Discectomy",
  },
  {
    href: "/treatments/trigger-point-injections",
    name: " Trigger Point Injections",
  },
  {
    href: "/treatments/epidural-nerve-block",
    name: " Epidural Nerve Block",
  },
  {
    href: "/treatments/joint-injections",
    name: " Joint Injections",
  },
  {
    href: "/treatments/regenerating-spinal-discs",
    name: " Regenerating Spinal Discs",
  },
  {
    href: "/treatments/si-joint-injection",
    name: " Si Joint Injection",
  },
  {
    href: "/treatments/pronox",
    name: "Pronox",
  },
  {
    href: "/treatments/occipital-nerve-block",
    name: " Occipital Nerve Block",
  },
  {
    href: "/treatments/genicular-nerve-block",
    name: " Genicular Nerve Block",
  },
  {
    href: "/treatments/intrathecal-pump",
    name: " Intrathecal Pump",
  },
];

const SymptomsCovid19 = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <source src="/images/treatments.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="symptoms-content">
                <div className="section-title">
                  <h2>Treatments</h2>
                </div>
                <p>
                  Our expert{" "}
                  <Link href="/meet-our-team/">pain management doctors</Link>{" "}
                  treat a variety of conditions, from head to toe, using
                  advanced diagnostic techniques and non-surgical treatments.
                  Don't know where to start? Simply search by a treatment, or
                  body part that is bothering you.
                </p>
                <ul>
                  {treatments.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>
                            <i className="icofont-caret-right"></i>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SymptomsCovid19;
