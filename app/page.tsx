import Image from 'next/image'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import HeroReveal from '@/components/animations/HeroReveal'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import BackgroundSection from '@/components/BackgroundSection'
import HeroCarousel from '@/components/HeroCarousel'
import { destinations } from '@/lib/destinations'

export default function Home() {
  // Get featured destinations for the hero and sections
  const heroDestinations = destinations.slice(0, 4) // Use first 4 for hero carousel
  const featuredDestinations = destinations.slice(0, 3) // First 3 for cards
  const backgroundSections = destinations.slice(1, 3) // Kashmir and Paris for background sections

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
          <Button href="/contact" variant="primary" className="text-lg px-10 py-4">
            Start Your Journey
          </Button>
        </HeroReveal>
      </HeroCarousel>

      {/* Featured Destinations */}
      <FadeIn>
        <Section title="Featured Destinations" subtitle="Discover our handpicked destinations that promise unforgettable experiences">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} hover>
                <div className="h-48 bg-gradient-to-br from-primary-light to-primary rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/30"></div>
                  <span className="text-white text-2xl font-playfair relative z-10">{destination.name}</span>
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
              </Card>
            ))}
          </StaggerContainer>
        </Section>
      </FadeIn>

      {/* Background Sections - Easy to add more! */}
      {backgroundSections.map((destination, index) => (
        <FadeIn key={destination.id} delay={0.1 * (index + 1)}>
          <BackgroundSection 
            image={destination.image} 
            minHeight={destination.minHeight || '60vh'}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Experience {destination.name}
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {destination.description}
              </p>
            </div>
          </BackgroundSection>
        </FadeIn>
      ))}

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
    </div>
  )
}
