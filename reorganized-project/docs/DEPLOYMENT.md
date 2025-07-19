# Deployment Guide

This portfolio website is optimized for static hosting platforms and can be deployed for free on multiple services.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)
**Zero-configuration deployment with excellent performance**

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

2. **Configuration**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes
   - Automatic deployments on every push to main branch

### 2. Netlify
**Simple drag-and-drop or Git-based deployment**

1. **Git Deployment**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Node version: `18`

3. **Advanced Settings** (Optional)
   - Add environment variables if needed
   - Configure custom domain
   - Set up form handling

### 3. GitHub Pages
**Free hosting directly from your GitHub repository**

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages"
   - Select source: "GitHub Actions"

2. **Automatic Deployment**
   - The included workflow (`.github/workflows/deploy.yml`) handles deployment
   - Triggers on push to main/master branch
   - Builds and deploys automatically

3. **Custom Domain** (Optional)
   - Add CNAME file with your domain
   - Configure DNS settings
   - Enable HTTPS in settings

### 4. Surge.sh
**Simple command-line deployment**

1. **Install Surge**
   ```bash
   npm install -g surge
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   cd dist/public
   surge
   ```

3. **Custom Domain**
   ```bash
   surge --domain your-domain.com
   ```

## 🔧 Build Configuration

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Type checking
npm run check
```

### Environment Variables
The application doesn't require environment variables for static deployment. The contact form uses mailto links instead of server endpoints.

### Output Structure
```
dist/public/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js # JavaScript bundle
│   └── index-[hash].css # CSS bundle
└── [other assets]      # Images, fonts, etc.
```

## 🌐 Custom Domain Setup

### DNS Configuration
For custom domains, configure these DNS records:

**For Apex Domain (example.com):**
```
Type: A
Name: @
Value: [Platform IP - check provider docs]
```

**For Subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: [Platform domain - check provider docs]
```

### Platform-Specific Domain Setup

**Vercel:**
1. Add domain in project settings
2. Configure DNS as provided
3. Automatic SSL certificate

**Netlify:**
1. Add custom domain in site settings
2. Update DNS records
3. Enable HTTPS

**GitHub Pages:**
1. Add CNAME file to repository
2. Configure DNS
3. Enable HTTPS in settings

## 📊 Performance Optimization

### Included Optimizations
- ✅ Code splitting and lazy loading
- ✅ Asset compression and optimization
- ✅ CSS and JavaScript minification
- ✅ Image optimization
- ✅ Browser caching headers

### Additional Recommendations
- Use a CDN for global content delivery
- Enable compression (gzip/brotli)
- Monitor Core Web Vitals
- Implement service worker for caching

## 🔍 SEO Configuration

### Included SEO Features
- ✅ Meta tags and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Responsive design
- ✅ Fast loading times

### Additional SEO Steps
1. Submit sitemap to Google Search Console
2. Configure Google Analytics
3. Add structured data markup
4. Monitor search performance

## 🐛 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall
- Verify all dependencies are installed

**Assets Not Loading:**
- Check build output directory
- Verify asset paths are correct
- Ensure base URL is configured

**Contact Form Not Working:**
- Verify mailto links are properly formatted
- Check email client configuration
- Test on different devices/browsers

### Getting Help
- Check platform-specific documentation
- Review build logs for errors
- Test locally before deploying
- Contact platform support if needed

## 🎯 Production Checklist

Before deploying to production:

- [ ] Test all functionality locally
- [ ] Verify responsive design on all devices
- [ ] Check all links and navigation
- [ ] Test contact form on different email clients
- [ ] Validate HTML and CSS
- [ ] Test loading speed and performance
- [ ] Verify SEO meta tags
- [ ] Check browser compatibility
- [ ] Test social media sharing
- [ ] Configure analytics (if needed)

## 📈 Post-Deployment

After successful deployment:

1. **Monitor Performance**
   - Use tools like Google PageSpeed Insights
   - Monitor Core Web Vitals
   - Check uptime and availability

2. **Analytics Setup**
   - Configure Google Analytics
   - Set up goal tracking
   - Monitor user behavior

3. **Maintenance**
   - Regular dependency updates
   - Security monitoring
   - Performance optimization
   - Content updates

---

**Need Help?** Check the platform documentation or open an issue in the repository.