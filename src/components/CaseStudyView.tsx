import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  Database,
  Share2,
  Shield,
  Cpu,
  Layers,
  Lock,
  Sparkles,
} from 'lucide-react';
import { CaseStudy, PORTFOLIO_DATA } from '../data/portfolioData';
import { ArtifactRenderer } from './CaseStudyArtifacts';

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
  onBackHome: () => void;
  onSelectCaseStudy: (slug: string) => void;
  onOpenContact: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  caseStudy,
  onBackHome,
  onSelectCaseStudy,
  onOpenContact,
}) => {
  const [lightboxArtifactId, setLightboxArtifactId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseStudy.slug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxArtifactId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const allStudies = PORTFOLIO_DATA.caseStudies;
  const currentIndex = allStudies.findIndex((c) => c.slug === caseStudy.slug);
  const prevStudy =
    currentIndex > 0 ? allStudies[currentIndex - 1] : allStudies[allStudies.length - 1];
  const nextStudy =
    currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : allStudies[0];

  const renderIcon = (name: CaseStudy['iconName']) => {
    switch (name) {
      case 'database':
        return <Database className="w-4 h-4 text-[#60A5FA]" />;
      case 'network':
        return <Share2 className="w-4 h-4 text-[#60A5FA]" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-[#60A5FA]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#60A5FA]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#60A5FA]" />;
      case 'lock':
        return <Lock className="w-4 h-4 text-[#60A5FA]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#60A5FA]" />;
    }
  };

  const activeLightboxArtifact = caseStudy.artifacts.find(
    (a) => a.id === lightboxArtifactId
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Top Return Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#3B82F6]" />
          BACK TO HOMEPAGE
        </button>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>CASE STUDY</span>
          <span>·</span>
          <span className="text-[#60A5FA] uppercase">{caseStudy.company}</span>
        </div>
      </div>

      {/* Case Study Hero Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#155EEF]/15 border border-[#155EEF]/30 text-[#60A5FA] text-[11px] font-mono uppercase tracking-wider font-semibold">
            {renderIcon(caseStudy.iconName)}
            {caseStudy.company}
          </span>
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
            {caseStudy.badge}
          </span>
          <span className="text-xs font-mono text-slate-400">{caseStudy.period}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-5 max-w-4xl">
          {caseStudy.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
          {caseStudy.executiveSummary}
        </p>

        {/* Metadata strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#11141C] border border-white/[0.08] text-xs">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              ROLE &amp; OWNERSHIP
            </div>
            <div className="font-medium text-white">{caseStudy.role}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              TECHNOLOGY DOMAIN
            </div>
            <div className="font-medium text-white">{caseStudy.segment}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              HEADLINE OUTCOME
            </div>
            <div className="font-mono font-semibold text-[#60A5FA]">
              {caseStudy.metricTitle} ({caseStudy.metricSubtitle})
            </div>
          </div>
        </div>
      </div>

      {/* Quantified Impact Metrics Bar */}
      <div className="bg-[#11141C] border border-white/[0.08] rounded-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-12">
        {caseStudy.impactMetrics.map((m, idx) => (
          <div key={idx} className="p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums mb-2">
              {m.value}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA] mb-1">
              {m.label}
            </div>
            <div className="text-xs text-slate-400">{m.detail}</div>
          </div>
        ))}
      </div>

      {/* Core Challenge & Contribution Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#11141C] border border-white/[0.08] rounded-xl p-6 sm:p-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
            01 · THE CHALLENGE
          </div>
          <h2 className="text-lg font-bold text-white mb-3">
            Market &amp; Technical Complexity
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {caseStudy.challenge}
          </p>
          <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
            {caseStudy.problemContext.map((p, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-[#11141C] border border-white/[0.08] rounded-xl p-6 sm:p-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
            02 · STRATEGIC CONTRIBUTION
          </div>
          <h2 className="text-lg font-bold text-white mb-3">
            PMM Execution &amp; GTM Architecture
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {caseStudy.contribution}
          </p>
          <div className="space-y-3 pt-3 border-t border-white/[0.06]">
            {caseStudy.strategicExecution.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">{step.heading}</div>
                  <div className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Key Messaging Framework Section */}
      {caseStudy.messagingFramework && caseStudy.messagingFramework.length > 0 && (
        <div className="bg-[#101522] border border-white/10 rounded-xl p-6 sm:p-8 mb-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA] mb-1.5">
            MESSAGING HIERARCHY
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Core Value Pillars &amp; Buyer Positioning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudy.messagingFramework.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151B2B] border border-white/[0.07] rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#60A5FA] uppercase mb-2">
                    PILLAR 0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug mb-3">
                    {item.pillar}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 border-t border-white/[0.06] pt-3">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-mono">–</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visual Artifacts & Portfolio Deliverables Section */}
      {caseStudy.artifacts.length > 0 && (
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                PORTFOLIO EVIDENCE &amp; DELIVERABLES
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                GTM Execution Artifacts
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Click any artifact to inspect in fullscreen view
            </p>
          </div>

          <div className="space-y-10">
            {caseStudy.artifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="bg-[#11141C] border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Artifact Header */}
                <div className="px-5 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 bg-[#141822]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#60A5FA] block mb-0.5">
                      {artifact.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {artifact.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxArtifactId(artifact.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.05] hover:bg-white/10 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-slate-200 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Expand Artifact
                  </button>
                </div>

                {/* Rendered Artifact Slide / Screenshot */}
                <div
                  onClick={() => setLightboxArtifactId(artifact.id)}
                  className="p-4 sm:p-6 bg-[#0D0F15] cursor-zoom-in"
                >
                  <ArtifactRenderer artifactId={artifact.id} />
                </div>

                {/* Artifact Caption */}
                <div className="px-5 py-3.5 border-t border-white/[0.06] bg-[#11141C] text-xs text-slate-400 leading-relaxed">
                  {artifact.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next / Previous Case Study Navigation */}
      <div className="border-t border-white/10 pt-10">
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">
          CONTINUE EXPLORING WORK
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <button
            type="button"
            onClick={() => onSelectCaseStudy(prevStudy.slug)}
            className="text-left p-5 rounded-xl bg-[#11141C] hover:bg-[#161A25] border border-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              <ArrowLeft className="w-3.5 h-3.5 text-[#3B82F6] group-hover:-translate-x-0.5 transition-transform" />
              PREVIOUS CASE STUDY
            </div>
            <div className="text-xs font-mono text-[#60A5FA] uppercase mb-1">
              {prevStudy.company}
            </div>
            <div className="text-sm sm:text-base font-bold text-white">
              {prevStudy.title}
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectCaseStudy(nextStudy.slug)}
            className="text-left md:text-right p-5 rounded-xl bg-[#11141C] hover:bg-[#161A25] border border-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center md:justify-end gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              NEXT CASE STUDY
              <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="text-xs font-mono text-[#60A5FA] uppercase mb-1">
              {nextStudy.company}
            </div>
            <div className="text-sm sm:text-base font-bold text-white">
              {nextStudy.title}
            </div>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#11141C] border border-white/10 rounded-xl p-6">
          <div>
            <div className="text-sm font-bold text-white">
              Want to discuss how these GTM frameworks apply to your product?
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Open to Product Marketing Lead and Director of Product Marketing opportunities.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackHome}
              className="px-4 py-2.5 rounded bg-[#141720] hover:bg-[#1B1F2B] border border-white/15 text-xs font-mono uppercase tracking-wider text-slate-200 cursor-pointer"
            >
              ← Return to Homepage
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2.5 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-xs font-mono uppercase tracking-wider text-white font-medium cursor-pointer"
            >
              Schedule Briefing
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxArtifact && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
          onClick={() => setLightboxArtifactId(null)}
        >
          <div
            className="max-w-5xl w-full bg-[#11141C] border border-white/15 rounded-xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4 bg-[#151924]">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#60A5FA]">
                  {activeLightboxArtifact.category}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {activeLightboxArtifact.title}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightboxArtifactId(null)}
                className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-8 bg-[#0B0D12] max-h-[80vh] overflow-y-auto">
              <ArtifactRenderer artifactId={activeLightboxArtifact.id} />
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                {activeLightboxArtifact.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
