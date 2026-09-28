import React, { useState, useEffect } from 'react';
import {
  Database,
  Cpu,
  Shield,
  ArrowDown,
  Download,
  ArrowRight,
  Server,
  Share2,
  ShieldCheck,
  BarChart3,
  GitBranch,
  TrendingUp,
  LayoutGrid,
  Users,
  Terminal,
  Network,
  Lock,
  Search,
  Compass,
  Rocket,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { PORTFOLIO_DATA, AdvisoryProject } from './data/portfolioData';
import { Navbar, ActiveView } from './components/Navbar';
import { CaseStudyPage } from './components/CaseStudyPage';
import { ResumePage } from './components/ResumePage';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ type: 'home' });
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedAdvisory, setSelectedAdvisory] = useState<AdvisoryProject | null>(
    null
  );

  // Scroll to top when switching between pages (Home <-> Case Study <-> Resume)
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
    const { profile, metrics, resumeData } = PORTFOLIO_DATA;
    const lines = [
      `${profile.name.toUpperCase()}`,
      `${profile.roleKicker}`,
      `Email: ${profile.email} | LinkedIn: ${profile.linkedinUrl}`,
      `================================================================================`,
      ``,
      `EXECUTIVE SUMMARY`,
      `${resumeData.summary}`,
      ``,
      `KEY METRICS`,
      ...metrics.map((m) => `• ${m.value} ${m.label}: ${m.subtext}`),
      ``,
      `CORE COMPETENCIES`,
      resumeData.coreCompetencies.join(' • '),
      ``,
      `PROFESSIONAL EXPERIENCE`,
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

  const renderCaseStudyMetricIcon = (
    icon: 'database' | 'network' | 'shield' | 'chart' | 'layers'
  ) => {
    switch (icon) {
      case 'database':
        return <Server className="w-4 h-4 text-[#94a3b8]" />;
      case 'network':
        return <Share2 className="w-4 h-4 text-[#94a3b8]" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#94a3b8]" />;
      case 'chart':
      case 'layers':
        return <BarChart3 className="w-4 h-4 text-[#94a3b8]" />;
    }
  };

  const renderAppventoryPillarIcon = (
    icon: 'reposition' | 'seo' | 'reporting' | 'team'
  ) => {
    switch (icon) {
      case 'reposition':
        return <GitBranch className="w-4 h-4 text-[#60a5fa]" />;
      case 'seo':
        return <TrendingUp className="w-4 h-4 text-[#60a5fa]" />;
      case 'reporting':
        return <LayoutGrid className="w-4 h-4 text-[#60a5fa]" />;
      case 'team':
        return <Users className="w-4 h-4 text-[#60a5fa]" />;
    }
  };

  const renderAdvisoryIcon = (
    icon: 'terminal' | 'shield' | 'cpu' | 'network' | 'lock'
  ) => {
    switch (icon) {
      case 'terminal':
        return <Terminal className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'shield':
        return <Shield className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'cpu':
        return <Cpu className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'network':
        return <Network className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'lock':
        return <Lock className="w-3.5 h-3.5 text-[#64748b]" />;
    }
  };

  const renderMethodologyIcon = (
    icon: 'search' | 'compass' | 'rocket' | 'chart'
  ) => {
    switch (icon) {
      case 'search':
        return <Search className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'compass':
        return <Compass className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'rocket':
        return <Rocket className="w-3.5 h-3.5 text-[#64748b]" />;
      case 'chart':
        return <TrendingUp className="w-3.5 h-3.5 text-[#64748b]" />;
    }
  };

  // Only show the 4 main Enterprise Case Studies on the homepage 2x2 grid, matching Stitch design
  const homepageCaseStudies = PORTFOLIO_DATA.caseStudies.filter((cs) =>
    ['oracle', 'nanoheal', 'appsian', 'core42'].includes(cs.id)
  );

  const activeCaseStudy =
    activeView.type === 'case-study'
      ? PORTFOLIO_DATA.caseStudies.find((cs) => cs.id === activeView.id) ||
        PORTFOLIO_DATA.caseStudies[0]
      : null;

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] flex flex-col">
      {/* Top Stitch Navigation */}
      <Navbar
        activeView={activeView}
        onNavigateHome={handleNavigateHome}
        onOpenResume={handleOpenResume}
        onDownloadResume={handleDownloadResume}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content View Switcher */}
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
          /* STITCH HOMEPAGE                                                  */
          /* ================================================================ */
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* -------------------------------------------------------------- */}
            {/* 1. HERO SECTION                                                */}
            {/* -------------------------------------------------------------- */}
            <section className="pt-12 sm:pt-16 pb-14 lg:pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Column */}
                <div className="lg:col-span-7">
                  {/* Top Pill Kicker */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#10192e] border border-[#1d3361] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span className="text-[9.5px] font-mono font-semibold tracking-[0.14em] text-[#60a5fa] uppercase">
                      {PORTFOLIO_DATA.profile.roleKicker}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.03em] leading-[1.06] text-white mb-6">
                    {PORTFOLIO_DATA.profile.headlinePrefix}
                    <span className="italic text-[#6b9eff] font-semibold">
                      {PORTFOLIO_DATA.profile.headlineHighlight}
                    </span>
                    {PORTFOLIO_DATA.profile.headlineSuffix}
                  </h1>

                  {/* Subheadline */}
                  <p className="text-[14.5px] sm:text-[15.5px] text-[#8e98ab] leading-[1.65] max-w-[540px] mb-6">
                    {PORTFOLIO_DATA.profile.subheadline}
                  </p>

                  {/* 3 Domain Chips */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151e] border border-[#1f2534] text-[11px] font-medium text-[#cbd5e1]">
                      <Database className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>Data Architecture</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151e] border border-[#1f2534] text-[11px] font-medium text-[#cbd5e1]">
                      <Cpu className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>AI Infrastructure</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151e] border border-[#1f2534] text-[11px] font-medium text-[#cbd5e1]">
                      <Shield className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>Cybersecurity</span>
                    </div>
                  </div>

                  {/* Hero CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => handleNavigateHome('work')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
                    >
                      <span>VIEW SELECTED WORK</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadResume}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#141821] hover:bg-[#1b202c] border border-[#242a38] hover:border-[#353e52] text-[#cbd5e1] hover:text-white text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
                    >
                      <span>DOWNLOAD RESUME</span>
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Framed Portrait Container */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[390px] rounded-xl bg-[#11141c] border border-[#1e2330] p-3.5 shadow-2xl">
                    <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#16181f]">
                      <img 
                        src="https://raw.githubusercontent.com/shoc064/September28/main/Tanmay_website_Sept26_profilephoto.jpg" 
                        alt="Tanmay Choudhury" 
                        className="w-full h-full object-cover object-top rounded-xl border border-white/10 shadow-lg" 
                        loading="eager"
                      />
                      {/* Floating Status Card Inside Container */}
                      <div className="absolute bottom-3 left-3 right-3 bg-[#151922]/95 backdrop-blur-md border border-[#262c3d] rounded-lg px-4 py-3 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                        <div>
                          <div className="text-[11.5px] font-semibold text-white leading-tight">
                            {PORTFOLIO_DATA.profile.currentRoleBadge.title}
                          </div>
                          <div className="text-[10.5px] text-[#8e98ab] mt-0.5 leading-tight">
                            {PORTFOLIO_DATA.profile.currentRoleBadge.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 2. QUANTIFIED METRICS BAR (4 COLUMNS)                          */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PORTFOLIO_DATA.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-[#12151e] border border-[#1d2230] rounded-lg p-6"
                  >
                    <div className="text-3xl sm:text-[34px] font-bold text-white tracking-tight mb-2">
                      {metric.value}
                    </div>
                    <div className="text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-[#64748b] mb-1">
                      {metric.label}
                    </div>
                    <div className="text-[11.5px] text-[#8e98ab]">
                      {metric.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 3. ENTERPRISE CASE STUDIES (2x2 GRID)                          */}
            {/* -------------------------------------------------------------- */}
            <section id="work" className="pb-24 scroll-mt-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
                    {PORTFOLIO_DATA.caseStudiesSection.kicker}
                  </div>
                  <h2 className="text-2xl sm:text-[32px] font-bold text-white tracking-tight">
                    {PORTFOLIO_DATA.caseStudiesSection.title}
                  </h2>
                </div>
                <p className="text-[12px] text-[#8e98ab] max-w-[360px] leading-relaxed">
                  {PORTFOLIO_DATA.caseStudiesSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {homepageCaseStudies.map((study) => (
                  <article
                    key={study.id}
                    onClick={() => handleSelectCaseStudy(study.id)}
                    className="bg-[#12151e] border border-[#1e2433] hover:border-[#2e384f] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer group"
                  >
                    <div>
                      {/* Card Top Row */}
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#60a5fa] uppercase">
                          {study.company}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#171b26] border border-[#23293a] text-[9.5px] font-mono text-[#94a3b8]">
                          {study.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-white leading-[1.3] mb-4 group-hover:text-[#6b9eff] transition-colors">
                        {study.title}
                      </h3>

                      {/* Challenge & Contribution */}
                      <div className="space-y-3.5 mb-6 text-[12.5px] leading-[1.6] text-[#8e98ab]">
                        <p>
                          <strong className="text-white font-semibold">
                            Challenge:
                          </strong>{' '}
                          {study.challenge}
                        </p>
                        <p>
                          <strong className="text-white font-semibold">
                            Contribution:
                          </strong>{' '}
                          {study.contribution}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom Metric Bar */}
                    <div className="bg-[#161a25] border border-[#202637] rounded-lg px-4 py-3 flex items-center justify-between gap-3 mt-auto">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded bg-[#11141d] border border-[#22283a] flex items-center justify-center shrink-0">
                          {renderCaseStudyMetricIcon(study.metricIcon)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11.5px] font-bold text-white truncate">
                            {study.metricTitle}
                          </div>
                          <div className="text-[10.5px] text-[#64748b] truncate">
                            {study.metricSub}
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold tracking-[0.1em] text-[#cbd5e1] group-hover:text-white uppercase shrink-0">
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 4. ACTIVE LEADERSHIP (MARKETING LEAD | APPVENTORY)             */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-24">
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#122247] border border-[#1e3a7a] text-[9px] font-mono font-bold tracking-[0.12em] text-[#60a5fa] uppercase">
                        {PORTFOLIO_DATA.activeLeadership.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#64748b]">
                        {PORTFOLIO_DATA.activeLeadership.period}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-[30px] font-bold text-white tracking-tight mb-2.5">
                      {PORTFOLIO_DATA.activeLeadership.title}
                    </h2>
                    <p className="text-[13px] text-[#8e98ab] max-w-[580px] leading-relaxed">
                      {PORTFOLIO_DATA.activeLeadership.subtitle}
                    </p>
                  </div>

                  <div className="self-start px-3.5 py-2 rounded bg-[#141822] border border-[#22283a] text-[10.5px] font-mono text-[#94a3b8] shrink-0">
                    {PORTFOLIO_DATA.activeLeadership.stage}
                  </div>
                </div>

                {/* 2x2 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.activeLeadership.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="bg-[#141822] border border-[#1f2536] rounded-lg p-5 flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded bg-[#101624] border border-[#1e2942] flex items-center justify-center shrink-0 mt-0.5">
                        {renderAppventoryPillarIcon(pillar.icon)}
                      </div>
                      <div>
                        <h3 className="text-[14px] font-bold text-white mb-1.5">
                          {pillar.title}
                        </h3>
                        <p className="text-[12px] text-[#8e98ab] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 5. ADVISORY & CONSULTING PRACTICE                              */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
                    {PORTFOLIO_DATA.advisorySection.kicker}
                  </div>
                  <h2 className="text-2xl sm:text-[30px] font-bold text-white tracking-tight">
                    {PORTFOLIO_DATA.advisorySection.title}
                  </h2>
                  <div className="text-[11px] font-mono text-[#64748b] mt-1">
                    {PORTFOLIO_DATA.advisorySection.period}
                  </div>
                </div>
                <p className="text-[12px] text-[#8e98ab] max-w-[380px] leading-relaxed">
                  {PORTFOLIO_DATA.advisorySection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.advisorySection.projects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      if (proj.linkedCaseStudyId) {
                        handleSelectCaseStudy(proj.linkedCaseStudyId);
                      } else {
                        setSelectedAdvisory(proj);
                      }
                    }}
                    className="bg-[#12151e] border border-[#1e2433] hover:border-[#2e384f] rounded-lg p-6 flex flex-col justify-between transition-colors cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#60a5fa] uppercase">
                          {proj.company}
                        </span>
                        {renderAdvisoryIcon(proj.icon)}
                      </div>
                      <h3 className="text-[15.5px] font-bold text-white mb-2 group-hover:text-[#6b9eff] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-[12px] text-[#8e98ab] leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1b202e] flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#64748b]">{proj.focus}</span>
                      <span className="text-[#94a3b8] font-medium">
                        {proj.deliverable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 6. EXECUTION METHODOLOGY (HOW I WORK)                          */}
            {/* -------------------------------------------------------------- */}
            <section className="pb-24">
              <div className="mb-8">
                <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
                  {PORTFOLIO_DATA.methodologySection.kicker}
                </div>
                <h2 className="text-2xl sm:text-[30px] font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.methodologySection.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PORTFOLIO_DATA.methodologySection.phases.map((item) => (
                  <div
                    key={item.phase}
                    className="bg-[#12151e] border border-[#1e2433] rounded-lg p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="px-2 py-0.5 rounded bg-[#141d30] border border-[#202f4d] text-[9px] font-mono font-semibold tracking-[0.12em] text-[#60a5fa] uppercase">
                          {item.phase}
                        </span>
                        {renderMethodologyIcon(item.icon)}
                      </div>
                      <h3 className="text-[14.5px] font-bold text-white uppercase tracking-[0.04em] mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-[#8e98ab] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[#1b202e] text-[10.5px] font-mono text-[#94a3b8]">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 7. EXECUTIVE PROFILE (ABOUT SECTION)                           */}
            {/* -------------------------------------------------------------- */}
            <section id="about" className="pb-16 scroll-mt-20">
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4">
                    <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2.5">
                      {PORTFOLIO_DATA.executiveProfile.kicker}
                    </div>
                    <h2 className="text-2xl sm:text-[28px] font-bold text-white leading-[1.2] tracking-tight mb-6">
                      {PORTFOLIO_DATA.executiveProfile.title}
                    </h2>

                    <div className="space-y-3">
                      {PORTFOLIO_DATA.executiveProfile.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-[12px] text-[#94a3b8]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 space-y-5 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#94a3b8]">
                    <p>
                      I specialize in product marketing for complex
                      technology—specifically{' '}
                      <strong className="text-white font-semibold">
                        Data, AI Infrastructure,
                      </strong>{' '}
                      and{' '}
                      <strong className="text-white font-semibold">
                        Cybersecurity
                      </strong>
                      . With 12+ years of experience, including 8 years at Oracle and
                      5+ zero-to-one PMM setups, I bring structure to ambiguous
                      products and align cross-functional teams around clear GTM
                      execution.
                    </p>
                    <p>
                      I operate comfortably across both enterprise scale and
                      high-growth startup speed—bridging engineering, product
                      management, sales leaders, and executive suites to turn deep
                      technical innovations into defensible pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/* 8. NEXT OPPORTUNITY (LET'S CONNECT CARD)                       */}
            {/* -------------------------------------------------------------- */}
            <section id="contact" className="pb-20 scroll-mt-20">
              <div className="bg-[#10131b] border border-[#1d2230] rounded-xl p-6 sm:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2">
                    NEXT OPPORTUNITY
                  </div>
                  <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight mb-2">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-[13px] text-[#8e98ab] max-w-[460px] leading-relaxed">
                    Open to{' '}
                    <strong className="text-white font-semibold">
                      Product Marketing Lead
                    </strong>{' '}
                    and{' '}
                    <strong className="text-white font-semibold">
                      Director of Product Marketing
                    </strong>{' '}
                    roles across high-growth enterprise tech and scale-ups.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[10.5px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>GET IN TOUCH</span>
                  </button>

                  <a
                    href={PORTFOLIO_DATA.profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded bg-[#141821] hover:bg-[#1b202c] border border-[#242a38] hover:border-[#353e52] text-[#cbd5e1] hover:text-white text-[10.5px] font-semibold tracking-[0.1em] uppercase transition-colors"
                  >
                    LINKEDIN PROFILE
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="px-5 py-3 rounded bg-[#141821] hover:bg-[#1b202c] border border-[#242a38] hover:border-[#353e52] text-[#cbd5e1] hover:text-white text-[10.5px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
                  >
                    DOWNLOAD RESUME
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* ==================================================================== */}
      {/* 9. STITCH FOOTER                                                     */}
      {/* ==================================================================== */}
      <footer className="border-t border-[#171b24] bg-[#0a0c10]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
            {/* Left Footer Block */}
            <div>
              <div className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-2.5">
                LET&apos;S CONNECT
              </div>
              <h2 className="text-2xl sm:text-[32px] font-bold text-white leading-[1.2] tracking-tight max-w-[460px] mb-3">
                Ready to architect high-velocity GTM systems?
              </h2>
              <p className="text-[12.5px] text-[#8e98ab] max-w-[420px] leading-relaxed">
                Bridging technical product depth with rigorous product marketing
                leadership and quantifiable enterprise revenue growth.
              </p>
            </div>

            {/* Right Footer Actions & Nav */}
            <div className="flex flex-col items-start lg:items-end justify-between self-stretch gap-8">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#131720] hover:bg-[#1a202c] border border-[#242a38] text-[#cbd5e1] hover:text-white text-[10px] font-mono font-semibold tracking-[0.08em] uppercase transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>{PORTFOLIO_DATA.profile.email.toUpperCase()}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="px-5 py-2.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-white text-[10px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
                >
                  SCHEDULE STRATEGIC BRIEFING
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-[11.5px] text-[#8e98ab]">
                <button
                  type="button"
                  onClick={() => handleNavigateHome('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
                <button
                  type="button"
                  onClick={handleOpenResume}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resume
                </button>
                <a
                  href={PORTFOLIO_DATA.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Email
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-8 border-t border-[#141821] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
            <div>© 2026 Tanmay Choudhury. All rights reserved.</div>
            <div className="font-mono uppercase tracking-[0.14em] text-[9.5px] flex items-center gap-3">
              <span>PMM LEADERSHIP</span>
              <span>•</span>
              <span>ENTERPRISE GTM</span>
              <span>•</span>
              <span>PRODUCT STRATEGY</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Advisory Project Quick-View Modal (for Zenarmor, WaferWire, LightBeam) */}
      {selectedAdvisory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedAdvisory(null)}
        >
          <div
            className="w-full max-w-lg bg-[#10131b] border border-[#242a3b] rounded-xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#60a5fa] uppercase mb-1">
              {selectedAdvisory.company} — ADVISORY MANDATE
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {selectedAdvisory.title}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
              {selectedAdvisory.description}
            </p>
            <div className="bg-[#141822] border border-[#1f2536] rounded-lg p-4 mb-6 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8e98ab]">{selectedAdvisory.focus}</span>
              <span className="text-[#60a5fa] font-semibold">
                Deliverable: {selectedAdvisory.deliverable}
              </span>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedAdvisory(null)}
                className="px-4 py-2 rounded bg-[#161a26] border border-[#252c3e] text-[11px] font-semibold uppercase tracking-wider text-[#cbd5e1] cursor-pointer"
              >
                CLOSE
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedAdvisory(null);
                  setContactModalOpen(true);
                }}
                className="px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[11px] font-semibold uppercase tracking-wider text-white cursor-pointer"
              >
                REQUEST PLAYBOOK WALKTHROUGH
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact & Strategic Briefing Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
