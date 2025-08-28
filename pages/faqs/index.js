import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import api from "../../utils/api";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Home/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const FAQ = ({ item }) => {
  return (
    <>
      <Head>
        <title>FAQs | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/faqs/`}
        />
        <meta
          name="description"
          content="Premier Pain Centers offers personalized treatment solutions, featuring Radiofrequency Ablation, Epidural Injections and more, all tailored to your unique needs"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="faqs"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734993310/nki1i4qfto5vje4y7gqu.webp"
      />
      <div className="symptoms-area pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="symptoms-content">
                {item.length === 0 ? (
                  <p className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Loading FAQs...
                    </div>
                  </p>
                ) : (
                  <ul>
                    {item.map((q, i) => (
                      <li key={i}>
                        <Link href={`/faqs${q.slug}`} rel="preload">
                          <span>
                            <i className="icofont-caret-right"></i>
                            {q.question}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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

export default FAQ;

export const getServerSideProps = async () => {
  const faqs = await api.get("faq/getAll/");
  const data = await faqs.data.data;

  return {
    props: {
      item: data,
    },
  };
};
