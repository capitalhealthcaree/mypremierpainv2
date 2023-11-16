import React from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const NewsSidebar = dynamic(() => import("../../components/News/NewsSidebar"));

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";

const NewsDetails = ({ items }) => {
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
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/news${items?.slug}`}
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={items?.metaDes} />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="News Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="news"
        bgImage="/images/blog/blog-detail-bg.webp"
      />

      {/* BlogDetailsContent  */}
      <div className="blog-details-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <Image
                    src={items?.image}
                    alt={items?.category}
                    width={856}
                    height={428}
                    loading="lazy"
                  />
                  <h2>{items.seoTitle[0]}</h2>
                </div>

                <div dangerouslySetInnerHTML={{ __html: items?.title }}></div>
              </div>
            </div>

            <div className="col-lg-4">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsDetails;

export const getServerSideProps = async ({ query: { slug } }) => {
  const singleBlog = await api.get("news/slug/" + slug + "/");
  const data = await singleBlog.data.data;
  return {
    props: {
      items: data,
    },
  };
};
