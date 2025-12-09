import Section from '@/components/Section'
import Card from '@/components/Card'
import HeroReveal from '@/components/animations/HeroReveal'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import BackgroundSection from '@/components/BackgroundSection'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lavender via-pink-50 to-white">
        <HeroReveal className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600">
            Swanubhav was born from a passion for creating extraordinary travel experiences 
            that connect people with the world's most beautiful destinations.
          </p>
        </HeroReveal>
      </section>

      {/* Mission & Vision with Background */}
      <BackgroundSection image="/images/destinations/kashmir.jpg" minHeight="50vh">
        <FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To inspire and enable travelers to discover the world's wonders through carefully 
                curated experiences that blend adventure, culture, and luxury. We believe every journey 
                should be transformative and unforgettable.
              </p>
            </Card>
            <Card>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted and beloved travel partner, known for creating 
                meaningful connections between travelers and destinations while promoting sustainable 
                and responsible tourism practices.
              </p>
            </Card>
          </StaggerContainer>
        </FadeIn>
      </BackgroundSection>

      {/* Values */}
      <FadeIn delay={0.2}>
        <Section title="Our Values" bgColor="lavender">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Passion</h3>
              <p className="text-gray-600">
                We are driven by our love for travel and our commitment to creating exceptional experiences 
                for every traveler.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and ethical practices in everything we do, 
                building trust with our travelers and partners.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, continuously improving our services 
                to exceed expectations.
              </p>
            </Card>
          </StaggerContainer>
        </Section>
      </FadeIn>

      {/* Timeline */}
      <FadeIn delay={0.3}>
        <Section title="Our Journey">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              
              <StaggerContainer className="space-y-12" staggerDelay={0.2}>
                {[
                  { year: '2020', title: 'The Beginning', description: 'Swanubhav was founded with a vision to transform travel experiences.' },
                  { year: '2022', title: 'Expansion', description: 'Expanded to international destinations.' },
                  { year: '2024', title: 'Digital Innovation', description: 'Launched our online platform for access to all destinations in one place.' },
                  { year: '2025', title: 'Global Reach', description: 'Now serving travelers in 20+ destinations worldwide.' },
                ].map((milestone, index) => (
                  <div key={index} className="relative flex items-start md:items-center">
                    {/* Dot */}
                    <div className="absolute left-6 md:left-6 w-4 h-4 gradient-primary rounded-full z-10 border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="ml-16 md:ml-20 flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-playfair font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </Section>
      </FadeIn>
    </div>
  )
}
