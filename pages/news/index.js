import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const Footer = dynamic(() => import("../../components/_App/Footer"));

import styles from "../../styles/Home.module.css";
import api from "../../utils/api";

const News = ({ item, totalPage }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const loadMoreData = async (page) => {
    const posts = await api.get(`news/getAll/pagination?page=${page}&limit=9`);
    const data = await posts.data.data;
    const current = await posts.data.currentPage;
    setItems(data);
    setCurrentPage(current);
  };
  useEffect(() => {
    setItems(item);
    setCurrentPage(1);
  }, []);

  const listItems = [];
  for (let i = 1; i <= totalPage; i++) {
    listItems.push(
      <a
        key={i}
        onClick={() => loadMoreData(i)}
        className={`mb-2  ${currentPage === i ? styles.active : ""}`}
      >
        {i}
      </a>
    );
  }
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
        bgImage="/images/blog/blog-bg.webp"
      />

      {/* NewsGrid */}
      <div className="blog-area-two pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            {items.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={`/news/${item.slug}`} rel="preload">
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
                        <Link href={`/news/${item.slug}`} rel="preload">
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
                          <Link href={`/news/${item.slug}`} rel="preload">
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
          <div className={styles.center}>
            <div
              className={`${styles.pagination} ${styles.pagination1} ${styles.pagination3} ${styles.pagination4} ${styles.pagination6}`}
            >
              {listItems}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;

export const getServerSideProps = async () => {
  const blogs = await api.get("news/getAll/pagination?page=1&limit=9");
  const data = await blogs.data.data;
  const totalPage = await blogs.data.totalPages;

  return {
    props: {
      item: data,
      totalPage,
    },
  };
};
