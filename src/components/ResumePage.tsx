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
  const { profile, proofStrip, resumeData } = PORTFOLIO_DATA;

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#181c26]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-[13px] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#60a5fa]" />
          <span>Back to selected work</span>
        </button>

        <button
          type="button"
          onClick={onDownloadResume}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[13px] font-medium text-white transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download résumé</span>
        </button>
      </div>

      {/* Executive Resume Container */}
      <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-10 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-8 border-b border-[#1c2230]">
          <div>
            <div className="text-[12px] font-mono text-[#60a5fa] mb-2">
              Product marketing leader
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              {profile.name}
            </h1>
            <p className="text-[15px] text-[#cbd5e1]">
              Data · AI infrastructure · Cybersecurity
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#94a3b8]">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn profile
            </a>
            <span className="text-[#10b981]">
              Available for Senior PMM, Lead, and Director roles
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Overview
          </div>
          <h2 className="text-xl font-bold text-white mb-3">Executive summary</h2>
          <p className="text-[16px] text-[#cbd5e1] leading-[1.65] max-w-[70ch]">
            {resumeData.summary}
          </p>
        </div>

        {/* Quantified Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {proofStrip.map((m) => (
            <div
              key={m.caption}
              className="bg-[#141822] border border-[#1f2536] rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
              <div className="text-[13px] text-[#cbd5e1] leading-snug">{m.caption}</div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Capabilities
          </div>
          <h2 className="text-xl font-bold text-white mb-4">Core competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {resumeData.competencies.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded bg-[#141822] border border-[#1f2536] text-[14px] text-[#cbd5e1]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
            Career
          </div>
          <h2 className="text-xl font-bold text-white mb-6">Experience</h2>

          <div className="space-y-6">
            {resumeData.experience.map((exp) => (
              <div
                key={exp.company + exp.role}
                className="bg-[#141822] border border-[#1f2536] rounded-xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-4 border-b border-[#1e2436]">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-[13px] text-[#60a5fa] font-medium">
                      {exp.company}
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[13px] text-[#cbd5e1]">{exp.period}</div>
                    <div className="text-[12px] text-[#94a3b8]">{exp.stage}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[15px] text-[#cbd5e1] leading-[1.6]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2.5 shrink-0" />
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
          <h3 className="text-lg font-bold text-white">
            Discuss full case studies and confidential playbooks
          </h3>
          <p className="text-[14px] text-[#94a3b8] mt-1">
            Available for product marketing leadership opportunities in enterprise tech.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectCaseStudy('oracle')}
            className="px-4 py-2.5 rounded bg-[#141822] hover:bg-[#1b202c] border border-[#242a38] text-[#cbd5e1] hover:text-white text-[13px] font-medium cursor-pointer"
          >
            View case studies
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[13px] font-medium cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};
