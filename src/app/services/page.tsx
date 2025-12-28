'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, Bot, Sparkles, Zap, Globe,
  Clock, BarChart3, Shield, Smartphone,
  ArrowRight, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'whatsapp-automation',
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    shortDescription: 'Automate customer conversations on WhatsApp with intelligent workflows.',
    description: 'Transform your WhatsApp business account into a 24/7 customer service powerhouse. Automate responses, appointments, notifications, and more with our intuitive workflow builder.',
    features: [
      'Automated message responses',
      'Appointment scheduling & reminders',
      'Order tracking & notifications',
      'Broadcast messages to customer lists',
      'Media file sharing (images, documents)',
      'Integration with CRM systems',
    ],
    benefits: [
      'Reduce response time by 90%',
      'Handle 10x more conversations',
      'Never miss a customer inquiry',
      'Consistent brand experience',
    ],
    color: 'bg-green-500',
    price: 'Starting at ₹2,999/month',
  },
  {
    id: 'chatbot-setup',
    icon: Bot,
    title: 'Chatbot Setup',
    shortDescription: 'Custom AI-powered chatbots tailored to your business needs.',
    description: 'Deploy intelligent chatbots that understand natural language and provide human-like responses. Perfect for lead qualification, FAQs, and customer support.',
    features: [
      'Natural Language Processing (NLP)',
      'Custom conversation flows',
      'Lead qualification automation',
      'Multi-turn conversations',
      'Intent recognition',
      'Fallback to human agents',
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Qualify leads automatically',
      '24/7 customer availability',
      'Scalable conversation handling',
    ],
    color: 'bg-blue-500',
    price: 'Starting at ₹4,999/month',
  },
  {
    id: 'ai-replies',
    icon: Sparkles,
    title: 'AI Auto-Replies',
    shortDescription: 'Smart AI-generated responses that learn from your business.',
    description: 'Leverage advanced AI to generate context-aware, personalized responses. The system learns from your previous conversations to improve accuracy over time.',
    features: [
      'Context-aware responses',
      'Multi-language support',
      'Tone customization',
      'Learning from feedback',
      'Sentiment analysis',
      'Response suggestions',
    ],
    benefits: [
      'Human-like interactions',
      'Personalized customer experience',
      'Continuous improvement',
      'Reduce agent workload',
    ],
    color: 'bg-purple-500',
    price: 'Starting at ₹3,999/month',
  },
  {
    id: 'workflows',
    icon: Zap,
    title: 'Custom Workflows',
    shortDescription: 'Build automated workflows without coding knowledge.',
    description: 'Create powerful automation workflows using our visual builder. Connect with your favorite tools and automate repetitive tasks effortlessly.',
    features: [
      'Visual workflow builder',
      '50+ integration options',
      'Conditional logic',
      'Trigger-based automation',
      'Custom API connections',
      'Workflow templates',
    ],
    benefits: [
      'No coding required',
      'Save 20+ hours weekly',
      'Reduce manual errors',
      'Increase team productivity',
    ],
    color: 'bg-orange-500',
    price: 'Starting at ₹5,999/month',
  },
  {
    id: 'multilingual',
    icon: Globe,
    title: 'Multi-language Support',
    shortDescription: 'Communicate with customers in their preferred language.',
    description: 'Break language barriers and reach customers globally. Automatically detect and respond in multiple languages with native-level accuracy.',
    features: [
      '20+ languages supported',
      'Automatic language detection',
      'Translation workflows',
      'Regional dialect support',
      'Localization templates',
      'Language analytics',
    ],
    benefits: [
      'Expand to new markets',
      'Better customer engagement',
      'Competitive advantage',
      'Improved satisfaction scores',
    ],
    color: 'bg-cyan-500',
    price: 'Starting at ₹2,499/month',
  },
];

const additionalServices = [
  {
    icon: Smartphone,
    title: 'Mobile App Integration',
    description: 'Seamlessly connect with your mobile apps and platforms.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive dashboards and custom reports.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance certifications.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our expert team.',
  },
];

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Comprehensive automation solutions to transform your customer communication and scale your business efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-secondary-600 mb-6">
                  {service.shortDescription}
                </p>
                <p className="text-secondary-600 mb-8">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <span className="text-secondary-500 font-medium">{service.price}</span>
                </div>
              </motion.div>
              
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-secondary-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">{service.title}</div>
                        <div className="text-sm text-secondary-500">Active & Running</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg">
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          <span className="text-secondary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Additional features and services to supercharge your automation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {item.description}
                </p>
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
              Not Sure Which Service Fits Your Needs?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our experts will help you choose the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4"
              >
                Book a Free Consultation
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
