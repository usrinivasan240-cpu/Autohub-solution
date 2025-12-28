'use client';

import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, Users, Clock, 
  Shield, Zap, Heart, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers. Your success is our success.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push boundaries to bring cutting-edge automation solutions.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Enterprise-grade security to protect your data and maintain compliance.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team to achieve shared goals.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Founded',
    description: 'AutoHub Solutions was founded with a vision to revolutionize business communication.',
  },
  {
    year: '2022',
    title: 'Product Launch',
    description: 'Launched our first WhatsApp automation platform with 50+ beta clients.',
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Introduced AI-powered chatbots and natural language processing capabilities.',
  },
  {
    year: '2024',
    title: 'Scale & Growth',
    description: 'Expanded to serve 500+ clients across 10+ countries globally.',
  },
];

const team = [
  {
    name: 'Sanjay Rao',
    role: 'Founder & CEO',
    bio: 'Former tech lead at major startup. 10+ years in SaaS and automation.',
    image: '/team/sanjay.jpg',
  },
  {
    name: 'Ananya Krishnan',
    role: 'CTO',
    bio: 'AI/ML expert with PhD from IIT. Previously led engineering at unicorn.',
    image: '/team/ananya.jpg',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Head of Sales',
    bio: '15+ years in enterprise sales. Led teams at Fortune 500 companies.',
    image: '/team/vikram.jpg',
  },
  {
    name: 'Meera Reddy',
    role: 'Head of Product',
    bio: 'Product leader with experience at top SaaS companies. MBA from IIM.',
    image: '/team/meera.jpg',
  },
];

export default function AboutPage() {
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
              About <span className="gradient-text">AutoHub</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              We're on a mission to transform how businesses communicate with their customers through intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  AutoHub Solutions was born from a simple observation: businesses struggle to keep up with customer queries, leading to missed opportunities and frustrated customers.
                </p>
                <p>
                  Our founders experienced this challenge firsthand while running their own startups. They realized that small and medium businesses needed the same powerful communication tools that enterprises had, but at an affordable price.
                </p>
                <p>
                  In 2021, we started building AutoHub with a vision to democratize AI-powered business communication. Today, we help 500+ businesses across industries automate their customer engagement and scale operations efficiently.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Target className="w-16 h-16 text-white" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-secondary-900">500+</div>
                      <div className="text-sm text-secondary-500">Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary-900">10M+</div>
                      <div className="text-sm text-secondary-500">Messages</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary-900">10+</div>
                      <div className="text-sm text-secondary-500">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
              <p className="text-secondary-600">
                To empower businesses of all sizes with intelligent communication automation that saves time, reduces costs, and delivers exceptional customer experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
              <p className="text-secondary-600">
                To become the global leader in AI-powered business communication automation, enabling every business to deliver enterprise-grade customer experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our growth story
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-secondary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-primary-500 mb-1">{item.year}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind AutoHub
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-secondary-500 text-sm">{member.bio}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AutoHub can transform your customer communication.
            </p>
            <Link 
              href="/contact" 
              className="btn bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-4"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
