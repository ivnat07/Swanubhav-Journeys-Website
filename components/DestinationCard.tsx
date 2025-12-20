'use client'

import React from 'react'
import Image from 'next/image'

interface DestinationCardProps {
  name: string
  description?: string
  image: string
  onClick: () => void
}

export default function DestinationCard({ name, description, image, onClick }: DestinationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-xl"
      aria-label={`Open map preview for ${name}`}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-playfair font-semibold mb-2">{name}</h3>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </button>
  )
}





