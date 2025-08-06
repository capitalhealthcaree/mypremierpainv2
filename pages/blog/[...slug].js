import React from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const BlogSidebar = dynamic(() => import("../../components/Blog/BlogSidebar"));

const Footer = dynamic(() => import("../../components/_App/Footer"));

import api from "../../utils/api";

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
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/blog${items?.slug}`}
        />
        <meta name="description" content={items?.metaDes} />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle={
          items?.seoTitle[0]
            ? items?.seoTitle[0]
            : "Latest Pain Management Blogs | Dallas Premier Pain"
        }
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734994849/blog/bnqhusic4ix7s1sw472c.webp"
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
  let apiUrl = "";

  if (slug.length === 2) {
    // category + slug
    apiUrl = `blogs/${slug[0]}/${slug[1]}`;
  } else if (slug.length === 1) {
    // slug only
    apiUrl = `blogs/${slug[0]}`;
  }

  const singleBlog = await api.get(apiUrl);
  const data = singleBlog?.data?.data || {};

  return {
    props: {
      items: data,
    },
  };
};
// export const getServerSideProps = async ({ query: { slug } }) => {
//   const singleBlog = await api.get("blogs/" + slug[0] + "/" + slug[1]);
//   const data = singleBlog?.data?.data || {};
//   return {
//     props: {
//       items: data,
//     },
//   };
// };
