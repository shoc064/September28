export interface MetricItem {
  value: string;
  caption: string;
}

export interface CaseStudyArtifact {
  id: string;
  title: string;
  caption: string;
  type: string;
  isAvailableOnRequest?: boolean;
  isWaitingOnFile?: boolean;
  customImageUrl?: string;
}

export interface FlagshipTile {
  id: string;
  company: string;
  sector: string;
  years: string;
  roleLabel: string;
  headline: string;
  challenge: string;
  whatIDid: string[];
  impactMetrics: {
    metric: string;
    because: string;
  }[];
  thumbnailSample: {
    title: string;
    type: string;
    artifactId: string;
    isWaitingOnFile?: boolean;
  };
}

export interface CaseStudy {
  id: string;
  company: string;
  sector: string;
  years: string;
  roleLabel: string;
  headline: string;
  challenge: string;
  // Specific sections ordered as: Problem → Insight → Strategy → Execution → Impact → Work samples
  problem: string[];
  insight: string;
  strategy: {
    heading: string;
    body: string;
  }[];
  execution: string[];
  impact: {
    metric: string;
    because: string;
  }[];
  artifacts: CaseStudyArtifact[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  result?: string;
}

export interface IndependentPracticeItem {
  company: string;
  whatIDid: string;
  result: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Tanmay Choudhury',
    roleKicker: 'PRODUCT MARKETING LEADERSHIP',
    headlinePrefix: 'Product Marketing for Enterprise Technology ',
    headlineHighlight: 'Too Complex',
    headlineSuffix: ' to Sell Itself',
    hero: {
      headlinePrefix: 'Product Marketing for Enterprise Technology ',
      headlineHighlight: 'Too Complex',
      headlineSuffix: ' to Sell Itself',
      h1: 'Product Marketing for Enterprise Technology Too Complex to Sell Itself',
      sub: '12+ years translating complex technology into positioning, launches, and pipeline. Eight years at Oracle; four PMM functions built from scratch.',
      line: 'Data · AI infrastructure · Cybersecurity',
      buttons: {
        primary: 'View selected work',
        secondary: 'Download résumé',
      },
    },
    photoUrl:
      'https://raw.githubusercontent.com/shoc064/September28/main/Tanmay_website_Sept26_profilephoto.jpg',
    email: 'tanmay1612@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/tanmaytc/',
  },

  proofStrip: [
    {
      value: '12+ years',
      caption: 'in B2B product marketing',
    },
    {
      value: '8 years',
      caption: 'at Oracle',
    },
    {
      value: '$1.2M',
      caption: 'qualified pipeline in about a year at Nanoheal',
    },
    {
      value: '2.3×',
      caption: 'monthly unique visitors within 12 months at Appsian',
    },
  ] as MetricItem[],

  whyMe: {
    title: 'Why me',
    columns: [
      {
        title: 'Technical depth',
        body: 'I translate kernel security, database engines, and AI infrastructure into clear architecture without hand-waving.',
      },
      {
        title: 'GTM leadership',
        body: 'I align product, engineering, and sales around unified narratives, field enablement, and disciplined launch cadences.',
      },
      {
        title: 'Commercial impact',
        body: 'I tie positioning directly to qualified pipeline, shorter sales cycles, and measurable bottom-of-funnel conversion.',
      },
    ],
    closing:
      'I speak product with engineers, strategy with executives, and value with buyers.',
  },

