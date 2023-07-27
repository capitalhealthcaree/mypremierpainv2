import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentForm from "../../components/Appointment/AppointmentForm";
import Footer from "../../components/_App/Footer";

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
  ],
};
const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Ranjit Sandhu M.D. Pain Management Physician</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}meet-our-team/ranjit-sandhu/`}
        />
        <meta
          name="description"
          content="Dr. Ranjit Sandhu is a double board-certified Anesthesiologist and Interventional Pain Medicine specialist. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="DR. Ranjit Sandhu M.D."
        homePageUrl="/"
        homePageText="Home"
        activePageText="ranjit-sandhu"
        bgImage="/images/doctor.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-3">
                    <h3>{conditionsWeTreat.heaging}</h3>
                    <ul>
                      {conditionsWeTreat.treatment.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.url}>{item.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>Ranjit Sandhu M.D.</b>
                    </h3>
                    <h4>(Pain Management Physician)</h4>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Dr. Ranjit Sandhu is a double board-certified
                      Anesthesiologist and Interventional Pain Medicine
                      specialist. He was born and raised in the Metro Detroit
                      area. After graduating from medical school, Dr. Sandhu
                      went on to complete his residency in Anesthesiology at
                      Wayne State University. He then went on to complete a
                      fellowship in Interventional Pain Medicine at the same
                      institution. During his training, Dr. Sandhu gained
                      extensive experience incorporating everything from
                      medications to minimally invasive procedures, to manage
                      acute and chronic pain.
                    </p>

                    <p>
                      Dr. Sandhu believes in using a multidisciplinary approach
                      and utilizing evidence-based care when treating pain, with
                      the ultimate goal of restoring function and improving the
                      quality of life of his patients. He is passionate about
                      staying up to date with the latest technologies and
                      cutting-edge procedures for the treatment of acute and
                      chronic pain. During his free time, Dr. Sandhu enjoys
                      traveling with his wife, watching Detroit sports, and
                      spending time with family and friends.
                    </p>
                    <p></p>
                  </div>
                  <div className="doctor-details-contact">
                    <h3>Contact info</h3>
                    <ul>
                    <li style={{ marginLeft: "-5px" }}>
                      <i
                        className="icofont-ui-call"
                        style={{ fontSize: "30px" }}
                      ></i>

                      <a href="tel:+14695624188">( +1 ) 469-562-4188</a>
                    </li>
                    <li>
                      <i
                        className="icofont-ui-message"
                        style={{ fontSize: "25px" }}
                      ></i>
                      <a href="mailto:admin@mypremierpains.com">
                        admin@mypremierpain.com
                      </a>
                    </li>
                    </ul>
                  </div>
                  <div className="doctor-details-biography"></div>
                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <ul>
                          <li>
                            Monday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Tuesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Wednesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Thursday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Friday <span>9:00 AM - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-100">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
