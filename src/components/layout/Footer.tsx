import React from 'react'
import { MapPin, Phone, Mail, Globe, MessageSquare } from 'lucide-react'


const serviceLinks = [
  'Software Development',
  'Web Design & Development',
  'Digital Marketing',
  'Graphics & Branding',
  'IT Training',
  'IT Support & Consulting',
]

const solutionLinks = [
  { label: 'Educesol', sub: 'School Management' },
  { label: 'Enterprise', sub: 'Business Solutions' },
  { label: 'Metroblits', sub: 'Digital Marketplace' },
  { label: 'IT Training', sub: 'Courses & Bootcamps' },
]

const contactItems = [
  { Icon: MapPin, text: '322 Road, Opp. H-Close, Lagos' },
  { Icon: Phone, text: '09079125273 · 08162524860' },
  { Icon: Mail, text: 'info@metrobluets.com' },
  { Icon: Globe, text: 'metrobluets.com' },
]

export const Footer: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-dark text-white">

      <div className="container-xl py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="flex items-center gap-3 mb-4">

              <img
                src={"/public/image.png"}
                alt="MetroBlue Logo"
                className="h-10 w-auto"
              />

            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Nigeria's trusted technology partner — building world-class software,
              web solutions, and IT training since 2019.
            </p>

            <p className="text-white/30 text-xs font-mono">
              RC-1634086 · Lagos, Nigeria
            </p>

          </div>

          {/* Services */}
          <div>

            <h4 className="font-display font-bold text-white mb-5">
              Services
            </h4>

            <ul className="space-y-3">

              {serviceLinks.map((s) => (
                <li key={s}>

                  <button
                    onClick={() => scrollTo('services')}
                    className="text-white/50 text-sm hover:text-secondary transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>

                </li>
              ))}

            </ul>

          </div>

          {/* Solutions */}
          <div>

            <h4 className="font-display font-bold text-white mb-5">
              Solutions
            </h4>

            <ul className="space-y-3">

              {solutionLinks.map(({ label, sub }) => (
                <li key={label}>

                  <button
                    onClick={() => scrollTo('solutions')}
                    className="text-left group"
                  >

                    <span className="text-white/50 text-sm group-hover:text-secondary transition-colors block">
                      {label}
                    </span>

                    <span className="text-white/25 text-xs">
                      {sub}
                    </span>

                  </button>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-display font-bold text-white mb-5">
              Contact Us
            </h4>

            <ul className="space-y-4">

              {contactItems.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">

                  <Icon
                    size={14}
                    className="text-secondary mt-0.5 flex-shrink-0"
                  />

                  <span className="text-white/50 text-sm">
                    {text}
                  </span>

                </li>
              ))}

            </ul>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/2349123259866?text=Hello%20MetroBlue%20Tech%20Systems,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0d87be] transition-colors duration-200"
            >

              <MessageSquare size={14} />

              WhatsApp Us

            </a>

          </div>

        </div>
      </div>

      {/* Bottom bar */}

      <div className="border-t border-white/10">

        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} MetroBlue Tech Systems Limited.
            RC-1634086. All rights reserved.
          </p>

          <p className="text-white/20 text-xs">
            Built in Lagos, Nigeria 🇳🇬
          </p>

        </div>

      </div>

    </footer>
  )
}