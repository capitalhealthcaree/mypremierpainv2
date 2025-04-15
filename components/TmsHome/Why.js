import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="section-title">
              <h2>FDA-Approved Conditions Treated with TMS</h2>
              <p className="mt-3">
                TMS can help when other treatments fail. Its noninvasiveness
                makes it crucial. No surgery is needed, as the therapy is done
                via your skin. TMS can also replace ECT if it's ineffective or
                not an option. TMS is approved to treat different illnesses in
                different countries. FDA-Approved TMS Therapy in Dallas for
                following conditions:
              </p>
            </div>
            <div className="col-lg-12">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Major Depressive Disorder</h3>
                      <p>
                        Major depressive disorder, or clinical depression,
                        causes sorrow and anhedonia, affecting thoughts,
                        emotions, and behavior. It leads to psychological and
                        physical issues, making daily tasks difficult and life
                        feel pointless.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Obsessive-Compulsive Disorder</h3>
                      <p>
                        <Link href="/ocd-treatment-in-dallas-tx/" rel="preload">
                          OCD
                        </Link>{" "}
                        results in frequent uncomfortable thoughts and repeating
                        actions. Usually, part of OCD treatment is
                        <Link
                          href="/medication-management-in-dallas/"
                          rel="preload"
                        >
                          {" "}
                          medication management
                        </Link>{" "}
                        and psychotherapy. Recognising and treating OCD early
                        leads to better results.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Migraine Headaches</h3>
                      <p>
                        Migraines are debilitating{" "}
                        <Link
                          href="/conditions-we-treat/headaches/"
                          rel="preload"
                        >
                          {" "}
                          headaches
                        </Link>{" "}
                        with symptoms like nausea, visual issues, and
                        irritability. A{" "}
                        <Link
                          href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                          rel="preload"
                        >
                          TMS doctor in Dallas
                        </Link>{" "}
                        can help manage{" "}
                        <Link
                          href="/migraines-treatment-in-dallas-tx/"
                          rel="preload"
                        >
                          migraines
                        </Link>{" "}
                        and prevent them from taking over.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Stopping Cessation</h3>
                      <p>
                        Smoking harms almost every organ, but quitting offers
                        immediate and long-term benefits. Within 30 minutes,
                        heart rate normalizes, and risks of heart attack and
                        cancer decrease over time.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Adolescent Depression</h3>
                      <p>
                        Teen{" "}
                        <Link
                          href="/depression-treatment-in-dallas-tx/"
                          rel="preload"
                        >
                          {" "}
                          depression
                        </Link>{" "}
                        causes sadness, loss of interest, and changes in
                        thoughts, feelings, and behavior. It can lead to
                        emotional, functional, and physical issues, with
                        symptoms different from adults.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Pain Management with MagVenture Pain Therapy</h3>
                      <p>
                        <Link href="https://g.co/kgs/k6ebhQX" rel="preload">
                          TMS Clinic in Dallas
                        </Link>{" "}
                        offers FDA-approved magnetic therapy to relieve chronic
                        pain using noninvasive pulses for adults 18+.
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
