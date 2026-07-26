import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import FadeIn from '../ui/FadeIn';

const services = [
  {
    title: 'Sales Bots',
    description:
      'AI-powered chatbots that engage visitors, answer questions, and qualify leads automatically. Convert browsers into buyers with intelligent conversation.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    color: 'from-primary-500 to-primary-600',
    features: [
      '24/7 Lead Capture',
      'Instant Response',
      'Smart Routing',
      'Behavior Analysis',
    ],
  },
  {
    title: 'Organizational Development',
    description:
      'Transform your team structure with data-driven insights. Optimize workflows, identify skill gaps, and build high-performance organizations.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    color: 'from-secondary-500 to-secondary-600',
    features: [
      'Team Analytics',
      'Growth Planning',
      'Performance Tracking',
      'Culture Building',
    ],
  },
];

function ServiceCard({ service, index }) {
  return (
    <FadeIn delay={index * 150}>
      <Card hover className="h-full">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color}`}
          aria-hidden="true"
        >
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={service.icon}
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {service.description}
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-2" role="list">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
              <svg
                className="h-4 w-4 shrink-0 text-accent-400"
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
      </Card>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Two Solutions."
            highlight="One Platform."
            subtitle="Our AI automatically classifies visitors into the solution that best matches their needs."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
