# 📁 Project Structure - AutoHub Solutions

## Overview

This document provides a comprehensive overview of the project structure, architecture, and key files.

## 🌳 Directory Structure

```
autohub-solutions/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind
│   │
│   ├── about/
│   │   └── page.tsx             # About Us page
│   │
│   ├── services/
│   │   └── page.tsx             # Services page
│   │
│   ├── how-it-works/
│   │   └── page.tsx             # How It Works page
│   │
│   ├── use-cases/
│   │   └── page.tsx             # Use Cases page
│   │
│   ├── pricing/
│   │   └── page.tsx             # Pricing page
│   │
│   ├── contact/
│   │   └── page.tsx             # Contact page with form
│   │
│   ├── admin/
│   │   ├── page.tsx             # Admin login page
│   │   └── dashboard/
│   │       └── page.tsx         # Admin dashboard
│   │
│   └── api/                     # API Routes
│       ├── contact/
│       │   └── route.ts         # Contact form submission
│       └── admin/
│           └── login/
│               └── route.ts     # Admin authentication
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Main navigation
│   └── Footer.tsx               # Site footer
│
├── lib/                         # Utility libraries
│   └── prisma.ts                # Prisma client singleton
│
├── prisma/                      # Database
│   ├── schema.prisma            # Database schema
│   ├── seed.ts                  # Database seeding script
│   └── migrations/              # Database migrations
│
├── public/                      # Static assets
│   └── (images, icons, etc.)
│
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example environment variables
├── .gitignore                   # Git ignore file
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── prisma.config.ts             # Prisma configuration
├── postcss.config.mjs           # PostCSS configuration
├── eslint.config.mjs            # ESLint configuration
│
├── README.md                    # Main documentation
├── DEPLOYMENT.md                # Deployment guide
└── PROJECT_STRUCTURE.md         # This file
```

## 📄 Key Files Explained

### Frontend Pages

#### `app/page.tsx` (Home Page)
- Hero section with value proposition
- Key benefits showcase
- Services overview
- Industry trust indicators
- CTA sections

#### `app/about/page.tsx`
- Company story and mission
- Statistics and achievements
- Core values
- Team highlights

#### `app/services/page.tsx`
- 9 detailed service offerings
- Feature lists for each service
- Visual service presentations
- CTA for each service

#### `app/how-it-works/page.tsx`
- 4-step process breakdown
- Timeline visualization
- Expected outcomes
- Behind-the-scenes technology

#### `app/use-cases/page.tsx`
- Industry-specific solutions
  - Colleges & Universities
  - Schools & K-12
  - Restaurants
  - Hotels
  - Corporate
- Real results for each industry

#### `app/pricing/page.tsx`
- Three-tier pricing structure
  - Basic ($99/month)
  - Professional ($299/month)
  - Enterprise (Custom)
- Add-ons and extras
- FAQ section

#### `app/contact/page.tsx`
- Contact form
- Multiple communication channels
- Business hours
- Direct WhatsApp/phone links

#### `app/admin/page.tsx`
- Admin login interface
- Secure authentication

#### `app/admin/dashboard/page.tsx`
- Dashboard overview
- Quick statistics
- Recent leads
- Quick actions

### Components

#### `components/Navbar.tsx`
- Responsive navigation
- Mobile menu
- Dynamic routing
- CTA buttons

#### `components/Footer.tsx`
- Site map links
- Contact information
- Social media links
- Newsletter signup (ready)

### API Routes

#### `app/api/contact/route.ts`
- POST endpoint for contact form
- Creates Lead in database
- Input validation
- Error handling

#### `app/api/admin/login/route.ts`
- POST endpoint for admin login
- Password verification with bcrypt
- Returns admin data (excluding password)

### Database

#### `prisma/schema.prisma`
Contains 6 models:

1. **Admin** - Admin user accounts
   - email, password, name, role
   
2. **Lead** - Contact submissions
   - name, email, phone, company, message, source, status
   
3. **Service** - Service offerings
   - title, slug, description, icon, features, isActive, order
   
4. **PricingPlan** - Pricing tiers
   - name, slug, price, currency, interval, description, features, isPopular, order
   
5. **UseCase** - Industry use cases
   - title, slug, category, description, benefits, icon, order
   
6. **Subscriber** - Newsletter subscribers
   - email, status

#### `prisma/seed.ts`
Seeds database with:
- Default admin user
- Sample services
- Pricing plans
- Use cases

### Configuration Files

#### `next.config.ts`
- Next.js configuration
- Build settings
- Environment variables handling

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom colors (inline in globals.css)
- Theme extensions

