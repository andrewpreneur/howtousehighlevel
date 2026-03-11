"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { AIChatInput } from "@/components/ui/ai-chat-input";
import { ArrowRight, Shield, Clock, TrendingDown } from "lucide-react";

const ROTATING_WORDS = [
  "HighLevel Funnels",
  "Automation Workflows",
  "Membership Sites",
  "CRM Systems",
  "AI Chatbots",
  "Email Sequences",
  "Reputation Systems",
  "Booking Flows",
];

const STATS = [
  { icon: TrendingDown, label: "1/10th the Cost", sub: "vs. traditional agencies" },
  { icon: Clock, label: "48hr Turnaround", sub: "average delivery time" },
  { icon: Shield, label: "Verified Admins", sub: "pre-vetted GHL experts" },
];

export const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Full background sparkles */}
      <SparklesCore
        particleColor="#7B2FFF"
        particleDensity={60}
        minSize={0.4}
        maxSize={1.4}
        speed={0.2}
        className="opacity-40"
      />
      <SparklesCore
        particleColor="#00F5FF"
        particleDensity={40}
        minSize={0.3}
        maxSize={1.0}
        speed={0.15}
        className="opacity-30"
      />

      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(123,47,255,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,245,255,0.8) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,245,255,0.8) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-cyan-500/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-cyan-400 font-medium">
            Strategy-first GHL Agency Platform
          </span>
        </motion.div>

        {/* Main headline with sparkles */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          >
            <span className="block text-white mb-2">We Build</span>
            <span className="block relative">
              {/* Sparkles behind the gradient word */}
              <span className="absolute inset-0 -mx-8">
                <SparklesCore
                  particleColor="#00F5FF"
                  particleDensity={50}
                  minSize={0.6}
                  maxSize={2.0}
                  speed={0.4}
                />
              </span>
              <span className="relative gradient-text text-glow-cyan block min-h-[1.1em]">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </span>
            </span>
            <span className="block text-white mt-2">That Actually Work.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-4 leading-relaxed"
        >
          Describe your project. Our AI scopes it. Verified GHL admins build it.
          <br className="hidden md:block" />
          <span className="text-white font-medium">
            {" "}
            Premium quality at 1/10th the price.
          </span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6 mb-16"
        >
          <a
            href="#start-project"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-white text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            See how it works
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* AI Chat Input */}
        <motion.div
          id="start-project"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-2xl mb-16"
        >
          <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
            Try the AI Project Scope Tool
          </p>
          <AIChatInput placeholder="Tell me what you need built in GHL — I'll scope it & price it instantly..." />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {STATS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full glass border border-cyan-500/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #060612, transparent)",
        }}
      />
    </section>
  );
};
