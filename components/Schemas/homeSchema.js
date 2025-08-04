import Head from "next/head";

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.mypremierpain.com/#organization",
    name: "Premier Pain Centers",
    url: "https://www.mypremierpain.com/",
    logo: "https://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png",
    image:
      "https://res.cloudinary.com/dngmflrpx/image/upload/v1735855964/poslbei33bnv2atikdo5.png",
    description:
      "Premier Pain Centers offers expert pain management and interventional treatments across Dallas–Fort Worth Metroplex including Richardson, Fort Worth, Plano, and more.",
    telephone: "+1-469-562-4188",
    email: "admin@mypremierpain.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2071 N Collins Blvd",
      addressLocality: "Richardson",
      addressRegion: "TX",
      postalCode: "75080",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.986099,
      longitude: -96.725456,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    medicalSpecialty: ["PainManagement", "Anesthesiology"],
    sameAs: [
      "https://g.co/kgs/rmWT4zK",
      "https://www.facebook.com/mypremierpain",
      "https://www.linkedin.com/in/premier-pain-centers-08582018a/",
      "https://www.instagram.com/premier_pain_centers/",
      "https://www.pinterest.com/premierpaincenters/",
    ],
    areaServed: [
      { "@type": "Place", name: "Richardson" },
      { "@type": "Place", name: "North Richland Hills" },
      { "@type": "Place", name: "Fort Worth" },
      { "@type": "Place", name: "Desoto" },
      { "@type": "Place", name: "Hillsboro" },
      { "@type": "Place", name: "Waxahachie" },
      { "@type": "Place", name: "Corsicana" },
      { "@type": "Place", name: "Decatur" },
      { "@type": "Place", name: "Cleburne" },
      { "@type": "Place", name: "Plano" },
      { "@type": "Place", name: "Ennis" },
      { "@type": "Place", name: "Mesquite" },
      { "@type": "Place", name: "Gun Barrel City" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-469-562-4188",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
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
