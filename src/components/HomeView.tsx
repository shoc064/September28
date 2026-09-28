import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Download,
  Database,
  Cpu,
  Shield,
  Share2,
  Sliders,
  TrendingUp,
  BarChart2,
  Users,
  Sparkles,
  Lock,
  Search,
  Compass,
  Rocket,
  LineChart,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroPortraitCard } from './HeadshotPortrait';

interface HomeViewProps {
  onSelectCaseStudy: (slug: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectCaseStudy,
  onOpenResume,
  onOpenContact,
}) => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredCaseStudies = PORTFOLIO_DATA.caseStudies.filter(
    (c) => c.featuredOnHome
  );

  return (
    <div id="top" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO SECTION */}
      <section className="pt-10 sm:pt-16 pb-14 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#155EEF]/15 border border-[#155EEF]/30 text-[#60A5FA] text-[10px] font-mono uppercase tracking-[0.14em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            {PORTFOLIO_DATA.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.07] mb-6">
            {PORTFOLIO_DATA.headlinePrefix}
            <span className="italic font-normal text-[#78A9FF]">
              {PORTFOLIO_DATA.headlineHighlight}
            </span>
            {PORTFOLIO_DATA.headlineSuffix}
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-7">
            {PORTFOLIO_DATA.subheadline}
          </p>

          {/* 3 Specialization Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151E] border border-white/10 text-[11px] font-mono text-slate-300">
              <Database className="w-3.5 h-3.5 text-[#3B82F6]" />
              Data Architecture
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151E] border border-white/10 text-[11px] font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
              AI Infrastructure
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#12151E] border border-white/10 text-[11px] font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />
              Cybersecurity
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-white text-[11px] font-mono uppercase tracking-[0.1em] font-medium transition-colors cursor-pointer"
            >
              VIEW SELECTED WORK
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#151821] hover:bg-[#1C202B] border border-white/15 text-slate-200 text-[11px] font-mono uppercase tracking-[0.1em] font-medium transition-colors cursor-pointer"
            >
              DOWNLOAD RESUME
              <Download className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Right Column — Hero Portrait Card */}
        <div className="lg:col-span-5">
          <HeroPortraitCard />
        </div>
      </section>

      {/* 2. 4-COLUMN METRICS BAR */}
      <section className="mb-20">
        <div className="bg-[#11141C] border border-white/[0.08] rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="p-6 sm:p-7">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums mb-2">
                {metric.value}
              </div>
              <div className="text-[9.5px] font-mono uppercase tracking-[0.14em] text-slate-400 mb-0.5">
                {metric.label}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENTERPRISE CASE STUDIES */}
      <section id="work" className="mb-20 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-1.5">
              ENTERPRISE CASE STUDIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Quantified GTM Execution
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            Proven strategic frameworks deployed across enterprise core tech, infrastructure security, and zero-to-one startups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredCaseStudies.map((study) => {
            const renderCardIcon = () => {
              switch (study.iconName) {
                case 'database':
                  return <Database className="w-4 h-4 text-slate-300" />;
                case 'network':
                  return <Share2 className="w-4 h-4 text-slate-300" />;
                case 'shield':
                  return <Shield className="w-4 h-4 text-slate-300" />;
                case 'cpu':
                  return <BarChart2 className="w-4 h-4 text-slate-300" />;
                default:
                  return <Database className="w-4 h-4 text-slate-300" />;
              }
            };

            return (
              <article
                key={study.slug}
                onClick={() => onSelectCaseStudy(study.slug)}
                className="bg-[#11141C] hover:bg-[#141822] border border-white/[0.08] hover:border-white/20 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors cursor-pointer group"
              >
                <div>
                  {/* Top Row: Company Kicker + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#3B82F6] font-semibold">
                      {study.company}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10.5px] font-mono text-slate-300 whitespace-nowrap">
                      {study.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4 group-hover:text-[#78A9FF] transition-colors">
                    {study.title}
                  </h3>

                  {/* Challenge & Contribution */}
                  <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    <p>
                      <strong className="text-white font-semibold">Challenge: </strong>
                      {study.challenge}
                    </p>
                    <p>
                      <strong className="text-white font-semibold">Contribution: </strong>
                      {study.contribution}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Bar inside Card */}
                <div className="border-t border-white/[0.08] pt-4 mt-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                      {renderCardIcon()}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">
                        {study.metricTitle}
                      </div>
                      <div className="text-[10.5px] font-mono text-slate-400 truncate mt-0.5">
                        {study.metricSubtitle}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white font-semibold group-hover:text-[#60A5FA] transition-colors whitespace-nowrap shrink-0">
                    VIEW CASE STUDY
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. ACTIVE LEADERSHIP — MARKETING LEAD | APPVENTORY */}
      <section className="mb-20">
        <div className="bg-[#101522] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#155EEF]/20 border border-[#155EEF]/40 text-[#60A5FA] text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {PORTFOLIO_DATA.activeLeadership.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {PORTFOLIO_DATA.activeLeadership.period}
                </span>
              </div>
              <h2
                onClick={() => onSelectCaseStudy('appventory')}
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 hover:text-[#78A9FF] transition-colors cursor-pointer"
              >
                {PORTFOLIO_DATA.activeLeadership.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                {PORTFOLIO_DATA.activeLeadership.description}
              </p>
            </div>

            <div className="self-start lg:self-center shrink-0">
              <span className="inline-block px-3.5 py-2 rounded bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
                {PORTFOLIO_DATA.activeLeadership.stage}
              </span>
            </div>
          </div>

          {/* 2x2 Inner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.activeLeadership.pillars.map((pillar, idx) => {
              const renderPillarIcon = () => {
                switch (pillar.icon) {
                  case 'sliders':
                    return <Sliders className="w-4 h-4 text-[#60A5FA]" />;
                  case 'trending':
                    return <TrendingUp className="w-4 h-4 text-[#60A5FA]" />;
                  case 'chart':
                    return <BarChart2 className="w-4 h-4 text-[#60A5FA]" />;
                  case 'users':
                    return <Users className="w-4 h-4 text-[#60A5FA]" />;
                  default:
                    return <Sliders className="w-4 h-4 text-[#60A5FA]" />;
                }
              };

              return (
                <div
                  key={idx}
                  onClick={() => onSelectCaseStudy('appventory')}
                  className="bg-[#151B2B] hover:bg-[#192033] border border-white/[0.06] rounded-lg p-5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {renderPillarIcon()}
                    <h3 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ADVISORY & CONSULTING — INDEPENDENT PRODUCT MARKETING PRACTICE */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-1.5">
              {PORTFOLIO_DATA.advisoryPractice.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.advisoryPractice.title}
            </h2>
            <div className="text-xs font-mono text-slate-400 mt-1">
              {PORTFOLIO_DATA.advisoryPractice.period}
            </div>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            {PORTFOLIO_DATA.advisoryPractice.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.advisoryPractice.projects.map((proj, idx) => {
            const renderAdvIcon = () => {
              switch (proj.iconName) {
                case 'cpu':
                  return <Cpu className="w-3.5 h-3.5 text-slate-400" />;
                case 'shield':
                  return <Shield className="w-3.5 h-3.5 text-slate-400" />;
                case 'sparkles':
                  return <Sparkles className="w-3.5 h-3.5 text-slate-400" />;
                case 'network':
                  return <Share2 className="w-3.5 h-3.5 text-slate-400" />;
                case 'lock':
                  return <Lock className="w-3.5 h-3.5 text-slate-400" />;
              }
            };

            return (
              <div
                key={idx}
                onClick={() => onSelectCaseStudy(proj.caseStudySlug)}
                className="bg-[#11141C] hover:bg-[#151924] border border-white/[0.08] hover:border-white/20 rounded-xl p-6 flex flex-col justify-between transition-colors cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#3B82F6] font-semibold">
                      {proj.company}
                    </span>
                    {renderAdvIcon()}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#78A9FF] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-3.5 mt-6 flex items-center justify-between gap-2 text-[10.5px] font-mono">
                  <span className="text-slate-400">Focus: {proj.focus}</span>
                  <span className="text-white font-medium">{proj.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. EXECUTION METHODOLOGY — HOW I WORK */}
      <section className="mb-20">
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-1.5">
            {PORTFOLIO_DATA.methodology.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {PORTFOLIO_DATA.methodology.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.methodology.phases.map((item, idx) => {
            const renderPhaseIcon = () => {
              switch (item.iconName) {
                case 'search':
                  return <Search className="w-4 h-4 text-slate-300" />;
                case 'compass':
                  return <Compass className="w-4 h-4 text-slate-300" />;
                case 'rocket':
                  return <Rocket className="w-4 h-4 text-slate-300" />;
                case 'chart':
                  return <LineChart className="w-4 h-4 text-slate-300" />;
              }
            };

            return (
              <div
                key={idx}
                className="bg-[#11141C] border border-white/[0.08] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#155EEF]/15 border border-[#155EEF]/30 text-[#60A5FA] text-[10px] font-mono uppercase tracking-wider">
                      {item.phase}
                    </span>
                    {renderPhaseIcon()}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-3.5 mt-6 text-[10.5px] font-mono text-slate-400">
                  {item.output}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. EXECUTIVE PROFILE (ABOUT SECTION) */}
      <section id="about" className="mb-12 scroll-mt-24">
        <div className="bg-[#11141C] border border-white/[0.08] rounded-xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 4 Cols */}
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-2">
              {PORTFOLIO_DATA.executiveProfile.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-6">
              {PORTFOLIO_DATA.executiveProfile.title}
            </h2>

            <div className="space-y-3">
              {PORTFOLIO_DATA.executiveProfile.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs font-mono text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 8 Cols */}
          <div className="lg:col-span-8 lg:border-l lg:border-white/[0.08] lg:pl-10 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I specialize in product marketing for complex technology—specifically{' '}
              <strong className="text-white font-semibold">
                Data, AI Infrastructure,
              </strong>{' '}
              and{' '}
              <strong className="text-white font-semibold">Cybersecurity.</strong>{' '}
              With 12+ years of experience, including 8 years at Oracle and 5+ zero-to-one PMM setups, I bring structure to ambiguous products and align cross-functional teams around clear GTM execution.
            </p>
            <p className="text-slate-400">
              {PORTFOLIO_DATA.executiveProfile.paragraphs[1]}
            </p>
          </div>
        </div>
      </section>

      {/* 8. NEXT OPPORTUNITY — LET'S CONNECT */}
      <section id="contact" className="scroll-mt-24">
        <div className="bg-[#11141C] border border-white/[0.08] rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-md">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 mb-1.5">
              NEXT OPPORTUNITY
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-white text-[11px] font-mono uppercase tracking-wider font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              GET IN TOUCH
            </button>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#151821] hover:bg-[#1C202B] border border-white/15 text-slate-200 text-[11px] font-mono uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              LINKEDIN PROFILE
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#151821] hover:bg-[#1C202B] border border-white/15 text-slate-200 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
            >
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
