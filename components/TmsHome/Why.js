import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>What is TMS Therapy and How Does It Work?</h2>
                <p>
                  Using MRI strength pulses, transcranial magnetic stimulation
                  (TMS) therapy treats mood disorders, including depression,
                  safely and effectively. Medication just cures symptoms, but
                  TMS therapy enhances the brain network that controls emotion,
                  thought, and action. In outpatient, non-invasive sessions, TMS
                  treatments induce positive brain activity to reconnect these
                  networks, providing long-term relief from depression and other
                  mood disorders.
                </p>
                <p>
                  Delayed brain activity can cause depression. Your brain may
                  struggle to relay signals to "snap out of" negative thoughts,
                  feelings, and behaviors when these brain networks don't
                  coordinate. Depression,{" "}
                  <Link href="/anxiety-treatment-in-dallas-tx/" rel="preload">
                    anxiety
                  </Link>
                  , sleep issues, cognitive impairment, and difficulties
                  focusing often result from recurring connectivity issues. TMS
                  is similar to physical therapy for rehabilitation. In
                  outpatient sessions, TMS therapy employs repetition to
                  increase strength and improve communication, training your
                  brain to send signals on its own. A magnet's magnetic field is
                  its influence in magnetically active space. You can't see the
                  magnet at its center, but it affects that space. When a magnet
                  is near a conductive item, the magnetic field generates
                  electricity.
                </p>
                <div className="about-item">
                  <Link href="/contact-locations/" rel="preload">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>FDA-Approved</h3>
                      <p>
                        TMS is FDA-approved for treating major depressive
                        disorder and obsessive-compulsive disorder.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>Non-Medication</h3>
                      <p>
                        Depression sufferers can avoid medicine adverse effects
                        using TMS therapy.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>Convenient</h3>
                      <p>
                        TMS sessions last 20–40 minutes and need no downtime,
                        making them convenient.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>Proven Success</h3>
                      <p>
                        TMS therapy shows promise in alleviating
                        treatment-resistant depression symptoms. Many achieve
                        remission.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>Comfortable Care</h3>
                      <p>
                        Non-invasive TMS therapy has no anesthesia or recovery
                        time, making it comfortable.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <h3>Covered By Insurance</h3>
                      <p>
                        Insurance covers TMS therapy, easing depression
                        treatment costs for patients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
