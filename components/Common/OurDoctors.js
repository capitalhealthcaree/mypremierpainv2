import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor1.webp"
                    alt="Doctor"
                    width={416}
                    height={450}
                    loading="lazy"
                  />
                  <Link href="/appointment/" rel="preload">
                    Get Appointment
                  </Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/meet-our-team/rao-k-ali/" rel="preload">
                      Dr. Rao K. Ali M.D.
                    </Link>
                  </h3>
                  <span>Interventional Pain Management Physician</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor2.webp"
                    alt="Doctor"
                    width={416}
                    height={450}
                    loading="lazy"
                  />
                  <Link href="/appointment/" rel="preload">
                    Get Appointment
                  </Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link
                      href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
                      rel="preload"
                    >
                      DR. MUHAMMAD ZULQARNAIN M.D.
                    </Link>
                  </h3>
                  <span>Pain Management Physician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
