const Services = () => {
  return (
    <>
      <div className="services-area py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <img src="/images/medical-team.png" alt="Spread" />
                  <h3 className="mt-3">Our Pain Doctors</h3>
                  <p>
                    Our board-certified pain doctors in Dallas use a
                    comprehensive, multimodal approach to relieve pain and
                    restore quality of life, helping you feel better and live
                    pain-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <img src="/images/timeline.png" alt="Spread" />
                  <h3 className="mt-3">Our Pain Management Process</h3>
                  <p className="mt-3">
                    We create personalized treatment plans combining advanced
                    interventional pain procedures, physical therapy and
                    conservative care minimizing the need for long-term opioid
                    use.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <img src="/images/team.png" alt="Spread" />
                  <h3 className="mt-3">Collaborative Pain Care</h3>
                  <p className="mt-3">
                    Our doctors work closely with specialists in pain
                    management, psychiatry, and other fields to accurately
                    identify the cause of your pain and develop a plan that
                    delivers lasting relief.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
