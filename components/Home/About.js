import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734991950/noriaktvgd7pbmpqr94e.webp"
                  alt="Symptoms"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <h2 style={{ fontSize: "33px" }}>
                  Comprehensive Pain Management in Dallas and Surrounding Areas
                </h2>
                <h4>Trusted Care. Lasting Relief.</h4>
                <p>
                  At Premier Pain Centers, we provide advanced,
                  multidisciplinary pain management for patients across Dallas,
                  Fort Worth, and surrounding Northern Texas communities,
                  including Richardson, Plano, Mesquite, DeSoto, Lancaster,
                  Waxahachie, Kaufman, Ennis and Gun Barrel City. Our mission is
                  to deliver personalized treatment that addresses your unique
                  needs, helping you reduce pain, improve mobility and restore
                  your quality of life.
                </p>
                <p>
                  Our Dallas pain clinic offers a full spectrum of
                  interventional and non-invasive treatments for spine, muscle,
                  joint and nerve-related conditions. Since 2008, our double
                  board-certified{" "}
                  <Link href="/meet-our-team/rao-k-ali/" rel="preload">
                    pain physician in Dallas
                  </Link>
                  , Dr. Rao K. Ali, has helped thousands of patients find relief
                  through procedures such as epidural injections, nerve blocks,
                  radiofrequency ablation, and kyphoplasty.
                </p>
                <p>
                  Every visit begins with a detailed consultation so we can
                  understand your symptoms, medical history, and goals, helping
                  you receive the most effective, least invasive treatment
                  possible.
                </p>

                <Link href="/appointment/" rel="preload">
                  Schedule An Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
