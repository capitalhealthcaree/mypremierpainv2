import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import api from "../../utils/api";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Home/AppointmentForm")
);
const Footer = dynamic(() => import("../../components/_App/Footer"));

const FaqDetail = ({ item }) => {
  return (
    <>
      <Head>
        <title>
          {item.seoTitle[0] ? item?.seoTitle[0] : "Latest Pain Management FAQs"}
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/faqs${item?.slug}`}
        />
        <meta name="description" content={item?.metaDes} />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="faqs"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734994849/blog/bnqhusic4ix7s1sw472c.webp"
      />

      {/* FAQ Detail Content  */}

      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <div className="faq-area-one pt-3 mb-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <Accordion allowZeroExpanded preExpanded={["a"]}>
                              <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                  <AccordionItemButton>
                                    {item.question}
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  <p
                                    style={{ color: "white" }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.answer,
                                    }}
                                  ></p>
                                </AccordionItemPanel>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppointmentForm />

      <Footer />
    </>
  );
};

export default FaqDetail;

export const getServerSideProps = async ({ query: { slug } }) => {
  const faqs = await api.get("faq/" + slug + "/");
  const data = await faqs.data.data;
  return {
    props: {
      item: data,
    },
  };
};
