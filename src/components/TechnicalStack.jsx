import { ChevronRight, Code, Shield } from "lucide-react";
import { TECHSTACK } from "../utils/constants";

export default function TechnicalStack() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Modern, Scalable Technology
            </h2>
            <p className="text-gray-400">
              Industry-leading tools for enterprise-grade solutions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TECHSTACK.map((stack, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {stack.category}
              </h3>
              <div className="space-y-3">
                {stack.items.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/50"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-400">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1 text-blue-400">
                Enterprise-Grade Security
              </h4>
              <p className="text-sm text-gray-400">
                SSL encryption, regular security audits, GDPR compliance,
                role-based access control, and automated backups ensure your
                data is always protected.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
