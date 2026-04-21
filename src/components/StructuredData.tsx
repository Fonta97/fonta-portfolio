import { faqs, projects, services, siteConfig } from "@/lib/site-data";

export function StructuredData() {
  const serviceList = services.map((service) => service.title.en);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Alessandro Fontana",
        alternateName: "Alessandro Fontana",
        jobTitle: "Freelance Full Stack Developer",
        description:
          "Freelance full stack developer in Italy specializing in web development, WordPress, React, backend systems, e-commerce, AI automations, and AI engineering. Head of Software Development and AI Integrations at Hulk International Broker since 2026.",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IT",
          addressRegion: "Piedmont",
        },
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.instagram],
        knowsAbout: [
          "Full stack development",
          "React development",
          "Next.js",
          "WordPress development",
          "PHP",
          "Laravel",
          ".NET",
          "Angular",
          "Node.js",
          "AI automation",
          "AI engineering",
          "E-commerce development",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: "Alessandro Fontana - Freelance Full Stack Developer",
        url: siteConfig.url,
        image: `${siteConfig.url}/assets/alessandro-fonta.jpg`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: ["Italy", "Europe", "Remote"],
        serviceType: serviceList,
        founder: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: "Alessandro Fontana Portfolio",
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#selected-work`,
        name: "Selected development projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/work/${project.slug}`,
          name: project.title.en,
          description: project.short.en,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.en,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.en,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
