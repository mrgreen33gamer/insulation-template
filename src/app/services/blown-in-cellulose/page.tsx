// ThermoShield Insulation — Blown-In Cellulose Service Page
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

export default function BlownInCellulosePage() {

  const expectations = [
    { icon: faSearch, title: "Depth Mapping", description: "We measure existing levels and map low spots so new material fills gaps evenly." },
    { icon: faFileContract, title: "Square-Footage Pricing", description: "Transparent flat-rate based on area and target R-value." },
    { icon: faCheckCircle, title: "Even Blow Pattern", description: "Professional hose technique for consistent depth — not piles and valleys." },
    { icon: faShieldHalved, title: "Guaranteed Workmanship", description: "Comfort & Efficiency Guarantee · 5-Year Workmanship on every cellulose install." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Often One-Day Jobs", description: "Most residential attics finish the same day we start." },
    { icon: faWrench, title: "Settles Into Gaps", description: "Cellulose flows around wires and framing better than many batts." },
    { icon: faShieldHalved, title: "Fire-Resistant Treatment", description: "Standard cellulose is treated for fire resistance and pest resistance." },
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
    { town: "Hewitt",       benefit: "Full Blown-In Cellulose coverage throughout Hewitt.", badge: "" },
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
    { question: "Is cellulose better than fiberglass batts?", answer: "For many attics, blown cellulose provides more complete coverage and better air resistance than poorly fitted batts. We will recommend based on your attic layout." },
    { question: "Does cellulose settle over time?", answer: "Quality installs account for settled density. We install to the settled R-value target, not just a temporary fluff height." },
    { question: "Is cellulose dusty?", answer: "We contain work to the attic when possible and clean living spaces. Some fine dust is normal during install and settles quickly." },
    { question: "Can you blow over existing fiberglass?", answer: "Often yes, if the existing layer is dry and intact. We check first and top-up to target depth." },
    { question: "How long does cellulose last?", answer: "Properly installed cellulose can perform for decades when kept dry and pest-free." },
    { question: "Do you install cellulose in walls too?", answer: "Yes — dense-pack wall insulation is available under our Wall Insulation service." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "Attic Insulation", body: "Full attic packages and R-value planning.", link: "/services/attic-insulation" },
    { icon: faSprayCan, title: "Spray Foam", body: "When air sealing performance is the priority.", link: "/services/spray-foam" },
    { icon: faLayerGroup, title: "Wall Insulation", body: "Dense-pack cellulose for exterior walls.", link: "/services/wall-insulation" },
    { icon: faShieldHalved, title: "Air Sealing", body: "Seal first so cellulose performs better.", link: "/services/air-sealing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Blown-In Cellulose" },
      ]} />

      <SectionIntro
        title="Blown-In Cellulose in Waco, TX"
        subtitle="Dense, even attic coverage that settles into gaps and around framing — fire-resistant, sound-dampening, and ideal for Central Texas."
      />

      <TrustBar headline="Even cellulose coverage to the R-value Texas heat demands" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Blown-In Cellulose" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Cellulose from ThermoShield" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/blown-in-cellulose" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Blown-In Cellulose FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Insulation Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Blown-In Cellulose Quote" cityName="Waco" slug="services/blown-in-cellulose" spot="blown-in-cellulose-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Even Attic Coverage Without Breaking the Budget?"
        subline="Blown-in cellulose installed to target depth — flat-rate, clean, guaranteed."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}