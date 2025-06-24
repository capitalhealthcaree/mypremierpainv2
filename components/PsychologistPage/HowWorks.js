const HowWorks = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychologist/appointment.png"
                        alt="Expertise"
                      />
                      <h3>Book an Appointment Online</h3>
                      {/* <p>
                        Our psychiatrists evaluate your mental health and advise
                        you on the most appropriate treatments.
                      </p> */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychologist/form.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Complete Simple Intake Forms</h3>
                      {/* <p>
                        Our experts help to determine the medication to lessen
                        the effect and manage symptoms.
                      </p> */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychologist/evaluation.png"
                        alt="Expertise"
                      />{" "}
                      <h3>
                        Online Session
                        <br /> (30–45 mins)
                      </h3>
                      {/* <p>
                        Noninvasive therapy uses magnetic coils to affect the
                        natural electrical activity of your brain.
                      </p> */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychologist/report.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Get a Final Report via Email</h3>
                      {/* <p>
                        To precisely diagnose attention-related issues,
                        psychiatrists for ADHD provide treatment through
                        medication and therapy.
                      </p> */}
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

export default HowWorks;
