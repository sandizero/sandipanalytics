# Backend - Data Analyst Portfolio

Node.js backend server for Sandip Sarkar's portfolio website with PostgreSQL database integration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp ../.env.example .env
# Edit .env with your database credentials

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe development
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database toolkit
- **Zod** - Schema validation
- **Passport.js** - Authentication middleware

## 📁 Project Structure

```
├── index.ts           # Main server entry point
├── routes.ts          # API route definitions
├── storage.ts         # Database storage layer
├── db.ts             # Database connection
└── vite.ts           # Vite integration (development)
```

## 🗄️ Database

The backend uses PostgreSQL with Drizzle ORM:

- **Contacts Table** - Stores form submissions
- **Type Safety** - Full TypeScript integration
- **Migrations** - Schema versioning with Drizzle Kit

### Schema Management

```bash
# Push schema changes to database
npm run db:push

# Generate migrations (if needed)
drizzle-kit generate:pg
```

## 🔧 API Endpoints

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve contact submissions

### Static Files (Development)
- Serves frontend files in development mode

## 🌍 Environment Variables

Required environment variables:

```env
DATABASE_URL=postgresql://user:password@host:port/database
PGDATABASE=your_database_name
PGHOST=your_database_host
PGPASSWORD=your_database_password
PGPORT=your_database_port
PGUSER=your_database_user
```

## 🔒 Security

- **Session Management** - Secure session handling
- **Input Validation** - Zod schema validation
- **Error Handling** - Proper error responses
- **CORS Configuration** - Cross-origin request handling

## 📦 Production Deployment

The backend can be deployed on:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS/GCP/Azure

Requires PostgreSQL database service.

## 🔄 Development vs Production

- **Development**: Uses tsx for TypeScript execution
- **Production**: Builds to JavaScript with esbuild
- **Database**: Same PostgreSQL setup for both environments

Note: For static-only deployment, the frontend can work without this backend using mailto links for contact forms.