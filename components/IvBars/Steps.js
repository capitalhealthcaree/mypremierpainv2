const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Simple Steps to Wellness</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        src="/images/iv-bars/one.png"
                        width={65}
                        height={65}
                      />
                      <h3 className="pt-4">
                        Select a iV or service right for you
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        src="/images/iv-bars/two.png"
                        width={65}
                        height={65}
                      />
                      <h3 className="pt-4">
                        Schedule your wellness appointment
                      </h3>
                    </div>
                  </div>{" "}
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        src="/images/iv-bars/three.png"
                        width={65}
                        height={65}
                      />
                      <h3 className="pt-4">
                        Work with our certified medical professionals
                      </h3>
                    </div>
                  </div>{" "}
                  <div className="col-sm-6 col-lg-3">
                    <div className="expertise-inner">
                      <img
                        src="/images/iv-bars/four.png"
                        width={65}
                        height={65}
                      />
                      <h3 className="pt-4">
                        Relax and enjoy at our clinic or at home
                      </h3>
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
