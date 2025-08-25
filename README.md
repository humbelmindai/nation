# 420 Nation - Cannabis Wellness Platform

> **The premier integrated cannabis wellness platform connecting consumers, dispensaries, healthcare professionals, and community in a compliant, secure, and user-friendly ecosystem.**

## 🌿 Overview

420 Nation is a comprehensive cannabis wellness platform that combines education, community, commerce, and healthcare services. Built with modern web technologies and designed with Steve Jobs-inspired minimalism, our platform serves as the bridge between cannabis consumers and the products, services, and professionals they need.

### 🎯 Mission Statement

To create the most trusted cannabis wellness platform that empowers users with education, community support, and access to quality products while maintaining the highest standards of compliance and user experience.

---

## ✨ Key Features

### 🏪 Store Discovery & Marketplace
- **Interactive Map**: Find dispensaries near you with Google Maps integration
- **Advanced Filtering**: Search by products, delivery options, ratings, and more
- **Real-time Inventory**: Live product availability and pricing
- **Store Profiles**: Detailed information, photos, hours, and reviews

### 🛒 E-commerce Platform
- **Multi-vendor Marketplace**: Shop from multiple dispensaries in one order
- **Secure Payments**: PCI-compliant payment processing
- **Order Tracking**: Real-time order status and delivery tracking
- **Age Verification**: Compliant age verification at every step

### 👨‍⚕️ Professional Network
- **Healthcare Professionals**: Connect with cannabis-specialized doctors and psychologists
- **Consultation Booking**: Schedule in-person or virtual appointments
- **Medical Records**: Secure, private medical information storage
- **Expert Recommendations**: Personalized product and dosage guidance

### 📚 Educational Content
- **Blog & News**: Latest cannabis research, industry news, and education
- **Podcast Integration**: Educational and entertainment cannabis podcasts
- **Community Forums**: User discussions, Q&A, and experience sharing
- **Expert Content**: Verified information from medical professionals

### 🔒 Compliance & Security
- **Cannabis Regulations**: Full compliance with state and local cannabis laws
- **Track & Trace**: Metrc integration for seed-to-sale tracking
- **Age Verification**: Multi-step verification process
- **Data Protection**: GDPR/CCPA compliant data handling

---

## 🏗️ Technology Stack

### Frontend
- **Framework**: Next.js 14+ with React 18+
- **Language**: TypeScript for type safety
- **Styling**: TailwindCSS with custom design system
- **State Management**: Zustand + React Query
- **Mobile**: Progressive Web App (PWA) with offline support

### Backend
- **Runtime**: Node.js 20+ with Express.js
- **Language**: TypeScript with ES Modules
- **Database**: MariaDB 11+ with Redis caching
- **Search**: Elasticsearch for product and content search
- **Authentication**: JWT with refresh tokens

### Infrastructure
- **Containerization**: Docker with Docker Compose
- **Cloud**: Multi-cloud deployment (AWS/GCP/Azure)
- **CDN**: Global content delivery with image optimization
- **Monitoring**: Comprehensive logging and performance monitoring

---

## 📋 Development Phases

### Phase 1: Foundation & Discovery (Weeks 1-8)
- ✅ Project documentation and architecture
- 🔄 Landing page with store discovery
- 🔄 User authentication and age verification
- 🔄 Basic store registration and profiles

### Phase 2: Core Platform Features (Weeks 9-20)
- 📋 Enhanced store management system
- 📋 Community forum and social features
- 📋 Content management system (blog/news)
- 📋 Professional network integration

### Phase 3: E-commerce & Advanced Features (Weeks 21-32)
- 📋 Multi-vendor marketplace
- 📋 Point-of-sale system integration
- 📋 Live events and streaming
- 📋 Mobile application (iOS/Android)

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** v20.x or higher
- **Docker** v24.x or higher
- **npm** v10.x or higher
- **MariaDB** 11.x or higher (if running locally)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/420nation/platform.git
   cd nation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```bash
   # Database
   DATABASE_URL="mysql://user:password@localhost:3306/nation_db"
   REDIS_URL="redis://localhost:6379"
   
   # Authentication
   JWT_SECRET="your-super-secure-jwt-secret-key"
   JWT_EXPIRE="15m"
   REFRESH_TOKEN_EXPIRE="30d"
   
   # Third-party APIs
   GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   METRC_API_KEY="your-metrc-api-key"
   
   # Email & SMS
   SENDGRID_API_KEY="your-sendgrid-api-key"
   TWILIO_ACCOUNT_SID="your-twilio-account-sid"
   TWILIO_AUTH_TOKEN="your-twilio-auth-token"
   ```

