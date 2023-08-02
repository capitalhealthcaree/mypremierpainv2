import React from "react";
import Head from "next/head";
import api from "../../utils/api";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import BlogSidebar from "../../components/Blog/BlogSidebar";

const BlogDetails = ({ items }) => {
  return (
    <>
      <Head>
        <title>
          {items?.seoTitle[0]
            ? items?.seoTitle[0]
            : "Latest Pain Management Blogs | Dallas Premier Pain"}
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}blog${items?.slug}`}
        />
        <meta name="description" content={items?.metaDes} />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="/images/blog/blog-detail-bg.jpg"
      />

      {/* BlogDetailsContent  */}
      <div className="blog-details-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <img src={items?.image} alt={items?.category} />
                  <h2>{items.seoTitle[0]}</h2>
                </div>

                <div dangerouslySetInnerHTML={{ __html: items?.title }}></div>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;

export const getServerSideProps = async ({ query: { slug } }) => {
  const singleBlog = await api.get("blogs/" + slug[0] + "/" + slug[1]);
  const data = await singleBlog.data.data;
  return {
    props: {
      items: data,
    },
  };
};
