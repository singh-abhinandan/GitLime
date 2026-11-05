const steps = [
  {
    number: 1,
    title: 'Connect Your Lead Sources',
    description:
      'Website forms, Facebook Lead Ads, Google Forms. Every new lead captured automatically — nothing slips through.',
  },
  {
    number: 2,
    title: 'AI Qualifies on WhatsApp',
    description:
      'Within 60 seconds, AI sends a personalized WhatsApp message, qualifies the lead on budget and intent, and scores them. Day or night.',
  },
  {
    number: 3,
    title: 'Appointments Book Themselves',
    description:
      'Qualified leads pick a time, the meeting lands in your calendar, and your CRM updates. Your team just shows up.',
  },
];

export default function TheSystem() {
  return (
    <section
      className="border-b border-white/[0.07] px-4 py-16 md:py-24"
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00d46c]">
            The System
          </p>
          <h2
            id="how-it-works-heading"
            className="mx-auto max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            AI Lead Follow-Up System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#a1a1aa] sm:mt-5 sm:text-base">
            A done-for-you system that connects to your lead sources, responds via WhatsApp in under a
            minute, qualifies leads through conversation, and books appointments — without your team
            lifting a finger.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d46c]/10 text-sm font-bold text-[#00d46c]">
                {step.number}
              </div>
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#71717a] sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

