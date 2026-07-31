export const company = {
  name: 'KB Projects',
  phone: '082 860 7831',
  phoneHref: '+27828607831',
  email: 'kbprojectskzn@gmail.com',
  area: 'KwaZulu-Natal (KZN)',
  tagline: 'We build more than structures, we build trust.',
  subTagline: 'Quality workmanship. Reliable service. Exceptional results.',
}

export type SiteStat = {
  value: number
  suffix: string
  label: string
}

export const siteStats: SiteStat[] = [
  { value: 8, suffix: '', label: 'Core Service Categories' },
  { value: 100, suffix: '%', label: 'Free, No-Obligation Quotes' },
  { value: 1, suffix: '', label: 'Team, Endless Solutions' },
  { value: 0, suffix: '', label: 'Hidden Fees — Ever' },
]

export type ServiceCategory = {
  slug: string
  name: string
  shortDescription: string
  description: string
  items: string[]
  image: string
}

export const services: ServiceCategory[] = [
  {
    slug: 'glass-aluminium',
    name: 'Glass & Aluminium',
    shortDescription: 'Fast glass replacement and custom aluminium windows & doors.',
    description:
      'From same-day glass replacement to fully custom aluminium windows and doors, manufactured proudly in South Africa and built to last.',
    items: [
      'Same-day glass replacement for most repairs',
      'Tophung, side-hung & corner windows',
      'Entrance doors, sliding doors & folding doors',
      'Burglar bars & enclosures',
      'Shopfronts & stackdoors',
    ],
    image: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg',
  },
  {
    slug: 'shower-solutions',
    name: 'Shower Solutions',
    shortDescription: 'Frameless showers and custom shower designs.',
    description:
      'Professional shower solutions custom-tailored to suit your style and needs, from sleek frameless glass to fully bespoke designs.',
    items: ['Frameless showers', 'Custom shower designs tailored to your bathroom'],
    image: '/images/showers/bathroom-shower-vanity.jpg',
  },
  {
    slug: 'security-gates',
    name: 'Security Gates & Trellis Gates',
    shortDescription: 'Trellis gates, slamlock, burglar guards & custom gates.',
    description:
      'Durable security solutions to protect your home or business, from retractable trellis gates to fully custom security gates.',
    items: ['Trellis gates', 'Slamlock', 'Burglar guards', 'Custom gates'],
    image: '/images/security-gates/trellis-gate-patio.jpg',
  },
  {
    slug: 'building-renovations',
    name: 'Building Renovations & Extensions',
    shortDescription: 'House renovations, extensions & new builds.',
    description:
      'Transforming spaces and building better futures — from modern updates to seamless extensions, we bring your vision to life with quality workmanship and attention to detail.',
    items: [
      'House renovations',
      'Home extensions',
      'Kitchen & bathroom upgrades',
      'Structural alterations',
      'New builds, concept to completion',
    ],
    image: '/images/renovations/house-under-construction.jpg',
  },
  {
    slug: 'tiling-paving-flooring',
    name: 'Tiling, Paving & Flooring',
    shortDescription: 'Tiles, pavers, laminated flooring & more.',
    description:
      'Quality tiling, paving and flooring installations that finish your space with precision and durability.',
    items: ['Tiles', 'Pavers', 'Laminated flooring & more'],
    image: '/images/bathrooms/bathroom-after.jpg',
  },
  {
    slug: 'painting',
    name: 'Painting & Finishing',
    shortDescription: 'Interior & exterior painting for a perfect finish.',
    description: 'Quality finishes that last, inside and out.',
    items: ['Interior painting', 'Exterior painting'],
    image: '/images/misc/finishing-cleaning.jpg',
  },
  {
    slug: 'roofing',
    name: 'Roofing & Repairs',
    shortDescription: 'New roofs, roof repairs & leak repairs.',
    description: 'Reliable roofing work from small leak repairs to full new roof installations.',
    items: ['New roofs', 'Roof repairs', 'Leak repairs & more'],
    image: '/images/roofing/team-on-roof.jpg',
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    shortDescription: 'Installations, repairs & maintenance.',
    description: 'Complete plumbing services including water tank installations, repairs, and ongoing maintenance.',
    items: ['Installations', 'Repairs', 'Maintenance', 'JoJo tank installations'],
    image: '/images/plumbing/jojo-tank-installed.jpg',
  },
]

