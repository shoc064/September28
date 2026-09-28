import React from 'react';
import { ArrowLeft, Download, Mail, CheckCircle2, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumePageProps {
  onBackHome: () => void;
  onDownloadResume: () => void;
  onOpenContact: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({
  onBackHome,
  onDownloadResume,
  onOpenContact,
  onSelectCaseStudy,
}) => {
  const { profile, metrics, resumeData } = PORTFOLIO_DATA;

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#181c26]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#60a5fa]" />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onDownloadResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[10.5px] font-semibold tracking-[0.1em] text-white uppercase transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>
      </div>

      {/* Executive Resume Container */}
      <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-10 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-8 border-b border-[#1c2230]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#10192e] border border-[#1e3463] text-[10px] font-mono font-semibold tracking-[0.14em] text-[#60a5fa] uppercase mb-3">
              <span>CURRICULUM VITAE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base text-[#60a5fa] font-medium">
              Product Marketing Leadership — Data Architecture · AI Infrastructure ·
              Cybersecurity
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-[#94a3b8]">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>{profile.email}</span>
            </a>
            <span>8 Years at Oracle • 5+ Zero-to-One PMM Builds</span>
            <span className="text-[#10b981]">
              Open to Senior PMM / Lead / Director Roles
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2.5">
            EXECUTIVE SUMMARY
          </div>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#cbd5e1] leading-[1.7]">
            {resumeData.summary}
          </p>
        </div>

        {/* Quantified Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#141822] border border-[#1f2536] rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
              <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#60a5fa] mb-0.5">
                {m.label}
              </div>
              <div className="text-[11px] text-[#8e98ab]">{m.subtext}</div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-3.5">
            CORE PRODUCT MARKETING COMPETENCIES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {resumeData.coreCompetencies.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-2 rounded bg-[#141822] border border-[#1f2536] text-[12px] text-[#cbd5e1]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-5">
            CAREER EXPERIENCE &amp; LEADERSHIP MANDATES
          </div>

          <div className="space-y-6">
            {resumeData.experience.map((exp) => (
              <div
                key={exp.company + exp.role}
                className="bg-[#141822] border border-[#1f2536] rounded-xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#1e2436]">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-[#60a5fa] mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-xs font-mono text-[#cbd5e1]">{exp.period}</div>
                    <div className="text-[11px] font-mono text-[#64748b] mt-0.5">
                      {exp.stage}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[13px] text-[#94a3b8] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b] mb-1">
            DEEP-DIVE WORK SAMPLES
          </div>
          <div className="text-lg font-bold text-white">
            Explore full GTM case studies or schedule an executive conversation
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectCaseStudy('oracle')}
            className="px-4 py-2.5 rounded bg-[#151922] hover:bg-[#1c212d] border border-[#252b3b] text-[#cbd5e1] text-[11px] font-semibold tracking-[0.1em] uppercase cursor-pointer"
          >
            VIEW CASE STUDIES
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[11px] font-semibold tracking-[0.1em] uppercase cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};
