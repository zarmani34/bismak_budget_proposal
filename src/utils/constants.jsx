import { BarChart3, Brain, Briefcase, CheckCircle2, Globe, Layers, MessageSquare, Shield, Target, Users, Zap } from "lucide-react";

  export const DELIVERABLES = [
    {
      title: "Modern Landing Page",
      icon: Globe,
      description:
        "A stunning, conversion-optimized landing page that captures BISMAK's excellence",
      features: [
        "Hero section with dynamic animations and call-to-action",
        "Service showcase with interactive cards",
        "Portfolio/case studies section highlighting past projects",
        "Client testimonials with credibility signals",
        "Lead capture forms with email automation",
        "Mobile-first responsive design",
        "SEO optimization for search visibility",
        "Fast loading (< 3 seconds)",
      ],
      deliveryTime: "3-4 weeks",
    },
    {
      title: "Client Portal",
      icon: Users,
      description:
        "Empowering clients with 24/7 access to their projects and services",
      features: [
        "Personalized dashboard with real-time project status",
        "Service request system with file uploads",
        "Document library with certificate expiry alerts",
        "Invoice management with payment integration",
        "Project timeline and milestone tracking",
        "Direct messaging with BISMAK team",
        "Mobile app-like experience (PWA)",
        "Notification system (email + in-app)",
      ],
      deliveryTime: "5-6 weeks",
    },
    {
      title: "Admin Dashboard",
      icon: BarChart3,
      description:
        "Comprehensive control center for BISMAK management team",
      features: [
        "Executive KPI dashboard with real-time metrics",
        "Project management module (create, assign, track)",
        "Client relationship management (CRM) features",
        "Financial reporting and analytics",
        "Certificate and compliance tracking system",
        "Staff management and task assignment",
        "Service request approval workflows",
        "Automated report generation",
        "Data export capabilities (PDF, Excel)",
      ],
      deliveryTime: "6-7 weeks",
    },
    {
      title: "Staff Portal",
      icon: Briefcase,
      description:
        "Streamlined interface for field engineers and technical staff",
      features: [
        "Daily task list with priority indicators",
        "Job assignment notifications",
        "Mobile-optimized inspection forms",
        "Photo and report uploads from field",
        "Equipment and tools checklist",
        "Time tracking and attendance",
        "Certificate upload and verification",
        // "Real-time communication with admin",
      ],
      deliveryTime: "5-6 weeks",
    },
    // {
    //   title: "AI-Powered Assistant",
    //   icon: Brain,
    //   description:
    //     "Intelligent chatbot providing 24/7 customer support and automation",
    //   features: [
    //     "Natural language understanding (NLU)",
    //     "Automated responses to common inquiries",
    //     "Service recommendation engine",
    //     "Lead qualification and routing",
    //     "Appointment scheduling assistance",
    //     "Multi-language support capability",
    //     "Integration with WhatsApp/SMS",
    //     "Learning from interactions over time",
    //   ],
    //   deliveryTime: "4-5 weeks",
    // },
    {
      title: "Tools & Calculators",
      icon: Zap,
      description:
        "Specialized technical tools for BISMAK's unique service offerings",
      features: [
        "Invoice Generator",
        "Leak Test Report Generator",
        "Pressure Test Report Generator",
        "LPG Calibration Tool",
      
      ],
      deliveryTime: "3-4 weeks",
    },
  ];

  export const TECHSTACK = [
    {
      category: "Frontend",
      items: [
        { name: "React + Next.js", reason: "Fast, SEO-friendly, modern" },
        { name: "Tailwind CSS", reason: "Rapid styling, consistent design" },
        { name: "Framer Motion", reason: "Smooth animations" },
        { name: "TypeScript", reason: "Type safety, fewer bugs" },
      ],
    },
    {
    category: "Backend",
    items: [
      { name: "Django + DRF", reason: "Robust, secure, battle-tested" },
      { name: "PostgreSQL", reason: "Reliable, powerful database" },
      { name: "Django ORM", reason: "Efficient database operations" },
      { name: "Celery + Redis", reason: "Background tasks, caching" },
    ],
  },
    // {
    //   category: "AI & Automation",
    //   items: [
    //     { name: "OpenAI GPT", reason: "Advanced conversational AI" },
    //     { name: "LangChain", reason: "AI orchestration framework" },
    //     { name: "Pinecone", reason: "Vector database for AI memory" },
    //   ],
    // },
    {
     category: "Infrastructure",
    items: [
      { name: "Railway/Render", reason: "Easy deployment, scalability" },
      // { name: "Cloudflare", reason: "DDoS protection, CDN, speed" },
      { name: "AWS S3/Cloudinary", reason: "Secure file storage" },
      // { name: "Paystack", reason: "Nigerian payment processing" },
    ],
    },
  ];

  export const TIMELINE = [
    {
      phase: "Discovery & Planning",
      duration: "Week 1-2",
      activities: [
        "Stakeholder interviews",
        "Requirements finalization",
        "Design system creation",
        "Technical architecture",
      ],
    },
    {
      phase: "Design Phase",
      duration: "Week 3-4",
      activities: [
        "Figma wireframes & mockups",
        "Design review sessions",
        "Brand alignment",
        "User flow optimization",
      ],
    },
    {
      phase: "Development Sprint 1",
      duration: "Week 5-10",
      activities: [
        "Landing page development",
        "Client portal foundation",
        "Authentication system",
        "Database architecture",
      ],
    },
    {
      phase: "Development Sprint 2",
      duration: "Week 11-16",
      activities: [
        "Admin dashboard",
        "Staff portal",
        "AI assistant integration",
        "Tools & calculators",
      ],
    },
    {
      phase: "Testing & Refinement",
      duration: "Week 17-20",
      activities: [
        "Quality assurance testing",
        "User acceptance testing",
        "Performance optimization",
        "Bug fixes & polish",
      ],
    },
    {
      phase: "Launch & Support",
      duration: "Week 21-24",
      activities: [
        "Deployment to production",
        "Staff training sessions",
        "Documentation delivery",
        "Post-launch monitoring",
      ],
    },
  ];

  export const WHYCHOOSEME = [
    {
      title: "Full-Stack Expertise",
      description:
        "From pixel-perfect designs to robust backend systems, I handle every aspect of your project",
      icon: Layers,
    },
    {
      title: "AI Integration Specialist",
      description:
        "Cutting-edge AI implementation to give BISMAK a competitive advantage",
      icon: Brain,
    },
    {
      title: "Industry Understanding",
      description:
        "I've studied BISMAK's operations to create truly tailored solutions",
      icon: Target,
    },
    {
      title: "Responsive Communication",
      description:
        "Regular updates, quick responses, and collaborative approach throughout",
      icon: MessageSquare,
    },
    {
      title: "Quality Obsessed",
      description:
        "Clean code, thorough testing, and attention to every detail",
      icon: CheckCircle2,
    },
    {
      title: "Post-Launch Support",
      description:
        "3 months of dedicated support to ensure smooth operations",
      icon: Shield,
    },
  ];