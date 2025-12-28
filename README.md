# AutoHub Solutions - WhatsApp & AI Automation Platform

A complete, production-ready website and web platform for AutoHub Solutions, an automation company providing WhatsApp and AI-based communication automation services.

## 🚀 Features

### Frontend Pages
- **Home** - Hero section, value proposition, services overview, and CTAs
- **About Us** - Company story, mission, vision, and values
- **Services** - Comprehensive service offerings with detailed features
- **How It Works** - 4-step process explanation
- **Use Cases** - Industry-specific solutions (Colleges, Schools, Restaurants, Hotels, Companies)
- **Pricing** - Three-tier pricing (Basic, Professional, Enterprise) with add-ons
- **Contact** - Contact form with multiple communication channels
- **Admin Login** - Secure admin portal access

### Backend Features
- RESTful API endpoints
- Database integration with Prisma ORM
- Contact form submission and lead storage
- Admin authentication system
- Scalable architecture ready for WhatsApp API integration

### Design
- **Modern & Professional** - Clean, startup-focused design
- **Mobile-First** - Fully responsive across all devices
- **Color Palette:**
  - Primary: #0066FF (Trust Blue)
  - Secondary: #00D9A3 (Innovation Green)
  - Accent: #FF6B00 (Energy Orange)
  - Dark: #1A1A2E (Professional Navy)
  - Light: #F8F9FA (Clean Background)

## 🛠 Tech Stack

- **Frontend:** Next.js 14 (React), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes (Node.js)
- **Database:** PostgreSQL with Prisma ORM
- **Icons:** React Icons
- **Authentication:** bcryptjs (ready for NextAuth.js)
- **Deployment:** Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd autohub-solutions
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your database connection:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/autohub?schema=public"
```

4. **Set up the database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# (Optional) Seed the database
npm run seed
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗄 Database Schema

The platform includes the following database models:

- **Admin** - Admin user accounts
- **Lead** - Contact form submissions and leads
- **Service** - Service offerings management
- **PricingPlan** - Pricing plans configuration
- **UseCase** - Industry-specific use cases
- **Subscriber** - Newsletter subscribers

## 🔐 Admin Access

To create an admin user, use Prisma Studio or seed script:

```bash
npx prisma studio
```

Or create manually with bcrypt-hashed password:
```typescript
import bcrypt from 'bcryptjs';
const hashedPassword = await bcrypt.hash('your-password', 10);
```

## 📱 API Endpoints

### Public APIs
- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin authentication

### Future APIs (Ready to Implement)
- `/api/leads` - Manage leads (CRUD)
- `/api/services` - Manage services
- `/api/pricing` - Manage pricing plans
- `/api/subscribers` - Newsletter management

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy

### Database Hosting Options

- **Vercel Postgres** - Seamless integration
- **Supabase** - Free tier available
- **Railway** - Easy PostgreSQL hosting
- **AWS RDS** - Enterprise solution
- **DigitalOcean** - Managed PostgreSQL

### Environment Variables (Production)

Set these in your hosting platform:
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
NODE_ENV="production"
```

## 📝 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Prisma Studio (Database GUI)
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Generate Prisma Client
npx prisma generate
```

## 🎨 Customization

### Brand Colors
Update colors in `app/globals.css`:
```css
:root {
  --primary: #0066FF;
  --secondary: #00D9A3;
  --accent: #FF6B00;
}
```

### Content
- Update service offerings in `/app/services/page.tsx`
- Modify pricing plans in `/app/pricing/page.tsx`
- Edit use cases in `/app/use-cases/page.tsx`
- Change contact information in `/components/Footer.tsx`

## 🔄 Future Enhancements

Ready to implement:
- [ ] WhatsApp Business API integration
- [ ] AI chatbot implementation
- [ ] Admin dashboard with full CRUD operations
- [ ] Analytics and reporting
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Email notification system
- [ ] Advanced lead management
- [ ] CRM integration

## 📞 Support

For questions or support:
- Email: hello@autohub.solutions
- WhatsApp: +1 (555) 123-4567
- Website: https://autohub.solutions

## 📄 License

Copyright © 2024 AutoHub Solutions. All rights reserved.

---

**Built with ❤️ for AutoHub Solutions**

Ready to onboard clients within 3 months! 🚀
