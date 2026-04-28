"use client";

import { motion } from "framer-motion";

const orbs = [
  { className: "left-[10%] top-[20%] h-[420px] w-[420px] bg-indigo-500/25 blur-[100px]", delay: 0 },
  { className: "right-[5%] top-[10%] h-[380px] w-[380px] bg-violet-500/20 blur-[90px]", delay: 1.2 },
  { className: "left-[30%] bottom-[5%] h-[320px] w-[320px] bg-fuchsia-500/15 blur-[80px]", delay: 2.4 },
];

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.22),transparent)]" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.className}`}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      <Particles />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 13) % 100}%`,
    top: `${(i * 23 + 7) % 100}%`,
    size: 1 + (i % 3),
    duration: 12 + (i % 8),
    delay: (i % 5) * 0.4,
  }));

  return (
    <div className="absolute inset-0 opacity-[0.35]">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-white"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
          }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -12, 0] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
