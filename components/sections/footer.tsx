"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    "Funnel Builds",
    "Email Automation",
    "Membership Sites",
    "AI Chatbots",
    "Reputation Management",
    "Full GHL Setup",
  ],
  Resources: [
    "GHL Tutorials",
    "Strategy Blog",
    "Template Library",
    "Admin Directory",
    "Case Studies",
    "Documentation",
  ],
  Company: [
    "About Us",
    "How It Works",
    "Become an Admin",
    "Partner Program",
    "Contact",
    "Privacy Policy",
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(123,47,255,1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  How To Use
                </div>
                <div className="text-sm font-bold text-white">HighLevel</div>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              The only GHL platform where AI scopes your project, transparent
              pricing is guaranteed, and verified admins deliver at 1/10th the
              cost.
            </p>

            <div className="flex items-center gap-3">
              {[Twitter, Youtube, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2025 HowToUseHighLevel.com · All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-600">All systems operational</span>
          </div>
          <p className="text-xs text-slate-600">
            Not affiliated with GoHighLevel Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
