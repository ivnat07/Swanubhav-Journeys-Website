import { NextResponse } from 'next/server'
import { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    name: 'Custom Trips',
    description: 'Tailored travel experiences designed specifically for you.',
    duration: '7-14 days',
    priceRange: '$2000-$5000',
  },
  {
    id: '2',
    name: 'Group Tours',
    description: 'Join like-minded travelers on curated group tours.',
    duration: '5-10 days',
    priceRange: '$1500-$3000',
  },
  {
    id: '3',
    name: 'Corporate Travel',
    description: 'Professional travel solutions for businesses.',
    duration: '3-7 days',
    priceRange: '$1000-$4000',
  },
  {
    id: '4',
    name: 'Honeymoon Packages',
    description: 'Romantic getaways for the perfect start to your married life.',
    duration: '7-14 days',
    priceRange: '$3000-$8000',
  },
]

export async function GET() {
  return NextResponse.json(services)
}
