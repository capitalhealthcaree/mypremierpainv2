import React, { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../utils/api";

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
    { url: "/conditions-we-treat/hip-pain", name: "Hip Pain" },
  ],
};

const BlogSidebar = () => {
  const [list, setList] = useState([]);

  async function fetchData() {
    const res = await api.get("/blogs/getLastFive");
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
      <div className="blog-details-item">
        {/* <div className="blog-details-recent">
          <h3>Recent Blogs</h3>
          <ul>
            {list.map((item, i) => {
              return (
                <li key={i}>
                  <img src={item.image} alt={item.category} />
                  <Link href={`/blog${item.slug}`} rel="preload">{item.seoTitle[0]}</Link>
                  <ul>
                    <li>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        {item.category}
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div> */}

        <div className="department-item">
          <h3>Dr. Rao K. Ali M.D.</h3>
          <p>
            Dr. Rao Ali, a board-certified pain management physician, leads the
            clinic, which specializes in nonsurgical treatment. The physician
            has experience in the emergency room as well as training in pain
            management and rehabilitation. As a personal physician, he works
            with each patient to develop a treatment plan that will minimize or
            eliminate their pain. Providing expert diagnosis and treatment of a
            wide range of conditions, Pain Management In Dallas, PA provides a
            comprehensive range of services. These services include neck pain,
            back pain, hip and knee pain, fibromyalgia, neuropathy, complex
            regional pain syndrome, headaches, migraines, and many others.
          </p>
        </div>
        <div className="blog-details-item">
          <div className="blog-details-tags">
            <h3>{conditionsWeTreat.heaging}</h3>
            <ul>
              {conditionsWeTreat.treatment.map((item, i) => {
                return (
                  <li style={{ display: "block" }} key={i}>
                    <Link href={item.url} rel="preload">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
