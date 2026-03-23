import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Wifi, Palette, Settings, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function PainPoints() {
  const problems = [
    { icon: AlertCircle, title: "Lead Generation", desc: "No systematic way to attract and qualify prospects consistently." },
    { icon: Wifi, title: "Technology & Tools", desc: "Missing the right platforms for quoting, contracting, and management." },
    { icon: Palette, title: "Brand & Content", desc: "Lack of a personal brand or magnetic content to differentiate." },
    { icon: Settings, title: "Business Systems", desc: "Absence of underwriting support and back-office efficiency." },
  ];

  const currentReality = [
    "Questioning your partnership",
    "Struggling with lead generation",
    "No clear brand strategy",
    "Missing high-level business knowledge",
    "Feeling stuck below your potential",
  ];

  const whatChanges = [
    "Strategic brand development",
    "Client-attracting content systems",
    "Access to mastermind strategies",
    "Comprehensive support beyond products",
    "Clear path to scale your business",
  ];

  return (
    <section id="why-us" className="relative py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            The Reality
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            Why Most Agents{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Stay Stuck
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The truth is, most insurance partnerships only offer products and leads.
            They don't equip you with a personal brand, magnetic content, or high-level
            business strategies to transform your operation. The real bottleneck?
            Inconsistent lead generation.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-20">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-300">
                <p.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transformation comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Current Reality */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <h3 className="text-lg font-bold text-gray-900">Your Current Reality</h3>
            </div>
            <ul className="space-y-3">
              {currentReality.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What Changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-white" />
            <h3 className="text-lg font-bold">What Changes Here</h3>
            </div>
            <ul className="space-y-3">
              {whatChanges.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-100">
                  <Check className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to={createPageUrl("ApplicationForm")}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
}