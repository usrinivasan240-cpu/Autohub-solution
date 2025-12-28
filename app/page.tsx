import Link from 'next/link';
import { FaWhatsapp, FaRobot, FaComment, FaCog, FaGlobe, FaCheckCircle, FaArrowRight, FaUsers, FaChartLine, FaClock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9A3] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with AI-Powered WhatsApp Automation
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                AutoHub Solutions helps businesses automate customer communication, increase engagement, and scale effortlessly with intelligent WhatsApp chatbots and AI-driven workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Started <FaArrowRight />
                </Link>
                <Link
                  href="/how-it-works"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100">Active Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-blue-100">Messages Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-blue-100">Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FaWhatsapp className="text-[#00D9A3] text-2xl" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Automated response in 0.3s</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <FaUsers className="mx-auto text-3xl mb-2" />
                    <div className="font-semibold">24/7 Support</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <FaChartLine className="mx-auto text-3xl mb-2" />
                    <div className="font-semibold">Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AutoHub Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide cutting-edge automation solutions that help businesses streamline communication and boost productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-lg flex items-center justify-center mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Save Time</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and responses, freeing up your team to focus on what matters most.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#00D9A3] to-[#0066FF] rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Increase Revenue</h3>
              <p className="text-gray-600">
                Convert more leads with instant responses and personalized automated follow-ups.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#0066FF] rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Better Experience</h3>
              <p className="text-gray-600">
                Provide 24/7 support and instant responses to keep your customers satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaWhatsapp className="text-4xl" />,
                title: 'WhatsApp Automation',
                description: 'Automate messages, notifications, and customer interactions on WhatsApp Business API.',
              },
              {
                icon: <FaRobot className="text-4xl" />,
                title: 'AI Chatbot Setup',
                description: 'Intelligent chatbots powered by AI to handle complex conversations and queries.',
              },
              {
                icon: <FaComment className="text-4xl" />,
                title: 'AI Auto-Replies',
                description: 'Smart automated responses that learn from conversations and improve over time.',
              },
              {
                icon: <FaCog className="text-4xl" />,
                title: 'Custom Workflows',
                description: 'Build custom automation workflows tailored to your specific business processes.',
              },
              {
                icon: <FaGlobe className="text-4xl" />,
                title: 'Multi-language Support',
                description: 'Communicate with customers in their preferred language with AI-powered translation.',
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: 'Analytics & Insights',
                description: 'Track performance, engagement metrics, and ROI with detailed analytics dashboards.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-[#0066FF] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors duration-200"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Trusted by Leading Organizations
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                From small businesses to large enterprises, colleges, and hotels – our automation solutions scale with your needs.
              </p>
              <div className="space-y-4">
                {[
                  'Educational Institutions',
                  'Restaurants & Food Services',
                  'Hotels & Hospitality',
                  'Corporate Enterprises',
                  'Healthcare Providers',
                  'E-commerce Businesses',
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#00D9A3] text-xl flex-shrink-0" />
                    <span className="text-lg">{industry}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 mt-8 bg-[#00D9A3] text-[#1A1A2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C993] transition-colors duration-200"
              >
                Explore Use Cases <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '24/7', label: 'Availability' },
                { number: '< 1s', label: 'Response Time' },
                { number: '10x', label: 'Efficiency Boost' },
                { number: '85%', label: 'Cost Reduction' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-[#00D9A3] mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of businesses already automating their WhatsApp communication and scaling effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Start Free Trial <FaArrowRight />
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
