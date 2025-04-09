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
                <h2>What is TMS Therapy in Dallas</h2>
                {/* <h4>Restoring Your Brain Health</h4> */}
                <p>
                  With a magnetic field, TMS changes brain activity. It covers
                  other brain disorders, depression, and OCD. It is noninvasive
                  brain stimulation and can assist when other therapies fall
                  short. Generally mild and temporary are the side effects.
                  Transcranial magnetic stimulation (TMS) uses a magnetic coil
                  to change brain electrical activity noninvasively. Among those
                  with psychiatric and neurological issues, this 1985 therapy is
                  quite popular. Theta burst stimulation is a form of TMS that
                  delivers bursts of pulses at frequency of gamma.
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
                <img src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734988757/uufhz4puftqw27rmxcgf.jpg" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
