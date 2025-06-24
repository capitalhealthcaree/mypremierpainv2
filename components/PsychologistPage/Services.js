import React from "react";
import Link from "next/link";

const outServices = [
  {
    imgSrc: "/images/psychologist/bariatric-psych-clearance.jpg",
    name: "Bariatric Surgery Psych Clearance",
    des: "Expert evaluations for surgical readiness, helping patients gain mental clearance for bariatric procedures efficiently and professionally.",
    href: "/medication-management-in-dallas/",
  },
  {
    imgSrc: "/images/psychologist/spinal-stimulator-assessment.jpg",
    name: "Spinal Cord Stimulator Evaluation",
    des: "Thorough mental health assessments supporting stimulator implantation, ensuring psychological suitability and faster insurance or provider approval.",
    href: "/talk-therapy-dallas/",
  },
  {
    imgSrc: "/images/psychologist/pain-management-psychological.jpg",
    name: "Pain Management Psych Assessment",
    des: "Comprehensive psychological reviews for chronic pain treatment, focusing on readiness, resilience, and personalized pain care planning.",
    href: "/medication-management-in-dallas/",
  },
  {
    imgSrc: "/images/psychologist/gender-affirming-evaluations.jpg",
    name: "Gender Affirming Surgery Evaluation",
    des: "Supportive mental health screenings for gender-affirming procedures, tailored to ensure affirmation, eligibility, and compassionate, affirming care.",
    href: "/talk-therapy-dallas/",
  },
  {
    imgSrc: "/images/psychologist/organ-psych-evaluation.jpg",
    name: "Organ Transplant Psych Clearance",
    des: "Focused psychological clearance for transplant candidates, evaluating emotional readiness, resilience, and post-surgical mental wellness support.",
    href: "/talk-therapy-dallas/",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area my-5">
        <div className="container">
          <div className="section-title">
            <h2>Best Psychiatric Services in Dallas</h2>
            <p className="mt-3">
              We provide specialized psychological evaluations tailored for
              surgery and treatment approvals. Our services include assessments
              for bariatric surgery, spinal cord stimulator implantation,
              chronic pain management, gender-affirming procedures, and organ
              transplants. Each evaluation ensures mental readiness, enhances
              care coordination, and supports faster, compliant clearance
              through licensed, compassionate professionals.
            </p>
          </div>

          <div className="row justify-content-center ">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={item.href} rel="preload">
                        <img src={item.imgSrc} alt={item.name} />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link
                          href={item.href}
                          className="d-flex justify-content-center"
                          rel="preload"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-center">{item.des}</p>
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

export default OurServices;
