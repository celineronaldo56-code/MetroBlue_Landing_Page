export interface Service {
  id: number
  icon: string
  title: string
  description: string
  features: string[]
  colour: string
  accentColour: string
}

export interface Solution {
  id: number
  name: string
  tagline: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  badge: string
  badgeColour: string
  imageAlt: string
}

export interface TrainingCourse {
  id: number
  title: string
  category: 'Web Development' | 'Mobile' | 'Digital Marketing' | 'Graphics' | 'Software'
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  topics: string[]
  isFeatured: boolean
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatarInitials: string
  avatarColour: string
}

export interface Stat {
  id: number
  value: number
  suffix: string
  label: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
}

export type FormStatus       = 'idle' | 'submitting' | 'success' | 'error'
export type TrainingCategory = 'All' | 'Web Development' | 'Mobile' | 'Digital Marketing' | 'Graphics' | 'Software'
