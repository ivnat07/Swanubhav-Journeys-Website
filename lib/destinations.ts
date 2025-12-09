export interface Destination {
  id: string
  name: string
  image: string
  description: string
  minHeight?: string
}

export const destinations: Destination[] = [
  {
    id: 'bali1',
    name: 'Bali',
    image: '/images/destinations/bali1.jpg',
    description: 'Experience the beauty of pristine beaches, ancient temples, and vibrant culture.',
    minHeight: '60vh',
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    image: '/images/destinations/kashmir.jpg',
    description: 'Where serenity meets grandeur. Discover the pristine beauty of Dal Lake and the majestic mountains.',
    minHeight: '60vh',
  },
  {
    id: 'himachal',
    name: 'Himachal',
    image: '/images/destinations/himachal.jpg',
    description: 'The City of Light awaits. Explore iconic landmarks, world-class cuisine, and timeless romance.',
    minHeight: '60vh',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: '/images/destinations/kerala.jpg',
    description: 'Where tradition meets innovation. Immerse yourself in a unique blend of ancient culture and modern technology.',
    minHeight: '60vh',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    image: '/images/destinations/maldives.jpg',
    description: 'Breathtaking sunsets, white-washed buildings, and crystal-clear waters in the heart of the Aegean.',
    minHeight: '60vh',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    image: '/images/destinations/maldives.jpg',
    description: 'Paradise on earth. Overwater bungalows, turquoise lagoons, and pristine coral reefs.',
    minHeight: '60vh',
  },
]

// Get destination by ID
export function getDestination(id: string): Destination | undefined {
  return destinations.find(dest => dest.id === id)
}

// Get featured destinations (first 3)
export function getFeaturedDestinations(): Destination[] {
  return destinations.slice(0, 3)
}

