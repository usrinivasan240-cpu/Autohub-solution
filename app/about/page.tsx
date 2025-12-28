import { FaRocket, FaEye, FaHeart, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

export const metadata = {
  title: 'About Us - AutoHub Solutions',
  description: 'Learn about AutoHub Solutions - a leading provider of WhatsApp and AI automation solutions helping businesses scale their communication.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AutoHub Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              We&apos;re on a mission to revolutionize business communication through intelligent automation and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2020, AutoHub Solutions emerged from a simple observation: businesses were struggling to keep up with the growing volume of customer communications while maintaining quality and personalization.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We saw an opportunity to leverage the power of WhatsApp, the world&apos;s most popular messaging platform, combined with cutting-edge AI technology to create automation solutions that feel personal, responsive, and intelligent.
              </p>
              <p className="text-lg text-gray-700">
                Today, we serve over 500 businesses across education, hospitality, healthcare, and corporate sectors, processing millions of automated conversations monthly while maintaining a 99.9% uptime and industry-leading response times.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-[#0066FF] mb-2">500+</div>
                <div className="text-gray-700">Active Clients</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-[#00D9A3] mb-2">50+</div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-[#FF6B00] mb-2">1M+</div>
                <div className="text-gray-700">Messages/Month</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-[#0066FF] mb-2">99.9%</div>
                <div className="text-gray-700">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us to innovate and serve our clients every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaRocket className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 text-center">
                To empower businesses of all sizes with intelligent automation tools that enhance customer communication, improve efficiency, and drive growth through innovative AI-powered WhatsApp solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9A3] to-[#FF6B00] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaEye className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vision</h3>
              <p className="text-gray-700 text-center">
                To become the world&apos;s leading platform for conversational AI and WhatsApp automation, setting the standard for intelligent, personalized, and scalable business communication solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#0066FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Values</h3>
              <p className="text-gray-700 text-center">
                Innovation, customer success, reliability, transparency, and continuous improvement. We believe in building long-term partnerships and delivering exceptional value to every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than just a technology provider – we&apos;re your partner in growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl" />,
                title: 'Customer-First Approach',
                description: 'Your success is our success. We provide dedicated support, regular check-ins, and proactive solutions to ensure you get maximum value.',
              },
              {
                icon: <FaAward className="text-4xl" />,
                title: 'Industry Expertise',
                description: 'With years of experience across multiple industries, we understand unique business challenges and provide tailored solutions.',
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: 'Proven Results',
                description: 'Our clients see an average of 10x efficiency improvement and 85% cost reduction in customer communication operations.',
              },
              {
                icon: <FaRocket className="text-4xl" />,
                title: 'Cutting-Edge Technology',
                description: 'We leverage the latest in AI, machine learning, and NLP to deliver intelligent automation that actually works.',
              },
              {
                icon: <FaEye className="text-4xl" />,
                title: 'Transparent Pricing',
                description: 'No hidden fees, no surprises. Clear, straightforward pricing with flexible plans that scale with your business.',
              },
              {
                icon: <FaHeart className="text-4xl" />,
                title: 'Reliable Support',
                description: '24/7 technical support, comprehensive documentation, and a dedicated success manager for enterprise clients.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-[#0066FF] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already transforming their communication with AutoHub Solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#00D9A3] text-[#1A1A2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C993] transition-colors duration-200"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </div>
  );
}
