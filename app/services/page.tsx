import Link from 'next/link';
import { FaWhatsapp, FaRobot, FaComment, FaCog, FaGlobe, FaChartLine, FaBell, FaUsers, FaShieldAlt, FaSync, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Our Services - AutoHub Solutions',
  description: 'Explore our comprehensive WhatsApp and AI automation services: chatbots, auto-replies, custom workflows, and more.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <FaWhatsapp className="text-5xl" />,
      title: 'WhatsApp Business Automation',
      description: 'Complete WhatsApp Business API integration with automated message sending, broadcasting, and customer interaction management.',
      features: [
        'Automated message scheduling',
        'Bulk messaging campaigns',
        'Interactive message templates',
        'Media file sharing',
        'Contact list management',
        'Message delivery tracking',
      ],
    },
    {
      icon: <FaRobot className="text-5xl" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI chatbots trained on your business data to handle customer queries 24/7 with human-like responses.',
      features: [
        'Natural language processing',
        'Context-aware conversations',
        'Multi-intent recognition',
        'Sentiment analysis',
        'Continuous learning & improvement',
        'Fallback to human agents',
      ],
    },
    {
      icon: <FaComment className="text-5xl" />,
      title: 'AI-Powered Auto-Replies',
      description: 'Smart automated responses that understand context, detect urgency, and provide relevant information instantly.',
      features: [
        'Instant response times (<1s)',
        'Personalized message content',
        'Time-based auto-responses',
        'FAQ automation',
        'Lead qualification',
        'Appointment scheduling',
      ],
    },
    {
      icon: <FaCog className="text-5xl" />,
      title: 'Custom Workflow Automation',
      description: 'Build sophisticated automation workflows tailored to your unique business processes and requirements.',
      features: [
        'Visual workflow builder',
        'Conditional logic & triggers',
        'Integration with CRM systems',
        'E-commerce order updates',
        'Payment reminders',
        'Custom API integrations',
      ],
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      title: 'Multi-Language Support',
      description: 'Communicate with customers worldwide in their native language with AI-powered real-time translation.',
      features: [
        '100+ languages supported',
        'Real-time translation',
        'Cultural context awareness',
        'Language auto-detection',
        'Region-specific messaging',
        'Multilingual chatbot training',
      ],
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights into your communication performance with real-time analytics and detailed reports.',
      features: [
        'Real-time dashboards',
        'Message delivery rates',
        'Response time metrics',
        'Customer engagement analytics',
        'Conversion tracking',
        'ROI measurement',
      ],
    },
    {
      icon: <FaBell className="text-5xl" />,
      title: 'Notification & Alert Systems',
      description: 'Automated notification delivery for critical updates, reminders, and time-sensitive information.',
      features: [
        'Appointment reminders',
        'Payment notifications',
        'Order status updates',
        'Emergency alerts',
        'Event notifications',
        'Promotional campaigns',
      ],
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Team Collaboration Tools',
      description: 'Enable your team to collaborate effectively on customer communications with shared inboxes and assignment features.',
      features: [
        'Shared team inbox',
        'Conversation assignment',
        'Internal notes & tags',
        'Team performance metrics',
        'Role-based permissions',
        'Agent productivity tracking',
      ],
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with international data protection regulations.',
      features: [
        'End-to-end encryption',
        'GDPR compliance',
        'Data residency options',
        'Access control & audit logs',
        'Regular security audits',
        'Backup & disaster recovery',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Comprehensive WhatsApp and AI automation solutions designed to transform your business communication and drive growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-[#0066FF] mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-[#00D9A3] text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service comes with these included benefits at no extra cost.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaSync className="text-3xl" />,
                title: 'Seamless Integration',
                description: 'Easy integration with your existing tools and systems',
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: 'Dedicated Support',
                description: '24/7 technical support and customer success team',
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: 'Regular Updates',
                description: 'Continuous improvements and new features',
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: '99.9% Uptime SLA',
                description: 'Enterprise-grade reliability and performance',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-[#0066FF] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
