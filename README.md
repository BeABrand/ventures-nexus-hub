# BSC Ventures Limited - Corporate Website

## About BSC Ventures Limited

**BSC Ventures Limited** is a diversified digital company managing a portfolio of creative, educational, AI-powered, and photography-based products. Our mission is to merge innovation, education, and artistry under one umbrella brand that promotes quality and accessibility worldwide.

Founded in 2020, we have grown to serve over 10,000 clients globally across 6 active brands spanning multiple industries including Education, Creative Services, Design, and Technology.

## Our Product Portfolio

1. **[CustomWriting.help](https://customwriting.help)** - Professional academic and educational writing assistance
2. **[GEDGuru.com](https://gedguru.com)** - Comprehensive GED test preparation platform with expert tutoring
3. **[BirdieWriters.com](https://birdiewriters.com)** - Creative writing and freelance marketplace connecting writers with opportunities
4. **[VectorPulseGraphix.com](https://vectorpulsegraphix.com)** - Professional graphic design and branding services
5. **[StudyAssistant.ai](https://studyassistant.ai)** - AI-powered learning tools revolutionizing education
6. **[ElChemistPhotography](https://instagram.com/elchemistphotography)** - Artistic and commercial photography services

## Technology Stack

This modern Progressive Web Application (PWA) is built with cutting-edge technologies:

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 7.1.11 with SWC compiler
- **Routing**: React Router DOM 6.30.1
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS 3.4.17 with custom design system
- **State Management**: TanStack Query (React Query) 5.83.0
- **PWA Support**: Vite Plugin PWA 1.1.0 with Workbox
- **Form Management**: React Hook Form 7.61.1 with Zod validation
- **SEO**: React Helmet Async for meta tags and structured data
- **Theme**: next-themes for dark/light mode support
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui component library
│   ├── Navbar.tsx    # Main navigation component
│   ├── Footer.tsx    # Footer with company info and links
│   ├── ProductCard.tsx
│   ├── SEO.tsx       # SEO component with structured data
│   └── ...
├── pages/            # Route pages
│   ├── Home.tsx      # Landing page with hero and products
│   ├── About.tsx     # Company mission, vision, and timeline
│   ├── Products.tsx  # Product portfolio showcase
│   ├── Contact.tsx   # Contact form and information
│   ├── Partnership.tsx
│   ├── Careers.tsx
│   ├── Blog.tsx      # Blog listing page
│   └── blog/         # Individual blog articles
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main application router
└── main.tsx          # Application entry point

## Development Setup

### Prerequisites

- Node.js 18+ (recommended to use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn package manager

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ventures-nexus-hub

# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev
```

### Available Scripts

```sh
npm run dev           # Start development server with hot reload
npm run build         # Build for production
npm run build:dev     # Build in development mode
npm run lint          # Run ESLint for code quality
npm run preview       # Preview production build locally
```

## Features

### Progressive Web App (PWA)
- Installable on desktop and mobile devices
- Offline functionality with service worker caching
- Auto-updates for seamless user experience
- Optimized asset caching strategies

### SEO Optimized
- Server-side meta tags with React Helmet
- Structured data (JSON-LD) for rich search results
- Sitemap and robots.txt for search engines
- Semantic HTML and accessibility standards

### Performance
- Code splitting and lazy loading for optimal load times
- Image optimization and responsive images
- Chunk optimization with manual code splitting
- Font caching with workbox strategies

### Responsive Design
- Mobile-first approach
- Fluid typography and spacing
- Touch-friendly interactive elements
- Cross-browser compatibility

## Business Logic

The application serves as the corporate hub for BSC Ventures Limited, featuring:

1. **Brand Showcase**: Centralized portfolio of all 6 product brands
2. **Company Information**: Mission, vision, timeline, and company story
3. **Content Marketing**: Blog with articles on technology, education, and business
4. **Lead Generation**: Contact forms for partnerships, careers, and inquiries
5. **SEO & Discovery**: Optimized for search engines to drive organic traffic
6. **User Engagement**: PWA features for improved user retention

## Deployment

The application is configured for deployment on web servers with:
- Static file serving from `dist/` directory
- `.htaccess` for Apache servers with URL rewriting
- PWA manifest and service worker registration
- Optimized production builds with minification

## Contact

**BSC Ventures Limited**
Email: info@bscventuresltd.com
Website: https://bscventuresltd.com

---

© 2024 BSC Ventures Limited. All rights reserved.
