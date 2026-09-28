import React, { useEffect } from 'react';
import { ArrowLeft, Download, Printer, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewProps {
  onBackHome: () => void;
  onOpenContact: () => void;
  onSelectCaseStudy: (slug: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({
  onBackHome,
  onOpenContact,
  onSelectCaseStudy,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownloadResumeFile = () => {
    const resumeText = `TANMAY CHOUDHURY
Product Marketing Leadership for Complex Technology
Email: ${PORTFOLIO_DATA.contact.email}
LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}

EXECUTIVE SUMMARY
Product Marketing Leader with 12+ years of experience translating complex enterprise technology—specifically Data Architecture, AI Infrastructure, and Cybersecurity—into sharp positioning, high-velocity launches, and revenue-generating GTM execution. 8 years at Oracle Corporation + 5+ zero-to-one PMM builds.

CORE IMPACT METRICS
- 12+ Years Experience in Technical B2B Product Marketing
- 8+ Years at Scale (Enterprise Rigor at Oracle)
- $1.2M+ Qualified Outbound Pipeline Generated
- 2.3x Monthly Organic Web Growth

EXPERIENCE & LEADERSHIP

MARKETING LEAD | APPVENTORY (Jan 2026 – Present)
Stage: Seed to Series A GTM
- Rebuilt marketing GTM strategy from zero, realigning feature specifications with CFO-level SaaS compliance and vendor visibility narratives.
- Architected specialized accountant & auditor programmatic content hubs to capture non-branded bottom-of-funnel search intent.
- Established end-to-end pipeline attribution and board-level monthly reporting cadence across inbound and outbound channels.
- Recruited dedicated Demand Gen talent and executed strategic field programs, realizing +20% higher qualified event lead conversions.

INDEPENDENT PRODUCT MARKETING PRACTICE (2023 – Present)
Advisory & Consulting across Cybersecurity, AI/ML Platforms, and Enterprise Cloud:
- Core42 (A G42 Company) — Sovereign AI & Cloud GTM: Built executive pitch decks ("The Infrastructure Journey: Control to Chaos, and Back"), competitive battlecards, packaging frameworks, and market taxonomy, driving 2 landmark sovereign AI infrastructure enterprise wins.
- Zenarmor — Next-Gen Firewall Enablement: Conducted cybersecurity market intelligence and produced competitive battlecards against legacy enterprise firewalls.
- WaferWire — AI/ML Platform Value Translation: Distilled deep AI, analytics, and data pipeline technologies into C-suite ROI positioning frameworks.
- Valiantys — Atlassian Ecosystem Vertical GTM: Structured vertical marketing playbooks and executive roundtables for utilities, financial services, and healthcare (+20% qualified event leads).
- LightBeam — Data Privacy at IAPP 2024: Delivered targeted sales enablement playbooks and multi-touch presentation assets for global privacy officer summit.

PRODUCT MARKETING LEAD | NANOHEAL
Commercial Product Marketing & Outbound Sales Acceleration
- Evolved market positioning from reactive IT ticketing to zero-code Digital Experience Automation & autonomous endpoint healing.
- Built ICP-based outbound engine, structured high-velocity SDR playbooks, and packaged enterprise proof (e.g., Toyota Material Handling Europe across 1,000 client machines and 21 countries).
- Generated $1.2M+ in qualified pipeline and compressed enterprise sales cycle by 22% (from 9 to 7 months).

PRODUCT MARKETING MANAGER | APPSIAN SECURITY
ERP Data Security Positioning & Multi-Tier Messaging
- Communicated architectural value of lightweight ERP data security for PeopleSoft & SAP (ECC & S/4HANA) without custom developer code overhead.
- Overhauled site information architecture, 3-pillar messaging hierarchy (Control User Access, Enable Compliance & Audit, Advanced Threat Protection), buyer persona roadmaps, and customer insight playbooks.
- Achieved 2.3x monthly organic traffic lift, +21% qualified leads, and +18% customer upsells.

SENIOR TECHNICAL PRODUCT MARKETING & ENABLEMENT | ORACLE CORPORATION (8 Years)
Technical Product Marketing & Enterprise Database GTM
- Translated complex database security (Oracle Database Vault), storage, GoldenGate synchronization, and developer APIs into structured adoption paths across global enterprise accounts.
- Owned launch enablement and GTM execution across 25+ cross-functional contributors for 3 major database releases (Oracle 10g, 11g, 12c).
- Established and scaled the Oracle Learning Library (OLL) for developer and DBA education (+30% content consumption growth).
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tanmay_Choudhury_Product_Marketing_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#3B82F6]" />
          BACK TO PORTFOLIO
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#141720] hover:bg-[#1B1F2B] border border-white/15 text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#60A5FA]" />
            Print / Save PDF
          </button>
          <button
            type="button"
            onClick={handleDownloadResumeFile}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-xs font-mono uppercase tracking-wider text-white font-medium transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Executive Resume Container */}
      <div className="bg-[#11141C] border border-white/10 rounded-xl p-6 sm:p-10 lg:p-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#60A5FA] mb-2">
              CURRICULUM VITAE · EXECUTIVE BRIEF
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Product Marketing Leadership for Complex Enterprise Technology
            </p>
            <p className="text-xs font-mono text-slate-400 mt-1.5">
              Data Architecture &nbsp;·&nbsp; AI Infrastructure &nbsp;·&nbsp; Cybersecurity
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-slate-300">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
              {PORTFOLIO_DATA.contact.email}
            </a>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
              linkedin.com/in/tanmaychoudhury
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="mt-2 px-3 py-1.5 rounded bg-[#155EEF]/15 border border-[#155EEF]/40 text-[#60A5FA] text-[10px] uppercase tracking-wider hover:bg-[#155EEF]/25 transition-colors cursor-pointer"
            >
              Open to Lead / Director PMM Roles
            </button>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#60A5FA] mb-3">
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
            {PORTFOLIO_DATA.executiveProfile.paragraphs[0]}
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {PORTFOLIO_DATA.executiveProfile.paragraphs[1]}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#60A5FA]">
            LEADERSHIP &amp; GTM EXPERIENCE
          </h2>

          {/* Appventory */}
          <div className="p-6 rounded-xl bg-[#151A26] border border-white/[0.07]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">
                Marketing Lead — Appventory
              </h3>
              <span className="text-xs font-mono text-[#60A5FA]">
                Jan 2026 – Present · Seed to Series A GTM
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              {PORTFOLIO_DATA.activeLeadership.description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              {PORTFOLIO_DATA.activeLeadership.pillars.map((p, idx) => (
                <li key={idx} className="bg-[#11151F] p-3.5 rounded-lg border border-white/5">
                  <span className="font-bold text-white block mb-1">{p.title}</span>
                  <span className="text-slate-400 leading-relaxed">{p.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Independent Advisory Practice */}
          <div className="p-6 rounded-xl bg-[#141822] border border-white/[0.07]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">
                Principal Product Marketing Consultant — Independent Practice
              </h3>
              <span className="text-xs font-mono text-slate-400">2023 – Present</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              {PORTFOLIO_DATA.advisoryPractice.subtitle}
            </p>
            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.advisoryPractice.projects.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectCaseStudy(proj.caseStudySlug)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 cursor-pointer transition-colors"
                >
                  <div>
                    <span className="font-mono font-semibold text-[#60A5FA] mr-2">
                      {proj.company}
                    </span>
                    <span className="font-semibold text-white">{proj.title}: </span>
                    <span className="text-slate-400">{proj.description}</span>
                  </div>
                  <span className="font-mono text-[11px] text-white shrink-0">
                    {proj.deliverable} →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Enterprise Case Study Roles */}
          {PORTFOLIO_DATA.caseStudies
            .filter((c) => c.featuredOnHome)
            .map((cs) => (
              <div
                key={cs.slug}
                className="p-6 rounded-xl bg-[#141822] border border-white/[0.07]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#60A5FA] block">
                      {cs.company}
                    </span>
                    <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {cs.metricTitle} · {cs.metricSubtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  <strong className="text-white">Challenge:</strong> {cs.challenge}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  <strong className="text-white">Contribution:</strong> {cs.contribution}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectCaseStudy(cs.slug)}
                  className="text-[11px] font-mono uppercase tracking-wider text-[#60A5FA] hover:text-white transition-colors cursor-pointer"
                >
                  VIEW FULL CASE STUDY &amp; ARTIFACTS →
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
