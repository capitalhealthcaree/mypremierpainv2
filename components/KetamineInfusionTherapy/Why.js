import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="section-title">
              <h2>What is Ketamine Infusion Therapy?</h2>
              <p className="mt-3">
                Ketamine is a safe and well-established medication that was
                originally developed for use in anesthesia. Over time, it has
                gained widespread recognition for its powerful therapeutic
                effects in managing chronic pain and treatment-resistant
                depression. Its unique mechanism targets the brain’s NMDA
                receptors, offering relief when traditional therapies have not
                been successful.
              </p>
              <p className="mt-3">
                By “resetting” neural pathways in the brain and spinal cord,
                ketamine helps regulate pain perception, improve mood, and
                reduce opioid tolerance. This makes it a valuable option for
                individuals who have struggled with persistent symptoms. Under
                professional supervision, ketamine treatment has shown
                significant improvements in both physical and emotional
                well-being.
              </p>
            </div>

            <div className="section-title">
              <h2>Conditions We Treat</h2>
            </div>
            <div className="col-lg-12">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>MENTAL HEALTH</h3>
                      <ul className="text-white" style={{ textAlign: "left" }}>
                        <li>Treatment-Resistant Depression</li>
                        <li>PTSD (Post-Traumatic Stress Disorder)</li>
                        <li>Bipolar Depression</li>
                        <li>Suicidal Thoughts (non-emergent)</li>
                        <li>Severe Anxiety Disorders</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>Pain-Related Conditions</h3>
                      <ul className="text-white" style={{ textAlign: "left" }}>
                        <li>Chronic Pain</li>
                        <li>Neuropathic Pain (nerve pain)</li>
                        <li>Fibromyalgia</li>
                        <li>Complex Regional Pain Syndrome (CRPS)</li>
                        <li>Migraine & Severe Headaches</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>OPIOID-RELATED ISSUES</h3>
                      <ul className="text-white" style={{ textAlign: "left" }}>
                        <li>Opioid Tolerance</li>
                        <li>Opioid Dependence (non-active addiction)</li>
                        <li>Inadequate relief from high-dose opioids</li>
                        <li>Post-Operative Opioid Weaning Support</li>
                        <li>Support for Chronic Opioid Management</li>
                      </ul>
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
