import Link from "next/link";

const HowCovid19Spreads = () => {
  return (
    <>
      <div className="spread-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spread-content">
                <div className="section-title-two">
                  <h2>Rapid ADHD Testing & Advanced Mental Health Care</h2>
                </div>

                <p>
                  Get Dallas mental health professionals ADHD assessment and
                  tailored drug management within 24 hours. Our board-certified
                  psychiatrists offer sophisticated treatments, including TMS,
                  for critical cases to guarantee quick relief and top-tier care
                  tailored to your needs.
                </p>
                <ul>
                  <li>
                    <img src="/images/one.png" alt="Spread" />
                    <h3>Appointments Rapid Relief</h3>
                    <p>
                      Please arrange an appointment and meet one of top-rated
                      psychiatrists near you in Dallas within hours to set your
                      way to improved mental health.
                    </p>
                  </li>
                  <li>
                    <img src="/images/two.png" alt="Spread" />
                    <h3>
                      Complete Evaluation of ADHD Medications and Symptoms
                    </h3>
                    <p>
                      Our{" "}
                      <Link href="https://g.co/kgs/7ABeJpQ" rel="preload">
                        psychiatry clinic in Dallas
                      </Link>
                      , fast ADHD assessments produce quick results. Medicine
                      can be prescribed the same day by our psychiatrists
                      certified by the board to enable you to feel better fast.
                    </p>
                  </li>
                  <li>
                    <img src="/images/three.png" alt="Spread" />
                    <h3>Advanced Treatment of Severe Symptoms</h3>
                    <p>
                      When conventional treatments and medicines are not enough,
                      our TMS and other psychiatric services in Dallas are
                      created with the idea of addressing even the most severe
                      symptoms.
                    </p>
                  </li>
                  <li>
                    <img src="/images/four.png" alt="Spread" />
                    <h3>Experts Who Give You Top Care Priority</h3>
                    <p>
                      Get the best quality of mental health care using a
                      committed, board-certified{" "}
                      <Link
                        href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                        rel="preload"
                      >
                        {" "}
                        best psychiatrist in Dallas
                      </Link>
                      , who centers on your demands.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="spread-img">
                <img src="/images/choose.png" alt="Spread" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowCovid19Spreads;
