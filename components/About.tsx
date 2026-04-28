"use client";

import { motion } from "framer-motion";
import { site, education } from "@/lib/content";

const stats = [
  { label: "2+ Years Experience", sub: "Shipping production apps" },
  { label: "3.89 CGPA", sub: "Academic excellence" },
  { label: "6 Major Projects", sub: "Mobile, web & desktop" },
  { label: "Live on Play Store", sub: "Real users, real scale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            About
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-6 text-zinc-400 leading-relaxed"
          >
            <p>{site.summary}</p>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-sm font-medium text-zinc-200">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                {education.university} · Class of {education.graduated}
              </p>
              <p className="mt-2 text-sm text-indigo-300/90">
                CGPA: {education.cgpa}
              </p>
            </div>
            <p className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {site.location}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111]/60 p-5 shadow-[0_0_0_1px_rgba(99,102,241,0)] backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(99,102,241,0.08),transparent_40%)]" />
                <p className="font-heading text-lg font-semibold text-white sm:text-xl">
                  {s.label}
                </p>
                <p className="mt-2 text-xs text-zinc-500">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
