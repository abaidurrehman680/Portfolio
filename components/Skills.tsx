"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
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
            Technical Skills
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="mt-14 space-y-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.03 }}
            >
              <h3 className="font-heading text-lg font-semibold text-indigo-300/90">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.02 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="cursor-default rounded-full border border-indigo-500/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-[0_0_20px_rgba(99,102,241,0.08)] backdrop-blur-sm transition-shadow hover:border-violet-500/45 hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] sm:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
