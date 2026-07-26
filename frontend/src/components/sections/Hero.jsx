import Button from '../ui/Button';

const stats = [
  { label: 'Leads Qualified', value: '10,000+', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Time Saved', value: '85%', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Accuracy Rate', value: '94%', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
];

export default function Hero({ onNavigate }) {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('contact');
    scrollTo('#contact');
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[500px] rounded-full bg-secondary-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400 animate-fade-in-down">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            AI-Powered Lead Profiling
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in-up">
            <span className="text-white">Qualify Leads</span>
            <br />
            <span className="gradient-text">With Intelligence</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Automatically classify website visitors using AI. No manual
            qualification needed. The system analyzes browsing behavior and
            instantly routes the right leads to your sales team.
          </p>

          <div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Button size="lg" onClick={handleGetStarted}>
              Start Profiling Leads
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#services')}
            >
              See How It Works
            </Button>
          </div>
        </div>

        <ul
          className="mt-20 grid gap-4 sm:grid-cols-3 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
          role="list"
        >
          {stats.map((stat) => (
            <li key={stat.label} className="glass-card text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10" aria-hidden="true">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
