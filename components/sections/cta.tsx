"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { AIChatInput } from "@/components/ui/ai-chat-input";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Sparkles background */}
      <SparklesCore
        particleColor="#7B2FFF"
        particleDensity={80}
        minSize={0.5}
        maxSize={1.5}
        speed={0.3}
        className="opacity-40"
      />
      <SparklesCore
        particleColor="#00F5FF"
        particleDensity={50}
        minSize={0.3}
        maxSize={1.0}
        speed={0.2}
        className="opacity-30"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(123,47,255,0.15), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6 block">
            Get Started
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
            Ready to Build
            <span className="gradient-text"> Something Real?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Describe your GHL project below. Our AI will scope it, price it, and
            connect you with a verified admin — in minutes.
          </p>

          <div className="mb-8">
            <AIChatInput placeholder="Tell me what you need built in GoHighLevel..." />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              No credit card to scope
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Instant AI pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              48hr avg delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