  flagshipTiles: [
    {
      id: 'oracle',
      company: 'Oracle',
      sector: 'Database & Security',
      years: '8 years',
      roleLabel: 'Technical product marketing',
      headline: 'Launch enablement and developer education for Oracle Database',
      challenge:
        'Enterprise customers faced steep adoption barriers when migrating to multitenant architecture and preventive database security.',
      whatIDid: [
        'Owned launch enablement and GTM execution across 25+ product managers and engineers for Oracle Database 12c and 18c.',
        'Built structured technical learning paths for Oracle Learning Library and Oracle University certification content.',
      ],
      impactMetrics: [
        {
          metric: '+30% consumption',
          because:
            'of developer and DBA learning paths because technical concepts were mapped to structured certification curricula.',
        },
        {
          metric: '2 major releases',
          because:
            'Oracle Database 12c and 18c enabled across global sales and solution engineering teams.',
        },
      ],
      thumbnailSample: {
        title: 'Oracle Database Vault Mandatory Realm architecture',
        type: 'Technical architecture diagram',
        artifactId: 'oracle-db-vault',
      },
    },
    {
      id: 'nanoheal',
      company: 'Nanoheal',
      sector: 'Autonomous endpoints & DEX',
      years: '2 years',
      roleLabel: 'Product marketing leader',
      headline: 'Commercial repositioning and outbound sales acceleration',
      challenge:
        'Prospective buyers viewed endpoint management as reactive helpdesk ticketing rather than proactive, self-healing automation.',
      whatIDid: [
        'Repositioned the category from reactive IT ticketing to zero-code digital employee experience automation.',
        'Built the first outbound prospecting engine, ICP segmentation, and SDR objection battlecards from scratch.',
      ],
      impactMetrics: [
        {
          metric: '$1.2M qualified pipeline',
          because:
            'in about a year from the first outbound motion, built around new enterprise positioning and C-level ROI narratives.',
        },
        {
          metric: '-22% sales cycle',
          because:
            'from 9 to 7 months because persona-specific objection playbooks accelerated enterprise deal qualification.',
        },
        {
          metric: '20% ticket deflection',
          because:
            'validated in enterprise proof points, including 1,000 machines across 21 countries for Toyota Material Handling Europe.',
        },
      ],
      thumbnailSample: {
        title: 'Outbound messaging framework',
        type: 'Enablement framework',
        artifactId: 'nanoheal-outbound',
        isWaitingOnFile: true,
      },
    },
    {
      id: 'appsian',
      company: 'Appsian Security',
      sector: 'ERP Cybersecurity & IAM',
      years: '2 years',
      roleLabel: 'Product marketing leader',
      headline: 'Website revamp and multi-tier messaging for ERP security',
      challenge:
        'Legacy PeopleSoft and SAP customers lacked awareness of critical remote access and compliance vulnerabilities.',
      whatIDid: [
        'Overhauled website information architecture, buyer personas, and problem-solution messaging tiers without developer code overhead.',
        'Anchored executive positioning on IDC breach data to establish urgent board-level risk around access controls and GDPR.',
      ],
      impactMetrics: [
        {
          metric: '2.3× monthly unique visitors',
          because:
            'within 12 months because the restructured website IA and content captured non-branded high-intent organic search.',
        },
        {
          metric: '+21% qualified demo leads',
          because:
            'application-specific solution pages spoke directly to CISO and ERP administrator pain.',
        },
        {
          metric: '18+ enterprise upsells',
          because:
            'sales and customer success were armed with tailored expansion playbooks for installed accounts.',
        },
      ],
      thumbnailSample: {
        title: 'Comprehensive data security for PeopleSoft',
        type: 'Product page architecture',
        artifactId: 'appsian-peoplesoft',
      },
    },
    {
      id: 'core42',
      company: 'Core42',
      sector: 'Sovereign Cloud & AI',
      years: '1 year',
      roleLabel: 'Product marketing leader',
      headline: 'Sovereign cloud and high-density AI infrastructure positioning',
      challenge:
        'Regulated enterprise and government buyers struggled to reconcile public cloud compliance risks with AI computing scale.',
      whatIDid: [
        'Created the signature executive sales deck: "The Infrastructure Journey: Shift from Control to Chaos, and Back".',
        'Built competitive battlecards against hyperscalers and packaged modular sovereign AI compute tiers.',
      ],
      impactMetrics: [
        {
          metric: '2 enterprise wins',
          because:
            'enablement kit used in 2 enterprise wins because sovereign cloud resolved data residency constraints for government and banking clients.',
        },
        {
          metric: '3-tier taxonomy',
          because:
            'unified complex sovereign infrastructure and high-density AI compute into clear buyer tiers.',
        },
      ],
      thumbnailSample: {
        title: 'The Infrastructure Journey: Shift from Control to Chaos, and Back',
        type: 'Sales deck',
        artifactId: 'core42-journey',
      },
    },
  ] as FlagshipTile[],

