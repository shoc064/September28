import React from 'react';
import { CaseStudyArtifact } from '../data/portfolioData';

interface ArtifactRendererProps {
  artifact: CaseStudyArtifact;
}

export const ArtifactRenderer: React.FC<ArtifactRendererProps> = ({ artifact }) => {
  if (artifact.customImageUrl) {
    return (
      <img
        src={artifact.customImageUrl}
        alt={artifact.title}
        referrerPolicy="no-referrer"
        className="w-full h-auto block rounded-lg"
      />
    );
  }

  switch (artifact.id) {
    case 'appsian-peoplesoft':
      return <AppsianPeoplesoftArtifact />;
    case 'appsian-why':
      return <AppsianWhyArtifact />;
    case 'core42-journey':
      return <Core42JourneyArtifact />;
    case 'oracle-db-vault':
      return <OracleDatabaseVaultArtifact />;
    case 'onboarding-flow':
      return <OnboardingFlowArtifact />;
    case 'nanoheal-automation':
      return <NanohealAutomationArtifact />;
    case 'valiantys-priorities':
      return <ValiantysPrioritiesArtifact />;
    case 'valiantys-factors':
      return <ValiantysFactorsArtifact />;
    default:
      return null;
  }
};

/* -------------------------------------------------------------------------- */
/* IMAGE 1: APPSIAN PEOPLESOFT PRODUCT PAGE                                   */
/* -------------------------------------------------------------------------- */
const AppsianPeoplesoftArtifact: React.FC = () => {
  return (
    <div className="w-full bg-white text-[#0d2240] rounded-lg overflow-hidden shadow-xl border border-[#1e2536] select-none">
      {/* Dark Navy Hero with Perspective Beams */}
      <div
        className="relative px-6 sm:px-12 pt-5 pb-10 text-white overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, #1b3f7a 0%, #0a1e46 45%, #071430 100%)',
        }}
      >
        {/* Perspective Streak Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-12deg, transparent, transparent 24px, rgba(96,165,250,0.18) 24px, rgba(96,165,250,0.18) 32px)',
          }}
        />

        {/* Top Nav */}
        <div className="relative z-10 flex items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-[#2bb3e6]" strokeWidth="3">
                <path d="M4 26L16 6L28 26" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 26L16 15L22 26" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-[0.28em] text-white">
              APPSIAN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold tracking-wider uppercase text-white/90">
            <span>PRODUCTS ▾</span>
            <span>SOLUTIONS ▾</span>
            <span>RESOURCES ▾</span>
            <span>CUSTOMERS ▾</span>
            <span>COMPANY ▾</span>
            <span>BLOG</span>
            <span className="bg-[#ff6b00] text-white px-3 py-1.5 rounded-sm font-semibold capitalize tracking-normal">
              Request A Demo
            </span>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl sm:text-3xl font-bold leading-tight mb-3 text-white">
            Comprehensive Data Security
            <br />
            For PeopleSoft
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed pb-3 border-b border-white/20">
            Strengthen PeopleSoft Security with Enhanced Authentication, Access Controls,
            and User Behavior Monitoring &amp; Analytics
          </p>
          <div className="pt-2 text-[10px] text-white/75 flex items-center gap-1.5">
            <span className="font-semibold text-white">Home</span>
            <span>/</span>
            <span className="font-semibold text-white">Products</span>
            <span>/</span>
            <span className="text-white/65">Security Platform For PeopleSoft Application</span>
          </div>
        </div>

        {/* Enterprise Customer Logos Strip */}
        <div className="relative z-10 mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 sm:gap-6 opacity-95">
          <div className="bg-white text-[#0d2240] px-2.5 py-2 text-[9px] font-serif font-extrabold leading-none text-center">
            WELLS
            <br />
            FARGO
          </div>
          <div className="bg-white text-[#0d2240] px-2.5 py-1.5 text-xs font-serif font-bold tracking-tighter">
            GAP
          </div>
          <div className="text-white font-black tracking-wider text-sm sm:text-base">
            GEICO
          </div>
          <div className="text-white/90 text-[10px] font-medium leading-tight">
            ❖ Hackensack
            <br />
            <span className="text-white/70">Meridian Health</span>
          </div>
          <div className="text-white/90 text-[11px] font-semibold">
            AdventistHealth
          </div>
          <div className="text-white font-serif text-base sm:text-lg font-bold leading-none">
            Ohio
          </div>
          <div className="border border-white/80 rounded-full px-3 py-0.5 text-white font-extrabold text-xs tracking-wider">
            H-E-B
          </div>
        </div>
      </div>

      {/* Bottom Two-Column Problem/Solution Narrative */}
      <div className="px-6 sm:px-12 py-8 sm:py-10 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6 pr-2">
          <p className="text-sm sm:text-lg font-normal uppercase tracking-wide text-[#0f294a] leading-snug">
            PEOPLESOFT’S SECURITY MODEL CAN LEAVE YOU EXPOSED TO DATA RISKS. APPSIAN
            ENABLES YOU TO CLOSE THE GAPS AND EXPAND ACCESS SECURELY.
          </p>
        </div>
        <div className="md:col-span-6 md:border-l-2 md:border-[#ff6b00] md:pl-6">
          <p className="text-xs sm:text-[13px] text-[#173256] leading-relaxed">
            By combining a sophisticated suite of authentication, access control, and
            analytics features into a comprehensive platform, Appsian enables PeopleSoft
            customers to extend the life of their ERP applications. Without Appsian, ERP
            data in PeopleSoft HCM, FSCM, etc. is at risk from unauthorized access
            (external and internal bad actors), data breaches, and non-compliance with
            data regulations like GDPR.
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 2: WHY APPSIAN POSITIONING PAGE                                      */
/* -------------------------------------------------------------------------- */
const AppsianWhyArtifact: React.FC = () => {
  return (
    <div className="w-full bg-white text-[#0d2240] rounded-lg overflow-hidden shadow-xl border border-[#1e2536] select-none">
      {/* Dark Navy Hero */}
      <div
        className="relative px-6 sm:px-12 pt-5 pb-10 text-white overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, #193d76 0%, #0a1e46 50%, #071430 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-12deg, transparent, transparent 24px, rgba(96,165,250,0.18) 24px, rgba(96,165,250,0.18) 32px)',
          }}
        />

        {/* Top Nav */}
        <div className="relative z-10 flex items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-[#2bb3e6]" strokeWidth="3">
              <path d="M4 26L16 6L28 26" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 26L16 15L22 26" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm sm:text-base font-semibold tracking-[0.28em] text-white">
              APPSIAN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold tracking-wider uppercase text-white/90">
            <span>PRODUCTS ▾</span>
            <span>SOLUTIONS ▾</span>
            <span>RESOURCES ▾</span>
            <span>CUSTOMERS ▾</span>
            <span>COMPANY ▾</span>
            <span>BLOG</span>
            <span className="bg-[#ff6b00] text-white px-3 py-1.5 rounded-sm font-semibold capitalize tracking-normal">
              Request A Demo
            </span>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl sm:text-3xl font-bold leading-tight mb-2.5 text-white">
            Why Appsian
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed pb-4 border-b border-white/20">
            Appsian Is The Global Leader In Securing ERP Data And Helping Organizations
            Enable Remote Access
          </p>
          <div className="pt-2 text-[10px] text-white/75 flex items-center gap-1.5">
            <span className="font-semibold text-white">Home</span>
            <span>/</span>
            <span className="font-semibold text-white">Company</span>
            <span>/</span>
            <span className="text-white/65">Why Appsian</span>
          </div>
        </div>
      </div>

      {/* Bottom Two-Column IDC Breach Stat Section */}
      <div className="px-6 sm:px-12 py-8 sm:py-10 bg-[#fafafa] grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-6 pr-2">
          <p className="text-sm sm:text-lg font-normal uppercase tracking-wide text-[#0f294a] leading-snug mb-6">
            64% OF ERP [ORACLE AND SAP] DEPLOYMENTS HAVE BEEN BREACHED IN THE LAST 24
            MONTHS
          </p>
          <p className="text-[10px] text-[#718096]">
            *IDC. 2019. ERP Security: The Reality of Business Application Protection’,
          </p>
        </div>
        <div className="md:col-span-6 md:border-l-2 md:border-[#ff6b00] md:pl-6">
          <h4 className="text-sm sm:text-base font-bold text-[#0f294a] mb-3 leading-snug">
            Security and Compliance Risks Threaten Your ERP Each Day. Are you Protected?
          </h4>
          <p className="text-xs sm:text-[13px] text-[#173256] leading-relaxed">
            With the majority of Oracle and SAP ERP customers recently experiencing a
            breach, it has become evident that these system pose unique challenges. In
            order to safeguard these systems from the myriad of internal and external
            threats that try to exploit them, organizations must enhance their{' '}
            <strong className="font-semibold">
              Access Controls, Compliance &amp; Audit, and Threat Protection
            </strong>{' '}
            strategies. Fortunately, Appsian can help.
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 3: CORE42 INFRASTRUCTURE JOURNEY SLIDE                               */
/* -------------------------------------------------------------------------- */
const Core42JourneyArtifact: React.FC = () => {
  return (
    <div className="w-full bg-black text-white rounded-lg p-6 sm:p-10 shadow-xl border border-[#1f2637] select-none">
      {/* Top Row: Title + Core42 Logo */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
        <div>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
            <span className="text-white">The </span>
            <span className="text-[#00d09c]">Infrastructure Journey</span>
          </h3>
          <p className="text-sm sm:text-lg text-white/90">
            <span className="text-[#00d09c]">Shift</span> from Control to Chaos, and Back
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center sm:justify-end gap-0.5">
            <span>c</span>
            <span className="text-[#00d09c]">o</span>
            <span>re</span>
            <span className="font-normal ml-0.5">42</span>
          </div>
          <div className="text-[9px] text-white/70 tracking-wider">A G42 company</div>
        </div>
      </div>

      {/* 3 Circles Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 my-6">
        {/* Circle 1: ON-PREMISE */}
        <div className="md:col-span-3 flex justify-center">
          <div className="w-56 h-56 sm:w-60 sm:h-60 rounded-full border-[2.5px] border-white bg-black flex flex-col items-center justify-center p-5 text-center">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide mb-3 text-white">
              ON-PREMISE
            </div>
            <div className="space-y-2 text-xs sm:text-[13px] text-white/95">
              <div>
                <span className="text-red-500 font-bold mr-1">X</span>Server rooms
              </div>
              <div>
                <span className="text-red-500 font-bold mr-1">X</span>Physical infra
              </div>
              <div>
                <span className="text-red-500 font-bold mr-1">X</span>Local control
              </div>
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="md:col-span-1 flex justify-center text-white/90 text-xl font-bold">
          <span className="hidden md:inline">➡</span>
          <span className="md:hidden">⬇</span>
        </div>

        {/* Circle 2: PUBLIC CLOUD */}
        <div className="md:col-span-3 flex justify-center">
          <div className="w-56 h-56 sm:w-60 sm:h-60 rounded-full border-[2.5px] border-white bg-black flex flex-col items-center justify-center p-5 text-center">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide mb-4 text-white">
              PUBLIC CLOUD
            </div>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-white/95">
              <div>
                <span className="text-red-500 font-bold mr-1">X</span>Compliance
              </div>
              <div>
                <span className="text-red-500 font-bold mr-1">X</span>Data residency
              </div>
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="md:col-span-1 flex justify-center text-white/90 text-xl font-bold">
          <span className="hidden md:inline">➡</span>
          <span className="md:hidden">⬇</span>
        </div>

        {/* Circle 3: SOVEREIGN CLOUD */}
        <div className="md:col-span-3 flex justify-center">
          <div className="w-56 h-56 sm:w-60 sm:h-60 rounded-full border-[2.5px] border-white bg-[#00cc99] flex flex-col items-center justify-center p-5 text-center text-white shadow-lg">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide leading-tight mb-3">
              SOVEREIGN
              <br />
              CLOUD
            </div>
            <div className="text-xs sm:text-[13px] leading-snug font-medium">
              <span className="inline-block bg-[#22c55e] text-white rounded px-1 mr-1 text-[11px]">
                ✓
              </span>
              Compliant,
              <br />
              secure and fully
              <br />
              protected
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Timeline Labels */}
      <div className="mt-8 pt-4 grid grid-cols-3 items-center text-center text-xs sm:text-sm font-medium tracking-wider uppercase text-white">
        <div>CONTROL</div>
        <div className="flex items-center justify-center gap-2">
          <span className="hidden sm:inline-block h-[1px] w-16 bg-white/60" />
          <span>CHAOS</span>
          <span className="hidden sm:inline-block h-[1px] w-16 bg-white/60" />
        </div>
        <div className="leading-tight">
          GAINING
          <br />
          BACK
          <br />
          CONTROL
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 4: ONBOARDING FLOW DIAGRAM                                           */
/* -------------------------------------------------------------------------- */
const OnboardingFlowArtifact: React.FC = () => {
  const steps = [
    {
      label: 'Confirmed',
      desc: 'Student logs in and views confirmed schedules',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 stroke-[#0b3c78] fill-none" strokeWidth="2">
          <circle cx="24" cy="16" r="7" />
          <path d="M12 38c0-7 5-11 12-11s12 4 12 11v3H12v-3z" />
        </svg>
      ),
    },
    {
      label: 'Fulfilled',
      desc: 'Student starts fulfilling onboarding requirements for a schedule.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 stroke-[#0b3c78] fill-none" strokeWidth="2">
          <path d="M14 8h14l8 8v24H14V8z" />
          <path d="M28 8v8h8" />
          <line x1="18" y1="22" x2="32" y2="22" />
          <line x1="18" y1="27" x2="32" y2="27" />
          <line x1="18" y1="32" x2="28" y2="32" />
        </svg>
      ),
    },
    {
      label: 'Reviewed',
      desc: 'Onboarding review team reviews the fulfilled requirements.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 stroke-[#2563eb] fill-none" strokeWidth="2">
          <circle cx="22" cy="22" r="9" />
          <line x1="29" y1="29" x2="36" y2="36" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'Onboarded',
      desc: 'Once all requirements are approved, the student will be denoted as compliant.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 stroke-[#22a81a] fill-none" strokeWidth="4">
          <path d="M12 25l8 8 16-16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#bce7eb] text-[#0d3b66] rounded-lg p-6 sm:p-10 shadow-xl border border-[#95cfd5] select-none">
      <h3 className="font-serif text-2xl sm:text-4xl text-[#0b4376] mb-6">
        Onboarding flow
      </h3>

      {/* Top Bracket */}
      <div className="hidden md:block ml-[25%] mr-[4%] mb-4">
        <div className="text-center text-xs text-[#0b1f3a] font-medium mb-1">
          Sites can view this part of the process.
        </div>
        <div className="h-4 border-t-2 border-l-2 border-r-2 border-[#2b6cb0]" />
      </div>

      {/* 4 Connected Circles + Chevrons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={`w-36 h-36 rounded-full flex items-center justify-center mb-5 border-2 ${
                idx % 2 === 0
                  ? 'border-[#e02d79]'
                  : 'border-dashed border-[#e02d79]'
              } bg-[#bce7eb] shadow-inner`}
            >
              {step.icon}
            </div>

            {/* Pink Chevron Banner */}
            <div className="w-full bg-[#e62e7a] text-white text-xs font-medium py-2 px-4 text-center rounded-sm mb-3 shadow-sm">
              {step.label}
            </div>

            <p className="text-xs text-[#0b1f3a] leading-relaxed text-left w-full px-1">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-xs text-[#0b1f3a]">
        <strong className="text-[#e62e7a] font-bold">Note:</strong> Sites can also
        override the status filled in by the approval team.
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 5: ORACLE DATABASE VAULT MANDATORY REALM ARCHITECTURE & TABLE        */
/* -------------------------------------------------------------------------- */
const OracleDatabaseVaultArtifact: React.FC = () => {
  const rows = [
    {
      useCase: 'Support and Development Access',
      desc: 'Mandatory Realms can be placed around all or specific application tables, blocking both the application owner as well as those with direct object grants from accessing the data. For patching and support access, stored procedures and application meta data can still be accessed and patched, but application sensitive data will be protected by the Mandatory Realm.',
    },
    {
      useCase: 'Entitlement Controls',
      desc: 'Mandatory Realms freeze the entitlements granted to a database role so that no privileged user can change them. Only authorized users will be able to grant these roles and change their entitlements.',
    },
    {
      useCase: 'Application Protection',
      desc: 'Mandatory Realms can be used to protect applications just like regular realms. In this case, all users who rely on direct grants for access should be added to realm authorizations. This makes it easier for auditors to identify all who have access to data and verify compliance.',
    },
    {
      useCase: 'Incident Response',
      desc: 'In the event of a breach or other failure, data may need to be sealed off by Mandatory Realms irrespective of the direct grants and ownership until authorities can analyze the situation.',
    },
    {
      useCase: 'Threat Response',
      desc: 'If an organization becomes aware of a threat, Mandatory Realms can be turned on quickly to stop all access until the threat has been evaluated.',
    },
  ];

  return (
    <div className="w-full bg-white text-[#1a202c] rounded-lg p-5 sm:p-8 shadow-xl border border-[#cbd5e1] select-none">
      {/* Top Oracle Red Ribbon */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-6 bg-gradient-to-r from-[#d90000] to-[#990000] flex-1 transform -skew-x-12" />
        <div className="h-4 w-24 bg-gradient-to-r from-[#cbd5e1] to-[#e2e8f0] transform -skew-x-12" />
      </div>

      {/* Figure 2 Diagram */}
      <div className="max-w-2xl mx-auto my-4 border border-[#cbd5e1] rounded p-4 bg-[#f8fafc]">
        <div className="grid grid-cols-12 gap-2 items-center">
          {/* Left Swimlanes (DBA, HR, FIN) */}
          <div className="col-span-5 space-y-3">
            <div className="border border-[#6094c7] bg-white p-2.5 rounded-sm">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#0f172a]">
                <span>💻 DBA</span>
                <span className="font-mono text-[10px] text-[#b91c1c]">
                  select * from HR.emp
                </span>
              </div>
            </div>
            <div className="border border-[#6094c7] bg-white p-2.5 rounded-sm flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#0f172a]">👤 HR</span>
              <span className="text-[#b91c1c] font-bold text-xs">────▶</span>
            </div>
            <div className="border border-[#6094c7] bg-white p-2.5 rounded-sm flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#0f172a]">👤 FIN</span>
              <span className="text-[#b91c1c] font-bold text-xs">────▶</span>
            </div>
          </div>

          {/* Right Database Cylinder */}
          <div className="col-span-7 bg-gradient-to-r from-[#d1d5db] via-[#f3f4f6] to-[#9ca3af] border-2 border-[#4b5563] rounded-2xl p-4 space-y-3 relative">
            <div className="text-[10px] font-mono text-center text-[#374151] font-semibold border-b border-[#6b7280] pb-1">
              Oracle Database Instance
            </div>

            {/* HR Realm Box */}
            <div className="bg-gradient-to-b from-[#dc2626] to-[#991b1b] border-2 border-[#7f1d1d] rounded p-2.5 text-white shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-amber-300 text-black font-bold px-1.5 py-0.5 rounded-sm">
                  ✖ DBA Blocked
                </span>
                <span className="text-xs font-bold">HR Realm</span>
              </div>
              <div className="text-[10px] text-white/90 mt-1">
                ✓ HR Authorized Access Permitted
              </div>
            </div>

            {/* Fin Realm Box */}
            <div className="bg-gradient-to-b from-[#dc2626] to-[#991b1b] border-2 border-[#7f1d1d] rounded p-2.5 text-white shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-amber-300 text-black font-bold px-1.5 py-0.5 rounded-sm">
                  ✖ Cross-Schema Blocked
                </span>
                <span className="text-xs font-bold">Fin Realm</span>
              </div>
              <div className="text-[10px] text-white/90 mt-1">
                ✓ FIN Authorized Access Permitted
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-[#4a5568] mb-5">
        Figure 2. Oracle Database Vault Mandatory Realm for Maintenance
      </p>

      {/* Table 2 */}
      <div className="text-[11px] font-bold uppercase tracking-tight text-[#0f172a] pb-1.5 border-b-2 border-[#e53e3e]">
        TABLE 2. MANDATORY REALMS USE CASES
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-[11px]">
          <thead>
            <tr className="border-b border-[#1a202c]">
              <th className="py-2 pr-3 font-bold w-1/4 text-[#0f172a]">Use Case</th>
              <th className="py-2 pl-3 font-bold text-[#0f172a]">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#4a5568]">
            {rows.map((row) => (
              <tr key={row.useCase}>
                <td className="py-2 pr-3 align-top font-medium text-[#1a202c] border-r border-[#4a5568]">
                  {row.useCase}
                </td>
                <td className="py-2 pl-3 align-top text-[#2d3748] leading-snug">
                  {row.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 6: VALIANTYS UTILITIES SECTOR PRIORITIES                             */
/* -------------------------------------------------------------------------- */
const ValiantysPrioritiesArtifact: React.FC = () => {
  const priorities = [
    {
      icon: '🌍',
      bold: 'Accelerate to net zero',
      rest: ' to aim for limited global warming and resultant climate change',
    },
    {
      icon: '⚙️',
      bold: 'Deep industry expertise',
      rest: ' from service providers',
    },
    {
      icon: '💡',
      bold: 'Digital technologies and innovation',
      rest: ' capabilities (e.g., AI, ML, data and analytics)',
    },
    {
      icon: '🛡️',
      bold: 'Cybersecurity',
      rest: ' (e.g., zero trust security for the connected energy ecosystem). Connected utilities, and accountability of cybersecurity & compliance of the same.',
    },
    {
      icon: '⚡',
      bold: 'Convergence of the oil and gas,',
      rest: ' utilities, automobile, and public sector value chains (e-mobility; provide seamless charging)',
    },
    {
      icon: '⭐',
      bold: 'Streamline operations',
      rest: ' and financial processes, digitalize customer experience, and contribute to sustainability',
    },
    {
      icon: '👤',
      bold: 'Increase reliability',
      rest: ' and understand customer demands',
    },
    {
      icon: '🛠️',
      bold: 'Close critical skills gaps',
      rest: ' to manage electricity demand, develop the infrastructure for e-mobility revolution, transform customer experiences, and use new digital platforms',
    },
  ];

  return (
    <div className="w-full bg-white text-[#0f172a] rounded-lg p-6 sm:p-10 shadow-xl border border-[#cbd5e1] select-none">
      <h3 className="text-xl sm:text-3xl font-normal text-[#00a3ff] mb-8">
        What does the utilities sector need now?
      </h3>

      {/* Central Hub + Priority Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-[12px] border-[#0070f3] flex items-center justify-center p-6 text-center shadow-md bg-[#f8fafc]">
            <div className="text-sm sm:text-base font-bold text-[#0f172a] leading-snug">
              Current priorities of
              <br />
              Utility sector
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {priorities.map((item) => (
            <div
              key={item.bold}
              className="flex items-start gap-3 p-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc]"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#0070f3] bg-white flex items-center justify-center shrink-0 text-sm">
                {item.icon}
              </div>
              <p className="text-[11.5px] text-[#0f172a] leading-snug">
                <strong className="font-bold">{item.bold}</strong>
                {item.rest}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-[10px] text-[#475569]">
        ©2024 Valiantys. All rights reserved.
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 7: VALIANTYS FACTORS AFFECTING UTILITY SECTOR                        */
/* -------------------------------------------------------------------------- */
const ValiantysFactorsArtifact: React.FC = () => {
  return (
    <div className="w-full bg-[#0066ff] text-white rounded-lg p-6 sm:p-10 shadow-xl border border-[#2563eb] select-none">
      <h3 className="text-xl sm:text-3xl font-bold text-white mb-8">
        Factors affecting the utility industry sector
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Political & Environmental */}
        <div className="space-y-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3">Political</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/95 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Geopolitics will affect industry practices and may diversify energy
                  supply.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Russia-Ukraine war and volatility in oil and gas prices will affect
                  global energy and utility markets.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Rapid adoption of new energy sources (renewables and hydrogen) will also
                  affect prices.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3">Environmental</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/95 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Heat and drought conditions will continue to affect energy prices in
                  2024.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Electricity companies are monitoring water stress. Due to water stress,
                  water costs have been rising.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] mt-0.5">◆</span>
                <span>
                  Many western hydroelectric plants could face shutdown due to low water
                  levels.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Social/People */}
        <div>
          <h4 className="text-base sm:text-lg font-bold mb-3">Social/People</h4>
          <ul className="space-y-3 text-xs sm:text-[13px] text-white/95 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#00e5ff] mt-0.5">◆</span>
              <span>Technology skillset gap to be closed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#00e5ff] mt-0.5">◆</span>
              <span>
                Biggest barrier to improving customer experience is attracting talent that
                helps organizations innovate as a digital business.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#00e5ff] mt-0.5">◆</span>
              <span>
                Data savvy, digitally-enabled, and customer-centric talent needed.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#00e5ff] mt-0.5">◆</span>
              <span>
                Internal training and employee experience will be in focus in the coming
                years.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between text-[10px] text-white/80">
        <span>©2024 Valiantys. All rights reserved.</span>
        <span>[Source]</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* IMAGE 8: NANOHEAL AUTOMATION & TMHE CASE STUDY SLIDE                       */
/* -------------------------------------------------------------------------- */
const NanohealAutomationArtifact: React.FC = () => {
  const stats = [
    { label: 'Number of Client Machines', value: '1000' },
    { label: 'Countries', value: '21' },
    { label: 'EUC Applications', value: '120' },
    { label: 'Use Cases Automated', value: '39' },
    {
      label: 'Monthly Avg Tickets Resolution',
      value: '170',
      sub: '[20% of Workplace Tower Volume]',
    },
  ];

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-xl border border-[#1e2536] grid grid-cols-1 lg:grid-cols-12 select-none">
      {/* Left Side: White Column with TMHE Metrics Table */}
      <div className="lg:col-span-6 bg-white text-[#071330] p-6 sm:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-[#071330] mb-4">
            Nanoheal Automation
          </h3>
          <p className="text-xs sm:text-sm text-[#1a202c] leading-relaxed mb-4">
            <span className="text-[#f59e0b] font-bold">Device automation platform</span>{' '}
            to analyse and automate device experience for all your endpoints.
          </p>
          <p className="text-xs sm:text-[13px] text-[#2d3748] leading-relaxed mb-6">
            With Nanoheal, Toyota Material Handling Europe (TMHE) saw a big reduction in
            their ticket volumes. Nanoheal&apos;s automation capabilities were helpful in
            automating device issues across various categories, and delivering an improved
            overall user experience.
          </p>
        </div>

        {/* Grey Metrics Box */}
        <div className="bg-[#efefef] rounded p-5 space-y-3">
          {stats.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-12 items-center text-center text-xs sm:text-[13px] text-[#111827]"
            >
              <div className="col-span-7 font-medium">{row.label}</div>
              <div className="col-span-5 font-medium">
                <div>{row.value}</div>
                {row.sub && (
                  <div className="text-[11px] text-[#1f2937] leading-tight mt-0.5">
                    {row.sub}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Dark Navy with Rounded White Card */}
      <div className="lg:col-span-6 bg-[#05102e] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        {/* Top Right Logo */}
        <div className="flex justify-end items-center gap-2 mb-8">
          <div className="w-5 h-5 border-2 border-white rotate-45 rounded-xs" />
          <span className="text-white font-semibold tracking-tight text-base">
            nanoheal<sup className="text-[8px]">TM</sup>
          </span>
        </div>

        {/* White Rounded Card */}
        <div className="bg-white text-[#1f2937] rounded-tl-[48px] rounded-bl-[48px] rounded-r-xl p-6 sm:p-9 shadow-xl my-auto">
          <h4 className="text-lg sm:text-2xl font-extrabold text-[#ff3b1d] leading-tight">
            Digital Experience Automation
          </h4>
          <div className="text-base sm:text-xl font-extrabold text-[#f59e0b] mb-4">
            by Nanoheal
          </div>
          <p className="text-xs sm:text-[13.5px] text-[#4b5563] leading-relaxed">
            Great digital experience is a result of self-healing devices. Nanoheal’s
            zero-code automation capabilities enables real-time remediation, strengthens
            compliance, and automates IT tasks, so your IT teams are more empowered.
            Nanoheal helps you enhance productivity and gives you in-depth analytics to
            measure and improve employee experience.
          </p>
        </div>
      </div>
    </div>
  );
};
