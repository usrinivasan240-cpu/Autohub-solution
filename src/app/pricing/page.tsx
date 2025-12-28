'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Sparkles, 
  Zap, Building2, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    slug: 'basic',
    description: 'Perfect for small businesses getting started with automation',
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    popular: false,
    color: 'bg-secondary-500',
    features: {
      conversations: 'Up to 1,000 conversations/month',
      whatsappAutomation: true,
      chatbotBuilder: true,
      aiResponses: '100 AI responses/month',
      languages: '3 languages',
      integrations: '2 integrations',
      support: 'Email support',
      analytics: 'Basic analytics',
      workflows: '5 active workflows',
    },
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    slug: 'pro',
    description: 'Ideal for growing businesses with advanced automation needs',
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    popular: true,
    color: 'bg-primary-500',
    features: {
      conversations: 'Up to 5,000 conversations/month',
      whatsappAutomation: true,
      chatbotBuilder: true,
      aiResponses: 'Unlimited AI responses',
      languages: '10 languages',
      integrations: 'Unlimited integrations',
      support: 'Priority email & chat',
      analytics: 'Advanced analytics',
      workflows: '25 active workflows',
      templates: 'Pre-built templates',
      teamMembers: 'Up to 5 team members',
    },
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'For large organizations requiring custom solutions',
    monthlyPrice: 24999,
    yearlyPrice: 249990,
    popular: false,
    color: 'bg-accent-500',
    features: {
      conversations: 'Unlimited conversations',
      whatsappAutomation: true,
      chatbotBuilder: true,
      aiResponses: 'Unlimited AI responses',
      languages: 'All 20+ languages',
      integrations: 'Custom integrations',
      support: '24/7 dedicated support',
      analytics: 'Custom reports & API',
      workflows: 'Unlimited workflows',
      templates: 'Custom templates',
      teamMembers: 'Unlimited team members',
      dedicatedAccount: 'Dedicated account manager',
      sla: '99.9% SLA guarantee',
      customDevelopment: 'Custom development',
    },
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What happens if I exceed my conversation limit?',
    answer: 'You\'ll receive a notification when you\'re at 80% of your limit. You can either upgrade your plan or purchase additional conversation packs.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, we offer a 20% discount when you choose annual billing. You save nearly 2 months of service.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI, net banking, and wallets. For Enterprise plans, we also support invoicing.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-grade encryption and are compliant with GDPR and other data protection regulations.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-secondary-900' : 'text-secondary-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-secondary-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <motion.div
                  animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                  className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-secondary-900' : 'text-secondary-500'}`}>
                Yearly
              </span>
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Save 20%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl ${
                  plan.popular 
                    ? 'bg-secondary-900 text-white shadow-2xl shadow-primary-500/20 scale-105 z-10' 
                    : 'bg-white text-secondary-900 shadow-xl'
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center py-2 text-sm font-semibold">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-secondary-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.popular ? 'text-secondary-300' : 'text-secondary-500'}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        ₹{billingCycle === 'monthly' 
                          ? plan.monthlyPrice.toLocaleString() 
                          : Math.round(plan.yearlyPrice / 12).toLocaleString()}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-secondary-300' : 'text-secondary-500'}`}>
                        /month
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-green-400' : 'text-green-600'}`}>
                        ₹{plan.yearlyPrice.toLocaleString()} billed annually
                      </p>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : `/signup?plan=${plan.slug}`}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                
                {/* Features List */}
                <div className={`px-8 pb-8 ${plan.popular ? 'bg-secondary-800' : 'bg-secondary-50'}`}>
                  <div className="space-y-4">
                    {Object.entries(plan.features).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary-400' : 'text-primary-500'}`} />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-secondary-300" />
                          )
                        ) : (
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary-400' : 'text-primary-500'}`} />
                        )}
                        <span className={`text-sm ${plan.popular ? 'text-secondary-200' : 'text-secondary-700'}`}>
                          {typeof value === 'string' ? value : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Compare Plans</h2>
            <p className="section-subtitle">
              A detailed comparison of all features
            </p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-secondary-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Feature</th>
                  {plans.map(plan => (
                    <th key={plan.name} className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">Conversations/month</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">1,000</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">5,000</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">WhatsApp Automation</td>
                  <td className="px-6 py-4 text-sm text-center"><CheckCircle className="w-5 h-5 text-primary-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-sm text-center"><CheckCircle className="w-5 h-5 text-primary-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-sm text-center"><CheckCircle className="w-5 h-5 text-primary-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">AI Responses</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">100/month</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Unlimited</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">Languages Supported</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">3</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">10</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">20+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">Integrations</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">2</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Unlimited</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">Team Members</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">1</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">5</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-secondary-700">Support</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Email</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">Priority</td>
                  <td className="px-6 py-4 text-sm text-center text-secondary-700">24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Got questions? We've got answers.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-secondary-50 rounded-xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-secondary-900">{faq.question}</h3>
                    <span className="text-primary-500 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                </details>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Sales
              </Link>
              <Link 
                href="/how-it-works" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
