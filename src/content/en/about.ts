import type { RichBlock } from "@/components/ui/RichBlocks";

/**
 * About Us page copy.
 * Design: desktop node 9331:12591, mobile node 9416:94138.
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
    addressLabel: "Address",
    address: "Warschauer Platz 11-13\n10245 Berlin",
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

  /** Brand band — node 9337:12684. */
  band: {
    title:
      "Technology and innovation are the foundation of competitive advantage.",
  },

  /** "Our Most In-Demand AI Solutions" — node 9337:12674 (drag-scrolled strip). */
  inDemand: {
    title: "Our Most In-Demand AI Solutions",
    intro:
      "We design, develop, and deploy AI solutions that deliver valuable business outcomes — from automation and operational efficiency to enhanced customer experiences.",
    dragHint: "DRAG",
    cards: [
      {
        title: "AI Agents & Autonomous Systems",
        lead: "Advanced AI systems capable of executing complex, multi-step tasks with minimal human intervention.",
        image: "/images/about/solution-01.webp",
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
    ],
    /** Second image of the strip — the "DRAG" hint card, as on the home page. */
    dragImage: "/images/about/solution-02.webp",
    outro: {
      title: "Why Organizations Choose These Solutions",
      text: "Our AI solutions are designed to deliver measurable business value by reducing operational costs, increasing efficiency, improving customer experiences, and creating scalable foundations for future growth.",
    },
  },

  /** Expanded solution areas — node 9372:1069. */
  services: {
    headings: ["AI Agents", "Large Language Models (LLMs)"],
    llm: {
      title: "Our Large Language Model Development Services",
      intro:
        "At EvoData, we help organizations leverage the full potential of Large Language Models (LLMs) to automate processes, enhance customer experiences, and unlock new business opportunities. Our services cover the entire AI lifecycle.",
      blocks: [
        { type: "subheading", text: "AI & LLM Consulting" },
        {
          type: "paragraph",
          text: "Our consulting services help organizations define a clear strategy for adopting and integrating LLM technologies into their business operations. We work closely with stakeholders to identify high-impact use cases and evaluate technologies.",
        },
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
          text: "We seamlessly integrate Large Language Models into existing business applications, workflows, and enterprise systems. Our team designs and implements scalable integrations that enable AI-powered capabilities:",
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
          text: "We develop language models tailored to specific business requirements and industry use cases — fine-tuning existing foundation models or developing specialized AI solutions that understand domain-specific context.",
        },
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
    trailingHeading: "Machine Learning Development",
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
