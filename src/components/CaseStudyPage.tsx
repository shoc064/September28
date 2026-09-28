import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  FileText,
  Layers,
} from 'lucide-react';
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
    <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
      {/* Top Return Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#181c26]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#60a5fa]" />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748b]">
          <span>CASE STUDY</span>
          <span>/</span>
          <span className="text-[#60a5fa] font-semibold uppercase">
            {caseStudy.company}
          </span>
        </div>
      </div>

      {/* Case Study Hero Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded bg-[#10192e] border border-[#1e3463] text-[10px] font-mono font-bold tracking-[0.14em] text-[#60a5fa] uppercase">
            {caseStudy.company}
          </span>
          <span className="px-2.5 py-1 rounded bg-[#161a26] border border-[#242a3b] text-[10px] font-mono text-[#94a3b8]">
            {caseStudy.badge}
          </span>
          <span className="text-[11px] font-mono text-[#64748b]">
            • {caseStudy.period}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-[-0.02em] leading-[1.12] max-w-4xl mb-5">
          {caseStudy.title}
        </h1>

        <p className="text-[15px] sm:text-[17px] text-[#94a3b8] leading-[1.65] max-w-3xl mb-6">
          {caseStudy.executiveSummary}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-4 border-t border-[#181c26] text-xs text-[#8e98ab]">
          <div>
            <span className="font-mono uppercase text-[10px] tracking-wider text-[#64748b] mr-2">
              ROLE:
            </span>
            <span className="text-white font-medium">{caseStudy.role}</span>
          </div>
          <div>
            <span className="font-mono uppercase text-[10px] tracking-wider text-[#64748b] mr-2">
              DOMAIN:
            </span>
            <span className="text-[#cbd5e1]">{caseStudy.domain}</span>
          </div>
        </div>
      </div>

      {/* Quantified Impact Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {caseStudy.impactMetrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-[#12151e] border border-[#1e2433] rounded-lg p-6"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5">
              {metric.value}
            </div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#60a5fa] mb-1.5">
              {metric.label}
            </div>
            <div className="text-[12.5px] text-[#8e98ab] leading-relaxed">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Core Challenge & Contribution Summary Box (Matching Homepage Stitch Card DNA) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        <div className="lg:col-span-5 bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
              MARKET CONTEXT &amp; PROBLEM
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              The Strategic Challenge
            </h2>
            <p className="text-[13.5px] text-[#94a3b8] leading-relaxed mb-6">
              {caseStudy.challenge}
            </p>
            <ul className="space-y-3">
              {caseStudy.problemStatement.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[13px] text-[#8e98ab] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-[#1c2130]">
            <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#60a5fa] mb-1">
              CORE PMM MANDATE
            </div>
            <p className="text-[12.5px] text-[#cbd5e1] leading-relaxed">
              {caseStudy.contribution}
            </p>
          </div>
        </div>

        {/* Right: Strategic Execution Pillars */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
              GTM ARCHITECTURE
            </div>
            <h2 className="text-xl font-bold text-white mb-6">
              Strategic Execution &amp; Positioning
            </h2>

            <div className="space-y-5">
              {caseStudy.strategicApproach.map((pillar, idx) => (
                <div
                  key={pillar.heading}
                  className="bg-[#141822] border border-[#1f2536] rounded-lg p-5"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#122247] border border-[#1e3a7a] text-[9.5px] font-mono font-bold text-[#60a5fa]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-[15px] font-bold text-white">
                      {pillar.heading}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#8e98ab] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          <div className="bg-[#12151e] border border-[#1e2433] rounded-xl p-6">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b] mb-4">
              <Layers className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>KEY GTM DELIVERABLES &amp; ASSETS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.deliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="flex items-start gap-2.5 text-[12.5px] text-[#cbd5e1]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Artifacts Showcase (Attached Project Designs & Slides) */}
      {caseStudy.artifacts.length > 0 && (
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
                PORTFOLIO WORK SAMPLES
              </div>
              <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight">
                Execution Artifacts &amp; Positioning Assets
              </h2>
            </div>
            <p className="text-[12.5px] text-[#8e98ab] max-w-md">
              Selected messaging hierarchies, web architecture overhauls, technical
              diagrams, and sales enablement slides produced for {caseStudy.company}.
            </p>
          </div>

          <div className="space-y-10">
            {caseStudy.artifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="bg-[#10131b] border border-[#1e2433] rounded-xl p-5 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#1b202e]">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{artifact.type}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {artifact.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxArtifact(artifact)}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#161a26] hover:bg-[#1e2436] border border-[#252c3e] text-[10.5px] font-mono text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span>EXPAND ARTIFACT</span>
                  </button>
                </div>

                {/* Artifact Visual Container */}
                <div className="mb-4">
                  <ArtifactRenderer artifact={artifact} />
                </div>

                <p className="text-[12.5px] text-[#8e98ab] leading-relaxed pt-2">
                  {artifact.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Case Study Footer Navigation (Prev / Next + Return Home) */}
      <div className="pt-10 border-t border-[#181c26]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => onSelectCaseStudy(prevStudy.id)}
            className="text-left bg-[#12151e] hover:bg-[#161a26] border border-[#1e2433] hover:border-[#2e384f] rounded-xl p-5 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b] mb-1.5">
              <ArrowLeft className="w-3 h-3 text-[#60a5fa] group-hover:-translate-x-0.5 transition-transform" />
              <span>PREVIOUS CASE STUDY</span>
            </div>
            <div className="text-xs font-mono text-[#60a5fa] uppercase mb-0.5">
              {prevStudy.company}
            </div>
            <div className="text-sm font-bold text-white line-clamp-1">
              {prevStudy.title}
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectCaseStudy(nextStudy.id)}
            className="text-left sm:text-right bg-[#12151e] hover:bg-[#161a26] border border-[#1e2433] hover:border-[#2e384f] rounded-xl p-5 transition-all cursor-pointer group"
          >
            <div className="flex items-center sm:justify-end gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b] mb-1.5">
              <span>NEXT CASE STUDY</span>
              <ArrowRight className="w-3 h-3 text-[#60a5fa] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="text-xs font-mono text-[#60a5fa] uppercase mb-0.5">
              {nextStudy.company}
            </div>
            <div className="text-sm font-bold text-white line-clamp-1">
              {nextStudy.title}
            </div>
          </button>
        </div>

        <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#60a5fa] mb-1">
              DISCUSS THIS GTM PLAYBOOK
            </div>
            <div className="text-lg font-bold text-white">
              Want to walk through the complete {caseStudy.company} architecture?
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackHome}
              className="px-4 py-2.5 rounded bg-[#151922] hover:bg-[#1c212d] border border-[#252b3b] text-[#cbd5e1] text-[11px] font-semibold tracking-[0.1em] uppercase cursor-pointer"
            >
              ← ALL CASE STUDIES
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[11px] font-semibold tracking-[0.1em] uppercase cursor-pointer"
            >
              SCHEDULE BRIEFING
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Screen Artifact Inspection */}
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
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#60a5fa]">
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
