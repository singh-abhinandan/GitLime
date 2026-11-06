const industries = [
  {
    id: 'real-estate',
    emoji: '🏘️',
    title: 'Real Estate Agencies',
    tagline: 'Respond to buyer inquiries instantly',
    description:
      'Every property inquiry gets an immediate WhatsApp response. Qualify buyer intent, schedule site visits, and never lose a lead to a faster agency again.',
  },
  {
    id: 'insurance',
    emoji: '🛡️',
    title: 'Insurance Advisors',
    tagline: 'Follow up before competitors do',
    description:
      'Insurance leads compare 3–5 advisors. The one who responds first wins. AI contacts your leads in under 60 seconds — before the competition picks up the phone.',
  },
  {
    id: 'education',
    emoji: '🎓',
    title: 'Education Consultants',
    tagline: 'Convert inquiries into counselling sessions',
    description:
      'Capture student and parent inquiries 24/7, qualify on course interests and budget, and auto-book counselling sessions — even on weekends.',
  },
  {
    id: 'immigration',
    emoji: '✈️',
    title: 'Immigration Consultants',
    tagline: 'Handle 10× more inquiries with no extra staff',
    description:
      'AI screens visa and PR inquiries for eligibility, answers common questions, and routes only serious applicants to your consultants — at any volume.',
  },
  {
    id: 'recruitment',
    emoji: '💼',
    title: 'Recruitment Agencies',
    tagline: 'Qualify candidates automatically',
    description:
      'AI screens candidates on role fit, experience, and availability via WhatsApp. Your recruiters only talk to people worth interviewing.',
  },
  {
    id: 'any-business',
    iconSvg: true,
    title: 'Any Appointment-Based Business',
    description:
      'If your revenue depends on booked calls, consultations, or meetings — this system was built for you.',
  },
];

export default function Industries() {
  return (
    <section
      className="border-b border-white/[0.07] px-4 py-16 md:py-24"
      id="industries"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00d46c]">
          Who It's For
        </p>
        <h2
          id="industries-heading"
          className="mb-10 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-white sm:mb-12 sm:text-3xl md:text-4xl"
        >
          Built for service businesses that run on appointments.
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              {item.emoji ? (
                <div className="mb-3 text-2xl" role="img" aria-label={item.title}>
                  {item.emoji}
                </div>
              ) : (
                <div className="mb-3 text-[#00d46c]" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
              )}

              <h3 className="text-sm font-semibold text-white sm:text-base">
                {item.title}
              </h3>

              {item.tagline && (
                <p className="mt-1 text-xs font-medium text-[#00d46c]">
                  {item.tagline}
                </p>
              )}

              <p className="mt-2 text-xs leading-relaxed text-[#71717a] sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
