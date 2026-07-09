'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Materials & Systems We Install',
    items: [
      { name: 'Blown-In Cellulose', type: 'brand', icon: '🏠' },
      { name: 'Open-Cell Spray Foam', type: 'brand', icon: '🏠' },
      { name: 'Closed-Cell Spray Foam', type: 'brand', icon: '🏠' },
      { name: 'Fiberglass Batts', type: 'brand', icon: '🏠' },
      { name: 'Dense-Pack Walls', type: 'brand', icon: '🏠' },
      { name: 'Air Sealing Systems', type: 'brand', icon: '🏠' },
      { name: 'Radiant Barriers', type: 'brand', icon: '🏠' },
      { name: 'Attic Baffles & Vents', type: 'brand', icon: '🏠' },
    ],
  },
  {
    label: 'Certifications & Credentials',
    items: [
      { name: 'BPI-Aligned Installers', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured', type: 'cert', icon: '✓' },
      { name: '5-Year Workmanship', type: 'cert', icon: '✓' },
      { name: 'Comfort & Efficiency Guarantee', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Attic Insulation', type: 'tool', icon: '🔧' },
      { name: 'Spray Foam', type: 'tool', icon: '🔧' },
      { name: 'Wall Insulation', type: 'tool', icon: '🔧' },
      { name: 'Air Sealing', type: 'tool', icon: '🔧' },
      { name: 'Energy Audits', type: 'tool', icon: '🔧' },
      { name: 'Commercial Insulation', type: 'tool', icon: '🔧' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Quality Materials, Proven Methods',
  subtitle = 'We install cellulose, spray foam, and hybrid systems — BPI-aligned crews, no shortcuts on prep or depth.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item} data-type={item.type}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
