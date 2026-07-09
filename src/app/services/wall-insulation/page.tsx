// ThermoShield Insulation — Wall Insulation Service Page
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

export default function WallInsulationPage() {
  const expectations = [
    { icon: faSearch, title: "Wall Access Plan", description: "We plan fill points to minimize cosmetic impact and maximize cavity fill." },
    { icon: faFileContract, title: "Clear Scope & Price", description: "Written quote covering material, labor, and patch/finish expectations." },
    { icon: faCheckCircle, title: "Dense, Even Fill", description: "Professional dense-pack technique to reduce voids and settling." },
    { icon: faShieldHalved, title: "Finish-Conscious Work", description: "Siding and interiors protected; patching coordinated for a clean result." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Minimal Disruption", description: "Most wall jobs avoid gut renovations — we work through strategic access points." },
    { icon: faWrench, title: "Older Home Specialists", description: "1970s–1990s construction is common in our market — we know typical assemblies." },
    { icon: faShieldHalved, title: "BPI-Aligned Installers", description: "Proper density and moisture awareness on every wall project." },
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
    { town: "Hewitt",       benefit: "Full Wall Insulation coverage throughout Hewitt.", badge: "" },
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
    { question: "Can you insulate walls without removing drywall?", answer: "Often yes — dense-pack methods can fill cavities through small exterior or interior access points. Suitability depends on wall construction." },
    { question: "Will wall insulation reduce noise?", answer: "Yes — dense cellulose typically improves sound dampening between outdoors and living spaces." },
    { question: "How long does wall insulation take?", answer: "Many single-story homes finish in one to two days depending on wall count and access." },
    { question: "Is wall insulation worth it in Texas?", answer: "If walls are empty or poorly filled, you often see more even room temperatures and lower drafts — especially on sun-facing walls." },
    { question: "Do you patch siding or drywall?", answer: "We discuss finish scope upfront and leave access points ready for paint or siding touch-up as agreed." },
    { question: "Can walls be insulated from the attic or crawl?", answer: "Some assemblies allow alternative access — we evaluate on site." },
  ];
  const crossServices = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Pair walls with proper attic R-value.", link: "/services/attic-insulation" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Same material family for attic top-ups.", link: "/services/blown-in-cellulose" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Stop leakage at top plates and penetrations.", link: "/services/air-sealing" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Confirm walls are the right priority first.", link: "/services/energy-audits" },
  ];
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Wall Insulation" },
      ]} />
      <SectionIntro title="Wall Insulation in Waco, TX" subtitle="Dense-pack cellulose and cavity fills for exterior walls — quieter rooms, fewer drafts, better comfort without a full remodel." />
      <TrustBar headline="Dense-pack wall insulation for older Central Texas homes" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Wall Insulation" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why ThermoShield for Wall Insulation" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/wall-insulation" title="Serving All of Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Wall Insulation FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Insulation Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request a Free Wall Insulation Quote" cityName="Waco" slug="services/wall-insulation" spot="wall-insulation-form" formVariant={2} /></div>
      <CTABanner headline="Drafty Walls? Thin Exterior Cavities?" subline="Dense-pack wall insulation with careful finish work and flat-rate quotes." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}