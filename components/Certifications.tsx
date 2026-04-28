"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-12" />

          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4 pt-2 [-webkit-overflow-scrolling:touch]">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex min-w-[260px] max-w-[280px] shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-[#111111]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/35 hover:shadow-[0_0_32px_rgba(139,92,246,0.15)] sm:min-w-[280px]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 text-indigo-300">
                  <Award className="h-5 w-5" />
                </div>
                <p className="mt-4 font-medium leading-snug text-zinc-100">
                  {c.name}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{c.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
