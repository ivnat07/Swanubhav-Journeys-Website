'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { Service } from '@/types'
import HeroReveal from '@/components/animations/HeroReveal'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'

export default function Services() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data || []))
      .catch(err => console.error('Error fetching services:', err))
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lavender via-pink-50 to-white">
        <HeroReveal className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Discover our range of premium tourism services tailored to your needs
          </p>
        </HeroReveal>
      </section>

      {/* Services Grid */}
      <FadeIn>
        <Section title="What We Offer" subtitle="Choose the perfect travel experience for you">
          {services.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} hover>
                  <div className="mb-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold mb-3 text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <span className="font-semibold text-primary">{service.priceRange}</span>
                  </div>
                </Card>
              ))}
            </StaggerContainer>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} hover>
                  <div className="mb-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold mb-3">Service {item}</h3>
                    <p className="text-gray-600">Loading service details...</p>
                  </div>
                </Card>
              ))}
            </StaggerContainer>
          )}
        </Section>
      </FadeIn>
    </div>
  )
}
