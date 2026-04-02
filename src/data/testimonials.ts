import type { Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adebayo Okonkwo',
    role: 'CEO',
    company: 'Nexbridge Solutions',
    quote:
      'MetroBlue delivered our enterprise software on time and exceeded every benchmark we set. Their team understood our business before writing a single line of code.',
    rating: 5,
    avatarInitials: 'AO',
    avatarColour: 'bg-primary',
  },
  {
    id: 2,
    name: 'Chidinma Eze',
    role: 'Principal',
    company: 'Gracefield Academy, Abuja',
    quote:
      'Educesol transformed how we run our school. Result processing that used to take two weeks now takes under an hour. Parents love the portal.',
    rating: 5,
    avatarInitials: 'CE',
    avatarColour: 'bg-green-600',
  },
  {
    id: 3,
    name: 'Emeka Nwosu',
    role: 'Founder',
    company: 'Trendvault Store',
    quote:
      'Our e-commerce website from MetroBlue drove a 300% increase in online sales. The design is clean and the SEO work put us on the first page of Google.',
    rating: 5,
    avatarInitials: 'EN',
    avatarColour: 'bg-secondary',
  },
  {
    id: 4,
    name: 'Fatima Al-Hassan',
    role: 'Digital Marketing Head',
    company: 'SilkRoute Textiles',
    quote:
      'I enrolled with zero experience. Six months later I manage a 2M/month ad budget for my company. The training is practical, not theoretical fluff.',
    rating: 5,
    avatarInitials: 'FA',
    avatarColour: 'bg-purple-600',
  },
  {
    id: 5,
    name: 'Oluwaseun Adeyemi',
    role: 'IT Manager',
    company: 'PrimeCare Hospital Group',
    quote:
      'MetroBlue migrated our entire patient records system to a secure cloud setup. Zero downtime, full compliance. They know what they are doing.',
    rating: 5,
    avatarInitials: 'OA',
    avatarColour: 'bg-orange-600',
  },
]
