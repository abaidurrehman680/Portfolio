"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="relative mt-14">
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent sm:left-5" />

          <ul className="space-y-12">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.duration}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-indigo-500/40 bg-[#111111] text-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.35)] sm:left-3 sm:h-8 sm:w-8">
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>

                <div className="rounded-2xl border border-white/[0.08] bg-[#111111]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-300/90">
                        {job.role}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                      {job.duration}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-zinc-400">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
