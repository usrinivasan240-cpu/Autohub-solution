'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, MessageCircle, Zap, Users, 
  Globe, Shield, TrendingUp, CheckCircle,
  Sparkles, Bot, Clock, BarChart3
} from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Messages Automated' },
  { value: '500+', label: 'Clients Served' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support Available' },
];

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description: 'Automate customer responses, appointment reminders, and notifications on WhatsApp.',
    color: 'bg-green-500',
  },
  {
    icon: Bot,
    title: 'AI-Powered Chatbots',
    description: 'Smart conversational agents that understand context and provide human-like responses.',
    color: 'bg-blue-500',
  },
  {
    icon: Sparkles,
    title: 'Smart Auto-Replies',
    description: 'AI-generated responses that adapt to customer queries automatically.',
    color: 'bg-purple-500',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Communicate with customers in their preferred language automatically.',
    color: 'bg-orange-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer inquiry with round-the-clock automated responses.',
    color: 'bg-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track engagement, response times, and customer satisfaction metrics.',
    color: 'bg-pink-500',
  },
];

const benefits = [
  'Instant customer response with 90% faster query resolution',
  'Reduce operational costs by up to 60%',
  'Seamless integration with existing tools',
  'HIPAA & GDPR compliant for data security',
  'Real-time analytics and insights',
  'Multi-agent collaboration support',
];

const testimonials = [
  {
    quote: "AutoHub transformed our customer service. We now handle 3x more queries with half the team.",
    author: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    company: 'TechStart Solutions',
  },
  {
    quote: "The multi-language support helped us expand to regional markets effortlessly.",
    author: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'EduCare Institute',
  },
  {
    quote: "ROI was visible within the first month. Best investment for our restaurant chain.",
    author: 'Amit Patel',
    role: 'Operations Head',
    company: 'Foodie连锁',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary-50 to-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Communication
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
            >
              Automate Your Business Communication with{' '}
              <span className="gradient-text">Intelligent WhatsApp & AI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto"
            >
              Transform how you engage with customers. Save time, boost response rates, 
              and grow your business with intelligent automation that feels personal.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4">
                See How It Works
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-sm text-secondary-500"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </div>
        </div>
        
        {/* Hero Image/Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-secondary-100">
                <div className="bg-secondary-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-6 md:p-8 bg-secondary-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                      {/* Message bubbles */}
                      <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-lg">
                        <p className="text-secondary-700">Hi! I'm interested in your automation services. Can you tell me more?</p>
                        <span className="text-xs text-secondary-400 mt-2 block">10:32 AM</span>
                      </div>
                      <div className="bg-primary-500 rounded-2xl rounded-tr-none p-4 shadow-sm max-w-lg ml-auto">
                        <p className="text-white">Hello! 👋 Thanks for your interest! AutoHub offers WhatsApp automation, AI chatbots & more. What type of business are you in? I can customize a solution for you!</p>
                        <span className="text-xs text-primary-100 mt-2 block">10:32 AM</span>
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-lg">
                        <p className="text-secondary-700">We run a restaurant chain with 5 locations. Looking to automate reservations and customer queries.</p>
                        <span className="text-xs text-secondary-400 mt-2 block">10:34 AM</span>
                      </div>
                      <div className="bg-primary-500 rounded-2xl rounded-tr-none p-4 shadow-sm max-w-lg ml-auto">
                        <p className="text-white">Perfect! 🍽️ Our Restaurant Pro plan includes:
• Automated table reservations
• Menu & order inquiries
• Loyalty program integration
• Multi-location support

Would you like a personalized demo? I can show you exactly how it works!</p>
                        <span className="text-xs text-primary-100 mt-2 block">10:34 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Powerful Features for Modern Business</h2>
            <p className="section-subtitle">
              Everything you need to automate customer communication and scale your business
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Why Choose AutoHub?</h2>
              <p className="text-secondary-600 mb-8 text-lg">
                Join 500+ businesses that have transformed their customer communication with our AI-powered automation platform.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-3 text-secondary-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-900">85%</div>
                      <div className="text-secondary-600">Faster Response Time</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-900">10K+</div>
                      <div className="text-secondary-600">Daily Conversations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-900">100%</div>
                      <div className="text-secondary-600">Data Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Trusted by Businesses Worldwide</h2>
            <p className="section-subtitle">
              See what our clients say about transforming their customer communication
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-secondary-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-secondary-100 pt-4">
                  <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                  <div className="text-sm text-secondary-500">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Communication?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses using AutoHub to automate and scale their customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4 shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
