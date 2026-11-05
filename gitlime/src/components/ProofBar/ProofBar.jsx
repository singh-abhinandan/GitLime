const metrics = [
  {
    value: '<60s',
    label: 'Lead response time',
  },
  {
    value: '24/7',
    label: 'Follow-up coverage',
  },
  {
    value: '3×',
    label: 'More appointments booked',
  },
  {
    value: '5–7',
    label: 'Days to go live',
  },
];

export default function ProofBar() {
  return (
    <section
      className="border-b border-white/[0.07] px-4 py-10 sm:py-12"
      aria-label="Key performance outcomes"
    >
      <div className="mx-auto max-w-5xl">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <dd className="text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                {metric.value}
              </dd>
              <dt className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
