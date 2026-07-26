import { useState, useCallback, useRef, useEffect } from 'react';
import { classNames } from '../../utils/helpers';

const navItems = [
  { label: 'Home', href: '#home', id: 'homepage' },
  { label: 'Services', href: '#services', id: 'sales_bots' },
  { label: 'Solutions', href: '#solutions', id: 'organizational_development' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  const handleNav = useCallback(
    (e, item) => {
      e.preventDefault();
      if (onNavigate) onNavigate(item.id);
      setMobileOpen(false);
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    [onNavigate]
  );

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  // Close on Escape and trap focus
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => handleNav(e, navItems[0])}
          className="flex items-center gap-2 text-lg font-bold"
        >
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
          <span className="hidden sm:inline">LeadProfiler</span>
        </a>

        <div className="hidden items-center gap-1 md:flex" role="list">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNav(e, item)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, navItems[4])}
          className="hidden rounded-xl bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 hover:shadow-primary-500/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-gray-950 md:inline-block"
        >
          Get Started
        </a>

        <button
          ref={triggerRef}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 md:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="list"
        className={classNames(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNav(e, item)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, navItems[4])}
            className="mt-2 block rounded-xl bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-600/25 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
