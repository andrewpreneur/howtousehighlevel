"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Marketing Agency Owner",
    avatar: "MT",
    rating: 5,
    content:
      "I've worked with 3 different GHL agencies. This is the first time I've seen a team that actually starts with strategy. My funnel is performing 40% better than anything I've had built before.",
    project: "High-Ticket Coaching Funnel",
    savings: "Saved $2,200",
  },
  {
    name: "Sarah K.",
    role: "Real Estate Investor",
    avatar: "SK",
    rating: 5,
    content:
      "Had my full pipeline built and running in under 48 hours. The AI scoped it perfectly — nothing was missing, nothing was bloated. Just exactly what I asked for.",
    project: "Real Estate CRM Pipeline",
    savings: "Saved $1,800",
  },
  {
    name: "Derek V.",
    role: "SaaS Founder",
    avatar: "DV",
    rating: 5,
    content:
      "The strategy-first approach is what sets these guys apart. Every other service just builds what you ask for. These guys tell you what you actually need. Game changer.",
    project: "SaaS Onboarding Automation",
    savings: "Saved $3,400",
  },
  {
    name: "Lisa M.",
    role: "Health & Wellness Coach",
    avatar: "LM",
    rating: 5,
    content:
      "I was skeptical about the pricing — thought it was too good to be true. Turns out the quality is just genuinely exceptional. My membership site works flawlessly.",
    project: "Membership Site + Course Platform",
    savings: "Saved $2,700",
  },
  {
    name: "James R.",
    role: "Local Business Owner",
    avatar: "JR",
    rating: 5,
    content:
      "Went from zero online reviews to 47 Google reviews in 90 days. The reputation system they built runs completely on autopilot. Worth every penny.",
    project: "Reputation Management System",
    savings: "Saved $1,100",
  },
  {
    name: "Priya N.",
    role: "E-commerce Brand",
    avatar: "PN",
    rating: 5,
    content:
      "The GHL setup they built for our agency has us managing 22 clients from one dashboard. What would have taken us months to build was done in 4 days.",
    project: "Agency GHL Setup",
    savings: "Saved $7,200",
  },
];

export const TestimonialsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const half = TESTIMONIALS.slice(0, 3);
  const half2 = TESTIMONIALS.slice(3);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-5"
          style={{
            background: "radial-gradient(ellipse, rgba(123,47,255,1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            Client Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Proof It Works.
            <span className="gradient-text"> Every Time.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real clients. Real projects. Real savings.
          </p>
        </motion.div>

        {/* Scrolling row 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ x: isPaused ? "0%" : "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex gap-6 w-max"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </motion.div>

        {/* Scrolling row 2 (reverse) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ x: isPaused ? "0%" : "0%" }}
            initial={{ x: "-50%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex gap-6 w-max"
          >
            {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map(
              (t, i) => (
                <TestimonialCard key={`rev-${t.name}-${i}`} testimonial={t} />
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({
  testimonial: t,
}) => {
  return (
    <div className="w-[380px] shrink-0 glass rounded-2xl p-6 border border-white/[0.06] hover:border-cyan-500/20 transition-colors">
      {/* Quote */}
      <Quote className="w-5 h-5 text-purple-500/50 mb-4" />

      <p className="text-sm text-slate-300 leading-relaxed mb-5">{t.content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            {t.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="flex gap-0.5 justify-end mb-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs text-green-400 font-medium">{t.savings}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-white/5">
        <span className="text-xs text-slate-600">{t.project}</span>
      </div>
    </div>
  );
};
