"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GitFork,
  Mail,
  Users,
  BarChart3,
  Bot,
  Star,
  ShoppingCart,
  Calendar,
  Globe,
  Layers,
} from "lucide-react";

const SERVICES = [
  {
    icon: GitFork,
    title: "Funnel & Pipeline Builds",
    description:
      "Multi-stage funnels, opportunity pipelines, and conversion-optimized workflows built to your exact sales process.",
    tags: ["Sales Funnels", "Pipelines", "Lead Nurture"],
    popular: false,
  },
  {
    icon: Mail,
    title: "Email & SMS Sequences",
    description:
      "High-converting email and SMS automation sequences — follow-ups, nurture campaigns, and behavioral triggers.",
    tags: ["Email Automation", "SMS Flows", "Behavioral Triggers"],
    popular: true,
  },
  {
    icon: Users,
    title: "Membership & Courses",
    description:
      "Full-featured membership sites and online course delivery systems built natively in GHL.",
    tags: ["Membership Areas", "Course Modules", "Drip Content"],
    popular: false,
  },
  {
    icon: Bot,
    title: "AI Chatbot & Workflows",
    description:
      "Intelligent conversation flows and AI-powered workflows that qualify, nurture, and convert leads 24/7.",
    tags: ["AI Conversations", "Lead Qualification", "24/7 Automation"],
    popular: true,
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Automated review request systems, response workflows, and reputation monitoring for local businesses.",
    tags: ["Review Requests", "Google Business", "Response Automation"],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reporting",
    description:
      "Custom reporting dashboards, KPI tracking, and client-facing views that showcase real results.",
    tags: ["Custom Reports", "KPI Tracking", "Client Portals"],
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Payments",
    description:
      "Payment integrations, order forms, upsell flows, and complete e-commerce setups inside GHL.",
    tags: ["Stripe Integration", "Order Forms", "Upsells"],
    popular: false,
  },
  {
    icon: Calendar,
    title: "Booking & Scheduling",
    description:
      "Calendar integrations, automated appointment workflows, reminder sequences, and no-show follow-ups.",
    tags: ["Cal Integration", "Reminders", "Follow-ups"],
    popular: false,
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    description:
      "Conversion-optimized landing pages, websites, and blog setups within GHL's native builder.",
    tags: ["Landing Pages", "Websites", "Blogs"],
    popular: false,
  },
  {
    icon: Layers,
    title: "Full GHL Setup & Audit",
    description:
      "Complete GHL account setup, migration, or audit. We map your entire system and optimize for performance.",
    tags: ["Account Setup", "Migration", "Optimization"],
    popular: true,
  },
];

export const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,245,255,1) 0%, transparent 70%)",
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
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Every GHL Build.
            <span className="gradient-text"> Done Right.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our verified admin network covers the full spectrum of GoHighLevel
            builds — at a fraction of what agencies charge.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-4 z-10">
                  <span className="text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer group-hover:border-cyan-500/20 ${
                  service.popular ? "border-cyan-500/20" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-colors">
                  <service.icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not listed CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-6 glass rounded-2xl border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-white font-bold mb-1">
              Don&apos;t see what you need?
            </h3>
            <p className="text-sm text-slate-400">
              Just describe it — our AI will scope it regardless of complexity.
            </p>
          </div>
          <a
            href="#start-project"
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-purple-500/30 text-white font-semibold rounded-full text-sm hover:from-cyan-500/30 hover:to-purple-600/30 transition-all"
          >
            Describe Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
