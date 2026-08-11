/**
 * FAQ page copy.
 * Design: desktop node 9376:6108, mobile node 9416:107603.
 * Source of the copy — the client deck "FAQ.pdf".
 *
 * The design draws one state of the block: the side list on the left, the
 * question with its lead paragraph on the right and an accordion under it.
 * The deck fills all seven topics, so the side list switches them.
 */
export const faq = {
  hero: {
    breadcrumb: "Frequently Asked Questions",
    title: "The creative tech-force \nbehind tomorrow’s companies.",
    subtitle:
      "We believe in technology. Yet, we also believe that this must \nbe navigated by the human mind and heart.",
  },

  title: "Frequently Asked Questions",

  /** Labels of the side list are the design's (node 9376:6261). */
  topics: [
    {
      label: "Our Team Is Already Overloaded",
      question: "How can we explore AI without slowing down existing projects?",
      answer: [
        "Hiring AI engineers and bringing them up to speed on your business can take months or even years. We help you move faster by quickly augmenting your team and delivering a Proof of Concept (PoC) before committing to a full-scale production rollout.",
      ],
      items: [
        {
          title: "When Is This Relevant?",
          bullets: [
            "Your product roadmap is already packed, and new initiatives are waiting in line.",
            "Your team lacks in-house expertise in Large Language Models (LLMs), RAG systems, or AI agents.",
            "You want to validate AI opportunities without making long-term hiring commitments.",
            "You need tangible results to present to stakeholders, management, or investors.",
          ],
        },
        {
          title: "What Do You Get?",
          bullets: [
            "Rapid access to experienced AI engineers without lengthy recruitment and onboarding.",
            "A working Proof of Concept built on your own data, allowing you to demonstrate real outcomes rather than slide decks.",
            "Flexible engagement models that can scale up or down depending on project needs.",
            "Ongoing technical support and knowledge transfer when required.",
          ],
        },
        {
          title: "How We Help?",
          steps: [
            "Assess your existing infrastructure, architecture, and data landscape.",
            "Develop and demonstrate a Proof of Concept using your business data.",
            "Work independently or integrate seamlessly with your internal team.",
            "Provide ongoing support and assistance during scaling and production deployment.",
          ],
        },
      ],
    },

    {
      label: "AI without disrupting production",
      question:
        "How can we integrate AI into legacy systems without risking production stability?",
      answer: [
        "Many business-critical systems have been running reliably for years, and even small changes can introduce significant operational risks. Rewriting legacy applications to support AI often takes months or years. We take a different approach by integrating AI through APIs and independent microservices, allowing you to add intelligent capabilities without disrupting your existing systems.",
      ],
      items: [
        {
          title: "When Is This Relevant?",
          bullets: [
            "Your core applications run on legacy technologies such as Java 8, .NET Framework, or monolithic PHP architectures.",
            "Production downtime is not an option.",
            "You want to introduce AI capabilities without rewriting large portions of your codebase.",
            "You need a gradual rollout strategy with the ability to revert changes instantly if necessary.",
          ],
        },
        {
          title: "What Do You Get?",
          bullets: [
            "Zero-downtime integration that allows AI services to operate alongside existing business processes.",
            "Instant rollback capabilities by simply disabling the AI service if needed.",
            "Minimal impact on legacy applications through REST APIs, message queues, and service-based integration patterns.",
            "Controlled deployment using canary releases and staged rollouts to validate stability before scaling.",
          ],
        },
        {
          title: "How We Help?",
          steps: [
            "Build an independent AI microservice that operates separately from your legacy environment.",
            "Integrate the solution through an API gateway, enabling existing applications to consume AI capabilities without architectural changes.",
            "Implement graceful degradation mechanisms so your core system continues to function normally even if the AI service becomes unavailable.",
            "Deploy monitoring and observability tools to track latency, reliability, usage, and operational costs.",
          ],
        },
        {
          title: "Expected Outcome",
          paragraphs: [
            "AI capabilities can be introduced in weeks rather than months, without interrupting production operations. Initial testing can be performed on a small percentage of live traffic, allowing performance and business impact to be validated before a full-scale rollout.",
          ],
        },
      ],
    },

    {
      label: "Validate first, invest later",
      question:
        "How can we validate an AI idea without investing in custom model training?",
      answer: [
        "Building custom AI models often requires data labeling, training, testing, and ongoing optimization — an expensive process that can take months or even years. Before making that investment, it makes sense to validate whether the AI solution will actually deliver business value. We help organizations test AI initiatives quickly and cost-effectively using proven large language models and modern AI architectures.",
      ],
      items: [
        {
          title: "When Is This Relevant?",
          bullets: [
            "You're unsure whether AI will deliver meaningful improvements to your business processes and need fast validation.",
            "The budget does not allow for large upfront investments in an unproven concept.",
            "You don't have labeled datasets required for training custom machine learning models.",
            "You want rapid feedback cycles to iterate and refine the solution based on real user behavior.",
          ],
        },
        {
          title: "What Do You Get?",
          bullets: [
            "Rapid deployment using leading AI platforms such as ChatGPT, DeepSeek, GigaChat, and other enterprise-grade LLMs.",
            "Validation of your AI hypothesis with real users and real business data.",
            "Early performance metrics and insights to support data-driven investment decisions.",
            "A clear roadmap for future optimization, including fine-tuned or self-hosted models if the concept proves successful.",
          ],
        },
        {
          title: "How We Help?",
          steps: [
            "Start with a Retrieval-Augmented Generation (RAG) architecture, enabling AI to work with your existing knowledge and data without model retraining.",
            "Integrate enterprise-ready LLM APIs to deliver a working solution in the shortest possible timeframe.",
            "Implement analytics and monitoring to measure usage, response quality, user engagement, and business impact.",
            "Optimize performance and costs over time by transitioning to fine-tuned, self-hosted, or hybrid AI models when justified by the results.",
          ],
        },
        {
          title: "Expected Outcome",
          paragraphs: [
            "A fully functional AI assistant or AI-powered workflow running on your business data, with measurable performance indicators available shortly after launch. This approach allows you to validate business value first and invest in advanced AI infrastructure only when the results support it.",
          ],
        },
      ],
    },

    {
      label: "Enterprise AI without compliance risk",
      question:
        "How can we implement AI while meeting compliance and security requirements?",
      answer: [
        "For organizations operating in regulated industries such as fintech, healthcare, insurance, and the public sector, AI adoption must go hand in hand with compliance, security, and governance. Mishandling sensitive data can lead to regulatory penalties, reputational damage, and operational risks. We build AI solutions with security, privacy, and compliance embedded into the architecture from day one.",
      ],
      items: [
        {
          title: "When Is This Relevant?",
          bullets: [
            "You process personal, financial, healthcare, or other regulated data and must comply with GDPR or industry-specific regulations.",
            "Data residency requirements mandate that information remains within the European Economic Area or your own infrastructure.",
            "Regulatory audits require complete traceability of AI-generated outputs and decision-making processes.",
            "Sensitive information cannot be shared with public AI services or third-party APIs.",
          ],
        },
        {
          title: "What Do You Get?",
          bullets: [
            "GDPR-compliant AI solutions designed around privacy and data protection requirements.",
            "Data residency options within the European Union, including private cloud and on-premises deployments.",
            "Comprehensive audit trails covering AI interactions, data sources, generated outputs, and system activity.",
            "Built-in content moderation, security controls, and protection against prompt injection and other AI-specific threats.",
            "Enterprise-grade governance and monitoring capabilities for long-term operational reliability.",
          ],
        },
        {
          title: "How We Help?",
          steps: [
            "Design AI architectures with compliance and security requirements incorporated from the outset, working closely with your legal, compliance, and security teams.",
            "Deploy self-hosted or private AI models when data confidentiality requirements prohibit the use of public AI services.",
            "Implement end-to-end encryption for data both in transit and at rest.",
            "Introduce human oversight mechanisms for critical decisions, ensuring appropriate review and accountability.",
            "Establish monitoring, logging, and governance processes to support internal controls and regulatory audits.",
          ],
        },
        {
          title: "Expected Outcome",
          paragraphs: [
            "A secure and compliant AI solution that can be deployed rapidly without compromising regulatory obligations. Your organization gains full visibility into AI operations, complete documentation for audits, and an architecture designed to meet both current compliance requirements and future regulatory expectations.",
          ],
        },
      ],
    },

    {
      label:
        "Reduce operational costs, increase capacity, and free employees for higher-value work",
      question:
        "How can we automate repetitive business processes and free our team for higher-value work?",
      answer: [
        "Routine operational tasks consume valuable time that could be spent on growth, innovation, and customer relationships. Processing requests, generating reports, and handling documents often require increasing headcount as workloads grow. We help organizations automate repetitive processes with AI, allowing teams to focus on strategic work while improving efficiency and scalability.",
      ],
      items: [
        {
          title: "When Is This Relevant?",
          bullets: [
            "Your support team is overloaded with repetitive inquiries, and a significant share of requests follow the same patterns.",
            "Employees spend hours manually creating reports, summaries, and updates from multiple systems.",
            "Document workflows are slowed down by manual processing of invoices, contracts, forms, and other business records.",
            "Business growth requires additional staff, making operational scaling increasingly expensive and inefficient.",
          ],
        },
        {
          title: "What Do You Get?",
          bullets: [
            "An AI assistant that handles routine inquiries around the clock using your company's knowledge base and internal documentation.",
            "Intelligent document processing that extracts and organizes information from PDFs, scanned documents, emails, and forms significantly faster than manual workflows.",
            "Automated report generation and executive summaries that transform raw data into actionable business insights.",
            "Greater process transparency through measurable and trackable workflows.",
            "Increased operational capacity without proportional increases in payroll costs.",
          ],
        },
        {
          title: "How We Help?",
          steps: [
            "Analyze your workflows and identify the repetitive tasks with the highest automation potential.",
            "Deploy an AI assistant powered by Retrieval-Augmented Generation (RAG), enabling it to work with your existing knowledge base without retraining models.",
            "Implement Intelligent Document Processing (IDP) solutions to automatically extract, classify, and process information from business documents and communications.",
            "Train your team to work effectively with AI, including escalation procedures, quality control, and continuous improvement practices.",
          ],
        },
        {
          title: "Expected Outcome",
          paragraphs: [
            "The first wave of automation can typically be deployed within a short period of time. AI handles routine requests 24/7, document processing becomes significantly more efficient, and your team gains more time to focus on complex, high-value activities that drive business growth.",
          ],
        },
      ],
    },

    {
      label:
        "How are data selected and analyzed to build effective data science solutions",
      question:
        "How are data selected and analyzed to build effective Data Science solutions?",
      answer: [
        "The success of any Data Science initiative depends on the quality of the data, the rigor of the analytical process, and the ability to translate insights into measurable business outcomes.",
        "At EvoData, we follow a structured Data Science methodology that transforms raw data into reliable, production-ready solutions. This approach combines data engineering, statistical analysis, machine learning, and business expertise to ensure that models deliver real value in operational environments.",
      ],
      items: [
        {
          title: "Our Data Science Process",
          sections: [
            {
              definitions: [
                {
                  title: "Data Collection & Assessment",
                  text: "We begin by identifying and gathering relevant data from internal and external sources. This includes evaluating data quality, completeness, consistency, and business relevance to ensure a solid foundation for analysis.",
                },
                {
                  title: "Data Preparation & Cleansing",
                  text: "Raw data is cleaned, standardized, and enriched to eliminate inconsistencies, missing values, and inaccuracies. High-quality data is essential for building accurate and reliable analytical models.",
                },
                {
                  title: "Feature Engineering & Discovery",
                  text: "Our specialists identify and create the most informative variables and features that influence business outcomes. This step often has a significant impact on model performance and predictive accuracy.",
                },
                {
                  title: "Model Development & Selection",
                  text: "We evaluate multiple statistical and machine learning approaches to determine the most effective model for the specific business challenge. Model selection is guided by performance, interpretability, scalability, and business requirements.",
                },
                {
                  title: "Validation & Testing",
                  text: "Models undergo rigorous validation and testing to ensure reliability, accuracy, and robustness before deployment. This process helps minimize risks and ensures consistent performance in real-world conditions.",
                },
                {
                  title: "Data Visualization & Business Insights",
                  text: "Analytical results are translated into intuitive dashboards, reports, and visualizations that help stakeholders understand trends, opportunities, risks, and key business drivers.",
                },
                {
                  title: "Deployment & Operationalization",
                  text: "Once validated, models are integrated into business processes, applications, and decision-making workflows, enabling organizations to generate value from Data Science in production environments.",
                },
                {
                  title: "Monitoring & Continuous Improvement",
                  text: "Data Science solutions are continuously monitored and refined to maintain accuracy, adapt to changing business conditions, and ensure long-term performance.",
                },
              ],
            },
          ],
        },
        {
          title: "Business Value",
          paragraphs: ["This end-to-end methodology enables organizations to:"],
          bullets: [
            "Make data-driven decisions with greater confidence",
            "Improve forecasting accuracy and operational planning",
            "Identify hidden patterns and business opportunities",
            "Automate analytical and decision-support processes",
            "Reduce risk through predictive insights",
            "Generate measurable business outcomes from data investments",
          ],
          sections: [
            {
              paragraphs: [
                "By combining advanced analytics with a structured delivery framework, EvoData helps organizations transform data into a strategic asset that drives growth, efficiency, and competitive advantage.",
              ],
            },
          ],
        },
      ],
    },

    {
      label:
        "What technologies and tools are used to deliver data science solutions",
      question:
        "What technologies and tools are used to deliver Data Science solutions?",
      answer: [
        "Building successful Data Science solutions requires a combination of advanced technologies, scalable infrastructure, and proven analytical methodologies. The specific technology stack is selected based on business objectives, data complexity, performance requirements, and deployment environments.",
        "At EvoData, we leverage industry-leading tools and platforms to design, develop, and operationalize data-driven solutions that are scalable, secure, and production-ready.",
      ],
      items: [
        {
          title: "Programming Languages",
          paragraphs: [
            "Our Data Science and Machine Learning teams utilize modern programming languages that support advanced analytics, model development, and large-scale data processing.",
            "Core technologies include:",
          ],
          bullets: ["Python", "R", "Java", "Scala"],
          sections: [
            {
              paragraphs: [
                "These technologies enable the development of predictive models, data pipelines, automation workflows, and enterprise-grade analytical applications.",
              ],
            },
          ],
        },
        {
          title: "Machine Learning & AI Frameworks",
          paragraphs: [
            "We use industry-standard frameworks and libraries to build, train, evaluate, and deploy machine learning and deep learning models.",
            "Commonly used technologies include:",
          ],
          bullets: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
          sections: [
            {
              paragraphs: [
                "These frameworks support a wide range of use cases, including predictive analytics, computer vision, natural language processing (NLP), recommendation systems, and intelligent automation.",
              ],
            },
          ],
        },
        {
          title: "Cloud & Data Platforms",
          paragraphs: [
            "Modern Data Science initiatives often require scalable infrastructure capable of processing large volumes of data and supporting production-grade AI workloads.",
            "Typical platforms include:",
          ],
          bullets: [
            "Google Cloud Platform (GCP)",
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Hybrid and on-premises environments",
          ],
          sections: [
            {
              paragraphs: [
                "These platforms provide the computational resources, storage capabilities, and operational tools required for enterprise-scale analytics and machine learning deployments.",
              ],
            },
          ],
        },
        {
          title: "Machine Learning & Deep Learning Technologies",
          paragraphs: [
            "Our solutions leverage advanced Machine Learning (ML) and Deep Learning (DL) algorithms to uncover patterns, generate predictions, automate decision-making, and create intelligent business applications.",
            "Common applications include:",
          ],
          bullets: [
            "Predictive analytics",
            "Demand forecasting",
            "Customer behavior modeling",
            "Anomaly detection",
            "Computer vision",
            "Conversational AI and NLP",
          ],
        },
        {
          title: "Data Visualization & Business Intelligence",
          paragraphs: [
            "Effective Data Science is not only about generating insights but also making them accessible and actionable for decision-makers.",
            "We use modern visualization and reporting tools to transform complex analytical results into intuitive dashboards and business intelligence solutions.",
            "Technologies include:",
          ],
          bullets: [
            "Matplotlib",
            "Plotly",
            "Tableau",
            "Enterprise BI platforms and custom dashboards",
          ],
        },
        {
          title: "Technology Selection Based on Business Needs",
          paragraphs: [
            "Rather than relying on a fixed technology stack, we select the most appropriate tools and frameworks based on the specific requirements of each project, ensuring optimal performance, scalability, maintainability, and return on investment.",
          ],
        },
        {
          title: "The Result",
          paragraphs: [
            "By combining advanced analytics, machine learning, cloud infrastructure, and visualization technologies, EvoData delivers Data Science solutions that transform raw data into actionable business intelligence, enabling organizations to make smarter decisions, improve operational efficiency, and drive sustainable growth.",
          ],
        },
      ],
    },
  ],
} as const;

export type FaqContent = typeof faq;
