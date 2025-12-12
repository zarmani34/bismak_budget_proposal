import { useState } from "react";
import {
  FileText,
  Code,
  Briefcase,
  Target,
  CheckCircle2,
  Rocket,
  Award,
  Clock,
  DollarSign,
} from "lucide-react";
import ExecutiveSummary from "./ExecutiveSummary";
import ProjectVision from "./ProjectVision";
import DeliverablesSection from "./DeliverblesSection";
import TechnicalStack from "./TechnicalStack";
import TimelineSection from "./TimelineSection";
import WhyChooseSection from "./WhyChooseSection";
import NextSteps from "./NextSteps";

export default function ProposalDocument() {
  const [activeSection, setActiveSection] = useState("executive");

  const sections = [
    { id: "executive", label: "Executive Summary", icon: Briefcase },
    { id: "vision", label: "Project Vision", icon: Target },
    { id: "deliverables", label: "Deliverables", icon: CheckCircle2 },
    { id: "technical", label: "Technical Stack", icon: Code },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "why-me", label: "Why Choose Me", icon: Award },
    { id: "next-steps", label: "Next Steps", icon: Rocket },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "executive":
        return <ExecutiveSummary />;
      case "vision":
        return <ProjectVision />;
      case "deliverables":
        return <DeliverablesSection />;
      case "technical":
        return <TechnicalStack />;
      case "timeline":
        return <TimelineSection />;
      case "why-me":
        return <WhyChooseSection />;
      case "next-steps":
        return <NextSteps />;
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div>

      {/* Navigation */}
      <div className="border-b border-gray-800 bg-gray-900/30 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">{renderContent()}</div>

      {/* Footer */}
      <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <p className="text-gray-300 font-semibold">
              Let's Build Something Extraordinary Together
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>📧 idowuabdulazeez39@gmail.com</span>
              <span>📱 +234 80 8460 7099</span>
              <a
                href="https://zarmani34.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300"
              >
                🌐 View Portfolio
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © 2025 Professional Web Development Services. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
