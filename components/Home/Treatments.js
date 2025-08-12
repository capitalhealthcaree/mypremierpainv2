import React from "react";
import Link from "next/link";
const treatments = [
  {
    href: "/treatments/hip-joint-injections/",
    name: " Hip Joint Injections",
  },
  {
    href: "/treatments/disc-regenerative-therapy/",
    name: " Disc Regenerative Therapy",
  },
  {
    href: "/treatments/mild-procedure/",
    name: " Mild Procedure, Mild Surgery",
  },
  {
    href: "/treatments/facet-joint-injection/",
    name: " Facet Joint Injection",
  },
  {
    href: "/treatments/percutaneous-discectomy/",
    name: " Percutaneous Discectomy",
  },
  {
    href: "/treatments/trigger-point-injections/",
    name: " Trigger Point Injections",
  },
  {
    href: "/treatments/epidural-nerve-block/",
    name: " Epidural Nerve Block",
  },
  {
    href: "/treatments/joint-injections/",
    name: " Joint Injections",
  },
  {
    href: "/treatments/lumbar-sympathetic-injections/",
    name: " Lumbar Sympathetic Injections",
  },
  {
    href: "/treatments/si-joint-injection/",
    name: " Si Joint Injection",
  },
  {
    href: "/treatments/peripheral-nerve-stimulation/",
    name: "Peripheral Nerve Stimulation",
  },
  {
    href: "/treatments/occipital-nerve-block/",
    name: " Occipital Nerve Block",
  },
  {
    href: "/treatments/genicular-nerve-block/",
    name: " Genicular Nerve Block",
  },
  {
    href: "/treatments/spinal-cord-stimulation/",
    name: " Spinal Cord Stimulation",
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
                  <source
                    src="https://res.cloudinary.com/dngmflrpx/video/upload/v1735859273/treatments_bup87b.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="symptoms-content">
                <div className="section-title">
                  <h2>Pain Management Treatments in Dallas, TX</h2>
                </div>
                <p>
                  Our{" "}
                  <Link href="/meet-our-team/" rel="preload">
                    Dallas pain specialists
                  </Link>{" "}
                  provide advanced care for many painful conditions. Patients
                  often choose us for our precise diagnostics and personalized
                  treatment options. Begin your journey by selecting a procedure
                  or pain area.
                </p>
                <ul>
                  {treatments.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={item.href} rel="preload">
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