  caseStudies: [
    {
      id: 'oracle',
      company: 'Oracle',
      sector: 'Database & Security',
      years: '8 years',
      roleLabel: 'Technical product marketing',
      headline: 'Launch enablement and developer education for Oracle Database',
      challenge:
        'Enterprise customers faced steep adoption barriers when migrating to multitenant architecture and preventive database security.',
      problem: [
        'Enterprise customers struggled to grasp the shift to multitenant architecture, preventive security realms, and autonomous operational controls.',
        'Global sales engineers lacked modular technical decks to explain low-level kernel protections to risk-averse security architects.',
      ],
      insight:
        'Enterprise architects do not buy abstract security features; they adopt systems when technical constraints map directly to regulated compliance realms and certified DBA workflows.',
      strategy: [
        {
          heading: 'Technical translation for database security',
          body: 'I distilled Mandatory Realms, entitlement controls, and preventive privileges into architectural schematics that CISOs and database administrators trusted.',
        },
        {
          heading: 'Certified curriculum and developer learning paths',
          body: 'I aligned developer and DBA learning paths with Oracle University certification objectives, creating structured adoption milestones.',
        },
      ],
      execution: [
        'Orchestrated release enablement across 25+ product managers and engineers for Oracle Database 12c and 18c.',
        'Authored technical whitepapers and architecture diagrams detailing Oracle Database Vault Mandatory Realms.',
        'Produced modular hands-on learning paths for Oracle Learning Library.',
      ],
      impact: [
        {
          metric: '+30% consumption',
          because:
            'of developer and DBA learning paths because technical concepts were mapped to structured certification curricula.',
        },
        {
          metric: '2 major releases',
          because:
            'Oracle Database 12c and 18c enabled across global sales and solution engineering teams.',
        },
      ],
      artifacts: [
        {
          id: 'oracle-db-vault',
          title: 'Oracle Database Vault — Mandatory Realm architecture and use cases',
          caption:
            'Technical architecture diagram illustrating how Mandatory Realms block unauthorized privileged DBA queries while preserving application-tier access.',
          type: 'Technical architecture diagram',
        },
        {
          id: 'oracle-matrix',
          title: 'Technical to Business Translation Matrix',
          caption:
            'Technical translation framework mapping low-level database security parameters into business compliance narratives.',
          type: 'Strategic framework',
          isAvailableOnRequest: true,
        },
        {
          id: 'onboarding-flow',
          title: 'Multi-stage compliance and schedule onboarding workflow',
          caption:
            'Process architecture mapping the four-stage compliance workflow with site-level governance and review overrides.',
          type: 'Enablement flow',
        },
      ],
    },
    {
      id: 'nanoheal',
      company: 'Nanoheal',
      sector: 'Autonomous endpoints & DEX',
      years: '2 years',
      roleLabel: 'Product marketing leader',
      headline: 'Commercial repositioning and outbound sales acceleration',
      challenge:
        'Prospective buyers viewed endpoint management as reactive helpdesk ticketing rather than proactive, self-healing automation.',
      problem: [
        'Enterprise IT leaders viewed endpoint software as commoditized ticket-management tooling rather than proactive digital experience automation.',
        'The company had no structured outbound motion or quantifiable enterprise proof to target infrastructure VPs.',
      ],
      insight:
        'CIOs and workplace directors do not want another monitoring dashboard; they want automated resolution that deflects helpdesk tickets before employees notice.',
      strategy: [
        {
          heading: 'Category reframing around digital employee experience',
          body: 'I shifted the core narrative from reactive ticketing to zero-code, autonomous self-healing for distributed endpoints.',
        },
        {
          heading: 'Enterprise proof-led outbound motion',
          body: 'I codified deployment metrics from global enterprises into persona-based battlecards and outbound messaging sequences.',
        },
      ],
      execution: [
        'Built the outbound sales motion, ICP definitions, and SDR objection-handling playbooks from scratch.',
        'Created executive briefing decks featuring verified 20% ticket deflection at Toyota Material Handling Europe across 21 countries.',
      ],
      impact: [
        {
          metric: '$1.2M qualified pipeline',
          because:
            'in about a year from the first outbound motion, built around new enterprise positioning and C-level ROI narratives.',
        },
        {
          metric: '-22% sales cycle',
          because:
            'from 9 to 7 months because persona-specific objection playbooks accelerated enterprise deal qualification.',
        },
        {
          metric: '20% ticket deflection',
          because:
            'validated in enterprise proof points across 1,000 machines and 120 EUC applications.',
        },
      ],
      artifacts: [
        {
          id: 'nanoheal-automation',
          title: 'Nanoheal digital experience automation and TMHE enterprise proof',
          caption:
            'Executive sales slide highlighting zero-code endpoint automation and quantified deployment metrics at Toyota Material Handling Europe.',
          type: 'Customer proof deck',
        },
        {
          id: 'nanoheal-outbound',
          title: 'Outbound messaging framework',
          caption:
            'Targeted outbound messaging and SDR qualification matrix for enterprise EUC leaders.',
          type: 'Enablement framework',
          isWaitingOnFile: true,
        },
      ],
    },
    {
      id: 'appsian',
      company: 'Appsian Security',
      sector: 'ERP Cybersecurity & IAM',
      years: '2 years',
      roleLabel: 'Product marketing leader',
      headline: 'Website revamp and multi-tier messaging for ERP security',
      challenge:
        'Legacy PeopleSoft and SAP customers lacked awareness of critical remote access and compliance vulnerabilities.',
      problem: [
        'ERP deployments (PeopleSoft and SAP) were vulnerable to unauthorized access, yet buyers treated security as an internal customization headache.',
        'The existing website was organized around technical features rather than buyer personas and regulatory audit risks.',
      ],
      insight:
        'CISOs act when risk is substantiated by third-party data and the implementation eliminates custom developer overhead.',
      strategy: [
        {
          heading: 'Urgency anchored in analyst research',
          body: 'I anchored top-of-funnel positioning on IDC research showing 64% of ERP deployments were breached within 24 months.',
        },
        {
          heading: 'Multi-tier web information architecture',
          body: 'I rebuilt the digital presence to segment buyers by platform (PeopleSoft, SAP) and pain (access controls, compliance audit, threat protection).',
        },
      ],
      execution: [
        'Overhauled website information architecture and messaging tiers without custom code overhead.',
        'Created customer expansion playbooks and reference architectures featuring marquee customers like Wells Fargo, GAP, and GEICO.',
      ],
      impact: [
        {
          metric: '2.3× monthly unique visitors',
          because:
            'within 12 months because the restructured website IA and content captured non-branded high-intent organic search.',
        },
        {
          metric: '+21% qualified demo leads',
          because:
            'application-specific solution pages spoke directly to CISO and ERP administrator pain.',
        },
        {
          metric: '18+ enterprise upsells',
          because:
            'sales and customer success were armed with tailored expansion playbooks for installed accounts.',
        },
      ],
      artifacts: [
        {
          id: 'appsian-peoplesoft',
          title: 'Comprehensive data security for PeopleSoft',
          caption:
            'Product page architecture combining trust validation (Wells Fargo, GAP, GEICO) and problem-solution framing.',
          type: 'Web architecture',
        },
        {
          id: 'appsian-why',
          title: 'Why Appsian — category risk and ERP breach positioning',
          caption:
            'Executive positioning page leveraging IDC breach data (64% breached in 24 months) to establish boardroom urgency.',
          type: 'Positioning framework',
        },
        {
          id: 'appsian-before-after',
          title: 'Website revamp: before and after',
          caption:
            'Visual walkthrough of the website architecture and messaging overhaul.',
          type: 'Website before/after',
          isWaitingOnFile: true,
        },
      ],
    },
    {
      id: 'core42',
      company: 'Core42',
      sector: 'Sovereign Cloud & AI',
      years: '1 year',
      roleLabel: 'Product marketing leader',
      headline: 'Sovereign cloud and high-density AI infrastructure positioning',
      challenge:
        'Regulated enterprise and government buyers struggled to reconcile public cloud compliance risks with AI computing scale.',
      problem: [
        'Regulated government and banking organizations were trapped between on-premise hardware constraints and public cloud data sovereignty issues.',
        'Sales teams needed a compelling executive narrative to differentiate sovereign infrastructure from standard hyperscaler offerings.',
      ],
      insight:
        'Sovereignty is not an infrastructure feature; it is an executive governance strategy for nations and regulated enterprises building generative AI.',
      strategy: [
        {
          heading: '"Control → Chaos → Gaining back control" narrative',
          body: 'I created an executive narrative contrasting on-premise limits and public cloud compliance exposure against sovereign cloud assurance.',
        },
        {
          heading: 'Competitive positioning against hyperscalers',
          body: 'I built head-to-head battlecards highlighting residency guarantees and dedicated high-density AI cluster economics.',
        },
      ],
      execution: [
        'Developed the executive sales deck "The Infrastructure Journey: Shift from Control to Chaos, and Back".',
        'Structured modular sovereign cloud and AI compute solution packaging for field teams.',
      ],
      impact: [
        {
          metric: '2 enterprise wins',
          because:
            'enablement kit used in 2 enterprise wins because sovereign cloud resolved data residency constraints for government and banking clients.',
        },
        {
          metric: '3-tier taxonomy',
          because:
            'unified complex sovereign infrastructure and high-density AI compute into clear buyer tiers.',
        },
      ],
      artifacts: [
        {
          id: 'core42-journey',
          title: 'The Infrastructure Journey: Shift from Control to Chaos, and Back',
          caption:
            'Executive narrative slide contrasting On-Premise physical limits and Public Cloud exposure with Sovereign Cloud compliance.',
          type: 'Sales deck',
        },
      ],
    },
  ] as CaseStudy[],

