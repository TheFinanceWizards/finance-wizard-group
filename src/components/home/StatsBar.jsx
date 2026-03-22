import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000
    ? (count / 1000).toFixed(count >= 1000 && count < 10000 ? 1 : 0) + "k"
    : count.toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{target >= 1000 && target < 2000 ? count.toLocaleString() : formatted}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
      { value: 6, suffix: "+", label: "Active Agents" },
      { value: 300, suffix: "%", label: "Growth Rate" },
      { value: 68, prefix: "$", suffix: "k", label: "Monthly Sales" },
      { value: 233, label: "Families Protected" },
    ];

  return (
    <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            Proven Track Record
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real results from our growing team of successful insurance professionals
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 text-center hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} prefix={stat.prefix || ""} />
                </div>
                <p className="text-sm md:text-base text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}