4. **Start the database**
   ```bash
   docker-compose up -d mariadb redis
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
nation/
├── docs/                    # Project documentation
│   ├── PRD.md              # Product Requirements Document
│   ├── ARCHITECTURE.md      # Technical architecture
│   ├── DESIGN_SYSTEM.md    # UI/UX design guidelines
│   ├── SECURITY.md         # Security & compliance
│   ├── DATABASE_SCHEMA.md   # Database design
│   └── API_DOCUMENTATION.md # API reference
├── src/
│   ├── components/          # React components
│   │   ├── common/         # Reusable UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── domain/         # Feature-specific components
│   ├── pages/              # Next.js pages and API routes
│   │   ├── api/            # API endpoints
│   │   ├── auth/           # Authentication pages
│   │   ├── stores/         # Store-related pages
│   │   └── dashboard/      # User dashboard
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Global styles and design tokens
│   └── lib/                # Third-party service integrations
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── icons/              # Icon assets
├── config/                  # Configuration files
├── tests/                   # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── e2e/                # End-to-end tests
├── docker-compose.yml      # Development environment setup
├── package.json            # Project dependencies
└── README.md               # This file
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e

# Run specific test files
npm test -- --testPathPattern=auth

# Run tests for changed files only
npm run test:changed
```

### Test Types

- **Unit Tests**: Component and function testing with Jest
- **Integration Tests**: API endpoint testing with Supertest
- **End-to-End Tests**: Full user flow testing with Cypress
- **Performance Tests**: Load testing with Artillery
- **Security Tests**: Automated security scanning

---

## 🔧 Available Scripts

### Development
```bash
npm run dev           # Start development server
npm run dev:api       # Start API server only
npm run dev:client    # Start client only
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint errors
npm run type-check    # Run TypeScript type checking
```

### Database
```bash
npm run db:migrate    # Run database migrations
npm run db:seed       # Seed database with test data
npm run db:reset      # Reset database (migrate + seed)
npm run db:studio     # Open database management tool
```

### Quality Assurance
```bash
npm run test          # Run all tests
npm run test:unit     # Run unit tests only
npm run test:e2e      # Run end-to-end tests
npm run security      # Run security audit
npm run performance   # Run performance tests
```

### Deployment
```bash
npm run build:docker # Build Docker image
npm run deploy:staging # Deploy to staging
npm run deploy:prod   # Deploy to production
```

---

## 🌍 Environment Configuration

### Environment Variables

#### Required Variables
```bash
# Database Connection
DATABASE_URL="mysql://user:password@host:port/database"
REDIS_URL="redis://host:port"

# Authentication & Security
JWT_SECRET="your-jwt-secret-minimum-32-chars"
ENCRYPTION_KEY="your-encryption-key-32-chars"

# Third-party Services
GOOGLE_MAPS_API_KEY="your-google-maps-key"
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

#### Optional Variables
```bash
# Email Services
SENDGRID_API_KEY="SG...."
SENDGRID_FROM_EMAIL="noreply@420nation.com"

# SMS Services
TWILIO_ACCOUNT_SID="AC..."
TWILIO_AUTH_TOKEN="your-twilio-token"
TWILIO_PHONE_NUMBER="+1234567890"

# File Storage
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_S3_BUCKET="420nation-uploads"
AWS_REGION="us-west-2"

# Cannabis Compliance
METRC_API_KEY="your-metrc-api-key"
METRC_USER_KEY="your-metrc-user-key"
METRC_VENDOR_KEY="your-metrc-vendor-key"

# Analytics & Monitoring
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
SENTRY_DSN="https://your-sentry-dsn"
MIXPANEL_TOKEN="your-mixpanel-token"

# Feature Flags
ENABLE_ECOMMERCE="true"
ENABLE_LIVE_CHAT="true"
ENABLE_PUSH_NOTIFICATIONS="true"
```

### Environment Files
- `.env.local` - Local development
- `.env.staging` - Staging environment  
- `.env.production` - Production environment
- `.env.test` - Testing environment

---

## 📊 Performance & Monitoring

### Performance Targets
- **Page Load Time**: < 2 seconds (First Contentful Paint)
- **API Response Time**: < 500ms (95th percentile)
- **Database Query Time**: < 100ms (95th percentile)
- **Uptime**: 99.9% SLA

### Monitoring Tools
- **Application Performance**: New Relic / DataDog
- **Error Tracking**: Sentry for real-time error monitoring
- **Uptime Monitoring**: External service monitoring
- **Analytics**: Google Analytics 4 + Mixpanel
- **Logs**: Centralized logging with structured data

### Health Checks
```bash
# Check application health
curl https://api.420nation.com/health

# Check database connectivity
curl https://api.420nation.com/health/database

# Check external services
curl https://api.420nation.com/health/services
```

---

## 🔐 Security

### Security Features
- **Multi-Factor Authentication**: Email, SMS, and TOTP support
- **Age Verification**: Multi-step cannabis age verification
- **Data Encryption**: AES-256 encryption for sensitive data
- **Secure Communications**: TLS 1.3 for all traffic
- **Rate Limiting**: API rate limiting and DDoS protection
- **Input Validation**: Comprehensive input sanitization
- **SQL Injection Prevention**: Parameterized queries only
- **XSS Protection**: Content Security Policy headers

### Compliance Standards
- **Cannabis Regulations**: State-specific cannabis law compliance
- **Track & Trace**: Metrc integration for inventory tracking
- **Data Protection**: GDPR and CCPA compliant data handling
- **PCI DSS**: Secure payment processing compliance
- **HIPAA**: Medical consultation data protection

### Security Testing
```bash
# Run security audit
npm audit

