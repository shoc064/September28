import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X, FileText, CheckCircle2 } from 'lucide-react';
import { CaseStudy, CaseStudyArtifact, PORTFOLIO_DATA } from '../data/portfolioData';
import { ArtifactRenderer } from './ArtifactVisuals';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
  onBackHome: () => void;
  onSelectCaseStudy: (id: string) => void;
  onOpenContact: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  caseStudy,
  onBackHome,
  onSelectCaseStudy,
  onOpenContact,
}) => {
  const [lightboxArtifact, setLightboxArtifact] = useState<CaseStudyArtifact | null>(
    null
  );

  const allStudies = PORTFOLIO_DATA.caseStudies;
  const currentIndex = allStudies.findIndex((cs) => cs.id === caseStudy.id);
  const prevStudy =
    currentIndex > 0
      ? allStudies[currentIndex - 1]
      : allStudies[allStudies.length - 1];
  const nextStudy =
    currentIndex < allStudies.length - 1
      ? allStudies[currentIndex + 1]
      : allStudies[0];

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
      {/* Top Return Navigation Bar */}
      <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-[#181c26]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-[13px] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#60a5fa]" />
          <span>Back to selected work</span>
        </button>

        <div className="flex items-center gap-2 text-[12px] text-[#64748b]">
          <span>{caseStudy.company}</span>
          <span>·</span>
          <span>{caseStudy.sector}</span>
          <span>·</span>
          <span>{caseStudy.years}</span>
        </div>
      </div>

      {/* Case Study Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[12px] font-mono text-[#60a5fa]">
            {caseStudy.roleLabel}
          </span>
          <span className="text-[#475569]">·</span>
          <span className="text-[12px] text-[#94a3b8]">{caseStudy.company}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.02em] leading-[1.15] max-w-3xl mb-5">
          {caseStudy.headline}
        </h1>

        <p className="text-[17px] text-[#cbd5e1] leading-[1.65] max-w-[70ch] mb-6">
          {caseStudy.challenge}
        </p>
      </header>

      {/* Standardized Structure: Problem → Insight → Strategy → Execution → Impact → Work samples */}
      <div className="space-y-12">
        {/* 1. Problem */}
        <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Context
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Problem</h2>
          <ul className="space-y-3">
            {caseStudy.problem.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[16px] text-[#cbd5e1] leading-[1.6] max-w-[70ch]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 2. Insight */}
        <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Breakthrough
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Insight</h2>
          <p className="text-[17px] text-white font-medium leading-[1.6] max-w-[70ch] border-l-2 border-[#3b82f6] pl-4">
            {caseStudy.insight}
          </p>
        </section>

        {/* 3. Strategy */}
        <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Approach
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudy.strategy.map((pillar) => (
              <div
                key={pillar.heading}
                className="bg-[#141822] border border-[#1f2536] rounded-lg p-5"
              >
                <h3 className="text-[16px] font-semibold text-white mb-2">
                  {pillar.heading}
                </h3>
                <p className="text-[15px] text-[#94a3b8] leading-[1.6]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Execution */}
        <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Deliverables
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Execution</h2>
          <ul className="space-y-3">
            {caseStudy.execution.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[16px] text-[#cbd5e1] leading-[1.6] max-w-[70ch]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6] mt-0.5 shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Impact */}
        <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Outcomes
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudy.impact.map((item) => (
              <div
                key={item.metric}
                className="bg-[#141822] border border-[#1f2536] rounded-lg p-5"
              >
                <div className="text-2xl font-bold text-white mb-2">
                  {item.metric}
                </div>
                <div className="text-[15px] text-[#cbd5e1] leading-[1.6]">
                  {item.because}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Work samples */}
        {caseStudy.artifacts && caseStudy.artifacts.length > 0 && (
          <section className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
              Artifacts
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Work samples
            </h2>

            <div className="space-y-8">
              {caseStudy.artifacts.map((artifact) => (
                <div
                  key={artifact.id}
                  className="bg-[#141822] border border-[#1f2536] rounded-xl p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#1e2434]">
                    <div>
                      <div className="text-[11px] font-mono text-[#60a5fa] mb-0.5">
                        {artifact.type}
                      </div>
                      <h3 className="text-[17px] font-semibold text-white">
                        {artifact.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      {artifact.isAvailableOnRequest && (
                        <span className="px-2.5 py-1 rounded bg-[#162032] border border-[#23385c] text-[11px] font-mono text-[#93c5fd]">
                          Available on request
                        </span>
                      )}
                      {artifact.isWaitingOnFile && (
                        <span className="px-2.5 py-1 rounded bg-[#201d14] border border-[#3e341b] text-[11px] font-mono text-[#fde047]">
                          Waiting on file from user
                        </span>
                      )}
                      {!artifact.isAvailableOnRequest && !artifact.isWaitingOnFile && (
                        <button
                          type="button"
                          onClick={() => setLightboxArtifact(artifact)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d2a] hover:bg-[#202738] border border-[#263044] text-[12px] text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#60a5fa]" />
                          <span>Expand</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual Renderer */}
                  <div className="mb-4">
                    <ArtifactRenderer artifact={artifact} />
                  </div>

                  <p className="text-[14px] text-[#94a3b8] leading-[1.6]">
                    {artifact.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Case Study Footer Navigation */}
      <nav className="mt-16 pt-8 border-t border-[#181c26]" aria-label="Case study navigation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => onSelectCaseStudy(prevStudy.id)}
            className="text-left bg-[#10131b] hover:bg-[#141822] border border-[#1d2230] hover:border-[#2e384f] rounded-xl p-5 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 text-[11px] text-[#64748b] mb-1">
              <ArrowLeft className="w-3.5 h-3.5 text-[#60a5fa] group-hover:-translate-x-0.5 transition-transform" />
              <span>Previous case study</span>
            </div>
            <div className="text-[12px] font-mono text-[#60a5fa] mb-0.5">
              {prevStudy.company}
            </div>
            <div className="text-[15px] font-semibold text-white line-clamp-1">
              {prevStudy.headline}
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectCaseStudy(nextStudy.id)}
            className="text-left sm:text-right bg-[#10131b] hover:bg-[#141822] border border-[#1d2230] hover:border-[#2e384f] rounded-xl p-5 transition-all cursor-pointer group"
          >
            <div className="flex items-center sm:justify-end gap-1.5 text-[11px] text-[#64748b] mb-1">
              <span>Next case study</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#60a5fa] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="text-[12px] font-mono text-[#60a5fa] mb-0.5">
              {nextStudy.company}
            </div>
            <div className="text-[15px] font-semibold text-white line-clamp-1">
              {nextStudy.headline}
            </div>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#10131b] border border-[#1d2230] rounded-xl p-6">
          <div>
            <h3 className="text-base font-semibold text-white">
              Discuss this work or review confidential playbooks
            </h3>
            <p className="text-[14px] text-[#94a3b8] mt-0.5">
              Available for technical deep-dives into GTM architecture and pipeline execution.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackHome}
              className="px-4 py-2 rounded bg-[#141822] hover:bg-[#1b202c] border border-[#242a38] text-[13px] font-medium text-[#cbd5e1] hover:text-white cursor-pointer"
            >
              All work
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[13px] font-medium text-white cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      {/* Lightbox Modal */}
      {lightboxArtifact && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setLightboxArtifact(null)}
        >
          <div
            className="w-full max-w-5xl bg-[#10131b] border border-[#252c3e] rounded-xl p-4 sm:p-6 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#1e2433]">
              <div>
                <div className="text-[11px] font-mono text-[#60a5fa]">
                  {lightboxArtifact.type}
                </div>
                <h3 className="text-base font-bold text-white">
                  {lightboxArtifact.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxArtifact(null)}
                className="p-2 rounded bg-[#161a26] hover:bg-[#1f2536] text-[#cbd5e1] hover:text-white cursor-pointer"
                aria-label="Close artifact preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto">
              <ArtifactRenderer artifact={lightboxArtifact} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
