import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734988962/ghtmq6hva8ykostixeml.jpg" alt="Symptoms" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>Why Choose TMS?</h2>
                <p>
                  Particularly once conventional therapies prove ineffective,
                  TMS is gaining support as a cure for depression and other
                  psychiatric disorders. People choose Premier Pain Centers TMS
                  treatment since it helps with depression symptoms;
                </p>
                <ul>
                  <li>
                    Helps in treatment-resistant depression: Particularly in
                    nonresponders to many antidepressants, TMS is approved by
                    the FDA for MDD. Following TMS, many people experience
                    symptom relief or complete remission.
                  </li>
                  <li>
                    TMS is noninvasive and free of drugs: unlike medications, it
                    does not cause weight gain, sexual dysfunction, or fatigue.
                    Using magnetic pulses it activates brain regions free from
                    anaesthesia or surgery.
                  </li>
                  <li>
                    Most patients find TMS well tolerated and have a few side
                    effects. Mild, brief side effects comprise headache or scalp
                    reddening either following sessions with normal treatment or
                    afterwards. Unlike electroconvulsive therapy, there are no
                    problems with thinking or memory loss.
                  </li>
                  <li>
                    TMS sessions last few minutes. Therefore, patients may
                    immediately resume daily activities such as employment or
                    driving.
                  </li>
                  <li>
                    Long-term advantages: Particularly with psychotherapy or
                    maintenance sessions, patients usually undergo symptom
                    reduction for months or even years.
                  </li>
                  <li>
                    Growing Applications: Transcranial Magnetic Stimulation is
                    proving effective for{" "}
                    <Link href="/anxiety-treatment-in-dallas-tx/" rel="preload">
                      anxiety
                    </Link>
                    , OCD, PTSD, and more, with promising research. TMS offers
                    hope when other therapies fail.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
