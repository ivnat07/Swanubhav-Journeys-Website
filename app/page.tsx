'use client'

import Image from 'next/image'
import { useState } from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import HeroReveal from '@/components/animations/HeroReveal'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import HeroCarousel from '@/components/HeroCarousel'
import DestinationCard from '../components/DestinationCard'
import DestinationModal from '../components/DestinationModal'
import StartJourneyModal from '../components/StartJourneyModal'
import { destinations } from '@/lib/destinations'

const featuredDestinationsForGrid = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    description: 'Snow-capped peaks, serene lakes, and breathtaking valleys.',
    image: '/images/destinations/kashmir.jpg',
  },
  {
    id: 'himachal',
    name: 'Himachal',
    description: 'Mountain escapes, winding roads, and charming hill towns.',
    image: '/images/destinations/himachal.jpg',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Backwaters, lush greenery, and tranquil houseboat stays.',
    image: '/images/destinations/kerala.jpg',
  },
  {
    id: 'hampi-badami',
    name: 'Hampi–Badami',
    description: 'Ancient ruins, cave temples, and rich heritage landscapes.',
    image: '/images/destinations/humpi-badami.jpg',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Futuristic skyline, desert adventures, and luxe shopping.',
    image: '/images/destinations/dubai.jpg',
  },
  {
    id: 'bali',
    name: 'Bali',
    description: 'Beaches, rice terraces, and soulful island culture.',
    image: '/images/destinations/bali.jpg',
  },
] as const

export default function Home() {
  // Get featured destinations for the hero and sections
  const heroDestinations = destinations.slice(0, 4) // Use first 4 for hero carousel
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
  const [isStartJourneyModalOpen, setIsStartJourneyModalOpen] = useState(false)

  return (
    <div>
      {/* Hero Section with Auto-Rotating Background */}
      <HeroCarousel destinations={heroDestinations} interval={5000}>
        <HeroReveal className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Explore the World with{' '}
            <span className="text-white">Swanubhav</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Discover extraordinary journeys tailored to your dreams. 
            Where every destination becomes a memory.
          </p>
          <Button
            onClick={() => setIsStartJourneyModalOpen(true)}
            variant="primary"
            className="text-lg px-10 py-4"
          >
            Start Your Journey
          </Button>
        </HeroReveal>
      </HeroCarousel>

      {/* Featured Destinations */}
      <FadeIn>
        <Section
          title="Featured Destinations"
          subtitle="Discover our handpicked destinations that promise unforgettable experiences"
        >
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinationsForGrid.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                description={destination.description}
                image={destination.image}
                onClick={() => setSelectedDestination(destination.name)}
              />
            ))}
          </StaggerContainer>
        </Section>
      </FadeIn>

      {/* Why Choose Us */}
      <FadeIn delay={0.2}>
        <Section title="Why Choose Us" subtitle="What makes Swanubhav your perfect travel partner" bgColor="lavender">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card hover className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Expert Planning</h3>
              <p className="text-gray-600 text-sm">Curated itineraries by travel experts</p>
            </Card>
            <Card hover className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance during your journey</p>
            </Card>
            <Card hover className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-600 text-sm">Reliable and secure travel arrangements</p>
            </Card>
            <Card hover className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Personalized</h3>
              <p className="text-gray-600 text-sm">Tailored experiences just for you</p>
            </Card>
          </StaggerContainer>
        </Section>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn delay={0.3}>
        <Section title="What Our Travelers Say" subtitle="Real experiences from our valued customers">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-primary" hover={false}>
              <p className="text-gray-700 text-lg mb-4 italic">
                "Swanubhav crafted the most amazing honeymoon experience for us. Every detail was perfect, and we felt truly cared for throughout our journey."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah & Mike</p>
                  <p className="text-sm text-gray-600">Honeymoon Package</p>
                </div>
              </div>
            </Card>
            <Card className="border-l-4 border-primary" hover={false}>
              <p className="text-gray-700 text-lg mb-4 italic">
                "The group tour exceeded all expectations. Our guide was knowledgeable, the accommodations were excellent, and we made lifelong friends."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-600">Group Tour</p>
                </div>
              </div>
            </Card>
          </StaggerContainer>
        </Section>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.4}>
        <Section title="Our Impact" bgColor="lavender">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Happy Travelers</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Destinations</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
          </StaggerContainer>
        </Section>
      </FadeIn>

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      <StartJourneyModal
        isOpen={isStartJourneyModalOpen}
        onClose={() => setIsStartJourneyModalOpen(false)}
      />
    </div>
  )
}
