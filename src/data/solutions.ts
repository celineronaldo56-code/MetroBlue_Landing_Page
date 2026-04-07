import type { Solution } from '../types'

export const solutions: Solution[] = [
  {
    id: 1,
    name: 'MetroBlue Educesol',
    tagline: 'Smart School Management, Simplified.',
    description:
      'A robust school management platform built for Nigerian educational institutions. Handles student databases, result computation, e-learning integration, and CBT (Computer-Based Testing).',
    features: [
      'Student Database Management',
      'Automatic Result Computation',
      'E-Learning Integration',
      'CBT Exam Module',
      'Parent Portal',
      'Admin Dashboard',
    ],
    ctaText: 'Get Educesol for Your School',
    ctaHref: '#contact',
    badge: 'Education',
    badgeColour: 'bg-green-500 text-green-700',
    imageAlt: 'Educesol school management platform dashboard',
  },
  {
    id: 2,
    name: 'MetroBlue Enterprise',
    tagline: 'Everything Your Business Needs to Go Digital.',
    description:
      'An all-in-one digital solution for businesses of any size — from branding and websites to digital marketing and custom business software, all under one roof.',
    features: [
      'Business Website',
      'Brand Identity & Rebranding',
      'Digital Marketing',
      'Business Software',
      'Social Media Management',
      'Analytics Dashboard',
    ],
    ctaText: 'Grow Your Business',
    ctaHref: '#contact',
    badge: 'Business',
    badgeColour: 'bg-blue-100 text-blue-700',
    imageAlt: 'MetroBlue Enterprise business solution dashboard',
  },
  {
    id: 3,
    name: 'Metroblits',
    tagline: 'Resell Digital Products at Wholesale Prices.',
    description:
      'A digital products marketplace powered by MetroBlue. Resellers can buy airtime, data, pay utility bills, send bulk SMS, and access digital products at competitive wholesale rates.',
    features: [
      'Airtime & Data Reselling',
      'Utility Bill Payments',
      'Bulk SMS',
      'Wholesale Pricing',
      'Reseller Dashboard',
      'Real-time Transactions',
    ],
    ctaText: 'Join as a Reseller',
    ctaHref: '#contact',
    badge: 'Marketplace',
    badgeColour: 'bg-sky-100 text-sky-700',
    imageAlt: 'Metroblits digital marketplace dashboard',
  },
]
