import React from "react";
import Link from "next/link";
import Image from "next/image";
import Physicians from "../../utils/physicians.json";

const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
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
                      <span>{data.bio}</span>
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
