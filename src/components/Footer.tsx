import React from 'react';
import { Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0B0D12] pt-14 pb-10 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-12">
          {/* Left Column */}
          <div className="max-w-md">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-2">
              LET&apos;S CONNECT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
              Ready to architect high-velocity GTM systems?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Bridging technical product depth with rigorous product marketing leadership and quantifiable enterprise revenue growth.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:items-end justify-between gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#141720] hover:bg-[#1B1F2B] border border-white/15 text-[11px] font-mono uppercase tracking-wider text-slate-200 transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PORTFOLIO_DATA.contact.email.toUpperCase()}
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-[11px] font-mono uppercase tracking-wider text-white font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                SCHEDULE STRATEGIC BRIEFING
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => onNavigateHome('work')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Selected Work
              </button>
              <button
                type="button"
                onClick={onOpenResume}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Resume
              </button>
              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>© 2026 Tanmay Choudhury. All rights reserved.</div>
          <div className="tracking-[0.14em] uppercase">
            PMM LEADERSHIP &nbsp;·&nbsp; ENTERPRISE GTM &nbsp;·&nbsp; PRODUCT STRATEGY
          </div>
        </div>
      </div>
    </footer>
  );
};