  moreExperience: [
    {
      company: 'AppVentory',
      role: 'Product Marketing Manager (Marketing Lead)',
      period: 'Feb 2026 – present',
      description: 'Software & AI spend management.',
    },
    {
      company: 'Exxat',
      role: 'Product Marketing Lead',
      period: '2021 – 2023',
      description:
        'Built healthcare education clinical placement platform positioning, accelerating academic partner adoption.',
    },
    {
      company: 'Happay',
      role: 'Product Marketing Manager',
      period: '2019 – 2021',
      description:
        'Spearheaded corporate expense management GTM, expanding mid-market corporate accounts.',
    },
  ] as ExperienceItem[],

  independentPractice: [
    {
      company: 'Valiantys',
      whatIDid: 'Structured vertical GTM playbooks for utilities and finance',
      result: 'lifted event lead conversion by +20%.',
    },
    {
      company: 'LightBeam',
      whatIDid: 'Built CISO sales enablement playbooks and presentation assets',
      result: 'delivered targeted positioning for IAPP Global Privacy Summit.',
    },
    {
      company: 'Zenarmor',
      whatIDid: 'Produced competitive cybersecurity intelligence and battlecards',
      result: 'positioned next-gen firewall against legacy appliances.',
    },
    {
      company: 'Waferwire',
      whatIDid: 'Distilled enterprise AI/ML pipelines into C-suite ROI frameworks',
      result: 'translated deep data architectures into executive positioning.',
    },
  ] as IndependentPracticeItem[],

