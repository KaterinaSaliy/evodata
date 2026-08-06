/**
 * What We Do page copy.
 * Design: desktop node 9239:708, mobile node 9413:495.
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

  /**
   * "Our custom solutions" — node 9318:77618.
   * Eight topics, each with its own list — client deck "What we do.pdf",
   * section 2. The design shows one topic at a time; picking another swaps
   * the list on the right.
   */
  customSolutions: {
    title: "Our custom solutions",
    topics: [
      {
        label: "AI, Data & Integration Services",
        items: [
          "Development & Integration",
          "Custom Web and Backend Solutions",
          "Seamless API Integration Across Enterprise Systems",
          "Unified Data Integration from CRM, ERP, APIs, Log Streams, and IoT Devices",
          "Scalable Microservices Architecture with Embedded AI Capabilities",
        ],
      },
      {
        label: "Data Analytics & Business Intelligence",
        items: [
          "Data Collection, Cleansing, Normalization, and Preparation for AI Models",
          "Data Processing and Feature Engineering",
          "Business Intelligence, Data Analysis, and Visualization",
          "Interactive Dashboards, Reporting, and KPI Monitoring",
          "Data Quality Management and Processing Optimization",
          "Predictive Analytics and Forecasting",
          "Data Exploration and Insight Generation",
          "Performance Analytics and Business Metrics Tracking",
          "Advanced Analytics for Data-Driven Decision Making",
          "Scalable Analytics Solutions for Enterprise Data Platforms",
        ],
      },
      {
        label: "AI & Machine Learning Solutions",
        items: [
          "Generative AI Solutions",
          "AI Agents and Agentic AI Systems",
          "Custom Machine Learning Models",
          "Conversational AI and Intelligent Chatbots",
          "Computer Vision and Image Recognition",
          "Multimodal AI",
          "Recommendation and Personalization Systems",
          "Predictive Analytics and Forecasting Models",
        ],
      },
      {
        label: "Database Engineering & Optimization",
        items: [
          "Data Warehouse and Data Lake Development",
          "ETL/ELT Pipeline Engineering",
          "Cloud Data Migration",
          "Database Performance Optimization",
          "Real-Time Data Processing",
          "Data Platform Engineering",
          "Database Integration and Synchronization",
          "Data Governance and Security",
        ],
      },
      {
        label: "Digital Transformation & Process Automation",
        items: [
          "Business Process Reengineering",
          "Operational Automation",
          "Enterprise Workflow Solutions",
          "Digital Operations Transformation",
          "Process Intelligence and Automation",
        ],
      },
      {
        label: "Cloud Infrastructure, DevOps & Platform Engineering",
        items: [
          "CI/CD Pipeline Design and Implementation",
          "Cloud Infrastructure on AWS, Azure, and Google Cloud",
          "Containerization and Kubernetes Management",
          "Infrastructure as Code (IaC)",
          "Monitoring, Observability, and Security",
          "Platform Engineering",
          "Site Reliability Engineering (SRE)",
          "Cloud Cost Optimization (FinOps)",
        ],
      },
      {
        label: "AI Strategy, Consulting & Governance",
        items: [
          "AI Strategy and Roadmap Development",
          "AI Readiness and Maturity Assessments",
          "Technical Audits of Existing AI and Data Solutions",
          "Architecture, Code, Security, and Scalability Assessments",
          "Technology Selection and Digital Transformation Advisory",
          "AI Governance and Risk Management",
          "A/B Testing and Conversion Rate Optimization (CRO) for AI Solutions",
          "ROI Evaluation and Business Case Development",
        ],
      },
      {
        label: "AI-Powered Applications & User Experiences",
        items: [
          "AI-Powered User Interface Design",
          "Intelligent User Interfaces (IUI)",
          "Human-AI Interaction Design",
          "Conversational AI and Chatbot Experiences",
          "AI Copilot and Virtual Assistant Design",
          "Generative AI User Experiences",
          "Decision Support and Recommendation Interfaces",
          "Multimodal User Experiences (Text, Voice, Image, Video)",
          "AI Workflow and Process Interfaces",
          "Personalized and Adaptive User Experiences",
          "Voice User Interfaces (VUI)",
          "AI Product Design and Prototyping",
          "Usability Testing for AI Applications",
          "Explainable AI (XAI) User Interfaces",
          "Agentic AI Interaction Design",
        ],
      },
    ],
  },

  /**
   * "Custom AI solutions for business" — node 9320:77996.
   * Five directions from the client deck "What we do.pdf", section 4;
   * the design frame holds four, the fifth arrived with its photo later.
   */
  businessSolutions: {
    title: "Custom AI solutions for business",
    cards: [
      {
        title: "Deep Process Automation",
        description:
          "Machine Learning and AI technologies automate repetitive and time-consuming tasks, reducing operational workloads and increasing efficiency. From workforce scheduling to financial reporting, AI enables faster execution, greater consistency, and improved scalability.",
        image: "/images/wwd/solutions/deep-process-automation.webp",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Modern AI-powered assistants and conversational systems provide intelligent, context-aware customer interactions around the clock. Available 24/7 and capable of handling high volumes of requests, they help organizations deliver responsive, high-quality customer service at scale.",
        image: "/images/wwd/solutions/enhanced-customer-experience.webp",
      },
      {
        title: "Intelligent Content Generation",
        description:
          "Large Language Models (LLMs) and Generative AI accelerate the creation of business content, including marketing materials, internal communications, product descriptions, design concepts, and more. This enables organizations to increase productivity while maintaining quality and consistency.",
        image: "/images/wwd/solutions/intelligent-content-generation.webp",
      },
      {
        title: "Predictive Analytics",
        description:
          "AI models analyze large volumes of historical and real-time data to identify trends, forecast demand, evaluate risks, and anticipate market changes. These insights help organizations make proactive decisions and adapt their strategies with confidence.",
        image: "/images/wwd/solutions/predictive-analytics.webp",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Machine Learning and advanced analytics consolidate data from multiple sources into a unified view of business performance. This empowers leadership teams with actionable insights, improves visibility across operations, and supports more informed strategic decisions.",
        image: "/images/wwd/solutions/data-driven-decision-making.webp",
      },
    ],
  },

  /**
   * "AI Implementation Roadmaps" — node 9325:1161.
   * Intro (frame 9330:5354) followed by three audience tabs (frame 9329:4288).
   * The design also carries a vertical sidebar and two further tabs ("Testing…",
   * "Deployment…"), but every one of them is hidden in Figma — the visible
   * layout is intro + three tabs, so that is what is built here.
   */
  roadmaps: {
    title: "AI Implementation Roadmaps",
    intro: {
      kicker: "MVP Development",
      lead: "Launch Your MVP Faster — Built for Scale from Day One",
      paragraphs: [
        "Speed matters, but so does building the right foundation. We help startups and product teams launch market-ready MVPs quickly while ensuring the architecture can support future growth, new features, and increasing user demand.",
        "From founders to CTOs, every stakeholder has different objectives. Our process is designed to address both immediate business goals and long-term technical requirements.",
      ],
    },
    tabs: [
      {
        label: "For Founders & Startup CEOs",
        heading: "For Founders & Startup CEOs",
        intro:
          "Whether you're preparing for your first fundraising round, validating a new business idea, or launching a product backed by investors, we help you move from concept to a working MVP with measurable business outcomes.",
        benefitsTitle: "By Working With Us, You Will:",
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
        ],
        closingTitle: "What Makes Our Approach Different",
        closing:
          "We don't just build MVPs — we build investment-ready products designed to generate learning, validate demand, and create a clear path toward sustainable growth and future fundraising.",
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
        intro: [
          "Whether you need to rapidly expand your engineering capacity, accelerate product delivery, or build a scalable technology foundation, we work as an extension of your team to deliver high-quality software aligned with your architectural standards and business objectives.",
          "Our focus is not only on delivering features but on building maintainable, scalable systems that can support long-term growth.",
        ],
        benefitsTitle: "By Working With Us, You Will:",
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
    ],
  },

  /** "Why choose evodata" — node 9330:4369. */
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

  /** Brand band with the globe — node 9245:24503. */
  band: {
    title: "Your AI partner — \nanywhere on the globe",
  },

  /**
   * "Everything you need to know" — node 9241:24297.
   * Copy: client deck "What we do.pdf", section 9 (seven questions).
   */
  faq: {
    title: "Everything you need to know",
    items: [
      {
        title: "Typical Projects",
        paragraphs: [
          "The investment required for AI implementation depends on the complexity of the solution, integration requirements, data availability, and regulatory considerations.",
        ],
        sections: [
          {
            heading: "Typical Projects",
            definitions: [
              {
                title: "Proof of Concept (PoC)",
                text: "Validate a business hypothesis and assess technical feasibility within approximately 4 weeks.",
              },
              {
                title: "AI Assistant with RAG (Retrieval-Augmented Generation)",
                text: "Production-ready AI assistant integrated with your knowledge base and business data.",
              },
              {
                title: "Intelligent Document Processing (IDP)",
                text: "Automated document extraction, classification, and workflow integration.",
              },
              {
                title: "Computer Vision Solutions",
                text: "Custom model adaptation, training, and integration for image and video analysis use cases.",
              },
              {
                title: "LLM Fine-Tuning & Custom AI Models",
                text: "Domain-specific model customization and optimization.",
              },
              {
                title: "Enterprise AI Transformation Programs",
                text: "Comprehensive AI solutions combining multiple AI modules, integrations, and business workflows.",
              },
            ],
          },
          {
            heading: "Final Project Pricing",
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
          {
            paragraphs: [
              "Every engagement is scoped individually to ensure the proposed solution aligns with your business objectives and delivers measurable return on investment.",
            ],
          },
        ],
      },
      {
        title: "Can AI Be Integrated with Legacy Systems?",
        paragraphs: [
          "Absolutely. Integrating AI capabilities into existing legacy environments is one of our core areas of expertise.",
          "Most organizations cannot afford to replace critical business systems overnight. Our approach focuses on extending the value of existing technology investments by introducing AI capabilities with minimal disruption to current operations.",
        ],
        sections: [
          {
            heading: "Our Integration Approach",
            definitions: [
              {
                title: "API-Based Integration",
                text: "We leverage REST APIs and service layers to connect AI solutions with existing applications, enabling seamless data exchange while minimizing modifications to legacy systems.",
              },
              {
                title: "Asynchronous Processing",
                text: "Using message queues and event-driven architectures, AI workloads can be processed independently of core business applications, ensuring system responsiveness and operational stability.",
              },
              {
                title: "Batch Processing Workflows",
                text: "For use cases that do not require real-time responses, we implement scheduled batch processing to handle large volumes of data while reducing infrastructure costs efficiently.",
              },
              {
                title: "Fail-Safe & Fallback Mechanisms",
                text: "Business continuity remains a priority. In the event of AI service degradation or outage, predefined fallback mechanisms ensure that existing workflows continue operating without interruption.",
              },
            ],
          },
          {
            heading: "Technologies We Commonly Integrate With",
            paragraphs: [
              "Our team has extensive experience integrating AI solutions with established enterprise technology stacks, including:",
            ],
            bullets: [
              "Java 8 and legacy Java-based applications",
              ".NET Framework environments",
              "PHP-based enterprise systems",
              "Python 2.7 legacy applications",
              "Oracle Database and enterprise data platforms",
              "Proprietary and custom-built business systems",
            ],
          },
          {
            heading: "Business Value",
            bullets: [
              "Preserve existing technology investments",
              "Accelerate AI adoption without large-scale system replacement",
              "Minimize implementation risk and operational disruption",
              "Introduce modern AI capabilities while maintaining enterprise stability and compliance",
            ],
          },
          {
            paragraphs: [
              "Our goal is to enable organizations to modernize incrementally, delivering measurable AI-driven value without requiring a complete technology transformation.",
            ],
          },
        ],
      },
      {
        title: "Do You Work Under NDA?",
        paragraphs: [
          "Yes. Confidentiality and data security are fundamental principles of every engagement.",
          "We regularly work with sensitive business information, proprietary processes, and regulated data, which is why we establish clear confidentiality measures from the very beginning of each project.",
        ],
        sections: [
          {
            heading: "Our Confidentiality Commitment",
            definitions: [
              {
                title: "NDA Before Project Discussions",
                text: "We are happy to execute a Non-Disclosure Agreement (NDA) prior to any detailed project discussions. We can work with either your organization's NDA template or provide our own standard agreement.",
              },
              {
                title: "Data Retention & Deletion Policies",
                text: "Where specified in the agreement, project data is securely deleted upon project completion in accordance with agreed retention and compliance requirements.",
              },
              {
                title: "Client Confidentiality",
                text: "We do not disclose project details, business information, use cases, or results without explicit written consent from the client.",
              },
            ],
          },
          {
            heading: "Our Commitment",
            paragraphs: [
              "We treat every client engagement with the highest level of confidentiality, ensuring that intellectual property, business processes, and sensitive information remain protected throughout the entire project lifecycle.",
            ],
          },
        ],
      },
      {
        title: "Can Development Start Without a Design?",
        paragraphs: [
          "Yes. Many projects begin with a business idea or technical requirements rather than a finalized design.",
          "To ensure an efficient development process and reduce implementation risks, we provide end-to-end UI/UX design services before development begins.",
        ],
        sections: [
          {
            heading: "Our Design Process",
            definitions: [
              {
                title: "Wireframing & UX Prototyping",
                text: "We create interactive prototypes and user experience flows that define the structure, functionality, and user journey of the application.",
              },
              {
                title: "UI Design & Screen Validation",
                text: "Detailed design mockups are developed and reviewed collaboratively. Each screen and workflow can be validated by stakeholders before moving into development.",
              },
              {
                title: "Development-Ready Specifications",
                text: "Once the design is approved, we prepare development-ready assets and technical specifications, ensuring a smooth transition from design to implementation.",
              },
              {
                title: "Secure Project Management",
                text: "All project assets are stored in secure, private repositories with controlled access. Upon project completion, data handling and retention procedures are managed according to the agreed contractual requirements.",
              },
            ],
          },
          {
            heading: "Business Value",
            bullets: [
              "Reduced risk of costly redesigns and rework",
              "Faster and more predictable development cycles",
              "Clear alignment between business requirements and user experience",
              "Improved product adoption through user-centered design",
            ],
          },
          {
            heading: "UI/UX Design Services",
            paragraphs: [
              "Investment depends on the number of screens, complexity of user flows, design system requirements, and project scope.",
            ],
          },
        ],
      },
      {
        title: "What Happens After Go-Live?",
        paragraphs: [
          "Launching an AI solution is only the beginning. Continuous optimization, monitoring, and support are essential to ensure long-term performance, reliability, and business value.",
          "To help clients maximize their return on investment, we offer ongoing support and enhancement services tailored to evolving business needs.",
        ],
        sections: [
          {
            heading: "Post-Launch Services",
            definitions: [
              {
                title: "24/7 Technical Support",
                text: "Our team provides continuous monitoring and support for production environments. Critical issues are prioritized with response and resolution processes designed to minimize operational disruption.",
              },
              {
                title: "Continuous Feature Development",
                text: "As business requirements evolve, we help extend and enhance the solution with new capabilities, integrations, and workflow improvements.",
              },
              {
                title: "Performance Analytics & A/B Testing",
                text: "We monitor key performance indicators, analyze user behavior, and conduct controlled experiments to continuously improve accuracy, adoption, and business outcomes.",
              },
              {
                title: "Ongoing Optimization",
                text: "AI systems require regular refinement to maintain peak performance. We continuously optimize models, prompts, infrastructure, and workflows based on real-world usage and feedback.",
              },
            ],
          },
          {
            heading: "Why Clients Stay With Us",
            paragraphs: [
              "Most of our clients choose to continue working with us after deployment, benefiting from a long-term technology partner who understands their systems, data, and business objectives.",
            ],
          },
          {
            heading: "Support & Maintenance Plans",
            definitions: [
              {
                title: "Basic Support",
                text: "Includes technical support, monitoring, maintenance, bug fixes, and operational assistance.",
              },
              {
                title: "Advanced Support",
                text: "Includes priority support, dedicated engineering resources, accelerated feature delivery, strategic consulting, and advanced performance optimization.",
              },
            ],
            paragraphs: [
              "The appropriate support model is determined by the solution's complexity, business criticality, and service-level requirements.",
            ],
          },
        ],
      },
      {
        title: "Do You Work with International Clients?",
        paragraphs: [
          "Yes. We regularly partner with organizations across multiple regions and have successfully delivered projects for clients in:",
        ],
        bullets: ["Europe", "Australia", "United States"],
        sections: [
          {
            heading: "Global Delivery Capability",
            paragraphs: [
              "Our team operates in English and is experienced in collaborating with international stakeholders across different time zones, industries, and regulatory environments.",
              "We provide fully remote project delivery, supported by structured communication, transparent reporting, and established project management processes that ensure smooth collaboration regardless of location.",
            ],
          },
          {
            heading: "Understanding Local Market Requirements",
            paragraphs: [
              "Each market has its own business practices, compliance considerations, and customer expectations. Our experience working with international organizations enables us to adapt AI solutions to regional requirements while maintaining global best practices in security, scalability, and operational excellence.",
            ],
          },
          {
            heading: "What Clients Can Expect",
            bullets: [
              "Fluent English communication across all project stages",
              "Fully remote and distributed project delivery",
              "Experience working with global teams and stakeholders",
              "Flexible collaboration across multiple time zones",
            ],
          },
          {
            paragraphs: [
              "Whether you are a startup, mid-sized company, or enterprise organization, we can seamlessly integrate with your team and deliver AI solutions tailored to your market and business objectives.",
            ],
          },
        ],
      },
      {
        title: "What Data Is Required for an AI Solution?",
        paragraphs: [
          "The data requirements depend on the specific use case and business objectives. In most cases, existing business data is sufficient to build and deploy an effective AI solution.",
        ],
        sections: [
          {
            heading: "AI Assistants with RAG (Retrieval-Augmented Generation)",
            paragraphs: [
              "To develop an AI assistant capable of providing accurate, context-aware responses, we typically require:",
            ],
            bullets: [
              "Knowledge bases and internal documentation",
              "FAQs and support materials",
              "Standard operating procedures (SOPs)",
              "Content stored in platforms such as Notion, Confluence, SharePoint, Google Drive, or PDF repositories",
            ],
          },
          {
            heading: "Intelligent Document Processing (IDP)",
            paragraphs: [
              "For document automation and extraction workflows, we require:",
            ],
            bullets: [
              "Sample documents representing the target document types",
              "Typically 10–50 examples per document category",
              "Historical documents that reflect real-world variations and formats",
            ],
          },
          {
            heading: "Computer Vision Solutions",
            paragraphs: [
              "For image and video analysis applications, we typically require:",
            ],
            bullets: [
              "Annotated or labeled image datasets",
              "A minimum of 100 labeled images for transfer learning scenarios",
              "Additional training data for highly specialized or complex use cases",
            ],
          },
          {
            heading: "Text Analytics & Natural Language Processing",
            paragraphs: [
              "For sentiment analysis, classification, trend detection, or customer intelligence solutions, we typically require:",
            ],
            bullets: [
              "Historical customer inquiries and support tickets",
              "Customer feedback and survey responses",
              "Product reviews and user-generated content",
              "Internal communication datasets relevant to the use case",
            ],
          },
          {
            heading: "If You Don't Have Structured Data",
            paragraphs: [
              "Many organizations assume they lack the data required for AI initiatives. In practice, valuable data often already exists across business systems, documents, CRM platforms, support channels, and internal knowledge repositories.",
              "As part of the PreSale phase, we assess your existing data assets and identify the most effective approach to building an AI solution using information already available within your organization.",
            ],
          },
        ],
      },
    ],
  },
} as const;

export type WhatWeDoContent = typeof whatWeDo;
