import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../../../utils/conditionsWeTreat.json";
const OurServices = () => {
  return (
    <>
      <div className="blog-area pt-4">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            {data.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={item.href} rel="preload">
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          width={306}
                          height={232}
                          loading="lazy"
                        />
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
        </div>
      </div>
    </>
  );
};

export default OurServices;
