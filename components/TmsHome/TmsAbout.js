import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>A Better Way to Treat TMS in Dallas, Texas</h2>
                <h4>Restoring Your Brain Health</h4>
                <p>
                  Premier Pain Centers, a veteran-owned and operated facility,
                  is a cutting-edge therapeutic clinic in Dallas/Richardson,
                  Fort Worth, Lancaster, Hillsboro, Ennis and the surrounding
                  areas. TMS might be impactful in treating those who suffer
                  from severe{" "}
                  <Link
                    href="/depression-treatment-in-dallas-tx/"
                    rel="preload"
                  >
                    depression
                  </Link>
                  , anxiety, OSTD, trauma, tinnitus,{" "}
                  <Link href="/conditions-we-treat/headaches/" rel="preload">
                    migraine headaches
                  </Link>
                  , and chronic pain that hasn’t responded to antidepressant
                  medication.
                </p>
                <p>
                  Transcranial magnetic stimulation (TMS therapy) involves a
                  non-drug treatment that utilizes magnetic pulses for
                  electrical stimulation of brain nerve cells and relieves
                  associated symptoms. We offer expertise in patient care and a
                  holistic approach to TMS treatment services. Our dedicated{" "}
                  <Link href="/meet-our-team/" rel="preload">
                    team of doctors
                  </Link>
                  , technicians, and office staff, who are both skilled and
                  compassionate, are committed to providing top-notch care.
                </p>

                <div className="about-item">
                  <Link href="/appointment/" rel="preload">
                    Schedule An Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/what-is-tms-therpy.jpg" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
