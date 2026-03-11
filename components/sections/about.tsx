"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Strategy First",
    description:
      "We never just build what you ask. We understand your goal, then recommend the optimal GHL architecture to achieve it.",
  },
  {
    icon: Users,
    title: "Verified Experts Only",
    description:
      "Every admin on our bulletin is vetted. They've proven their skills before they ever touch a client project.",
  },
  {
    icon: Lightbulb,
    title: "Education Embedded",
    description:
      "We don't create dependency. Every build comes with documentation so your team can understand and maintain it.",
  },
  {
    icon: Award,
    title: "Premium, Not Expensive",
    description:
      "Premium quality doesn't require premium overhead. Our model strips the middleman cost and passes it to you.",
  },
];

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Built for the
                <span className="gradient-text"> next generation</span> of
                GHL operators.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                HowToUseHighLevel started as an affiliate resource for people
                learning GoHighLevel. We saw the same problem everywhere: people
                either couldn&apos;t afford agencies, or hired the wrong people and
                got burned.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                So we rebuilt. We created a platform where AI handles strategy
                and scoping, and our vetted network handles execution — at a
                price point that makes premium GHL builds accessible to every
                business, not just enterprise.
              </p>
              <p className="text-slate-300 font-medium leading-relaxed">
                The result: faster builds, better quality, transparent pricing,
                and zero of the agency overhead you usually pay for.
              </p>
            </motion.div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                className="glass rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-colors">
                  <value.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{value.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
