export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "Wewolk.tech",
    url: "https://wewolk.tech",
    logo: "https://wewolk.tech/favicon.png",

    image: "https://wewolk.tech/og-image.png",

    telephone: "+62-878-8724-6199",

    email: "hello@wewolk.tech",

    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },

    sameAs: [
      "https://github.com/wewolk-tech",
      "https://instagram.com/wewolk.tech",
    ],

    areaServed: "Indonesia",

    priceRange: "$$",

    description:
      "Software House Indonesia yang menyediakan jasa pembuatan website, aplikasi mobile, dashboard, API, UI/UX, dan custom software.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}