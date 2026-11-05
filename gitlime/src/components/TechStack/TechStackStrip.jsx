const technologies = [
  'OpenAI',
  'Claude AI',
  'n8n',
  'WhatsApp Business API',
];

export default function TechStackStrip() {
  return (
    <section
      className="border-b border-white/[0.07] bg-white/[0.01] px-4 py-6 sm:py-8"
      aria-label="Technology and delivery guarantees"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Built with tech badges */}
          <div>
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-[#52525b]">
              Built with
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#a1a1aa]"
                >
                  <span className="text-[#00d46c]">✓</span> {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Delivery & Response time guarantees */}
          <div className="flex gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#52525b]">
                Response time
              </p>
              <p className="mt-1 text-sm font-semibold text-white">Under 60 seconds</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#52525b]">
                Typical setup
              </p>
              <p className="mt-1 text-sm font-semibold text-white">5–7 business days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

