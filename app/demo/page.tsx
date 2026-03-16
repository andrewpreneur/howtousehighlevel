"use client"
import { useState } from "react"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const LEARN_ITEMS = [
  {
    icon: "⚡",
    title: "Vibe Code a Full Website in Under 20 Minutes",
    body: "Type what you want. Watch it build itself. We'll show you the exact prompt-to-publish workflow that turns any idea into a live, professional website — no developers, no drag-and-drop builders, no prior experience needed.",
  },
  {
    icon: "🤖",
    title: "Build AI-Powered Apps Without Writing Code",
    body: "Discover how to go from a napkin idea to a working web application in a single session. We'll walk through live vibe-coding demos where we build real tools from scratch using nothing but plain English.",
  },
  {
    icon: "💰",
    title: "Sell AI Agents & Automations for $2K–$10K/Month",
    body: "The exact offer structure, pricing, and delivery system to package your AI skills into a service clients pay for monthly. No agency experience required — just the right tools and a repeatable process.",
  },
  {
    icon: "🚀",
    title: "Launch a SaaS Product Over the Weekend",
    body: "We'll show you how to validate, design, and deploy a micro-SaaS using AI tools — from idea to checkout page in 48 hours. This is the fastest path from zero to recurring revenue in 2025.",
  },
  {
    icon: "🔧",
    title: "The Exact AI Stack Top Builders Use Right Now",
    body: "Stop drowning in options. We break down the 3–5 AI tools that actually matter, how they connect, and which ones are worth paying for — so you can build faster and stop wasting time on things that don't move the needle.",
  },
  {
    icon: "🔄",
    title: "Automate Your Entire Business With AI Agents",
    body: "From lead follow-up to client onboarding to content creation — learn how to deploy AI agents that run your business operations 24/7 so you can focus on growth instead of admin work.",
  },
]

const STRUGGLES = [
  "Build AI Tools?",
  "Sell AI Agents?",
  "Launch AI Software?",
]

export default function DemoOne() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <AnimatedGradientBackground
        gradientColors={[
          "#04040A",
          "#0A0820",
          "#150C35",
          "#1C1050",
          "#0E0728",
          "#080515",
          "#04040A",
        ]}
        gradientStops={[28, 42, 55, 65, 78, 90, 100]}
        Breathing={true}
        startingGap={115}
        breathingRange={10}
        animationSpeed={0.012}
      />

      {/* Registration Popup */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) setPopupOpen(false) }}
        >
          <div className="relative w-full max-w-md mx-4 rounded-2xl border border-white/15 bg-black/85 p-8 shadow-2xl">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors text-lg leading-none"
            >
              ✕
            </button>
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-2 font-semibold">Free Workshop</p>
            <h3 className="mb-1 text-xl font-bold text-white leading-snug">Reserve Your Spot</h3>
            <p className="mb-6 text-sm text-white/50">Seats are limited — register now to save your place.</p>
            {/* Drop your registration widget here */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/30 text-sm italic">
              [ Paste your registration widget here ]
            </div>
          </div>
        </div>
      )}

      {/* Page */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-4 py-20">

        {/* ── HERO ── */}
        <div className="w-full max-w-3xl mx-auto text-center mb-10">
          <p className="inline-block mb-4 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
            Free Live Workshop
          </p>
          <h1 className="text-white font-extrabold tracking-tighter leading-[1.05] text-[clamp(2rem,6vw,4rem)] mb-5">
            Learn How to Use the Most Simple, Easy, and Profitable AI Tools to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Start and Scale Any Business</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-8">
            Free workshop — register now to save your spot before we sell out.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <LiquidButton
              className="text-white border border-white/30 rounded-full w-full sm:w-auto"
              size="xl"
              onClick={() => setPopupOpen(true)}
            >
              🎟️ &nbsp;Register for Free — Save My Spot
            </LiquidButton>
          </div>

          {/* Status / Live indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <p className="text-xs text-green-400">Registration is open — limited seats available</p>
          </div>
        </div>

        {/* ── SOCIAL PROOF ── */}
        <div className="w-full max-w-3xl mx-auto mb-16">
          <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm px-8 py-6 text-center">
            <p className="text-4xl font-extrabold text-white mb-1">700+</p>
            <p className="text-white/50 text-sm">Business owners already using these tools to grow faster</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Coaches", "Consultants", "Agency Owners", "Freelancers", "Founders", "Side Hustlers"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHAT YOU'LL LEARN ── */}
        <div className="w-full max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Inside the Free Workshop</p>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              Here&apos;s Exactly What You&apos;ll Learn
            </h2>
            <p className="text-white/40 text-sm mt-2">Step-by-step, no fluff — just what works right now in 2025.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEARN_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-purple-500/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <LiquidButton
              className="text-white border border-white/30 rounded-full"
              size="xl"
              onClick={() => setPopupOpen(true)}
            >
              Yes, Reserve My Free Seat →
            </LiquidButton>
          </div>
        </div>

        {/* ── ARE YOU STRUGGLING ── */}
        <div className="w-full max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-10 text-center">
            <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-4">Sound Familiar?</p>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
              Are You Struggling to...
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              {STRUGGLES.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-red-500/25 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-300"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              You&apos;re not behind — you just haven&apos;t been shown the right path yet. This free workshop fixes that.
              We cut through the noise and show you the exact tools, workflows, and business models that are generating real revenue for real people — right now.
            </p>
            <LiquidButton
              className="text-white border border-white/30 rounded-full"
              size="xl"
              onClick={() => setPopupOpen(true)}
            >
              🎟️ &nbsp;I&apos;m Ready — Register for Free
            </LiquidButton>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="text-white/20 text-xs text-center max-w-sm">
          100% free. No credit card. Just show up and learn.
        </p>
      </div>
    </div>
  )
}
