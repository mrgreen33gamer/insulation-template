// ThermoShield Insulation — Attic Insulation Service Page
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

export default function AtticInsulationPage() {

  const expectations = [
    { icon: faSearch, title: "R-Value Assessment", description: "We measure existing depth and type, check baffles and ventilation, and tell you exactly what your attic needs." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start", description: "You get a written price before any material is blown. It does not change mid-job." },
    { icon: faCheckCircle, title: "Installed to Target Depth", description: "Even coverage to the R-value your home needs for Central Texas summers — not a thin cosmetic top-up." },
    { icon: faShieldHalved, title: "Comfort & Efficiency Guarantee · 5-Year Workmanship", description: "Every attic we insulate is backed by our workmanship warranty. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Scheduling", description: "Many attic jobs are assessed and scheduled within days — not weeks of waiting." },
    { icon: faWrench, title: "Right Material for the Job", description: "Cellulose, fiberglass, or hybrid packages — we recommend what fits your attic, not a one-size upsell." },
    { icon: faShieldHalved, title: "BPI-Aligned Installers", description: "Every crew is BPI-aligned, bonded, and insured. No freelancers working alone in your attic." },
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
    { town: "Hewitt",       benefit: "Full Attic Insulation coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does attic insulation cost in Waco?", answer: "Most attic top-ups and full installs range from a few hundred to a few thousand dollars depending on square footage, existing depth, and target R-value. We quote flat-rate on site." },
    { question: "What R-value do I need in Texas?", answer: "For Central Texas attics, many homes benefit from R-38 to R-60 depending on construction and goals. We measure what you have and recommend a practical target." },
    { question: "Do I need to remove old insulation first?", answer: "Not always. If existing material is dry, even, and free of contamination, a top-up is often enough. Wet, pest-damaged, or heavily compressed material may need removal." },
    { question: "How long does an attic job take?", answer: "Most residential attics are completed in a day. Larger or multi-story homes may take longer — we will set expectations during the quote." },
    { question: "Will insulation help with hot upstairs rooms?", answer: "Yes — inadequate attic insulation is one of the most common causes of hot second floors in Waco summers." },
    { question: "Do you service commercial properties?", answer: "Yes — light commercial and multi-unit properties are within our scope. Call to discuss your building and timeline." },
  ];

  const crossServices = [
    { icon: faSprayCan, title: "Spray Foam", body: "High-performance air seal and insulation for attics and rim joists.", link: "/services/spray-foam" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Dense, even attic coverage that settles into gaps.", link: "/services/blown-in-cellulose" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Seal penetrations so new insulation performs as designed.", link: "/services/air-sealing" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Find the highest-ROI upgrades before you invest.", link: "/services/energy-audits" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Attic Insulation" },
      ]} />

      <SectionIntro
        title="Attic Insulation in Waco, TX"
        subtitle="R-value top-ups and full attic installs sized for Texas heat — flat-rate pricing, BPI-aligned installers, Comfort & Efficiency Guarantee · 5-Year Workmanship."
      />

      <TrustBar headline="3,200+ Central Texas homeowners trust ThermoShield for attic insulation" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Attic Insulation" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ThermoShield First" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/attic-insulation" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Attic Insulation FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Insulation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Attic Insulation Quote" cityName="Waco" slug="services/attic-insulation" spot="attic-insulation-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Hot Upstairs? High Cooling Bills?"
        subline="Flat-rate attic insulation across Waco and Central Texas. BPI-aligned. Comfort & Efficiency Guarantee · 5-Year Workmanship."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}