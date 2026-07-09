// Insulation Hero — Thermal Envelope Cross-Section
// Animated wall/attic R-value cutaway — distinct from construction site plan.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ThermalEnvelope({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));
    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 300;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.18 + i * 0.045}s`;
      window.setTimeout(() => {
        el.style.strokeDashoffset = '0';
      }, 2100 + i * 40);
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <div className={styles.rBadge} aria-hidden="true">
        R-49 ATTIC
      </div>
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 380 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer house silhouette */}
        <path
          data-draw
          d="M40 300 L40 150 L190 55 L340 150 L340 300 Z"
          className={styles.traceMain}
        />
        {/* Roof planes */}
        <path data-draw d="M40 150 L190 55 L340 150" className={styles.traceAccent} />
        <line data-draw x1="190" y1="55" x2="190" y2="120" className={styles.traceDim} />

        {/* Attic cavity */}
        <path
          data-draw
          d="M70 155 L190 80 L310 155 L310 175 L70 175 Z"
          className={styles.traceDim}
        />
        {/* Batt insulation squiggles in attic */}
        <path
          data-draw
          d="M85 165 Q105 155 125 165 T165 165 T205 165 T245 165 T285 165"
          className={styles.traceAccent}
        />
        <path
          data-draw
          d="M90 172 Q110 162 130 172 T170 172 T210 172 T250 172 T290 172"
          className={styles.traceAccent}
        />

        {/* Wall stud bay with insulation fill */}
        <rect data-draw x="55" y="185" width="50" height="100" className={styles.traceMain} />
        <line data-draw x1="68" y1="185" x2="68" y2="285" className={styles.traceDim} />
        <line data-draw x1="80" y1="185" x2="80" y2="285" className={styles.traceDim} />
        <line data-draw x1="92" y1="185" x2="92" y2="285" className={styles.traceDim} />
        {/* Horizontal batt waves in studs */}
        <path data-draw d="M58 200 Q80 192 102 200" className={styles.traceAccent} />
        <path data-draw d="M58 220 Q80 212 102 220" className={styles.traceAccent} />
        <path data-draw d="M58 240 Q80 232 102 240" className={styles.traceAccent} />
        <path data-draw d="M58 260 Q80 252 102 260" className={styles.traceAccent} />

        {/* Right wall spray foam texture */}
        <rect data-draw x="275" y="185" width="50" height="100" className={styles.traceMain} />
        <path data-draw d="M280 195 Q300 200 320 195" className={styles.traceAccent} />
        <path data-draw d="M282 215 Q300 210 318 215" className={styles.traceAccent} />
        <path data-draw d="M280 235 Q300 240 320 235" className={styles.traceAccent} />
        <path data-draw d="M282 255 Q300 250 318 255" className={styles.traceAccent} />
        <path data-draw d="M280 272 Q300 277 320 272" className={styles.traceAccent} />

        {/* Floor / ceiling joists */}
        <line data-draw x1="55" y1="185" x2="325" y2="185" className={styles.traceMain} />
        <line data-draw x1="120" y1="185" x2="120" y2="175" className={styles.traceDim} />
        <line data-draw x1="160" y1="185" x2="160" y2="175" className={styles.traceDim} />
        <line data-draw x1="200" y1="185" x2="200" y2="175" className={styles.traceDim} />
        <line data-draw x1="240" y1="185" x2="240" y2="175" className={styles.traceDim} />

        {/* Heat arrows (winter heat loss before / retention after metaphor) */}
        <path data-draw d="M190 300 L190 290" className={styles.traceDim} />
        <path data-draw d="M160 40 L160 70" className={styles.traceDim} />
        <path data-draw d="M220 40 L220 70" className={styles.traceDim} />

        {/* Callout brackets */}
        <path data-draw d="M115 210 L130 210 L130 250 L115 250" className={styles.traceAccent} />
        <path data-draw d="M265 210 L250 210 L250 250 L265 250" className={styles.traceAccent} />

        <circle cx="190" cy="55" r="4" className={styles.nodeAccent} />
        <circle cx="80" cy="230" r="3.5" className={styles.node} />
        <circle cx="300" cy="230" r="3.5" className={styles.node} />
        <circle cx="190" cy="165" r="3.5" className={styles.nodeAccent} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        THERMAL ENVELOPE
      </div>
      <div className={styles.layerLegend} aria-hidden="true">
        <span><i className={styles.legBatt} /> Batt</span>
        <span><i className={styles.legFoam} /> Spray foam</span>
        <span><i className={styles.legAir} /> Air seal</span>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Insulation Pros — Since 2012";
  const headlineLines = ['Cooler Homes.', 'Lower Bills.'];
  const headlineAccent = 'ThermoShield Insulation.';
  const subheadline =
    'Attic · Wall · Spray Foam Insulation. Flat-rate pricing. Clean installs. Comfort & Efficiency Guarantee · 5-Year Workmanship. Serving Waco and Central Texas with BPI-aligned installers.';
  const primaryCta = { label: 'Call (254) 850-5050', href: 'tel:+12548505050' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Same-Day Assess', 'No Contracts', 'BPI-Aligned', 'Since 2012', '5-Year Workmanship'];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <ThermalEnvelope label="ThermoShield thermal envelope schematic" />
        </motion.div>
      </div>
    </section>
  );
}
