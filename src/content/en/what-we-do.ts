/**
 * Контент сторінки What We Do.
 * Макет: desktop node 9239:708, mobile node 9413:495.
 */
export const whatWeDo = {
  hero: {
    breadcrumb: "What we do",
    title: "AI services: Custom Artificial Intelligence solutions",
    subtitle:
      "AI moves fast, but most enterprises are still stuck between strategy and execution. We help you get ahead of it with a full spectrum of AI services, scoped to your industry, infrastructure, and delivered with one goal — turning AI into your lasting competitive edge.",
    actions: [
      { label: "Book a Discovery Call", href: "/about#contact" },
      { label: "Contact Us", href: "/about#contact" },
    ],
  },

  /** «Our custom solutions» — node 9318:77618. */
  customSolutions: {
    title: "Our custom solutions",
    topics: [
      "AI, Data & Integration Services",
      "Data Analytics & Business Intelligence",
      "AI & Machine Learning Solutions",
      "Database Engineering & Optimization",
      "Digital Transformation & Process Automation",
      "Cloud Infrastructure, DevOps & Platform Engineering",
      "AI Strategy, Consulting & Governance",
      "AI-Powered Applications & User Experiences",
    ],
    /** Пункти активної теми. */
    activeItems: [
      "Development & Integration",
      "Custom Web and Backend Solutions",
      "Seamless API Integration Across Enterprise Systems",
      "Unified Data Integration from CRM, ERP, APIs, Log Streams, and IoT Devices",
      "Scalable Microservices Architecture with Embedded AI Capabilities",
    ],
  },

  /** «Custom AI solutions for business» — node 9320:77996. */
  businessSolutions: {
    title: "Custom AI solutions for business",
    cards: [
      {
        title: "Deep Process Automation",
        description:
          "Machine Learning and AI technologies automate repetitive and time-consuming tasks, reducing operational workloads and increasing efficiency. From workforce scheduling to financial reporting, AI enables faster execution, greater consistency, and improved scalability.",
        image: "/images/wwd/solution-01.webp",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Modern AI-powered assistants and conversational systems provide intelligent, context-aware customer interactions around the clock. Available 24/7 and capable of handling high volumes of requests, they help organizations deliver responsive, high-quality customer service at scale.",
        image: "/images/wwd/solution-02.webp",
      },
      {
        title: "Intelligent Content Generation",
        description:
          "Large Language Models (LLMs) and Generative AI accelerate the creation of business content, including marketing materials, internal communications, product descriptions, design concepts, and more. This enables organizations to increase productivity while maintaining quality and consistency.",
        image: "/images/wwd/solution-03.webp",
      },
      {
        title: "Predictive Analytics",
        description:
          "AI models analyze large volumes of historical and real-time data to identify trends, forecast demand, evaluate risks, and anticipate market changes. These insights help organizations make proactive decisions and adapt their strategies with confidence.",
        image: "/images/wwd/solution-04.webp",
      },
    ],
  },

  /**
   * «AI Implementation Roadmaps» — node 9325:1161.
   * Вкладки. Контент 4 з 6 узятий із фреймів макета (у Figma вони приховані —
   * дизайнер показує лише один стан за раз). Для двох останніх вкладок контенту
   * в макеті немає, тому вони неактивні — див. README.
   */
  roadmaps: {
    title: "AI Implementation Roadmaps",
    tabs: [
      {
        label: "MVP Development",
        kicker: "MVP Development",
        lead: "Launch Your MVP Faster — Built for Scale from Day One",
        intro:
          "Speed matters, but so does building the right foundation. We help startups and product teams launch market-ready MVPs quickly while ensuring the architecture can support future growth, new features, and increasing user demand. From founders to CTOs, every stakeholder has different objectives. Our process is designed to address both immediate business goals and long-term technical requirements.",
      },
      {
        label: "For Founders & Startup CEOs",
        heading: "For Founders & Startup CEOs",
        intro:
          "Whether you're preparing for your first fundraising round, validating a new business idea, or launching a product backed by investors, we help you move from concept to a working MVP with measurable business outcomes.",
        benefitsTitle: "By Working With Us, You Will",
        benefits: [
          {
            title: "Accelerate Time-to-Market",
            text: "Launch a production-ready MVP in the shortest possible timeframe, allowing you to validate assumptions and gather market feedback quickly.",
          },
          {
            title: "Build Investor-Ready Metrics",
            text: "Establish the analytics foundation needed to track key performance indicators, including user retention, engagement, activation, and adoption metrics from your first 500–1,000 users.",
          },
          {
            title: "Validate Product-Market Fit Early",
            text: "Test your product with real users, collect actionable feedback, and refine your offering before making significant investments in large-scale development.",
          },
          {
            title: "Scale Without Rebuilding",
            text: "Launch on a scalable architecture that supports future expansion.",
          },
          {
            title: "What Makes Our Approach Different",
            text: "We don't just build MVPs — we build investment-ready products designed to generate learning, validate demand, and create a clear path toward sustainable growth and future fundraising.",
          },
        ],
      },
      {
        label: "For Business Owners & Product Managers",
        heading: "For Business Owners & Product Managers",
        intro:
          "Whether you're launching a new digital business line, modernizing existing operations, or managing a product launch within defined timelines and budgets, we help you bring initiatives to market efficiently while minimizing operational risk:",
        benefits: [
          {
            title: "Launch New Digital Products",
            text: "Bring new products, services, or digital business initiatives to market quickly, enabling you to capture opportunities and respond to customer demand without unnecessary delays.",
          },
          {
            title: "Automate Business Processes",
            text: "Reduce manual effort and operational overhead by digitizing and automating critical business workflows, improving efficiency, accuracy, and scalability.",
          },
          {
            title: "Integrate with Existing Business Systems",
            text: "Connect the new solution with CRM platforms, ERP systems, inventory management software, and other core business applications without disrupting ongoing operations.",
          },
          {
            title: "Deliver Within Scope",
            text: "Launch your product through a structured delivery process with clearly defined requirements, transparent project governance, and predictable execution.",
          },
        ],
        outcomesTitle: "Business Outcomes",
        outcomes: [
          "Improved time-to-market for new products and services",
          "Improved operational efficiency through automation",
          "Seamless integration with existing technology ecosystems",
          "Reduced implementation risk and operational disruption",
          "Greater visibility and control over project timelines and scope",
        ],
        closing:
          "We help organizations transform ideas into scalable digital products while maintaining business continuity and ensuring every investment supports long-term growth objectives.",
      },
      {
        label: "For CTOs & Technical Leaders",
        heading: "For CTOs & Technical Leaders",
        intro:
          "Whether you need to rapidly expand your engineering capacity, accelerate product delivery, or build a scalable technology foundation, we work as an extension of your team to deliver high-quality software aligned with your architectural standards and business objectives. Our focus is not only on delivering features but on building maintainable, scalable systems that can support long-term growth.",
        benefitsTitle: "By Working With Us, You Will",
        benefits: [
          {
            title: "Scale Engineering Capacity Quickly",
            text: "Augment your existing team with experienced engineers, architects, and product specialists who can contribute immediately and integrate seamlessly into your development processes.",
          },
          {
            title: "Accelerate Product Development",
            text: "Increase delivery velocity without compromising code quality, security, or maintainability, enabling your team to meet critical business and product milestones.",
          },
          {
            title: "Build for Scale from Day One",
            text: "Receive an MVP or production-ready solution designed with scalable architecture, ensuring future growth can be supported without re-engineering.",
          },
          {
            title: "Integrate Seamlessly with Existing Workflows",
            text: "Collaborate through your current toolchain and processes, including Slack, Jira, GitHub, GitLab, and other development platforms, without requiring additional project management overhead.",
          },
          {
            title: "Strengthen and Optimize Architecture",
            text: "Leverage our expertise in system design, cloud infrastructure, performance optimization, and software architecture to improve scalability, reliability, and operational efficiency.",
          },
        ],
        outcomesTitle: "Business Outcomes",
        outcomes: [
          "Faster delivery of strategic technology initiatives",
          "Increased engineering capacity without long-term hiring commitments",
          "Scalable and maintainable system architecture",
          "Improved development efficiency and team productivity",
          "Reduced technical debt and stronger engineering foundations",
        ],
        closing:
          "We operate as a collaborative technology partner, aligning with your engineering culture, processes, and technical standards while helping your team deliver ambitious product and business goals.",
      },
      { label: "Testing, Validation & Production Readiness" },
      { label: "Deployment & Production Rollout" },
    ],
  },

  /** «Why choose evodata» — node 9330:4369. */
  whyChoose: {
    title: "Why choose evodata",
    cards: [
      {
        title: "Proven Long-Term Project Experience",
        description:
          "We have successfully delivered and supported projects with lifecycles extending beyond 10 years. This experience enables us to build solutions that remain scalable, maintainable, and valuable long after initial deployment.",
        image: "/images/wwd/why-01.webp",
      },
      {
        title: "End-to-End Delivery",
        description:
          "From data collection and infrastructure design to model deployment and monitoring, we manage the entire AI and analytics lifecycle.",
        image: "/images/wwd/why-02.webp",
      },
      {
        title: "Vendor-Neutral Expertise",
        description:
          "We select technologies based on business requirements rather than vendor preferences, ensuring the best fit for each project.",
        image: "/images/wwd/why-03.webp",
      },
      {
        title: "Long-Term Partnership Mindset",
        description:
          "We focus on sustainable relationships and continuous improvement rather than short-term project delivery.",
        image: "/images/wwd/why-04.webp",
      },
      {
        title: "Technology as a Competitive Advantage",
        description:
          "We believe technology is the strongest driver of sustainable competitive advantage. By combining advanced AI, data analytics, and intelligent automation, we help organizations outperform competitors, accelerate innovation, and unlock new opportunities for growth.",
        image: "/images/wwd/why-05.webp",
      },
    ],
  },

  /** Брендова смуга з глобусом — node 9245:24503. */
  band: {
    title: "Your AI partner — \nanywhere on the globe",
  },

  /** «Everything you need to now» — node 9241:24297. */
  faq: {
    title: "Everything you need to now",
    items: [
      {
        title: "Typical projects",
        paragraphs: [
          "The investment required for AI implementation depends on the complexity of the solution, integration requirements, data availability, and regulatory considerations.",
        ],
        bullets: [
          "Proof of Concept (PoC) — validate a business hypothesis and assess technical feasibility within approximately 4 weeks.",
          "AI Assistant with RAG (Retrieval-Augmented Generation) — production-ready AI assistant integrated with your knowledge base and business data.",
          "Intelligent Document Processing (IDP) — automated document extraction, classification, and workflow integration.",
          "Computer Vision Solutions — custom model adaptation, training, and integration for image and video analysis use cases.",
          "LLM Fine-Tuning & Custom AI Models — domain-specific model customization and optimization.",
          "Enterprise AI Transformation Programs — comprehensive AI solutions combining multiple AI modules, integrations, and business workflows.",
        ],
      },
      {
        title: "Final Project Pricing",
        paragraphs: [
          "A detailed cost estimate is provided following the Discovery & Assessment phase. Pricing is determined by several factors, including:",
        ],
        bullets: [
          "Data volume and quality",
          "Integration complexity",
          "Infrastructure requirements",
          "Security and compliance obligations",
          "Performance, scalability, and availability targets",
          "Customization and model training requirements",
        ],
      },
      { title: "Can AI Be Integrated with Legacy Systems?" },
      { title: "Do You Work Under NDA?" },
      { title: "Can Development Start Without a Design?" },
      { title: "What Happens After Go-Live?" },
      { title: "Do You Work with International Clients?" },
      { title: "What Data Is Required for an AI Solution?" },
    ],
  },
} as const;

export type WhatWeDoContent = typeof whatWeDo;
