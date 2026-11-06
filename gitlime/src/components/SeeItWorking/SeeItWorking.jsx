const milestones = [
  'Lead arrives',
  'WhatsApp sent',
  'AI qualifies',
  'Appointment booked',
];

export default function SeeItWorking() {
  return (
    <section
      className="border-b border-white/[0.07] px-4 py-16 md:py-24"
      id="demo"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00d46c]">
            See It Working
          </p>
          <h2
            id="demo-heading"
            className="mx-auto max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Watch a lead go from form to booked appointment in under 2 minutes.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#a1a1aa] sm:mt-5 sm:text-base">
            No slides. No theory. A real lead comes in, the AI responds on WhatsApp, qualifies them,
            and books the appointment — while the team is offline.
          </p>
        </div>

        {/* Video Placeholder Container */}
        <div className="mt-10 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]">
          <div
            className="flex aspect-video w-full flex-col items-center justify-center gap-4 p-8 text-center"
            role="img"
            aria-label="Demo video placeholder"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.05]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 text-[#00d46c]"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Demo video coming soon
              </p>
              <p className="mt-1 text-xs text-[#52525b] sm:text-sm">
                Replace this placeholder with your Loom or YouTube screen recording
              </p>
            </div>
          </div>
        </div>

        {/* Demo Milestones / Features Strip */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {milestones.map((milestone) => (
            <div
              key={milestone}
              className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
            >
              <span className="text-[#00d46c]" aria-hidden="true">
                ✓
              </span>
              <span className="text-xs text-[#a1a1aa]">{milestone}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

