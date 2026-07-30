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
