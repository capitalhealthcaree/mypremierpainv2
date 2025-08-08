const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Affordable & Expert Help</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychiatrist.png"
                        alt="Expertise"
                      />
                      <h3>Spravato® (Esketamine)</h3>
                      <p>
                        FDA-approved nasal spray for treatment-resistant
                        depression and MDD with suicidal thoughts, offering
                        rapid relief under expert supervision.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/mental-health.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Depression & Mood Disorder Care</h3>
                      <p>
                        Specialized programs combining advanced therapies,
                        medication, and counseling to address complex mood
                        disorders effectively.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/medication.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Ketamine Infusion Therapy</h3>
                      <p>
                        IV-based treatment for depression, anxiety, and PTSD
                        that works quickly to restore emotional balance and
                        improve mood.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/adhd.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Personalized Treatment Plans</h3>
                      <p>
                        Tailored care designed to meet each patient’s unique
                        needs, ensuring safety, comfort, and lasting results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <img src="/images/spravato-detail-page.jpg" alt="Expertise" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
