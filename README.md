# Swanubhav Tourism Website

A modern, animated marketing website for a tourism startup built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # POST endpoint for contact form
│   │   └── services/
│   │       └── route.ts          # GET endpoint for services
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page with form
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with navigation
│   └── page.tsx                  # Home page
├── types/
│   └── index.ts                  # TypeScript type definitions
├── components/                   # Reusable components (to be added)
├── lib/                          # Utility functions (to be added)
└── public/                       # Static assets

```

## Pages

- `/` - Home page with hero, featured destinations, why choose us, testimonials, and stats
- `/about` - Company story, mission/vision, values, and timeline
- `/services` - Grid of tourism services with animations
- `/contact` - Contact form and location information

## API Routes

- `POST /api/contact` - Handles contact form submissions with validation
- `GET /api/services` - Returns list of available services

## Features

- Responsive design
- Smooth animations with Framer Motion
- Form validation
- TypeScript for type safety
- Clean, modern UI with Tailwind CSS

## Next Steps

- Add detailed styling and content
- Implement image optimization
- Add more animations
- Connect to a database for form submissions
- Add authentication if needed
- Deploy to production

