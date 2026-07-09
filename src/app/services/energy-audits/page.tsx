// ThermoShield Insulation — Energy Audits Service Page
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

export default function EnergyAuditsPage() {
  const expectations = [
    { icon: faSearch, title: "Whole-Home Walkthrough", description: "We review attic, walls, ducts, and comfort complaints — not just one room." },
    { icon: faFileContract, title: "Prioritized Action List", description: "Highest ROI fixes first so you are not sold a package you do not need." },
    { icon: faCheckCircle, title: "Thermal Insights", description: "Where useful, we use thermal imaging to show heat loss and leakage patterns." },
    { icon: faShieldHalved, title: "No Obligation", description: "Audit recommendations stand on their own — hire us for the work or not." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Actionable Same Visit", description: "You leave with a clear plan, not a vague sales deck." },
    { icon: faWrench, title: "Installer Perspective", description: "Recommendations from people who actually install insulation every day." },
    { icon: faShieldHalved, title: "BPI-Aligned Thinking", description: "Building science first — comfort, safety, and efficiency together." },
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
    { town: "Hewitt",       benefit: "Full Energy Audits coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does an energy audit cost?", answer: "We offer flat-rate residential assessments. Pricing depends on home size and whether thermal imaging is included — quoted when you book." },
    { question: "Is an audit required before insulation work?", answer: "Not always, but it helps when comfort problems are unclear or budgets need prioritization." },
    { question: "Do you use a blower door?", answer: "We use appropriate diagnostics based on goals and home access. Ask when booking if you need specific testing." },
    { question: "Will you pressure me to buy?", answer: "No. Our reputation is built on honest recommendations — many clients start with sealing only." },
    { question: "How long does an audit take?", answer: "Most homes take 60–120 minutes depending on size and attic access." },
    { question: "Do you audit commercial buildings?", answer: "Yes — light commercial and multi-unit properties by appointment." },
  ];
  const crossServices = [
    { icon: faShieldHalved, title: "Air Sealing", body: "Usually the first high-ROI step.", link: "/services/air-sealing" },
    { icon: faHouseChimney, title: "Attic Insulation", body: "Bulk R-value when attics are underbuilt.", link: "/services/attic-insulation" },
    { icon: faSprayCan, title: "Spray Foam", body: "When assemblies need high-performance foam.", link: "/services/spray-foam" },
    { icon: faLayerGroup, title: "Wall Insulation", body: "For empty or under-filled exterior walls.", link: "/services/wall-insulation" },
  ];
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Energy Audits" },
      ]} />
      <SectionIntro title="Energy Audits in Waco, TX" subtitle="Walk-through assessments, thermal imaging, and prioritized recommendations so you invest where it actually pays back." />
      <TrustBar headline="Honest energy audits — no pressure sales pitches" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Energy Audits" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why ThermoShield Energy Audits" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/energy-audits" title="Serving All of Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Energy Audit FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Insulation Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request a Free Energy Audits Quote" cityName="Waco" slug="services/energy-audits" spot="energy-audits-form" formVariant={2} /></div>
      <CTABanner headline="Not Sure Where to Invest First?" subline="Flat-rate energy audits with clear priorities for Waco and Central Texas homes." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}