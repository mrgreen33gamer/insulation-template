"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faCity, faClipboardList, faIndustry,
  faRocket, faTrophy, faChartLine, faClock,
  faSprayCan, faHouseChimney, faShieldHalved, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialBuildingsIndustryPage() {
  const painPoints = [
    { icon: faIndustry, problem: "Uneven comfort across open floors", consequence: "Hot and cold zones reduce productivity and drive tenant complaints." },
    { icon: faCalendarAlt, problem: "Insulation blocks other trades", consequence: "Poor sequencing delays drywall, electrical, and final inspections." },
    { icon: faFileInvoiceDollar, problem: "Scope creep on commercial bids", consequence: "Vague allowances turn into change orders mid-project." },
    { icon: faUsers, problem: "Crews unfamiliar with commercial access", consequence: "After-hours rules, insurance requirements, and GC coordination get ignored." },
    { icon: faClipboardList, problem: "Inspection readiness gaps", consequence: "Missing documentation or incomplete assemblies hold up CO." },
    { icon: faCity, problem: "Energy costs on aging shells", consequence: "Warehouses and offices bleed conditioned air through uninsulated assemblies." },
  ];

  const whyFeatures = [
    { icon: faCity, title: "GC-Friendly Coordination", description: "We work within construction schedules, safety rules, and site logistics." },
    { icon: faFileInvoiceDollar, title: "Clear Commercial Scopes", description: "Written packages by area — attics, walls, rim joists, and sealing — no mystery allowances." },
    { icon: faUsers, title: "Insured Commercial Work", description: "Bonded, insured, BPI-aligned installers ready for jobsite requirements." },
  ];

  const processSteps = [
    { number: 1, title: "Plans & Walk", description: "Review drawings or walk the building to define assemblies and access.", icon: faSearch },
    { number: 2, title: "Schedule with GC", description: "Align install windows with other trades and inspections.", icon: faCalendarAlt },
    { number: 3, title: "Install & Document", description: "Material installed to spec with cleanup and progress notes.", icon: faRocket },
    { number: 4, title: "Closeout Support", description: "Punch and warranty support so projects finish clean.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 180, label: "Commercial projects completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 40, label: "Business clients served", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years of Central Texas commercial work", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "GC schedule coordination", us: "✅ Jobsite ready", others: "❌ Residential-only habits" },
    { feature: "Written commercial scopes", us: "✅ Area-based packages", others: "❌ Vague allowances" },
    { feature: "After-hours flexibility", us: "✅ When required", others: "❌ Daytime only" },
    { feature: "Insurance & documentation", us: "✅ Provided", others: "❌ Incomplete" },
    { feature: "BPI-aligned installers", us: "✅ Always", others: "❌ Mixed" },
  ];

  const faq = [
    { question: "What commercial building types do you serve?", answer: "Offices, warehouses, retail, light industrial, churches, and multi-unit commercial shells across Central Texas." },
    { question: "Can you work nights or weekends?", answer: "Yes when the project requires it — we plan access and safety with your GC or facilities team." },
    { question: "Do you install spray foam on commercial projects?", answer: "Yes — open- and closed-cell applications where appropriate, plus cellulose and air sealing." },
    { question: "Can you work from architectural specs?", answer: "Yes. Provide drawings and we will scope assemblies and submit a written package." },
    { question: "Do you carry commercial insurance?", answer: "Yes — bonded and insured. Certificates available on request." },
  ];

  const services = [
    { icon: faSprayCan, title: "Spray Foam", body: "High-performance commercial assemblies.", link: "/services/spray-foam" },
    { icon: faHouseChimney, title: "Attic Insulation", body: "Bulk R-value for office and retail shells.", link: "/services/attic-insulation" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Stop leakage at decks and penetrations.", link: "/services/air-sealing" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Prioritize upgrades on existing buildings.", link: "/services/energy-audits" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Core commercial and institutional market.", badge: "Home Base" },
    { town: "Temple", benefit: "Medical and office corridor work.", badge: "" },
    { town: "Killeen", benefit: "Retail and light industrial projects.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial shells.", badge: "" },
    { town: "Woodway", benefit: "Professional office buildings.", badge: "" },
    { town: "McGregor", benefit: "Industrial and warehouse properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Commercial Buildings" }]} />
      <SectionIntro title="Insulation for Commercial Buildings" subtitle="Offices, warehouses, and light commercial — spray foam, cellulose, and air sealing coordinated with your GC schedule." />
      <TrustBar headline="Commercial teams across Central Texas trust ThermoShield on the jobsite" />
      <div className={styles.section}><IndustryPainPoints industry="commercial" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Commercial Projects" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Commercial Teams Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/commercial-buildings" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Commercial Quote" cityName="Waco" slug="industries/commercial-buildings" spot="commercial-buildings-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Insulation That Keeps Pace with Your Build?" subline="Clear scopes. GC coordination. BPI-aligned crews." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
