// ThermoShield Insulation — Air Sealing Service Page
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

export default function AirSealingPage() {
  const expectations = [
    { icon: faSearch, title: "Leak Prioritization", description: "We find the biggest leaks first — attic floor, can lights, chases, and duct boots." },
    { icon: faFileContract, title: "Scoped Flat Rate", description: "You approve a clear package of sealing work before we start." },
    { icon: faCheckCircle, title: "Proper Materials", description: "Fire-safe foams, caulks, and gaskets matched to each penetration type." },
    { icon: faShieldHalved, title: "Better Insulation Performance", description: "Sealing first multiplies the value of new attic or wall insulation." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Often Same-Day", description: "Many sealing packages complete in a single visit." },
    { icon: faWrench, title: "Comfort & Air Quality", description: "Less attic air mixing means less dust and more stable temperatures." },
    { icon: faShieldHalved, title: "BPI-Aligned Methods", description: "We follow building science best practices for safety and effectiveness." },
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
    { town: "Hewitt",       benefit: "Full Air Sealing coverage throughout Hewitt.", badge: "" },
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
    { question: "Is air sealing different from insulation?", answer: "Yes. Air sealing stops leakage paths. Insulation resists heat flow. You need both for best results." },
    { question: "Should I seal before adding insulation?", answer: "Usually yes — sealing first prevents burying leaks under new material and improves performance." },
    { question: "How do I know if I need air sealing?", answer: "High dust, attic smells in living spaces, uneven rooms, and high bills with thin attic coverage are common clues." },
    { question: "Do you seal recessed lights?", answer: "We evaluate fixture types and use code-appropriate covers or sealing methods." },
    { question: "Can air sealing help my AC run less?", answer: "Reducing leakage often lowers load so systems cycle less — results vary by home." },
    { question: "Is duct sealing included?", answer: "We can address accessible duct boots and connections as part of a sealing package." },
  ];
  const crossServices = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Add bulk R-value after sealing.", link: "/services/attic-insulation" },
    { icon: faSprayCan, title: "Spray Foam", body: "High-performance sealing and insulation combo.", link: "/services/spray-foam" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Even attic fill after leaks are closed.", link: "/services/blown-in-cellulose" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Document leaks and prioritize fixes.", link: "/services/energy-audits" },
  ];
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Air Sealing" },
      ]} />
      <SectionIntro title="Air Sealing in Waco, TX" subtitle="Seal attic penetrations, can lights, top plates, and ducts so conditioned air stays inside and dust stays out." />
      <TrustBar headline="Air sealing that makes insulation actually perform" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Air Sealing" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Air Sealing Matters First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/air-sealing" title="Serving All of Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Air Sealing FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Insulation Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request a Free Air Sealing Quote" cityName="Waco" slug="services/air-sealing" spot="air-sealing-form" formVariant={2} /></div>
      <CTABanner headline="Dusty Air, Drafts, or Leaky Attic?" subline="Targeted air sealing with flat-rate pricing and BPI-aligned specialists." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}