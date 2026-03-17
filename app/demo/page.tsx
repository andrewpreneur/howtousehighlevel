"use client"
import { useState, useEffect } from "react"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background — vibrant multicolor radial gradient */}
      <AnimatedGradientBackground
        gradientColors={[
          "#0A0A0A",
          "#2979FF",
          "#FF80AB",
          "#FF6D00",
          "#FFD600",
          "#00E676",
          "#3D5AFE",
        ]}
        gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        Breathing={true}
        startingGap={isMobile ? 70 : 125}
        breathingRange={isMobile ? 4 : 8}
        animationSpeed={0.015}
      />

      {/* Registration Popup */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) setPopupOpen(false) }}
        >
          <div className="relative w-full max-w-md mx-3 sm:mx-4 rounded-2xl border border-white/15 bg-black/90 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-4 sm:px-6 py-14 sm:py-20">

        {/* ── HERO ── */}
        <div className="w-full max-w-3xl mx-auto text-center mb-10">
          <p className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/80">
            Free Live Workshop
          </p>
          <h1 className="text-white font-extrabold tracking-tighter leading-[1.05] text-[clamp(1.75rem,7vw,4rem)] mb-4 sm:mb-5 px-2">
            Learn How to Use the Most Simple, Easy, and Profitable AI Tools to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400"> Start and Scale Any Business</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-7 sm:mb-8 px-2">
            Free workshop — register now to save your spot before we sell out.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-2">
            <LiquidButton
              className="text-white border border-white/30 rounded-full w-full sm:w-auto text-sm sm:text-base"
              size="xl"
              onClick={() => setPopupOpen(true)}
            >
              🎟️ &nbsp;Register for Free — Save My Spot
            </LiquidButton>
          </div>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <p className="text-xs text-green-400">Registration is open — limited seats available</p>
          </div>
        </div>

        {/* ── SOCIAL PROOF ── */}
        <div className="w-full max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="border border-white/15 rounded-2xl bg-black/30 backdrop-blur-sm px-5 sm:px-8 py-6 text-center">
            <p className="text-white text-xl sm:text-2xl font-extrabold tracking-tight mb-1">Business owners already using these tools to grow faster</p>
            <p className="text-white/40 text-xs sm:text-sm mb-4">Trusted by 700+ users and counting</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Coaches", "Consultants", "Agency Owners", "Freelancers", "Founders", "Side Hustlers"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] sm:text-xs text-white/50"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHAT YOU'LL LEARN ── */}
        <div className="w-full max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-yellow-300 font-semibold mb-2">Inside the Free Workshop</p>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight px-2">
              Here&apos;s Exactly What You&apos;ll Learn
            </h2>
            <p className="text-white/40 text-xs sm:text-sm mt-2">Step-by-step, no fluff — just what works right now in 2025.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {LEARN_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 sm:p-5 hover:border-white/25 hover:bg-black/40 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-8 flex justify-center px-2">
            <LiquidButton
              className="text-white border border-white/30 rounded-full w-full sm:w-auto"
              size="xl"
              onClick={() => setPopupOpen(true)}
            >
              Yes, Reserve My Free Seat →
            </LiquidButton>
          </div>
        </div>

        {/* ── ARE YOU STRUGGLING ── */}
        <div className="w-full max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm px-5 sm:px-8 py-8 sm:py-10 text-center">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-semibold mb-3 sm:mb-4">Sound Familiar?</p>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-5 sm:mb-6">
              Are You Struggling to...
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8">
              {STRUGGLES.map((s) => (
                <div
                  key={s}
                  className="w-full sm:w-auto rounded-xl border border-red-500/25 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-300"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs sm:text-sm max-w-xl mx-auto mb-7 sm:mb-8 leading-relaxed px-2">
              You&apos;re not behind — you just haven&apos;t been shown the right path yet. This free workshop fixes that.
              We cut through the noise and show you the exact tools, workflows, and business models generating real revenue for real people — right now.
            </p>
            <div className="flex justify-center px-2">
              <LiquidButton
                className="text-white border border-white/30 rounded-full w-full sm:w-auto"
                size="xl"
                onClick={() => setPopupOpen(true)}
              >
                🎟️ &nbsp;I&apos;m Ready — Register for Free
              </LiquidButton>
            </div>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="text-white/20 text-xs text-center max-w-xs px-4">
          100% free. No credit card. Just show up and learn.
        </p>
      </div>
    </div>
  )
}
