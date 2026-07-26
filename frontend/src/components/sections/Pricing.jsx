import SectionHeader from '../ui/SectionHeader';
import FadeIn from '../ui/FadeIn';
import Card from '../ui/Card';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for trying out the platform',
    features: [
      'Up to 100 leads/month',
      'Basic AI classification',
      'Email notifications',
      'Google Sheets integration',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    description: 'For growing teams that need more',
    features: [
      'Up to 5,000 leads/month',
      'Advanced AI analysis',
      'Priority email alerts',
      'Custom webhooks',
      'Analytics dashboard',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited leads',
      'Custom AI models',
      'Dedicated support',
      'White-label options',
      'SLA guarantee',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

function PricingCard({ plan, index }) {
  return (
    <FadeIn delay={index * 150}>
      <Card
        hover
        glow={plan.popular}
        className={`relative h-full ${plan.popular ? 'border-primary-500/30' : ''}`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
            Most Popular
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-bold text-white">{plan.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
        </div>

        <div className="mb-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.period && (
            <span className="text-sm text-gray-500">{plan.period}</span>
          )}
        </div>

        <ul className="mb-8 space-y-3" role="list">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-300"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
            plan.popular
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-500 hover:shadow-primary-500/40'
              : 'border border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5'
          }`}
        >
          {plan.cta}
        </button>
      </Card>
    </FadeIn>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-accent-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Simple, Transparent"
            highlight="Pricing"
            subtitle="Start free and scale as you grow. No hidden fees."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
