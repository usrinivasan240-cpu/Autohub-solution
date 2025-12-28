'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, Building2, GraduationCap, Utensils,
  Hotel, Briefcase, MessageCircle, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Colleges & Educational Institutions',
    subtitle: 'Automate student communications at scale',
    description: 'Transform how you engage with students, parents, and faculty. From admissions inquiries to exam updates, keep everyone informed automatically.',
    color: 'bg-blue-500',
    features: [
      'Automated admission inquiry responses',
      'Exam schedule & result notifications',
      'Attendance alerts to parents',
      'Event & webinar registrations',
      'Alumni engagement workflows',
      'Fee payment reminders',
    ],
    stats: '85% reduction in inquiry response time',
  },
  {
    icon: Building2,
    title: 'Schools & Coaching Centers',
    subtitle: 'Keep parents connected and informed',
    description: 'Streamline parent-teacher communication, share updates instantly, and automate routine notifications. Parents stay informed, teachers stay focused.',
    color: 'bg-green-500',
    features: [
      'Daily attendance notifications',
      'Homework & assignment alerts',
      'Parent-teacher meeting scheduling',
      'Fee reminders & receipts',
      'Holiday & event updates',
      'Progress report distribution',
    ],
    stats: '90% parent satisfaction improvement',
  },
  {
    icon: Utensils,
    title: 'Restaurants & Food Services',
    subtitle: 'Enhance guest experience from booking to billing',
    description: 'Automate reservations, take orders, handle queries, and gather feedback. Delight guests with instant responses 24/7.',
    color: 'bg-orange-500',
    features: [
      'Table reservation automation',
      'Menu inquiries & recommendations',
      'Order status updates',
      'Feedback collection',
      'Loyalty program updates',
      'Special offer notifications',
    ],
    stats: '3x increase in online reservations',
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    subtitle: 'Deliver exceptional guest service round the clock',
    description: 'Provide instant responses to booking inquiries, room service requests, and local recommendations. Never miss a guest request.',
    color: 'bg-purple-500',
    features: [
      'Booking inquiry automation',
      'Check-in/check-out reminders',
      'Room service requests',
      'Local attraction recommendations',
      'Feedback & review requests',
      'Loyalty program management',
    ],
    stats: '40% increase in direct bookings',
  },
  {
    icon: Briefcase,
    title: 'Corporate & B2B',
    subtitle: 'Streamline business communications',
    description: 'Automate lead qualification, schedule demos, handle support queries, and nurture prospects. Your sales and support teams will thank you.',
    color: 'bg-cyan-500',
    features: [
      'Lead qualification automation',
      'Demo scheduling workflows',
      'Support ticket management',
      'Onboarding communications',
      'Renewal & upsell alerts',
      'Internal team notifications',
    ],
    stats: '60% reduction in support costs',
  },
];

const benefits = [
  'Reduce manual workload by 70%',
  'Instant response to customer queries',
  'Multi-language support',
  'Seamless CRM integration',
  'Real-time analytics & insights',
  'Scalable infrastructure',
];

export default function UseCasesPage() {
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
              Industry <span className="gradient-text">Use Cases</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Discover how AutoHub helps businesses across industries automate customer communication and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div>
                  <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
                    {useCase.title}
                  </h2>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {useCase.subtitle}
                  </p>
                  <p className="text-secondary-600 mb-6">
                    {useCase.description}
                  </p>
                  
                  <div className="bg-secondary-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="font-semibold text-secondary-900">Key Features:</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {useCase.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          <span className="text-secondary-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Link href="/contact" className="btn-primary">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <span className="text-secondary-500 font-medium">
                      ✓ {useCase.stats}
                    </span>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-secondary-100">
                    <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-100">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${useCase.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-secondary-100">
                            <p className="text-secondary-700">Hi! I'm interested in your services. Do you offer automation for {useCase.title.split(' ')[0].toLowerCase()}?</p>
                          </div>
                          <div className={`${useCase.color} rounded-2xl rounded-tr-none p-4 shadow-sm`}>
                            <p className="text-white">
                              Absolutely! We've helped many {useCase.title.toLowerCase()} automate their communication. We offer features like:
                              <br />• {useCase.features[0]}
                              <br />• {useCase.features[1]}
                              <br />Would you like a personalized demo?
                            </p>
                          </div>
                          <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-secondary-100">
                            <p className="text-secondary-700">Yes! That sounds perfect. How can I get started?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Businesses Choose AutoHub</h2>
            <p className="section-subtitle">
              Proven benefits across all industries
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-secondary-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
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
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              AutoHub works for any business that needs to automate customer communication. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4"
              >
                Talk to Our Experts
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
