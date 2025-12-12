import { CheckCircle2, Clock } from "lucide-react";
import { TIMELINE } from "../utils/constants";

export default function TimelineSection() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Project Timeline</h2>
            <p className="text-gray-400">24-week journey to launch</p>
          </div>
        </div>

        <div className="space-y-4">
          {TIMELINE.map((phase, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-orange-400">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{phase.phase}</h3>
                    <span className="text-sm text-orange-400 font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.activities.map((activity, aIndex) => (
                      <div
                        key={aIndex}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1 text-green-400">
                Agile Development Approach
              </h4>
              <p className="text-sm text-gray-400">
                Regular sprint demos every 2 weeks keep you involved and ensure
                we're building exactly what you need. Changes can be
                incorporated throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
