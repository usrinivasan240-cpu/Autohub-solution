import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@autohub.solutions' },
    update: {},
    create: {
      email: 'admin@autohub.solutions',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  });

  console.log('Created admin user:', admin.email);

  const services = [
    {
      title: 'WhatsApp Business Automation',
      slug: 'whatsapp-automation',
      description: 'Complete WhatsApp Business API integration with automated message sending, broadcasting, and customer interaction management.',
      icon: 'FaWhatsapp',
      features: [
        'Automated message scheduling',
        'Bulk messaging campaigns',
        'Interactive message templates',
        'Media file sharing',
        'Contact list management',
      ],
      order: 1,
    },
    {
      title: 'AI Chatbot Development',
      slug: 'ai-chatbot',
      description: 'Intelligent conversational AI chatbots trained on your business data to handle customer queries 24/7.',
      icon: 'FaRobot',
      features: [
        'Natural language processing',
        'Context-aware conversations',
        'Multi-intent recognition',
        'Sentiment analysis',
        'Continuous learning',
      ],
      order: 2,
    },
    {
      title: 'AI-Powered Auto-Replies',
      slug: 'auto-replies',
      description: 'Smart automated responses that understand context and provide relevant information instantly.',
      icon: 'FaComment',
      features: [
        'Instant response times',
        'Personalized content',
        'FAQ automation',
        'Lead qualification',
        'Appointment scheduling',
      ],
      order: 3,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  console.log('Created services');

  const pricingPlans = [
    {
      name: 'Basic',
      slug: 'basic',
      price: 9900,
      currency: 'USD',
      interval: 'month',
      description: 'Perfect for small businesses and startups getting started with automation',
      features: [
        'Up to 1,000 messages/month',
        'Basic WhatsApp automation',
        'AI auto-replies',
        '2 automated workflows',
        'Email support',
      ],
      isPopular: false,
      order: 1,
    },
    {
      name: 'Professional',
      slug: 'professional',
      price: 29900,
      currency: 'USD',
      interval: 'month',
      description: 'Ideal for growing businesses that need advanced automation',
      features: [
        'Up to 10,000 messages/month',
        'Advanced WhatsApp automation',
        'AI chatbot with NLP',
        'Unlimited workflows',
        'Priority support',
        'Multi-language support',
      ],
      isPopular: true,
      order: 2,
    },
    {
      name: 'Enterprise',
      slug: 'enterprise',
      price: 0,
      currency: 'USD',
      interval: 'custom',
      description: 'For large organizations requiring enterprise-grade solutions',
      features: [
        'Unlimited messages',
        'Enterprise WhatsApp API',
        'Advanced AI training',
        '24/7 Priority support',
        'Dedicated account manager',
        'Custom integrations',
      ],
      isPopular: false,
      order: 3,
    },
  ];

  for (const plan of pricingPlans) {
    await prisma.pricingPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
  }

  console.log('Created pricing plans');

  const useCases = [
    {
      title: 'Colleges & Universities',
      slug: 'colleges-universities',
      category: 'education',
      description: 'Streamline student communication and administrative processes',
      benefits: [
        'Automated admission inquiries',
        'Course registration assistance',
        'Fee payment reminders',
        'Exam notifications',
      ],
      icon: 'FaGraduationCap',
      order: 1,
    },
    {
      title: 'Restaurants & Food Services',
      slug: 'restaurants',
      category: 'hospitality',
      description: 'Automate reservations, orders, and customer engagement',
      benefits: [
        'Table reservation management',
        'Order status updates',
        'Special offers',
        'Customer feedback',
      ],
      icon: 'FaUtensils',
      order: 2,
    },
  ];

  for (const useCase of useCases) {
    await prisma.useCase.upsert({
      where: { slug: useCase.slug },
      update: {},
      create: useCase,
    });
  }

  console.log('Created use cases');
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
