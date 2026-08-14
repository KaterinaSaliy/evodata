/**
 * Home page copy (locale en).
 * Checked against the Figma design — Home-Desktop, node 9149:61734.
 */
export const home = {
  hero: {
    /** Top row of highlights (3 columns). `\n` — line break from the design. */
    highlights: [
      "🇦🇹 Austrian company — \nhigh operational and quality standards",
      "24/7 technical support — \nyou'll never be left alone with technical issues",
      "10+ years \nof experience delivering AI projects",
    ],
    title: "From Data Audit \nto Enterprise AI Solutions",
  },

  /** Intro block (node 9313:293). */
  intro: {
    title: "Tailored AI Solutions & System Engineering",
    body: {
      before: "We design and deliver custom ",
      accent: "AI solutions",
      after:
        " tailored to your business needs — from data infrastructure and machine learning models to autonomous AI agents and enterprise automation. Combining deep engineering expertise with over 10 years of AI experience, we help organizations transform data into measurable business value and scalable competitive advantages.",
    },
  },

  /** Heading + solution slider (nodes 9420:1366 and 9420:1382…1452). */
  solutions: {
    title: "AI Solutions for Business Growth and Operational Excellence",
    slides: [
      {
        number: "01",
        title: "Business Process Optimization",
        description:
          "Leverage AI-powered automation to streamline workflows, reduce manual effort, and improve operational efficiency across your organization. Our solutions help businesses optimize processes, eliminate bottlenecks, and increase productivity while maintaining accuracy and compliance.",
        image: "/images/slides/slide-01.webp",
      },
      {
        number: "02",
        title: "Natural Language Processing",
        description:
          "Building NLP solutions for sentiment analysis, text summarization, entity recognition, and language translation.\nDeveloping chatbots and virtual assistants for customer service and support.",
        image: "/images/slides/slide-02.webp",
      },
      {
        number: "03",
        title: "Computer Vision",
        description:
          "Creating computer vision solutions for image and video analysis, object detection, facial recognition, and optical character recognition (OCR).\nImplementing solutions for quality control, security surveillance, and autonomous vehicles.",
        image: "/images/slides/slide-03.webp",
      },
      {
        number: "04",
        title: "Speech Recognition",
        description:
          "Developing speech recognition systems for transcription, voice commands, and voice-enabled interfaces. Building speech synthesis solutions for text-to-speech applications.",
        image: "/images/slides/slide-04.webp",
      },
      {
        number: "05",
        title: "Data Analysis",
        description:
          "Providing data analytics services to extract insights from large datasets using AI and machine learning techniques.",
        image: "/images/slides/slide-05.webp",
      },
      {
        number: "06",
        title: "AI Consulting and Strategy",
        description:
          "Offering consultancy services to help businesses understand AI opportunities and develop AI strategies aligned with their goals. Conducting AI readiness assessments and providing guidance on implementation and integration.",
        image: "/images/slides/slide-06.webp",
      },
    ],
  },

  /** "We develop and implement custom AI solutions" strip (node 9165:260193). */
  automation: {
    title: {
      before: "We develop and implement custom \n",
      accent: "AI solutions",
      after: " to optimize business processes",
    },
    /** Solution areas — client copy deck "Главная страница.pdf", section 5. */
    cards: [
      {
        title: "Deep Process Automation",
        description:
          "Machine Learning and AI technologies automate repetitive and time-consuming tasks, reducing operational workloads and increasing efficiency. From workforce scheduling to financial reporting, AI enables faster execution, greater consistency, and improved scalability.",
        image: "/images/cards/deep-process-automation.webp",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Modern AI-powered assistants and conversational systems provide intelligent, context-aware customer interactions around the clock. Available 24/7 and capable of handling high volumes of requests, they help organizations deliver responsive, high-quality customer service at scale.",
        image: "/images/cards/enhanced-customer-experience.webp",
      },
      {
        title: "Intelligent Content Generation",
        description:
          "Large Language Models (LLMs) and Generative AI accelerate the creation of business content, including marketing materials, internal communications, product descriptions, design concepts, and more. This enables organizations to increase productivity while maintaining quality and consistency.",
        image: "/images/cards/intelligent-content-generation.webp",
      },
      {
        title: "Predictive Analytics",
        description:
          "AI models analyze large volumes of historical and real-time data to identify trends, forecast demand, evaluate risks, and anticipate market changes. These insights help organizations make proactive decisions and adapt their strategies with confidence.",
        image: "/images/cards/predictive-analytics.webp",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Machine Learning and advanced analytics consolidate data from multiple sources into a unified view of business performance. This empowers leadership teams with actionable insights, improves visibility across operations, and supports more informed strategic decisions.",
        image: "/images/cards/data-driven-decision-making.webp",
      },
    ],
  },

  /**
   * AI Implementation Roadmaps (node 9314:371) — tabs.
   * The design expands the first phase only; copy for the rest comes from
   * the client deck "Главная страница.pdf", section 6.
   */
  roadmaps: {
    title: "AI Implementation Roadmaps",
    durationLabel: "Duration:",
    phases: [
      {
        label: "Pre-Sales Phase",
        duration: "4 weeks +",
        paragraphs: [
          "During the Pre-Sales phase, we conduct a comprehensive assessment of your existing technology landscape, data assets, and business objectives. Based on the outcome, we define the optimal AI strategy and solution architecture tailored to your organization’s requirements.",
          "To minimize implementation risk and validate business value at an early stage, we develop a Proof of Concept (PoC).",
        ],
        groups: [
          {
            title: "Deliverables",
            items: [
              {
                lead: "Proof of Concept (PoC):",
                text: " A functional AI prototype built on your data, enabling stakeholders to evaluate technical feasibility, expected outcomes, and potential business impact before committing to full-scale development.",
              },
              {
                lead: "Implementation Roadmap:",
                text: " A structured project plan outlining project scope, key milestones, delivery phases, resource requirements, and estimated timelines for production deployment.",
              },
            ],
          },
          {
            title: "Business Value",
            items: [
              { lead: "", text: "Reduced implementation and operational risk" },
              {
                lead: "",
                text: "Clear visibility into expected ROI and project outcomes",
              },
            ],
          },
        ],
      },
      {
        label: "System Analysis & Solution Architecture",
        duration: "4 weeks +",
        paragraphs: [
          "During this phase, we design the end-to-end architecture of the AI solution and define how it will integrate seamlessly with your existing technology ecosystem. We evaluate and select the most appropriate AI models, design Retrieval-Augmented Generation (RAG) infrastructure with vector databases, and establish robust mechanisms for error handling, monitoring, and scalability.",
        ],
        groups: [
          {
            title: "Deliverables",
            items: [
              {
                lead: "Technical Specification & Architecture Blueprint:",
                text: " System requirements, integration points, data flows, and architecture diagrams.",
              },
              {
                lead: "Technology Stack Selection:",
                text: " A recommended technology stack based on performance, scalability, security, and long-term maintainability requirements.",
              },
              {
                lead: "Risk Assessment & Mitigation Plan:",
                text: " Identification of technical and operational risks, along with recommended mitigation strategies and contingency measures.",
              },
            ],
          },
          {
            title: "Business Value",
            items: [
              {
                lead: "",
                text: "Clear architectural foundation for successful implementation",
              },
              { lead: "", text: "Reduced technical and operational risks" },
              {
                lead: "",
                text: "Optimized technology selection aligned with business objectives",
              },
              {
                lead: "",
                text: "Scalable and maintainable AI infrastructure designed for future growth and expansion",
              },
            ],
          },
        ],
      },
      {
        label: "Development & Configuration",
        duration: "10 weeks +",
        paragraphs: [
          "During the development phase, EvoData prepare and optimize data pipelines, fine-tune AI models, and build the core backend infrastructure and APIs that enable seamless integration with your existing business systems. The solution is engineered for reliability, scalability, and enterprise-grade performance.",
        ],
        groups: [
          {
            title: "Deliverables",
            items: [
              {
                lead: "Production-Ready AI Module:",
                text: " A fully functional AI solution trained and configured on your business data, integrated with CRM platforms, knowledge bases, and other enterprise systems.",
              },
              {
                lead: "Backend Infrastructure & APIs:",
                text: " Secure and scalable services that facilitate communication between AI components and your existing technology ecosystem.",
              },
              {
                lead: "Automated Unit Testing Suite:",
                text: " Comprehensive unit tests ensure system stability, code quality, and reliable performance throughout the development lifecycle.",
              },
            ],
          },
          {
            title: "Business Value",
            items: [
              {
                lead: "",
                text: "Seamless integration with existing workflows and enterprise platforms",
              },
              {
                lead: "",
                text: "High-quality, maintainable codebase built according to industry best practices",
              },
              {
                lead: "",
                text: "Reliable and scalable AI capabilities ready for production deployment",
              },
              {
                lead: "",
                text: "Reduced operational risk through automated testing and quality assurance processes",
              },
            ],
          },
        ],
      },
      {
        label: "Testing, Validation & Production Readiness",
        duration: "4 weeks +",
        paragraphs: [
          "During this phase, we conduct comprehensive testing and validation of the AI solution under real-world operating conditions. This includes stress testing, edge-case scenario evaluation, performance optimization, and resilience testing to ensure stable operation under varying workloads and unexpected system events.",
          "We fine-tune response times, optimize infrastructure efficiency, and implement fault-tolerance mechanisms to maximize reliability in production environments.",
        ],
        groups: [
          {
            title: "Deliverables",
            items: [
              {
                lead: "Production-Ready AI Solution:",
                text: " A fully tested and validated AI module prepared for deployment in a live production environment and verified against realistic workload scenarios.",
              },
              {
                lead: "Performance & Quality Assessment Report:",
                text: " Detailed reporting on key performance indicators, including model accuracy, response latency, throughput, and operational cost per request.",
              },
              {
                lead: "Monitoring & Observability Framework:",
                text: " Configured monitoring, logging, and alerting systems that provide visibility into application health, performance, and operational metrics.",
              },
            ],
          },
          {
            title: "Business Value",
            items: [
              {
                lead: "",
                text: "Confidence in production deployment through rigorous validation",
              },
              { lead: "", text: "Optimized performance and cost efficiency" },
              { lead: "", text: "Reduced operational risk and downtime" },
              {
                lead: "",
                text: "Continuous visibility into system performance and business-critical metrics",
              },
            ],
          },
        ],
      },
      {
        label: "Deployment & Production Rollout",
        duration: "4 weeks +",
        paragraphs: [
          "During the deployment phase, the AI solution is introduced into the production environment through a controlled and phased rollout strategy. The initial release is made available to a limited user segment, allowing performance, user adoption, and operational stability to be closely monitored before expanding to the broader audience.",
        ],
        groups: [
          {
            title: "Deliverables",
            items: [
              {
                lead: "Production-Deployed AI Solution:",
                text: " A fully operational AI solution deployed in a live environment and accessible to real users.",
              },
              {
                lead: "Phased Rollout Strategy:",
                text: " Controlled deployment and scaling plan designed to minimize operational risk and ensure a smooth transition to full production usage.",
              },
              {
                lead: "Monitoring & Operational Readiness:",
                text: " Configured monitoring, alerting, and performance tracking systems to support ongoing reliability and optimization.",
              },
            ],
          },
          {
            title: "Business Value",
            items: [
              {
                lead: "",
                text: "Reduced deployment risk through gradual adoption and validation",
              },
              {
                lead: "",
                text: "Seamless transition from development to production",
              },
              {
                lead: "",
                text: "Real-world performance insights and user feedback",
              },
              {
                lead: "",
                text: "Foundation for continuous optimization and future scaling",
              },
            ],
          },
        ],
      },
    ],
  },

  /** Quote (node 9318:77595). */
  quote: {
    title:
      "Technology and innovation are the foundation of competitive advantage.",
    body: "Organizations that successfully leverage advanced technologies are better positioned to improve efficiency, accelerate growth, and outperform their competitors.",
  },

  /**
   * Our technology leaders (node 9165:260126).
   * The design row holds 6 logos; the rest sit on the canvas next to the frame
   * (nodes 9239:423…9239:535). All of them run in the marquee.
   */
  techLeaders: {
    title: "Our technology leaders",
    logos: [
      { name: "React", src: "/images/tech/react.svg", width: 165, height: 56 },
      {
        name: "Node.js",
        src: "/images/tech/nodejs.svg",
        width: 174,
        height: 46,
      },
      {
        name: "FastAPI",
        src: "/images/tech/fastapi.svg",
        width: 188,
        height: 35,
      },
      {
        name: "Python",
        src: "/images/tech/python.svg",
        width: 197,
        height: 48,
      },
      { name: "dbt", src: "/images/tech/dbt.svg", width: 118, height: 45 },
      {
        name: "Terraform",
        src: "/images/tech/terraform.svg",
        width: 206,
        height: 49,
      },
      {
        name: "PostgreSQL",
        src: "/images/tech/postgresql.svg",
        width: 274,
        height: 59,
      },
      {
        name: "Docker",
        src: "/images/tech/docker.svg",
        width: 190,
        height: 44,
      },
      {
        name: "Kubernetes",
        src: "/images/tech/kubernetes.svg",
        width: 255,
        height: 43,
      },
      {
        name: "Hugging Face",
        src: "/images/tech/huggingface.svg",
        width: 297,
        height: 48,
      },
      {
        name: "Apache Spark",
        src: "/images/tech/apache-spark.svg",
        width: 143,
        height: 74,
      },
      {
        name: "PyTorch",
        src: "/images/tech/pytorch.svg",
        width: 189,
        height: 47,
      },
      {
        name: "Microsoft Azure",
        src: "/images/tech/azure.svg",
        width: 171,
        height: 50,
      },
      {
        name: "Google BigQuery",
        src: "/images/tech/bigquery.svg",
        width: 179,
        height: 61,
      },
      {
        name: "OpenAI",
        src: "/images/tech/openai.svg",
        width: 169,
        height: 47,
      },
      {
        name: "Google Cloud",
        src: "/images/tech/gcp.svg",
        width: 260,
        height: 41,
      },
      {
        name: "Amazon Web Services",
        src: "/images/tech/aws.svg",
        width: 95,
        height: 57,
      },
    ],
  },

  /**
   * Video (node 9150:71967).
   * `src` is empty: the client supplies the video file — drop it into
   * `public/videos/` and set the path here. While empty, only the poster renders.
   */
  video: {
    src: "",
    poster: "/images/video-poster.webp",
    playLabel: "Play video",
  },

  /** Numbers (node 9406:50219). */
  metrics: {
    /** "evodata in numbers" heading — "evo" and "data" are styled differently. */
    titleSuffix: " in numbers",
    items: [
      { label: "Years of experience", value: "10+" },
      { label: "Projects", value: "17" },
      { label: "Professional Team", value: "13" },
      { label: "Proof of concepts", value: "23" },
    ],
  },
} as const;

export type HomeContent = typeof home;
