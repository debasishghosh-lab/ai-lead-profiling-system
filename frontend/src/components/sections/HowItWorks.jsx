import SectionHeader from '../ui/SectionHeader';
import FadeIn from '../ui/FadeIn';

const steps = [
  {
    step: '01',
    title: 'Visitor Browses',
    description:
      'A potential lead visits your website and explores your services, pricing, and solutions.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    step: '02',
    title: 'AI Analyzes',
    description:
      'Our AI engine processes browsing patterns, page visits, and submitted information to understand intent.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    step: '03',
    title: 'Lead Classified',
    description:
      'The visitor is automatically categorized into Sales Bots or Organizational Development based on their behavior.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    step: '04',
    title: 'Team Notified',
    description:
      'Your sales team receives an instant email notification with the complete lead profile and classification.',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

function StepCard({ step, index, isLast }) {
  return (
    <FadeIn delay={index * 150}>
      <div className="relative">
        {!isLast && (
          <div
            className="absolute left-1/2 top-0 -z-10 hidden h-full w-px bg-gradient-to-b from-primary-500/20 to-transparent md:block"
            aria-hidden="true"
          />
        )}

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-500/20 bg-primary-500/10"
            aria-hidden="true"
          >
            <svg
              className="h-8 w-8 text-primary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={step.icon}
              />
            </svg>
          </div>

          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-400">
            Step {step.step}
          </div>

          <h3 className="text-lg font-bold text-white">{step.title}</h3>
          <p className="mt-2 max-w-xs text-sm text-gray-400">
            {step.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function HowItWorks() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="How It"
            highlight="Works"
            subtitle="Four simple steps from visitor to qualified lead."
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
