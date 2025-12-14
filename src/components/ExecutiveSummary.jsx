import { Briefcase, Clock, Layers, Shield } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl md:p-8 py-4 px-2">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Transforming BISMAK Excel & Technical Services
            </h2>
            <p className="text-gray-400">
              A comprehensive digital transformation proposal
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-4">
          <p className="text-lg leading-relaxed">
            This proposal outlines a complete digital ecosystem for BISMAK that
            will revolutionize how you engage with clients, manage operations,
            and scale your business.
          </p>

          <p className="leading-relaxed">
            <strong className="text-emerald-400">The Challenge:</strong> BISMAK
            Excel & Technical Services has built an excellent reputation through
            15+ years of outstanding service in the oil & gas sector. However,
            your current digital presence doesn't reflect your operational
            excellence, and manual processes are limiting growth potential.
          </p>

          <p className="leading-relaxed">
            <strong className="text-emerald-400">The Solution:</strong> A fully
            integrated digital platform comprising a modern landing page, client
            portal, admin dashboard, staff portal, AI-powered assistant, and
            specialized technical tools—all designed to match your brand and
            amplify your market leadership.
          </p>

          <p className="leading-relaxed">
            <strong className="text-emerald-400">The Outcome:</strong> Reduced
            administrative overhead by 60%, improved client satisfaction through
            24/7 access, increased operational efficiency with automated
            workflows, and enhanced market positioning as a technology-forward
            industry leader.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="font-semibold mb-1">Timeline</h3>
          <p className="text-3xl font-bold text-emerald-400">4-6 Months</p>
          <p className="text-sm text-gray-400 mt-1">To full deployment</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="font-semibold mb-1">Deliverables</h3>
          <p className="text-3xl font-bold text-blue-400">6 Platforms</p>
          <p className="text-sm text-gray-400 mt-1">Fully integrated</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="font-semibold mb-1">Support</h3>
          <p className="text-3xl font-bold text-purple-400">3 Months</p>
          <p className="text-sm text-gray-400 mt-1">Post-launch care</p>
        </div>
      </div>
    </div>
  );
}
