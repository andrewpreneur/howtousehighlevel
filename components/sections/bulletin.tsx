"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Tag, ChevronRight, Activity } from "lucide-react";

const LIVE_PROJECTS = [
  {
    id: "PROJ-2841",
    title: "7-Touch Email Nurture Sequence for SaaS Leads",
    category: "Email Automation",
    budget: "$145",
    posted: "2 min ago",
    tags: ["Email", "SaaS", "Nurture"],
    status: "open",
    bids: 0,
  },
  {
    id: "PROJ-2840",
    title: "Full GHL Pipeline for Real Estate Investors",
    category: "Pipeline Build",
    budget: "$195",
    posted: "14 min ago",
    tags: ["Pipeline", "Real Estate", "CRM"],
    status: "in-progress",
    bids: 1,
  },
  {
    id: "PROJ-2839",
    title: "Stripe + GHL Membership with 3-tier Access Control",
    category: "Membership Site",
    budget: "$290",
    posted: "1 hr ago",
    tags: ["Membership", "Stripe", "Access"],
    status: "in-progress",
    bids: 2,
  },
  {
    id: "PROJ-2838",
    title: "AI Appointment Booking Bot with SMS Reminders",
    category: "AI Chatbot",
    budget: "$175",
    posted: "2 hr ago",
    tags: ["AI", "Booking", "SMS"],
    status: "review",
    bids: 3,
  },
  {
    id: "PROJ-2837",
    title: "Reputation Management System for Dental Practice",
    category: "Reputation",
    budget: "$120",
    posted: "3 hr ago",
    tags: ["Reviews", "Local", "Dental"],
    status: "completed",
    bids: 2,
  },
  {
    id: "PROJ-2836",
    title: "High-Ticket Coaching Funnel with VSL Page",
    category: "Funnel Build",
    budget: "$220",
    posted: "5 hr ago",
    tags: ["Coaching", "VSL", "High-Ticket"],
    status: "completed",
    bids: 4,
  },
];

const STATUS_CONFIG = {
  open: { label: "Open", color: "#00F5FF", bg: "rgba(0,245,255,0.1)" },
  "in-progress": { label: "In Progress", color: "#7B2FFF", bg: "rgba(123,47,255,0.1)" },
  review: { label: "In Review", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  completed: { label: "Completed", color: "#10B981", bg: "rgba(16,185,129,0.1)" },
};

const STATS = [
  { label: "Projects Completed", value: "2,841", suffix: "+" },
  { label: "Active Admins", value: "94", suffix: "" },
  { label: "Avg. Delivery", value: "31", suffix: "hrs" },
  { label: "Client Satisfaction", value: "98.7", suffix: "%" },
];

export const BulletinSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const filters = ["all", "open", "in-progress", "review", "completed"];

  const filtered =
    filter === "all"
      ? LIVE_PROJECTS
      : LIVE_PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="bulletin" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/3 w-[400px] h-[400px] opacity-5"
          style={{
            background: "radial-gradient(ellipse, rgba(0,245,255,1) 0%, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Activity className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs text-green-400 font-medium">Live Project Board</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            The Admin
            <span className="gradient-text"> Bulletin Board.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real projects. Real admins. Real results. Watch projects move from
            posted to delivered in real time.
          </p>
        </motion.div>

        {/* Live stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "glass border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {f === "all" ? "All Projects" : f}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const statusCfg = STATUS_CONFIG[project.status as keyof typeof STATUS_CONFIG];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-slate-600 font-mono">
                          {project.id}
                        </span>
                        <span className="text-slate-700">·</span>
                        <span className="text-xs text-slate-500">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className="shrink-0 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                      style={{
                        color: statusCfg.color,
                        background: statusCfg.bg,
                      }}
                    >
                      {statusCfg.label}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold text-sm">
                        {project.budget}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.posted}
                    </span>
                    {project.bids > 0 && (
                      <span>{project.bids} admin{project.bids !== 1 ? "s" : ""} claimed</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-full"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Post your project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="#start-project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-white text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300"
          >
            Post Your Project to the Bulletin
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
