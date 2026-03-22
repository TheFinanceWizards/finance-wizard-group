import React from "react";
import { motion } from "framer-motion";
import { Shield, Megaphone, BookOpen, ArrowUpRight } from "lucide-react";

export default function ValuePillars() {
  const pillars = [
    {
      icon: Shield,
      number: "01",
      title: "Brokerage Excellence",
      headline: "Industry-Leading Partnership & Compensation",
      description:
        "80-100% commission rates vested from day one with the potential to negotiate higher rates as you build your book of business. Access our premium carrier network, in-house underwriting team, and complete business infrastructure that treats you like a true partner — not a number.",
      features: [
        "80-100% commission rates, vested day one",
        "In-house dialers to drive your leads",
        "In-house underwriting support",
        "Premium carrier network access",
        "Negotiate higher rates as you build",
      ],
      gradient: "from-purple-600 to-purple-500",
      bgGlow: "bg-purple-600/5",
    },
    {
      icon: Megaphone,
      number: "02",
      title: "Brand Scaling Engine",
      headline: "Social Media & Paid Advertising Mastery",
      description:
        "We don't just hand you leads — we teach you to build a magnetic personal brand. Our integrated social media strategy combines paid advertising with organic content systems specifically designed for insurance professionals who want to stand out.",
      features: [
        "Targeted paid ad campaigns",
        "Organic content strategy & templates",
        "Personal brand development",
        "Websites and funnels all done for you",
        "In house camera team with 40k+ equipment",
      ],
      gradient: "from-purple-600 to-purple-500",
      bgGlow: "bg-purple-600/5",
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Mastermind Access",
      headline: "Exclusive Business & Life Optimization Content",
      description:
        "We've filmed real events, captured authentic mastermind conversations, and built a library of high-level business strategies. Access recorded sessions covering sales psychology, wealth building, mindset mastery, and operational excellence.",
      features: [
        "Recorded mastermind sessions",
        "Business optimization strategies",
        "Sales psychology & mindset training",
        "Be apart of a community of industry leaders growing together beyond just insurance",
        "Raise your vibration and change your life from the inside out",
      ],
      gradient: "from-purple-600 to-purple-500",
      bgGlow: "bg-purple-600/5",
    },
  ];

  return (
    <section id="value-pillars" className="relative py-20 lg:py-28 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Three-Pillar System
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            This Isn't Just Another
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Insurance Partnership
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We've built systems specifically for agents ready to scale their brand
            while growing their insurance business. Three pillars. One transformation.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden`}
            >
              {/* Background glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 ${pillar.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/4`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`text-5xl font-black bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent opacity-20`}>
                      {pillar.number}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {pillar.title}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">
                    {pillar.headline}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${pillar.gradient} flex items-center justify-center`}>
                      <pillar.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Key Benefits</span>
                  </div>
                  <ul className="space-y-3">
                    {pillar.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md bg-gradient-to-r ${pillar.gradient} flex items-center justify-center flex-shrink-0`}>
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}