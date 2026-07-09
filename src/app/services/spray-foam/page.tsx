// ThermoShield Insulation — Spray Foam Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faHouseChimney, faSprayCan, faWind,
  faLayerGroup, faClipboardCheck, faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function SprayFoamPage() {

  const expectations = [
    { icon: faSearch, title: "Foam Type Match", description: "We recommend open- or closed-cell based on space, moisture risk, and budget — not a blanket upsell." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Coverage area, thickness, and prep clearly priced before we spray." },
    { icon: faCheckCircle, title: "Protected Work Areas", description: "Floors, fixtures, and finishes masked. We clean as we go." },
    { icon: faShieldHalved, title: "5-Year Workmanship", description: "Install quality backed in writing — Comfort & Efficiency Guarantee included." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Coordinated Scheduling", description: "We plan around weather, HVAC access, and your occupancy for a smooth install day." },
    { icon: faWrench, title: "Attic, Crawl & Rim Joists", description: "Residential and light commercial applications done by trained crews." },
    { icon: faShieldHalved, title: "BPI-Aligned Process", description: "Proper prep, thickness checks, and safety practices on every job." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule an assessment or install that fits your timeline.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "We measure existing insulation, air leaks, and access — then explain options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Install & Guarantee", description: "Installed to target performance, cleaned up, and backed by our Comfort & Efficiency Guarantee · 5-Year Workmanship.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3200, label: "Homes insulated across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full Spray Foam coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular service for Woodway homes and businesses.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-week availability.", badge: "" },
    { town: "Temple",       benefit: "Full insulation service for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Comfort & Efficiency Guarantee · 5-Year Workmanship", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "BPI-aligned installers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Honest material recommendations", us: "✅ Right product for the job", others: "❌ One-size upsell" },
    { feature: "Clean job sites", us: "✅ Drop cloths & cleanup", others: "❌ Mess left behind" },
  ];

  const faq = [
    { question: "Open-cell or closed-cell — which do I need?", answer: "Open-cell is often used for attics where vapor control is managed separately. Closed-cell adds higher R-value per inch and a moisture barrier. We recommend based on your structure." },
    { question: "How much does spray foam cost in Waco?", answer: "Spray foam typically costs more per square foot than blown cellulose but can reduce air leakage significantly. We provide flat-rate quotes after measuring the space." },
    { question: "Is spray foam safe for occupied homes?", answer: "We follow manufacturer re-entry guidelines and ventilate properly. Most homes are ready for normal use after the recommended wait period." },
    { question: "Can spray foam go over existing insulation?", answer: "Sometimes — it depends on condition and assembly. We assess on site and will not spray over wet or contaminated material." },
    { question: "Do you foam rim joists and crawlspaces?", answer: "Yes — rim joists, crawlspaces, and sealed attic assemblies are common projects." },
    { question: "Is spray foam better than cellulose?", answer: "It depends on goals. Foam excels at air sealing; cellulose is cost-effective for bulk attic R-value. Many homes use both strategically." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Bulk R-value for Texas attics.", link: "/services/attic-insulation" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Budget-friendly attic depth and coverage.", link: "/services/blown-in-cellulose" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Complement foam with targeted sealing.", link: "/services/air-sealing" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Prioritize where foam pays back fastest.", link: "/services/energy-audits" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Spray Foam" },
      ]} />

      <SectionIntro
        title="Spray Foam in Waco, TX"
        subtitle="Open- and closed-cell spray foam for attics, crawlspaces, and rim joists — air seal and insulate in one high-performance system."
      />

      <TrustBar headline="BPI-aligned spray foam crews trusted across Central Texas" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Spray Foam" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose ThermoShield for Spray Foam" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/spray-foam" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Spray Foam FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Insulation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Spray Foam Quote" cityName="Waco" slug="services/spray-foam" spot="spray-foam-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Want True Air Sealing + Insulation?"
        subline="Open- and closed-cell spray foam with flat-rate quotes and 5-year workmanship."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}