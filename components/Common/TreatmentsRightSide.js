import React from "react";
import Link from "next/link";

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    {
      url: "/conditions-we-treat/car-accident-injury",
      name: "car accident injury",
    },
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

const ConditionsWeTreatLeftSide = () => {
  return (
    <>
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
      {/* <div className="departments-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="department-item">
                <h3>Dr. Rao K. Ali M.D.</h3>
                <p>
                  Dr. Rao Ali, a board-certified pain management physician,
                  leads the clinic, which specializes in nonsurgical treatment.
                  The physician has experience in the emergency room as well as
                  training in pain management and rehabilitation. As a personal
                  physician, he works with each patient to develop a treatment
                  plan that will minimize or eliminate their pain. Providing
                  expert diagnosis and treatment of a wide range of conditions,
                  Pain Management In Dallas, PA provides a comprehensive range
                  of services. These services include neck pain, back pain, hip
                  and knee pain, fibromyalgia, neuropathy, complex regional pain
                  syndrome, headaches, migraines, and many others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ConditionsWeTreatLeftSide;
