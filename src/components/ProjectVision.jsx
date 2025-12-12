import {
  CheckCircle2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function ProjectVision() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Vision & Objectives</h2>
            <p className="text-gray-400">
              Building the future of technical excellence
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Primary Objectives
            </h3>
            <div className="space-y-3">
              {[
                "Position BISMAK as a technology-forward industry leader",
                "Reduce administrative workload by 60% through automation",
                "Provide clients with 24/7 access to project information",
                "Streamline internal workflows for staff and management",
                "Create scalable infrastructure for future growth",
                "Enhance customer experience with AI-powered support",
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              Strategic Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Business Growth
                </h4>
                <p className="text-sm text-gray-400">
                  Digital presence attracts larger contracts and corporate
                  clients who expect modern service delivery
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Client Satisfaction
                </h4>
                <p className="text-sm text-gray-400">
                  Transparency and instant access to information build trust and
                  long-term relationships
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Operational Efficiency
                </h4>
                <p className="text-sm text-gray-400">
                  Automated workflows free up staff to focus on high-value
                  technical work
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  Competitive Edge
                </h4>
                <p className="text-sm text-gray-400">
                  AI-powered tools and modern infrastructure differentiate
                  BISMAK in the market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
