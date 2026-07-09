// ThermoShield Insulation — Industries Index
"use client";

import styles from "./page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";

import { faHardHat, faBuilding, faCity } from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const industries = [
    {
      icon: faHardHat,
      title: "Homebuilders",
      body: "Production and custom home insulation packages that hit close dates — consistent crews, plan pricing, post-close support.",
      link: "/industries/homebuilders",
    },
    {
      icon: faBuilding,
      title: "Property Management",
      body: "Turnover-ready attic and unit insulation fixes for multi-family and rental portfolios across Central Texas.",
      link: "/industries/property-management",
    },
    {
      icon: faCity,
      title: "Commercial Buildings",
      body: "Offices, warehouses, and light commercial — spray foam, cellulose, and air sealing coordinated with your GC schedule.",
      link: "/industries/commercial-buildings",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Insulation for Builders, Property Managers & Commercial"
        subtitle="ThermoShield partners with homebuilders, property managers, and commercial teams across Waco and Central Texas."
      />
      <TrustBar headline="BPI-aligned installers · Flat-rate packages · 5-Year Workmanship" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Industries We Serve" cards={industries} />
      </div>
      <CTABanner
        headline="Need an Insulation Partner for Your Next Project?"
        subline="Call (254) 850-5050 or request a package quote online."
        primaryText="Call (254) 850-5050"
        primaryLink="tel:+12548505050"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
