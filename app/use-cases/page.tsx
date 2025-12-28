import Link from 'next/link';
import { FaGraduationCap, FaSchool, FaUtensils, FaHotel, FaBuilding, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Use Cases - AutoHub Solutions',
  description: 'Discover how AutoHub Solutions serves colleges, schools, restaurants, hotels, and corporate businesses with tailored automation.',
};

export default function UseCasesPage() {
  const useCases = [
    {
      icon: <FaGraduationCap className="text-5xl" />,
      title: 'Colleges & Universities',
      description: 'Streamline student communication, admissions, and administrative processes with intelligent automation.',
      benefits: [
        'Automated admission inquiry responses',
        'Course registration assistance',
        'Fee payment reminders',
        'Exam schedule notifications',
        'Event announcements',
        'Alumni engagement',
      ],
      results: {
        stat1: '75%',
        label1: 'Reduced admin workload',
        stat2: '24/7',
        label2: 'Student support',
        stat3: '90%',
        label3: 'Response rate',
      },
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <FaSchool className="text-5xl" />,
      title: 'Schools & K-12 Education',
      description: 'Enhance parent-teacher communication and keep families informed with automated updates and notifications.',
      benefits: [
        'Daily attendance updates to parents',
        'Homework and assignment reminders',
        'Parent-teacher meeting scheduling',
        'Emergency notifications',
        'Event and activity updates',
        'Report card distribution',
      ],
      results: {
        stat1: '95%',
        label1: 'Parent engagement',
        stat2: '60%',
        label2: 'Time saved',
        stat3: '100%',
        label3: 'Message delivery',
      },
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaUtensils className="text-5xl" />,
      title: 'Restaurants & Food Services',
      description: 'Automate reservations, orders, and customer engagement to provide exceptional dining experiences.',
      benefits: [
        'Table reservation management',
        'Order status updates',
        'Menu sharing and updates',
        'Special offers and promotions',
        'Customer feedback collection',
        'Loyalty program management',
      ],
      results: {
        stat1: '40%',
        label1: 'More reservations',
        stat2: '85%',
        label2: 'Customer satisfaction',
        stat3: '3x',
        label3: 'Repeat orders',
      },
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaHotel className="text-5xl" />,
      title: 'Hotels & Hospitality',
      description: 'Provide 24/7 guest services, automate bookings, and enhance guest experiences throughout their stay.',
      benefits: [
        'Booking confirmation and reminders',
        'Check-in/check-out assistance',
        'Room service requests',
        'Concierge services',
        'Guest feedback and reviews',
        'Loyalty program updates',
      ],
      results: {
        stat1: '50%',
        label1: 'Booking increase',
        stat2: '92%',
        label2: 'Guest satisfaction',
        stat3: '70%',
        label3: 'Staff efficiency',
      },
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <FaBuilding className="text-5xl" />,
      title: 'Corporate & Enterprises',
      description: 'Scale customer support, automate internal communication, and improve operational efficiency.',
      benefits: [
        'Customer support automation',
        'Lead qualification and nurturing',
        'Employee communication',
        'Meeting scheduling',
        'Announcement broadcasting',
        'Help desk automation',
      ],
      results: {
        stat1: '10x',
        label1: 'Support capacity',
        stat2: '85%',
        label2: 'Cost reduction',
        stat3: '99%',
        label3: 'Uptime',
      },
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Use Cases</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Discover how businesses across industries are transforming their communication with AutoHub Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                      {useCase.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{useCase.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{useCase.description}</p>

                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#00D9A3] text-xl flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors duration-200"
                    >
                      Get Started
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className={`bg-gradient-to-br ${useCase.color} rounded-2xl p-8 text-white`}>
                      <h3 className="text-2xl font-bold mb-6">Real Results</h3>
                      <div className="space-y-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                          <div className="text-4xl font-bold mb-2">{useCase.results.stat1}</div>
                          <div className="text-lg">{useCase.results.label1}</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                          <div className="text-4xl font-bold mb-2">{useCase.results.stat2}</div>
                          <div className="text-lg">{useCase.results.label2}</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                          <div className="text-4xl font-bold mb-2">{useCase.results.stat3}</div>
                          <div className="text-lg">{useCase.results.label3}</div>
                        </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cross-Industry Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter your industry, AutoHub Solutions delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-[#0066FF] mb-4">10x</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency Increase</h3>
              <p className="text-gray-700">
                Handle 10 times more conversations with the same team size through intelligent automation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-[#00D9A3] mb-4">85%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-700">
                Reduce operational costs by up to 85% while improving response times and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-[#FF6B00] mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Available</h3>
              <p className="text-gray-700">
                Provide round-the-clock service to your customers without increasing headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don&apos;t See Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We work with businesses across all sectors. Contact us to discuss your specific needs and see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
