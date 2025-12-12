import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { DELIVERABLES } from "../utils/constants";
import { useState } from "react";

export default function DeliverablesSection() {
  const [expandedDeliverable, setExpandedDeliverable] = useState(null);
  return (
    <div className="space-y-4">
      {DELIVERABLES.map((deliverable, index) => {
        const Icon = deliverable.icon;
        const isExpanded = expandedDeliverable === index;
        return (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
          >
            <div
              className="bg-linear-to-r from-gray-800 to-gray-800/50 p-5 flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedDeliverable(isExpanded ? null : index)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{deliverable.title}</h3>
                  <p className="text-sm text-gray-400">
                    {deliverable.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* <div className="text-right hidden md:block">
                  <p className="text-xs text-gray-400">Delivery Time</p>
                  <p className="text-sm font-semibold text-emerald-400">
                    {deliverable.deliveryTime}
                  </p>
                </div> */}
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="p-5 bg-gray-800/20">
                <h4 className="font-semibold mb-3 text-emerald-400">
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {deliverable.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
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
}
