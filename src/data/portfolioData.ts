export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface CaseStudyArtifact {
  id:
    | 'appsian-peoplesoft'
    | 'appsian-why'
    | 'core42-journey'
    | 'oracle-db-vault'
    | 'onboarding-flow'
    | 'nanoheal-automation'
    | 'valiantys-priorities'
    | 'valiantys-factors';
  title: string;
  caption: string;
  type: string;
  /** Optional static image path override if replacing the built-in high-DPI reproduction */
  customImageUrl?: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  badge: string;
  title: string;
  challenge: string;
  contribution: string;
  metricIcon: 'database' | 'network' | 'shield' | 'chart' | 'layers';
  metricTitle: string;
  metricSub: string;
  period: string;
  role: string;
  domain: string;
  executiveSummary: string;
  problemStatement: string[];
  strategicApproach: {
    heading: string;
    body: string;
  }[];
  deliverables: string[];
  impactMetrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  artifacts: CaseStudyArtifact[];
}

export interface ActiveLeadershipPillar {
  icon: 'reposition' | 'seo' | 'reporting' | 'team';
  title: string;
  description: string;
}

export interface AdvisoryProject {
  id: string;
  company: string;
  icon: 'terminal' | 'shield' | 'cpu' | 'network' | 'lock';
  title: string;
  description: string;
  focus: string;
  deliverable: string;
  linkedCaseStudyId?: string;
}

