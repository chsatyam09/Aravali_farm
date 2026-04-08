# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Setup
```bash
npm install          # Install dependencies
```

## Architecture

This is a **Next.js 14** application for "Aravali Farm" - a luxury property venue website with dual-location support (Gurgaon/Noida).

### Key Architectural Patterns

**Location-Based Content Strategy**: The app uses a location state (`gurgaon` | `noida`) that dynamically switches between different home components:
- Main router: `app/home/index.tsx` 
- Location-specific homes: `GurgaonHome.tsx` and `NoidaHome.tsx`
- Navigation component handles location toggle

**Component Structure**:
- `app/components/` - Shared UI components (Navigation, Slideshow, Themes, etc.)
- `app/home/` - Location-specific home page components
- `app/Gallery/` - Gallery page implementation

**Styling Strategy**: 
- Uses inline styles extensively instead of Tailwind classes
- Custom fonts: Peach Brown and CustomFont from local files
- Color scheme: `#8B4513` (brown), `#D4AF37` (gold), whites and grays
- Responsive design with clamp() functions for scalable typography

### Core Components

**Navigation**: Fixed position navbar with location toggle, scroll-based styling changes, and mobile responsive hamburger menu.

**Slideshow**: Auto-playing background slideshow (5-second intervals) with property images, overlay content, and slide indicators.

**Themes**: Service cards with alternating left/right image layouts showcasing different event types (birthdays, corporate parties, bachelor parties, family gatherings).

**PropertyGallery**: Grid-based property showcase with pricing and amenities for Noida farmhouses.

**ClientReview**: Customer testimonials from different platforms (Google, MakeMyTrip, Booking.com).

### File Organization
```
app/
├── components/       # Reusable UI components
├── home/            # Location-specific home pages
├── Gallery/         # Gallery page
├── globals.css      # Global styles and fonts
└── layout.tsx       # Root layout with metadata

public/              # Static assets (property images, logos)
```

### Image Management
Property images are stored in `/public/` and referenced without `/public/` prefix. Uses both local images and external Unsplash URLs for placeholder content.

### TypeScript Usage
Components use TypeScript with interface definitions for props (e.g., `NavigationProps` with location state management).

## Important Notes

- The app name is "saamreya-website" in package.json but displays as "ARAVALI FARM" 
- Uses Next.js Image component in PropertyGallery but standard img tags elsewhere
- Mobile responsiveness handled through CSS media queries and clamp() functions
- No testing framework currently configured
- Uses custom fonts loaded from `/public/fonts/` directory