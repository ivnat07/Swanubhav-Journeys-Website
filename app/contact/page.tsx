'use client'

import { useState, FormEvent } from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import HeroReveal from '@/components/animations/HeroReveal'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface ContactResponse {
  success: boolean
  message?: string
  error?: string
}

type FormData = {
  name: string
  email: string
  message: string
  preferredDestination?: string
  travelDates?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    preferredDestination: '',
    travelDates: '',
  })
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    const lastTen = digits.slice(-10)

    if (lastTen.length !== 10) {
      setPhoneError('Phone number must contain a valid 10-digit number')
      setSubmitStatus({ type: 'error', message: 'Please correct the phone number.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const combinedPhone = `+${digits}`
      const payload = {
        ...formData,
        phone: combinedPhone,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data: ContactResponse = await response.json()

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: data.message || 'We received your inquiry! Our team will get back to you soon.' 
        })
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          message: '',
          preferredDestination: '',
          travelDates: '',
        })
        setPhone('')
        setPhoneError('')
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || data.message || 'An error occurred. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lavender via-pink-50 to-white">
        <HeroReveal className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </HeroReveal>
      </section>

      <FadeIn>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn delay={0.1}>
              <Card>
                <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-lavender border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-lavender border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="w-full">
                      <PhoneInput
                        country="in"
                        value={phone}
                        onChange={(value) => {
                          setPhone(value)
                          const digitsOnly = value.replace(/\D/g, '')
                          const lastTenDigits = digitsOnly.slice(-10)
                          if (lastTenDigits.length !== 10) {
                            setPhoneError(digitsOnly ? 'Phone number must contain a valid 10-digit number' : '')
                          } else {
                            setPhoneError('')
                          }
                          if (submitStatus.type) setSubmitStatus({ type: null, message: '' })
                        }}
                        enableSearch
                        inputProps={{
                          name: 'phone',
                          id: 'phone',
                          required: true,
                          autoComplete: 'tel',
                          disabled: isSubmitting,
                        }}
                        inputClass="!w-full !h-12 !text-base !bg-lavender !border !border-gray-200 !rounded-lg focus:!ring-2 focus:!ring-primary focus:!border-transparent !transition"
                        inputStyle={{
                          width: '100%',
                          height: '3rem',
                          borderRadius: '0.75rem',
                          paddingLeft: '3.2rem',
                          backgroundColor: '#f5f3ff',
                          border: '1px solid #e5e7eb',
                        }}
                        buttonClass="rounded-l-lg border border-r-0 border-gray-200 !bg-white !h-12"
                        containerClass="w-full"
                        dropdownClass="shadow-lg"
                      />
                    </div>
                    {phoneError && (
                      <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredDestination" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Destination
                    </label>
                    <input
                      type="text"
                      id="preferredDestination"
                      name="preferredDestination"
                      value={formData.preferredDestination}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-lavender border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Where would you like to go?"
                    />
                  </div>

                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-semibold text-gray-700 mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-lavender border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g., March 2024 - April 2024"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-lavender border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus.type === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{submitStatus.message}</span>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus.type === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{submitStatus.message}</span>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </FadeIn>

            {/* Contact Info */}
            <StaggerContainer className="space-y-6">
              <Card>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-playfair font-bold mb-6 text-gray-900">Location</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    123 Travel Street<br />
                    Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </Card>

              <Card>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-playfair font-bold mb-6 text-gray-900">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@swanubhav.com" className="hover:text-primary transition-smooth">
                      info@swanubhav.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+15551234567" className="hover:text-primary transition-smooth">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-primary-light/10 to-primary/10 border-2 border-primary/20">
                <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900">Office Hours</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </StaggerContainer>
          </div>
        </Section>
      </FadeIn>
    </div>
  )
}
