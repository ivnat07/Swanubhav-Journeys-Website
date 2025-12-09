export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceRange: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferredDestination?: string;
  travelDates?: string;
}

