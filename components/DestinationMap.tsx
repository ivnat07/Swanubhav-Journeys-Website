'use client'

import React, { useMemo, useState, useEffect, useRef } from 'react'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'
import type { google } from '@react-google-maps/api'

interface DestinationMapProps {
  destination: string
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
}

export default function DestinationMap({ destination }: DestinationMapProps) {
  const [activePlace, setActivePlace] = useState<{
    name: string
    lat: number
    lng: number
    description: string
  } | null>(null)
  const mapRef = useRef<google.maps.Map | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || '',
  })

  const destinationData = useMemo(() => {
    // Dynamic import to avoid SSR issues
    const { getDestinationMapData } = require('@/lib/destinationMaps')
    return getDestinationMapData(destination)
  }, [destination])

  // Fit map bounds to show all markers when destination data is available
  useEffect(() => {
    if (!mapRef.current || !destinationData || destinationData.places.length === 0 || !isLoaded) {
      return
    }

    // Ensure Google Maps API is loaded
    if (typeof window === 'undefined' || !window.google || !window.google.maps) {
      return
    }

    const bounds = new window.google.maps.LatLngBounds()

    // Extend bounds to include all places
    destinationData.places.forEach((place) => {
      bounds.extend(new window.google.maps.LatLng(place.lat, place.lng))
    })

    // Fit the map to the bounds with padding
    mapRef.current.fitBounds(bounds, {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    })
  }, [destinationData, isLoaded])

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map
  }

  if (loadError) {
    return (
      <div className="h-[320px] md:h-[400px] rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-center px-6">
          Error loading map. Please check your API key.
        </span>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="h-[320px] md:h-[400px] rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-center px-6">Loading map...</span>
      </div>
    )
  }

  if (!destinationData) {
    return (
      <div className="h-[320px] md:h-[400px] rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-center px-6">
          Map data not available for {destination}
        </span>
      </div>
    )
  }

  return (
    <div className="h-[320px] md:h-[400px] rounded-xl overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={destinationData.center}
        zoom={10}
        options={mapOptions}
        onLoad={handleMapLoad}
      >
        {destinationData.places.map((place) => (
          <Marker
            key={place.name}
            position={{ lat: place.lat, lng: place.lng }}
            onClick={() => setActivePlace(place)}
            title={place.name}
          />
        ))}

        {activePlace && (
          <InfoWindow
            position={{
              lat: activePlace.lat,
              lng: activePlace.lng,
            }}
            onCloseClick={() => setActivePlace(null)}
          >
            <div className="text-sm max-w-[200px]">
              <strong className="block">{activePlace.name}</strong>
              <p className="text-gray-600">{activePlace.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}