#### `tsconfig.json`
- TypeScript configuration
- Path aliases (@/*)
- Compiler options

#### `prisma.config.ts`
- Prisma configuration
- Database connection
- Migration settings

## 🎨 Design System

### Color Palette
```css
Primary: #0066FF    /* Trust Blue */
Secondary: #00D9A3  /* Innovation Green */
Accent: #FF6B00     /* Energy Orange */
Dark: #1A1A2E       /* Professional Navy */
Light: #F8F9FA      /* Clean Background */
```

### Typography
- Font: System UI fonts (optimized for web)
- Headings: Bold, large sizes (text-4xl to text-6xl)
- Body: Regular weight, readable line-height

### Components Style
- Rounded corners: rounded-lg, rounded-xl
- Shadows: shadow-md, shadow-lg, shadow-xl
- Gradients: Linear gradients for CTAs and highlights
- Hover effects: Smooth transitions (duration-200)

## 🔌 API Architecture

### Current APIs

```typescript
POST /api/contact
Body: { name, email, phone?, company?, message }
Response: { success: true, leadId: string }

POST /api/admin/login
Body: { email, password }
Response: { success: true, admin: { id, email, name, role } }
```

### Future APIs (Ready to Implement)

```typescript
// Leads Management
GET    /api/leads           # List all leads
GET    /api/leads/:id       # Get single lead
PUT    /api/leads/:id       # Update lead
DELETE /api/leads/:id       # Delete lead

// Services Management
GET    /api/services        # List services
POST   /api/services        # Create service
PUT    /api/services/:id    # Update service
DELETE /api/services/:id    # Delete service

// Pricing Management
GET    /api/pricing         # List pricing plans
POST   /api/pricing         # Create plan
PUT    /api/pricing/:id     # Update plan
DELETE /api/pricing/:id     # Delete plan

// Analytics
GET    /api/analytics       # Get dashboard analytics
```

## 🔐 Authentication Flow

1. User submits login form
2. POST to `/api/admin/login`
3. Server validates credentials with bcrypt
4. Returns admin data (excluding password)
5. Client redirects to `/admin/dashboard`

**Note:** Currently basic implementation. Ready for NextAuth.js integration.

## 📊 Data Flow

### Contact Form Submission
```
User fills form → Submit → POST /api/contact → 
Create Lead in DB → Return success → Show confirmation
```

### Admin Login
```
User enters credentials → Submit → POST /api/admin/login → 
Validate with DB → Verify password → Return admin data → 
Redirect to dashboard
```

## 🚀 Build Process

```bash
# Development
npm run dev              # Starts dev server (port 3000)

# Production
npm run build           # Creates optimized build
npm start               # Starts production server

# Database
npm run db:generate     # Generate Prisma client
npm run db:migrate      # Run migrations
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio GUI
```

## 📦 Dependencies Overview

### Core
- **next** (16.1.1) - React framework
- **react** (19.2.3) - UI library
- **typescript** (5.x) - Type safety

### Database
- **@prisma/client** (7.2.0) - Database ORM
- **prisma** (7.2.0) - Database toolkit

### UI
- **tailwindcss** (4.x) - Styling
- **react-icons** (5.5.0) - Icon library
- **framer-motion** (12.x) - Animations (ready to use)

### Forms & Validation
- **react-hook-form** (7.x) - Form management
- **zod** (4.x) - Schema validation

### Authentication
- **bcryptjs** (3.x) - Password hashing
- **next-auth** (4.x) - Auth library (ready)

## 🔄 State Management

Currently using:
- React hooks (useState, useEffect)
- Client-side form state
- Server-side database state

Ready to add:
- Context API for global state
- Zustand/Redux for complex state
- React Query for server state

## 🧪 Testing Strategy (Ready to Implement)

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

Recommended tools:
- Jest + React Testing Library
- Cypress or Playwright
- Prisma test environment

## 📈 Performance Optimizations

Current:
- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ Static page generation where possible
- ✅ Tree-shaking enabled

Ready to add:
- CDN integration (automatic with Vercel)
- Caching strategies
- Service workers
- Progressive Web App (PWA)

## 🔒 Security Features

Implemented:
- ✅ Password hashing with bcrypt
- ✅ Environment variables for secrets
- ✅ Input validation on forms
- ✅ HTTPS ready

Ready to add:
- CSRF protection
- Rate limiting
- SQL injection prevention (Prisma handles this)
- XSS protection
- Content Security Policy headers

## 📱 Responsive Design

Breakpoints (Tailwind defaults):
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

All pages are mobile-first and fully responsive.

## 🌐 Internationalization (Ready to Implement)

Structure supports:
- Multi-language content
- RTL layouts
- Localized formatting
- Currency conversion

## 📞 Support & Maintenance

### Regular Updates Needed
- [ ] Update dependencies monthly
- [ ] Review security advisories
- [ ] Monitor performance metrics
- [ ] Backup database regularly
- [ ] Review error logs

### Content Updates
- Services descriptions
- Pricing plans
- Use cases
- Contact information
- Team information

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Tech Stack:** Next.js 14, TypeScript, Prisma, PostgreSQL