  contact: {
    heading: "Building something complex? Let's talk.",
    email: 'tanmay1612@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/tanmaytc/',
    subtext: 'Open to full-time product marketing leadership roles.',
  },

  resumeData: {
    summary:
      'Product marketing leader with 12+ years of experience translating complex enterprise technology—data, AI infrastructure, and cybersecurity—into clear positioning, launches, and pipeline. Eight years at Oracle; four PMM functions built from scratch.',
    competencies: [
      'Category positioning and narrative design',
      'Multi-tier messaging architecture',
      'Technical product marketing and launch execution',
      'Sales enablement and competitive battlecards',
      'Developer education and technical curricula',
      'ICP segmentation and outbound motion design',
    ],
    experience: [
      {
        role: 'Product Marketing Manager (Marketing Lead)',
        company: 'AppVentory',
        period: 'Feb 2026 – present',
        stage: 'Software & AI spend management',
        bullets: [
          'Repositioned core platform messaging around CFO-level SaaS compliance and vendor visibility.',
          'Architected high-intent organic content wedges to capture bottom-of-funnel search intent.',
          'Established board-level attribution and monthly GTM reporting cadence.',
        ],
      },
      {
        role: 'Principal Consultant',
        company: 'Independent Practice',
        period: '2023 – present',
        stage: 'Enterprise cloud, AI infrastructure & cybersecurity',
        bullets: [
          'Core42: Developed sovereign cloud and AI infrastructure sales deck and competitive battlecards, supporting 2 enterprise wins.',
          'Valiantys: Built vertical GTM playbooks for utilities and finance, lifting event lead conversion by +20%.',
          'Zenarmor: Produced competitive cybersecurity intelligence against legacy enterprise firewalls.',
          'LightBeam & Waferwire: Built executive enablement frameworks across data privacy and AI/ML pipelines.',
        ],
      },
      {
        role: 'Product Marketing Leader',
        company: 'Nanoheal',
        period: '2022 – 2023',
        stage: 'Autonomous endpoints & DEX',
        bullets: [
          'Repositioned the category from reactive IT ticketing to zero-code digital employee experience automation.',
          'Built the first outbound engine from scratch, generating $1.2M qualified pipeline in about a year.',
          'Structured high-velocity SDR objection playbooks, compressing the sales cycle by 22% (9 to 7 months).',
        ],
      },
      {
        role: 'Product Marketing Leader',
        company: 'Appsian Security',
        period: '2020 – 2022',
        stage: 'ERP cybersecurity & IAM',
        bullets: [
          'Overhauled website information architecture and messaging tiers without custom code overhead.',
          'Drove 2.3× monthly unique visitors within 12 months and +21% qualified demo leads.',
          'Equipped sales with account expansion playbooks, unlocking 18+ enterprise upsells.',
        ],
      },
      {
        role: 'Technical Product Marketing',
        company: 'Oracle',
        period: '8 years',
        stage: 'Database & Security',
        bullets: [
          'Owned launch enablement across 25+ product managers and engineers for Oracle Database 12c and 18c.',
          'Authored technical architecture whitepapers on Oracle Database Vault Mandatory Realms.',
          'Built structured developer and DBA learning paths for Oracle Learning Library, lifting consumption by +30%.',
        ],
      },
    ],
  },
};
