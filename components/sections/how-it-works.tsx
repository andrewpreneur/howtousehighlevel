"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, CheckSquare, Hammer, Rocket } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Describe Your Project",
    description:
      "Tell our AI what you need built in plain English. No technical jargon. No lengthy briefs. Just describe the problem you're solving.",
    detail: "AI analyzes your request and identifies the optimal GHL architecture",
    color: "#00F5FF",
    glow: "rgba(0, 245, 255, 0.15)",
  },
  {
    step: "02",
    icon: CheckSquare,
    title: "Review & Accept Scope",
    description:
      "Our AI returns a precise deliverables list with transparent pricing. Review, adjust, and accept — no hidden costs or surprise invoices.",
    detail: "Flat-rate pricing, 1/10th of traditional agency rates",
    color: "#7B2FFF",
    glow: "rgba(123, 47, 255, 0.15)",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Posted to the Bulletin",
    description:
      "Your project is posted to our Admin Bulletin Board where our network of verified GHL admins can claim and build it — fast.",
    detail: "Vetted admins only. Every project reviewed for quality.",
    color: "#00F5FF",
    glow: "rgba(0, 245, 255, 0.15)",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "Receive your finished build, tested and ready. Our team ensures quality before delivery. You focus on your clients — we handle the tech.",
    detail: "Revisions included. Documentation provided.",
    color: "#7B2FFF",
    glow: "rgba(123, 47, 255, 0.15)",
  },
];

export const HowItWorksSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
          style={{
            background:
              "radial-gradient(ellipse, rgba(123,47,255,1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Strategy First.
            <span className="gradient-text"> Build Second.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just build things — we build the{" "}
            <em>right</em> things. Every project starts with understanding
            your goal, not your task list.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="h-full w-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, #00F5FF, #7B2FFF, #00F5FF, #7B2FFF)",
                opacity: 0.2,
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
                className={`relative ${
                  i % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:mt-16"
                }`}
              >
                <div
                  className="glass rounded-2xl p-8 hover:border-white/15 transition-all duration-300 group"
                  style={{
                    borderColor: `${step.color}20`,
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-start gap-5 mb-5">
                    <div className="relative shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: step.color }}
                        />
                      </div>
                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                        style={{ background: step.glow }}
                      />
                    </div>
                    <div>
                      <span
                        className="text-xs font-mono font-bold tracking-wider mb-1 block"
                        style={{ color: step.color }}
                      >
                        STEP {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div
                    className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg"
                    style={{
                      color: step.color,
                      background: `${step.color}10`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#start-project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-white text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300"
          >
            Start Your Free Project Scope
          </a>
          <p className="text-slate-600 text-xs mt-3">
            No credit card required · Instant AI scoping · Post in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