export const sellingPoints = [
  'Same-day service for most repairs',
  'Experienced & certified technicians',
  'Affordable rates, no hidden fees',
  'High-quality materials',
  'Free quotes',
  'One-stop solution for all building & renovation needs',
  'Proudly manufacturing aluminium products in South Africa',
]

export type ResourceCategory = {
  title: string
  links: { label: string; to: string }[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: 'Homeowners',
    links: [
      { label: 'Request a Free Quote', to: '/contact' },
      { label: 'Browse Our Services', to: '/services' },
      { label: 'View Before & After Gallery', to: '/gallery' },
      { label: 'Glass & Aluminium Solutions', to: '/services#glass-aluminium' },
    ],
  },
  {
    title: 'Businesses & Shopfronts',
    links: [
      { label: 'Same-Day Shopfront Glass Repairs', to: '/services#glass-aluminium' },
      { label: 'Security Gates & Trellis Gates', to: '/services#security-gates' },
      { label: 'Request a Free Quote', to: '/contact' },
    ],
  },
  {
    title: 'Property Managers',
    links: [
      { label: 'Building Renovations & Extensions', to: '/services#building-renovations' },
      { label: 'Roofing & Repairs', to: '/services#roofing' },
      { label: 'Plumbing Installations & Repairs', to: '/services#plumbing' },
    ],
  },
  {
    title: 'New Builds',
    links: [
      { label: 'Concept to Completion', to: '/services#building-renovations' },
      { label: 'Tiling, Paving & Flooring', to: '/services#tiling-paving-flooring' },
      { label: 'Painting & Finishing', to: '/services#painting' },
    ],
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes. Every quote is free and no-obligation, whether it’s a small glass repair or a full renovation. Contact us and we’ll arrange a site visit or callout as needed.',
  },
  {
    question: 'What areas do you service?',
    answer: `We proudly service ${company.area} and surrounding areas.`,
  },
  {
    question: 'How quickly can you fix a broken window or shopfront?',
    answer:
      'Most glass and shopfront repairs are handled the same day you call, so you can get back to business or feel secure at home as quickly as possible.',
  },
  {
    question: 'Can KB Projects manage a full renovation from start to finish?',
    answer:
      'Yes. From concept and design through structural work, finishes, and final handover, our team manages the whole build so you don’t need to juggle multiple contractors.',
  },
  {
    question: 'Are your aluminium products manufactured locally?',
    answer:
      'Yes, our aluminium windows, doors, and enclosures are proudly manufactured in South Africa and built to last.',
  },
  {
    question: 'Do you charge hidden fees?',
    answer:
      'No. We believe in honest, upfront pricing — the quote you receive is the price you pay, with no hidden fees.',
  },
]

export type Product = {
  slug: string
  name: string
  category: string
  description: string
  features: string[]
  image: string
}

