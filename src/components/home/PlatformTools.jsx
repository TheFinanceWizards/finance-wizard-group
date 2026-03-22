import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Monitor,
  Stethoscope,
  BarChart3,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

export default function PlatformTools() {
  const tools = [
    {
      icon: Globe,
      title: "Branded Consumer Platform",
      desc: "Market to clients and enable instant online life insurance purchases with your personal brand.",
    },
    {
      icon: Monitor,
      title: "Online Business Portal",
      desc: "Quote, contract, apply, check case status, and track commissions 24/7 from anywhere.",
    },
    {
      icon: Stethoscope,
      title: "In-House Underwriting Team",
      desc: "Expert underwriters on hand to assess health info and ensure clients get the best offers.",
    },
    {
      icon: BarChart3,
      title: "In-Force Business Tool",
      desc: "Real-time snapshot of your policies, conversion deadlines, term expirations, and performance metrics.",
    },
    {
      icon: PhoneCall,
      title: "Advanced CRM & Lead System",
      desc: "Fresh, TCPA-compliant leads delivered daily with integrated dialer technology.",
    },
    {
      icon: GraduationCap,
      title: "Learning Center & Mastermind",
      desc: "Webinars, CEUs, training, and recorded mastermind sessions for continuous growth.",
    },
  ];

  return (
    <section id="platform" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Enterprise-Grade Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Everything You Need to Run a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Insurance Business
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Enterprise-grade tools built for scale — from lead generation to policy management.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-black transition-colors duration-300">
                <tool.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}