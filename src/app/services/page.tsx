// ThermoShield Insulation — Services Index
"use client";

import styles from "./page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHouseChimney, faSprayCan, faWind, faLayerGroup, faShieldHalved, faClipboardCheck,
  faUsers, faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    { icon: faHouseChimney,  title: "Attic Insulation", body: "R-value top-ups and full attic installs sized for Texas heat — cellulose, fiberglass, or hybrid packages.", link: "/services/attic-insulation" },
    { icon: faSprayCan,      title: "Spray Foam", body: "Open- and closed-cell spray foam for attics, crawlspaces, and rim joists — air seal and insulate together.", link: "/services/spray-foam" },
    { icon: faWind,          title: "Blown-In Cellulose", body: "Dense, even attic coverage that settles into gaps — fire-resistant and sound-dampening.", link: "/services/blown-in-cellulose" },
    { icon: faLayerGroup,    title: "Wall Insulation", body: "Dense-pack cellulose for exterior walls — quieter rooms and fewer drafts without a full remodel.", link: "/services/wall-insulation" },
    { icon: faShieldHalved,  title: "Air Sealing", body: "Seal attic penetrations, can lights, top plates, and ducts so insulation can actually perform.", link: "/services/air-sealing" },
    { icon: faClipboardCheck, title: "Energy Audits", body: "Walk-through assessments and prioritized recommendations so you invest where it pays back.", link: "/services/energy-audits" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we load a hose or open a bag. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved, title: "BPI-Aligned Installers", description: "Every installer is BPI-aligned, bonded, and insured. No unlicensed freelancers in your attic." },
    { icon: faUsers, title: "Locally Owned Since 2012", description: "Founded in Waco by Brooke Lang. Every decision is made locally — not by a distant franchise office." },
    { icon: faStar, title: "Comfort & Efficiency Guarantee", description: "5-Year Workmanship on every install. If our work fails, we make it right." },
  ];

  const faq = [
    { question: "What insulation services do you offer?", answer: "Attic insulation, spray foam, blown-in cellulose, wall insulation, air sealing, and energy audits for residential and light commercial properties." },
    { question: "How much does insulation cost in Waco?", answer: "Most attic projects range from a few hundred to a few thousand dollars depending on size and target R-value. Spray foam and wall dense-pack vary more. We always quote flat-rate before work begins." },
    { question: "Do I need an energy audit first?", answer: "Not always — but audits help when comfort problems are unclear or you want a prioritized plan. Call (254) 850-5050 and we'll advise." },
    { question: "Are you bonded and insured?", answer: "Yes — ThermoShield Insulation is bonded and insured with BPI-aligned installers." },
    { question: "Do you offer a warranty?", answer: "Yes — Comfort & Efficiency Guarantee plus 5-Year Workmanship on installs we perform." },
    { question: "Which areas do you serve?", answer: "Waco, Hewitt, Woodway, Temple, Killeen, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Insulation Services in Waco & Central Texas"
        subtitle="Attic, spray foam, cellulose, walls, air sealing, and energy audits — done right, priced upfront, backed by a Comfort & Efficiency Guarantee · 5-Year Workmanship."
      />
      <TrustBar headline="BPI-aligned · Bonded & insured · 3,200+ homes insulated" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Our Insulation Services" cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose ThermoShield" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service Questions" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Free Insulation Quote" cityName="Waco" slug="services" spot="services-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Ready to Improve Comfort and Cut Energy Waste?"
        subline="Flat-rate quotes. BPI-aligned installers. Serving all of Central Texas."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
