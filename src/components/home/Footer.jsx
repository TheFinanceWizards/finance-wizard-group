import React from "react";
import { Shield, Users, Clock } from "lucide-react";

export default function Footer() {
  const badges = [
    { icon: Users, label: "20+ Agents Growing Their Practices" },
    { icon: Shield, label: "Industry-Leading Commission Rates" },
    { icon: Clock, label: "24/7 Support & Resources" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Trust badges */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400 font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpg"
                alt="The Finance Wizards"
                className="w-7 h-7 rounded-full object-cover"
                width="28"
                height="28"
                loading="lazy"
              />
              <span className="font-bold text-sm text-gray-300">The Finance Wizards</span>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} InsureTransform. All rights reserved. For licensed insurance professionals only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}