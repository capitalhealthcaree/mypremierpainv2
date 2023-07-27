import React from "react";
import Head from "next/head";
import Link from "next/link";
import api from "../../utils/api";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const News = ({ item }) => {
  return (
    <>
      <Head>
        <title>Latest Pain Management Blogs | Dallas Premier Pain</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Discover effective pain management Treatments, expert advice, and helpful tips to find relief and improve your quality of life. Explore now"
        />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="news"
        bgImage="/images/blog/blog-bg.jpg"
      />

      {/* NewsGrid */}
      <div className="blog-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {item.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={`/news/${item.slug}`}>
                        <img src={item.image} alt={item.category} />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link href={`/news/${item.slug}`}>
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
                          <Link href={`/news/${item.slug}`}>
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;

export const getServerSideProps = async () => {
  const blogs = await api.get("/news/getAll");
  const data = await blogs.data.data;
  return {
    props: {
      item: data,
    },
  };
};
