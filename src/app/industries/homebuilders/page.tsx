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
  faHardHat, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faHouseChimney, faSprayCan, faShieldHalved, faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function HomebuildersIndustryPage() {
  const painPoints = [
    { icon: faCalendarAlt, problem: "Insulation misses the close date", consequence: "Late attic or wall work delays CO, walkthroughs, and final draws — costing reputation with buyers and lenders." },
    { icon: faFileInvoiceDollar, problem: "Change orders on insulation packages", consequence: "Unclear specs and last-minute upgrades create budget fights with owners and GCs." },
    { icon: faUsers, problem: "Inconsistent installer quality across lots", consequence: "Different crews leave different depths, sealing quality, and documentation." },
    { icon: faHardHat, problem: "No coordination with other trades", consequence: "HVAC, electricians, and drywall get blocked when insulation isn't sequenced." },
    { icon: faClipboardList, problem: "Warranty callbacks after close", consequence: "Hot rooms and high bills show up after the buyer moves in — reflecting on the builder." },
    { icon: faHandshake, problem: "Vendors who only do one-off service calls", consequence: "Service companies don't understand production home schedules or multi-lot coordination." },
  ];

  const whyFeatures = [
    { icon: faHardHat, title: "Builder Production Rhythm", description: "We schedule attic and wall installs around dry-in, HVAC, and final so your calendar stays intact." },
    { icon: faFileInvoiceDollar, title: "Package Pricing by Plan", description: "Standard insulation packages per floor plan with clear upgrade paths for buyers." },
    { icon: faUsers, title: "Consistent Crew Quality", description: "Same trained installers, same documentation — every lot, every phase." },
  ];

  const processSteps = [
    { number: 1, title: "Plan Spec Review", description: "We align attic R-value, wall fills, and air sealing packages to your plans.", icon: faSearch },
    { number: 2, title: "Phase Schedule", description: "Install windows tied to your production calendar and close dates.", icon: faCalendarAlt },
    { number: 3, title: "Install & Punch", description: "Insulation installed, sealing complete, punch list cleared.", icon: faRocket },
    { number: 4, title: "Warranty Support", description: "Post-close support so callbacks don't land on your superintendents.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 350, label: "Builder lots completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 12, label: "Active builder relationships", suffix: "+", duration: 2 },
    { icon: faClock, value: 14, label: "Years installing for Central Texas builders", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Production schedule alignment", us: "✅ Per phase", others: "❌ Service-call only" },
    { feature: "Plan-based package pricing", us: "✅ Standard + upgrades", others: "❌ Re-quoted each lot" },
    { feature: "Consistent installer teams", us: "✅ Same crews", others: "❌ Day labor variance" },
    { feature: "Post-close warranty support", us: "✅ Included", others: "❌ Buyer left alone" },
    { feature: "BPI-aligned installers", us: "✅ Always", others: "❌ Mixed" },
  ];

  const faq = [
    { question: "Do you work with production and custom homebuilders?", answer: "Yes — production homes, semi-custom, and remodelers across McLennan and Bell counties." },
    { question: "Can you match insulation packages to specific floor plans?", answer: "Yes. We build standard packages per plan with optional buyer upgrades." },
    { question: "How do you handle punch lists before close?", answer: "We schedule a punch pass with your super and clear depth, sealing, and access issues before final walkthrough." },
    { question: "Do you install spray foam and cellulose for builders?", answer: "Yes — cellulose, spray foam, wall dense-pack, and air sealing packages as specified." },
    { question: "What areas do you cover for builders?", answer: "Waco metro, Temple, Killeen, and surrounding Central Texas communities within about 60 miles." },
  ];

  const services = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Plan-matched attic R-value on schedule.", link: "/services/attic-insulation" },
    { icon: faSprayCan, title: "Spray Foam", body: "High-performance packages where specified.", link: "/services/spray-foam" },
    { icon: faWind, title: "Blown-In Cellulose", body: "Fast, even coverage for production homes.", link: "/services/blown-in-cellulose" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Critical sealing before drywall closes.", link: "/services/air-sealing" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Core production and custom build market.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Active subdivision growth corridor.", badge: "" },
    { town: "Woodway", benefit: "Custom and premium residential builds.", badge: "" },
    { town: "Temple", benefit: "Bell County production homes.", badge: "" },
    { town: "China Spring", benefit: "Rural custom homes and shops.", badge: "" },
    { town: "Killeen", benefit: "Military-market new construction.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Homebuilders" }]} />
      <SectionIntro title="Insulation for Homebuilders" subtitle="Production-ready attic, wall, and air sealing packages that hit close dates — consistent crews, plan pricing, post-close support." />
      <TrustBar headline="Builders across Central Texas trust ThermoShield for lot-by-lot installs" />
      <div className={styles.section}><IndustryPainPoints industry="homebuilder" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Builders" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Builders Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/homebuilders" title="Builder Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Homebuilder FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Builder Package Quote" cityName="Waco" slug="industries/homebuilders" spot="homebuilders-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need an Insulation Partner Who Hits Close Dates?" subline="Plan packages. Consistent crews. Post-close support." primaryText="Call (254) 850-5050" primaryLink="tel:+12548505050" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
