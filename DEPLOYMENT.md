# Free Deployment Guide

Your portfolio website is now configured for free static hosting! The contact form uses mailto links, so no backend is needed.

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Set build command: `npm run build`
6. Set output directory: `dist/public`
7. Deploy!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Connect your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist/public`
7. Deploy!

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages"
4. Select source: "GitHub Actions"
5. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Build Command
For all platforms, use: `npm run build`

## Contact Form
The contact form now works via mailto links - when users submit the form, it opens their email client with the message pre-filled to send to: sarkarsandip966@gmail.com

## Features Working
✅ Fully responsive design
✅ Material Design aesthetics 
✅ Contact form (mailto)
✅ Custom dashboard showcase
✅ Professional portfolio sections
✅ LinkedIn integration
✅ No backend required