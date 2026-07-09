// ThermoShield Insulation — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "ThermoShield Insulation was founded in Waco by Brooke Lang, a Waco native and lead insulation specialist with 14+ years in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every installer on our team is background-checked, BPI-aligned, and bonded & insured. We treat every attic and living space with the same respect we'd want for our own families.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't sell spray foam when a cellulose top-up will solve the problem. We won't bury air leaks under new material. Our reputation is built on straight talk.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3200, label: "Homes insulated across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm an assessment or install slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Assess Honestly", description: "A BPI-aligned specialist measures existing R-value and air leaks — and explains options in plain English.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality materials, clean workmanship, Comfort & Efficiency Guarantee · 5-Year Workmanship.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About ThermoShield Insulation"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2012. Attic · Wall · Spray Foam Insulation — honest work at fair prices for the families and businesses we've called neighbors for 14 years."
      />

      <TrustBar headline="3,200+ Central Texas homes insulated — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="14 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Insulation Company — Ready When You Need Us"
        subline="Same-week installs. Flat-rate pricing. Comfort & Efficiency Guarantee · 5-Year Workmanship. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12548505050"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
