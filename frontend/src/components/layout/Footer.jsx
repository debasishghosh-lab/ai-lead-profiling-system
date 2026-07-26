const footerLinks = {
  services: ['Sales Bots', 'Organizational Development', 'AI Classification'],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gray-950" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500"
                aria-hidden="true"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              LeadProfiler
            </div>
            <p className="mt-3 text-sm text-gray-500">
              AI-powered lead qualification that works around the clock.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500" role="list">
              {footerLinks.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500" role="list">
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-primary-400"
                >
                  Get in Touch
                </a>
              </li>
              <li>sales@leadprofiler.ai</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          &copy; {currentYear} LeadProfiler. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
