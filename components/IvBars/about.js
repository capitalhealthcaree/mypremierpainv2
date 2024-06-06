const AboutSection = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/iv-bars/about.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <h2>Boost Your Health with a Natural and Effective Way!</h2>
                <p>
                  IV Therapy, also known as intravenous therapy, is the
                  administration of delivering nutrients and hydration directly
                  into the blood stream for immediate absorption and use by the
                  body. IV Drip is the fastest way to deliver nutrients
                  throughout the body, because it bypasses the digestive system
                  and goes directly into the organs, resulting in a 90-100%
                  absorption rate (as opposed to only 20-50% possible orally).
                </p>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Restore Vitamin Levels
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Complete Rehydration
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Restore Your Energy
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    %100 Absorption
                  </li>
                </ul>

                {/* <Link href="/about">SCHEDULE NOW</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
