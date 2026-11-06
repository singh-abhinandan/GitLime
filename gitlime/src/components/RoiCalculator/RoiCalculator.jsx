import { useState } from 'react';

const GCAL_URL = 'https://calendar.app.google/qrEhoCCEN9ZwNTyq5';

function fmt(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(1) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + ' L';
  if (n >= 1000) return '₹' + n.toLocaleString('en-IN');
  return '₹' + n;
}

export default function RoiCalculator() {
  const [leads, setLeads] = useState(100);
  const [dealValue, setDealValue] = useState(20000);
  const [conversionRate, setConversionRate] = useState(15);

  const conv = conversionRate / 100;
  const currentMeetings = Math.round(leads * conv);
  const aiConv = Math.min(conv * 1.4, 0.9);
  const newMeetings = Math.round(leads * aiConv) - currentMeetings;
  const currentRev = currentMeetings * dealValue;
  const recoveredRev = newMeetings * dealValue;

  const openCalendar = () => {
    window.open(GCAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="border-b border-white/[0.07] px-4 py-16 md:py-24"
      id="roi-calculator"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#00d46c]">
            Revenue Calculator
          </p>
          <h2
            id="roi-heading"
            className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            How much revenue are you losing to slow follow-up?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#a1a1aa] sm:mt-5 sm:text-base">
            Adjust the sliders to see how much revenue an AI system could recover for your business.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Sliders Input Column */}
          <div className="flex flex-col gap-7" role="form" aria-label="ROI calculator inputs">
            {/* Monthly Leads */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="roi-leads" className="text-sm font-medium text-white">
                  Monthly leads received
                </label>
                <span id="roi-leads-val" className="text-sm font-semibold tabular-nums text-[#00d46c]">
                  {leads}
                </span>
              </div>
              <input
                type="range"
                id="roi-leads"
                className="roi-slider"
                min="10"
                max="500"
                step="10"
                value={leads}
                onChange={(e) => setLeads(parseInt(e.target.value, 10))}
                aria-label="Monthly leads received"
                aria-valuemin="10"
                aria-valuemax="500"
                aria-valuenow={leads}
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-[#52525b]">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Deal Value */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="roi-deal" className="text-sm font-medium text-white">
                  Average deal value
                </label>
                <span id="roi-deal-val" className="text-sm font-semibold tabular-nums text-[#00d46c]">
                  {'₹' + dealValue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                id="roi-deal"
                className="roi-slider"
                min="5000"
                max="200000"
                step="5000"
                value={dealValue}
                onChange={(e) => setDealValue(parseInt(e.target.value, 10))}
                aria-label="Average deal value in rupees"
                aria-valuemin="5000"
                aria-valuemax="200000"
                aria-valuenow={dealValue}
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-[#52525b]">
                <span>₹5,000</span>
                <span>₹2,00,000</span>
              </div>
            </div>

            {/* Conversion Rate */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="roi-conv" className="text-sm font-medium text-white">
                  Current lead-to-meeting rate
                </label>
                <span id="roi-conv-val" className="text-sm font-semibold tabular-nums text-[#00d46c]">
                  {conversionRate}%
                </span>
              </div>
              <input
                type="range"
                id="roi-conv"
                className="roi-slider"
                min="5"
                max="50"
                step="1"
                value={conversionRate}
                onChange={(e) => setConversionRate(parseInt(e.target.value, 10))}
                aria-label="Current lead to meeting conversion rate percentage"
                aria-valuemin="5"
                aria-valuemax="50"
                aria-valuenow={conversionRate}
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-[#52525b]">
                <span>5%</span>
                <span>50%</span>
              </div>
            </div>
          </div>

          {/* Results Card Column */}
          <div
            className="rounded-xl border border-[#00d46c]/20 bg-[#00d46c]/[0.03] p-6 sm:p-8"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* BIG NUMBER Card */}
            <div className="mb-6 rounded-lg border border-[#00d46c]/25 bg-[#00d46c]/[0.08] px-4 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00d46c]/70">
                Potential monthly revenue recovered
              </p>
              <p id="roi-recovered" className="roi-result-num mt-2 text-5xl font-bold text-[#00d46c] sm:text-6xl">
                {'+' + fmt(recoveredRev)}
              </p>
              <p className="mt-1.5 text-xs text-[#52525b]">
                From leads that currently go cold
              </p>
            </div>

            {/* Supporting Stats */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#a1a1aa]">Currently converting</span>
                <span id="roi-current-meetings" className="roi-result-num font-semibold text-white">
                  {currentMeetings}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                <span className="text-[#a1a1aa]">With AI follow-up</span>
                <span id="roi-new-meetings" className="roi-result-num font-semibold text-[#00d46c]">
                  {'+' + newMeetings}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                <span className="text-[#a1a1aa]">Current monthly revenue</span>
                <span id="roi-current-rev" className="roi-result-num font-semibold text-white">
                  {fmt(currentRev)}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={openCalendar}
              className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#00d46c] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#00bf61] cursor-pointer"
              aria-label="Recover this revenue — get free audit"
            >
              Recover This Revenue — Get Free Audit
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-[#52525b]">
          * Estimate based on industry-average improvement from automated follow-up vs. manual. Actual results vary.
        </p>
      </div>
    </section>
  );
}

