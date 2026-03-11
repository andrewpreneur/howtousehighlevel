"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";

const PLANS = [
  {
    name: "Starter Build",
    icon: Zap,
    price: "$97",
    originalPrice: "$970",
    description: "Perfect for single builds, automations, or small workflow setups.",
    features: [
      "1 project deliverable",
      "Single workflow or sequence",
      "48-hour delivery",
      "1 revision round",
      "Documentation included",
      "Email support",
    ],
    cta: "Start a Build",
    color: "#00F5FF",
    popular: false,
  },
  {
    name: "Growth Package",
    icon: Shield,
    price: "$297",
    originalPrice: "$2,970",
    description: "Full system builds — funnels, sequences, pipelines, and integrations.",
    features: [
      "Up to 5 project deliverables",
      "Full funnel or pipeline build",
      "Email + SMS automation",
      "24-hour priority delivery",
      "3 revision rounds",
      "Full documentation",
      "Priority Slack support",
      "Strategy call included",
    ],
    cta: "Most Popular",
    color: "#7B2FFF",
    popular: true,
  },
  {
    name: "Agency Partner",
    icon: Crown,
    price: "$797",
    originalPrice: "$7,970",
    description: "White-label builds and monthly retainer for agencies scaling fast.",
    features: [
      "Unlimited projects per month",
      "White-label deliverables",
      "Dedicated admin team",
      "Same-day delivery on most builds",
      "Unlimited revisions",
      "White-label documentation",
      "Dedicated Slack channel",
      "Monthly strategy sessions",
      "Sub-account management",
    ],
    cta: "Partner With Us",
    color: "#00F5FF",
    popular: false,
  },
];

const COMPARISON = [
  { feature: "Pipeline & Funnel Build", us: true, agency: true, diy: false },
  { feature: "AI Scoping & Pricing", us: true, agency: false, diy: false },
  { feature: "Verified GHL Experts", us: true, agency: "sometimes", diy: false },
  { feature: "Flat-Rate Pricing", us: true, agency: false, diy: true },
  { feature: "48hr Turnaround", us: true, agency: false, diy: false },
  { feature: "Strategy-First Approach", us: true, agency: "sometimes", diy: false },
  { feature: "No Retainer Required", us: true, agency: false, diy: true },
  { feature: "Documentation Included", us: true, agency: false, diy: false },
];

export const PricingSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showCompare, setShowCompare] = useState(false);

  return (
    <section id="pricing" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[600px] opacity-5"
          style={{
            background: "radial-gradient(ellipse, rgba(123,47,255,1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            1/10th the Cost.
            <span className="gradient-text"> 10x the Speed.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Traditional GHL agencies charge $1,000–$10,000+ for the same builds.
            Our model cuts out the overhead and passes the savings to you.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative rounded-2xl overflow-hidden ${plan.popular ? "md:-mt-4" : ""}`}
            >
              {plan.popular && (
                <>
                  {/* Gradient border for popular */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #00F5FF, #7B2FFF, #00F5FF)",
                      padding: "1px",
                    }}
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                </>
              )}

              <div
                className={`relative h-full glass-strong rounded-2xl p-8 flex flex-col ${
                  plan.popular ? "border border-purple-500/30" : ""
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`,
                      border: `1px solid ${plan.color}30`,
                    }}
                  >
                    <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-5xl font-black"
                      style={{ color: plan.color }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm">/ project</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    vs.{" "}
                    <span className="line-through">{plan.originalPrice}</span> at
                    traditional agencies
                  </p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: plan.color }}
                      />
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#start-project"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                      : "glass border border-white/15 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-6"
        >
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-full transition-all"
          >
            {showCompare ? "Hide" : "See"} comparison vs. agencies & DIY
          </button>
        </motion.div>

        {/* Comparison table */}
        <AnimatePresence>
          {showCompare && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-sm text-slate-400 font-medium">
                        Feature
                      </th>
                      <th className="p-4 text-sm font-bold text-cyan-400 text-center">
                        HowToUseHL
                      </th>
                      <th className="p-4 text-sm font-medium text-slate-400 text-center">
                        GHL Agency
                      </th>
                      <th className="p-4 text-sm font-medium text-slate-400 text-center">
                        DIY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-white/5 ${
                          i % 2 === 0 ? "bg-white/[0.01]" : ""
                        }`}
                      >
                        <td className="p-4 text-sm text-slate-300">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.us === true ? (
                            <span className="text-cyan-400">✓</span>
                          ) : (
                            <span className="text-slate-600">✗</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.agency === true ? (
                            <span className="text-green-400">✓</span>
                          ) : row.agency === "sometimes" ? (
                            <span className="text-yellow-500 text-xs">Sometimes</span>
                          ) : (
                            <span className="text-slate-600">✗</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.diy === true ? (
                            <span className="text-slate-300">✓</span>
                          ) : (
                            <span className="text-slate-600">✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
