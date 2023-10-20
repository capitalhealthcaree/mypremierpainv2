import React from "react";
import Link from "next/link";
import data from "../../utils/conditionsWeTreat.json";

const OurServices = () => {
  return (
    <>
      <div className="blog-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            {data.slice(0, 8).map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="common-btn"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              href="/conditions-we-treat/"
              style={{
                backgroundColor: "#0046c0",
                color: "white",
                padding: "10px 11px",
                marginBottom: "2vh",
              }}
              rel="preload"
            >
              More About Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
