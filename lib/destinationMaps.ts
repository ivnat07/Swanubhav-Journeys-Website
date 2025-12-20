export interface Place {
  name: string
  lat: number
  lng: number
  description: string
}

export interface DestinationMapData {
  name: string
  center: {
    lat: number
    lng: number
  }
  places: Place[]
}

export const destinationMaps: Record<string, DestinationMapData> = {
  Kashmir: {
    name: 'Kashmir',
    center: { lat: 34.0837, lng: 74.7973 },
    places: [
      {
        name: 'Dal Lake',
        lat: 34.1239,
        lng: 74.8719,
        description: 'Famous for its houseboats and shikara rides, Dal Lake is one of the most beautiful lakes in Kashmir.',
      },
      {
        name: 'Gulmarg',
        lat: 34.0489,
        lng: 74.3805,
        description: 'A popular skiing destination with stunning mountain views and the world\'s highest gondola ride.',
      },
    ],
  },
  Himachal: {
    name: 'Himachal',
    center: { lat: 31.8169, lng: 77.1544 },
    places: [
      {
        name: 'Manali',
        lat: 32.2432,
        lng: 77.1892,
        description: 'A hill station nestled in the mountains, famous for adventure sports and scenic beauty.',
      },
      {
        name: 'Solang Valley',
        lat: 32.3019,
        lng: 77.1708,
        description: 'Known for skiing, paragliding, and breathtaking views of snow-capped peaks.',
      },
    ],
  },
  Kerala: {
    name: 'Kerala',
    center: { lat: 10.1632, lng: 76.6413 },
    places: [
      {
        name: 'Alleppey',
        lat: 9.4981,
        lng: 76.3388,
        description: 'The backwater capital of Kerala, famous for houseboat cruises through serene canals.',
      },
      {
        name: 'Munnar',
        lat: 10.0889,
        lng: 77.0595,
        description: 'A hill station known for tea plantations, misty mountains, and diverse wildlife.',
      },
    ],
  },
  'Hampi–Badami': {
    name: 'Hampi–Badami',
    center: { lat: 15.3350, lng: 76.4600 },
    places: [
      {
        name: 'Virupaksha Temple',
        lat: 15.3350,
        lng: 76.4600,
        description: 'An ancient temple dedicated to Lord Shiva, part of the UNESCO World Heritage Site of Hampi.',
      },
      {
        name: 'Badami Caves',
        lat: 15.9200,
        lng: 75.6800,
        description: 'Rock-cut cave temples dating back to the 6th century, showcasing exquisite Indian architecture.',
      },
    ],
  },
  Dubai: {
    name: 'Dubai',
    center: { lat: 25.2048, lng: 55.2708 },
    places: [
      {
        name: 'Burj Khalifa',
        lat: 25.1972,
        lng: 55.2744,
        description: 'The world\'s tallest building, offering panoramic views of Dubai from its observation decks.',
      },
      {
        name: 'Dubai Marina',
        lat: 25.0760,
        lng: 55.1390,
        description: 'A stunning waterfront district with luxury yachts, skyscrapers, and vibrant nightlife.',
      },
    ],
  },
  Bali: {
    name: 'Bali',
    center: { lat: -8.3405, lng: 115.0920 },
    places: [
      {
        name: 'Ubud',
        lat: -8.5069,
        lng: 115.2625,
        description: 'The cultural heart of Bali, known for rice terraces, art galleries, and traditional crafts.',
      },
      {
        name: 'Tanah Lot',
        lat: -8.6211,
        lng: 115.0864,
        description: 'A famous sea temple perched on a rock formation, offering spectacular sunset views.',
      },
    ],
  },
}

export function getDestinationMapData(name: string): DestinationMapData | undefined {
  return destinationMaps[name]
}


