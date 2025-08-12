import Link from "next/link";
import Physicians from "../../utils/physicians.json";

const OurDoctors = ({ des }) => {
  return (
    <>
      <div className="doctors-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>
              {des === "dallas-pain-clinic"
                ? "Pain Doctors in Dallas"
                : "Meet Our Pain Management Doctors in Dallas, TX"}
            </h2>
            <p className="mt-3">
              Combining expertise in pain medicine and mental health, Premier
              Pain Centers in Dallas provides personalized solutions for complex
              conditions. With Dr. Rao K. Ali leadership, patients have access
              to advanced pain treatments, TMS therapy, and psychiatric support
              for a holistic approach to healing.
            </p>
          </div>

          <div className="row justify-content-center">
            {Physicians.physicians.map((data) => {
              return (
                <div className="col-sm-6 col-lg-3">
                  <div className="doctor-item">
                    <div className="doctor-top">
                      <img src={data.image} alt={data.name} />

                      <Link href="/appointment/" rel="preload">
                        Get Appointment
                      </Link>
                    </div>
                    <div className="doctor-bottom">
                      <h3>
                        <Link href={data.href} rel="preload">
                          {data.name}
                        </Link>
                      </h3>

                      {des === "dallas-pain-clinic" ? (
                        <span className="p-3">{data.desc}</span>
                      ) : (
                        <span className="p-3">{data.bio}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
