import Link from 'next/link';
import { FaPhone, FaCog, FaRocket, FaChartLine, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'How It Works - AutoHub Solutions',
  description: 'Learn how AutoHub Solutions transforms your business communication with our simple 4-step process.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: <FaPhone className="text-4xl" />,
      title: 'Consultation & Discovery',
      description: 'We start with a comprehensive consultation to understand your business needs, current communication challenges, and automation goals.',
      details: [
        'Free 30-minute discovery call',
        'Business process assessment',
        'Use case identification',
        'ROI estimation and timeline',
      ],
      duration: '1-2 days',
    },
    {
      number: '02',
      icon: <FaCog className="text-4xl" />,
      title: 'Setup & Configuration',
      description: 'Our team handles the entire technical setup, including WhatsApp Business API integration, chatbot training, and workflow configuration.',
      details: [
        'WhatsApp Business API setup',
        'AI chatbot training on your data',
        'Custom workflow creation',
        'Integration with existing systems',
      ],
      duration: '3-5 days',
    },
    {
      number: '03',
      icon: <FaRocket className="text-4xl" />,
      title: 'Testing & Launch',
      description: 'We thoroughly test all automations and train your team before going live. You maintain full control with our user-friendly dashboard.',
      details: [
        'Comprehensive testing phase',
        'Team training sessions',
        'Soft launch with limited traffic',
        'Final adjustments and optimization',
      ],
      duration: '2-3 days',
    },
    {
      number: '04',
      icon: <FaChartLine className="text-4xl" />,
      title: 'Monitor & Optimize',
      description: 'Post-launch, we continuously monitor performance, gather insights, and optimize your automations for maximum efficiency.',
      details: [
        'Real-time performance monitoring',
        'Weekly analytics reports',
        'Continuous AI improvements',
        'Ongoing support and updates',
      ],
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              From initial consultation to full deployment, we make the entire process simple, transparent, and stress-free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in as little as one week with our streamlined onboarding process.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-32 w-1 h-24 bg-gradient-to-b from-[#0066FF] to-[#00D9A3]"></div>
                )}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 md:p-12">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-full flex items-center justify-center mx-auto">
                        <span className="text-5xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-[#0066FF] mt-1">{step.icon}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <div className="inline-block bg-[#00D9A3] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#00D9A3] text-xl flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Can Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to your success at every stage of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#0066FF] mb-4">7-10</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Days to Go Live</h3>
              <p className="text-gray-700">
                From initial consultation to full deployment, most clients are operational within 7-10 business days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#00D9A3] mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support Available</h3>
              <p className="text-gray-700">
                Our support team is available round the clock to assist with any questions or technical issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#FF6B00] mb-4">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-700">
                We&apos;re not satisfied until you are. We&apos;ll work with you until your automation meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Behind the Scenes</h2>
                <p className="text-xl text-blue-100 mb-6">
                  While you focus on your business, our technology works 24/7:
                </p>
                <ul className="space-y-3">
                  {[
                    'AI models continuously learn from interactions',
                    'Real-time message processing and routing',
                    'Automatic language detection and translation',
                    'Smart escalation to human agents when needed',
                    'Performance monitoring and auto-optimization',
                    'Regular security updates and compliance checks',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#00D9A3] bg-white rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-blue-100 mb-1">Average Response Time</div>
                    <div className="text-3xl font-bold">0.3 seconds</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-blue-100 mb-1">AI Accuracy Rate</div>
                    <div className="text-3xl font-bold">96.8%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-blue-100 mb-1">Messages Processed Daily</div>
                    <div className="text-3xl font-bold">50,000+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation and see how AutoHub Solutions can transform your business communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#00D9A3] text-[#1A1A2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C993] transition-colors duration-200"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1A1A2E] transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
