# Contributing to Data & Automation Hub Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the portfolio website.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/data-analyst-portfolio.git
   cd data-analyst-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:5000](http://localhost:5000) in your browser

## 📁 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
├── attached_assets/        # Images and media assets
├── shared/                 # Shared TypeScript definitions
├── .github/               # GitHub workflows and templates
└── docs/                  # Documentation files
```

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling
- Maintain consistent component structure
- Use meaningful variable and function names

### Component Guidelines
- Keep components small and focused
- Use proper TypeScript typing
- Include proper accessibility attributes
- Follow the existing design system

### Commit Convention
Use conventional commits for clear history:
- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` code style changes
- `refactor:` code refactoring
- `test:` test additions/changes

Example:
```bash
git commit -m "feat: add dark mode toggle to navigation"
git commit -m "fix: resolve mobile menu not closing on tab selection"
```

## 🎨 Design System

The project uses a custom Material Design-inspired system:
- **Colors**: Pastel color palette defined in CSS variables
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Icons**: Lucide React

## 📝 Making Contributions

### Bug Reports
When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and device information

### Feature Requests
For new features:
- Describe the feature and its purpose
- Explain how it would benefit users
- Provide mockups or examples if possible

### Pull Requests
1. Create a feature branch from `main`
2. Make your changes following the guidelines
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with a clear description

### Pull Request Checklist
- [ ] Code follows project style guidelines
- [ ] Changes are tested and working
- [ ] Documentation is updated
- [ ] Commit messages follow convention
- [ ] No console errors or warnings
- [ ] Responsive design is maintained

## 🧪 Testing

Before submitting:
1. Test on multiple screen sizes
2. Verify all navigation works correctly
3. Check contact form functionality
4. Ensure smooth animations and transitions
5. Validate accessibility compliance

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 🤝 Community Guidelines

- Be respectful and professional
- Provide constructive feedback
- Help others learn and grow
- Focus on the project's goals and user experience

## 📞 Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Contact the project maintainer
- Check existing documentation

Thank you for contributing to making this portfolio website better! 🚀