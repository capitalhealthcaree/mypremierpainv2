import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const Footer = dynamic(() => import("../components/_App/Footer"));

const About = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/privacy-policy/`}
        />
        <meta
          name="description"
          content="Learn how Premier Pain Centers collects, uses, and protects your personal and medical information. Read our privacy policy for details on data security, cookies, and your rights."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Privacy and Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="privacy-policy"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990262/ohwiyyqlry8hulxms1la.webp"
      />

      <div className="about-area pt-5">
        <div className="container">
          <div>
            <p>
              At Premier Pain Centers, we value your privacy and are committed
              to safeguarding the personal information you share with us. This
              Privacy Policy outlines how we collect, use, protect, and disclose
              your information when you visit our website, make an appointment,
              or interact with our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you visit our website or communicate with us, we may collect
              personal information such as:
            </p>
            <ul>
              <li>
                <strong>Personal Details:</strong> Name, phone number, email
                address, and other contact information you provide.
              </li>
              <li>
                <strong>Medical Information:</strong> Details about your health,
                treatment history, and medical conditions that you voluntarily
                share with us during your visit to the clinic.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you interact
                with our website, including IP addresses, browser type, and
                access times. This helps us improve your online experience.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>
                To schedule and manage appointments at our various clinic
                locations.
              </li>
              <li>
                To provide you with healthcare services tailored to your needs.
              </li>
              <li>
                To communicate with you regarding your treatment, appointments,
                and other clinic-related matters.
              </li>
              <li>
                To improve our website and services, ensuring that we provide a
                user-friendly experience.
              </li>
              <li>
                To send promotional offers, health tips, or newsletters, if you
                have opted in to receive them.
              </li>
            </ul>

            <h2>3. Protection of Your Information</h2>
            <p>
              At Premier Pain Centers, we implement industry-standard security
              measures to protect your personal data from unauthorized access,
              alteration, or destruction. We use encryption, firewalls, and
              secure servers to safeguard your information.
            </p>

            <h2>4. Sharing of Your Information</h2>
            <p>
              We respect your privacy and do not share your personal information
              with third parties without your consent, except in the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Medical Providers:</strong> We may share relevant
                information with healthcare providers involved in your care.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law, we may
                disclose your personal information in response to a subpoena or
                other legal process.
              </li>
              <li>
                <strong>Service Providers:</strong> We may engage third-party
                companies to help with website hosting, appointment scheduling,
                or other services. These providers will only have access to the
                necessary information to perform their tasks.
              </li>
            </ul>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and other tracking technologies to
              enhance your user experience. Cookies are small data files stored
              on your device that help us analyze web traffic, personalize
              content, and improve the functionality of our site. You can choose
              to disable cookies through your browser settings, but doing so may
              affect certain features of the website.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information stored with us. You may also opt out of receiving
              promotional emails at any time by following the unsubscribe link
              provided in each email.
            </p>
            <p>
              If you have any questions or concerns about your privacy or how
              your information is handled, please contact us at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:admin@mypremierpain.com">
                  admin@mypremierpain.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+14695624188">469-562-4188</a>
              </li>
            </ul>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, services, or legal requirements. We
              encourage you to review this policy periodically to stay informed
              about how we are protecting your information.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
