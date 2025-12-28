# 🚀 Deployment Guide - AutoHub Solutions

This guide will help you deploy the AutoHub Solutions platform to production.

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database hosted and accessible
- [ ] Domain name purchased (if applicable)
- [ ] SSL certificate configured (automatic with Vercel/Netlify)
- [ ] Contact form email notifications setup (optional)
- [ ] Analytics tracking configured (optional)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built specifically for Next.js
- Automatic SSL and CDN
- Zero configuration deployment
- Generous free tier
- Built-in analytics

**Steps:**

1. **Prepare your repository**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables:
     ```
     DATABASE_URL=your_postgres_connection_string
     NEXTAUTH_URL=https://yourdomain.com
     NEXTAUTH_SECRET=generate_a_random_string
     NODE_ENV=production
     ```
   - Click "Deploy"

3. **Set up database**
   - Choose one of the database options below
   - Add the `DATABASE_URL` to Vercel environment variables
   - Trigger a redeploy

**Cost:** Free for hobby projects, $20/month for Pro

---

### Option 2: Netlify

**Steps:**

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

2. **Environment variables**
   - Add all environment variables in Netlify dashboard

3. **Deploy**
   - Connect GitHub repository
   - Click "Deploy site"

**Cost:** Free for personal projects

---

### Option 3: Self-Hosted (VPS/Cloud)

**Requirements:**
- Ubuntu/Debian server
- Node.js 18+
- PostgreSQL
- Nginx (reverse proxy)
- PM2 (process manager)

**Steps:**

1. **Server setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Nginx
sudo apt install -y nginx

# Install PM2
sudo npm install -g pm2
```

2. **Clone and build**
```bash
cd /var/www
git clone your-repository.git autohub
cd autohub
npm install
npm run build
```

3. **Configure environment**
```bash
nano .env
# Add your production environment variables
```

4. **Start with PM2**
```bash
pm2 start npm --name "autohub" -- start
pm2 save
pm2 startup
```

5. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

**Cost:** $5-20/month (DigitalOcean, Linode, Vultr)

---

## 🗄 Database Hosting Options

### Option 1: Vercel Postgres (Easiest with Vercel)

```bash
# In Vercel dashboard
1. Go to Storage tab
2. Create Postgres database
3. Copy connection string
4. Add to environment variables
```

**Pros:** Seamless integration, automatic backups
**Cost:** Free tier available, $20/month for Pro

---

### Option 2: Supabase (Recommended for Free Tier)

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings > Database
4. Copy connection string (pooling connection recommended)
5. Update `DATABASE_URL` in your environment

**Example connection string:**
```
postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT].supabase.co:5432/postgres?pgbouncer=true
```

**Pros:** Free tier (500MB storage), real-time features, auth built-in
**Cost:** Free to start, $25/month for Pro

---

### Option 3: Railway

1. Go to [railway.app](https://railway.app)
2. Create new project > Add PostgreSQL
3. Copy connection string
4. Add to your hosting platform

**Pros:** Simple setup, auto-scaling
**Cost:** $5/month with $5 free credit

---

### Option 4: AWS RDS (Enterprise)

**For production/enterprise use:**
- High availability
- Automated backups
- Multi-AZ deployment
- Advanced monitoring

**Cost:** Starts at $15/month

---

## 🔐 Environment Variables Setup

Create these in your hosting platform:

### Required Variables
```env
# Database (from your chosen provider)
DATABASE_URL="postgresql://..."

# Application URL
NEXTAUTH_URL="https://yourdomain.com"

# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-here"

# Environment
NODE_ENV="production"
```

### Optional Variables
```env
# Email (if using email notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# WhatsApp Business API (when ready)
WHATSAPP_API_KEY="your-api-key"
WHATSAPP_PHONE_NUMBER_ID="your-phone-number-id"
```

---

## 🔄 Post-Deployment Steps

### 1. Run Database Migrations

**For Vercel/Netlify:**
```bash
# In your terminal
DATABASE_URL="your-production-db-url" npx prisma migrate deploy
```

Or add to your build command:
```
prisma migrate deploy && next build
```

**For self-hosted:**
```bash
npm run db:migrate
```

### 2. Seed the Database (Optional)

```bash
npm run db:seed
```

This creates:
- Admin user (email: admin@autohub.solutions, password: admin123)
- Sample services
- Sample pricing plans
- Sample use cases

⚠️ **Important:** Change the admin password immediately after first login!

### 3. Test the Deployment

- [ ] Visit homepage
- [ ] Test navigation
- [ ] Submit contact form
- [ ] Try admin login
- [ ] Check mobile responsiveness
- [ ] Test all CTAs and links

### 4. Configure Custom Domain (Optional)

**Vercel:**
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration instructions

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add to `app/layout.tsx`:
   ```tsx
   <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
   ```

### Error Tracking (Optional)

Consider adding:
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Hotjar** - User behavior

---

## 🔒 Security Checklist

- [ ] Environment variables secured (not in code)
- [ ] Admin password changed from default
- [ ] HTTPS enabled
- [ ] CORS configured properly
- [ ] Rate limiting implemented (optional)
- [ ] Database backup scheduled
- [ ] Security headers configured

---

## 🚀 Performance Optimization

### Before Launch
- [ ] Run `npm run build` to check for errors
- [ ] Test Lighthouse score (aim for 90+)
- [ ] Enable image optimization
- [ ] Configure caching headers
- [ ] Minify assets

### After Launch
- Monitor Core Web Vitals
- Set up uptime monitoring
- Configure CDN (automatic with Vercel/Netlify)

---

## 📞 Support & Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Prisma Docs:** [prisma.io/docs](https://prisma.io/docs)

---

## 💡 Quick Start Commands

```bash
# Production build
npm run build

# Run migrations
npx prisma migrate deploy

# Seed database
npm run db:seed

# Start production server (self-hosted)
npm start

# View database
npm run db:studio
```

---

**Need help?** Contact: hello@autohub.solutions

---

**Deployment Time Estimate:**
- Vercel + Supabase: 15-30 minutes
- Self-hosted: 1-2 hours
- Full customization: 2-4 hours
