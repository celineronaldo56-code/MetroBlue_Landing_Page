import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Phone, Mail, Globe, MessageSquare,
  CheckCircle, AlertCircle, Loader2,
} from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import type { ContactFormData, FormStatus } from '../../types'

const serviceOptions = [
  'Software Development',
  'Web Design & Development',
  'Digital Marketing',
  'Graphics & Branding',
  'IT Training',
  'IT Support & Consulting',
  'Other',
]

const initialForm: ContactFormData = {
  fullName: '', email: '', phone: '', service: '', message: '',
}

const validate = (data: ContactFormData): Partial<ContactFormData> => {
  const errs: Partial<ContactFormData> = {}
  if (!data.fullName.trim())
    errs.fullName = 'Full name is required'
  if (!data.email.trim())
    errs.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = 'Enter a valid email address'
  if (!data.phone.trim())
    errs.phone = 'Phone number is required'
  else if (!/^(\+?234|0)[7-9][01]\d{8}$/.test(data.phone.replace(/\s/g, '')))
    errs.phone = 'Enter a valid Nigerian phone number'
  if (!data.service)
    errs.service = 'Please select a service'
  if (!data.message.trim())
    errs.message = 'Message is required'
  else if (data.message.trim().length < 20)
    errs.message = 'Message must be at least 20 characters'
  return errs
}

const contactInfo = [
  { icon: MapPin,        label: 'Address',  value: '322 Road, Opp. H-Close, Lagos, Nigeria' },
  { icon: Phone,         label: 'Phone',    value: '09079125273 · 08162524860'              },
  { icon: Mail,          label: 'Email',    value: 'info@metrobluets.com'                   },
  { icon: Globe,         label: 'Website',  value: 'metrobluets.com'                        },
  { icon: MessageSquare, label: 'WhatsApp', value: '09079125273'                            },
]

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm)
  const [errors, setErrors]     = useState<Partial<ContactFormData>>({})
  const [status, setStatus]     = useState<FormStatus>('idle')

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleBlur = (field: keyof ContactFormData) => {
    const fieldErrors = validate(formData)
    if (fieldErrors[field]) setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('submitting')
    setTimeout(() => { setStatus('success'); setFormData(initialForm) }, 2000)
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary placeholder:text-grey/50 text-dark'
  const inputNormal = 'border-border'
  const inputErr    = 'border-red-400 ring-2 ring-red-200'

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Build Something Great Together"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-3xl border border-green-200"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/25"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h3 className="heading-display text-2xl text-dark mb-3">Message Sent!</h3>
                  <p className="text-grey mb-6">
                    Thanks for reaching out. Our team will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold text-secondary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Full name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-dark mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="John Adeyemi"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      className={`${inputBase} ${errors.fullName ? inputErr : inputNormal}`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`${inputBase} ${errors.email ? inputErr : inputNormal}`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="09079125273"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`${inputBase} ${errors.phone ? inputErr : inputNormal}`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-dark mb-1.5">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      onBlur={() => handleBlur('service')}
                      className={`${inputBase} ${errors.service ? inputErr : inputNormal} cursor-pointer`}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project or enquiry..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`${inputBase} ${errors.message ? inputErr : inputNormal} resize-none`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                    <p className="text-grey/50 text-xs mt-1 text-right">{formData.message.length} chars</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-xl hover:bg-[#15305a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-primary/20"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-dark rounded-3xl p-8 flex-1">
              <h3 className="font-display font-bold text-white text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-secondary/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-mono mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium leading-relaxed">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs font-mono mb-3">Follow us</p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Facebook', 'Twitter'].map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium text-white/60 bg-white/5 hover:bg-secondary hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-secondary transition-all duration-200 cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-border h-48 relative bg-primary">
              <div className="absolute inset-0 bg-dot-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={28} className="mx-auto mb-2 text-secondary" />
                  <p className="text-sm font-semibold">Lagos, Nigeria</p>
                  <p className="text-white/50 text-xs mt-1">322 Road, Opp. H-Close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
