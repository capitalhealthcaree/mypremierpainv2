import Link from "next/link";

export default function HelpingIndividualsSection() {
  return (
    <div className="overflow-hidden">
      <div className="symptoms-area pt-3">
        <div className="container p-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="container">
                <h2 className="fw-bold ">
                  DON’T LET NEUROPATHY SYMPTOMS CONTROL YOUR LIFE ANY LONGER
                </h2>
                <h3 style={{ color: "#0046c0" }}>
                  Contact Us to Make an Appointment
                </h3>
                <p>
                  We’ve helped countless patients find relief with an 80 to 90%
                  success rate using safe, noninvasive, and drug-free therapies.
                  Whether your nerve pain is caused by diabetes, chemotherapy,
                  trigeminal neuralgia, or other conditions, our
                  neuropathy-focused care is designed to deliver results.
                  Discover expert nerve pain solutions trusted across Dallas,
                  Mesquite, Waxahachie, Hillsboro and Plano. Experience the
                  difference with advanced treatments and compassionate care.
                </p>
                <div
                  className="services-details-img"
                  style={{ backgroundColor: "#0046c0", marginBottom: "0" }}
                >
                  <blockquote style={{ color: "#ffffff" }}>
                    <i className="icofont-quote-left"></i>
                    To book an appointment with Premier Pain Centers, your
                    trusted neuropathy clinic in Dallas, contact us today. Our
                    experienced Dallas neuropathy doctors are here to help you
                    find long-term relief.
                  </blockquote>
                </div>

                <div className="about-item">
                  <Link href="/contact-locations/" rel="preload">
                    Contact & Locations
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <div className="spread-img">
                  <video
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="/images/neuropathy/contact-us.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
