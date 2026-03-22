import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Megaphone, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection({ onOpenApplication }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    { icon: Shield, label: "Brokerage Excellence", sub: "Competitive compensation & proven products" },
    { icon: Megaphone, label: "Brand Scaling Engine", sub: "Paid ads & organic content strategy" },
    { icon: BookOpen, label: "Mastermind Access", sub: "Recorded sessions for business optimization" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/30 to-pink-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Now Accepting Licensed Agents
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6"
          >
            Stop Letting Your
            <br />
            Potential Go{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Unfulfilled
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
          >
            You're capable of more. Stop questioning your partnership, struggling to scale,
            and watching opportunities pass by. It's time to access the exact strategies,
            content systems, and mastermind insights that elevate top performers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              to={createPageUrl("ApplicationForm")}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-black/30 hover:scale-[1.02]"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <button
              onClick={() => scrollTo("#platform")}
              className="inline-flex items-center gap-2 px-7 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group relative bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-5 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}