const problems = [
  {
    id: 1,
    title: 'The industry average follow-up time is 47 hours',
    description:
      'Leads contacted within 5 minutes are 9× more likely to convert. Your competitor is faster.',
  },
  {
    id: 2,
    title: 'Follow-up stops on weekends and after 6 PM',
    description:
      'Leads that come in on Saturday at 9 PM are gone by Monday morning.',
  },
  {
    id: 3,
    title: "Unqualified leads eat your team's selling time",
    description:
      'Without qualification, your team burns hours on people who were never going to buy.',
  },
];

export default function TheProblem() {
  return (
    <section
      className="border-b border-white/[0.07] px-4 py-16 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          {/* Left Column: Context & Narrative */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00d46c]">
              The Problem
            </p>
            <h2
              id="problem-heading"
              className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Most leads go cold before your team picks up the phone.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#a1a1aa] sm:mt-6 sm:text-base">
              A lead submits a form. Your team sees it 4 hours later. By then, they've called three
              competitors and picked one. You lose the deal before the conversation started.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa] sm:text-base">
              This isn't a people problem. It's a systems problem. And it costs you revenue every
              single day.
            </p>
          </div>

          {/* Right Column: Problem Cards */}
          <div className="flex flex-col gap-3">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="flex items-start gap-4 rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400"
                  aria-hidden="true"
                >
                  ✕
                </span>
                <div>
                  <p className="text-sm font-medium text-white sm:text-base">
                    {problem.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#71717a] sm:text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

