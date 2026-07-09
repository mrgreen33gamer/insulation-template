# Insulation Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `insulation-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | ThermoShield Insulation |
| **Tagline** | Attic · Wall · Spray Foam Insulation |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2012 |
| **Owner** | Brooke Lang |
| **License** | BPI-Aligned Installers · Bonded & Insured |
| **Guarantee** | Comfort & Efficiency Guarantee · 5-Year Workmanship |
| **Social proof** | 4.9★, 600+ reviews, 3,200+ homes insulated |
| **Accent hex** | `#4f46e5` (indigo) — `$orange` token |
| **Phone** | (254) 850-5050 / `tel:+12548505050` |
| **Email** | hello@thermoshieldinsulation.com |
| **Domain** | thermoshieldinsulation.com |
| **Address** | 2201 S Valley Mills Dr, Waco, TX 76706 |

## Services (6)

| Old HVAC | Slug | Title |
|----------|------|--------|
| ac-repair | `attic-insulation` | Attic Insulation |
| heating | `spray-foam` | Spray Foam |
| installation | `blown-in-cellulose` | Blown-In Cellulose |
| duct-cleaning | `wall-insulation` | Wall Insulation |
| indoor-air-quality | `air-sealing` | Air Sealing |
| maintenance | `energy-audits` | Energy Audits |

## Industries (3)

| Old HVAC | Slug | Title |
|----------|------|--------|
| automotive | `homebuilders` | Homebuilders |
| manufacturing | `property-management` | Property Management |
| oil-gas | `commercial-buildings` | Commercial Buildings |

## Blogs (3)

1. `attic-insulation-r-value-texas`
2. `spray-foam-vs-blown-in`
3. `signs-you-need-more-insulation`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #4f46e5`, `$lightorange: #6366f1`, `$darkorange: #3730a3`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles, admin charts → `#4f46e5`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: ThermoShield Insulation throughout
