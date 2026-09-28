import React from 'react';
import { Check, Search, FileText, User, Shield, Globe, Lightbulb, Wrench, Home, Star } from 'lucide-react';

export const ArtifactRenderer: React.FC<{ artifactId: string }> = ({ artifactId }) => {
  switch (artifactId) {
    case 'nanoheal-automation-slide':
      return <NanohealSlideArtifact />;
    case 'valiantys-opportunities':
      return <ValiantysOpportunitiesArtifact />;
    case 'valiantys-utilities-sector':
      return <ValiantysUtilitiesArtifact />;
    case 'oracle-learning-library':
      return <OracleLearningLibraryArtifact />;
    case 'oracle-database-vault':
      return <OracleDatabaseVaultArtifact />;
    case 'onboarding-flow-diagram':
      return <OnboardingFlowArtifact />;
    case 'core42-infrastructure-journey':
      return <Core42JourneyArtifact />;
    case 'appsian-hero':
      return <AppsianHeroArtifact />;
    case 'appsian-why':
      return <AppsianWhyArtifact />;
    case 'appsian-pillars':
      return <AppsianPillarsArtifact />;
    case 'appsian-key-messaging':
      return <AppsianMessagingArtifact />;
    default:
      return null;
  }
};

/* Image 5.png — Nanoheal Automation Slide */
const NanohealSlideArtifact: React.FC = () => (
  <div className="w-full bg-white text-[#1A202C] rounded-lg overflow-hidden border border-white/15 grid grid-cols-1 lg:grid-cols-12 shadow-xl">
    {/* Left Half */}
    <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1739] tracking-tight mb-4">
          Nanoheal Automation
        </h3>
        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed mb-5">
          <span className="font-bold text-[#F5B700]">Device automation platform</span> to analyse and automate device experience for all your endpoints.
        </p>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
          With Nanoheal, Toyota Material Handling Europe (TMHE) saw a big reduction in their ticket volumes. Nanoheal&apos;s automation capabilities were helpful in automating device issues across various categories, and delivering an improved overall user experience.
        </p>
      </div>

      <div className="bg-[#F2F2F2] p-5 rounded-sm">
        <div className="grid grid-cols-2 gap-y-3.5 text-xs sm:text-sm items-center text-center">
          <div className="text-gray-900 font-medium">Number of Client Machines</div>
          <div className="text-gray-900 font-semibold">1000</div>

          <div className="text-gray-900 font-medium">Countries</div>
          <div className="text-gray-900 font-semibold">21</div>

          <div className="text-gray-900 font-medium">EUC Applications</div>
          <div className="text-gray-900 font-semibold">120</div>

          <div className="text-gray-900 font-medium">Use Cases Automated</div>
          <div className="text-gray-900 font-semibold">39</div>

          <div className="text-gray-900 font-medium">
            Monthly Avg Tickets<br />Resolution
          </div>
          <div className="text-gray-900 font-medium leading-snug">
            170<br />
            <span className="text-[11px]">[20% of Workplace Tower Volume]</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Half */}
    <div className="lg:col-span-6 bg-[#060E29] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
      {/* Top Right Logo */}
      <div className="flex justify-end items-center gap-2 mb-6 z-10">
        <div className="w-6 h-6 rounded border-2 border-white/80 flex items-center justify-center text-[10px] font-bold text-white rotate-45">
          <span className="-rotate-45">N</span>
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">
          nanoheal<sup className="text-[8px] ml-0.5">TM</sup>
        </span>
      </div>

      {/* Decorative Dot Grid */}
      <div
        className="absolute right-6 top-20 w-44 h-24 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* White curved card */}
      <div className="bg-white rounded-tl-none rounded-tr-[64px] rounded-bl-[64px] rounded-br-none p-6 sm:p-9 shadow-xl z-10 my-auto">
        <h4 className="text-xl sm:text-2xl font-extrabold text-[#FF4721] leading-snug">
          Digital Experience Automation
        </h4>
        <div className="text-lg sm:text-xl font-extrabold text-[#F5B700] mb-4">
          by Nanoheal
        </div>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Great digital experience is a result of self-healing devices. Nanoheal’s zero-code automation capabilities enables real-time remediation, strengthens compliance, and automates IT tasks, so your IT teams are more empowered. Nanoheal helps you enhance productivity and gives you in-depth analytics to measure and improve employee experience.
        </p>
      </div>

      <div
        className="h-4 w-44 ml-auto mt-4 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)',
          backgroundSize: '18px 18px',
        }}
      />
    </div>
  </div>
);

