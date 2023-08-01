import React from "react";
import Link from "next/link";

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    {
      url: "/conditions-we-treat/car-accident-injury",
      name: "Car Accident Injury",
    },
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
    { url: "/conditions-we-treat/hip-pain", name: "Hip Pain" },
  ],
};
const ConditionsWeTreatLeftSide = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-category ps-3">
          <h3>{conditionsWeTreat.heaging}</h3>
          <ul>
            {conditionsWeTreat.treatment.map((item) => {
              return (
                <li>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ConditionsWeTreatLeftSide;
