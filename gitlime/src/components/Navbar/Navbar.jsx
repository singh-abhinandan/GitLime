import { useState, useEffect } from 'react';
import logo from '../../assets/Gitlime-Reverse.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar — AI Revenue Systems positioning */}
      <nav
        className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#09090b]/90 backdrop-blur-md"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Open main menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="flex items-center" aria-label="Gitlime — AI Revenue Systems home">
              <img
                className="h-7 w-auto"
                src={logo}
                alt="Gitlime"
                width="112"
                height="29"
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <a
                href="#how-it-works"
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
              >
                How It Works
              </a>
              <a
                href="#industries"
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
              >
                Industries
              </a>
              <a
                href="#roi-calculator"
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
              >
                ROI Calculator
              </a>
              <a
                href="#systems"
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
              >
                Systems
              </a>
              <a
                href="/blog/"
                className="text-sm font-medium text-white/60 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d46c]"
              >
                Blog
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="https://wa.me/918210309433?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20AI%20Lead%20Follow%20Up%20System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/60 transition hover:text-white"
                aria-label="WhatsApp enquiry"
              >
                WhatsApp
              </a>
              <a
                href="https://forms.gle/K94Uz6wtCntjnic79"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#00d46c] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#00bf61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d46c]"
                aria-label="Get a free automation audit"
              >
                Get Free Audit
              </a>
            </div>

            {/* Mobile phone */}
            <a
              href="tel:+918210309433"
              className="text-sm font-semibold text-[#00d46c] lg:hidden"
              aria-label="Call Gitlime"
            >
              +91-821-030-9433
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-[199] bg-black/65 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 bottom-0 z-[200] w-72 bg-[#09090b] border-r border-white/[0.07] flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] p-4">
          <a href="/" aria-label="Gitlime home" onClick={() => setIsOpen(false)}>
            <img className="h-7 w-auto" src={logo} alt="Gitlime" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 text-white/60 transition hover:text-white"
            aria-label="Close navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4 flex-1">
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block rounded-md p-3 text-base font-medium text-white/80 transition hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#industries"
            onClick={() => setIsOpen(false)}
            className="block rounded-md p-3 text-base font-medium text-white/80 transition hover:text-white"
          >
            Industries
          </a>
          <a
            href="#roi-calculator"
            onClick={() => setIsOpen(false)}
            className="block rounded-md p-3 text-base font-medium text-white/80 transition hover:text-white"
          >
            ROI Calculator
          </a>
          <a
            href="#systems"
            onClick={() => setIsOpen(false)}
            className="block rounded-md p-3 text-base font-medium text-white/80 transition hover:text-white"
          >
            Systems
          </a>
          <a
            href="/blog/"
            className="block rounded-md p-3 text-base font-medium text-white/80 transition hover:text-white"
          >
            Blog
          </a>
        </nav>

        <div className="flex flex-col gap-3 border-t border-white/[0.07] p-4">
          <a
            href="https://forms.gle/K94Uz6wtCntjnic79"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md bg-[#00d46c] px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-[#00bf61]"
          >
            Get Free Automation Audit
          </a>
          <a
            href="https://wa.me/918210309433"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md border border-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/[0.06]"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </>
  );
}
