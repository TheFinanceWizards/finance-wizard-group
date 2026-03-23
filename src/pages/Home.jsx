import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import PainPoints from "../components/home/PainPoints";
import ValuePillars from "../components/home/ValuePillars";
import PlatformTools from "../components/home/PlatformTools";
import Testimonials from "../components/home/Testimonials";
import ApplicationSection from "../components/home/ApplicationSection";
import Footer from "../components/home/Footer";

const HOME_JSONLD = [
  // Organization — tells Google who we are
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Finance Wizard Group",
    "alternateName": "Finance Wizard Group",
    "url": "https://thefinancewizardgroup.com",
    "logo": "https://thefinancewizardgroup.com/images/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "recruitment",
      "email": "thefinancewizardgroup@gmail.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": []
  },
  // WebPage — describes this specific page
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Finance Wizard Group | Partner With Top Insurance Agency",
    "description": "Join The Finance Wizard Group — industry-leading commission rates, direct-to-carrier access, and full ownership of your residuals. Apply now to scale your insurance practice.",
    "url": "https://thefinancewizardgroup.com",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "The Finance Wizard Group",
      "url": "https://thefinancewizardgroup.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thefinancewizardgroup.com" }
      ]
    }
  },
  // FAQPage — targets "insurance agency" question searches
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What commission rates does The Finance Wizard Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 80–100% commission rates vested from day one, with the ability to negotiate higher rates as you build your book of business."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be a licensed insurance agent to apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Finance Wizard Group partnership is open to licensed life and variable insurance professionals only."
        }
      },
      {
        "@type": "Question",
        "name": "What support does The Finance Wizard Group provide to agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide in-house dialers and leads, an underwriting team, paid advertising campaigns, organic content systems, personal brand development, and access to our recorded mastermind sessions."
        }
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Partner With Top Insurance Agency"
        description="Join The Finance Wizard Group — 80–100% commission rates vested day one, direct-to-carrier access, in-house leads & underwriting, and a brand-scaling engine built for insurance professionals ready to grow."
        canonical="https://thefinancewizardgroup.com"
        jsonLd={HOME_JSONLD}
      />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <PainPoints />
      <ValuePillars />
      <PlatformTools />
      <Testimonials />
      <ApplicationSection />
      <Footer />
    </div>
  );
}