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
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM (actively using database storage)
- **Session Management**: Prepared for PostgreSQL sessions with connect-pg-simple
- **Validation**: Zod for schema validation and type safety

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

### Backend Components
- **Contact API**: POST /api/contact for form submissions
- **Contact Management**: GET /api/contacts for retrieving submissions
- **Storage Layer**: DatabaseStorage implementation using PostgreSQL
- **Error Handling**: Centralized error handling with proper HTTP status codes

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

The application is structured as a monorepo with shared types between frontend and backend. The current implementation uses in-memory storage but is architected to easily switch to PostgreSQL database persistence. The design emphasizes user experience with smooth animations, responsive design, and accessibility considerations.