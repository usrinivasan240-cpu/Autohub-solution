'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, MessageCircle, UserPlus, 
  Bot, Sparkles, BarChart3, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: UserPlus,
    title: '1. Sign Up & Onboard',
    description: 'Create your account in minutes. Our simple onboarding process guides you through setting up your business profile and preferences.',
    duration: '5 minutes',
    details: [
      'Register with your business email',
      'Add team members and assign roles',
      'Configure business hours and timezone',
      'Connect your WhatsApp Business account',
    ],
  },
  {
    icon: MessageCircle,
    title: '2. Connect Your Channels',
    description: 'Integrate AutoHub with your existing communication channels and tools. We support WhatsApp, website chat, email, and more.',
    duration: '15 minutes',
    details: [
      'Link WhatsApp Business API',
      'Add chat widget to your website',
      'Connect CRM and database systems',
      'Import existing customer data',
    ],
  },
  {
    icon: Bot,
    title: '3. Build Your Automation',
    description: 'Create intelligent workflows and chatbots using our visual builder. No coding required - just drag, drop, and customize.',
    duration: '30 minutes',
    details: [
      'Design conversation flows visually',
      'Set up automated responses',
      'Create lead qualification workflows',
      'Configure notification triggers',
    ],
  },
  {
    icon: Sparkles,
    title: '4. Train Your AI',
    description: 'Teach your AI assistant about your business. Upload knowledge bases, FAQs, and past conversations for smarter responses.',
    duration: '1-2 hours',
    details: [
      'Upload product documentation',
      'Add FAQs and common questions',
      'Review and improve AI responses',
      'Set tone and brand guidelines',
    ],
  },
  {
    icon: BarChart3,
    title: '5. Launch & Monitor',
    description: 'Go live and start automating! Track performance with real-time analytics and optimize based on insights.',
    duration: 'Ongoing',
    details: [
      'Launch to production',
      'Monitor real-time conversations',
      'Review analytics and reports',
      'Continuously optimize flows',
    ],
  },
];

const whatYouGet = [
  'Unlimited conversations with AI',
  'Multi-language support (20+ languages)',
  'Real-time analytics dashboard',
  'CRM integrations (HubSpot, Salesforce, Zoho)',
  'Email automation integration',
  '24/7 customer support',
  'Dedicated account manager',
  'Custom workflow development',
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary-50 to-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              How AutoHub <span className="gradient-text">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Get up and running in under 2 hours. Our simple 5-step process takes you from signup to full automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900">{step.title}</h3>
                  </div>
                  <p className="text-secondary-600 mb-4">{step.description}</p>
                  
                  <div className="bg-secondary-50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary-500" />
                      <span className="font-semibold text-secondary-900">Estimated Time: {step.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span className="text-secondary-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What You Get When You Sign Up</h2>
            <p className="section-subtitle">
              Everything you need to start automating immediately
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-secondary-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Integrates With Your Favorite Tools</h2>
            <p className="section-subtitle">
              Connect AutoHub with the tools you already use
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['WhatsApp', 'HubSpot', 'Salesforce', 'Zoho', 'Slack', 'Google Sheets', 'Zapier', 'WordPress'].map((tool) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-secondary-100 rounded-lg text-secondary-600 font-medium"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses automating their customer communication.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/use-cases" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                See Use Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
