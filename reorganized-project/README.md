# Sandip Sarkar | Data & Automation Hub

A modern, responsive portfolio website for a professional Data Analyst showcasing services, projects, and expertise in data analysis and business automation.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Material Design**: Clean, modern aesthetic with pastel color scheme
- **Chrome-style Navigation**: Professional tab-based navigation system
- **Contact Form**: Integrated email contact system
- **Custom Analytics**: Real dashboard showcase
- **SEO Optimized**: Meta tags and Open Graph integration
- **Static Deployment**: No backend required for easy hosting

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Static hosting ready

## 📦 Installation

### Frontend Setup
```bash
cd frontend
npm install
npm run dev  # Starts on port 3000
```

### Backend Setup (Optional - for database features)
```bash
cd backend
npm install
cp ../.env.example .env  # Configure database
npm run dev  # Starts on port 5000
```

### Static Deployment (Recommended)
For free hosting, use frontend-only:
```bash
cd frontend
npm install
npm run build  # Creates dist/ folder for deployment
```

## 🌐 Deployment

The project is configured for static hosting on multiple platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist/public`
4. Deploy automatically

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`
4. Deploy

### GitHub Pages
Use the included GitHub Actions workflow in `.github/workflows/deploy.yml`

## 📂 Project Structure

```
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Frontend build configuration
├── backend/                # Node.js backend server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database layer
│   └── package.json        # Backend dependencies
├── shared/                 # Shared TypeScript definitions
├── attached_assets/        # Project assets and images
├── docs/                   # Documentation
└── .github/               # GitHub templates and workflows
```

## 🎨 Services Offered

- **Data Analysis**: Advanced statistical analysis and insights
- **Dashboard Creation**: Interactive Power BI and Tableau dashboards
- **Business Automation**: n8n workflow automation
- **Report Generation**: Comprehensive data reports
- **System Integration**: API and database connections

## 📧 Contact

- **Email**: sarkarsandip966@gmail.com
- **Phone**: +91 7980544934
- **LinkedIn**: [linkedin.com/in/sandip-sarkar-a84931260](https://linkedin.com/in/sandip-sarkar-a84931260)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ by Sandip Sarkar**