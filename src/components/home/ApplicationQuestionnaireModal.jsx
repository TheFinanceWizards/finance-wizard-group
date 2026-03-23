import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sendApplicationEmail } from "@/api/emailService";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

const questions = [
  {
    title: "Let's get started",
    subtitle: "Tell us your basic information",
    fields: ["fullName", "email", "phone"],
  },
  {
    title: "Your location",
    subtitle: "Where are you based?",
    fields: ["state"],
  },
  {
    title: "Your licensing status",
    subtitle: "What licenses do you hold?",
    fields: ["licensed"],
  },
  {
    title: "Your experience",
    subtitle: "How long have you been in insurance?",
    fields: ["experience"],
  },
  {
    title: "Your social media",
    subtitle: "What's your Instagram handle? (optional)",
    fields: ["instagram"],
  },
  {
    title: "Your motivation",
    subtitle: "Why are you looking for a new partnership?",
    fields: ["message"],
  },
];

export default function ApplicationQuestionnaireModal({ isOpen, onClose, onSubmit }) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    licensed: "",
    experience: "",
    instagram: "",
    message: "",
  });

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  const canProceed = () => {
    const fields = currentQuestion.fields;
    return fields.every((f) => {
      if (f === "instagram") return true; // Optional
      return form[f]?.trim() !== "";
    });
  };

  const handleNext = () => {
    if (!canProceed()) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (isLastStep) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    
    try {
      await sendApplicationEmail(form);

      toast.success("Application submitted! We'll be in touch shortly.");
      setSubmitting(false);
      onSubmit(form);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => window.location.reload(), 500);
      }, 1000);
    } catch (error) {
      setSubmitting(false);
      toast.error("Failed to submit application. Please try again.");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-lg w-full max-h-[92dvh] sm:max-h-[85dvh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">{currentQuestion.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{currentQuestion.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-gray-100">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Full Name */}
                {currentQuestion.fields.includes("fullName") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Full Name *</Label>
                    <Input
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="John Smith"
                      className="rounded-xl border-gray-200 h-11"
                      autoFocus
                    />
                  </div>
                )}

                {/* Email */}
                {currentQuestion.fields.includes("email") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Email *</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="rounded-xl border-gray-200 h-11"
                    />
                  </div>
                )}

                {/* Phone */}
                {currentQuestion.fields.includes("phone") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Phone *</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="rounded-xl border-gray-200 h-11"
                    />
                  </div>
                )}

                {/* State */}
                {currentQuestion.fields.includes("state") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">State *</Label>
                    <Select value={form.state} onValueChange={(v) => handleChange("state", v)}>
                      <SelectTrigger className="rounded-xl border-gray-200 h-11">
                        <SelectValue placeholder="Select your state..." />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Licensed */}
                {currentQuestion.fields.includes("licensed") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Licensed? *</Label>
                    <Select value={form.licensed} onValueChange={(v) => handleChange("licensed", v)}>
                      <SelectTrigger className="rounded-xl border-gray-200 h-11">
                        <SelectValue placeholder="Select your license..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="life_variable">Yes — Life & Variable</SelectItem>
                        <SelectItem value="life_only">Yes — Life Only</SelectItem>
                        <SelectItem value="health">Yes — Health Insurance</SelectItem>
                        <SelectItem value="property_casualty">Yes — Property & Casualty</SelectItem>
                        <SelectItem value="multiple">Yes — Multiple Lines</SelectItem>
                        <SelectItem value="other">Yes — Other Insurance</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="no">Not Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Experience */}
                {currentQuestion.fields.includes("experience") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Experience Level *</Label>
                    <Select value={form.experience} onValueChange={(v) => handleChange("experience", v)}>
                      <SelectTrigger className="rounded-xl border-gray-200 h-11">
                        <SelectValue placeholder="Select experience level..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 Years</SelectItem>
                        <SelectItem value="1-3">1-3 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="5+">5+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Instagram */}
                {currentQuestion.fields.includes("instagram") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Instagram Handle</Label>
                    <Input
                      value={form.instagram}
                      onChange={(e) => handleChange("instagram", e.target.value)}
                      placeholder="@yourhandle"
                      className="rounded-xl border-gray-200 h-11"
                    />
                    <p className="text-xs text-gray-400">Optional — helps us learn about your brand</p>
                  </div>
                )}

                {/* Message */}
                {currentQuestion.fields.includes("message") && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Why are you looking for a new partnership? *</Label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your goals and what you're looking for..."
                      className="rounded-xl border-gray-200 min-h-[100px] resize-none"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
            <div className="flex items-center justify-between gap-3">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={step === 0 || submitting}
                className="rounded-xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="flex items-center gap-2">
                {Array(questions.length)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        i <= step ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!canProceed() || submitting}
                className="bg-black hover:bg-gray-800 text-white rounded-xl px-6"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : isLastStep ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Submit
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
            <p className="text-[11px] text-gray-400 text-center mt-3">
              Step {step + 1} of {questions.length}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}