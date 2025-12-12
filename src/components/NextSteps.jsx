import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  DollarSign,
  FileCheck,
  FileText,
  Mail,
  Phone,
  Rocket,
} from "lucide-react";

export default function NextSteps() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center shrink-0">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Next Steps</h2>
            <p className="text-gray-400">Let's get started together</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {[
            {
              step: "01",
              title: "Review This Proposal",
              description:
                "Take your time reviewing the deliverables, timeline, and technical approach",
              color: "pink",
            },
            {
              step: "02",
              title: "Schedule Discovery Call",
              description:
                "Let's discuss your specific needs, concerns, and expectations in detail",
              color: "purple",
            },
            {
              step: "03",
              title: "Finalize Requirements",
              description:
                "We'll refine the scope together and adjust the proposal if needed",
              color: "blue",
            },
            {
              step: "04",
              title: "Kickoff",
              description: "Once aligned, we kick off the project",
              color: "green",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 bg-${step.color}-500/20 rounded-lg flex items-center justify-center shrink-0`}
              >
                <span className={`text-lg font-bold text-${step.color}-400`}>
                  {step.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to Transform BISMAK?
          </h3>
          <p className="text-white/90 mb-6">
            Let's schedule a call to discuss how we can bring this vision to
            life. I'm excited to partner with BISMAK on this journey.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:idowuabdulazeez39@gmail.com"
              className="flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:+2348084607099"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              <Phone className="w-5 h-5" />
              +234 80 8460 7099
            </a>
            <a
              href="https://calendly.com/idowuabdulazeez39"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              <Calendar className="w-5 h-5" />
              Schedule Call
            </a>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-br from-emerald-500/10 to-blue-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">View Detailed Budget</h3>
            <p className="text-sm text-gray-400">
              Complete breakdown of all costs and deliverables
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentPage("budget")}
          className="w-full flex items-center justify-between p-4 bg-linear-to-r from-emerald-600 to-teal-600 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">
                Budget Proposal Document
              </p>
              <p className="text-sm text-white/80">
                Detailed cost analysis: ₦8,650,000 • Timeline: 4-6 months
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white hidden md:block">
              View Budget
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <div className="mt-4 flex items-start gap-2 text-sm text-gray-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            Budget includes interactive breakdown by category with full
            transparency
          </p>
        </div>
      </div>
    </div>
  );
}
