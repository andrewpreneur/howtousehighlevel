"use client";

import React, { useId, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
  life: number;
  maxLife: number;
}

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
  speed?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.8,
  particleDensity = 120,
  particleColor = "#00F5FF",
  className = "",
  speed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const uid = useId();
  const canvasId = id || uid;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    });
    resizeObserver.observe(container);

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    function createParticle(): Particle {
      const maxLife = Math.random() * 200 + 100;
      return {
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random(),
        speed: Math.random() * speed + 0.1,
        direction: Math.random() * Math.PI * 2,
        life: Math.random() * maxLife,
        maxLife,
      };
    }

    function initParticles() {
      particlesRef.current = Array.from(
        { length: particleDensity },
        createParticle
      );
    }

    initParticles();

    function hexToRgb(hex: string) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 245, b: 255 };
    }

    const rgb = hexToRgb(particleColor);

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.life++;
        const lifeFraction = p.life / p.maxLife;
        const fade =
          lifeFraction < 0.2
            ? lifeFraction / 0.2
            : lifeFraction > 0.8
            ? (1 - lifeFraction) / 0.2
            : 1;

        p.opacity = fade * 0.8;
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed - 0.3;

        if (p.life >= p.maxLife || p.y < -10) {
          particlesRef.current[i] = createParticle();
          particlesRef.current[i].y = canvas.height + 10;
        }

        // Draw glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 3
        );
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.opacity})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        id={canvasId}
        style={{ background }}
        className="w-full h-full"
      />
    </div>
  );
};

interface SparklesTitleProps {
  children: React.ReactNode;
  className?: string;
  sparkleColor?: string;
  particleDensity?: number;
}

export const SparklesTitle: React.FC<SparklesTitleProps> = ({
  children,
  className = "",
  sparkleColor = "#00F5FF",
  particleDensity = 80,
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <SparklesCore
        particleColor={sparkleColor}
        particleDensity={particleDensity}
        minSize={0.4}
        maxSize={1.2}
        speed={0.3}
      />
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </div>
  );
};
