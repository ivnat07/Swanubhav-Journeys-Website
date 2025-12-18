'use client'

import React, { useEffect } from 'react'
import DestinationMap from './DestinationMap'

interface DestinationModalProps {
  destination: string | null
  onClose: () => void
}

export default function DestinationModal({ destination, onClose }: DestinationModalProps) {
  useEffect(() => {
    if (!destination) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [destination, onClose])

  if (!destination) return null

  const titleId = 'destination-map-modal-title'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby={titleId}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-full p-1"
          aria-label="Close"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>

        <h2
          id={titleId}
          className="text-2xl md:text-3xl font-playfair font-semibold mb-4 text-gray-900"
        >
          {destination}
        </h2>

        <p className="text-gray-600 mb-6">
          Explore tourist attractions on the interactive map. Hover over markers to learn more.
        </p>

        <DestinationMap destination={destination} />
      </div>
    </div>
  )
}




