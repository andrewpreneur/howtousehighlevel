"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Paperclip,
  Sparkles,
  ChevronDown,
  Loader2,
  Zap,
} from "lucide-react";

interface AIMessage {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface AIChatInputProps {
  onSubmit?: (message: string) => Promise<string>;
  placeholder?: string;
  className?: string;
  showHistory?: boolean;
}

const EXAMPLE_PROMPTS = [
  "Build me a GHL pipeline for high-ticket coaching clients",
  "I need an automated follow-up sequence for my real estate leads",
  "Create a membership site with course delivery in GHL",
  "Set up a reputation management system for my local business",
];

// Simulated AI response generator
async function simulateAIResponse(userMessage: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));

  const lower = userMessage.toLowerCase();

  if (lower.includes("pipeline") || lower.includes("funnel")) {
    return `**Analyzing your pipeline needs...**\n\nBased on your request, I've identified **6 deliverables**:\n\n1. Custom pipeline stage configuration (3 stages)\n2. Automated trigger rules per stage\n3. Email + SMS sequence templates\n4. Opportunity value tracking setup\n5. Team notification workflow\n6. Dashboard reporting view\n\n**Estimated investment: $180**\nComparable agency price: $1,800+\n\nReady to post this to our Admin Bulletin?`;
  }

  if (lower.includes("follow") || lower.includes("sequence") || lower.includes("automation")) {
    return `**Strategy Assessment Complete**\n\nYour automated follow-up system needs **5 core components**:\n\n1. Lead capture webhook integration\n2. 7-touch email nurture sequence\n3. SMS re-engagement flow (3 messages)\n4. Behavioral trigger branching\n5. CRM tag management system\n\n**Estimated investment: $145**\nComparable agency price: $1,450+\n\nShall I generate your full project brief?`;
  }

  if (lower.includes("membership") || lower.includes("course")) {
    return `**Project Scoped Successfully**\n\nYour GHL membership build requires **8 deliverables**:\n\n1. Membership area configuration\n2. Course module structure (up to 10 modules)\n3. Drip content scheduling\n4. Payment integration + access control\n5. Onboarding automation sequence\n6. Progress tracking setup\n7. Community integration\n8. Mobile optimization\n\n**Estimated investment: $290**\nComparable agency price: $2,900+\n\nPost to bulletin now?`;
  }

  return `**Strategy First — Here's What I'm Seeing**\n\nAfter analyzing your request, I've identified the core components needed:\n\n1. Initial audit & strategy mapping\n2. Custom workflow architecture\n3. Integration configuration\n4. Testing & quality assurance\n5. Documentation & handoff\n\n**Estimated investment: $120–$250**\nComparable agency price: $1,200–$2,500+\n\nOur verified GHL admins can handle this end-to-end. Want to post it to the bulletin?`;
}

export const AIChatInput: React.FC<AIChatInputProps> = ({
  onSubmit,
  placeholder = "Describe what you need built in GHL...",
  className = "",
  showHistory = true,
}) => {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (messages.length > 0) scrollToBottom();
  }, [messages, scrollToBottom]);

  const autoResize = useCallback(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, []);

  useEffect(() => {
    autoResize();
  }, [input, autoResize]);

  const handleSubmit = async (message?: string) => {
    const text = (message || input).trim();
    if (!text || isLoading) return;

    const userMsg: AIMessage = { role: "user", content: text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setShowExamples(false);

    try {
      const response = onSubmit
        ? await onSubmit(text)
        : await simulateAIResponse(text);

      const aiMsg: AIMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-bold text-white mb-2">
            {line.slice(2, -2)}
          </p>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <p key={i} className="text-slate-300 text-sm flex gap-2 mb-1">
            <span className="text-cyan-400 font-mono">{line.split(".")[0]}.</span>
            {line.slice(line.indexOf(".") + 1)}
          </p>
        );
      }
      if (line.startsWith("**Estimated")) {
        return (
          <p key={i} className="text-cyan-400 font-semibold mt-3 mb-1 text-sm">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("Comparable")) {
        return (
          <p key={i} className="text-slate-500 text-xs mb-3 line-through">
            {line}
          </p>
        );
      }
      if (line === "") return <br key={i} />;
      return (
        <p key={i} className="text-slate-300 text-sm mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    });
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {/* Chat history */}
      {showHistory && messages.length > 0 && (
        <div
          ref={chatRef}
          className="mb-4 max-h-[400px] overflow-y-auto space-y-4 pr-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-purple-600/30 to-purple-800/30 border border-purple-500/30 text-white text-sm"
                    : "glass border border-white/10"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div>{formatContent(msg.content)}</div>
                ) : (
                  <p className="text-sm">{msg.content}</p>
                )}
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="glass border border-white/10 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span className="text-sm text-slate-400">Analyzing your project...</span>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input area */}
      <div className="relative">
        <div className="gradient-border">
          <div className="glass-strong rounded-2xl overflow-hidden relative z-10">
            {/* Examples dropdown */}
            <AnimatePresence>
              {showExamples && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-b border-white/10"
                >
                  <div className="p-3">
                    <p className="text-xs text-slate-500 mb-2 px-1">Try an example:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {EXAMPLE_PROMPTS.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setInput(prompt);
                            setShowExamples(false);
                            textareaRef.current?.focus();
                          }}
                          className="text-left text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2 transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Textarea */}
            <div className="flex items-end gap-2 p-4">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  rows={1}
                  className="w-full bg-transparent text-white placeholder-slate-500 text-sm resize-none outline-none leading-relaxed"
                  style={{ minHeight: "24px", maxHeight: "160px" }}
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Examples toggle */}
                <button
                  onClick={() => setShowExamples(!showExamples)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  title="See examples"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${showExamples ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Send button */}
                <motion.button
                  onClick={() => handleSubmit()}
                  disabled={!input.trim() || isLoading}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    input.trim() && !isLoading
                      ? "bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 text-slate-600"
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between px-4 pb-3">
              <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                <Zap className="w-3 h-3" />
                <span>AI-powered project scoping</span>
              </div>
              <span className="text-slate-600 text-xs">⏎ Send · ⇧⏎ New line</span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty state */}
      {messages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 flex flex-wrap gap-2 justify-center"
        >
          {EXAMPLE_PROMPTS.slice(0, 2).map((p, i) => (
            <button
              key={i}
              onClick={() => handleSubmit(p)}
              className="text-xs text-slate-400 hover:text-cyan-400 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/30 rounded-full px-4 py-2 transition-all"
            >
              {p}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
