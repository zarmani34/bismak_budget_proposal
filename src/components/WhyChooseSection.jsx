import { Award, CheckCircle2, Star, Zap } from "lucide-react";
import { WHYCHOOSEME } from "../utils/constants";

export default function WhyChooseSection() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl md:p-8 p-4">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Why Choose Me</h2>
            <p className="text-gray-400">Your success is my priority</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {WHYCHOOSEME.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-400 mb-1">100%</p>
            <p className="text-xs text-gray-400">Client Satisfaction</p>
          </div>
          <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-400 mb-1">Fast</p>
            <p className="text-xs text-gray-400">24hr Response Time</p>
          </div>
          <div className="bg-linear-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4 text-center">
            <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-400 mb-1">Quality</p>
            <p className="text-xs text-gray-400">Zero-Compromise Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}