/* Image 6.png — Business opportunities for Valiantys */
const ValiantysOpportunitiesArtifact: React.FC = () => (
  <div className="w-full bg-white text-gray-900 p-5 sm:p-8 rounded-lg border border-white/15 shadow-xl overflow-x-auto">
    <h3 className="text-2xl sm:text-3xl font-normal text-[#00B8F1] mb-5 tracking-tight">
      Business opportunities for Valiantys
    </h3>
    <table className="w-full border-collapse border border-gray-800 text-xs sm:text-[13px] leading-snug">
      <thead>
        <tr className="bg-[#0065FF] text-white">
          <th className="border border-gray-800 py-2.5 px-3 text-center font-bold w-1/3">Trends</th>
          <th className="border border-gray-800 py-2.5 px-3 text-center font-bold w-1/3">Impact on utility companies</th>
          <th className="border border-gray-800 py-2.5 px-3 text-center font-bold w-1/3">Valiantys opportunity</th>
        </tr>
      </thead>
      <tbody>
        <tr className="align-top">
          <td className="border border-gray-800 p-3 space-y-2">
            <div className="font-bold">Customer and employee experience</div>
            <div>Some priorities of Utility companies</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Close skills gap
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    Hire transformation leaders and other senior leadership roles including C-level (especially in Digital transformation, Innovation, Agile teams).
                  </li>
                </ul>
              </li>
              <li>Improve financial and resourcing systems</li>
              <li>Accelerate to net zero</li>
            </ul>
          </td>
          <td className="border border-gray-800 p-3">
            <ul className="list-disc pl-5 space-y-2">
              <li>Utility companies need to gather data and improve customer and employee experience.</li>
              <li>Improve and digitalize employee and customer experience and implement digital solutions.</li>
              <li>Procuring new software/licenses to improve internal processes, align teams to new vision and targets.</li>
              <li>Companies are trying to become digitally and technologically savvy.</li>
              <li>Utilities to adapt to changing customer expectations, regulatory pressures, and technological advancements.</li>
            </ul>
          </td>
          <td className="border border-gray-800 p-3 space-y-2.5">
            <div>
              <div className="font-bold">JIRA Service Management</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Implementing JSM to improve customer service efficiency and visibility across the partner ecosystem and value chain.</li>
                <li>Using Atlassian analytics to gather and analyze customer and employee data for actionable insights</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">JIRA Align</div>
              <p>- Helps create visibility across teams and align goals to deliver digital transformation efforts and go to market faster.</p>
            </div>
            <div>
              <div className="font-bold">Agile coaching &amp; Agile methodologies</div>
              <p>Helps teams embed an agile mindset, learn new ways of working and collaborating, and utilize leading practices to achieve goals more efficiently and rapidly.</p>
            </div>
            <div>
              <div className="font-bold">JIRA Work Management (JWM)</div>
              <p>Implementing Jira Work Management for efficient project management and resource allocation.</p>
            </div>
          </td>
        </tr>
        <tr className="align-top">
          <td className="border border-gray-800 p-3 space-y-2">
            <div className="font-bold">Cloud migration and infrastructure modernization</div>
            <p>Companies are increasingly migrating to cloud as a part of their digital transformation strategy. A Cloud strategy helps in:</p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>More efficient utilization of resources.</li>
              <li>Cost efficiency.</li>
              <li>Simplifying and consolidating disparate systems.</li>
            </ul>
          </td>
          <td className="border border-gray-800 p-3">
            <ul className="list-disc pl-5">
              <li>Utilities need to migrate to the cloud to support new infrastructure needs like billing systems, e-mobility platforms, etc.</li>
            </ul>
          </td>
          <td className="border border-gray-800 p-3 space-y-2.5">
            <div>
              <div className="font-bold">JIRA Align</div>
              <p>To streamline cloud migration planning by integrating data from multiple environments (cloud, on-premises, various tools), offering a cohesive roadmap and strategic resource allocation for efficient and aligned execution.</p>
            </div>
            <div>
              <div className="font-bold">Cloud migration</div>
              <p>Cloud migration to get the organization kick started in their digital transformation efforts. Analytics advisory post migration on how to utilize data management and assets for insights may be a suitable upsell offering.</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="text-[10px] text-gray-600 mt-4">©2024 Valiantys. All rights reserved.</div>
  </div>
);

