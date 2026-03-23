import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPageUrl } from "@/utils";
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
    title: "Join the Finance Wizards - the Winning Team",
    subtitle: "Start your journey to financial success",
    section: "Personal Information",
    fields: ["fullName", "email", "phone"],
  },
  {
    title: "Where are you located?",
    subtitle: "We serve agents nationwide",
    section: "Personal Information",
    fields: ["state"],
  },
  {
    title: "Professional Background",
    subtitle: "Tell us about your licensing",
    section: "Professional Background",
    fields: ["licensed"],
  },
  {
    title: "Experience Level",
    subtitle: "How long have you been in insurance?",
    section: "Professional Background",
    fields: ["experience"],
  },
  {
    title: "Additional Information",
    subtitle: "Help us know you better",
    section: "Additional Information",
    fields: ["instagram"],
  },
];

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    licensed: "",
    experience: "",
    instagram: "",
  });

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  const canProceed = () => {
    const fields = currentQuestion.fields;
    return fields.every((f) => {
      if (f === "instagram") return true;
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
    
    setLoading(true);
    
    try {
      await sendApplicationEmail(form);

      toast.success("Application submitted! We'll be in touch shortly.");
      setTimeout(() => {
        window.location.href = createPageUrl("Home");
      }, 1500);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit. Please try again.");
      setLoading(false);
    }
  };

  const appFormJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Apply to Partner With The Finance Wizard Group",
      "description": "Submit your application to join The Finance Wizard Group. Licensed insurance agents can apply for partnership, premium commissions, and brand-scaling support.",
      "url": "https://thefinancewizardgroup.com/ApplicationForm",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "The Finance Wizard Group",
        "url": "https://thefinancewizardgroup.com"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thefinancewizardgroup.com" },
          { "@type": "ListItem", "position": 2, "name": "Apply", "item": "https://thefinancewizardgroup.com/ApplicationForm" }
        ]
      }
    }
  ];

  return (
    <>
      <SEO
        title="Apply to Partner With Us"
        description="Submit your application to join The Finance Wizard Group. Licensed insurance agents — apply now for 80–100% commissions, direct-to-carrier access, and a proven brand-scaling system."
        canonical="https://thefinancewizardgroup.com/ApplicationForm"
        jsonLd={appFormJsonLd}
      />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentQuestion.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{currentQuestion.subtitle}</p>
          </div>
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
        <div className="flex-1 overflow-y-auto p-6">
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
                  placeholder="First Name Last Name"
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
                  placeholder="name@gmail.com"
                  className="rounded-xl border-gray-200 h-11"
                />
              </div>
            )}

            {/* Phone */}
            {currentQuestion.fields.includes("phone") && (
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(800)-123-4567"
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
                    <SelectValue placeholder="Select a state..." />
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
                <Label className="text-sm font-semibold text-gray-700">Are you licensed? *</Label>
                <Select value={form.licensed} onValueChange={(v) => handleChange("licensed", v)}>
                  <SelectTrigger className="rounded-xl border-gray-200 h-11">
                    <SelectValue placeholder="Select..." />
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
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex items-center justify-between gap-3 mb-3">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 0}
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
              disabled={!canProceed() || loading}
              className="bg-black hover:bg-gray-800 text-white rounded-xl px-6"
            >
              {isLastStep ? (
                <>
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Check className="w-4 h-4 mr-2" />}
                  {loading ? "Submitting..." : "Submit"}
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
          <p className="text-[11px] text-gray-400 text-center">
            Step {step + 1} of {questions.length}
          </p>
        </div>
      </motion.div>
    </div>
    </>
  );
}