export const products: Product[] = [
  {
    slug: 'aluminium-windows',
    name: 'Aluminium Windows',
    category: 'Glass & Aluminium',
    description: 'Custom aluminium windows manufactured in South Africa, built for durability and a clean modern finish.',
    features: ['Tophung windows', 'Side-hung windows', 'Corner windows', 'Custom sizes to order'],
    image: '/images/glass-aluminium/windows/tophung-window-brick.jpg',
  },
  {
    slug: 'aluminium-doors',
    name: 'Aluminium Doors',
    category: 'Glass & Aluminium',
    description: 'Sliding, folding and entrance doors that open up your living and entertainment spaces.',
    features: ['Bifold/stacking doors', 'Sliding doors', 'Entrance doors', 'Smooth-glide hardware'],
    image: '/images/glass-aluminium/doors-enclosures/bifold-doors-patio.jpg',
  },
  {
    slug: 'shopfronts-stackdoors',
    name: 'Shopfronts & Stackdoors',
    category: 'Glass & Aluminium',
    description: 'Same-day glass replacement and custom shopfront glazing to keep your business open and secure.',
    features: ['Same-day repairs', 'Shopfront glazing', 'Stackdoors', 'Safety glass options'],
    image: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg',
  },
  {
    slug: 'frameless-showers',
    name: 'Frameless Showers',
    category: 'Shower Solutions',
    description: 'Sleek frameless glass shower enclosures custom-tailored to your bathroom.',
    features: ['Frameless glass panels', 'Custom shower designs', 'Toughened safety glass', 'Made to measure'],
    image: '/images/showers/frameless-shower-bedroom.jpg',
  },
  {
    slug: 'trellis-security-gates',
    name: 'Trellis & Security Gates',
    category: 'Security Gates',
    description: 'Durable trellis and security gates to protect your home or business without compromising on style.',
    features: ['Retractable trellis gates', 'Slamlock', 'Burglar guards', 'Custom gate designs'],
    image: '/images/security-gates/trellis-gate-patio.jpg',
  },
  {
    slug: 'burglar-bars-enclosures',
    name: 'Burglar Bars & Enclosures',
    category: 'Glass & Aluminium',
    description: 'Aluminium enclosures and burglar bars that add security and living space, sea views included.',
    features: ['Balcony enclosures', 'Sunroom enclosures', 'Burglar bars', 'Corrosion-resistant finish'],
    image: '/images/glass-aluminium/doors-enclosures/enclosure-sea-view.jpg',
  },
]

export type Project = {
  slug: string
  title: string
  category: string
  location: string
  description: string
  image: string
  secondImage?: string
}

export const projects: Project[] = [
  {
    slug: 'sea-view-glass-enclosure',
    title: 'Sea View Glass Enclosure',
    category: 'Glass & Aluminium',
    location: 'Coastal KZN',
    description:
      'A full aluminium and glass enclosure added to an existing patio, opening up uninterrupted sea views while keeping the space usable in any weather.',
    image: '/images/glass-aluminium/doors-enclosures/enclosure-sea-view.jpg',
  },
  {
    slug: 'full-bathroom-renovation',
    title: 'Full Bathroom Renovation',
    category: 'Building Renovations',
    location: 'KwaZulu-Natal',
    description:
      'A dated bathroom stripped back and rebuilt with new tiling, a corner bath, vanity, and finishes from concept to completion.',
    image: '/images/bathrooms/bathroom-before.jpg',
    secondImage: '/images/bathrooms/bathroom-after.jpg',
  },
  {
    slug: 'shopfront-glass-replacement',
    title: 'Shopfront Glass Replacement',
    category: 'Glass & Aluminium',
    location: 'KZN Retail Centre',
    description:
      'Emergency same-day glass replacement for a busy retail shopfront, minimising downtime and keeping the store secure and trading.',
    image: '/images/glass-aluminium/shopfronts/shopfront-before-broken.jpg',
    secondImage: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg',
  },
  {
    slug: 'double-storey-renovation',
    title: 'Double-Storey Renovation',
    category: 'Building Renovations',
    location: 'KwaZulu-Natal',
    description:
      'A ground-up double-storey renovation and extension, managed from structural work through to final finishes by one team.',
    image: '/images/renovations/house-under-construction.jpg',
  },
  {
    slug: 'patio-security-upgrade',
    title: 'Patio Security Upgrade',
    category: 'Security Gates',
    location: 'KwaZulu-Natal',
    description:
      'Custom trellis security gates installed across a home patio, adding protection without blocking light or airflow.',
    image: '/images/security-gates/trellis-gate-patio.jpg',
  },
  {
    slug: 'water-tank-installation',
    title: 'JoJo Water Tank Installation',
    category: 'Plumbing',
    location: 'KwaZulu-Natal',
    description:
      'Supply and installation of a JoJo water tank with full plumbing connections for reliable backup water storage.',
    image: '/images/plumbing/jojo-tank-installed.jpg',
    secondImage: '/images/plumbing/tank-delivery-truck.jpg',
  },
]