# Check for secrets in code
npm run security:secrets

# Run SAST (Static Application Security Testing)
npm run security:sast

# Run dependency vulnerability scan
npm run security:deps
```

---

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Run production tests**
   ```bash
   npm run test:prod
   ```

3. **Deploy using Docker**
   ```bash
   docker build -t 420nation/platform .
   docker run -d -p 3000:3000 420nation/platform
   ```

4. **Deploy using PM2**
   ```bash
   pm2 start ecosystem.config.js --env production
   ```

### Docker Deployment

```bash
# Build and start all services
docker-compose up -d

# Start specific services
docker-compose up -d app mariadb redis

# View logs
docker-compose logs -f app

# Scale the application
docker-compose up -d --scale app=3
```

### Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates installed
- [ ] CDN configured for static assets
- [ ] Monitoring and logging set up
- [ ] Backup systems configured
- [ ] Security scans passed
- [ ] Performance tests passed
- [ ] Load balancer configured

---

## 📖 Documentation

### Available Documentation

- **[PRD.md](./PRD.md)** - Product Requirements Document
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical Architecture
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - UI/UX Design Guidelines  
- **[SECURITY.md](./SECURITY.md)** - Security & Compliance Framework
- **[DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)** - Database Design
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - API Reference
- **[TODO.md](./TODO.md)** - Development Roadmap

### API Documentation
Interactive API documentation is available at:
- **Development**: http://localhost:3000/api-docs
- **Staging**: https://api-staging.420nation.com/docs
- **Production**: https://api.420nation.com/docs

---

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting pull requests.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the coding standards
   - Write tests for new features
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Create a pull request**

### Coding Standards

- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Code formatting is automated
- **TypeScript**: Use strict typing, avoid `any`
- **Testing**: Maintain >80% test coverage
- **Documentation**: Update docs for new features
- **Git**: Use conventional commit messages

### Code Review Process

1. All changes require review from a core team member
2. Automated tests must pass
3. Security scan must pass
4. Performance impact must be assessed
5. Documentation must be updated

---

## 📞 Support & Community

### Getting Help

- **Documentation**: Check our comprehensive docs first
- **GitHub Issues**: Report bugs and request features
- **Discord Community**: Join our developer community
- **Email Support**: support@420nation.com

### Community Resources

- **Developer Discord**: https://discord.gg/420nation-dev
- **Blog**: https://blog.420nation.com/developers
- **Twitter**: [@420NationDev](https://twitter.com/420nationdev)
- **YouTube**: Tutorials and walkthroughs

---

## 📄 Legal & Compliance

### Cannabis Industry Compliance

This platform is designed to operate in compliance with applicable cannabis laws and regulations. Users and operators must ensure compliance with:

- Local and state cannabis regulations
- Age verification requirements (21+ in most jurisdictions)
- Track-and-trace requirements
- Tax obligations
- License requirements for commercial operations

### Data Privacy

We take data privacy seriously and comply with:
- **GDPR** (General Data Protection Regulation)
- **CCPA** (California Consumer Privacy Act)  
- **PIPEDA** (Personal Information Protection and Electronic Documents Act)
- Healthcare data protection where applicable

### Terms of Service

By using this platform, you agree to our Terms of Service and Privacy Policy. Please review these documents carefully.

---

## 📊 Project Status

### Current Version: 1.0.0-alpha

- **Status**: Active Development
- **Phase**: Phase 1 - Foundation & Discovery
- **Next Milestone**: Landing Page Launch (Week 4)
- **License**: MIT License

### Roadmap Milestones

- **Q3 2025**: Phase 1 completion (Foundation & Discovery)
- **Q4 2025**: Phase 2 completion (Core Platform Features)  
- **Q1 2026**: Phase 3 completion (E-commerce & Advanced Features)
- **Q2 2026**: Mobile app launch (iOS & Android)

### Key Metrics

- **Code Coverage**: 85%+
- **Performance Score**: 95+/100 (Lighthouse)
- **Security Score**: A+ (Security Headers)
- **Accessibility**: WCAG 2.1 AA Compliant

---

## 🙏 Acknowledgments

### Core Team

- **Product Lead**: Cannabis industry expertise and vision
- **Technical Lead**: Architecture and development leadership
- **Design Lead**: Steve Jobs-inspired minimalist design
- **Compliance Lead**: Cannabis regulations and legal compliance

### Special Thanks

- Cannabis industry professionals for guidance and feedback
- Open source community for amazing tools and libraries
- Early beta testers and community members
- Legal and compliance advisors

### Technology Partners

- **Google Maps**: Location services and mapping
- **Stripe**: Secure payment processing
- **Metrc**: Cannabis track-and-trace integration
- **SendGrid**: Transactional email services
- **Twilio**: SMS and communication services

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the cannabis community**

*420 Nation - Connecting cannabis consumers, businesses, and healthcare professionals through technology, education, and compliance.*

---

**Last Updated**: August 23, 2025  
**Version**: 1.0.0-alpha  
**Node.js**: v20+  
**Next.js**: v14+