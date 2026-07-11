// ThermoShield Insulation — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHouseChimney, faSprayCan, faWind, faLayerGroup, faShieldHalved, faClipboardCheck,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faHouseChimney,
      title: "Attic Insulation",
      body: "Top-ups and full attic installs to the R-value Texas heat demands — blown-in cellulose, fiberglass, or hybrid packages sized for your home.",
      link: "/services/attic-insulation",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faSprayCan,
      title: "Spray Foam",
      body: "Open- and closed-cell spray foam for attics, crawlspaces, and rim joists — air seal and insulate in one high-performance system.",
      link: "/services/spray-foam",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faWind,
      title: "Blown-In Cellulose",
      body: "Dense, even coverage that settles into gaps and around framing — fire-resistant, sound-dampening, and ideal for Central Texas attics.",
      link: "/services/blown-in-cellulose",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faLayerGroup,
      title: "Wall Insulation",
      body: "Dense-pack cellulose and cavity fills for exterior walls — quieter rooms, fewer drafts, and better comfort without a full remodel.",
      link: "/services/wall-insulation",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faShieldHalved,
      title: "Air Sealing",
      body: "Seal attic penetrations, can lights, top plates, and ducts so conditioned air stays inside and dust stays out.",
      link: "/services/air-sealing",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faClipboardCheck,
      title: "Energy Audits",
      body: "Walk-through assessments, thermal imaging, and prioritized recommendations so you invest where it actually pays back.",
      link: "/services/energy-audits",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3200, label: "Homes insulated across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,   label: "Years of local insulation experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we load a hose or open a bag. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "BPI-Aligned Installers",
      description: "Every installer is BPI-aligned, bonded, and insured. No unlicensed freelancers working alone in your attic.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2012",
      description: "We're not a franchise. ThermoShield Insulation was founded in Waco by Brooke Lang. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm an inspection or install slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess On-Site",
      description: "A BPI-aligned specialist measures existing R-value, air leaks, and access — and explains options in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Guaranteed",
      description: "Quality materials, clean workmanship, Comfort & Efficiency Guarantee · 5-Year Workmanship. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Home Assessment",
      description: "We diagnose what's actually limiting comfort — not what's most profitable to sell. You see the findings before we quote.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, living spaces protected, attic access cleaned up. Your home left the way we found it — only more efficient.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Right Material, Right Depth",
      description: "Cellulose, spray foam, or hybrid systems installed to target R-value and sealed for Texas heat and humidity.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does insulation cost in Waco?",
      answer: "Most attic top-ups range from a few hundred to a few thousand dollars depending on square footage and target R-value. Full spray foam and wall dense-pack projects vary more widely. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day assessments?",
      answer: "Yes — same-day or next-day assessments are often available during the week. Call us at (254) 850-5050 and we'll get you on the calendar.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Many attic cellulose jobs are scheduled within a few days. Spray foam and wall insulation depend on access, weather, and material lead times — typically within 1–2 weeks.",
    },
    {
      question: "What insulation services do you offer?",
      answer: "Attic insulation, spray foam, blown-in cellulose, wall insulation, air sealing, and energy audits for homes and light commercial buildings.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — ThermoShield Insulation is bonded and insured with BPI-aligned installers. Credentials available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — Comfort & Efficiency Guarantee plus 5-Year Workmanship covering labor and installation defects on every install we perform.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted insulation company — BPI-aligned, insured, and guaranteed on every job"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Insulation Services for Your Home"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes ThermoShield Insulation Different"
        />
      </div>
      <CTABanner
        headline="Comfort Starts in the Attic."
        subline="Blown-in, batts, and air sealing that cut drafts and energy bills — measured, not guessed."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Free Attic Eval"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Project, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Insulation Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