export interface MethodologyPhase {
  phase: string;
  icon: 'search' | 'compass' | 'rocket' | 'chart';
  title: string;
  description: string;
  output: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Tanmay Choudhury',
    roleKicker: 'PRODUCT MARKETING LEADERSHIP',
    headlinePrefix: 'Product Marketing for Enterprise Technology ',
    headlineHighlight: 'Too Complex',
    headlineSuffix: ' to Sell Itself',
    subheadline:
      '12+ years translating complex technology into positioning, launches, and revenue-generating GTM. 8 years at Oracle • 5+ zero-to-one PMM builds.',
    specializations: [
      { icon: 'database', label: 'Data Architecture' },
      { icon: 'ai', label: 'AI Infrastructure' },
      { icon: 'security', label: 'Cybersecurity' },
    ],
    currentRoleBadge: {
      title: 'Tanmay Choudhury',
      subtitle: 'Product Marketing Leader',
    },
    email: 'tanmay1612@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/tanmaychoudhury/',
    location: 'Global / Enterprise B2B',
  },

  metrics: [
    {
      value: '12+',
      label: 'YEARS EXPERIENCE',
      subtext: 'Technical B2B Product Marketing',
    },
    {
      value: '8+',
      label: 'YEARS AT SCALE',
      subtext: 'Enterprise Rigor at Oracle',
    },
    {
      value: '$1.2M+',
      label: 'OUTBOUND PIPELINE',
      subtext: 'Qualified Pipeline Generated',
    },
    {
      value: '2.3×',
      label: 'ORGANIC SCALE',
      subtext: 'Monthly Organic Web Growth',
    },
  ] as MetricItem[],

  caseStudiesSection: {
    kicker: 'ENTERPRISE CASE STUDIES',
    title: 'Quantified GTM Execution',
    subtitle:
      'Proven strategic frameworks deployed across enterprise core tech, infrastructure security, and zero-to-one startups.',
  },

  caseStudies: [
    {
      id: 'oracle',
      company: 'ORACLE',
      badge: 'Enterprise Scale',
      title: 'Technical Product Marketing & Enterprise Database GTM',
      challenge:
        'Translating complex database security, storage, and developer APIs into structured adoption paths across global enterprise accounts.',
      contribution:
        'Owned launch enablement and GTM execution across 25+ cross-functional contributors; established Oracle Learning Library for developer education.',
      metricIcon: 'database',
      metricTitle: '3 Major Releases',
      metricSub: 'Oracle 12c, 18c, 19c • +30% consumption',
      period: '8 Years at Oracle Corporation',
      role: 'Senior Technical Product Marketing & Enablement Lead',
      domain: 'Enterprise Database Architecture · Security · Cloud Migration',
      executiveSummary:
        'Across 8 years and three flagship database generations (Oracle 12c, 18c, and 19c), I led technical product marketing, security realm architecture communication, and developer adoption programs—bridging core database engineering with global enterprise field teams and C-level IT buyers.',
      problemStatement: [
        'Enterprise customers faced steep technical barriers when adopting multitenant architecture, preventive database security controls (Oracle Database Vault Mandatory Realms), and cloud-ready database capabilities.',
        'Global sales and solution engineering teams needed clear use-case taxonomy, compliance narratives, and hands-on technical assets to move customers from legacy versions into modern releases.',
        'Product education across 25+ engineering and PM contributors lacked a unified self-serve curriculum and structured onboarding journey.',
      ],
      strategicApproach: [
        {
          heading: 'Technical Value Translation for Database Security & Core Architecture',
          body: 'Distilled low-level kernel security capabilities—such as Oracle Database Vault Mandatory Realms for maintenance, entitlement controls, and incident response—into clear architectural diagrams and compliance use-case matrices for CISOs and DBAs.',
        },
        {
          heading: 'Cross-Functional Release GTM (Oracle 12c, 18c, 19c)',
          body: 'Orchestrated launch readiness across 25+ product managers, engineers, and field specialists, standardizing release messaging hierarchies, solution briefs, and customer migration playbooks.',
        },
        {
          heading: 'Oracle Learning Library & Structured Onboarding Flows',
          body: 'Architected modular technical learning paths and end-to-end onboarding workflows (Confirmed → Fulfilled → Reviewed → Onboarded) that drove a +30% lift in learning consumption across global enterprise accounts.',
        },
      ],
      deliverables: [
        'Oracle 12c, 18c, and 19c Release Positioning & Technical Enablement Kits',
        'Oracle Database Vault Mandatory Realms Technical Whitepapers & Use-Case Architecture',
        'Oracle Learning Library (OLL) Developer & DBA Curriculum Architecture',
        'Multi-stage Enterprise Onboarding & Compliance Review Workflows',
      ],
      impactMetrics: [
        {
          value: '3 Releases',
          label: 'FLAGSHIP LAUNCHES',
          detail: 'Core GTM execution across Oracle Database 12c, 18c, and 19c',
        },
        {
          value: '+30%',
          label: 'CONTENT CONSUMPTION',
          detail: 'Sustained increase in technical enablement & learning adoption',
        },
        {
          value: '25+',
          label: 'CONTRIBUTORS ALIGNED',
          detail: 'Cross-functional PM, engineering, and field marketing contributors led',
        },
      ],
      artifacts: [
        {
          id: 'oracle-db-vault',
          title: 'Oracle Database Vault — Mandatory Realm Architecture & Use Cases',
          caption:
            'Technical product marketing architecture illustrating how Mandatory Realms block unauthorized privileged DBA queries while preserving application-tier HR and Finance access during maintenance and incident response.',
          type: 'Technical Whitepaper & Architecture Diagram',
        },
        {
          id: 'onboarding-flow',
          title: 'Multi-Stage Compliance & Schedule Onboarding Workflow',
          caption:
            'Process architecture mapping the 4-stage compliance workflow (Confirmed → Fulfilled → Reviewed → Onboarded) with site-level visibility and approval override governance.',
          type: 'Process & Enablement Flow',
        },
      ],
    },
    {
      id: 'nanoheal',
      company: 'NANOHEAL',
      badge: 'Outbound GTM',
      title: 'Commercial Product Marketing & Outbound Sales Acceleration',
      challenge:
        'Evolving market positioning from reactive IT ticketing to autonomous endpoint healing while setting up an outbound motion from scratch.',
      contribution:
        'Led cross-functional marketing pod, built ICP-based outbound engine, structured high-velocity SDR playbooks and objection handling.',
      metricIcon: 'network',
      metricTitle: '$1.2M Pipeline',
      metricSub: '-22% sales cycle (9 to 7 mo)',
      period: 'Zero-to-One Outbound & Commercial Repositioning',
      role: 'Product Marketing & Growth Lead',
      domain: 'Autonomous Endpoint Management · Digital Employee Experience (DEX)',
      executiveSummary:
        'Repositioned Nanoheal from an IT support automation tool into an enterprise Digital Experience Automation and self-healing endpoint platform. Built the outbound GTM engine from zero, generating $1.2M+ in qualified enterprise pipeline and compressing the average enterprise sales cycle by 22%.',
      problemStatement: [
        'Prospective enterprise IT buyers perceived endpoint tools as commodities tied to reactive helpdesk ticketing rather than proactive, zero-code self-healing.',
        'The organization lacked a structured outbound prospecting engine, ICP segmentation, and quantified enterprise proof points to win global workplace transformation deals.',
        'Sales cycles averaged 9 months due to fragmented technical objection handling and unclear ROI framing for VP of Infrastructure and EUC personas.',
      ],
      strategicApproach: [
        {
          heading: 'Category Repositioning: Reactive IT to Self-Healing DEX',
          body: 'Reframed the product narrative around zero-code Digital Experience Automation—emphasizing real-time remediation, compliance hardening, and measurable ticket deflection.',
        },
        {
          heading: 'Quantified Enterprise Customer Proof (Toyota Material Handling Europe)',
          body: 'Codified flagship enterprise deployment metrics (1,000 client machines across 21 countries, 120 EUC applications, 39 automated use cases, and 20% workplace tower ticket volume reduction) into high-converting sales collateral.',
        },
        {
          heading: 'Full-Funnel Outbound Pod & SDR Enablement',
          body: 'Built ICP-segmented outbound sequences, persona-specific objection battlecards, and executive briefing decks that shortened deal progression from 9 months to 7 months.',
        },
      ],
      deliverables: [
        'Digital Experience Automation Core Positioning & Messaging Hierarchy',
        'Toyota Material Handling Europe (TMHE) Quantified Value Case Deck',
        'ICP Outbound Playbooks, Multi-Touch SDR Sequences & Objection Battlecards',
        'Enterprise ROI Calculator & Workplace Tower Deflection Framework',
      ],
      impactMetrics: [
        {
          value: '$1.2M+',
          label: 'QUALIFIED PIPELINE',
          detail: 'Net-new outbound enterprise pipeline generated from scratch',
        },
        {
          value: '-22%',
          label: 'SALES CYCLE REDUCTION',
          detail: 'Compressed enterprise deal cycle from 9 months down to 7 months',
        },
        {
          value: '20%',
          label: 'CUSTOMER TICKET DEFLECTION',
          detail: 'Validated workplace tower ticket volume reduction in enterprise proof',
        },
      ],
      artifacts: [
        {
          id: 'nanoheal-automation',
          title: 'Nanoheal Digital Experience Automation & TMHE Enterprise Proof',
          caption:
            'Executive sales enablement slide pairing Nanoheal’s zero-code self-healing positioning with quantified deployment outcomes at Toyota Material Handling Europe across 21 countries.',
          type: 'Enterprise Enablement & Customer Proof Deck',
        },
      ],
    },
    {
      id: 'appsian',
      company: 'APPSIAN SECURITY',
      badge: 'ERP Cyber & IAM',
      title: 'ERP Data Security Positioning & Multi-Tier Messaging',
      challenge:
        'Communicating the architectural value of lightweight ERP data security for PeopleSoft & SAP without custom developer code overhead.',
      contribution:
        'Overhauled site information architecture, messaging hierarchy, buyer persona roadmaps, and customer insight playbooks.',
      metricIcon: 'shield',
      metricTitle: '2.3× Traffic Lift',
      metricSub: '+21% Qualified Leads • 18+ Upsells',
      period: 'Enterprise ERP Cybersecurity Repositioning',
      role: 'Product Marketing Lead',
      domain: 'ERP Data Security · IAM · PeopleSoft & SAP Compliance',
      executiveSummary:
        'Architected a complete messaging, positioning, and web information architecture overhaul for Appsian Security—translating deep ERP security controls (fine-grained access, MFA, and user behavior analytics for PeopleSoft and SAP) into high-converting enterprise narratives that drove a 2.3× organic traffic lift and 18+ existing-account upsells.',
      problemStatement: [
        'Legacy ERP systems (Oracle PeopleSoft and SAP) were never architected for zero-trust remote access, leaving 64% of deployments exposed to internal and external breaches.',
        'Existing messaging was overly focused on feature mechanics rather than the urgent business risk of GDPR/SOX non-compliance and ERP data exfiltration.',
        'Website information architecture failed to segment buyers by ERP ecosystem (PeopleSoft vs. SAP vs. Oracle EBS) or buyer role (CISO vs. ERP Administrator).',
      ],
      strategicApproach: [
        {
          heading: 'Risk-Led Executive Narrative ("Why Appsian")',
          body: 'Anchored top-of-funnel executive messaging on analyst-validated urgency (IDC: 64% of Oracle and SAP ERP deployments breached in 24 months) paired with three clear pillars: Access Controls, Compliance & Audit, and Threat Protection.',
        },
        {
          heading: 'Application-Specific Solution Architecture (PeopleSoft & SAP)',
          body: 'Built dedicated product and solution landing hierarchies demonstrating how Appsian closes native ERP security gaps across HCM and FSCM without expensive custom code or ERP upgrades.',
        },
        {
          heading: 'Customer Expansion & Insight Playbooks',
          body: 'Equipped account executives and CSMs with persona roadmaps and social proof from marquee enterprise customers (Wells Fargo, GAP, GEICO, Hackensack Meridian Health, Adventist Health, State of Ohio, H-E-B), unlocking 18+ upsells.',
        },
      ],
      deliverables: [
        'Full Website Information Architecture & Solution Page Overhaul',
        '"Why Appsian" Corporate Positioning & Analyst-Backed Risk Narrative',
        'PeopleSoft & SAP Multi-Tier Messaging Frameworks',
        'Customer Expansion Playbooks & Enterprise Reference Architecture',
      ],
      impactMetrics: [
        {
          value: '2.3×',
          label: 'ORGANIC TRAFFIC LIFT',
          detail: 'Sustained monthly organic web growth following IA and messaging overhaul',
        },
        {
          value: '+21%',
          label: 'QUALIFIED LEADS',
          detail: 'Increase in marketing-qualified enterprise demo requests',
        },
        {
          value: '18+',
          label: 'ENTERPRISE UPSELLS',
          detail: 'Expansion deals closed across installed base accounts',
        },
      ],
      artifacts: [
        {
          id: 'appsian-peoplesoft',
          title: 'Comprehensive Data Security for PeopleSoft — Product Page Architecture',
          caption:
            'Restructured product page combining clear value proposition, enterprise trust validation (Wells Fargo, GAP, GEICO, H-E-B), and problem-solution framing for PeopleSoft HCM/FSCM.',
          type: 'Web Information Architecture & Product Messaging',
        },
        {
          id: 'appsian-why',
          title: '"Why Appsian" — Category Risk & ERP Breach Positioning',
          caption:
            'Executive positioning page leveraging IDC ERP breach data (64% breached in 24 months) to establish urgency around Access Controls, Compliance & Audit, and Threat Protection.',
          type: 'Corporate Positioning & Messaging Hierarchy',
        },
      ],
    },
    {
      id: 'core42',
      company: 'CORE42 (A G42 COMPANY)',
      badge: 'Sovereign Cloud & AI',
      title: 'AI Infrastructure Positioning & Enterprise Sovereign Cloud GTM',
      challenge:
        'Translating sovereign cloud architectures and high-density AI infrastructure capabilities for compliance-heavy, regulated enterprise buyers.',
      contribution:
        'Strategic sales enablement advisor; built executive pitch decks, competitive battlecards, packaging frameworks, and market taxonomy.',
      metricIcon: 'chart',
      metricTitle: '2 Enterprise Wins',
      metricSub: 'Sovereign AI Infrastructure Conversion',
      period: 'Strategic GTM & Enablement Advisory',
      role: 'Product Marketing & Sales Enablement Advisor',
      domain: 'Sovereign Cloud · High-Density AI Infrastructure · Regulated Enterprise',
      executiveSummary:
        'Partnered with Core42 (a G42 company) to define market taxonomy, executive pitch narratives, and competitive battlecards for Sovereign Cloud and high-density AI infrastructure—enabling enterprise sales teams to convert regulated public-sector, financial, and energy buyers.',
      problemStatement: [
        'Regulated enterprises and government entities were caught between rigid on-premise server rooms and public cloud environments that created compliance and data residency exposure.',
        'Sales teams needed a crisp executive narrative ("The Infrastructure Journey: Shift from Control to Chaos, and Back") that positioned Sovereign Cloud as the definitive path to regaining control without sacrificing AI scale.',
        'Complex multi-product offerings across sovereign cloud, AI compute clusters, and managed services required unified packaging and competitive battlecards.',
      ],
      strategicApproach: [
        {
          heading: '"Control → Chaos → Gaining Back Control" Executive Narrative',
          body: 'Created the signature 3-stage infrastructure evolution narrative contrasting On-Premise limitations and Public Cloud compliance chaos against Core42’s fully compliant, sovereign cloud architecture.',
        },
        {
          heading: 'Competitive Battlecards & Objection Handling',
          body: 'Armed enterprise account directors with head-to-head positioning against hyperscalers and regional providers around data residency, regulatory sovereignty, and AI cluster economics.',
        },
        {
          heading: 'Solution Packaging & Market Taxonomy',
          body: 'Structured technical capabilities into modular enterprise solution tiers tailored for ministries, banking institutions, and national critical infrastructure.',
        },
      ],
      deliverables: [
        'Executive Pitch Deck ("The Infrastructure Journey: Shift from Control to Chaos, and Back")',
        'Sovereign Cloud & AI Infrastructure Packaging Frameworks',
        'Hyperscaler vs. Sovereign Cloud Competitive Battlecards',
        'Buyer Persona Playbooks for CISO, CIO, and Chief Data Officers',
      ],
      impactMetrics: [
        {
          value: '2 Wins',
          label: 'ENTERPRISE CONVERSIONS',
          detail: 'Direct contribution to flagship Sovereign AI Infrastructure enterprise wins',
        },
        {
          value: '100%',
          label: 'FIELD ADOPTION',
          detail: 'Standardized sovereign cloud pitch narrative across enterprise sales pod',
        },
        {
          value: '3-Tier',
          label: 'TAXONOMY ARCHITECTURE',
          detail: 'Unified messaging across Sovereign Cloud, AI Compute, and Core Services',
        },
      ],
      artifacts: [
        {
          id: 'core42-journey',
          title: 'Core42 — "The Infrastructure Journey: Shift from Control to Chaos, and Back"',
          caption:
            'Executive narrative slide contrasting On-Premise physical constraints and Public Cloud compliance/data-residency risks with Core42’s Sovereign Cloud resolution.',
          type: 'Executive Pitch Deck Narrative',
        },
      ],
    },
    {
      id: 'valiantys',
      company: 'VALIANTYS',
      badge: 'Enterprise Vertical GTM',
      title: 'Atlassian Ecosystem Vertical GTM & Executive Roundtables',
      challenge:
        'Moving upmarket from horizontal IT service delivery to industry-specific vertical value propositions across Utilities, Energy, Financial Services, and Healthcare.',
      contribution:
        'Structured vertical marketing playbooks, macro-industry research decks, and executive roundtable narratives that lifted event lead conversion by +20%.',
      metricIcon: 'layers',
      metricTitle: '+20% Event Leads',
      metricSub: 'Enterprise Vertical GTM Playbooks',
      period: 'Advisory & Vertical GTM Sprint',
      role: 'Product Marketing Consultant',
      domain: 'Enterprise IT · Utilities & Energy · Financial Services · Atlassian Cloud',
      executiveSummary:
        'Developed industry-specific vertical GTM playbooks and C-suite roundtable collateral for Valiantys, translating horizontal enterprise IT and Agile transformation offerings into tailored sector narratives for Utilities, Financial Services, and Healthcare.',
      problemStatement: [
        'Enterprise buyers in regulated industries (Utilities, Energy, Banking) do not buy horizontal "tool migrations"—they buy solutions to sector-specific pressures like net-zero transition, grid reliability, cybersecurity accountability, and talent gaps.',
        'Field marketing and enterprise reps needed authoritative industry research decks to anchor executive roundtables and C-level briefings.',
      ],
      strategicApproach: [
        {
          heading: 'Sector-Native Research & Executive Enablement',
          body: 'Synthesized political, environmental, and workforce macro-factors affecting the utility and financial sectors into visual executive briefing assets.',
        },
        {
          heading: '7-Pillar Industry Priority Mapping',
          body: 'Mapped Valiantys digital innovation, AI/ML analytics, and zero-trust cybersecurity capabilities directly to the 7 core priorities of modern utility and enterprise leaders.',
        },
      ],
      deliverables: [
        'Utility & Energy Sector Executive Briefing Decks',
        'Vertical GTM Playbooks for Financial Services & Healthcare',
        'Executive Roundtable Discussion Guides & Field Enablement Kits',
      ],
      impactMetrics: [
        {
          value: '+20%',
          label: 'EVENT LEAD CONVERSION',
          detail: 'Increase in qualified enterprise leads from vertical executive events',
        },
        {
          value: '3 Verticals',
          label: 'INDUSTRY PLAYBOOKS',
          detail: 'Dedicated GTM frameworks across Utilities, Finance, and Healthcare',
        },
      ],
      artifacts: [
        {
          id: 'valiantys-priorities',
          title: 'Valiantys — "What does the utilities sector need now?"',
          caption:
            '7-node industry priority framework connecting Net Zero acceleration, AI/ML digital innovation, zero-trust cybersecurity, and e-mobility value chain convergence.',
          type: 'Vertical GTM Strategy & Executive Briefing Slide',
        },
        {
          id: 'valiantys-factors',
          title: 'Valiantys — "Factors affecting the utility industry sector"',
          caption:
            'Macro-market analysis across Political, Environmental, and Social/People dimensions used to frame enterprise digital transformation urgency.',
          type: 'Market Intelligence & Field Enablement Asset',
        },
      ],
    },
  ] as CaseStudy[],

  activeLeadership: {
    badge: 'ACTIVE LEADERSHIP',
    period: 'Jan 2026 – Present',
    title: 'Marketing Lead | Appventory',
    stage: 'Stage: Seed to Series A GTM',
    subtitle:
      'Fractional/Advisory leadership brought in to reposition the product, rebuild the marketing function ground-up, and unlock durable customer acquisition.',
    pillars: [
      {
        icon: 'reposition',
        title: 'Core Product Repositioning',
        description:
          'Rebuilt marketing GTM strategy from zero, realigning feature specifications with CFO-level SaaS compliance and vendor visibility narratives.',
      },
      {
        icon: 'seo',
        title: 'High-Intent SEO Wedge',
        description:
          'Architected specialized accountant & auditor programmatic content hubs to capture non-branded bottom-of-funnel search intent.',
      },
      {
        icon: 'reporting',
        title: 'Executive Reporting Cadence',
        description:
          'Established end-to-end pipeline attribution and board-level monthly reporting cadence across inbound and outbound channels.',
      },
      {
        icon: 'team',
        title: 'Team & Field Execution',
        description:
          'Recruited dedicated Demand Gen talent and executed strategic field programs, realizing +20% higher qualified event lead conversions.',
      },
    ] as ActiveLeadershipPillar[],
  },

  advisorySection: {
    kicker: 'ADVISORY & CONSULTING',
    title: 'Independent Product Marketing Practice',
    period: '(2023 – Present)',
    subtitle:
      'Specialized strategic GTM, repositioning, and technical enablement sprints across cybersecurity, AI/ML platforms, and enterprise cloud.',
    projects: [
      {
        id: 'adv-core42',
        company: 'CORE42',
        icon: 'terminal',
        title: 'Sovereign AI & Cloud GTM',
        description:
          'Engineered messaging hierarchy, sales collateral, and buyer persona playbooks for sovereign data centers and private cloud AI suites.',
        focus: 'Focus: Cloud Infra',
        deliverable: 'Strategic Enablement',
        linkedCaseStudyId: 'core42',
      },
      {
        id: 'adv-zenarmor',
        company: 'ZENARMOR',
        icon: 'shield',
        title: 'Next-Gen Firewall Enablement',
        description:
          'Conducted in-depth cybersecurity market intelligence and produced competitive battlecards against legacy enterprise firewalls.',
        focus: 'Focus: Network Sec',
        deliverable: 'Sales Battlecards',
      },
      {
        id: 'adv-waferwire',
        company: 'WAFERWIRE',
        icon: 'cpu',
        title: 'AI/ML Platform Value Translation',
        description:
          'Distilled deep artificial intelligence, analytics, and data pipeline technologies into tangible, C-suite ROI positioning frameworks.',
        focus: 'Focus: Enterprise AI',
        deliverable: 'Messaging Blueprint',
      },
      {
        id: 'adv-valiantys',
        company: 'VALIANTYS',
        icon: 'network',
        title: 'Atlassian Ecosystem Vertical GTM',
        description:
          'Structured vertical marketing playbooks and executive roundtables for financial services and healthcare enterprise customers.',
        focus: 'Focus: Enterprise IT',
        deliverable: '+20% Event Leads',
        linkedCaseStudyId: 'valiantys',
      },
      {
        id: 'adv-lightbeam',
        company: 'LIGHTBEAM',
        icon: 'lock',
        title: 'Data Privacy at IAPP 2024',
        description:
          'Delivered targeted sales enablement playbooks and multi-touch presentation assets for major global privacy officer summit.',
        focus: 'Focus: Data Privacy',
        deliverable: 'Event Enablement',
      },
    ] as AdvisoryProject[],
  },

  methodologySection: {
    kicker: 'EXECUTION METHODOLOGY',
    title: 'How I Work',
    phases: [
      {
        phase: 'PHASE 01',
        icon: 'search',
        title: 'UNDERSTAND',
        description:
          'Uncover real customer pain, buyer personas, and technical product nuances through market research and customer win/loss interviews.',
        output: 'Output: ICP & Insight Report',
      },
      {
        phase: 'PHASE 02',
        icon: 'compass',
        title: 'POSITION',
        description:
          'Craft sharp, differentiated messaging hierarchies that bridge deep technical capabilities into quantifiable business ROI for buyers.',
        output: 'Output: Narrative & Core Decks',
      },
      {
        phase: 'PHASE 03',
        icon: 'rocket',
        title: 'ENABLE',
        description:
          'Equipping sales, SDRs, and channel partners with battlecards, demos, customer slides, and clear objection-handling sequences.',
        output: 'Output: Battlecards & Field Kits',
      },
      {
        phase: 'PHASE 04',
        icon: 'chart',
        title: 'MEASURE',
        description:
          'Aligning GTM execution with pipeline creation, sales cycle compression, web engagement metrics, and expansion revenue.',
        output: 'Output: Pipeline & Cycle Analytics',
      },
    ] as MethodologyPhase[],
  },

  executiveProfile: {
    kicker: 'EXECUTIVE PROFILE',
    title: 'Senior Product Marketing Leadership',
    highlights: [
      '12+ Years Total Experience',
      '8 Years at Oracle Corporation',
      '5+ Zero-to-One PMM Inceptions',
    ],
  },

  resumeData: {
    summary:
      'Senior Product Marketing Leader with 12+ years of experience translating complex enterprise technology—Data Architecture, AI Infrastructure, and Cybersecurity—into differentiated market positioning, high-converting launches, and quantifiable pipeline growth. Combines 8 years of enterprise scale at Oracle with 5+ zero-to-one PMM builds across high-growth B2B technology companies.',
    coreCompetencies: [
      'Category Design & Positioning',
      'Multi-Tier Messaging Architecture',
      'Enterprise GTM Strategy & Launch Execution',
      'Sales Enablement & Competitive Battlecards',
      'ICP Segmentation & Outbound Acceleration',
      'Buyer Persona & Win/Loss Research',
      'Analyst Relations & Executive Narratives',
      'Pipeline Attribution & Revenue Operations',
    ],
    experience: [
      {
        role: 'Marketing Lead (Fractional / Advisory)',
        company: 'Appventory',
        period: 'Jan 2026 – Present',
        stage: 'Seed to Series A GTM',
        bullets: [
          'Rebuilt marketing GTM strategy from zero, realigning feature specifications with CFO-level SaaS compliance and vendor visibility narratives.',
          'Architected specialized accountant & auditor programmatic content hubs to capture non-branded bottom-of-funnel search intent.',
          'Established end-to-end pipeline attribution and board-level monthly reporting cadence across inbound and outbound channels.',
          'Recruited dedicated Demand Gen talent and executed strategic field programs, realizing +20% higher qualified event lead conversions.',
        ],
      },
      {
        role: 'Principal Consultant — Independent Product Marketing Practice',
        company: 'Core42 (G42), Zenarmor, WaferWire, Valiantys, LightBeam',
        period: '2023 – Present',
        stage: 'Enterprise Cloud, AI Infrastructure & Cybersecurity',
        bullets: [
          'Core42 (A G42 Company): Engineered sovereign cloud & high-density AI infrastructure messaging hierarchy, executive pitch decks, and competitive battlecards, contributing to 2 flagship enterprise wins.',
          'Zenarmor: Conducted cybersecurity market intelligence and built competitive sales battlecards against legacy enterprise firewalls.',
          'WaferWire: Distilled enterprise AI/ML and data pipeline capabilities into C-suite ROI positioning frameworks.',
          'Valiantys: Structured vertical GTM playbooks and executive roundtables for utilities, financial services, and healthcare (+20% event lead conversion).',
          'LightBeam.ai: Delivered sales enablement playbooks and multi-touch presentation assets for IAPP Global Privacy Summit 2024.',
        ],
      },
      {
        role: 'Product Marketing & Outbound Growth Lead',
        company: 'Nanoheal',
        period: 'Commercial Product Marketing & Outbound Acceleration',
        stage: 'Autonomous Endpoint Management / DEX',
        bullets: [
          'Evolved market positioning from reactive IT ticketing to autonomous Digital Experience Automation and self-healing endpoints.',
          'Led cross-functional marketing pod and built an ICP-based outbound engine from scratch, generating $1.2M+ in qualified enterprise pipeline.',
          'Structured high-velocity SDR playbooks, enterprise proof decks (Toyota Material Handling Europe), and objection handling, compressing sales cycles by 22% (9 to 7 months).',
        ],
      },
      {
        role: 'Product Marketing Lead',
        company: 'Appsian Security',
        period: 'ERP Data Security & IAM',
        stage: 'PeopleSoft & SAP Cybersecurity',
        bullets: [
          'Overhauled website information architecture, multi-tier messaging hierarchy, buyer persona roadmaps, and customer insight playbooks for ERP data security.',
          'Drove a 2.3× lift in monthly organic web traffic, +21% increase in qualified enterprise leads, and 18+ existing-customer expansion upsells.',
        ],
      },
      {
        role: 'Senior Technical Product Marketing & Curriculum Lead',
        company: 'Oracle Corporation',
        period: '8 Years',
        stage: 'Enterprise Database (Oracle 12c, 18c, 19c)',
        bullets: [
          'Translated complex database security (Oracle Database Vault Mandatory Realms), multitenant storage, and developer APIs into structured enterprise adoption paths.',
          'Owned launch enablement and GTM execution across 25+ cross-functional engineering and PM contributors for 3 major releases (Oracle 12c, 18c, 19c).',
          'Established and scaled the Oracle Learning Library for developer and DBA education, driving +30% growth in learning consumption.',
        ],
      },
    ],
  },
};
