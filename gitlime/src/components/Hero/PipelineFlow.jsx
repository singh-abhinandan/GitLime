const steps = [
  {
    id: 1,
    icon: '📋',
    title: 'Lead Submits Form',
    subtitle: 'Website, Facebook, or Google',
    highlighted: false,
  },
  {
    id: 2,
    icon: '⚡',
    title: 'AI Responds in 30s',
    subtitle: 'Personalized WhatsApp message',
    highlighted: true,
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI Qualifies Lead',
    subtitle: 'Budget, intent, timeline — scored',
    highlighted: false,
  },
  {
    id: 4,
    icon: '📅',
    title: 'Appointment Booked',
    subtitle: 'Lands in your calendar',
    highlighted: false,
  },
  {
    id: 5,
    icon: '📊',
    title: 'CRM Updated',
    subtitle: 'Zero manual data entry',
    highlighted: false,
  },
];

export default function PipelineFlow() {
  return (
    <div className="mx-auto mt-12 max-w-3xl" aria-label="How the system works end to end">
      <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#52525b]">
        What happens from lead to appointment
      </p>

      {/* Mobile: vertical stack. lg: horizontal row */}
      <div className="flex flex-col items-center gap-0 lg:flex-row lg:items-stretch lg:justify-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center lg:flex-row lg:items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex w-48 flex-col items-center rounded-lg px-4 py-4 text-center transition ${
                  step.highlighted
                    ? 'border border-[#00d46c]/20 bg-[#00d46c]/[0.04]'
                    : 'border border-white/[0.07] bg-white/[0.03]'
                }`}
              >
                <span className="mb-2 text-xl" aria-hidden="true">
                  {step.icon}
                </span>
                <p className="text-xs font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#52525b]">{step.subtitle}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="flex items-center justify-center py-2 lg:py-0 lg:px-2" aria-hidden="true">
                <svg
                  className="h-5 w-5 rotate-90 text-[#00d46c] lg:rotate-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-[#52525b]">
        All of this happens automatically. Your team just shows up to the meeting.
      </p>
    </div>
  );
}
