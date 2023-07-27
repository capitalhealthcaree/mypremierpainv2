import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImage,
}) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="page-title-item">
              <h1 style={{color:"white"}}>{pageTitle}</h1>
              <ul>
                <li>
                  <Link href={homePageUrl}>{homePageText}</Link>
                </li>
                <li className="active">{activePageText}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
