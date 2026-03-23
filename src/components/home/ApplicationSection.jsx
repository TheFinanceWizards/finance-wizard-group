import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ApplicationQuestionnaireModal from "./ApplicationQuestionnaireModal";

export default function ApplicationSection() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleModalSubmit = async (form) => {
    setShowModal(false);
  };

  const highlights = [
    "80-100% commission rates vested day one",
    "Negotiate higher rates as you build",
    "Social media brand building",
    "Exclusive mastermind access",
    "Premium lead generation",
    "24/7 support infrastructure",
  ];

  if (submitted) {
    return (
      <section id="apply" className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 border border-green-200 rounded-3xl p-12"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Application Received</h3>
            <p className="text-gray-600">
              Thank you for your interest. A member of our team will reach out within
              24-48 hours to schedule your consultation.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50" />

      <ApplicationQuestionnaireModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Invitation badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
              Limited Spots Available — Licensed Agents Only
            </span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Start Your Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Ready to Stop Settling and{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start Scaling?
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Join agents who are building six and seven-figure practices with the right
            partnership, tools, and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              What you get when you join:
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              This isn't about switching companies. It's about partnering with a
              team that's invested in your success.
            </p>
            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["JM", "AK", "RL"].map((init, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-600">{init}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">20+ agents</span>{" "}
                already growing their practices
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Submit Your Application
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Answer a few quick questions to get started
              </p>
              <Button
                onClick={() => setShowModal(true)}
                className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg shadow-black/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Application
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <p className="text-[11px] text-gray-400 text-center mt-4">
                Takes less than 2 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}