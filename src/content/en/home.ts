/**
 * Контент головної сторінки (локаль en).
 * Тексти звірені з макетом Figma — Home-Desktop, node 9149:61734.
 */
export const home = {
  hero: {
    /** Верхній рядок переваг (3 колонки). `\n` — перенос рядка з макета. */
    highlights: [
      "🇦🇹 Austrian company — \nhigh operational and quality standards",
      "24/7 technical support — \nyou'll never be left alone with technical issues",
      "10+ years \nof experience delivering AI projects",
    ],
    title: "From Data Audit \nto Enterprise AI Solutions",
  },

  /** Вступний блок (node 9313:293). */
  intro: {
    title: "Tailored AI Solutions & System Engineering",
    body: {
      before: "We design and deliver custom ",
      accent: "AI solutions",
      after:
        " tailored to your business needs — from data infrastructure and machine learning models to autonomous AI agents and enterprise automation. Combining deep engineering expertise with over 10 years of AI experience, we help organizations transform data into measurable business value and scalable competitive advantages.",
    },
  },

  /** Заголовок + слайдер напрямів (nodes 9420:1366 та 9420:1382…1452). */
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

  /** Карусель «We develop and implement custom AI solutions» (node 9165:260193). */
  automation: {
    title: {
      before: "We develop and implement custom \n",
      accent: "AI solutions",
      after: " to optimize business processes",
    },
    /** Напрями — «Главная страница.pdf», п. 5. */
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

  /** AI Implementation Roadmaps (node 9314:371). */
  roadmaps: {
    title: "AI Implementation Roadmaps",
    /**
     * Фази процесу. У макеті головної розкрито контент лише першої фази —
     * решта підписів є, але тексту до них немає (див. README, розділ «Відкриті питання»).
     */
    phases: [
      "Pre-Sales Phase",
      "System Analysis & Solution Architecture",
      "Development & Configuration",
      "Testing, Validation & Production Readiness",
      "Deployment & Production Rollout",
    ],
    activePhase: {
      durationLabel: "Duration:",
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
  },

  /** Цитата (node 9318:77595). */
  quote: {
    title:
      "Technology and innovation are the foundation of competitive advantage.",
    body: "Organizations that successfully leverage advanced technologies are better positioned to improve efficiency, accelerate growth, and outperform their competitors.",
  },

  /** Our technology leaders (node 9165:260126). */
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
    ],
  },

  /**
   * Відео (node 9150:71967).
   * `src` порожній: файл відео надає замовник — покласти у `public/videos/`
   * і вказати шлях тут. Поки порожньо — рендериться лише постер.
   */
  video: {
    src: "",
    poster: "/images/video-poster.webp",
    playLabel: "Play video",
  },

  /** Цифри (node 9406:50219). */
  metrics: {
    /** Заголовок «evodata in numbers» — «evo» і «data» стилізовані по-різному. */
    titleSuffix: " in numbers",
    items: [
      { label: "Years of experience", value: "5+" },
      { label: "Projects", value: "8" },
      { label: "Professional Team", value: "6" },
      { label: "Proof of concepts", value: "12" },
    ],
  },
} as const;

export type HomeContent = typeof home;
