import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "../../utils/api";

const LatestBlogPost = () => {
  const [list, setList] = useState([]);

  async function fetchData() {
    const res = await api.get("/blogs/getLastThree");
    if (res.status === 200) {
      if (res && res.data && res.data.data) {
        setList(res.data.data);
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="blog-area pt-5 pb-5">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row justify-content-center">
            {list.slice(0, 3).map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={`/blog${item.slug}`} rel="preload">
                        <Image
                          src={item.image}
                          alt={item.category}
                          width={416}
                          height={208}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link href={`/blog${item.slug}`} rel="preload">
                          {item.seoTitle[0]}
                        </Link>
                      </h3>
                      <p>
                        {item.metaDes.length > 130
                          ? item.metaDes.slice(0, 130) + "..."
                          : item.metaDes}
                      </p>
                      <ul>
                        <li>
                          <Link href={`/blog${item.slug}`} rel="preload">
                            Read More{" "}
                            <i className="icofont-long-arrow-right"></i>
                          </Link>
                        </li>
                        <li></li>
                      </ul>
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
              href="/blog/"
              style={{
                backgroundColor: "#0046c0",
                color: "white",
                padding: "10px 11px",
              }}
              rel="preload"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
