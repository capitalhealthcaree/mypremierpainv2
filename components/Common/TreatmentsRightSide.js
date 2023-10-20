import React from "react";
import Link from "next/link";
import data from '../../utils/conditionsWeTreat.json'

const ConditionsWeTreatLeftSide = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-category ps-3">
          <h3>Conditions We Treat</h3>
          <ul>
            {data.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.href} rel="preload">
                    {item.name}
                  </Link>
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