/* Image 7.png — What does the utilities sector need now? */
const ValiantysUtilitiesArtifact: React.FC = () => {
  const priorities = [
    {
      icon: Globe,
      title: 'Accelerate to net zero',
      desc: 'to aim for limited global warming and resultant climate change',
    },
    {
      icon: Wrench,
      title: 'Close critical skills gaps',
      desc: 'to manage electricity demand, develop the infrastructure for e-mobility revolution, transform customer experiences, and use new digital platforms',
    },
    {
      icon: Star,
      title: 'Deep industry expertise',
      desc: 'from service providers',
    },
    {
      icon: User,
      title: 'Increase reliability',
      desc: 'and understand customer demands',
    },
    {
      icon: Lightbulb,
      title: 'Digital technologies and innovation',
      desc: 'capabilities (e.g., AI, ML, data and analytics)',
    },
    {
      icon: Star,
      title: 'Streamline operations',
      desc: 'and financial processes, digitalize customer experience, and contribute to sustainability',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      desc: '(e.g., zero trust security for the connected energy ecosystem). Connected utilities, and accountability of cybersecurity & compliance of the same.',
    },
    {
      icon: Home,
      title: 'Convergence of the oil and gas,',
      desc: 'utilities, automobile, and public sector value chains (e-mobility; provide seamless charging)',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-lg border border-white/15 shadow-xl">
      <h3 className="text-2xl sm:text-3xl font-normal text-[#00B8F1] mb-8 tracking-tight">
        What does the utilities sector need now?
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Central visual ring */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-4">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-[14px] border-[#0065FF] flex items-center justify-center bg-blue-50/30 shadow-inner">
            <div className="text-center px-6">
              <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                Current priorities of<br />Utility sector
              </div>
            </div>
          </div>
        </div>

        {/* 8 Priority Callouts around the sector ring */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {priorities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg border border-blue-100 bg-blue-50/20"
              >
                <div className="w-9 h-9 rounded-full border-2 border-[#0065FF] bg-white flex items-center justify-center shrink-0 text-gray-900">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-xs text-gray-800 leading-relaxed">
                  <span className="font-bold text-gray-950">{item.title}</span> {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-[10px] text-gray-600 mt-6">©2024 Valiantys. All rights reserved.</div>
    </div>
  );
};

/* Image 8.png — Oracle Learning Library Portal Screenshot */
const OracleLearningLibraryArtifact: React.FC = () => {
  const boxes = [
    {
      edition: 'ORACLE DATABASE 11g',
      color: 'from-gray-100 to-gray-300 border-red-600',
      banner: 'bg-[#D91B00]',
      caption: 'Getting Started with SQL Developer Data Modeler 3.0',
    },
    {
      edition: 'ORACLE FUSION MIDDLEWARE 11g',
      color: 'from-orange-500 to-red-600 border-red-700 text-white',
      banner: 'bg-[#B01200]',
      caption: 'Database Synchronization with Oracle GoldenGate',
    },
    {
      edition: 'ORACLE DATABASE 11g',
      color: 'from-gray-100 to-gray-300 border-red-600',
      banner: 'bg-[#D91B00]',
      caption: 'Oracle SQL Developer 3.0 OBE Series',
    },
    {
      edition: 'OracleLearning YouTube Channel',
      color: 'from-gray-100 to-gray-300 border-red-600',
      banner: 'bg-[#D91B00]',
      caption: 'OracleLearning Channel Videos',
    },
  ];

  const tags = [
    { name: 'Application Development', count: 153, size: 'text-base font-bold text-gray-900' },
    { name: 'Hyperion', count: 97, size: 'text-sm font-medium text-gray-800' },
    { name: 'Enterprise Manager', count: 61, size: 'text-sm font-medium text-gray-800' },
    { name: 'Grid', count: 60, size: 'text-sm font-medium text-gray-800' },
    { name: 'Installation', count: 60, size: 'text-sm font-medium text-gray-800' },
    { name: 'RAC', count: 58, size: 'text-sm font-medium text-gray-800' },
    { name: 'Security', count: 58, size: 'text-sm font-medium text-gray-800' },
    { name: 'APEX', count: 57, size: 'text-xs font-medium text-gray-700' },
    { name: 'SQLDEV', count: 56, size: 'text-xs font-medium text-gray-700' },
    { name: 'BI', count: 55, size: 'text-xs font-medium text-gray-700' },
    { name: 'ASM', count: 50, size: 'text-xs font-medium text-gray-700' },
    { name: 'Exadata', count: 47, size: 'text-xs font-semibold text-gray-800' },
    { name: 'EM', count: 38, size: 'text-xs text-gray-600' },
    { name: 'OWB', count: 37, size: 'text-xs text-gray-600' },
    { name: 'Storage Management', count: 36, size: 'text-xs text-gray-700' },
    { name: 'Manageability', count: 32, size: 'text-xs text-gray-700' },
    { name: 'WebLogic Server', count: 32, size: 'text-xs text-gray-700' },
    { name: 'HA', count: 31, size: 'text-xs text-gray-600' },
    { name: 'High Availability', count: 31, size: 'text-xs text-gray-700' },
    { name: 'Administration', count: 30, size: 'text-xs text-gray-700' },
    { name: 'TimesTen', count: 30, size: 'text-xs text-gray-700' },
    { name: 'Database Machine', count: 26, size: 'text-xs text-gray-700' },
    { name: 'Tuning', count: 25, size: 'text-[11px] text-gray-600' },
    { name: 'ODI', count: 24, size: 'text-[11px] text-gray-600' },
    { name: '.NET', count: 23, size: 'text-[11px] text-gray-600' },
    { name: 'Clusterware', count: 23, size: 'text-[11px] text-gray-600' },
    { name: 'Data Modeler', count: 22, size: 'text-[11px] text-gray-600' },
    { name: 'Data Warehousing', count: 22, size: 'text-[11px] text-gray-600' },
    { name: 'Dataguard', count: 22, size: 'text-[11px] text-gray-600' },
    { name: 'SQL', count: 22, size: 'text-[11px] text-gray-600' },
    { name: 'Identity Manager', count: 20, size: 'text-[11px] text-gray-600' },
    { name: 'Performance', count: 19, size: 'text-[11px] text-gray-600' },
  ];

  return (
    <div className="w-full bg-white text-gray-800 p-4 sm:p-6 rounded-lg border border-gray-300 shadow-xl font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-[#E61C00] font-black text-xl tracking-widest">ORACLE</span>
          <span className="text-gray-600 text-base font-medium">Learning Library</span>
        </div>
        <span className="text-xs text-gray-600">Login</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center bg-gradient-to-b from-gray-100 to-gray-300 rounded-md border border-gray-300 overflow-hidden mb-4 text-xs font-semibold">
        <div className="bg-[#D91B00] text-white px-5 py-2.5">Home</div>
        <div className="px-5 py-2.5 text-gray-700 border-r border-gray-300">Advanced Search</div>
        <div className="px-5 py-2.5 text-gray-700 border-r border-gray-300">Bookmarks</div>
        <div className="px-5 py-2.5 text-gray-700 border-r border-gray-300">My Reviews</div>
        <div className="px-5 py-2.5 text-gray-700 border-r border-gray-300">About</div>
      </div>

      {/* Search Box */}
      <div className="max-w-md mx-auto mb-5">
        <div className="w-full border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2 bg-gray-50 shadow-inner">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">Search Oracle By Example tutorials, videos, and labs...</span>
        </div>
      </div>

      {/* 4 Featured Modules */}
      <div className="border border-gray-300 rounded-md p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
        {boxes.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center px-3 pt-2">
            <div className={`w-24 h-28 rounded shadow-md bg-gradient-to-b ${b.color} flex flex-col justify-between p-2 mb-3 border border-gray-300`}>
              <div className="text-[8px] font-bold leading-tight mt-2">{b.edition}</div>
              <div className={`${b.banner} text-white text-[8px] font-bold py-0.5 px-1 tracking-wider uppercase`}>
                ORACLE
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-snug">{b.caption}</p>
          </div>
        ))}
      </div>

      {/* Tag Cloud */}
      <div className="border border-gray-300 rounded-md p-4 bg-white">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          {tags.map((t, i) => (
            <span key={i} className={t.size}>
              {t.name} <span className="text-gray-400 font-normal">{t.count}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Image 9.png — Oracle Database Vault Controls for Privileged Accounts */
const OracleDatabaseVaultArtifact: React.FC = () => (
  <div className="w-full bg-white text-gray-900 p-6 sm:p-10 rounded-lg border border-gray-300 shadow-xl">
    {/* Top Oracle Red Bar */}
    <div className="flex items-center gap-2 mb-8">
      <div className="h-5 bg-gradient-to-r from-[#D91B00] to-[#B01200] flex-1 -skew-x-12" />
      <div className="h-5 w-24 bg-gray-200 -skew-x-12" />
    </div>

    <h3 className="text-lg sm:text-xl font-normal text-[#E61C00] mb-3">
      Controls for Privileged Accounts
    </h3>
    <p className="text-xs sm:text-[13px] text-gray-800 leading-relaxed mb-4">
      Privileged user accounts are common place in all databases and are used by DBAs for daily tasks such as user management, performance tuning, replication, patching, backup and recovery, space management, startup and shutdown. Many Oracle predefined system users such as SYSTEM and roles such as DBA role can access any application data in the database. Due to their wide ranging access, most organizations enforce strict processes and internal rules on who can be granted privileged access or DBA access to the databases. These accounts and roles, however, have also been a prime target of hackers because of their unimpeded access inside the database. They have also been misused by insiders to gain access to confidential information.
    </p>

    <h4 className="text-sm font-semibold text-gray-900 mb-2">
      Privilege User Access Controls on Application Data with Realms
    </h4>
    <p className="text-xs sm:text-[13px] text-gray-800 leading-relaxed mb-3">
      Increasing controls on privileged and DBA accounts is vital to improving security. Oracle Database Vault creates a highly restricted application environment (&ldquo;Realm&rdquo;) inside the Oracle database that prevents access to application data from privileged accounts while continuing to allow the regular authorized administrative activities on the database. Realms can be placed around all or specific application tables and schemas to protect them from unauthorized access while continuing to allow access to owners of those tables and schemas, including those who have been granted direct access to those objects.
    </p>
    <p className="text-xs sm:text-[13px] text-gray-800 leading-relaxed mb-6">
      Figure 1 below shows how an Oracle Database Vault Realm blocks a DBA or someone masquerading as a DBA. It also shows how applications with powerful system-wide privileges can also be blocked from looking at other application data inside the database.
    </p>

    {/* Figure 1 Diagram */}
    <div className="max-w-xl mx-auto border border-gray-200 rounded-lg p-5 bg-gray-50">
      <div className="space-y-3">
        {/* Row 1: DBA blocked */}
        <div className="border-2 border-[#7FA3C7] bg-white p-3 flex items-center justify-between gap-4">
          <div className="text-center shrink-0 w-16">
            <div className="text-xs font-bold text-gray-900">DBA</div>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <code className="text-xs font-mono font-bold text-gray-900">select * from HR.emp</code>
            <div className="flex-1 h-1 bg-[#E61C00]" />
            <span className="px-1.5 py-0.5 rounded bg-yellow-300 text-[#E61C00] font-bold text-[10px]">
              BLOCKED
            </span>
          </div>
        </div>

        {/* Row 2: HR allowed into HR Realm */}
        <div className="border-2 border-[#7FA3C7] bg-white p-3 flex items-center justify-between gap-4">
          <div className="text-center shrink-0 w-16">
            <div className="text-xs font-bold text-gray-900">HR</div>
          </div>
          <div className="flex-1 h-1 bg-[#E61C00]" />
          <div className="w-40 bg-[#E61C00] text-white p-2.5 text-center rounded shadow">
            <div className="text-xs font-bold">HR Realm</div>
          </div>
        </div>

        {/* Row 3: FIN blocked from HR, allowed into Fin Realm */}
        <div className="border-2 border-[#7FA3C7] bg-white p-3 flex items-center justify-between gap-4">
          <div className="text-center shrink-0 w-16">
            <div className="text-xs font-bold text-gray-900">FIN</div>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-[#E61C00]" />
          </div>
          <div className="w-40 bg-[#E61C00] text-white p-2.5 text-center rounded shadow">
            <div className="text-xs font-bold">Fin Realm</div>
          </div>
        </div>
      </div>
      <div className="text-[11px] text-gray-600 mt-3">
        Figure 1. Oracle Database Vault Control for Privileged Accounts
      </div>
    </div>
  </div>
);

/* Image 10.png — Onboarding flow */
const OnboardingFlowArtifact: React.FC = () => {
  const steps = [
    {
      label: 'Confirmed',
      icon: User,
      text: 'Student logs in and views confirmed schedules',
    },
    {
      label: 'Fulfilled',
      icon: FileText,
      text: 'Student starts fulfilling onboarding requirements for a schedule.',
    },
    {
      label: 'Reviewed',
      icon: Search,
      text: 'Onboarding review team reviews the fulfilled requirements.',
    },
    {
      label: 'Onboarded',
      icon: Check,
      text: 'Once all requirements are approved, the student will be denoted as compliant.',
    },
  ];

  return (
    <div className="w-full bg-[#BCE6EA] text-gray-900 p-6 sm:p-10 rounded-lg border border-white/15 shadow-xl">
      <h3 className="text-3xl sm:text-4xl font-serif text-[#084C7F] mb-6">
        Onboarding flow
      </h3>

      {/* Top Bracket over steps 2-4 */}
      <div className="hidden sm:grid grid-cols-4 mb-2">
        <div />
        <div className="col-span-3 text-center">
          <div className="text-xs font-semibold text-gray-900 mb-1">
            Sites can view this part of the process.
          </div>
          <div className="h-4 border-t-2 border-l-2 border-r-2 border-[#2B6CB0]" />
        </div>
      </div>

      {/* 4 Circles & Chevrons */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#E62E7A] flex items-center justify-center mb-5 bg-[#BCE6EA]">
                <Icon
                  className={`w-12 h-12 ${
                    idx === 3 ? 'text-green-600 stroke-[3]' : 'text-[#084C7F]'
                  }`}
                />
              </div>
              <div className="w-full bg-[#E62E7A] text-white text-center py-2 px-3 font-medium text-xs sm:text-sm rounded-sm mb-3 shadow">
                {s.label}
              </div>
              <p className="text-xs text-gray-900 leading-relaxed text-left w-full px-1">
                {s.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center text-xs text-gray-900 mt-8">
        <span className="font-bold text-[#E62E7A]">Note:</span> Sites can also override the status filled in by the approval team.
      </div>
    </div>
  );
};

/* Image 11.png — Core42 The Infrastructure Journey */
const Core42JourneyArtifact: React.FC = () => (
  <div className="w-full bg-black text-white p-6 sm:p-10 rounded-lg border border-white/15 shadow-xl">
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
          The <span className="text-[#00D296]">Infrastructure Journey</span>
        </h3>
        <p className="text-base sm:text-xl text-gray-200 mt-1">
          <span className="text-[#00D296]">Shift</span> from Control to Chaos, and Back
        </p>
      </div>
      <div className="text-right shrink-0">
        <div className="text-xl font-bold tracking-tighter">
          c<span className="text-[#00D296]">o</span>re<span className="font-light">42</span>
        </div>
        <div className="text-[9px] text-gray-400">A G42 company</div>
      </div>
    </div>

    {/* 3 Circles */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-8">
      {/* Circle 1 */}
      <div className="aspect-square max-w-[260px] w-full mx-auto rounded-full border-2 border-white bg-black flex flex-col items-center justify-center p-6 text-center">
        <div className="text-base sm:text-lg font-bold uppercase mb-4">ON-PREMISE</div>
        <div className="space-y-2 text-xs sm:text-sm text-gray-200">
          <div><span className="text-red-500 font-bold">X</span> Server rooms</div>
          <div><span className="text-red-500 font-bold">X</span> Physical infra</div>
          <div><span className="text-red-500 font-bold">X</span> Local control</div>
        </div>
      </div>

      {/* Circle 2 */}
      <div className="aspect-square max-w-[260px] w-full mx-auto rounded-full border-2 border-white bg-black flex flex-col items-center justify-center p-6 text-center">
        <div className="text-base sm:text-lg font-bold uppercase mb-4">PUBLIC CLOUD</div>
        <div className="space-y-2 text-xs sm:text-sm text-gray-200">
          <div><span className="text-red-500 font-bold">X</span> Compliance</div>
          <div><span className="text-red-500 font-bold">X</span> Data residency</div>
        </div>
      </div>

      {/* Circle 3 */}
      <div className="aspect-square max-w-[260px] w-full mx-auto rounded-full border-2 border-white bg-[#00CE93] text-white flex flex-col items-center justify-center p-6 text-center shadow-[0_0_40px_rgba(0,206,147,0.25)]">
        <div className="text-base sm:text-lg font-bold uppercase leading-tight mb-4">
          SOVEREIGN<br />CLOUD
        </div>
        <div className="text-xs sm:text-sm font-medium leading-snug">
          <span className="inline-block bg-green-600 text-white px-1 rounded mr-1">✓</span>
          Compliant,<br />secure and fully<br />protected
        </div>
      </div>
    </div>

    {/* Bottom Control -> Chaos -> Gaining Back Control */}
    <div className="grid grid-cols-3 items-center text-center pt-4 border-t border-white/10 text-xs sm:text-sm font-medium tracking-wider uppercase">
      <div>CONTROL</div>
      <div>CHAOS</div>
      <div className="leading-tight">
        GAINING<br />BACK<br />CONTROL
      </div>
    </div>
  </div>
);

/* Image 12.png — Appsian Homepage Hero */
const AppsianHeroArtifact: React.FC = () => (
  <div className="w-full rounded-lg overflow-hidden border border-white/15 shadow-xl bg-gradient-to-br from-[#06183E] via-[#0B2559] to-[#081B42] text-white">
    {/* Top Banner */}
    <div className="bg-[#0096D6] text-white text-center py-1.5 px-4 text-[11px] underline">
      Appsian CEO Statement Regarding COVID-19
    </div>

    {/* Nav */}
    <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-2 font-bold tracking-[0.25em] text-sm sm:text-base">
        <span className="text-[#00AEEF] font-black text-xl tracking-normal">A</span> APPSIAN
      </div>
      <div className="hidden md:flex items-center gap-5 text-[10px] font-semibold tracking-wider uppercase text-gray-200">
        <span>PRODUCTS ▾</span>
        <span>SOLUTIONS ▾</span>
        <span>RESOURCES ▾</span>
        <span>CUSTOMERS ▾</span>
        <span>COMPANY ▾</span>
        <span>BLOG</span>
        <span className="bg-[#FF6B00] text-white px-3 py-2 rounded">Request A Demo</span>
      </div>
    </div>

    {/* Hero Content */}
    <div className="p-6 sm:p-12">
      <h3 className="text-xl sm:text-3xl font-bold leading-snug max-w-3xl mb-4">
        Comprehensive Data Security and Privacy Solutions for PeopleSoft and SAP (ECC &amp; S/4HANA)
      </h3>
      <div className="text-xs sm:text-sm font-bold tracking-wide uppercase text-gray-100 mb-6">
        INTRUSION PREVENTION | DATA LOSS PREVENTION | THREAT DETECTION &amp; RESPONSE
      </div>
      <div className="inline-block bg-[#FF6B00] text-white text-xs font-bold px-6 py-3 rounded mb-10">
        Why Appsian
      </div>

      <div className="text-center">
        <div className="text-xs font-bold mb-5">Trusted By 250+ Customers Worldwide</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-center text-center text-xs font-bold text-white/90">
          <div className="bg-white text-[#0B2559] py-2 px-2 rounded-xs font-serif">WELLS FARGO</div>
          <div className="bg-white text-[#0B2559] py-2 px-2 rounded-xs font-serif">GAP</div>
          <div className="py-2 px-2 tracking-widest">GEICO</div>
          <div className="py-2 px-2 text-[10px]">Hackensack<br />Meridian Health</div>
          <div className="py-2 px-2 text-[10px]">AdventistHealth</div>
          <div className="py-2 px-2 font-serif text-base">Ohio</div>
          <div className="border border-white/60 rounded-full py-1.5 px-2">H-E-B</div>
        </div>
      </div>
    </div>
  </div>
);

/* Image 13.png — Why Appsian */
const AppsianWhyArtifact: React.FC = () => (
  <div className="w-full rounded-lg overflow-hidden border border-white/15 shadow-xl bg-white text-gray-900">
    <div className="bg-gradient-to-r from-[#06183E] to-[#0E2F6E] text-white p-6 sm:p-10">
      <div className="text-xs font-bold tracking-[0.25em] mb-6 text-gray-300">
        <span className="text-[#00AEEF]">A</span> APPSIAN
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-2">Why Appsian</h3>
      <p className="text-xs sm:text-sm text-gray-200 mb-4">
        Appsian Is The Global Leader In Securing ERP Data And Helping Organizations Enable Remote Access
      </p>
      <div className="text-[11px] text-gray-300 border-t border-white/15 pt-3">
        Home / Company / <span className="text-gray-400">Why Appsian</span>
      </div>
    </div>

    <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFAFA]">
      <div className="lg:col-span-6 lg:border-r-2 lg:border-[#FF6B00] lg:pr-8">
        <div className="text-xl sm:text-2xl font-light text-[#0B2559] leading-snug mb-4 uppercase">
          64% OF ERP [ORACLE AND SAP] DEPLOYMENTS HAVE BEEN BREACHED IN THE LAST 24 MONTHS
        </div>
        <div className="text-[11px] text-gray-400">
          *IDC. 2019. ERP Security: The Reality of Business Application Protection
        </div>
      </div>
      <div className="lg:col-span-6">
        <h4 className="text-base sm:text-lg font-bold text-[#0B2559] mb-3">
          Security and Compliance Risks Threaten Your ERP Each Day. Are you Protected?
        </h4>
        <p className="text-xs sm:text-sm text-[#0B2559]/90 leading-relaxed">
          With the majority of Oracle and SAP ERP customers recently experiencing a breach, it has become evident that these systems pose unique challenges. In order to safeguard these systems from the myriad of internal and external threats that try to exploit them, organizations must enhance their <span className="font-semibold">Access Controls, Compliance &amp; Audit, and Threat Protection</span> strategies. Fortunately, Appsian can help.
        </p>
      </div>
    </div>
  </div>
);

/* Image 14.png — Appsian 3 Solution Pillars */
const AppsianPillarsArtifact: React.FC = () => {
  const pillars = [
    {
      title: 'Control User Access',
      desc: 'Reduce risks from unauthorized data access. Strengthen policies designed to ensure business integrity.',
      cta: 'Learn More',
    },
    {
      title: 'Enable Compliance and Audit',
      desc: 'Achieve complete visibility over data access. Leverage actionable insights and automate critical compliance audit functions.',
      cta: 'Explore Why',
    },
    {
      title: 'Advanced Threat Protection',
      desc: 'Protect ERP data from external and internal threats. Integrate solutions designed to prevent unwanted exposure and data breaches.',
      cta: 'Discover How',
    },
  ];

  return (
    <div className="w-full rounded-lg overflow-hidden border border-white/15 shadow-xl bg-white">
      <div className="bg-[#06183E] px-6 py-4 flex items-center justify-between text-white">
        <div className="font-bold tracking-[0.25em] text-sm">
          <span className="text-[#00AEEF]">A</span> APPSIAN
        </div>
        <span className="bg-[#FF6B00] text-white text-[10px] font-bold px-3 py-1.5 rounded">
          Request A Demo
        </span>
      </div>
      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
        {pillars.map((p, i) => (
          <div key={i} className="bg-[#EFEFEF] flex flex-col justify-between rounded-xs overflow-hidden shadow">
            <div className="h-28 bg-gradient-to-r from-[#061E45] via-[#0B4F8A] to-[#061E45] border-t-2 border-[#00AEEF] flex items-center justify-center">
              <Shield className="w-10 h-10 text-[#00AEEF]" />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#0088CC] mb-3">{p.title}</h4>
                <p className="text-xs text-gray-800 leading-relaxed mb-6">{p.desc}</p>
              </div>
              <div className="bg-[#FF6B00] text-white font-bold text-xs py-2.5 px-4 rounded-xs">
                {p.cta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Image 15.png — Appsian Key Messaging Slide */
const AppsianMessagingArtifact: React.FC = () => (
  <div className="w-full rounded-lg overflow-hidden border border-gray-300 shadow-xl bg-white text-gray-900">
    {/* Top Blue Bar & Logo */}
    <div className="flex items-center justify-between">
      <div className="h-10 bg-gradient-to-r from-[#1E90FF] to-[#38A1F3] flex-1 mr-6" />
      <div className="pr-6 py-2 font-bold tracking-[0.25em] text-sm text-gray-600 shrink-0">
        <span className="text-[#00AEEF] font-black">A</span> APPSIAN
      </div>
    </div>

    <div className="p-6 sm:p-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Key Messaging</h3>

      <div className="space-y-6 text-xs sm:text-sm text-gray-900 pl-4">
        <div>
          <div className="font-bold mb-1.5">
            • Protection of user data in a dynamic environment (especially during Covid, remote access)
          </div>
          <div className="pl-6 space-y-1 text-gray-800">
            <div>– Static access control rules do not secure your data adequately.</div>
            <div>– Enable contextual, attribute-based rules</div>
          </div>
        </div>

        <div>
          <div className="font-bold mb-1.5">
            • User-friendly security minimizes friction in everyday usage
          </div>
          <div className="pl-6 space-y-1 text-gray-800">
            <div>– Control access, allow the right people to access data at the right time and place</div>
            <div>– Strike a balance between security &amp; productivity</div>
          </div>
        </div>

        <div>
          <div className="font-bold mb-1.5">
            • Cost-effective alternative
          </div>
          <div className="pl-6 space-y-1 text-gray-800">
            <div>– Appsian for PeopleSoft removes the need to rip &amp; replace your ERP system</div>
            <div>– Get modern controls at a fraction of the cost, without moving to Cloud.</div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-[#38A1F3] mt-10" />
    </div>
  </div>
);
