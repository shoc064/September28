export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface CaseStudyArtifactItem {
  id: string;
  title: string;
  caption: string;
  sourceImageName: string;
  category: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  badge: string;
  title: string;
  challenge: string;
  contribution: string;
  metricTitle: string;
  metricSubtitle: string;
  iconName: 'database' | 'network' | 'shield' | 'cpu' | 'layers' | 'lock' | 'sparkles';
  featuredOnHome: boolean;
  period: string;
  role: string;
  segment: string;
  executiveSummary: string;
  problemContext: string[];
  strategicExecution: {
    heading: string;
    description: string;
  }[];
  messagingFramework?: {
    pillar: string;
    points: string[];
  }[];
  impactMetrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  artifacts: CaseStudyArtifactItem[];
}

export interface AdvisoryProject {
  company: string;
  title: string;
  description: string;
  focus: string;
  deliverable: string;
  iconName: 'cpu' | 'shield' | 'sparkles' | 'network' | 'lock';
  caseStudySlug: string;
}

export interface MethodologyPhase {
  phase: string;
  title: string;
  description: string;
  output: string;
  iconName: 'search' | 'compass' | 'rocket' | 'chart';
}

export const PORTFOLIO_DATA = {
  name: 'Tanmay Choudhury',
  brandSubtitle: 'PRODUCT MARKETING LEADERSHIP',
  heroBadge: 'PRODUCT MARKETING LEADERSHIP',
  headlinePrefix: 'Product Marketing for Enterprise Technology ',
  headlineHighlight: 'Too Complex',
  headlineSuffix: ' to Sell Itself',
  subheadline:
    '12+ years translating complex technology into positioning, launches, and revenue-generating GTM. 8 years at Oracle + 5+ zero-to-one PMM builds.',
  specializations: [
    { label: 'Data Architecture', icon: 'database' },
    { label: 'AI Infrastructure', icon: 'cpu' },
    { label: 'Cybersecurity', icon: 'shield' },
  ],
  currentStatus: {
    title: 'Marketing Lead at Appventory',
    subtitle: 'Open to Lead / Director PMM Roles',
  },
  contact: {
    email: 'tanmay1612@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tanmaychoudhury/',
    location: 'Global / Enterprise B2B',
  },
  metrics: [
    {
      value: '12+',
      label: 'YEARS EXPERIENCE',
      sublabel: 'Technical B2B Product Marketing',
    },
    {
      value: '8+',
      label: 'YEARS AT SCALE',
      sublabel: 'Enterprise Rigor at Oracle',
    },
    {
      value: '$1.2M+',
      label: 'OUTBOUND PIPELINE',
      sublabel: 'Qualified Pipeline Generated',
    },
    {
      value: '2.3×',
      label: 'ORGANIC SCALE',
      sublabel: 'Monthly Organic Web Growth',
    },
  ] as MetricItem[],

  activeLeadership: {
    badge: 'ACTIVE LEADERSHIP',
    period: 'Jan 2026 – Present',
    title: 'Marketing Lead | Appventory',
    stage: 'Stage: Seed to Series A GTM',
    description:
      'Fractional/Advisory leadership brought in to reposition the product, rebuild the marketing function ground-up, and unlock durable customer acquisition.',
    pillars: [
      {
        title: 'Core Product Repositioning',
        description:
          'Rebuilt marketing GTM strategy from zero, realigning feature specifications with CFO-level SaaS compliance and vendor visibility narratives.',
        icon: 'sliders',
      },
      {
        title: 'High-Intent SEO Wedge',
        description:
          'Architected specialized accountant & auditor programmatic content hubs to capture non-branded bottom-of-funnel search intent.',
        icon: 'trending',
      },
      {
        title: 'Executive Reporting Cadence',
        description:
          'Established end-to-end pipeline attribution and board-level monthly reporting cadence across inbound and outbound channels.',
        icon: 'chart',
      },
      {
        title: 'Team & Field Execution',
        description:
          'Recruited dedicated Demand Gen talent and executed strategic field programs, realizing +20% higher qualified event lead conversions.',
        icon: 'users',
      },
    ],
  },

  advisoryPractice: {
    kicker: 'ADVISORY & CONSULTING',
    title: 'Independent Product Marketing Practice',
    period: '(2023 – Present)',
    subtitle:
      'Specialized strategic GTM, repositioning, and technical enablement sprints across cybersecurity, AI/ML platforms, and enterprise cloud.',
    projects: [
      {
        company: 'CORE42',
        title: 'Sovereign AI & Cloud GTM',
        description:
          'Engineered messaging hierarchy, sales collateral, and buyer persona playbooks for sovereign data centers and private cloud AI suites.',
        focus: 'Cloud Infra',
        deliverable: 'Strategic Enablement',
        iconName: 'cpu',
        caseStudySlug: 'core42',
      },
      {
        company: 'ZENARMOR',
        title: 'Next-Gen Firewall Enablement',
        description:
          'Conducted in-depth cybersecurity market intelligence and produced competitive battlecards against legacy enterprise firewalls.',
        focus: 'Network Sec',
        deliverable: 'Sales Battlecards',
        iconName: 'shield',
        caseStudySlug: 'zenarmor',
      },
      {
        company: 'WAFERWIRE',
        title: 'AI/ML Platform Value Translation',
        description:
          'Distilled deep artificial intelligence, analytics, and data pipeline technologies into tangible, C-suite ROI positioning frameworks.',
        focus: 'Enterprise AI',
        deliverable: 'Messaging Blueprint',
        iconName: 'sparkles',
        caseStudySlug: 'waferwire',
      },
      {
        company: 'VALIANTYS',
        title: 'Atlassian Ecosystem Vertical GTM',
        description:
          'Structured vertical marketing playbooks and executive roundtables for financial services and healthcare enterprise customers.',
        focus: 'Enterprise IT',
        deliverable: '+20% Event Leads',
        iconName: 'network',
        caseStudySlug: 'valiantys',
      },
      {
        company: 'LIGHTBEAM',
        title: 'Data Privacy at IAPP 2024',
        description:
          'Delivered targeted sales enablement playbooks and multi-touch presentation assets for major global privacy officer summit.',
        focus: 'Data Privacy',
        deliverable: 'Event Enablement',
        iconName: 'lock',
        caseStudySlug: 'lightbeam',
      },
    ] as AdvisoryProject[],
  },

  methodology: {
    kicker: 'EXECUTION METHODOLOGY',
    title: 'How I Work',
    phases: [
      {
        phase: 'PHASE 01',
        title: 'UNDERSTAND',
        description:
          'Uncover real customer pain, buyer personas, and technical product nuances through market research and customer win/loss interviews.',
        output: 'Output: ICP & Insight Report',
        iconName: 'search',
      },
      {
        phase: 'PHASE 02',
        title: 'POSITION',
        description:
          'Craft sharp, differentiated messaging hierarchies that bridge deep technical capabilities into quantifiable business ROI for buyers.',
        output: 'Output: Narrative & Core Decks',
        iconName: 'compass',
      },
      {
        phase: 'PHASE 03',
        title: 'ENABLE',
        description:
          'Equipping sales, SDRs, and channel partners with battlecards, demos, customer slides, and clear objection-handling sequences.',
        output: 'Output: Battlecards & Field Kits',
        iconName: 'rocket',
      },
      {
        phase: 'PHASE 04',
        title: 'MEASURE',
        description:
          'Aligning GTM execution with pipeline creation, sales cycle compression, web engagement metrics, and expansion revenue.',
        output: 'Output: Pipeline & Cycle Analytics',
        iconName: 'chart',
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
    paragraphs: [
      'I specialize in product marketing for complex technology—specifically Data, AI Infrastructure, and Cybersecurity. With 12+ years of experience, including 8 years at Oracle and 5+ zero-to-one PMM setups, I bring structure to ambiguous products and align cross-functional teams around clear GTM execution.',
      'I operate comfortably across both enterprise scale and high-growth startup speed—bridging engineering, product management, sales leaders, and executive suites to turn deep technical innovations into defensible pipeline.',
    ],
  },

  caseStudies: [
    {
      slug: 'oracle',
      company: 'ORACLE',
      badge: 'Enterprise Scale',
      title: 'Technical Product Marketing & Enterprise Database GTM',
      challenge:
        'Translating complex database security, storage, and developer APIs into structured adoption paths across global enterprise accounts.',
      contribution:
        'Owned launch enablement and GTM execution across 25+ cross-functional contributors; established Oracle Learning Library for developer education.',
      metricTitle: '3 Major Releases',
      metricSubtitle: 'Oracle 10g, 11g, 12c · +30% consumption',
      iconName: 'database',
      featuredOnHome: true,
      period: '8 Years · Enterprise Database & Security Group',
      role: 'Senior Technical Product Marketing & Enablement Lead',
      segment: 'Enterprise Data Architecture & Database Security',
      executiveSummary:
        'Spearheaded technical product marketing, developer adoption platforms, and enterprise security enablement across three flagship Oracle Database generations (10g, 11g, and 12c). Scaled the Oracle Learning Library from inception and authored technical positioning for mission-critical database security modules including Oracle Database Vault.',
      problemContext: [
        'Enterprise customers faced steep technical barriers when adopting new capabilities in Oracle Database 10g, 11g, and 12c—particularly around privileged account security, GoldenGate synchronization, and SQL Developer data modeling.',
        'Product management and engineering teams needed a scalable, structured mechanism to translate dense database internals into actionable implementation playbooks for DBAs, security architects, and enterprise decision-makers.',
      ],
      strategicExecution: [
        {
          heading: '01. Built & Scaled the Oracle Learning Library (OLL) Platform',
          description:
            'Conceptualized and launched the Oracle Learning Library (OLL) portal—curating Oracle By Example (OBE) series, interactive tutorials, and video channels across 150+ Application Development, Hyperion, Enterprise Manager, Grid, RAC, Security, and Exadata tracks.',
        },
        {
          heading: '02. Technical Security Positioning (Oracle Database Vault)',
          description:
            'Authored technical whitepapers, architecture diagrams, and compliance briefs for Oracle Database Vault—illustrating how security "Realms" restrict privileged DBA accounts from unauthorized access to HR and Finance application tables.',
        },
        {
          heading: '03. Cross-Functional Launch Orchestration Across 25+ Contributors',
          description:
            'Aligned database kernel engineers, product managers, and global field sales teams across 3 major release cycles to standardize launch kits, hands-on workshops, and customer migration roadmaps.',
        },
      ],
      impactMetrics: [
        {
          value: '3 Releases',
          label: 'FLAGSHIP LAUNCHES',
          detail: 'Oracle Database 10g, 11g, and 12c GTM execution',
        },
        {
          value: '+30%',
          label: 'CONTENT CONSUMPTION',
          detail: 'Growth in technical enablement & OBE adoption',
        },
        {
          value: '25+',
          label: 'CONTRIBUTORS LED',
          detail: 'Cross-functional PM, engineering & field specialists',
        },
      ],
      artifacts: [
        {
          id: 'oracle-learning-library',
          title: 'Oracle Learning Library — Developer & DBA Enablement Portal',
          caption:
            'Portal architecture featuring Oracle Database 11g OBE Series, SQL Developer Data Modeler 3.0, Oracle GoldenGate synchronization tracks, and taxonomy across 40+ enterprise technology domains.',
          sourceImageName: 'Image 8.png',
          category: 'Developer Enablement Platform',
        },
        {
          id: 'oracle-database-vault',
          title: 'Oracle Database Vault — Controls for Privileged Accounts',
          caption:
            'Technical product marketing brief and realm architecture diagram demonstrating how Oracle Database Vault blocks privileged DBA accounts from accessing restricted HR and Finance realms.',
          sourceImageName: 'Image 9.png',
          category: 'Technical Whitepaper & Security Architecture',
        },
      ],
    },
    {
      slug: 'nanoheal',
      company: 'NANOHEAL',
      badge: 'Outbound GTM',
      title: 'Commercial Product Marketing & Outbound Sales Acceleration',
      challenge:
        'Evolving market positioning from reactive IT ticketing to autonomous endpoint healing while setting up an outbound motion from scratch.',
      contribution:
        'Led cross-functional marketing pod, built ICP-based outbound engine, structured high-velocity SDR playbooks and objection handling.',
      metricTitle: '$1.2M Pipeline',
      metricSubtitle: '-22% sales cycle (9 to 7 mo)',
      iconName: 'network',
      featuredOnHome: true,
      period: 'Commercial GTM & Positioning Transformation',
      role: 'Product Marketing Lead',
      segment: 'Autonomous Endpoint Management & Digital Employee Experience (DEX)',
      executiveSummary:
        'Repositioned Nanoheal from an IT helpdesk utility into a zero-code Digital Experience Automation platform capable of self-healing enterprise endpoints. Built the outbound GTM engine from the ground up, arming SDRs and AEs with quantified ROI case studies (such as Toyota Material Handling Europe) and persona-specific playbooks.',
      problemContext: [
        'Enterprise IT buyers perceived endpoint tools as reactive ticketing add-ons rather than proactive, self-healing automation engines, stalling deal velocity.',
        'The sales organization lacked a structured outbound motion, ICP segmentation, and quantified enterprise proof points to engage VP of Infrastructure and Digital Workplace buyers.',
      ],
      strategicExecution: [
        {
          heading: '01. Category Repositioning to Digital Experience Automation',
          description:
            'Shifted the core narrative from "remote troubleshooting" to "Zero-Code Digital Experience Automation"—emphasizing real-time remediation, compliance strengthening, and self-healing endpoints.',
        },
        {
          heading: '02. Quantified Customer Proof & Enterprise Case Packaging',
          description:
            'Packaged flagship enterprise deployments—including Toyota Material Handling Europe (TMHE) across 1,000 client machines, 21 countries, 120 EUC applications, and 39 automated use cases—demonstrating a 20% reduction in Workplace Tower ticket volume.',
        },
        {
          heading: '03. Outbound Pod & SDR Playbook Engineering',
          description:
            'Built an ICP-driven outbound engine with multi-touch sequences, discovery call frameworks, and competitive objection-handling battlecards that compressed the enterprise sales cycle from 9 months to 7 months.',
        },
      ],
      impactMetrics: [
        {
          value: '$1.2M+',
          label: 'QUALIFIED PIPELINE',
          detail: 'Generated via structured ICP outbound motion',
        },
        {
          value: '-22%',
          label: 'SALES CYCLE REDUCTION',
          detail: 'Compressed enterprise deal cycle from 9 to 7 months',
        },
        {
          value: '20%',
          label: 'TICKET VOLUME DROP',
          detail: 'Validated customer ROI at Toyota Material Handling Europe',
        },
      ],
      artifacts: [
        {
          id: 'nanoheal-automation-slide',
          title: 'Nanoheal Automation — Digital Experience Automation & TMHE Proof Asset',
          caption:
            'Sales enablement collateral highlighting Nanoheal zero-code self-healing capabilities alongside quantified production outcomes at Toyota Material Handling Europe (1,000 client machines across 21 countries).',
          sourceImageName: 'Image 5.png',
          category: 'Sales Enablement & Customer Proof',
        },
      ],
    },
    {
      slug: 'appsian-security',
      company: 'APPSIAN SECURITY',
      badge: 'ERP Cyber & IAM',
      title: 'ERP Data Security Positioning & Multi-Tier Messaging',
      challenge:
        'Communicating the architectural value of lightweight ERP data security for PeopleSoft & SAP without custom developer code overhead.',
      contribution:
        'Overhauled site information architecture, messaging hierarchy, buyer persona roadmaps, and customer insight playbooks.',
      metricTitle: '2.3× Traffic Lift',
      metricSubtitle: '+21% Qualified Leads · 18% Upsells',
      iconName: 'shield',
      featuredOnHome: true,
      period: 'Brand Overhaul & Demand Acceleration',
      role: 'Product Marketing Manager',
      segment: 'Enterprise ERP Cybersecurity & Dynamic Access Control (SAP / PeopleSoft)',
      executiveSummary:
        'Re-architected the product positioning, website information architecture, and multi-tier messaging framework for Appsian Security—the global leader in securing PeopleSoft and SAP (ECC & S/4HANA) data. Translated complex attribute-based access controls (ABAC), data masking, and compliance telemetry into high-converting CISO and ERP Director narratives.',
      problemContext: [
        '64% of Oracle and SAP ERP deployments had experienced a breach in the prior 24 months, yet enterprise buyers relied on static role-based access rules or feared costly ERP "rip-and-replace" cloud migrations.',
        'Appsian needed to clearly articulate how its lightweight, zero-custom-code security layer delivered dynamic, context-aware protection across Intrusion Prevention, Data Loss Prevention, and Threat Detection & Response.',
      ],
      strategicExecution: [
        {
          heading: '01. Three-Pillar Solution Architecture & Website Overhaul',
          description:
            'Restructured the corporate site and product hierarchy around three buyer-aligned pillars: (1) Control User Access, (2) Enable Compliance and Audit, and (3) Advanced Threat Protection—supported by social proof from 250+ enterprise customers including Wells Fargo, GAP, GEICO, and H-E-B.',
        },
        {
          heading: '02. Dynamic Remote-Access & Cost-Efficiency Messaging',
          description:
            'Developed executive messaging hierarchies addressing remote-work risk: contrasting static access control limits against contextual, attribute-based rules that balance security with everyday user productivity without requiring a cloud rip-and-replace.',
        },
        {
          heading: '03. Full-Funnel Persona Playbooks & Expansion Campaigns',
          description:
            'Aligned content journeys to CISOs, Compliance Auditors, and PeopleSoft/SAP Administrators—driving a 2.3x lift in monthly organic traffic, +21% qualified inbound leads, and an 18% increase in customer upsells.',
        },
      ],
      messagingFramework: [
        {
          pillar: 'Protection of user data in a dynamic environment (remote access)',
          points: [
            'Static access control rules do not secure your data adequately.',
            'Enable contextual, attribute-based rules across PeopleSoft and SAP.',
          ],
        },
        {
          pillar: 'User-friendly security minimizes friction in everyday usage',
          points: [
            'Control access—allow the right people to access data at the right time and place.',
            'Strike a balance between rigorous ERP security and workforce productivity.',
          ],
        },
        {
          pillar: 'Cost-effective alternative to ERP rip-and-replace',
          points: [
            'Appsian for PeopleSoft removes the need to rip & replace your ERP system.',
            'Get modern controls at a fraction of the cost, without moving to Cloud.',
          ],
        },
      ],
      impactMetrics: [
        {
          value: '2.3×',
          label: 'ORGANIC TRAFFIC LIFT',
          detail: 'Sustained monthly growth after IA and messaging overhaul',
        },
        {
          value: '+21%',
          label: 'QUALIFIED LEADS',
          detail: 'Increase in marketing-qualified enterprise ERP prospects',
        },
        {
          value: '+18%',
          label: 'CUSTOMER UPSELLS',
          detail: 'Expansion across existing SAP & PeopleSoft install base',
        },
      ],
      artifacts: [
        {
          id: 'appsian-hero',
          title: 'Appsian Homepage Hero — ERP Data Security & Privacy Positioning',
          caption:
            'Repositioned homepage headline ("Comprehensive Data Security and Privacy Solutions for PeopleSoft and SAP ECC & S/4HANA") unifying Intrusion Prevention, DLP, and Threat Detection with tier-1 enterprise trust logos.',
          sourceImageName: 'Image 12.png',
          category: 'Website Information Architecture',
        },
        {
          id: 'appsian-why',
          title: '"Why Appsian" Executive Narrative & IDC Breach Proof',
          caption:
            'Problem-framing narrative anchoring urgency around IDC research ("64% of ERP [Oracle and SAP] deployments have been breached in the last 24 months") and positioning Appsian across Access Controls, Compliance & Audit, and Threat Protection.',
          sourceImageName: 'Image 13.png',
          category: 'Category Narrative & Proof',
        },
        {
          id: 'appsian-pillars',
          title: 'Three-Tier Solution Architecture Cards',
          caption:
            'Modular solution taxonomy distilling complex ERP security hooks into three intuitive buyer paths: Control User Access, Enable Compliance and Audit, and Advanced Threat Protection.',
          sourceImageName: 'Image 14.png',
          category: 'Product Taxonomy',
        },
        {
          id: 'appsian-key-messaging',
          title: 'Appsian Executive Key Messaging Deck',
          caption:
            'Core messaging hierarchy contrasting static access rules with contextual attribute-based security and positioning Appsian as a high-ROI alternative to ripping and replacing legacy ERP systems.',
          sourceImageName: 'Image 15.png',
          category: 'Messaging Blueprint',
        },
      ],
    },
    {
      slug: 'core42',
      company: 'CORE42 (A G42 COMPANY)',
      badge: 'Sovereign Cloud & AI',
      title: 'AI Infrastructure Positioning & Enterprise Sovereign Cloud GTM',
      challenge:
        'Translating sovereign cloud architectures and high-density AI infrastructure capabilities for compliance-heavy, regulated enterprise buyers.',
      contribution:
        'Strategic sales enablement advisor; built executive pitch decks, competitive battlecards, packaging frameworks, and market taxonomy.',
      metricTitle: '2 Enterprise Wins',
      metricSubtitle: 'Sovereign AI Infrastructure Conversion',
      iconName: 'cpu',
      featuredOnHome: true,
      period: 'Strategic Advisory & Enablement Sprint',
      role: 'Product Marketing & Sales Enablement Advisor',
      segment: 'Sovereign Cloud & High-Density AI Compute Infrastructure',
      executiveSummary:
        'Advised Core42 (a G42 company) on positioning its Sovereign Public Cloud and AI Infrastructure portfolio for government, financial services, and regulated enterprise buyers. Created the signature "Control to Chaos, and Back" executive narrative and equipped field sales with competitive battlecards and solution decks that directly supported two landmark enterprise conversions.',
      problemContext: [
        'Regulated enterprises and public-sector ministries were caught between legacy on-premise server rooms (high operational overhead, limited AI scale) and hyperscale public clouds (compliance friction and data residency exposure).',
        'Sales teams needed an executive-level narrative that framed Sovereign Cloud not as a compromise, but as the strategic evolution that restores full data control while unlocking hyperscale AI compute.',
      ],
      strategicExecution: [
        {
          heading: '01. "The Infrastructure Journey: Control to Chaos, and Back" Narrative',
          description:
            'Crafted the core visual story arc contrasting On-Premise (Server rooms, Physical infra, Local control) and Public Cloud (Compliance & Data residency gaps) with Core42 Sovereign Cloud (Compliant, secure, and fully protected—Gaining Back Control).',
        },
        {
          heading: '02. Competitive Battlecards & Solution Packaging',
          description:
            'Built field-ready battlecards and modular pitch decks tailored to CIOs, Chief Data Officers, and National Security stakeholders evaluating sovereign AI data centers and private cloud suites.',
        },
        {
          heading: '03. Enterprise Deal Enablement',
          description:
            'Partnered directly with enterprise account directors to customize executive briefings and value propositions, contributing to 2 high-value sovereign AI infrastructure wins.',
        },
      ],
      impactMetrics: [
        {
          value: '2 Wins',
          label: 'ENTERPRISE CONVERSIONS',
          detail: 'Landmark sovereign AI & cloud infrastructure accounts closed',
        },
        {
          value: '100%',
          label: 'FIELD ADOPTION',
          detail: 'Standardized sovereign cloud pitch narrative across sales',
        },
        {
          value: 'C-Suite',
          label: 'BUYER ALIGNMENT',
          detail: 'Tailored for CIO, CISO, and public-sector compliance leaders',
        },
      ],
      artifacts: [
        {
          id: 'core42-infrastructure-journey',
          title: 'Core42 Executive Pitch Slide — "The Infrastructure Journey"',
          caption:
            'Signature strategic framing slide ("Shift from Control to Chaos, and Back") illustrating the progression from On-Premise constraints through Public Cloud compliance chaos to Sovereign Cloud control.',
          sourceImageName: 'Image 11.png',
          category: 'Executive Pitch Narrative',
        },
      ],
    },
    {
      slug: 'valiantys',
      company: 'VALIANTYS',
      badge: 'Vertical GTM & Enterprise IT',
      title: 'Atlassian Ecosystem Vertical GTM & Utilities Sector Playbook',
      challenge:
        'Expanding enterprise pipeline in regulated industries (Utilities, Financial Services, and Healthcare) with tailored vertical value propositions.',
      contribution:
        'Structured vertical marketing playbooks, sector research frameworks, and executive roundtables mapped to Jira Service Management, Jira Align, and Cloud Migration.',
      metricTitle: '+20% Event Leads',
      metricSubtitle: 'Vertical GTM & Executive Roundtables',
      iconName: 'network',
      featuredOnHome: false,
      period: 'Advisory Sprint · Enterprise Vertical GTM',
      role: 'Product Marketing Consultant',
      segment: 'Enterprise Agile, ITSM & Cloud Transformation (Atlassian Ecosystem)',
      executiveSummary:
        'Developed vertical-specific go-to-market playbooks and field enablement assets for Valiantys, a premier global Atlassian consultancy. Mapped macro industry pressures in Utilities, Financial Services, and Healthcare directly to concrete solution offerings across Jira Service Management (JSM), Jira Align, Agile Coaching, and Cloud Migration.',
      problemContext: [
        'Horizontal Atlassian product messaging failed to resonate with senior transformation leaders in traditional sectors like Utilities and Financial Services, who buy around industry-specific imperatives (net-zero transition, grid reliability, regulatory compliance, and billing modernization).',
        'Regional sales and field marketing teams needed structured vertical matrices and executive roundtable narratives to convert high-value enterprise accounts.',
      ],
      strategicExecution: [
        {
          heading: '01. Sector Priority Research & Visual Frameworks',
          description:
            'Synthesized the 7 core priorities of the Utilities sector—from accelerating net-zero targets and closing critical e-mobility skills gaps to zero-trust cybersecurity for connected energy ecosystems and oil/gas/utility value-chain convergence.',
        },
        {
          heading: '02. Solution Opportunity Mapping Matrix',
          description:
            'Built comprehensive GTM matrices connecting industry trends ("Customer & employee experience", "Cloud migration & infrastructure modernization") to Valiantys solutions (JSM, Jira Align, Agile coaching, Jira Work Management, and post-migration analytics advisory).',
        },
        {
          heading: '03. Executive Roundtables & Onboarding Workflow Design',
          description:
            'Designed executive roundtable agendas and multi-step compliance/onboarding process visualizations that drove a +20% increase in qualified event leads.',
        },
      ],
      impactMetrics: [
        {
          value: '+20%',
          label: 'QUALIFIED EVENT LEADS',
          detail: 'Lift in enterprise conversions from vertical roundtables',
        },
        {
          value: '5 Pillars',
          label: 'SOLUTION MAPPING',
          detail: 'JSM, Jira Align, Agile Coaching, JWM & Cloud Migration',
        },
        {
          value: '3 Verticals',
          label: 'INDUSTRY PLAYBOOKS',
          detail: 'Utilities, Financial Services, and Healthcare GTM kits',
        },
      ],
      artifacts: [
        {
          id: 'valiantys-opportunities',
          title: 'Business Opportunities for Valiantys — Vertical Solution Matrix',
          caption:
            'Strategic enablement matrix mapping macro utility trends and organizational impacts directly to Valiantys service lines (Jira Service Management, Jira Align, Agile Coaching, JWM, and Cloud Migration).',
          sourceImageName: 'Image 6.png',
          category: 'Vertical GTM Matrix',
        },
        {
          id: 'valiantys-utilities-sector',
          title: 'Utilities Sector Market Intelligence — "What Does the Utilities Sector Need Now?"',
          caption:
            'Seven-pillar industry research visualization detailing current priorities of utility enterprises: Net Zero acceleration, deep industry expertise, AI/ML digital innovation, connected-grid cybersecurity, e-mobility convergence, operational streamlining, and skills gap closure.',
          sourceImageName: 'Image 7.png',
          category: 'Industry Research & Positioning',
        },
        {
          id: 'onboarding-flow-diagram',
          title: 'Compliance & Onboarding Workflow Architecture',
          caption:
            'Four-stage compliance lifecycle visualization (Confirmed → Fulfilled → Reviewed → Onboarded) clarifying multi-stakeholder visibility and approval overrides.',
          sourceImageName: 'Image 10.png',
          category: 'Process & Product Visualization',
        },
      ],
    },
    {
      slug: 'zenarmor',
      company: 'ZENARMOR',
      badge: 'Network Security',
      title: 'Next-Gen Firewall Enablement & Competitive Battlecards',
      challenge:
        'Differentiating a lightweight, software-defined instant firewall against entrenched legacy hardware firewall vendors.',
      contribution:
        'Conducted in-depth cybersecurity market intelligence and produced competitive battlecards against legacy enterprise firewalls.',
      metricTitle: 'Sales Battlecards',
      metricSubtitle: 'Network Security Competitive Intelligence',
      iconName: 'shield',
      featuredOnHome: false,
      period: 'Advisory Sprint · Cybersecurity Enablement',
      role: 'Product Marketing Consultant',
      segment: 'Software-Defined Next-Generation Firewall (NGFW) & SASE',
      executiveSummary:
        'Partnered with Zenarmor leadership to dissect the legacy hardware firewall landscape and arm sales and channel partners with high-impact competitive battlecards, objection-handling scripts, and deployment comparison matrices.',
      problemContext: [
        'Enterprise network architects and MSPs defaulted to appliance-heavy legacy firewalls despite struggling with remote edge deployments, packet inspection latency, and complex licensing.',
        'Sales reps needed crisp technical counter-positioning to win head-to-head evaluations against legacy NGFW incumbents.',
      ],
      strategicExecution: [
        {
          heading: '01. Deep-Dive Competitive Teardowns',
          description:
            'Analyzed architectural strengths, pricing models, and deployment bottlenecks across major legacy firewall vendors to isolate Zenarmor’s software-defined, appliance-free advantages.',
        },
        {
          heading: '02. Field-Ready Sales Battlecards & Objection Playbooks',
          description:
            'Created structured battlecards featuring landmine questions, technical proof points, TCO comparisons, and rapid objection-handling tracks for SEs and channel partners.',
        },
      ],
      impactMetrics: [
        {
          value: 'Full Suite',
          label: 'COMPETITIVE BATTLECARDS',
          detail: 'Head-to-head positioning vs. legacy NGFW vendors',
        },
        {
          value: 'Channel + Direct',
          label: 'SALES ENABLEMENT',
          detail: 'Deployed across direct AEs, SEs, and MSP partners',
        },
        {
          value: 'Zero-Appliance',
          label: 'CORE WEDGE',
          detail: 'Positioned instant software-defined edge deployment',
        },
      ],
      artifacts: [],
    },
    {
      slug: 'waferwire',
      company: 'WAFERWIRE',
      badge: 'Enterprise AI',
      title: 'AI/ML Platform Value Translation & C-Suite Messaging Blueprint',
      challenge:
        'Translating complex data engineering, Azure AI fabric, and ML pipeline services into measurable executive business outcomes.',
      contribution:
        'Distilled deep artificial intelligence, analytics, and data pipeline technologies into tangible, C-suite ROI positioning frameworks.',
      metricTitle: 'Messaging Blueprint',
      metricSubtitle: 'Enterprise AI Value Translation',
      iconName: 'sparkles',
      featuredOnHome: false,
      period: 'Advisory Sprint · AI & Data Positioning',
      role: 'Product Marketing Advisor',
      segment: 'Enterprise AI/ML Engineering & Data Modernization',
      executiveSummary:
        'Developed a comprehensive messaging blueprint for WaferWire, bridging the gap between deeply technical AI/ML data pipeline capabilities and C-suite ROI priorities across enterprise transformation accounts.',
      problemContext: [
        'Technical delivery teams described capabilities in terms of model architectures and data lake schemas rather than revenue velocity, operational cost reduction, and governance readiness.',
      ],
      strategicExecution: [
        {
          heading: '01. Executive Value Translation Matrix',
          description:
            'Mapped low-level AI/ML engineering capabilities into board-level business drivers for CIOs, Chief Data Officers, and VP of Engineering personas.',
        },
        {
          heading: '02. Solution Messaging Hierarchy & Pitch Architecture',
          description:
            'Standardized the narrative arc across website copy, executive pitch decks, and solution briefs.',
        },
      ],
      impactMetrics: [
        {
          value: 'C-Suite',
          label: 'ROI FRAMEWORKS',
          detail: 'Aligned technical AI/ML delivery with executive KPIs',
        },
        {
          value: 'End-to-End',
          label: 'MESSAGING BLUEPRINT',
          detail: 'Unified taxonomy across AI, analytics, and data pipelines',
        },
        {
          value: 'Multi-Persona',
          label: 'BUYER PLAYBOOKS',
          detail: 'Tailored tracks for CIO, CDO, and VP Engineering',
        },
      ],
      artifacts: [],
    },
    {
      slug: 'lightbeam',
      company: 'LIGHTBEAM',
      badge: 'Data Privacy & AI',
      title: 'Data Privacy & Governance Positioning at IAPP Global Summit 2024',
      challenge:
        'Capturing CISO and Chief Privacy Officer attention in a crowded privacy-tech market at the industry’s flagship global summit.',
      contribution:
        'Delivered targeted sales enablement playbooks and multi-touch presentation assets for major global privacy officer summit.',
      metricTitle: 'Event Enablement',
      metricSubtitle: 'IAPP 2024 Executive GTM',
      iconName: 'lock',
      featuredOnHome: false,
      period: 'Advisory Sprint · Event & Field GTM',
      role: 'Product Marketing Consultant',
      segment: 'Identity-Centric Data Security Posture Management (DSPM) & Privacy Automation',
      executiveSummary:
        'Built high-impact field enablement playbooks, booth/briefing narratives, and multi-touch presentation decks for LightBeam ahead of the IAPP Global Privacy Summit 2024.',
      problemContext: [
        'Privacy and security leaders attending IAPP were inundated with generic compliance messaging and needed clear differentiation around automated, identity-centric data governance.',
      ],
      strategicExecution: [
        {
          heading: '01. IAPP 2024 Executive Briefing & Presentation Assets',
          description:
            'Crafted sharp, scenario-driven presentation decks and executive conversation guides tailored to Chief Privacy Officers and CISOs.',
        },
        {
          heading: '02. Multi-Touch Field Enablement Playbook',
          description:
            'Structured pre-event outreach, on-site discovery scripts, and post-summit follow-up sequences to maximize booth-to-pipeline conversion.',
        },
      ],
      impactMetrics: [
        {
          value: 'IAPP 2024',
          label: 'SUMMIT ENABLEMENT',
          detail: 'Full suite of executive presentation & field assets',
        },
        {
          value: 'CPO / CISO',
          label: 'PERSONA ALIGNMENT',
          detail: 'Identity-centric privacy & DSPM value narratives',
        },
        {
          value: 'Multi-Touch',
          label: 'FIELD PLAYBOOK',
          detail: 'Pre-show, booth briefing, and post-event conversion kits',
        },
      ],
      artifacts: [],
    },
    {
      slug: 'appventory',
      company: 'APPVENTORY',
      badge: 'Seed to Series A GTM',
      title: 'Zero-to-One Product Repositioning & Demand Engine Build',
      challenge:
        'Repositioning an early-stage SaaS platform from feature-level IT tracking to CFO-grade SaaS spend, compliance, and vendor visibility.',
      contribution:
        'Rebuilt marketing GTM strategy from zero, architected programmatic SEO wedges, established board-level reporting, and recruited Demand Gen talent.',
      metricTitle: '+20% Event Leads',
      metricSubtitle: 'Full-Stack PMM & GTM Leadership',
      iconName: 'layers',
      featuredOnHome: false,
      period: 'Jan 2026 – Present · Active Leadership',
      role: 'Marketing Lead (Fractional / Advisory)',
      segment: 'SaaS Spend Management, Compliance & Vendor Visibility',
      executiveSummary:
        'Brought in as Marketing Lead to reposition Appventory, build the marketing function from the ground up, and unlock repeatable customer acquisition across Seed-to-Series A growth stages.',
      problemContext: [
        'Early product positioning focused narrowly on technical feature checklists rather than the strategic financial and compliance pain points owned by CFOs, Finance Controllers, and Auditors.',
      ],
      strategicExecution: [
        {
          heading: '01. Core Product Repositioning',
          description:
            'Rebuilt marketing GTM strategy from zero, realigning feature specifications with CFO-level SaaS compliance and vendor visibility narratives.',
        },
        {
          heading: '02. High-Intent SEO Wedge',
          description:
            'Architected specialized accountant & auditor programmatic content hubs to capture non-branded bottom-of-funnel search intent.',
        },
        {
          heading: '03. Executive Reporting Cadence & Team Execution',
          description:
            'Established end-to-end pipeline attribution and board-level monthly reporting cadence across inbound and outbound channels while recruiting Demand Gen talent and realizing +20% higher qualified event lead conversions.',
        },
      ],
      impactMetrics: [
        {
          value: '+20%',
          label: 'EVENT LEAD CONVERSION',
          detail: 'Lift in qualified field & event pipeline conversion',
        },
        {
          value: '0 → 1',
          label: 'GTM REBUILD',
          detail: 'Complete repositioning around CFO & auditor personas',
        },
        {
          value: 'Board-Level',
          label: 'ATTRIBUTION CADENCE',
          detail: 'End-to-end inbound & outbound pipeline reporting',
        },
      ],
      artifacts: [],
    },
  ] as CaseStudy[],
};
