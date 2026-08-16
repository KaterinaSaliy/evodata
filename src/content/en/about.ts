import type { RichBlock } from "@/components/ui/RichBlocks";

/**
 * About Us page copy.
 * Design: desktop node 9331:12591, mobile node 9416:94138.
 * Source of the copy — the client deck "About us.pdf".
 */
export const about = {
  hero: {
    breadcrumb: "About us",
    title: "Software engineering services for BFS",
    subtitle:
      "Every enterprise wants its operations to run faster. You want greater results with fewer resources.",
  },

  /** "Get in touch" — node 9373:12959. */
  contact: {
    title: "Get in touch",
    intro:
      "Transformational work comes from great collaboration. Whether you're at the early stage with a new idea or deep in the process, get in touch with our business team to see if we are the right match.",
    /**
     * Labels only: the phone and e-mail themselves live in
     * `src/config/contacts.ts` and reach the page through `ContactLink`,
     * which keeps them out of the served HTML — see README.
     */
    phoneLabel: "Phone",
    mailLabel: "Mail",
  },

  /** "Technologies & Delivery Processes" — node 9337:12665. */
  technologies: {
    title: "Technologies & Delivery Processes",
    intro:
      "Our technology stack is designed to support secure, scalable, and enterprise-grade software, data, and AI solutions. We leverage modern DevOps, MLOps, and Data Engineering practices to ensure reliability, operational efficiency, and rapid delivery.",
    columns: ["Category", "Core Technologies", "Purpose"],
    /** A category with several technologies spans rows (rowspan in the design). */
    rows: [
      {
        category: "Source Control & CI/CD",
        technologies: [
          {
            name: "GitLab CE (Self-Hosted)",
            purpose:
              "Centralized source code management, version control, integrated CI/CD pipelines, Container Registry, and project management capabilities.",
          },
        ],
      },
      {
        category: "Container Orchestration & Deployment",
        technologies: [
          {
            name: "Kubernetes (On-Premises)",
            purpose:
              "Deployment, orchestration, scaling, and lifecycle management of containerized applications and machine learning workloads.",
          },
          {
            name: "Docker",
            purpose:
              "Application containerization and environment standardization across development and production environments.",
          },
          {
            name: "Helm",
            purpose:
              "Kubernetes package management and automated deployment orchestration.",
          },
        ],
      },
      {
        category: "Data Processing & Storage",
        technologies: [
          {
            name: "MinIO (S3-Compatible Object Storage)",
            purpose:
              "Secure storage of large datasets, machine learning artifacts, documents, and application files with support for controlled access via pre-signed URLs.",
          },
          {
            name: "ArenaData Greenplum, ClickHouse, Apache Kafka, Apache Airflow",
            purpose:
              "Large-scale data processing, real-time analytics, and development of ETL/ELT data pipelines.",
          },
        ],
      },
      {
        category: "Security & Secrets Management",
        technologies: [
          {
            name: "HashiCorp Vault",
            purpose:
              "Centralized and secure management of credentials, encryption keys, tokens, and sensitive configuration data with automated rotation policies.",
          },
          {
            name: "External Secrets Operator",
            purpose:
              "Automated synchronization of secrets between Vault and Kubernetes environments.",
          },
        ],
      },
      {
        category: "MLOps & Experiment Tracking",
        technologies: [
          {
            name: "MLflow",
            purpose:
              "Machine learning experiment management, parameter and metric tracking, model registry, and version control.",
          },
        ],
      },
      {
        category: "Infrastructure as Code (IaC)",
        technologies: [
          {
            name: "Terraform, Ansible",
            purpose:
              "Automated provisioning, configuration, and management of cloud, hybrid, and on-premises infrastructure environments.",
          },
        ],
      },
      {
        category: "Monitoring & Observability",
        technologies: [
          {
            name: "ELK Stack / OpenSearch, Prometheus, Grafana",
            purpose:
              "Centralized logging, system monitoring, performance analysis, observability, and operational alerting.",
          },
        ],
      },
    ],
    /** Full-bleed half-and-half block — node 9372:754. */
    principles: {
      title: "Engineering Principles",
      intro:
        "Our delivery processes are built around automation, security, scalability, and operational excellence. By combining modern DevOps, Data Engineering, and MLOps practices, we ensure that solutions are reliable, maintainable, and ready for enterprise-scale production environments.",
      benefitsTitle: "Key Benefits",
      benefits: [
        "Secure and compliant infrastructure management",
        "Automated deployment and release processes",
        "Scalable cloud and on-premises architectures",
        "End-to-end observability and monitoring",
        "Reproducible AI and machine learning workflows",
        "Enterprise-grade governance and operational reliability",
      ],
      closing:
        "This technology foundation enables EvoData to deliver robust software platforms, data solutions, and AI systems that can scale with your business requirements while maintaining high standards of security, performance, and maintainability.",
      image: "/images/about/principles.webp",
    },
  },

  /** Brand band — node 9337:12684: wordmark row, heading, supporting text. */
  band: {
    title:
      "Technology and innovation \nare the foundation of competitive advantage.",
    note: "Organizations that successfully leverage advanced technologies are better positioned to improve efficiency, accelerate growth, and outperform their competitors.",
  },

  /** "Our Most In-Demand AI Solutions" — node 9337:12674 (card slider). */
  inDemand: {
    title: "Our Most In-Demand AI Solutions",
    intro:
      "We design, develop, and deploy AI solutions that deliver valuable business outcomes — from automation and operational efficiency to enhanced customer experiences.",
    /**
     * Seven solutions from the deck, each with the render the client supplied
     * for it. The renders come as tall frames with the object centred and a
     * word inside it, which is what lets one file serve both the square on a
     * phone and the column on a desktop — see README.
     */
    cards: [
      {
        title: "AI Agents & Autonomous Systems",
        lead: "Advanced AI systems capable of executing complex, multi-step tasks with minimal human intervention.",
        image: "/images/about/solutions/ai-agents.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "Autonomous research and information-gathering agents",
              "Multi-agent systems for orchestrating complex business processes",
              "AI assistants with access to business tools, APIs, databases, and internal knowledge sources",
              "Agentic workflows that automate end-to-end operational processes",
              "Human-in-the-loop decision-making systems that combine AI efficiency with human oversight and governance",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "Reduced manual effort",
              "Faster execution of operational tasks",
              "Precise decision-making and process consistency",
              "Increased scalability across business functions",
            ],
          },
        ],
      },
      {
        title: "Generative AI & Content Creation",
        lead: "Leverage Large Language Models (LLMs) and generative AI technologies to create high-quality content at scale while maintaining brand consistency.",
        image: "/images/about/solutions/generative-ai.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "Automated content generation for articles, product descriptions, email campaigns, and marketing materials",
              "AI-powered copywriting aligned with your brand voice and communication guidelines",
              "Image generation and editing for product photography, advertising creatives, and digital assets",
              "AI-generated video content and animations",
              "Personalized content tailored to specific customer segments and audiences",
              "Automated translation and localization for global markets",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "Faster content production cycles",
              "Lower creative production costs",
              "Improved personalization and customer engagement",
              "Consistent brand communication across channels",
            ],
          },
        ],
      },
      {
        title: "Predictive Analytics & Forecasting",
        lead: "Transform historical business data into actionable forecasts and strategic insights.",
        image: "/images/about/solutions/predictive-analytics.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "Demand forecasting and inventory planning",
              "Sales forecasting and revenue prediction",
              "Customer Lifetime Value (LTV) modeling",
              "Risk assessment and anomaly detection",
              "Customer segmentation and behavioral analytics",
              "Marketing Mix Modeling (MMM) to evaluate channel performance and optimize marketing investment",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "More accurate planning and forecasting",
              "Improved resource allocation",
              "Reduced operational and financial risks",
              "Better strategic decision-making",
            ],
          },
        ],
      },
      {
        title: "Workflow Automation with n8n",
        lead: "For business processes that do not require enterprise-scale infrastructure, we use n8n to rapidly deliver automation solutions that provide immediate operational value.",
        image: "/images/about/solutions/workflow-automation.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "Business process automation",
              "Data synchronization between systems",
              "Lead management workflows",
              "Reporting and notification automation",
              "CRM and marketing platform integrations",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "Rapid deployment",
              "Low implementation costs",
              "Immediate productivity gains",
              "Reduced manual workload",
            ],
          },
        ],
      },
      {
        title: "Data Integration & AI Foundations",
        lead: "Successful AI initiatives require high-quality, well-structured data. We build the data foundations necessary for scalable AI adoption.",
        image: "/images/about/solutions/data-integration.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "Centralized data platforms and modern data warehouses",
              "BigQuery-based data infrastructure",
              "CRM, ERP, advertising platform, and BI integrations",
              "Data consolidation and cleansing",
              "AI-ready data architecture and governance frameworks",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "Single source of truth for business data",
              "Improved data quality and accessibility",
              "Faster deployment of AI initiatives",
              "Better analytics and reporting capabilities",
            ],
          },
        ],
      },
      {
        title: "Conversational AI & Intelligent Assistants",
        lead: "Intelligent communication systems that enhance interactions with customers, employees, and business partners.",
        image: "/images/about/solutions/conversational-ai.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "AI-powered customer support chatbots with contextual understanding",
              "Voice AI assistants for IVR systems and telephony automation",
              "Sales assistants for lead qualification and customer engagement",
              "Internal AI assistants for HR, IT support, and operational teams",
              "Integration with CRM, ERP, ticketing systems, and knowledge bases",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "24/7 customer support availability",
              "Reduced support costs",
              "Faster response times",
              "Improved customer and employee experiences",
            ],
          },
        ],
      },
      {
        title: "Intelligent Document Processing (IDP)",
        lead: "Automate document-intensive workflows using AI-powered extraction, classification, and validation technologies.",
        image: "/images/about/solutions/document-processing.webp",
        groups: [
          {
            title: "Typical Use Cases",
            items: [
              "OCR and document recognition for contracts, invoices, purchase orders, and business documents",
              "Automated document classification and routing",
              "Data extraction from structured and unstructured documents",
              "Data validation and verification workflows",
              "Automated document generation based on predefined templates",
            ],
          },
          {
            title: "Business Benefits",
            items: [
              "Faster document processing",
              "Reduced manual data entry",
              "Improved accuracy and compliance",
              "Lower operational costs",
              "Scalable document management processes",
            ],
          },
        ],
      },
    ],
    outro: {
      title: "Why Organizations Choose These Solutions",
      text: "Our AI solutions are designed to deliver measurable business value by reducing operational costs, increasing efficiency, improving customer experiences, and creating scalable foundations for future growth. Whether your goal is automation, intelligence, or innovation, we build solutions that align technology investments with business outcomes.",
    },
  },

  /**
   * The three main lines of work — node 9372:1069.
   * Each is a collapsible section whose heading carries a row of two tabs;
   * the panel below holds the copy of the selected tab.
   */
  services: {
    sections: [
      {
        title: "AI Agents",
        tabs: [
          {
            label: "What Are AI Agents?",
            blocks: [
              {
                type: "paragraph",
                text: "AI agents are intelligent software systems capable of understanding objectives, making decisions, and executing actions autonomously to achieve specific business outcomes.",
              },
              {
                type: "paragraph",
                text: "Unlike traditional chatbots that operate within predefined scripts and limited conversational flows, AI agents can analyze situations, reason through complex tasks, interact with external systems, and adapt their behavior based on context.",
              },
              {
                type: "paragraph",
                text: "They can leverage business tools and data sources — including APIs, databases, enterprise applications, and knowledge repositories — to gather information, execute workflows, and complete multi-step processes with minimal human intervention.",
              },
              {
                type: "paragraph",
                text: "Modern AI agents can also improve over time by learning from interactions, feedback, and operational data, enabling greater accuracy, efficiency, and business value as they evolve.",
              },
              { type: "subheading", text: "Business Benefits of AI Agents" },
              {
                type: "paragraph",
                text: "By automating complex tasks and operational workflows, AI agents help organizations:",
              },
              {
                type: "bullets",
                items: [
                  "Reduce manual effort and operational costs",
                  "Accelerate task execution and decision-making",
                  "Improve productivity across teams and departments",
                  "Deliver consistent, scalable business processes",
                  "Enhance customer and employee experiences",
                  "Enable 24/7 operational support and automation",
                ],
              },
              {
                type: "paragraph",
                text: "Whether deployed as internal assistants, customer-facing systems, or autonomous workflow operators, AI agents provide organizations with a powerful foundation for intelligent automation and sustainable business growth.",
              },
            ] satisfies RichBlock[],
          },
          {
            label: "What Can AI Agents Do?",
            blocks: [
              {
                type: "paragraph",
                text: "AI agents are intelligent systems designed to execute real business tasks, integrate seamlessly with your existing technology stack, and continuously improve over time. They go beyond simple automation by combining reasoning, decision-making, and action execution within a single solution.",
              },
              {
                type: "paragraph",
                text: "Here's how AI agents can create value for your organization:",
              },

              {
                type: "subheading",
                text: "Autonomous Reasoning and Task Execution",
              },
              {
                type: "paragraph",
                text: "Our AI agents do not rely on rigid, predefined scripts. They understand objectives, evaluate available information, make decisions, and execute tasks step by step.",
              },
              {
                type: "paragraph",
                text: "When circumstances change, agents can adapt their approach dynamically, allowing them to handle complex workflows with minimal human intervention.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Faster execution of operational tasks",
                  "Reduced manual workload",
                  "Greater flexibility in changing environments",
                  "Increased process efficiency",
                ],
              },

              {
                type: "subheading",
                text: "Seamless Integration with Business Systems",
              },
              {
                type: "paragraph",
                text: "AI agents can connect directly to your existing tools, platforms, and data sources through APIs and system integrations.",
              },
              {
                type: "paragraph",
                text: "Whether updating CRM records, accessing databases, managing calendars, retrieving information from external services, or interacting with internal applications, agents become an active part of your technology ecosystem.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Unified workflows across systems",
                  "Reduced manual data handling",
                  "Improved operational visibility",
                  "Faster access to critical business information",
                ],
              },

              {
                type: "subheading",
                text: "Process Automation and Cost Reduction",
              },
              {
                type: "paragraph",
                text: "AI agents can automate a wide range of business operations, from customer onboarding and support workflows to document processing and internal task management.",
              },
              {
                type: "paragraph",
                text: "By eliminating repetitive manual activities, organizations can reduce operational costs while improving speed, consistency, and service quality.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Lower operating expenses",
                  "Faster business processes",
                  "Increased scalability without proportional headcount growth",
                  "Consistent execution of routine tasks",
                ],
              },

              {
                type: "subheading",
                text: "Continuous Learning and Performance Improvement",
              },
              {
                type: "paragraph",
                text: "Modern AI agents can retain relevant context, learn from previous interactions, and improve their performance over time.",
              },
              {
                type: "paragraph",
                text: "As agents accumulate operational knowledge and user feedback, they become more accurate, efficient, and aligned with your business requirements.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Improved accuracy and reliability",
                  "Better personalization",
                  "Increased effectiveness over time",
                  "Continuous optimization of business processes",
                ],
              },

              { type: "subheading", text: "Multi-Agent Collaboration" },
              {
                type: "paragraph",
                text: "Complex business challenges often require more than a single AI agent.",
              },
              {
                type: "paragraph",
                text: "We develop multi-agent systems where specialized agents collaborate as a coordinated team. One agent may analyze information, another execute tasks, and a third validate outcomes or monitor quality.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Efficient handling of complex workflows",
                  "Improved accuracy and quality control",
                  "Greater scalability for enterprise operations",
                  "Specialized expertise across different tasks",
                ],
              },

              { type: "subheading", text: "Human Oversight When Needed" },
              {
                type: "paragraph",
                text: "For critical business processes, AI agents can incorporate Human-in-the-Loop (HITL) workflows.",
              },
              {
                type: "paragraph",
                text: "When a decision requires approval, validation, or human judgment, the agent automatically escalates the task to the appropriate stakeholder before proceeding.",
              },
              {
                type: "paragraph",
                text: "This approach combines the efficiency of automation with the control and accountability required for sensitive operations.",
              },
              { type: "lead", text: "Business benefits:" },
              {
                type: "bullets",
                items: [
                  "Greater trust and governance",
                  "Reduced operational risk",
                  "Compliance with internal policies and regulations",
                  "Continuous improvement through human feedback",
                ],
              },

              {
                type: "subheading",
                text: "Transforming Business Operations with AI Agents",
              },
              {
                type: "paragraph",
                text: "AI agents enable organizations to automate complex workflows, accelerate decision-making, reduce costs, and improve operational performance. Whether deployed as internal assistants, customer-facing systems, or autonomous workflow operators, they provide a scalable foundation for intelligent automation and long-term business growth.",
              },

              { type: "heading", text: "Types of AI Agents" },
              {
                type: "paragraph",
                text: "We design and develop a wide range of AI agents — from rule-based automation assistants to sophisticated autonomous systems capable of reasoning, planning, and executing complex business workflows.",
              },
              {
                type: "paragraph",
                text: "Each solution is tailored to your organization's objectives, operational processes, and technical environment. Below is an overview of the most common AI agent architectures and their business applications.",
              },

              { type: "subheading", text: "Reactive AI Agents" },
              {
                type: "paragraph",
                text: "Reactive agents respond instantly to predefined inputs and events using established rules and decision logic. They are ideal for handling routine interactions, answering common questions, triggering notifications, and automating repetitive operational tasks.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Customer support automation",
                  "Automated alerts and notifications",
                  "FAQ assistants",
                  "Workflow triggers and rule-based actions",
                ],
              },

              { type: "subheading", text: "Goal-Oriented AI Agents" },
              {
                type: "paragraph",
                text: "Goal-oriented agents go beyond simple reactions. They are designed to achieve specific business objectives by planning and executing a sequence of actions.",
              },
              {
                type: "paragraph",
                text: "These agents can decompose complex goals into individual tasks, select the appropriate tools, retrieve information, call APIs, and interact with external systems to complete business processes autonomously.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Business process automation",
                  "Research and information gathering",
                  "Workflow orchestration",
                  "Operational task execution across multiple systems",
                ],
              },

              { type: "subheading", text: "Learning AI Agents" },
              {
                type: "paragraph",
                text: "Learning agents continuously improve their effectiveness by leveraging historical interactions, user feedback, and accumulated knowledge. Over time, they become more accurate, personalized, and context-aware.",
              },
              {
                type: "paragraph",
                text: "To maintain efficiency and scalability, we implement memory management and summarization techniques that allow agents to retain key information while focusing on the most relevant context.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Personalized customer experiences",
                  "Knowledge management systems",
                  "Adaptive support assistants",
                  "Long-term customer interaction workflows",
                ],
              },

              { type: "subheading", text: "Multi-Agent Systems" },
              {
                type: "paragraph",
                text: "Multi-agent systems combine multiple specialized AI agents that collaborate as a coordinated team.",
              },
              {
                type: "paragraph",
                text: "One agent may focus on planning, another on execution, while a third validates results or performs quality assurance. This architecture enables the efficient handling of complex workflows and allows organizations to leverage the strengths of multiple AI models and technologies simultaneously.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Enterprise workflow automation",
                  "Complex research and analysis",
                  "AI-powered operations centers",
                  "End-to-end business process orchestration",
                ],
              },

              { type: "subheading", text: "Autonomous API-Integrated Agents" },
              {
                type: "paragraph",
                text: "These agents are designed to interact directly with software systems and digital infrastructure.",
              },
              {
                type: "paragraph",
                text: "They can independently access APIs, retrieve and process information, update records, execute transactions, and coordinate actions across multiple platforms with minimal human intervention.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "CRM and ERP automation",
                  "Internal operations management",
                  "Data synchronization",
                  "Cross-platform workflow automation",
                ],
              },

              { type: "subheading", text: "Industry-Specific AI Agents" },
              {
                type: "paragraph",
                text: "We develop specialized AI agents tailored to the unique requirements of specific industries.",
              },
              {
                type: "paragraph",
                text: "These agents are trained and configured to understand domain-specific terminology, workflows, regulations, and business processes, ensuring higher accuracy and more relevant outcomes.",
              },
              { type: "lead", text: "Examples include:" },
              {
                type: "bullets",
                items: [
                  "Financial services",
                  "Healthcare",
                  "Manufacturing",
                  "Logistics and supply chain",
                  "Retail and e-commerce",
                  "Legal and professional services",
                ],
              },

              {
                type: "subheading",
                text: "Human-in-the-Loop (HITL) AI Assistants",
              },
              {
                type: "paragraph",
                text: "Human-in-the-Loop (HITL) systems combine the efficiency of AI automation with human oversight and decision-making.",
              },
              {
                type: "paragraph",
                text: "The agent handles the majority of operational tasks independently while escalating specific cases to human operators when approval, validation, or critical judgment is required.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Compliance-sensitive workflows",
                  "Financial approvals",
                  "Customer service escalation",
                  "Risk management processes",
                ],
              },

              { type: "subheading", text: "Edge & On-Device AI Agents" },
              {
                type: "paragraph",
                text: "These agents operate directly on smartphones, tablets, embedded systems, and IoT devices rather than relying entirely on cloud infrastructure.",
              },
              {
                type: "paragraph",
                text: "Running AI locally enables faster response times, improved reliability, enhanced privacy, and reduced dependency on internet connectivity.",
              },
              { type: "lead", text: "Typical use cases:" },
              {
                type: "bullets",
                items: [
                  "Mobile applications",
                  "Industrial IoT solutions",
                  "Field service operations",
                  "Smart devices and connected products",
                ],
              },

              { type: "subheading", text: "Business Value of AI Agents" },
              {
                type: "paragraph",
                text: "AI agents enable organizations to automate complex workflows, increase productivity, and scale business processes.",
              },
              {
                type: "paragraph",
                text: "Whether deployed as internal assistants, customer-facing systems, or autonomous business operators, AI agents create a foundation for intelligent automation and sustainable business growth.",
              },
            ] satisfies RichBlock[],
          },
        ],
      },

      {
        title: "Large Language Models (LLMs)",
        tabs: [
          {
            label: "Our Large Language Model Development Services",
            blocks: [
              {
                type: "paragraph",
                text: "At EvoData, we help organizations leverage the full potential of Large Language Models (LLMs) to automate processes, enhance customer experiences, and unlock new business opportunities. Our services cover the entire AI lifecycle — from strategy and implementation to optimization and ongoing operations.",
              },

              { type: "subheading", text: "AI & LLM Consulting" },
              {
                type: "paragraph",
                text: "Our consulting services help organizations define a clear strategy for adopting and integrating LLM technologies into their business operations.",
              },
              {
                type: "paragraph",
                text: "We work closely with stakeholders to identify high-impact use cases, evaluate technology options, assess feasibility, and develop implementation roadmaps aligned with business objectives.",
              },
              { type: "lead", text: "Our consulting services include:" },
              {
                type: "bullets",
                items: [
                  "AI strategy and transformation planning",
                  "LLM use case discovery and prioritization",
                  "Technology and architecture assessment",
                  "ROI evaluation and business case development",
                  "AI implementation roadmaps and governance frameworks",
                ],
              },

              { type: "subheading", text: "LLM Integration" },
              {
                type: "paragraph",
                text: "We seamlessly integrate Large Language Models into existing business applications, workflows, and enterprise systems.",
              },
              {
                type: "lead",
                text: "Our team designs and implements scalable integrations that enable AI-powered capabilities:",
              },
              {
                type: "bullets",
                items: [
                  "API development and integration",
                  "CRM, ERP, and business application connectivity",
                  "Knowledge base and document repository integration",
                  "Workflow automation and orchestration",
                  "Performance optimization and system modernization",
                ],
              },

              { type: "subheading", text: "Custom LLM Development" },
              {
                type: "paragraph",
                text: "We develop language models tailored to specific business requirements and industry use cases.",
              },
              {
                type: "paragraph",
                text: "Whether fine-tuning existing foundation models or developing specialized AI solutions, we build systems that understand domain-specific knowledge and generate relevant outputs.",
              },
              { type: "lead", text: "Typical use cases include:" },
              {
                type: "bullets",
                items: [
                  "Industry-specific AI assistants",
                  "Enterprise knowledge systems",
                  "Intelligent search and retrieval",
                  "Content generation and automation",
                  "Customer support and conversational AI",
                ],
              },

              { type: "subheading", text: "LLMOps & AI Operations" },
              {
                type: "paragraph",
                text: "Successful AI initiatives require robust operational infrastructure. We build automated LLMOps environments that support the deployment, monitoring, maintenance, and continuous improvement of AI models at scale.",
              },
              { type: "lead", text: "LLMOps services include:" },
              {
                type: "bullets",
                items: [
                  "Automated deployment pipelines",
                  "Model monitoring and observability",
                  "Performance tracking and optimization",
                  "Security and compliance controls",
                  "Cost management and infrastructure optimization",
                  "Model versioning and lifecycle management",
                ],
              },

              { type: "subheading", text: "LLM Fine-Tuning & Optimization" },
              {
                type: "paragraph",
                text: "Every business has unique requirements, data, and workflows. We customize and optimize Large Language Models to align with your organization's specific objectives.",
              },
              {
                type: "paragraph",
                text: "Our specialists fine-tune models using proprietary data, adapt prompts and workflows, and optimize model behavior to improve accuracy, relevance, and business performance.",
              },
              { type: "lead", text: "Optimization services include:" },
              {
                type: "bullets",
                items: [
                  "Domain-specific fine-tuning",
                  "Retrieval-Augmented Generation (RAG) implementation",
                  "Prompt engineering and optimization",
                  "Knowledge base integration",
                  "Response quality improvement",
                  "Performance and cost optimization",
                ],
              },
            ] satisfies RichBlock[],
          },
          {
            label: "Why LLM Solutions?",
            blocks: [
              {
                type: "paragraph",
                text: "Large Language Models enable organizations to automate knowledge-intensive work, enhance decision-making, improve customer engagement, and accelerate innovation.",
              },
              {
                type: "paragraph",
                text: "By combining advanced AI technologies with deep business integration, EvoData helps organizations transform LLM capabilities into measurable business outcomes, sustainable competitive advantages, and scalable operational efficiencies.",
              },
            ] satisfies RichBlock[],
          },
        ],
      },

      {
        title: "Machine Learning Development",
        tabs: [
          {
            label: "Turning Data into Intelligent Business Decisions",
            blocks: [
              {
                type: "paragraph",
                text: "At EvoData, we develop custom Machine Learning (ML) solutions that help organizations transform data into actionable insights, automate complex processes, and improve operational performance. Our expertise spans the full ML lifecycle — from strategy and model development to deployment, integration, and ongoing optimization.",
              },

              { type: "subheading", text: "Custom Machine Learning Models" },
              {
                type: "paragraph",
                text: "Every business has unique challenges, data sources, and objectives. Our team develops tailored machine learning models designed to address specific operational and strategic requirements.",
              },
              {
                type: "paragraph",
                text: "Custom ML solutions can help organizations forecast customer behavior, optimize business operations, automate repetitive tasks, identify growth opportunities, and support data-driven decision-making.",
              },
              { type: "lead", text: "Typical applications:" },
              {
                type: "bullets",
                items: [
                  "Customer behavior prediction",
                  "Demand and sales forecasting",
                  "Process optimization",
                  "Risk assessment and fraud detection",
                  "Intelligent decision support",
                  "Workflow automation",
                ],
              },

              {
                type: "subheading",
                text: "Natural Language Processing (NLP)",
              },
              {
                type: "paragraph",
                text: "Our Natural Language Processing solutions transform unstructured text into valuable business intelligence.",
              },
              {
                type: "paragraph",
                text: "We develop systems capable of understanding, analyzing, classifying, and generating human language, enabling organizations to unlock insights from documents, communications, and customer interactions.",
              },
              { type: "lead", text: "Typical applications:" },
              {
                type: "bullets",
                items: [
                  "Text classification and sentiment analysis",
                  "Information extraction",
                  "Multilingual processing and translation",
                  "Content moderation",
                  "Conversational AI and virtual assistants",
                  "Knowledge management and search",
                ],
              },

              { type: "subheading", text: "Deep Learning Solutions" },
              {
                type: "paragraph",
                text: "We build advanced deep learning systems capable of solving highly complex tasks across multiple industries and business domains.",
              },
              {
                type: "paragraph",
                text: "Using modern neural network architectures, we develop solutions that continuously improve the accuracy and performance of large-scale datasets.",
              },
              { type: "lead", text: "Typical applications:" },
              {
                type: "bullets",
                items: [
                  "Image and speech recognition",
                  "Natural language understanding",
                  "Recommendation engines",
                  "Anomaly detection",
                  "Predictive modeling",
                  "Intelligent automation",
                ],
              },

              { type: "subheading", text: "Predictive & Real-Time Analytics" },
              {
                type: "paragraph",
                text: "Our predictive analytics solutions leverage historical and real-time data to identify trends, anticipate future outcomes, and support informed business decisions.",
              },
              {
                type: "paragraph",
                text: "Advanced analytical models uncover hidden patterns, evaluate risks, and reveal opportunities that may not be visible through traditional reporting methods.",
              },
              { type: "lead", text: "Business outcomes:" },
              {
                type: "bullets",
                items: [
                  "Accurate forecasting",
                  "High data accuracy",
                  "Advanced operational efficiency",
                  "Enhanced risk management",
                ],
              },

              { type: "subheading", text: "Machine Learning Integration" },
              {
                type: "paragraph",
                text: "Developing a model is only part of the journey. We integrate machine learning capabilities directly into your business processes, applications, and technology ecosystem.",
              },
              { type: "lead", text: "Our services cover:" },
              {
                type: "bullets",
                items: [
                  "Data preparation and pipeline development",
                  "Model deployment and orchestration",
                  "System and API integration",
                  "Monitoring and performance optimization",
                  "Model lifecycle management",
                  "Governance and operational support",
                ],
              },

              { type: "subheading", text: "Computer Vision Solutions" },
              {
                type: "paragraph",
                text: "EvoData develops advanced Computer Vision systems that extract actionable insights from images, video streams, and other visual data sources.",
              },
              {
                type: "paragraph",
                text: "Our solutions enable organizations to automate visual inspection, improve operational efficiency, and gain deeper visibility into business processes.",
              },
              { type: "lead", text: "Typical applications:" },
              {
                type: "bullets",
                items: [
                  "Object detection and tracking",
                  "Facial recognition and identity verification",
                  "Image classification",
                  "Video analytics",
                  "Quality control and inspection",
                  "Industrial and manufacturing automation",
                ],
              },
            ] satisfies RichBlock[],
          },
          {
            label: "Why Invest in Machine Learning?",
            blocks: [
              {
                type: "paragraph",
                text: "Machine Learning enables organizations to move beyond reactive decision-making and build intelligent systems that continuously learn, adapt, and improve.",
              },
              {
                type: "paragraph",
                text: "By combining advanced algorithms with deep business integration, EvoData helps organizations increase efficiency, reduce costs, uncover new opportunities, and create sustainable competitive advantages through data-driven innovation.",
              },
            ] satisfies RichBlock[],
          },
        ],
      },
    ],
  },

  /** "Why choose evodata" — node 9337:12599 (the same cards as on What We Do). */
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
} as const;

export type AboutContent = typeof about;
