import type { RichBlock } from "@/components/ui/RichBlocks";

/**
 * Контент сторінки Industries.
 * Макет: desktop node 9254:101114, mobile node 9415:93312.
 */
export const industries = {
  hero: {
    breadcrumb: "Industries",
    title: "iGaming development services",
    subtitle:
      "Every enterprise wants its operations to run faster. You want greater results with fewer resources.",
  },

  /** «Our custom solutions» — node 9325:3623. */
  customSolutions: {
    title: "Our custom solutions",
    topics: [
      "E-commerce",
      "Finance & Banking",
      "Manufacturing",
      "Retail",
      "Logistics & Supply Chain",
      "EdTech & HRTech",
      "Healthcare",
      "Marketing",
    ],
    activeItems: [
      "Product Recommendation Engines",
      "Demand Forecasting",
      "Personalization and Customer Segmentation",
      "Dynamic Pricing Optimization",
      "Customer Behavior Analytics",
    ],
  },

  /** «The Business Value of AI Transformation» — node 9329:4246. */
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
        title: "Predictive Analytics",
        description:
          "AI models analyze large volumes of historical and real-time data to identify trends, forecast demand, evaluate risks, and anticipate market changes. These insights help organizations make proactive decisions and adapt their strategies with confidence.",
        image: "/images/ind/value-04.webp",
      },
    ],
  },

  /**
   * «From the first idea to scaling…» — node 9329:4329.
   * У макеті 5 підписів вкладок, але приховані фрейми містять контент із
   * What We Do (залишки копіювання компонента), тому під'єднано лише ту вкладку,
   * чий контент справді відповідає підпису. Див. README.
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
            text: "Today's investors want to see more than an idea. They expect evidence of market demand, real user engagement, and measurable growth indicators. A working MVP with active users and meaningful metrics can significantly strengthen your position during fundraising.",
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
      { label: "You Have a Product Idea, But No Development Team" },
      {
        label:
          "Testing a New Business Direction Without Building an Internal Team",
      },
      { label: "MVP Has Proven Demand, but the Architecture Can't Keep Up" },
      {
        label:
          "Internal Team Is Overloaded, and Strategic Projects Are Falling Behind",
      },
    ],
  },

  /** «AI Is Not a Replacement for People» — node 9403:355. */
  forceMultiplier: {
    title: "AI Is Not a Replacement for People — It's a Force Multiplier",
    intro:
      "AI delivers the highest return when it removes routine work from your team, allowing experts to focus on decisions, innovation, and growth while intelligent systems handle repetitive execution at scale.",
    groups: [
      {
        title: "When Does AI Become Essential?",
        text: "Artificial Intelligence delivers the greatest value when a business process already exists but is limited by manual effort, repetitive tasks, and human-dependent operations. As organizations grow, routine activities increasingly consume valuable employee time.",
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
        text: "AI-powered systems are designed to take over repetitive, rule-based, and time-consuming tasks with speed, consistency, and reliability. Unlike human-operated processes, AI solutions can work continuously and process large volumes of information in real time.",
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

  /** «Why choose evodata» — node 9329:3677 (ті самі 3D-об'єкти, що й на What We Do). */
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

  /** «Everything you need to now» — node 9329:4121. */
  faq: {
    title: "Everything you need to now",
    items: [
      {
        title: "What Types of AI Solutions Do You Develop?",
        paragraphs: [
          "Our team develops a wide range of AI solutions tailored to specific business objectives and operational requirements. We work with Machine Learning, Deep Learning, Generative AI, Natural Language Processing (NLP), Computer Vision, Predictive Analytics, Intelligent Automation, and Data Science technologies.",
        ],
      },
      { title: "How Do You Choose the Right AI Model for a Business?" },
      {
        title:
          "How Do You Choose the Right Machine Learning Models for Business Needs?",
      },
      {
        title:
          "Is It Necessary to Test Machine Learning Models Before Full Deployment?",
      },
    ],
  },
} as const;

export type IndustriesContent = typeof industries;
