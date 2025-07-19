# Sandip Sarkar | Data & Automation Hub

## Overview

This is a modern, responsive data analyst portfolio website built with React, TypeScript, and Express.js. The application serves as a professional showcase for Sandip Sarkar's data analytics and automation services, including functionality for client contact management. The site features a clean, Material Design-inspired interface with pastel colors and smooth transitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React hooks with TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Static Deployment**: Converted to static website for free hosting platforms
- **Contact Form**: Uses mailto links instead of database storage
- **Validation**: Zod for client-side form validation
- **No Backend Required**: Eliminated server dependencies for free deployment

### Design System
- **Color Palette**: Custom pastel colors (soft blues, greens, purples) defined as CSS variables
- **Typography**: Inter font family for modern, clean text
- **Components**: Consistent design tokens through Tailwind CSS configuration
- **Responsiveness**: Mobile-first approach with responsive breakpoints

## Key Components

### Frontend Components
- **Navigation**: Tab-based navigation system with mobile hamburger menu
- **Hero Section**: Landing area with call-to-action buttons
- **Services Overview**: High-level service offerings display
- **Services Detail**: Comprehensive service descriptions
- **Projects Showcase**: Portfolio of data analytics and automation projects
- **Testimonials**: Client feedback with professional photos
- **Contact Form**: Form validation with React Hook Form and Zod
- **Skills Showcase**: Technical expertise visualization
- **Trust Indicators**: Benefits and value propositions

### Static Components
- **Contact Form**: Client-side form validation with mailto integration
- **Asset Management**: Custom dashboard image integration
- **Build Process**: Vite static build for deployment platforms
- **SEO Optimization**: Meta tags and Open Graph integration

## Data Flow

1. **User Interaction**: Users navigate through tabs to view different sections
2. **Form Submission**: Contact form data is validated client-side then sent to API
3. **API Processing**: Express server validates data with Zod schema
4. **Data Storage**: Contact information stored in PostgreSQL database
5. **Response Handling**: Success/error feedback displayed via toast notifications
6. **State Management**: TanStack Query manages server state and caching

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with TypeScript
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type checking
- **HTTP Client**: Built-in fetch with custom wrapper
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript compiler
- **Styling**: PostCSS with Tailwind CSS
- **Development Server**: Vite dev server with HMR

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Node.js server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: `npm run dev` - runs TypeScript directly with tsx
- **Production**: `npm run build && npm start` - builds and runs compiled JavaScript
- **Database**: Drizzle migrations with `npm run db:push`

### Production Setup
- Express server serves both API endpoints and static frontend files
- Database connection via environment variable `DATABASE_URL`
- Error handling and logging for production monitoring
- Replit-specific configurations for deployment platform

### Database Schema
- **Contacts Table**: Stores client inquiries with name, email, subject, message, and timestamp
- **Migration Support**: Drizzle Kit configured for schema changes
- **Type Safety**: Full TypeScript integration with database operations

## Development Notes

The application is structured as a modern React portfolio website optimized for static hosting. The project includes comprehensive GitHub integration with automated deployments, issue templates, and contribution guidelines. The design emphasizes user experience with Chrome-style navigation, smooth animations, responsive design, and accessibility considerations.

## GitHub Integration

### Repository Structure
- **Documentation**: Complete README, CONTRIBUTING, and deployment guides
- **GitHub Actions**: Automated deployment workflows for GitHub Pages
- **Issue Templates**: Bug reports and feature request templates
- **Pull Request Templates**: Structured contribution process
- **License**: MIT license for open source distribution

### Deployment Ready
- **Static Build**: Optimized for free hosting platforms (Vercel, Netlify, GitHub Pages)
- **No Backend Dependencies**: Contact form uses mailto links
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Code splitting, asset optimization, and caching

## Recent Changes (2025-01-19)
- ✓ Converted to Chrome-style tab navigation (user preference)
- ✓ Prepared GitHub-ready project structure
- ✓ Added comprehensive documentation and templates
- ✓ Configured automated deployment workflows
- ✓ Optimized for static hosting deployment