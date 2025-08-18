import Head from "next/head";

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Rao K. Ali",
    description:
      "Dr. Rao K. Ali is a double board-certified pain physician in Dallas, TX. He specializes in minimally invasive treatments for chronic pain, back and neck pain, joint pain, nerve pain, and TMS psychiatric services.",
    image:
      "https://www.mypremierpain.com/images/rao-k-ali-md-pain-doctor-in-dallas.webp",
    url: "https://www.mypremierpain.com/pain-doctor-in-dallas/",
    medicalSpecialty: [
      "Pain Medicine",
      "Interventional Pain Management",
      "Physical Medicine and Rehabilitation",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "2071 N Collins Blvd",
        addressLocality: "Richardson",
        addressRegion: "TX",
        postalCode: "75080",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "7304 NE Loop 820, Ste. C",
        addressLocality: "North Richland Hills",
        addressRegion: "TX",
        postalCode: "76180",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1111 5th Ave",
        addressLocality: "Fort Worth",
        addressRegion: "TX",
        postalCode: "76104",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "281 N Interstate 35 E Rd",
        addressLocality: "Desoto",
        addressRegion: "TX",
        postalCode: "75115",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "207 I-35",
        addressLocality: "Hillsboro",
        addressRegion: "TX",
        postalCode: "76645",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "20 Northgate Dr",
        addressLocality: "Waxahachie",
        addressRegion: "TX",
        postalCode: "75165",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "3108 E. State HWY 22",
        addressLocality: "Corsicana",
        addressRegion: "TX",
        postalCode: "75102",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "902 Preskitt Rd, Suite 300",
        addressLocality: "Decatur",
        addressRegion: "TX",
        postalCode: "76234",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "131 S Westmeadow Dr",
        addressLocality: "Cleburne",
        addressRegion: "TX",
        postalCode: "76033",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "7712 San Jacinto Place Suite 300",
        addressLocality: "Plano",
        addressRegion: "TX",
        postalCode: "75024",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2200 Physicians Boulevard, Suite B1",
        addressLocality: "Ennis",
        addressRegion: "TX",
        postalCode: "75119",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "200 W Kearney St",
        addressLocality: "Mesquite",
        addressRegion: "TX",
        postalCode: "75149",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "519 N Gun Barrel Ln Suite A",
        addressLocality: "Gun Barrel City",
        addressRegion: "TX",
        postalCode: "75156",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "874 Ed Hall Dr., Suite 110",
        addressLocality: "Kaufman",
        addressRegion: "TX",
        postalCode: "75142",
        addressCountry: "US",
      },
    ],
    areaServed: { "@type": "Place", name: "Dallas, TX" },
    telephone: "‪+1-469-562-4188‬",
    sameAs: ["https://maps.app.goo.gl/feUizj7UBMni1oJ49"],
    review: [
      {
        "@type": "Review",
        author: "Barbi K.",
        datePublished: "2024-01-15",
        reviewBody:
          "Dr. Ali is an amazing doctor! He takes time talking with me about my pain and is extremely genuine about my care. I feel very secure in the help that I receive.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: "Hikimi K.",
        datePublished: "2024-02-10",
        reviewBody:
          "Dr. Ali is a complete doctor who cares about his patients and has helped me so much, understanding my pain and recommending care without overusing medications.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: "Nancy M.",
        datePublished: "2024-03-05",
        reviewBody:
          "Dr. Ali has been a godsend for me. He significantly reduced my pain and helped me decrease my medication use, giving me better quality of life.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: "Jessica H.",
        datePublished: "2024-04-12",
        reviewBody:
          "Dr. Ali helped me with my back pain through injections and medications. I feel a lot better now and would recommend him to everyone.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: "Raelyn H.",
        datePublished: "2024-05-08",
        reviewBody:
          "Been a patient for several years. Dr. Ali's knowledge and professionalism have provided me relief. His staff is friendly and helpful.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default StructuredData;
