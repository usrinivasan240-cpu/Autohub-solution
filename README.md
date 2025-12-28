# AutoHub Solutions - Production-Ready Startup Website

A complete, production-ready website and backend platform for AutoHub Solutions, an automation company specializing in WhatsApp and AI-based communication automation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+ (or use SQLite for development)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/autohub-solutions.git
cd autohub-solutions

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Setup database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

---

## 📁 Project Structure

```
autohub-solutions/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About Us
│   │   ├── services/page.tsx  # Services
│   │   ├── pricing/page.tsx   # Pricing
│   │   ├── contact/page.tsx   # Contact form
│   │   ├── admin/             # Admin dashboard
│   │   └── api/               # API routes
│   │       ├── contact/       # Contact form endpoint
│   │       ├── auth/          # Authentication
│   │       └── leads/         # Lead management
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── styles/                # Global styles
├── prisma/
│   └── schema.prisma          # Database schema
├── docs/
│   └── API.md                 # API documentation
└── public/                    # Static assets
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | `#14b8a6` | Brand color, buttons, accents |
| Secondary Navy | `#1e293b` | Text, backgrounds, headers |
| Accent Orange | `#f97316` | CTAs, highlights, notifications |
| Success Green | `#22c55e` | Success states |
| Warning Yellow | `#eab308` | Warnings |
| Error Red | `#ef4444` | Errors |

### Typography

- **Headings**: Plus Jakarta Sans (Bold)
- **Body**: Inter (Regular/Medium)

### Tailwind Configuration

Custom colors, animations, and components are defined in `tailwind.config.js`.

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, testimonials, CTA |
| About | `/about` | Company story, mission, team |
| Services | `/services` | Detailed service offerings |
| How It Works | `/how-it-works` | Step-by-step onboarding guide |
| Use Cases | `/use-cases` | Industry-specific use cases |
| Pricing | `/pricing` | Plan comparison with FAQ |
| Contact | `/contact` | Contact form and business info |
| Admin Login | `/admin/login` | Admin authentication |
| Admin Dashboard | `/admin/dashboard` | Lead and message management |

---

## 🔧 Backend Features

### Database Schema (Prisma)

```prisma
- User            # Leads, customers, admins
- Lead            # Sales pipeline tracking
- Service         # Service offerings
- Plan            # Pricing plans
- ContactMessage  # Incoming messages
- Subscription    # Customer subscriptions
- ApiLog          # API request logging
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/contact` | GET | Get all messages (admin) |
| `/api/auth/login` | POST | User authentication |
| `/api/leads` | POST | Create new lead |
| `/api/leads` | GET | Get all leads (admin) |

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### Backend
- **Framework**: Next.js API Routes
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt

### Database
- **Production**: PostgreSQL
- **Development**: SQLite (built-in)

### DevOps
- **Package Manager**: npm
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Environment Variables on Vercel:**
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Docker

```dockerfile
# Build image
docker build -t autohub .

# Run container
docker run -p 3000:3000 --env-file .env autohub
```

### Railway

1. Connect GitHub repository
2. Add PostgreSQL addon
3. Set environment variables
4. Deploy

---

## 📈 Performance Optimization

- **Images**: Next.js Image optimization
- **Fonts**: Self-hosted Google fonts
- **Code Splitting**: Automatic per-page bundles
- **Caching**: Static page generation for marketing pages

---

## 🔒 Security Features

- **HTTPS**: Enforced in production
- **CORS**: Configured for API endpoints
- **Rate Limiting**: 100 requests/minute
- **Input Validation**: Zod schema validation
- **Password Hashing**: bcrypt
- **JWT Authentication**: Secure session management

---

## 📊 Analytics

Set up analytics in `.env`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint
```

---

## 📝 Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/autohub"

# Authentication
JWT_SECRET="your-super-secret-key"
JWT_EXPIRES_IN="7d"

# Email (optional)
EMAILJS_SERVICE_ID="xxx"
EMAILJS_TEMPLATE_ID="xxx"
EMAILJS_PUBLIC_KEY="xxx"

# App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_SUPPORT_EMAIL="support@autohub.in"

# Analytics (optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details.

---

## 📞 Support

- **Email**: hello@autohub.in
- **Website**: https://autohub.in
- **Documentation**: https://docs.autohub.in

---

Built with ❤️ by AutoHub Solutions
