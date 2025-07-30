import React from "react";
import Link from "next/link";
import data from "../../utils/conditionsWeTreat.json";

const BlogSidebar = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="department-item">
          <h3>Rao K. Ali M.D.</h3>
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
            <h3>Conditions We Treat</h3>
            <ul>
              {data.map((item, i) => {
                return (
                  <li style={{ display: "block" }} key={i}>
                    <Link href={item.href} rel="preload">
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
