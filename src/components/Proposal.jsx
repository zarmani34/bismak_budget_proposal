import { useState } from "react";
import {
  FileText,
  Code,
  Database,
  Brain,
  Server,
  Shield,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

export default function Proposal() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState("summary");

  const [budgetItems, setBudgetItems] = useState([
    {
      category: "Frontend Development",
      icon: "Code",
      items: [
        { name: "Landing Page Development", cost: 300000 },
        { name: "Client Portal (UI/UX Implementation)", cost: 400000 },
        { name: "Admin Portal (Dashboard & Analytics)", cost: 600000 },
        { name: "Staff Portal (Task Management)", cost: 600000 },
        { name: "Responsive Design Implementation", cost: 100000 },
      ],
    },
    {
      category: "Backend Development",
      icon: "Database",
      items: [
        { name: "API Architecture & Development", cost: 500000 },
        { name: "Authentication & Authorization System", cost: 300000 },
        { name: "RBAC (Role-Based Access Control)", cost: 350000 },
        { name: "Service Request Workflow Engine", cost: 400000 },
        { name: "Document Management System", cost: 350000 },
        {
          name: "Tools & Report Generator (Leak Test, Pressure Test etc.)",
          cost: 400000,
        },
        { name: "Invoice Management System", cost: 200000 },
      ],
    },
    {
      category: "UI/UX Design",
      icon: "FileText",
      items: [
        { name: "Figma Design System & Components", cost: 300000 },
        { name: "Landing Page Design", cost: 150000 },
        { name: "Client Portal UI Design (5-7 screens)", cost: 200000 },
        { name: "Admin Portal UI Design (8-10 screens)", cost: 200000 },
        { name: "Staff Portal UI Design (5-6 screens)", cost: 100000 },
      ],
    },
    {
      category: "AI & Automation",
      icon: "Brain",
      items: [
        { name: "AI Assistant Integration", cost: 450000 },
        { name: "AI Model Training & Fine-tuning", cost: 500000 },
        { name: "Message Automation System", cost: 350000 },
        { name: "Natural Language Processing", cost: 300000 },
      ],
    },
    {
      category: "Infrastructure & Hosting",
      icon: "Server",
      items: [
        { name: "Cloud Hosting", cost: 300000 },
        { name: "Business Email Integration", cost: 200000 },
        { name: "File Storage System (S3/Cloud)", cost: 200000 },
        { name: "Payment Gateway Integration", cost: 100000 },
      ],
    },
    // {
    //   category: 'Security & Testing',
    //   icon: 'Shield',
    //   items: [
    //     { name: 'Security Implementation (Encryption, DDoS)', cost: 200000 },
    //     { name: 'Unit & Integration Testing', cost: 200000 },
    //     { name: 'User Acceptance Testing (UAT)', cost: 100000 },
    //     { name: 'Performance & Load Testing', cost: 100000 },
    //   ],
    // },
    {
      category: "Project Management & Support",
      icon: "Users",
      items: [
        { name: "Project Management & Coordination", cost: 200000 },
        { name: "User Training & Onboarding", cost: 100000 },
        { name: "3 Months Post-Launch Support", cost: 150000 },
        { name: "Testing & Development", cost: 200000 },
      ],
    },
    {
      category: "Miscellaneous",
      icon: "TrendingUp",
      items: [
        { name: "Administrative Costs", cost: 100000 },
        { name: "Contingency Reserve", cost: 100000 },
      ],
    },
  ]);

  const iconMap = {
    Code,
    Database,
    FileText,
    Brain,
    Server,
    Shield,
    Users,
    TrendingUp,
  };

  const calculateCategoryTotal = (items) => {
    return items.reduce((sum, item) => sum + item.cost, 0);
  };

  const calculateTotalCost = () => {
    return budgetItems.reduce((sum, category) => {
      return sum + calculateCategoryTotal(category.items);
    }, 0);
  };

  const totalCost = calculateTotalCost();

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString("en-NG")}`;
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const SummaryPage = () => (
    <div className="space-y-6">
      {budgetItems.map((item, index) => {
        const categoryCost = calculateCategoryTotal(item.items);
        const Icon = iconMap[item.icon];
        return (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
          >
            <div
              className="bg-linear-to-r from-gray-800 to-gray-800/50 p-5 flex justify-between items-center cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center gap-3">
                <div className="text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.category}</h3>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-bold text-emerald-400">
                  {formatCurrency(categoryCost)}
                </p>
                {expandedCard === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>

            {expandedCard === index && (
              <div className="p-5 bg-gray-800/20">
                <div className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex justify-between items-start gap-4 pb-2 border-b border-gray-700/50 last:border-0"
                    >
                      <span className="text-gray-300 text-sm flex-1">
                        {subItem.name}
                      </span>
                      <span className="text-emerald-400 font-semibold text-sm whitespace-nowrap">
                        {formatCurrency(subItem.cost)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const DetailedPage = () => (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
      <div className="bg-linear-to-r from-gray-800 to-gray-800/50 p-5">
        <h3 className="text-xl font-semibold text-center">
          Complete Budget Breakdown
        </h3>
      </div>

      <div className="p-6">
        {budgetItems.map((category, catIndex) => {
          const categoryCost = calculateCategoryTotal(category.items);
          const Icon = iconMap[category.icon];
          return (
            <div key={catIndex} className="mb-8 last:mb-0">
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-400">
                    {category.category}
                  </h4>
                </div>
                <p className="text-xl font-bold text-emerald-400">
                  {formatCurrency(categoryCost)}
                </p>
              </div>

              <div className="space-y-2 md:ml-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-2 hover:bg-gray-700/20 px-3 rounded"
                  >
                    <span className="text-gray-300 text-sm">{item.name}</span>
                    <span className="text-gray-400 font-medium text-sm">
                      {formatCurrency(item.cost)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-8 pt-6 border-t-2 border-emerald-500">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">TOTAL PROJECT COST</span>
            <span className="text-3xl font-bold text-emerald-400">
              {formatCurrency(totalCost)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-2 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-emerald-400">
                  BISMAK
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  BUDGET PROPOSAL
                </span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">© 2025</div>
          </div>

          <h1 className="text-5xl font-bold mb-2 bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Proposed Budget
          </h1>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 md:p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Project Cost</p>
              <p className="text-4xl font-bold text-emerald-400">
                {formatCurrency(totalCost)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1">Timeline</p>
              <p className="text-2xl font-semibold">4-6 months</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setCurrentPage("summary")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              currentPage === "summary"
                ? "bg-emerald-500 text-white"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
            }`}
          >
            Summary View
          </button>
          <button
            onClick={() => setCurrentPage("detailed")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              currentPage === "detailed"
                ? "bg-emerald-500 text-white"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
            }`}
          >
            Detailed Breakdown
          </button>
        </div>

        {currentPage === "summary" ? <SummaryPage /> : <DetailedPage />}

        <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-center mt-8">
          <p className="text-white/80 text-sm mb-2">TOTAL PROJECT INVESTMENT</p>
          <p className="text-4xl font-bold text-white mb-4">
            {formatCurrency(totalCost)}
          </p>
          <p className="text-white/90 text-sm mb-6">
            Includes all development, infrastructure, AI integration, security,
            and 3 months support
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a
              href="mailto:idowuabdulazeez39@gmail.com"
              className="flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:+2348084607099"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://calendly.com/idowuabdulazeez39"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5" />
              Schedule Meeting
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="text-gray-300 mb-2">
            <p className="font-semibold text-lg mb-1">
              Let's Build Something Amazing Together
            </p>
            <p className="text-sm text-gray-400">
              Professional Web solutions tailored to your business needs
            </p>
          </div>
          <div className="text-gray-500 text-sm space-y-1">
            <p>Email: idowuabdulazeez39@gmail.com | Phone: +234 80 8460 7099</p>
            <p>www.zarmani34.github.io/portfolio/</p>
          </div>
        </div>
      </div>
    </div>
  );
}
