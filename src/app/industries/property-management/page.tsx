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
  faBuilding, faClipboardList, faKey,
  faRocket, faTrophy, faChartLine, faClock,
  faHouseChimney, faShieldHalved, faWind, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {
  const painPoints = [
    { icon: faKey, problem: "Tenant comfort complaints after turnover", consequence: "Hot upstairs units and high utility bills tank renewals and generate maintenance tickets." },
    { icon: faCalendarAlt, problem: "Slow vendor response between leases", consequence: "Empty units sit longer when insulation fixes wait weeks for a free slot." },
    { icon: faFileInvoiceDollar, problem: "Unpredictable repair invoices", consequence: "Hourly vendors blow make-ready budgets with no flat-rate clarity." },
    { icon: faUsers, problem: "Different quality unit to unit", consequence: "One contractor leaves uneven attic depth; the next leaves a mess for the cleaners." },
    { icon: faClipboardList, problem: "No documentation for ownership", consequence: "Owners want proof of work and R-value targets — not a vague invoice line." },
    { icon: faBuilding, problem: "Multi-building scheduling chaos", consequence: "Portfolio managers need one partner who can batch properties efficiently." },
  ];

  const whyFeatures = [
    { icon: faBuilding, title: "Portfolio-Friendly Scheduling", description: "Batch make-ready units and buildings so your leasing calendar stays on track." },
    { icon: faFileInvoiceDollar, title: "Flat-Rate Unit Packages", description: "Predictable pricing for common attic top-ups and sealing scopes." },
    { icon: faUsers, title: "Consistent Crews", description: "Same standards every unit — depth, sealing, and cleanup documented." },
  ];

  const processSteps = [
    { number: 1, title: "Unit Scope Intake", description: "Share addresses, access notes, and comfort complaints — we propose a flat-rate package.", icon: faSearch },
    { number: 2, title: "Schedule Window", description: "We align with turnover dates and key access so units aren't idle.", icon: faCalendarAlt },
    { number: 3, title: "Install & Clean", description: "Insulation and sealing completed with living spaces protected.", icon: faRocket },
    { number: 4, title: "Report & Warranty", description: "Work summary for ownership files plus 5-year workmanship coverage.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 400, label: "Rental units improved", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25, label: "Property groups served", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years serving Central Texas managers", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Flat-rate unit packages", us: "✅ Standard scopes", others: "❌ Open-ended hourly" },
    { feature: "Turnover-aware scheduling", us: "✅ Lease-aligned", others: "❌ First-come queue" },
    { feature: "Multi-site batching", us: "✅ Portfolio ready", others: "❌ One house at a time" },
    { feature: "Owner documentation", us: "✅ Work summary", others: "❌ Invoice only" },
    { feature: "BPI-aligned installers", us: "✅ Always", others: "❌ Mixed" },
  ];

  const faq = [
    { question: "Do you work with multi-family and single-family rentals?", answer: "Yes — duplexes, apartment buildings, and SFR portfolios across Central Texas." },
    { question: "Can you prioritize units between leases?", answer: "Yes. Tell us turnover dates and we schedule make-ready insulation work in that window when possible." },
    { question: "Do you offer volume pricing?", answer: "We can package multi-unit scopes with consistent unit pricing. Contact us for portfolio rates." },
    { question: "What documentation do owners receive?", answer: "Scope completed, materials used, and warranty terms — suitable for ownership files." },
    { question: "Which cities do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, and surrounding communities." },
  ];

  const services = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Fast top-ups for hot upstairs units.", link: "/services/attic-insulation" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Cut dust and leakage between floors.", link: "/services/air-sealing" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Even attic coverage on a budget.", link: "/services/blown-in-cellulose" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Prioritize the worst-performing buildings.", link: "/services/energy-audits" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Largest multi-family and SFR portfolio base.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Suburban rentals and small complexes.", badge: "" },
    { town: "Woodway", benefit: "Premium rental and HOA properties.", badge: "" },
    { town: "Temple", benefit: "Bell County multi-family coverage.", badge: "" },
    { town: "Bellmead", benefit: "Affordable housing and duplex stock.", badge: "" },
    { town: "Killeen", benefit: "High-turnover military rental market.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Insulation for Property Management" subtitle="Turnover-ready attic and unit insulation fixes — flat-rate packages, fast scheduling, consistent quality across your portfolio." />
      <TrustBar headline="Property managers across Central Texas trust ThermoShield between leases" />
      <div className={styles.section}><IndustryPainPoints industry="property-management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Managers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="Portfolio Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Portfolio Quote" cityName="Waco" slug="industries/property-management" spot="property-management-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Make-Ready Insulation Without the Runaround?" subline="Flat-rate unit packages. Fast turnover windows. Clear documentation." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
