import Head from "next/head";
import React from "react";

const PageSEO = ({ title, canonicalTag, metatitleTag, metaDes }) => {
  const maintitle = `CW Suite | ${title}`;
  const titleTag = `${maintitle}`
  const metaDescription = `${metaDes}`
  const metaKeywords = "cw suite,retail saas platform, POS, inventory management, purchase management, sales management, finance management, HRMS, low-code app builder"
  const robotsMetaTags = "index, follow"
  const ogUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`
  const ogTitle = "Retail SaaS Platform for POS, Inventory Management, Sales Management, and More |  CW Suite LLC"
  const ogDescription = "Streamline your retail operations with our SaaS platform that includes POS, Inventory Management, Purchase Management, Sales Management, Finance Management, HRMS, and Low-Code App Builder. Start your free trial today!"
  const ogImageUrl = ""
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CW Suite LLC",
    "url": `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    "sameAs": [
      "https://www.facebook.com/cwsuite",
      "https://twitter.com/cwsuite",
      "https://www.linkedin.com/showcase/cwsuite"
    ],
    "logo": "https://www.example.com/cw-suite-logo.png",
    "description": "Retail SaaS platform, POS, Inventory Management, Purchase Management, Sales Management, Finance Management, HRMS, Low-Code App Builder",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_FRONTEND_URL}`
    }
  };
  return (
    <>
      {title && (
        <Head>
          <title>{titleTag}</title>
          <meta name="title" content={titleTag} />
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={ogUrl} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content={`CW Suite — ${title}`} />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />

          <meta name="robots" content={robotsMetaTags} />
          <link rel="canonical" href={canonicalTag} />

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
