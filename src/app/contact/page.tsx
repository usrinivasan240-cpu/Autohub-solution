'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { 
  MessageCircle, Mail, Phone, MapPin, 
  Send, ArrowRight, Clock, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91-XXXXX-XXXXX',
    description: 'Message us for quick support',
    link: 'https://wa.me/91XXXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@autohub.in',
    description: 'We\'ll respond within 24 hours',
    link: 'mailto:hello@autohub.in',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-XXXXX-XXXXX',
    description: 'Mon-Sat, 9 AM - 7 PM IST',
    link: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Bengaluru, Karnataka, India',
    description: 'Visit us by appointment',
    link: null,
  },
];

const services = [
  'WhatsApp Automation',
  'Chatbot Setup',
  'AI Auto-Replies',
  'Custom Workflows',
  'Multi-language Support',
  'Not Sure - Need Guidance',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    reset();
    setIsSubmitting(false);
  };

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Have questions about our automation solutions? Our team is here to help you find the perfect solution for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section bg-white pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:-translate-y-1 cursor-pointer"
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{info.title}</h3>
                      <p className="text-primary-600 font-medium">{info.value}</p>
                      <p className="text-sm text-secondary-500">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="card bg-secondary-900 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-400" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-secondary-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="label">Full Name *</label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="label">Email Address *</label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="input-field"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        placeholder="+91-XXXXX-XXXXX"
                        className="input-field"
                      />
                    </div>
                    
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        placeholder="Your Company"
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="label">Interested Service</label>
                    <select
                      {...register('service')}
                      id="service"
                      className="input-field"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">Your Message *</label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      placeholder="Tell us about your business and how we can help..."
                      className="input-field resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-secondary-500">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Quick answers to help you get started
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { q: 'How long does setup take?', a: 'Most businesses are up and running within 2-4 hours with our guided onboarding.' },
              { q: 'Do you offer a free trial?', a: 'Yes! All plans include a 14-day free trial with full access to features.' },
              { q: 'Is my data secure?', a: 'Absolutely. We use bank-grade encryption and are GDPR compliant.' },
              { q: 'Can I integrate with my existing tools?', a: 'Yes, we support 50+ integrations including CRM, email, and more.' },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">{faq.q}</h3>
                    <p className="text-secondary-600 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
