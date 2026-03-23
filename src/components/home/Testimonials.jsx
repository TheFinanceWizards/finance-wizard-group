import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Joining this partnership was the best move I have made. I came from another agency called Globe Life. Being vested from day one gave me the confidence to actually scale, and the commission rates are top-tier compared to the industry standards. I was able to make just shy of $12,000 deposited to the bank my first month. Its honestly not even over yet I still have 6 days of the month left.",
      name: "Collin Thomas",
      role: "Life & Variable Insurance",
      image: "/images/collin.jpg",
    },
    {
      quote:
        "I started in the industry at one company offering me 115% commission, but when it came down to the systems and leads they left me stranded. I produced $0 my first month with them and left a couple months later. This was my 2nd Go at the opportunity and the Finance wizards ensured i not only started at a respectable partnership level comission but they supplied me with the systems to make a little over 5 grand my first month in the bank with very minimal lead spend, not more than $500.",
      name: "Josh Dubin",
      role: "Life & Variable Insurance",
      image: "/images/josh.jpg",
    },
    {
      quote:
        "After years of testing different agencies, joining The Finance Wizard is easily the best move I've made. Most IMOs offer very little, but this partnership is a game-changer for sales leaders.\n\nBy handling the media and systems for you, they let you focus on what you do best. It's a no-brainer if you want to scale long-term with direct-to-carrier access and full ownership of your residuals and bonuses. The growth potential here is insane.",
      name: "Matthew Anderson",
      role: "Life & Variable Insurance",
      image: "/images/matthew.jpg",
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 lg:py-28 bg-gradient-to-br from-purple-900 to-purple-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            Agent Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            What Our Agents Say
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col"
              >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gray-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array(5)
                  .fill(0)
                  .map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-purple-600 text-purple-600" />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-1 text-sm">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                {t.image ? (
                   <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" width="40" height="40" loading="lazy" />
                 ) : (
                   <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                     <span className="text-xs font-bold text-white">{t.initials}</span>
                   </div>
                 )}
                 <div>
                   <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                   <p className="text-xs text-gray-500">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to={createPageUrl("ApplicationForm")}
            className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-black/20"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}