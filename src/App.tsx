import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  ArrowRight,
  Mail,
  Linkedin,
} from 'lucide-react';
import { PORTFOLIO_DATA, FlagshipTile } from './data/portfolioData';
import { Navbar, ActiveView } from './components/Navbar';
import { CaseStudyPage } from './components/CaseStudyPage';
import { ResumePage } from './components/ResumePage';
import { ContactModal } from './components/ContactModal';
import { ArtifactRenderer } from './components/ArtifactVisuals';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ type: 'home' });
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (activeView.type === 'case-study' || activeView.type === 'resume') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeView]);

  const handleNavigateHome = (sectionId?: string) => {
    setActiveView({ type: 'home', section: sectionId });
    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 40);
  };

  const handleSelectCaseStudy = (id: string) => {
    setActiveView({ type: 'case-study', id });
  };

  const handleOpenResume = () => {
    setActiveView({ type: 'resume' });
  };

  const handleDownloadResume = () => {
    const { profile, proofStrip, resumeData } = PORTFOLIO_DATA;
    const lines = [
      `${profile.name.toUpperCase()}`,
      `Product marketing leader`,
      `Email: ${profile.email} | LinkedIn: ${profile.linkedinUrl}`,
      `================================================================================`,
      ``,
      `EXECUTIVE SUMMARY`,
      `${resumeData.summary}`,
      ``,
      `PROOF POINTS`,
      ...proofStrip.map((m) => `• ${m.value} — ${m.caption}`),
      ``,
      `CORE COMPETENCIES`,
      resumeData.competencies.join(' • '),
      ``,
      `EXPERIENCE`,
      `--------------------------------------------------------------------------------`,
      ...resumeData.experience.flatMap((exp) => [
        `${exp.role} | ${exp.company} (${exp.period}) — ${exp.stage}`,
        ...exp.bullets.map((b) => `  - ${b}`),
        ``,
      ]),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tanmay_Choudhury_Product_Marketing_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderCompanyWordmark = (companyId: string) => {
    switch (companyId) {
      case 'oracle':
        return (
          <div className="h-6 flex items-center text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity">
            <span className="font-sans font-bold tracking-[0.22em] text-[18px] uppercase">
              ORACLE
            </span>
          </div>
        );
      case 'nanoheal':
        return (
          <div className="h-6 flex items-center gap-1.5 text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="w-3.5 h-3.5 border-2 border-current rotate-45 shrink-0" />
            <span className="font-semibold text-[18px] tracking-tight">nanoheal</span>
          </div>
        );
      case 'appsian':
        return (
          <div className="h-6 flex items-center gap-1.5 text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current" strokeWidth="3">
              <path d="M4 26L16 6L28 26" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 26L16 15L22 26" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold text-[17px] tracking-[0.2em] uppercase">
              APPSIAN
            </span>
          </div>
        );
      case 'core42':
        return (
          <div className="h-6 flex items-center text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity font-bold text-[18px] tracking-tight">
            <span>core</span>
            <span className="font-light text-[17px] ml-0.5">42</span>
          </div>
        );
      default:
        return null;
    }
  };

  const activeCaseStudy =
    activeView.type === 'case-study'
      ? PORTFOLIO_DATA.caseStudies.find((cs) => cs.id === activeView.id) ||
        PORTFOLIO_DATA.caseStudies[0]
      : null;

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] flex flex-col font-sans selection:bg-[#3b82f6] selection:text-white">
      {/* 1. Nav */}
      <Navbar
        activeView={activeView}
        onNavigateHome={handleNavigateHome}
        onOpenResume={handleOpenResume}
        onDownloadResume={handleDownloadResume}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {activeView.type === 'case-study' && activeCaseStudy ? (
          <CaseStudyPage
            caseStudy={activeCaseStudy}
            onBackHome={() => handleNavigateHome('work')}
            onSelectCaseStudy={handleSelectCaseStudy}
            onOpenContact={() => setContactModalOpen(true)}
          />
        ) : activeView.type === 'resume' ? (
          <ResumePage
            onBackHome={() => handleNavigateHome()}
            onDownloadResume={handleDownloadResume}
            onOpenContact={() => setContactModalOpen(true)}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        ) : (
          /* ================================================================ */
          /* HOMEPAGE                                                         */
          /* ================================================================ */
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* -------------------------------------------------------------- */}
            {/* 2. HERO SECTION                                                */}
            {/* -------------------------------------------------------------- */}
            <section className="pt-16 sm:pt-20 pb-16 lg:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Column */}
                <div className="lg:col-span-7">
                  <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.03em] leading-[1.06] text-white mb-6">
                    {PORTFOLIO_DATA.profile.headlinePrefix}
                    <span className="italic text-[#6b9eff] font-semibold">
                      {PORTFOLIO_DATA.profile.headlineHighlight}
                    </span>
                    {PORTFOLIO_DATA.profile.headlineSuffix}
                  </h1>

                  <p className="text-[17px] text-[#cbd5e1] leading-[1.65] max-w-[62ch] mb-4">
                    {PORTFOLIO_DATA.profile.hero.sub}
                  </p>

                  <div className="text-[15px] font-mono text-[#60a5fa] mb-8">
                    {PORTFOLIO_DATA.profile.hero.line}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleNavigateHome('work')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[14px] font-medium transition-colors cursor-pointer"
                    >
                      <span>{PORTFOLIO_DATA.profile.hero.buttons.primary}</span>
                      <ArrowDown className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadResume}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#141821] hover:bg-[#1b202c] border border-[#242a38] hover:border-[#353e52] text-[#cbd5e1] hover:text-white text-[14px] font-medium transition-colors cursor-pointer"
                    >
                      <span>{PORTFOLIO_DATA.profile.hero.buttons.secondary}</span>
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Clean colour photo, no badges or hover shifts */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[360px] aspect-[3/4] rounded-xl overflow-hidden bg-[#16181f] border border-[#23293a] shadow-xl">
                    <img
                      src={PORTFOLIO_DATA.profile.photoUrl}
                      alt="Tanmay Choudhury"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 3. PROOF STRIP (4 NUMBERS IN ONE ROW)                          */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PORTFOLIO_DATA.proofStrip.map((item) => (
                  <div
                    key={item.value}
                    className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6"
                  >
                    <div className="text-3xl sm:text-[34px] font-bold text-white tracking-tight mb-2">
                      {item.value}
                    </div>
                    <div className="text-[14px] text-[#cbd5e1] leading-snug">
                      {item.caption}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 4. WHY ME (3 COLUMNS + CLOSING LINE)                           */}
            {/* -------------------------------------------------------------- */}
            <section id="about" className="pb-20 scroll-mt-20">
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
                  Differentiator
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.whyMe.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {PORTFOLIO_DATA.whyMe.columns.map((col) => (
                  <div
                    key={col.title}
                    className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {col.title}
                    </h3>
                    <p className="text-[15px] text-[#cbd5e1] leading-[1.6]">
                      {col.body}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-white font-medium italic border-l-2 border-[#3b82f6] pl-4 py-1">
                &ldquo;{PORTFOLIO_DATA.whyMe.closing}&rdquo;
              </p>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 5. SELECTED WORK (4 FLAGSHIP TILES)                            */}
            {/* -------------------------------------------------------------- */}
            <section id="work" className="pb-24 scroll-mt-20">
              <div className="mb-8">
                <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
                  Portfolio
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Selected work
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {PORTFOLIO_DATA.flagshipTiles.map((tile: FlagshipTile) => {
                  const matchingArtifact =
                    PORTFOLIO_DATA.caseStudies
                      .find((cs) => cs.id === tile.id)
                      ?.artifacts.find(
                        (a) => a.id === tile.thumbnailSample.artifactId
                      ) || {
                      id: tile.thumbnailSample.artifactId,
                      title: tile.thumbnailSample.title,
                      caption: '',
                      type: tile.thumbnailSample.type,
                      isWaitingOnFile: tile.thumbnailSample.isWaitingOnFile,
                    };

                  return (
                    <article
                      key={tile.id}
                      onClick={() => handleSelectCaseStudy(tile.id)}
                      className="bg-[#10131b] border border-[#1d2230] hover:border-[#2e384f] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer group"
                    >
                      <div>
                        {/* Wordmark logo + Sector · years */}
                        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#181c26]">
                          {renderCompanyWordmark(tile.id)}
                          <div className="text-[12px] text-[#94a3b8]">
                            {tile.sector} · {tile.years}
                          </div>
                        </div>

                        {/* Role label & Headline */}
                        <div className="text-[11px] font-mono text-[#60a5fa] mb-1">
                          {tile.roleLabel}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-[#60a5fa] transition-colors">
                          {tile.headline}
                        </h3>

                        {/* Challenge */}
                        <p className="text-[15px] text-[#94a3b8] leading-[1.6] mb-4">
                          <strong className="text-white font-medium">Challenge:</strong>{' '}
                          {tile.challenge}
                        </p>

                        {/* What I did */}
                        <div className="mb-4">
                          <div className="text-[12px] font-mono text-[#64748b] mb-1.5 uppercase tracking-wider">
                            What I did
                          </div>
                          <ul className="space-y-1.5">
                            {tile.whatIDid.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-[14px] text-[#cbd5e1] leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact with short because phrase */}
                        <div className="mb-5 bg-[#141822] border border-[#1f2536] rounded-lg p-3.5 space-y-2">
                          <div className="text-[11px] font-mono text-[#60a5fa] uppercase tracking-wider">
                            Impact
                          </div>
                          {tile.impactMetrics.map((item, idx) => (
                            <div key={idx} className="text-[13px] text-[#cbd5e1] leading-snug">
                              <span className="font-semibold text-white">
                                {item.metric}
                              </span>{' '}
                              — {item.because}
                            </div>
                          ))}
                        </div>

                        {/* 1 Thumbnail Sample */}
                        <div className="mb-4">
                          <div className="text-[11px] font-mono text-[#64748b] mb-1.5">
                            Sample: {tile.thumbnailSample.title}
                          </div>
                          <div className="max-h-[180px] overflow-hidden rounded-lg border border-[#1e2434] bg-[#0c0e14] opacity-90 group-hover:opacity-100 transition-opacity">
                            <ArtifactRenderer artifact={matchingArtifact} />
                          </div>
                        </div>
                      </div>

                      {/* Read Case Study link */}
                      <div className="pt-3 border-t border-[#181c26] flex items-center justify-between text-[13px] font-medium text-[#60a5fa] group-hover:text-white transition-colors">
                        <span>Read case study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 6. MORE EXPERIENCE (COMPACT LIST + INDEPENDENT PRACTICE)       */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-24">
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-2">
                  Background
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  More experience
                </h2>
              </div>

              {/* Direct roles */}
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8 mb-6 divide-y divide-[#181c26]">
                {PORTFOLIO_DATA.moreExperience.map((item) => (
                  <div
                    key={item.company}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                  >
                    <div>
                      <div className="text-[16px] font-semibold text-white">
                        {item.company}{' '}
                        <span className="text-[#94a3b8] font-normal text-[15px]">
                          — {item.role}
                        </span>
                      </div>
                      <p className="text-[14px] text-[#cbd5e1] mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[13px] text-[#64748b] font-mono shrink-0">
                      {item.period}
                    </div>
                  </div>
                ))}
              </div>

              {/* Independent practice */}
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-3 border-b border-[#181c26]">
                  <h3 className="text-base font-semibold text-white">
                    Independent practice
                  </h3>
                  <div className="text-[13px] text-[#64748b] font-mono">
                    2023 – present
                  </div>
                </div>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.independentPractice.map((item) => (
                    <div
                      key={item.company}
                      className="text-[15px] text-[#cbd5e1] leading-relaxed"
                    >
                      <strong className="text-white font-medium">
                        {item.company}:
                      </strong>{' '}
                      {item.whatIDid} —{' '}
                      <span className="text-[#93c5fd]">{item.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 7. CONTACT                                                     */}
            {/* -------------------------------------------------------------- */}
            <section id="contact" className="pb-24 scroll-mt-20">
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-10">
                <div className="max-w-2xl mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {PORTFOLIO_DATA.contact.heading}
                  </h2>
                  <p className="text-[16px] text-[#94a3b8]">
                    {PORTFOLIO_DATA.contact.subtext}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[14px] font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{PORTFOLIO_DATA.contact.email}</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#141822] hover:bg-[#1b202c] border border-[#242a38] text-[#cbd5e1] hover:text-white text-[14px] font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#60a5fa]" />
                    <span>LinkedIn</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#141822] hover:bg-[#1b202c] border border-[#242a38] text-[#cbd5e1] hover:text-white text-[14px] font-medium transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download résumé</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-[#181c26] text-[13px] text-[#64748b]">
                  Open to full-time product marketing leadership roles.
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* -------------------------------------------------------------------- */}
      {/* FOOTER                                                               */}
      {/* -------------------------------------------------------------------- */}
      <footer className="border-t border-[#171b24] bg-[#0a0c10] py-10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#94a3b8] mb-4">
            <div>© 2026 Tanmay Choudhury. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => handleNavigateHome('work')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => handleNavigateHome('about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNavigateHome('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={handleOpenResume}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Résumé
              </button>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