export type GalleryImage = {
  src: string
  category: string
  label: string
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/glass-aluminium/shopfronts/shopfront-before-broken.jpg', category: 'Glass & Aluminium', label: 'Shopfront — Before' },
  { src: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg', category: 'Glass & Aluminium', label: 'Shopfront — After' },
  { src: '/images/glass-aluminium/shopfronts/pep-cell-storefront-1.jpg', category: 'Glass & Aluminium', label: 'Storefront Glazing' },
  { src: '/images/glass-aluminium/shopfronts/pep-storefront-2.jpg', category: 'Glass & Aluminium', label: 'Storefront Glazing' },
  { src: '/images/glass-aluminium/windows/house-windows-after.jpg', category: 'Glass & Aluminium', label: 'Windows — After' },
  { src: '/images/glass-aluminium/windows/window-before-bars.jpg', category: 'Glass & Aluminium', label: 'Window — Before' },
  { src: '/images/glass-aluminium/windows/tophung-window-brick.jpg', category: 'Glass & Aluminium', label: 'Tophung Window' },
  { src: '/images/glass-aluminium/windows/apartment-windows-1.jpg', category: 'Glass & Aluminium', label: 'Apartment Windows' },
  { src: '/images/glass-aluminium/windows/apartment-windows-2.jpg', category: 'Glass & Aluminium', label: 'Apartment Windows' },
  { src: '/images/glass-aluminium/windows/balcony-glass-enclosure.jpg', category: 'Glass & Aluminium', label: 'Balcony Enclosure' },
  { src: '/images/glass-aluminium/doors-enclosures/sunroom-enclosure.jpg', category: 'Glass & Aluminium', label: 'Sunroom Enclosure' },
  { src: '/images/glass-aluminium/doors-enclosures/bifold-doors-pool.jpg', category: 'Glass & Aluminium', label: 'Bifold Doors' },
  { src: '/images/glass-aluminium/doors-enclosures/bifold-doors-patio.jpg', category: 'Glass & Aluminium', label: 'Bifold Doors — After' },
  { src: '/images/glass-aluminium/doors-enclosures/enclosure-sea-view.jpg', category: 'Glass & Aluminium', label: 'Sea View Enclosure' },
  { src: '/images/glass-aluminium/doors-enclosures/bifold-doors-dining-deck.jpg', category: 'Glass & Aluminium', label: 'Dining Deck Doors' },
  { src: '/images/security-gates/trellis-gate-patio.jpg', category: 'Security Gates', label: 'Trellis Gate' },
  { src: '/images/security-gates/trellis-door-closeup.jpg', category: 'Security Gates', label: 'Trellis Door' },
  { src: '/images/security-gates/trellis-gate-corridor.jpg', category: 'Security Gates', label: 'Trellis Gate' },
  { src: '/images/showers/frameless-shower-bedroom.jpg', category: 'Shower Solutions', label: 'Frameless Shower' },
  { src: '/images/showers/bathroom-shower-vanity.jpg', category: 'Shower Solutions', label: 'Shower & Vanity' },
  { src: '/images/bathrooms/bathroom-before.jpg', category: 'Bathrooms', label: 'Bathroom — Before' },
  { src: '/images/bathrooms/bathroom-after.jpg', category: 'Bathrooms', label: 'Bathroom — After' },
  { src: '/images/renovations/house-under-construction.jpg', category: 'Renovations', label: 'Under Construction' },
  { src: '/images/renovations/house-exterior-white.jpg', category: 'Renovations', label: 'Exterior Renovation' },
  { src: '/images/renovations/garage-roller-doors.jpg', category: 'Renovations', label: 'Garage Roller Doors' },
  { src: '/images/renovations/storage-units.jpg', category: 'Renovations', label: 'Storage Units' },
  { src: '/images/plumbing/jojo-tank-installed.jpg', category: 'Plumbing', label: 'JoJo Tank Installed' },
  { src: '/images/plumbing/tank-delivery-truck.jpg', category: 'Plumbing', label: 'Tank Delivery' },
  { src: '/images/roofing/team-on-roof.jpg', category: 'Roofing', label: 'Roofing Team' },
]
