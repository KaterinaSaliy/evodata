import type { RichBlock } from "@/components/ui/RichBlocks";

/**
 * Industries page copy.
 * Design: desktop node 9254:101114, mobile node 9415:93312.
 * Texts follow the client deck «Industries.pdf».
 */
export const industries = {
  /**
   * The hero carries what used to be the `Quote` block further down the page
   * (node 9318:77595) — the block itself is gone from Industries, so the line
   * is said once and at the top.
   */
  hero: {
    breadcrumb: "Industries",
    title:
      "Technology and innovation are \nthe foundation of competitive advantage.",
    subtitle:
      "Organizations that successfully leverage advanced technologies are better positioned to improve efficiency, accelerate growth, and outperform their competitors.",
  },

  /** "Our custom solutions" — node 9325:3623; deck p. 2. */
  customSolutions: {
    title: "Our custom solutions",
    topics: [
      {
        label: "E-commerce",
        items: [
          "Product Recommendation Engines",
          "Demand Forecasting",
          "Personalization and Customer Segmentation",
          "Dynamic Pricing Optimization",
          "Customer Behavior Analytics",
        ],
      },
      {
        label: "Finance & Banking",
        items: [
          "Credit Scoring and Risk Assessment",
          "Fraud Detection and Prevention",
          "Default Risk Prediction",
          "Financial Forecasting and Analytics",
          "AML and Compliance Monitoring",
        ],
      },
      {
        label: "Manufacturing",
        items: [
          "Predictive Maintenance",
          "Automated Defect Detection",
          "Quality Control and Inspection",
          "Machine Health Monitoring",
          "Production Process Optimization",
        ],
      },
      {
        label: "Retail",
        items: [
          "Inventory Optimization",
          "Demand Forecasting",
          "Dynamic Pricing",
          "Retail Analytics",
          "Customer Insights and Segmentation",
        ],
      },
      {
        label: "Logistics & Supply Chain",
        items: [
          "Route and Fleet Optimization",
          "Supply Chain Analytics",
          "Delivery Forecasting",
          "Demand and Supply Planning",
          "Logistics Performance Optimization",
        ],
      },
      {
        label: "EdTech & HRTech",
        items: [
          "Learning Analytics and Performance Prediction",
          "Adaptive Learning Systems",
          "Recruitment Automation",
          "Candidate Matching and Ranking",
          "Workforce Analytics",
        ],
      },
      {
        label: "Healthcare",
        items: [
          "Medical Image Analysis",
          "Diagnostic Prediction Models",
          "Clinical Decision Support Systems",
          "Patient Risk Assessment",
          "Healthcare Data Analytics",
        ],
      },
      {
        label: "Marketing",
        items: [
          "Campaign Performance Analytics",
          "Customer Segmentation",
          "Content Personalization",
          "Marketing Attribution",
          "Predictive Marketing Analytics",
        ],
      },
    ],
  },

  /**
   * "The Business Value of AI Transformation" — node 9329:4246; deck p. 3.
   * The fourth card follows the deck ("Create a Sustainable Competitive
   * Advantage"), not the design, which called it "Predictive Analytics" —
   * settled by the client.
   */
  businessValue: {
    title: "The Business Value of AI Transformation",
    intro:
      "AI transformation is more than the adoption of new technology—it is a strategic initiative that drives operational efficiency, accelerates growth, and creates sustainable competitive advantages.",
    cards: [
      {
        title: "Reduce Operational Costs",
        description:
          "AI automates repetitive and time-consuming tasks, reducing manual workloads and streamlining business operations. By optimizing processes and improving resource allocation, organizations can significantly lower operating expenses while maintaining service quality and consistency.",
        image: "/images/ind/value-01.webp",
      },
      {
        title: "Increase Team Productivity",
        description:
          "When routine activities are automated, employees can focus on higher-value initiatives such as innovation, strategic planning, customer relationships, and business development. This shift enables teams to work more efficiently and contribute greater value to the organization.",
        image: "/images/ind/value-02.webp",
      },
      {
        title: "Deliver Measurable ROI",
        description:
          "Modern AI solutions provide clear visibility into business impact through performance analytics and measurable outcomes. Organizations can track key metrics, evaluate return on investment, and make data-driven decisions based on real operational results.",
        image: "/images/ind/value-03.webp",
      },
      {
        title: "Create a Sustainable Competitive Advantage",
        description:
          "AI enables businesses to respond faster to market opportunities, launch new products more efficiently, and scale operations with greater agility. Automated systems operate around the clock, providing continuous service, faster response times, and enhanced customer experiences that help organizations stay ahead of competitors.",
        image: "/images/ind/value-04.webp",
      },
    ],
    outcomes: {
      title: "Key Outcomes of AI Transformation",
      items: [
        "Lower operational costs through intelligent automation",
        "Increased productivity and more effective resource utilization",
        "Data-driven decision-making supported by measurable business outcomes",
        "Faster innovation and accelerated time-to-market",
        "Improved scalability and operational resilience",
        "Enhanced customer experience and service availability",
        "Long-term competitive differentiation in rapidly evolving markets",
      ],
      closing:
        "AI transformation empowers organizations to operate more efficiently today while building the foundation for future growth and innovation.",
    },
  },

  /**
   * "From the first idea to scaling…" — node 9329:4329; deck p. 4.
   * The hidden Figma frames of this section held copy left over from What We
   * Do; all five panels below come from the client deck instead.
   */
  stages: {
    title:
      "From the first idea to scaling, each stage requires its own approach.",
    tabs: [
      {
        label: "Investors Expect More Than a Pitch Deck — They Expect Traction",
        blocks: [
          {
            type: "heading",
            text: "Investors Expect More Than a Pitch Deck — They Expect Traction",
          },
          {
            type: "paragraph",
            text: "Today's investors want to see more than an idea. They expect evidence of market demand, real user engagement, and measurable growth indicators. A working MVP with active users and meaningful metrics can significantly strengthen your position during fundraising discussions.",
          },
          {
            type: "paragraph",
            text: "By starting 5–6 months before your target fundraising round, you can launch an MVP, acquire early users, collect feedback, and build the traction investors look for.",
          },
          { type: "subheading", text: "When This Is Relevant" },
          {
            type: "bullets",
            items: [
              "You are planning a Pre-Seed or Seed funding round within the next 5–6 months",
              "Investors are requesting traction metrics and evidence of market demand",
              "You have a prototype or concept, but no live product with active users",
              "You need measurable validation of product-market fit before fundraising",
            ],
          },
          { type: "subheading", text: "What You Will Achieve" },
          {
            type: "definitions",
            items: [
              {
                title: "Launch a Working MVP within a short period of time",
                text: "Present investors with a functioning product rather than a concept or static presentation, demonstrating execution capability and market readiness.",
              },
              {
                title: "Generate Early User Metrics",
                text: "Collect meaningful data on user acquisition, engagement, retention, and product usage, providing objective evidence of customer interest and demand.",
              },
              {
                title: "Optimize Investment Efficiency",
                text: "Reduce unnecessary development costs through strategic feature prioritization focused on validating core assumptions and supporting fundraising objectives.",
              },
              {
                title: "Establish a Post-Funding Growth Roadmap",
                text: "Develop a clear and realistic scaling plan, including product evolution, technical requirements, and key milestones for growth after the investment round.",
              },
            ],
          },
          { type: "subheading", text: "Our Approach" },
          {
            type: "definitions",
            items: [
              {
                title: "1. Define the Minimum Viable Scope",
                text: "Through a series of focused discovery and planning workshops, we identify the smallest set of features required to validate the product concept and demonstrate value to users and investors.",
              },
              {
                title: "2. Accelerate MVP Development",
                text: "We design, build, and launch the MVP using a scalable architecture that supports future product growth without requiring a complete rebuild.",
              },
              {
                title: "3. Measure What Matters",
                text: "From day one, we implement analytics and tracking frameworks to capture critical metrics such as user engagement, activation, retention, and adoption—providing the data needed to support a compelling investment narrative.",
              },
            ],
          },
          { type: "subheading", text: "The Outcome" },
          {
            type: "paragraph",
            text: "A market-tested MVP, real user feedback, measurable traction, and a stronger position for investor conversations—supported by data rather than assumptions.",
          },
        ] satisfies RichBlock[],
      },

      {
        label: "You Have a Product Idea, But No Development Team",
        blocks: [
          {
            type: "heading",
            text: "You Have a Product Idea, But No Development Team",
          },
          {
            type: "paragraph",
            text: "Building an in-house product team takes a lot of time, money, and resources. Recruiting, onboarding, establishing processes, and aligning stakeholders can take months—or even years. During that time, competitors may enter the market, validate similar ideas, and capture valuable market share.",
          },
          {
            type: "paragraph",
            text: "We help founders and businesses move from concept to a working product quickly, allowing you to demonstrate a live solution rather than a slide deck, mockup, or business plan.",
          },
          { type: "subheading", text: "When This Is Relevant" },
          {
            type: "bullets",
            items: [
              "You have a validated business hypothesis that needs rapid market testing",
              "Building an internal engineering department is not currently feasible",
              "You need a working prototype for investors, partners, customers, or internal stakeholders",
              "Time-to-market is a critical business factor, and delays could result in lost opportunities",
            ],
          },
          { type: "subheading", text: "What You Will Achieve" },
          {
            type: "definitions",
            items: [
              {
                title: "Launch Faster Without Building an Internal Team",
                text: "Bring your product to life in a fraction of the time required to recruit and assemble a full development organization, enabling faster validation and market entry.",
              },
              {
                title: "Optimize Development Investment",
                text: "Reduce unnecessary spending through strategic feature prioritization, ensuring resources are focused on delivering the highest business value.",
              },
              {
                title: "Validate Assumptions with Real Users",
                text: "Test your product with actual users, gather meaningful feedback, and make decisions based on data rather than assumptions.",
              },
              {
                title: "Gain the Stability of an Experienced Delivery Team",
                text: "Work with a multidisciplinary team operating through proven development processes, established workflows, and best practices refined across multiple product launches.",
              },
            ],
          },
          { type: "subheading", text: "Our Approach" },
          {
            type: "definitions",
            items: [
              {
                title: "1. Discovery & Solution Design",
                text: "Through a series of focused planning workshops, we define the technical architecture, project scope, product priorities, and delivery roadmap.",
              },
              {
                title: "2. Accelerated Product Development",
                text: "Our team begins implementation, delivering a functional prototype or MVP in the shortest practical timeframe while maintaining quality and scalability standards.",
              },
              {
                title: "3. Transparent Project Delivery",
                text: "You receive full visibility into progress through structured project management, regular stakeholder meetings, milestone reviews, and ongoing communication throughout the engagement.",
              },
            ],
          },
          { type: "subheading", text: "The Outcome" },
          {
            type: "paragraph",
            text: "A working product delivered quickly, validated by real users, built on a scalable technical foundation, and ready for demonstrations, partnerships, fundraising, or commercial launch.",
          },
        ] satisfies RichBlock[],
      },

      {
        label:
          "Testing a New Business Direction Without Building an Internal Team",
        blocks: [
          {
            type: "heading",
            text: "Testing a New Business Direction Without Building an Internal Team",
          },
          {
            type: "paragraph",
            text: "Exploring a new digital product, service, or business model often involves significant uncertainty. Building an internal engineering team before validating demand can create substantial costs in recruitment, salaries, infrastructure, and ongoing operational overhead.",
          },
          {
            type: "paragraph",
            text: "A more effective approach is to validate market demand first, collect real-world data, and make investment decisions based on measurable outcomes rather than assumptions.",
          },
          { type: "subheading", text: "When This Is Relevant" },
          {
            type: "bullets",
            items: [
              "You are launching a new digital product or service within an existing business",
              "You are expanding an offline business into digital channels",
              "Market demand is uncertain, and you want to avoid committing to a full internal development team",
              "The solution must integrate with existing business systems such as CRM, ERP, inventory, or operational platforms",
              "You need reliable data to determine whether to scale, refine, or discontinue the initiative",
            ],
          },
          { type: "subheading", text: "What You Will Achieve" },
          {
            type: "definitions",
            items: [
              {
                title: "Validate Market Demand with Lower Risk",
                text: "Test a new business concept without the cost and complexity of creating an in-house engineering department, allowing you to evaluate demand before making larger investments.",
              },
              {
                title: "Integrate with Existing Business Systems",
                text: "Connect the solution to your CRM, ERP, inventory management, and other operational platforms through secure APIs and automated data exchange processes.",
              },
              {
                title: "Make Data-Driven Decisions",
                text: "Gain access to real usage metrics, customer feedback, and operational insights that support informed decisions regarding scaling, optimization, or strategic direction.",
              },
              {
                title: "Minimize Investment Risk",
                text: "Focus resources on validating business assumptions first, preserving flexibility and enabling rapid pivots if market conditions or customer needs evolve.",
              },
            ],
          },
          { type: "subheading", text: "Our Approach" },
          {
            type: "definitions",
            items: [
              {
                title: "1. Business Process & Integration Assessment",
                text: "We analyze existing workflows, systems, and operational requirements to identify integration points and opportunities for automation.",
              },
              {
                title: "2. Solution Architecture & Planning",
                text: "We design a solution tailored to your technology landscape, security requirements, compliance standards, and long-term business objectives.",
              },
              {
                title: "3. Pilot Launch",
                text: "A pilot version is deployed to a selected audience segment, enabling real-world testing while limiting operational and financial risk.",
              },
              {
                title: "4. Measurement & Strategic Evaluation",
                text: "We collect user feedback, engagement metrics, and business performance data, providing the evidence needed to support future investment decisions.",
              },
            ],
          },
          { type: "subheading", text: "The Outcome" },
          {
            type: "paragraph",
            text: "A validated business opportunity, measurable market feedback, and a clear strategic path forward—whether that means scaling the initiative, refining the offering, or reallocating resources with confidence.",
          },
        ] satisfies RichBlock[],
      },

      {
        label: "MVP Has Proven Demand, but the Architecture Can't Keep Up",
        blocks: [
          {
            type: "heading",
            text: "MVP Has Proven Demand, but the Architecture Can't Keep Up",
          },
          {
            type: "paragraph",
            text: "Reaching product-market fit is a major milestone. However, many MVPs are built to validate an idea—not to support rapid growth. As user adoption increases, performance issues, system instability, and technical debt can quickly become barriers to scaling.",
          },
          {
            type: "paragraph",
            text: "Slow response times, outages, and degraded user experiences lead to lost customers, lower retention, and missed revenue opportunities. At this stage, the focus shifts from validation to building a scalable foundation for growth.",
          },
          { type: "subheading", text: "When This Is Relevant" },
          {
            type: "bullets",
            items: [
              "Users are reporting slow performance, downtime, or reliability issues",
              "The application struggles to handle growing traffic or transaction volumes",
              "You need to introduce monetization features, but the current codebase limits further development",
              "Technical debt is accumulating faster than your team can address it",
              "Scaling challenges are beginning to impact customer satisfaction and business growth",
            ],
          },
          { type: "subheading", text: "What You Will Achieve" },
          {
            type: "definitions",
            items: [
              {
                title: "Comprehensive Technical Audit",
                text: "Gain a clear understanding of architectural bottlenecks, scalability risks, performance constraints, and technical debt through a detailed assessment and prioritized remediation roadmap.",
              },
              {
                title: "Modernization Without Downtime",
                text: "Improve the architecture incrementally while keeping the product operational, ensuring business continuity throughout the modernization process.",
              },
              {
                title: "Monetization-Ready Platform",
                text: "Introduce capabilities such as subscription management, payment processing, analytics, reporting, and customer lifecycle tracking to support sustainable revenue growth.",
              },
              {
                title: "Scalability for Future Growth",
                text: "Optimize infrastructure, application architecture, and operational processes to support significant increases in users, transactions, and system workload.",
              },
            ],
          },
          { type: "subheading", text: "Our Approach" },
          {
            type: "definitions",
            items: [
              {
                title: "1. Technical Assessment & Risk Analysis",
                text: "We conduct a comprehensive audit of the application, infrastructure, and development processes, identifying critical risks, performance bottlenecks, and areas of technical debt.",
              },
              {
                title: "2. Business-Driven Prioritization",
                text: "Recommended improvements are prioritized based on business impact, scalability requirements, operational risk, and expected return on investment.",
              },
              {
                title: "3. Incremental Modernization",
                text: "We modernize the platform through phased releases, feature flags, and controlled rollouts, minimizing risk while continuously improving performance and stability.",
              },
            ],
          },
          { type: "subheading", text: "The Outcome" },
          {
            type: "paragraph",
            text: "A faster, more reliable, and scalable platform capable of supporting business growth, new revenue streams, and significantly higher user demand—without requiring a disruptive full-system rebuild.",
          },
        ] satisfies RichBlock[],
      },

      {
        label:
          "Internal Team Is Overloaded, and Strategic Projects Are Falling Behind",
        blocks: [
          {
            type: "heading",
            text: "Internal Team Is Overloaded, and Strategic Projects Are Falling Behind",
          },
          {
            type: "paragraph",
            text: "When engineering teams are fully occupied maintaining and improving core products, new strategic initiatives often remain stuck in the backlog for months. Meanwhile, market opportunities continue to evolve, and delays can allow competitors to strengthen their position.",
          },
          {
            type: "paragraph",
            text: "Whether you need additional development capacity, specialized expertise, or a dedicated team to execute a parallel initiative, we help accelerate delivery without disrupting your existing roadmap.",
          },
          { type: "subheading", text: "When This Is Relevant" },
          {
            type: "bullets",
            items: [
              "Your internal team is fully focused on the core product, leaving new initiatives delayed indefinitely",
              "You need capabilities such as mobile development, AI implementation, cloud engineering, or specialized expertise that your current team does not possess",
              "A new module, platform, or strategic project must be developed alongside ongoing product work",
              "You want to avoid permanent hiring commitments for a short-term initiative or niche technical skill set",
            ],
          },
          { type: "subheading", text: "What You Will Achieve" },
          {
            type: "definitions",
            items: [
              {
                title: "Rapid Team Integration",
                text: "Our engineers can integrate into your development processes, tooling, and collaboration workflows, enabling productive contribution from the outset.",
              },
              {
                title: "Seamless Collaboration",
                text: "We operate as an extension of your internal team, participating in sprint planning, architecture discussions, and delivery reviews.",
              },
              {
                title: "Communication Through Your Existing Tools",
                text: "Collaboration takes place within your preferred ecosystem, including Slack, Jira, GitHub, GitLab, Azure DevOps, or other platforms already used by your team.",
              },
              {
                title: "Knowledge Transfer Without Disruption",
                text: "As the project progresses, we ensure a structured transfer of knowledge, documentation, architectural decisions, and implementation details to your internal engineering organization.",
              },
            ],
          },
          { type: "subheading", text: "Our Approach" },
          {
            type: "definitions",
            items: [
              {
                title: "1. Technical Assessment",
                text: "We conduct an initial review of project requirements, architecture, codebase, and delivery objectives to identify priorities, dependencies, and potential risks.",
              },
              {
                title: "2. Business-Oriented Prioritization",
                text: "Work is prioritized according to business impact, strategic value, delivery timelines, and technical stability requirements.",
              },
              {
                title: "3. Parallel Delivery Model",
                text: "Our team executes development through an incremental delivery approach, integrating seamlessly with your existing roadmap while minimizing operational risk.",
              },
            ],
          },
          { type: "subheading", text: "The Outcome" },
          {
            type: "paragraph",
            text: "Strategic projects move forward without waiting for internal bandwidth, delivery timelines accelerate, and your organization gains access to experienced specialists without the cost and complexity of expanding permanent headcount.",
          },
        ] satisfies RichBlock[],
      },
    ],
  },

  /** "AI Is Not a Replacement for People" — node 9403:355; deck p. 5. */
  forceMultiplier: {
    title: "AI Is Not a Replacement for People — It's a Force Multiplier",
    intro:
      "AI delivers the highest return when it removes routine work from your team, allowing experts to focus on decisions, innovation, and growth while intelligent systems handle repetitive execution at scale.",
    groups: [
      {
        title: "When Does AI Become Essential?",
        paragraphs: [
          "Artificial Intelligence delivers the greatest value when a business process already exists but is limited by manual effort, repetitive tasks, and human-dependent operations.",
          "As organizations grow, routine activities increasingly consume valuable employee time and attention. Skilled professionals become occupied with repetitive work instead of focusing on areas where human expertise, creativity, and strategic thinking create the most impact.",
          "This often leads to common operational challenges:",
        ],
        items: [
          "Delays caused by increasing workloads and limited capacity",
          "Human errors resulting from repetitive manual tasks",
          "Inconsistent execution of procedures and business rules",
          "Long onboarding periods for new employees",
          "Reduced efficiency as processes become dependent on individual knowledge, memory, attention, and discipline",
          "Employee fatigue and growing operational bottlenecks",
        ],
        image: "/images/ind/force-01.webp",
      },
      {
        title: "How AI Creates Value",
        paragraphs: [
          "AI-powered systems are designed to take over repetitive, rule-based, and time-consuming tasks with speed, consistency, and reliability.",
          "Unlike human-operated processes, AI solutions can work continuously, process large volumes of information in real time, and apply business logic uniformly across every operation.",
          "By automating routine activities, organizations can:",
        ],
        items: [
          "Increase operational efficiency",
          "Reduce processing times and costs",
          "Minimize human error",
          "Improve consistency and compliance",
          "Scale operations without proportional increases in headcount",
          "Allow employees to focus on higher-value work that requires expertise, judgment, and innovation",
        ],
        image: "/images/ind/force-02.webp",
      },
    ],
    closing:
      "At EvoData, we develop custom AI solutions that integrate directly into existing business workflows, transforming manual processes into intelligent, scalable, and data-driven operations.",
  },

  /** "Why choose evodata" — node 9329:3677; deck p. 6. */
  whyChoose: {
    title: "Why choose evodata",
    cards: [
      {
        title: "Proven Project Experience",
        description:
          "We have successfully delivered and supported projects with lifecycles extending beyond 10 years. This experience enables us to build solutions that remain scalable, maintainable, and valuable long after initial deployment.",
        image: "/images/wwd/why-01.webp",
      },
      {
        title: "Competitive Advantage",
        description:
          "We believe technology is the strongest driver of sustainable competitive advantage. By combining advanced AI, data analytics, and intelligent automation, we help organizations outperform competitors, accelerate innovation, and unlock new opportunities for growth.",
        image: "/images/wwd/why-02.webp",
      },
      {
        title: "Expertise",
        description:
          "We select technologies based on business requirements rather than vendor preferences, ensuring the best fit for each project.",
        image: "/images/wwd/why-03.webp",
      },
      {
        title: "Partnership Mindset",
        description:
          "We focus on sustainable relationships and continuous improvement rather than short-term project delivery.",
        image: "/images/wwd/why-04.webp",
      },
      {
        title: "End-to-End Delivery",
        description:
          "From data collection and infrastructure design to model deployment and monitoring, we manage the entire AI and analytics lifecycle.",
        image: "/images/wwd/why-05.webp",
      },
    ],
  },

  /** "Everything you need to know" — node 9329:4121; deck p. 9. */
  faq: {
    title: "Everything you need to know",
    items: [
      {
        title: "What Types of AI Solutions Do You Develop?",
        paragraphs: [
          "Our team develops a wide range of AI solutions tailored to specific business objectives and operational requirements. We work with Machine Learning, Deep Learning, Generative AI, Natural Language Processing (NLP), Computer Vision, Predictive Analytics, Intelligent Automation, and Data Science technologies.",
          "Whether you need an AI assistant, document automation, predictive forecasting, intelligent analytics, content generation, or a custom enterprise AI platform, we design and implement solutions that align with your business goals, data ecosystem, and growth strategy.",
        ],
      },
      {
        title: "How Do You Choose the Right AI Model for a Business?",
        paragraphs: [
          "Selecting the right AI solution depends on several factors, including the complexity of the business challenge, available data, integration requirements, performance expectations, budget, compliance considerations, and long-term scalability goals.",
          "Our process begins with a discovery and assessment phase, during which we evaluate your business objectives, existing infrastructure, and available data assets. Based on this analysis, we recommend the most suitable technologies, models, and implementation approach to maximize business value while minimizing risk and development costs.",
          "The result is a tailored AI solution designed to deliver measurable outcomes and sustainable competitive advantage.",
        ],
      },
      {
        title:
          "How Do You Choose the Right Machine Learning Models for Business Needs?",
        paragraphs: [
          "Selecting the most effective Machine Learning model depends on a combination of business, technical, and operational factors. There is no universal model that fits every use case—each solution must be tailored to the specific goals and constraints of the organization.",
        ],
        sections: [
          {
            // A two-column table in the deck: factor / what we consider.
            heading: "Key factors we evaluate",
            definitions: [
              {
                title: "Business objective",
                text: "Forecasting, automation, personalization, risk management, analytics, etc.",
              },
              {
                title: "Problem complexity",
                text: "Whether the task requires basic ML, deep learning, NLP, computer vision, or advanced AI techniques.",
              },
              {
                title: "Data availability and quality",
                text: "The volume, structure, accuracy, and relevance of the available data.",
              },
              {
                title: "Performance requirements",
                text: "Accuracy, speed, scalability, interpretability, and real-time processing needs.",
              },
              {
                title: "Infrastructure and budget",
                text: "Available computing resources, cloud or on-premises environments, and deployment constraints.",
              },
              {
                title: "Compliance and ethics",
                text: "Data privacy, regulatory requirements, transparency, and responsible AI considerations.",
              },
              {
                title: "Long-term maintainability",
                text: "Ease of monitoring, retraining, integration, and ongoing operational support.",
              },
            ],
          },
          {
            heading: "How we approach model selection",
            paragraphs: [
              "Our team starts with a discovery and assessment phase to understand your business processes, data landscape, and strategic objectives. We then evaluate multiple model architectures and technologies to determine the best fit for your use case.",
            ],
          },
          {
            heading: "Common technology providers and ecosystems",
            paragraphs: [
              "We work with leading AI and ML platforms, including:",
            ],
            bullets: [
              "OpenAI",
              "Amazon Web Services (AWS)",
              "Google Cloud",
              "Microsoft Azure",
              "IBM Watson",
              "Open-source ML frameworks and custom models",
            ],
          },
          {
            paragraphs: [
              "The final recommendation is based on the model's ability to deliver measurable business value, integrate with your systems, and scale with future growth.",
            ],
          },
        ],
      },
      {
        title:
          "Is It Necessary to Test Machine Learning Models Before Full Deployment?",
        paragraphs: [
          "Yes. Testing and validation are critical stages of any Machine Learning implementation. Before a model is deployed into production, it must be thoroughly evaluated to ensure it performs reliably in real-world conditions.",
        ],
        sections: [
          {
            heading: "Why testing matters",
            paragraphs: ["Comprehensive testing helps verify:"],
            bullets: [
              "Accuracy and predictive performance",
              "Stability and consistency over time",
              "Scalability under different workloads",
              "Security and data protection compliance",
              "Robustness against edge cases and unexpected inputs",
              "Business reliability and operational readiness",
            ],
          },
          {
            heading: "Our validation process",
            paragraphs: ["We use a combination of:"],
            bullets: [
              "Real historical business data",
              "Simulated scenarios and stress testing",
              "Cross-validation and benchmarking",
              "Pilot deployments and proof-of-concept environments",
              "Performance monitoring and business KPI evaluation",
            ],
          },
          {
            heading: "Benefits of pre-deployment testing",
            paragraphs: [
              "Testing before full rollout reduces operational risk, improves confidence in AI-driven decisions, and helps identify optimization opportunities early in the implementation process.",
            ],
          },
          {
            heading: "The result",
            paragraphs: [
              "By carefully selecting and rigorously testing Machine Learning models, EvoData ensures that AI solutions are accurate, secure, scalable, and aligned with your business objectives before they are deployed into production environments.",
            ],
          },
        ],
      },
    ],
  },
} as const;

export type IndustriesContent = typeof industries;
