import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/treatment-schizophrenia.png" alt="Symptoms" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>How to Treat Schizophrenia?</h2>
                <p>
                  Schizophrenia treatment usually includes medication, therapy,
                  and self-management. These include:
                </p>
                <ul>
                  <li>
                    First- and Second-Generation Antipsychotics: Haloperidol
                    (Haldol®), aripiprazole (Abilify®, Aristada®), olanzapine
                    (Zyprexa®, Lyubvi®, Symbyax®), and quetiapine (Seroquel®)
                    disrupt brain-cell communication using particular chemicals.
                    Drowsiness, weight gain, and tremors are possible adverse
                    effects.
                  </li>
                  <li>
                    Antipsychotics: FDA-approved xanomeline and trospium
                    chloride (Cobenfy™), a novel antipsychotic targeting
                    cholinergic receptors instead of dopamine receptors. This
                    new schizophrenia treatment reduced symptoms with distinct
                    adverse effects in clinical trials. Nausea, stomachache,
                    urine retention, an elevated heart rate, and constipation
                    are side effects.
                  </li>
                  <li>
                    Psychotherapy: CBT and other talk therapies can help in
                    schizophrenia support and recovery. Long-term therapy can
                    also assist with schizophrenia-related{" "}
                    <Link href="/anxiety-treatment-in-dallas-tx/" rel="preload">
                      anxiety
                    </Link>
                    , depression, and substance use.
                  </li>
                  <li>
                    ECT: If other therapies fail, your doctor may suggest ECT.
                    This treatment stimulates brain regions using an electrical
                    current delivered to the scalp. The stimulation generates a
                    short seizure, which can enhance brain function in severe
                    <Link
                      href="/depression-treatment-in-dallas-tx/"
                      rel="preload"
                    >
                      {" "}
                      depression{" "}
                    </Link>
                    , agitation, and other conditions. Anesthesia is given for
                    ECT. You'll sleep during this process without pain.
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
