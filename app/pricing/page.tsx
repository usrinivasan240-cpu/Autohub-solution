import Link from 'next/link';
import { FaCheckCircle, FaRocket, FaStar, FaCrown } from 'react-icons/fa';

export const metadata = {
  title: 'Pricing Plans - AutoHub Solutions',
  description: 'Choose the perfect plan for your business. Transparent pricing with no hidden fees.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      slug: 'basic',
      icon: <FaRocket className="text-3xl" />,
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups getting started with automation',
      features: [
        'Up to 1,000 messages/month',
        'Basic WhatsApp automation',
        'AI auto-replies',
        '2 automated workflows',
        'Email support',
        'Basic analytics dashboard',
        '1 WhatsApp number',
        'Standard response time',
      ],
      notIncluded: [
        'Advanced AI chatbot',
        'Multi-language support',
        'Priority support',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional',
      slug: 'professional',
      icon: <FaStar className="text-3xl" />,
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses that need advanced automation and support',
      features: [
        'Up to 10,000 messages/month',
        'Advanced WhatsApp automation',
        'AI chatbot with NLP',
        'Unlimited automated workflows',
        'Priority email & chat support',
        'Advanced analytics & reports',
        'Up to 3 WhatsApp numbers',
        'Fast response time',
        'Multi-language support (5 languages)',
        'CRM integration',
        'Custom branding',
        'Team collaboration tools',
      ],
      notIncluded: [
        'Dedicated account manager',
        'Custom API integrations',
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-[#00D9A3] to-[#00C993]',
    },
    {
      name: 'Enterprise',
      slug: 'enterprise',
      icon: <FaCrown className="text-3xl" />,
      price: null,
      period: 'custom',
      description: 'For large organizations requiring enterprise-grade solutions and support',
      features: [
        'Unlimited messages',
        'Enterprise WhatsApp API',
        'Advanced AI with custom training',
        'Unlimited workflows & integrations',
        '24/7 Priority support',
        'White-label analytics platform',
        'Unlimited WhatsApp numbers',
        'Instant response time',
        'Multi-language support (unlimited)',
        'Full CRM & ERP integration',
        'Custom branding & white-label',
        'Dedicated account manager',
        'Custom API development',
        'SLA guarantee (99.9% uptime)',
        'On-premise deployment option',
        'Dedicated infrastructure',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const addons = [
    { name: 'Additional 1,000 messages', price: 10 },
    { name: 'Extra WhatsApp number', price: 25 },
    { name: 'Advanced analytics module', price: 50 },
    { name: 'Custom integration (per integration)', price: 200 },
    { name: 'Training & onboarding session', price: 150 },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Choose the plan that fits your business needs. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-[#00D9A3] transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#00D9A3] text-white px-6 py-2 text-sm font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-3xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    {plan.price !== null ? (
                      <>
                        <span className="text-5xl font-bold">${plan.price}</span>
                        <span className="text-xl">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold">Custom</span>
                    )}
                  </div>
                  <p className="text-blue-100">{plan.description}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#00D9A3] text-xl flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 opacity-40">
                        <FaCheckCircle className="text-gray-300 text-xl flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#00D9A3] text-white hover:bg-[#00C993]'
                        : 'bg-[#0066FF] text-white hover:bg-[#0052CC]'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-Ons & Extras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your plan with additional features and services as your needs grow.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {addons.map((addon, index) => (
                  <div key={index} className="p-6 flex justify-between items-center hover:bg-blue-50 transition-colors duration-200">
                    <span className="text-gray-900 font-medium">{addon.name}</span>
                    <span className="text-[#0066FF] font-bold text-xl">${addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Is there a free trial?',
                answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Absolutely. You can change your plan at any time, and changes take effect immediately.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, bank transfers, and can provide invoicing for enterprise clients.',
              },
              {
                question: 'Are there any setup fees?',
                answer: 'No setup fees for Basic and Professional plans. Enterprise plans may have a one-time onboarding fee depending on customization needs.',
              },
              {
                question: 'What happens if I exceed my message limit?',
                answer: 'You can purchase additional message bundles as add-ons, or upgrade to a higher plan. We\'ll notify you before you reach your limit.',
              },
              {
                question: 'Do you offer annual billing discounts?',
                answer: 'Yes! Save 20% when you choose annual billing instead of monthly.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you find the perfect plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Talk to Sales
            </Link>
            <Link
              href="/how-it-works"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
