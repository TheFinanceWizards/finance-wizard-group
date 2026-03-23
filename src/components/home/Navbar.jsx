import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Why Us", href: "#why-us" },
    { label: "Platform", href: "#platform" },
    { label: "Brand Growth", href: "#value-pillars" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpg"
                alt="The Finance Wizards"
                className="w-10 h-10 rounded-full object-cover"
                width="40"
                height="40"
                fetchPriority="high"
              />
              <span className={`font-bold text-sm sm:text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-gray-900"
              }`}>
                The Finance Wizards
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
                    scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to={createPageUrl("ApplicationForm")}
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/10"
              >
                Apply Now
              </Link>
              <button
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl lg:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to={createPageUrl("ApplicationForm")}
                className="block w-full mt-2 px-4 py-3 bg-black text-white font-semibold rounded-xl text-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}